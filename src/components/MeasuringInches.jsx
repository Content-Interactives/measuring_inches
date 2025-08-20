import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

// UI Components Imports
import { Container } from './ui/reused-ui/Container.jsx'
import ObjectCarousel from './Objects.jsx'

// Assets Imports
import Flexi_Faceplant from './assets/flexi_faceplant.png'
import Flexi_Excited from './assets/flexi_excited.png'
import Flexi_Hello from './assets/flexi_hello.png'
import Flexi_Hey from './assets/flexi_hey.png'
import Flexi_Stars from './assets/flexi_stars.png'
import Flexi_ThumbsUp from './assets/flexi_thumbsup.png'
import Flexi_Confused from './assets/flexi_confused.png'

const placedItems = () => {
    // Simple shuffle
    const shuffled = [...OBJECT_CATALOG];
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Choose up to 4 and assign positions (percent-based)
    const positions = [
        { left: 22, top: 34 },
        { left: 22, top: 56 },
        { left: 78, top: 54 },
        { left: 78, top: 34 },
    ];

    return shuffled.slice(0, 4).map((item, index) => ({
        ...item,
        position: positions[index] || { left: 10 + index * 15, top: 10 + index * 18 },
    }));
}

const MeasuringInches = () => {

	return (
        <Container 
                text="Measuring Inches"
                showResetButton={false}
                borderColor="#FF7B00"
                showSoundButton={true}
                onSound={null}
        >
            <div className='h-[100%] min-h-0 flex flex-col items-stretch'>
                <div className='w-full text-center text-sm text-gray-500 p-5 pb-0'>
                    Flexi needs your help to find what he's looking for! Measure the objects to find the right length that Flexi remembers the item being!
                </div>

                <div className="w-[100%] flex-1 min-h-0 z-20">
                    <ObjectCarousel />
                </div>

                <div className='relative w-[100%] ml-[-3%] flex flex-row items-center gap-3'>
                    <img 
                        src={Flexi_Confused} 
                        alt="Flexi Confused" 
                        className='w-[70px] ml-[5%] mt-0' 
                        />
                    <div className='text-[#FF7B00] font-extrabold text-sm'>
                        I'm looking for something that is about 3 inches long. Can you help me find it?
                    </div>
                </div>
            </div>
        </Container>
)
};


export default MeasuringInches;