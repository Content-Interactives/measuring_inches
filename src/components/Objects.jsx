import React from 'react';
import Ruler from './Ruler.jsx'

const Letter = () => {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" style={{ width: 100, height: 60 }}>
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

const ColorCube = () => {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" style={{ width: 60, height: 60, backgroundColor: '#2d3436', borderRadius: 8, padding: 4 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: 3, width: '100%', height: '100%' }}>
                {['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#FFFFFF', '#e67e22', '#FFFFFF', '#e74c3c', '#3498db'].map((color, index) => (
                    <div key={index} style={{ backgroundColor: color, borderRadius: 3 }}></div>
                ))}
            </div>
        </div>
    )
}

const Football = () => {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" style={{ width: 220, height: 140 }}>
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

const Book = () => {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" style={{ width: 120, height: 80 }}>
            <svg width="100%" height="100%" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="8" width="108" height="64" rx="6" fill="#f3f4f6" stroke="#d1d5db" />
                <path d="M12 12 H58 V68 H12" fill="#fff" stroke="#e5e7eb" />
                <path d="M62 12 H108 V68 H62" fill="#fff" stroke="#e5e7eb" />
                <line x1="60" y1="12" x2="60" y2="68" stroke="#d1d5db" />
                <line x1="22" y1="22" x2="48" y2="22" stroke="#e5e7eb" />
                <line x1="22" y1="30" x2="48" y2="30" stroke="#e5e7eb" />
                <line x1="22" y1="38" x2="48" y2="38" stroke="#e5e7eb" />
                <line x1="74" y1="22" x2="100" y2="22" stroke="#e5e7eb" />
                <line x1="74" y1="30" x2="100" y2="30" stroke="#e5e7eb" />
                <line x1="74" y1="38" x2="100" y2="38" stroke="#e5e7eb" />
            </svg>
        </div>
    )
}

const ObjectCarousel = () => {
    const components = [Letter, ColorCube, Football, Book];
    const [index, setIndex] = React.useState(0);

    const goPrev = () => setIndex((prev) => (prev - 1 + components.length) % components.length);
    const goNext = () => setIndex((prev) => (prev + 1) % components.length);

    const Current = components[index];

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
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#008545]/20 text-[#008545] hover:bg-[#008545]/30 z-[110] pointer-events-auto"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
            </button>

            <div className="relative w-full h-full pointer-events-none z-0">
                <Current />
            </div>

            <div className='absolute left-1/2 -translate-x-1/2 bottom-0 flex items-end justify-center w-[200%] h-[100%] pointer-events-auto z-10'>
                <Ruler draggable={true} />
            </div>

            <button
                aria-label="Next"
                onClick={goNext}
                onPointerDown={stopAll}
                onMouseDown={stopAll}
                onTouchStart={stopAll}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#008545]/20 text-[#008545] hover:bg-[#008545]/30 z-[110] pointer-events-auto"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </button>
        </div>
    );
}

export default ObjectCarousel;