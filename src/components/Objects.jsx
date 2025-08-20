import React from 'react';
import Ruler from './Ruler.jsx'

// 5 inches
const Letter = ({ events = {} }) => {
    return (
        <div {...events} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" style={{ width: 100, height: 60 }}>
            <div className="absolute" style={{ inset: 0, backgroundColor: '#ffffff', border: '2px solid #e5e7eb', borderRadius: 8, boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}></div>
            <div className="absolute" style={{ top: 0, left: 0, right: 0, height: 34, pointerEvents: 'none' }}>
                <svg width="100%" height="100%" viewBox="0 0 90 34" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4" y1="2" x2="45" y2="30" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" />
                    <line x1="86" y1="2" x2="45" y2="30" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    )
}

// 3 inches
const ColorCube = ({ events = {} }) => {
    return (
        <div {...events} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" style={{ width: 60, height: 60, backgroundColor: '#2d3436', borderRadius: 8, padding: 4 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: 3, width: '100%', height: '100%' }}>
                {['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#FFFFFF', '#e67e22', '#FFFFFF', '#e74c3c', '#3498db'].map((color, index) => (
                    <div key={index} style={{ backgroundColor: color, borderRadius: 3 }}></div>
                ))}
            </div>
        </div>
    )
}

// 8 inches
const Football = ({ events = {} }) => {
    return (
        <div {...events} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" style={{ width: 220, height: 140 }}>
            <svg width="100%" height="100%" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="fb-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#9a5d2e" />
                        <stop offset="100%" stopColor="#7a4520" />
                    </linearGradient>
                </defs>
                {/* Body (taller with gently pointed ends) */}
                <path d="M10,45 C22,8 98,8 110,45 C98,82 22,82 10,45 Z" fill="url(#fb-grad)" stroke="#5a3114" strokeWidth="2" />
                {/* End stripes */}
                <path d="M24,28 Q20,45 24,62" stroke="#e5e7eb" strokeWidth="6" strokeLinecap="round" />
                <path d="M96,28 Q100,45 96,62" stroke="#e5e7eb" strokeWidth="6" strokeLinecap="round" />
                {/* Laces */}
                <line x1="42" y1="45" x2="78" y2="45" stroke="#e5e7eb" strokeWidth="4" strokeLinecap="round" />
                <line x1="46" y1="38" x2="46" y2="52" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="38" x2="50" y2="52" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
                <line x1="54" y1="38" x2="54" y2="52" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
                <line x1="58" y1="38" x2="58" y2="52" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
                <line x1="62" y1="38" x2="62" y2="52" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
                <line x1="66" y1="38" x2="66" y2="52" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
                <line x1="70" y1="38" x2="70" y2="52" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
                <line x1="74" y1="38" x2="74" y2="52" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
            </svg>
        </div>
    )
}

// 10 inches
const Book = ({ events = {} }) => {
    return (
        <div {...events} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" style={{ width: 200, height: 120 }}>
            <div className='w-full h-full bg-red-500 rounded-sm shadow-md flex flex-row items-center justify-center' >
                <div className='w-[40%] h-[90%] bg-white rounded-sm shadow-md flex flex-col items-center justify-between' >
                    <div className='mt-2 w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='mb-2 w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                </div>
                <div className='w-[40%] h-[90%] bg-white rounded-sm shadow-md flex flex-col items-center justify-between' >
                    <div className='mt-2 w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                    <div className='mb-2 w-[90%] h-[1%] bg-gray-500 rounded-sm shadow-md' ></div>
                </div>
            </div>
        </div>
    )
}

// 7 inches
const Pencil = ({ events = {} }) => {
    return (
        <div {...events} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" style={{ width: 140, height: 7 }}>
            <svg width="100%" height="100%" viewBox="0 0 140 10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                {/* Eraser (rounded left corners only, halved width) */}
                <path d="M0,2 A2,2 0 0 1 2,0 L7,0 L7,10 L2,10 A2,2 0 0 1 0,8 Z" fill="#f9a8d4" />
                {/* Ferrule (metal) */}
                <rect x="7" y="0" width="10" height="10" fill="#9ca3af" />
                <rect x="9" y="0" width="1" height="10" fill="#e5e7eb" opacity="0.8" />
                <rect x="12" y="0" width="1" height="10" fill="#6b7280" opacity="0.6" />
                <rect x="15" y="0" width="1" height="10" fill="#e5e7eb" opacity="0.8" />
                {/* Pencil body */}
                <rect x="17" y="0" width="109" height="10" fill="#facc15" />
                <rect x="17" y="0" width="109" height="10" fill="none" stroke="#d97706" strokeWidth="0.5" />
                {/* Wood tip */}
                <polygon points="126,0 136,5 126,10" fill="#e9c8a2" />
                {/* Graphite point (short; overlaps starting near rightmost of wood) */}
                <polygon points="134,4 140,5 134,6" fill="#111827" />
            </svg>
        </div>
    )
}

// 4 inches
const Apple = ({ events = {} }) => {
    return (
        <div {...events} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" style={{ width: 80, height: 80 }}>
            <svg width="100%" height="100%" viewBox="0 0 60 60">
                {/* Apple body (two overlapping lobes, slightly taller) */}
                <ellipse cx="22" cy="34" rx="20" ry="24" fill="#ef4444" />
                <ellipse cx="38" cy="34" rx="20" ry="24" fill="#ef4444" />
                {/* Stem */}
                <rect x="28" y="8" width="4" height="10" rx="2" fill="#8B5E3C" />
                {/* Leaf */}
                <ellipse cx="42" cy="12" rx="8" ry="4.5" fill="#10b981" transform="rotate(-25 42 12)" />
                {/* Highlight */}
                <circle cx="18" cy="28" r="5.5" fill="#ffffff" opacity="0.22" />
            </svg>
        </div>
    )
}

// 6 inches
const FishBowl = ({ events = {} }) => {
    return (
        <div {...events} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer" style={{ width: 120, height: 120 }}>
            <svg width="100%" height="100%" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="bowlClip">
                        <path d="M2,22 L118,22 C122,32 116,92 78,112 L42,112 C4,92  -2,32 2,22 Z" />
                    </clipPath>
                    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
                    </linearGradient>
                </defs>

                {/* Water inside bowl, clipped to interior; spans full width at the bulge */}
                <g clipPath="url(#bowlClip)">
                    <path d="M0,62 C20,58 40,66 60,62 C80,58 100,66 120,62 L120,120 L0,120 Z" fill="url(#waterGrad)" />
                    {/* Bubbles */}
                    <circle cx="38" cy="84" r="2" fill="#e0f2fe" opacity="0.85" />
                    <circle cx="50" cy="92" r="1.6" fill="#e0f2fe" opacity="0.75" />
                    <circle cx="76" cy="86" r="1.8" fill="#e0f2fe" opacity="0.8" />

                    {/* Fish */}
                    <g>
                        {/* Tail (flipped, shifted left) */}
                        <polygon points="58,90 49,84 49,96" fill="#fb923c" />
                        {/* Body */}
                        <ellipse cx="70" cy="90" rx="18" ry="10" fill="#f97316" />
                        {/* Fin */}
                        <path d="M60 88 C58 92, 58 94, 64 92" fill="#fb923c" />
                        {/* Eye */}
                        <circle cx="78" cy="87" r="2.2" fill="#ffffff" />
                        <circle cx="78.8" cy="87" r="1.1" fill="#111827" />
                    </g>
                </g>

                {/* Glass body outline (near-circular bulge, small flat bottom, wide opening) */}
                <path d="M2,22 L118,22 C122,32 116,92 78,112 L42,112 C4,92 -2,32 2,22 Z" fill="none" stroke="#93c5fd" strokeWidth="2" />

                {/* Top rim (opening) */}
                <path d="M2,22 L118,22" fill="none" stroke="#bfdbfe" strokeWidth="4" strokeLinecap="round" />

                {/* Glass highlights */}
                <path d="M16,34 C10,48 12,72 26,90" stroke="#e0f2fe" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85" />
                <path d="M98,38 C106,52 106,68 96,82" stroke="#e0f2fe" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.6" />
            </svg>
        </div>
    )
}


// Catalog mapping object keys to their inches and component
const objectCatalog = {
    Letter: { inches: 5, Component: Letter },
    ColorCube: { inches: 3, Component: ColorCube },
    Football: { inches: 8, Component: Football },
    Book: { inches: 10, Component: Book },
    Pencil: { inches: 7, Component: Pencil },
    Apple: { inches: 4, Component: Apple },
    FishBowl: { inches: 6, Component: FishBowl },
};

const ObjectCarousel = ({ objects, setObjects, setAnswer, setFlexiMessage, onObjectClick }) => {
    const [index, setIndex] = React.useState(0);
    const [selectedKeys, setSelectedKeys] = React.useState([]);
    const [answerSet, setAnswerSet] = React.useState(false);
    const [isRulerDragging, setIsRulerDragging] = React.useState(false);
    const objectHostRef = React.useRef(null);

    // Initialize with 3 random unique objects and store dictionary of inches in parent
    React.useEffect(() => {
        if (!selectedKeys.length) {
            const allKeys = Object.keys(objectCatalog);
            for (let i = allKeys.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [allKeys[i], allKeys[j]] = [allKeys[j], allKeys[i]];
            }
            const picked = allKeys.slice(0, 3);
            setSelectedKeys(picked);
            if (typeof setObjects === 'function') {
                const dict = {};
                picked.forEach((key) => {
                    dict[key] = objectCatalog[key].inches;
                });
                setObjects(dict);
            }
            if (typeof setAnswer === 'function' && picked.length) {
                const r = Math.floor(Math.random() * picked.length);
                const chosenKey = picked[r];
                setAnswer(objectCatalog[chosenKey].inches);
                setAnswerSet(true);
            }
        }
    }, [selectedKeys.length, setObjects, setAnswer]);

    // If parent already has objects dictionary, sync our selected keys from it
    React.useEffect(() => {
        if (objects && Object.keys(objects).length === 3) {
            const keys = Object.keys(objects);
            setSelectedKeys(keys);
            if (index >= keys.length) setIndex(0);
            if (!answerSet && typeof setAnswer === 'function') {
                const r = Math.floor(Math.random() * keys.length);
                const chosenKey = keys[r];
                setAnswer(objectCatalog[chosenKey].inches);
                setAnswerSet(true);
            }
        }
    }, [objects, index, setAnswer, answerSet]);

    const components = selectedKeys.map((key) => objectCatalog[key]?.Component).filter(Boolean);

    const goPrev = () => setIndex((prev) => (components.length ? (prev - 1 + components.length) % components.length : 0));
    const goNext = () => setIndex((prev) => (components.length ? (prev + 1) % components.length : 0));

    const Current = components[components.length ? index : 0];
    const rootEvents = React.useMemo(() => ({
        onMouseEnter: () => {
            if (!isRulerDragging && typeof setFlexiMessage === 'function') {
                setFlexiMessage('Is this it?');
            }
        },
        onMouseLeave: () => {
            if (typeof setFlexiMessage === 'function') {
                setFlexiMessage(undefined);
            }
        },
        onClick: () => {
            if (isRulerDragging) return;
            if (!components.length) return;
            const key = selectedKeys[index];
            const inches = objectCatalog[key]?.inches;
            if (typeof onObjectClick === 'function') {
                onObjectClick(key, inches);
            }
        },
        role: 'button',
        tabIndex: 0,
        'aria-label': 'object',
    }), [isRulerDragging, setFlexiMessage, onObjectClick, components.length, selectedKeys, index]);

    const stopAll = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center z-[100] overflow-hidden">
            <button
                aria-label="Previous"
                onClick={goPrev}
                onPointerDown={stopAll}
                onMouseDown={stopAll}
                onTouchStart={stopAll}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-[75%] flex items-center justify-center rounded-md bg-[#008545]/20 text-[#008545] hover:bg-[#008545]/30 z-[110] pointer-events-auto shadow-md"
                disabled={!components.length}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
            </button>

            <div ref={objectHostRef} className="relative w-full h-full pointer-events-auto z-[50]">
                {components.length ? <Current events={rootEvents} /> : null}
            </div>

            <div className='absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end justify-center w-[200%] h-[100%] pointer-events-none z-[200]'>
                <Ruler className="pointer-events-auto" draggable={true} onDragStart={() => setIsRulerDragging(true)} onDragEnd={() => setIsRulerDragging(false)} />
            </div>

            <button
                aria-label="Next"
                onClick={goNext}
                onPointerDown={stopAll}
                onMouseDown={stopAll}
                onTouchStart={stopAll}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-[75%] flex items-center justify-center rounded-md bg-[#008545]/20 text-[#008545] hover:bg-[#008545]/30 z-[110] pointer-events-auto shadow-md"
                disabled={!components.length}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </button>
        </div>
    );
}

export default ObjectCarousel;