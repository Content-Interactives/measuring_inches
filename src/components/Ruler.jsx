import React from 'react';

export const PIXELS_PER_INCH = 20;

/**
 * Horizontal ruler component.
 * - 1 inch = 20px by default (configurable via pixelsPerInch)
 * - Shows ticks at every 0.25", 0.5", and 1" with numeric inch labels
 */
const Ruler = ({
	className = '',
	inches = 12,
	pixelsPerInch = PIXELS_PER_INCH,
	height = 48,
	backgroundColor = '#fff3c4',
	lineColor = '#7c5a00',
	labelColor = '#7c5a00',
	showLabels = true,
	// L/R padding in inches to keep labels from running off the edges
	sidePaddingInches = 0.5,
	// Drag configuration
	draggable = true,
	initialX = 0,
	initialY = 0,
	constrainToParent = true,
	barrierPadding = 4,
	onDragStart,
	onDrag,
	onDragEnd,
}) => {
	const contentWidthPx = inches * pixelsPerInch;
	const backgroundWidthPx = contentWidthPx + 2; // ensure the far-right tick fits within the background
	const quarterInchPx = pixelsPerInch / 4;

	// Drag state and handlers
	const containerRef = React.useRef(null);
	const [position, setPosition] = React.useState({ x: initialX, y: initialY });
	const [isDragging, setIsDragging] = React.useState(false);
	const dragStartRef = React.useRef({ pointerId: null, x: 0, y: 0, startX: 0, startY: 0, minDx: -Infinity, maxDx: Infinity, minDy: -Infinity, maxDy: Infinity });

	const handlePointerDown = (e) => {
		if (!draggable) return;
		setIsDragging(true);

		const element = containerRef.current;
		const parent = element ? element.parentElement : null;
		const elementRect = element ? element.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
		const parentRect = parent ? parent.getBoundingClientRect() : { left: -Infinity, top: -Infinity, right: Infinity, bottom: Infinity };

		let minDx = -Infinity, maxDx = Infinity, minDy = -Infinity, maxDy = Infinity;
		if (constrainToParent) {
			const allowedLeftMin = parentRect.left + barrierPadding;
			const allowedLeftMax = parentRect.right - barrierPadding - elementRect.width;
			const allowedTopMin = parentRect.top + barrierPadding;
			const allowedTopMax = parentRect.bottom - barrierPadding - elementRect.height;

			minDx = allowedLeftMin - elementRect.left;
			maxDx = allowedLeftMax - elementRect.left;
			minDy = allowedTopMin - elementRect.top;
			maxDy = allowedTopMax - elementRect.top;

			if (maxDx < minDx) { minDx = 0; maxDx = 0; }
			if (maxDy < minDy) { minDy = 0; maxDy = 0; }
		}

		dragStartRef.current = {
			pointerId: e.pointerId,
			x: e.clientX,
			y: e.clientY,
			startX: position.x,
			startY: position.y,
			minDx,
			maxDx,
			minDy,
			maxDy,
		};
		try { containerRef.current && containerRef.current.setPointerCapture(e.pointerId); } catch {}
		onDragStart && onDragStart({ x: position.x, y: position.y, event: e });
	};

	const handlePointerMove = (e) => {
		if (!isDragging) return;
		let dx = e.clientX - dragStartRef.current.x;
		let dy = e.clientY - dragStartRef.current.y;
		if (constrainToParent) {
			dx = Math.min(Math.max(dx, dragStartRef.current.minDx), dragStartRef.current.maxDx);
			dy = Math.min(Math.max(dy, dragStartRef.current.minDy), dragStartRef.current.maxDy);
		}
		const next = { x: dragStartRef.current.startX + dx, y: dragStartRef.current.startY + dy };
		setPosition(next);
		onDrag && onDrag({ x: next.x, y: next.y, event: e });
	};

	const endDrag = (e) => {
		if (!isDragging) return;
		setIsDragging(false);
		try { containerRef.current && containerRef.current.releasePointerCapture(dragStartRef.current.pointerId); } catch {}
		onDragEnd && onDragEnd({ x: position.x, y: position.y, event: e });
	};

	const ticks = [];
	const totalQuarters = Math.round(inches * 4);
	const fullInchTickHeight = Math.max(20, Math.round(height * 0.55));
	const halfInchTickHeight = Math.max(14, Math.round(height * 0.35));
	const quarterInchTickHeight = Math.max(8, Math.round(height * 0.22));
	const sidePaddingPx = Math.max(8, sidePaddingInches * pixelsPerInch);

	for (let qIndex = 0; qIndex <= totalQuarters; qIndex += 1) {
		const positionLeft = qIndex * quarterInchPx;
		const isFullInch = qIndex % 4 === 0;
		const isHalfInch = qIndex % 2 === 0 && !isFullInch;

		const tickHeight = isFullInch ? fullInchTickHeight : isHalfInch ? halfInchTickHeight : quarterInchTickHeight;

		ticks.push(
			<div
				key={`tick-${qIndex}`}
				style={{
					position: 'absolute',
					left: positionLeft,
					top: 0,
					width: 1,
					height: tickHeight,
					backgroundColor: lineColor,
				}}
			/>
		);
	}

	const labels = [];
	if (showLabels) {
		for (let inchIndex = 0; inchIndex <= inches; inchIndex += 1) {
			const positionLeft = inchIndex * pixelsPerInch;
			const isFirst = inchIndex === 0;
			const isLast = inchIndex === inches;
			const translateX = isFirst ? '0%' : isLast ? '-100%' : '-50%';
			const textAlign = isFirst ? 'left' : isLast ? 'right' : 'center';
			labels.push(
				<div
					key={`label-${inchIndex}`}
					style={{
						position: 'absolute',
						left: positionLeft,
						top: fullInchTickHeight + 2,
						transform: `translateX(${translateX})`,
						fontSize: 10,
						color: labelColor,
						userSelect: 'none',
						textAlign,
					}}
				>
					{inchIndex}
				</div>
			);
		}
	}

	return (
		<div
			ref={containerRef}
			className={`ruler ${className}`}
			style={{
				position: 'relative',
				width: backgroundWidthPx,
				height,
				backgroundColor,
				border: `1px solid ${lineColor}20`,
				borderRadius: '0 0 6px 6px',
				boxShadow: 'inset 0 12px 0 0 rgba(0,0,0,0.02)',
				paddingLeft: sidePaddingPx,
				paddingRight: sidePaddingPx,
				transform: `translate(${position.x}px, ${position.y}px)`,
				cursor: draggable ? (isDragging ? 'grabbing' : 'grab') : 'default',
				touchAction: 'none',
			}}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={endDrag}
			onPointerCancel={endDrag}
		>
			{/* Baseline */}
			<div
				style={{
					position: 'absolute',
					left: 0,
					width: contentWidthPx,
					top: 0,
					height: 1,
					backgroundColor: lineColor,
				}}
			/>
			{/* Ticks */}
			{ticks}
			{/* Labels */}
			{labels}
		</div>
	);
};

export default Ruler;


