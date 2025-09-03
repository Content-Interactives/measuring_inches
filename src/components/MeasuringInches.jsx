import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import audio from './Measure Objects Audio.mp3';

// UI Components Imports
import { Container } from './ui/reused-ui/Container.jsx'
import ObjectCarousel from './Objects.jsx'

// Assets Imports
import Flexi_Stars from './assets/flexi_stars.png'
import Flexi_Confused from './assets/flexi_confused.png'
import Flexi_Wave from './assets/flexi_wave.png'

const MeasuringInches = () => {
    // State Management
    const [objects, setObjects] = useState();
    const [answer, setAnswer] = useState();
    const [flexiMessage, setFlexiMessage] = useState();
    const [flexiImg, setFlexiImg] = useState(Flexi_Wave);
    const [messageLockedUntil, setMessageLockedUntil] = useState(0);
    const [round, setRound] = useState(0);
    const isConfused = flexiImg === Flexi_Confused;
    const audioRef = useRef(new Audio(audio));

    const setFlexiMessageGuarded = (msg) => {
        if (Date.now() < messageLockedUntil) return;
        setFlexiMessage(msg);
    };

    const handleObjectClick = (key, inches) => {
        if (answer == null) return;
        if (inches !== answer) {
            setFlexiImg(Flexi_Confused);
            return;
        }
        // Correct answer: show stars and fire confetti for 3 seconds and lock celebratory message
        setFlexiImg(Flexi_Stars);
        const successMessages = [
            "That's the one!",
            'Thanks for finding it!',
            'You got it!',
            'Perfect! I was looking for that!',
            'Exactly! That\'s it!'
        ];
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 300 };
        const randomInRange = (min, max) => Math.random() * (max - min) + min;
        const celebrationMsg = successMessages[Math.floor(Math.random() * successMessages.length)];
        setFlexiMessage(celebrationMsg);
        setMessageLockedUntil(animationEnd);
        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
                clearInterval(interval);
                return;
            }
            const particleCount = Math.round(50 * (timeLeft / duration));
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
        setTimeout(() => {
            setMessageLockedUntil(0);
            setFlexiMessage(undefined);
            setFlexiImg(Flexi_Wave);
            setObjects(undefined);
            setAnswer(undefined);
            setRound((r) => r + 1);
        }, duration);
    };

    const handleSoundClick = () => {
        audioRef.current.currentTime = 0; // Reset to beginning
        audioRef.current.play()
    };
    
	return (
        <Container 
                text="Measuring Inches"
                showResetButton={false}
                borderColor="#FF7B00"
                showSoundButton={true}
                onSound={handleSoundClick}
        >
            <div className='h-[100%] min-h-0 flex flex-col items-stretch'>
                <div className='w-full text-center text-sm text-gray-500 p-5 pb-0'>
                    Flexi needs your help to find what he's looking for! Measure the objects to find the right length that Flexi remembers the item being!
                </div>

                <div className="w-[100%] flex-1 min-h-0 z-20">
                    <ObjectCarousel key={round} objects={objects} setObjects={setObjects} setAnswer={setAnswer} setFlexiMessage={setFlexiMessageGuarded} onObjectClick={handleObjectClick} />
                </div>

                <div className='relative w-[100%] h-[100px] ml-[-2%] flex flex-row items-center gap-3'>
                    <img 
                        src={flexiImg} 
                        alt="Flexi Wave" 
                        className={`${isConfused ? 'w-[56px]' : 'w-[70px]'} ml-[5%] mt-0`} 
                        />
                    <div className='text-[#FF7B00] font-extrabold text-sm'>
                        {flexiMessage ?? `I'm looking for something that is about ${answer ?? '...'} inches long. Can you help me find it?`}
                    </div>
                </div>
            </div>
        </Container>
)
};


export default MeasuringInches;