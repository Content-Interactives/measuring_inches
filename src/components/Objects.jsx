import React from 'react';

const Apple = () => {
    return (
        <div className="rounded-full relative" style={{ width: 62, height: 62, backgroundColor: '#ef4444' }}>
            {/* Stem */}
            <div className="absolute" style={{ top: '-6%', left: '48%', width: 6, height: 14, backgroundColor: '#7c4a2d', borderRadius: 3, transform: 'rotate(-10deg)' }}></div>
            {/* Leaf */}
            <div className="absolute" style={{ top: '-4%', left: '55%', width: 18, height: 12, backgroundColor: '#22c55e', borderRadius: '9999px', transform: 'rotate(15deg)' }}></div>
            {/* Highlight */}
            <div className="absolute" style={{ top: '18%', left: '22%', width: 16, height: 16, backgroundColor: '#fecaca', borderRadius: '9999px', opacity: 0.55 }}></div>
        </div>
    )
}

const Letter = () => {
    return (
        <div className="relative" style={{ width: 90, height: 50 }}>
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
        <div className="relative" style={{ width: 76, height: 76, backgroundColor: '#2d3436', borderRadius: 8, padding: 4 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: 3, width: '100%', height: '100%' }}>
                {['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#FFFFFF', '#e67e22', '#FFFFFF', '#e74c3c', '#3498db'].map((color, index) => (
                    <div key={index} style={{ backgroundColor: color, borderRadius: 3 }}></div>
                ))}
            </div>
        </div>
    )
}

const TennisBall = () => {
    return (
        <div>
            
        </div>
    )
}

const Book = () => {
    return (
        <div>
            
        </div>
    )
}

const Objects = [Apple, Letter, ColorCube, TennisBall, Book]

export default Objects;