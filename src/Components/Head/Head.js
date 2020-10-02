import React from 'react';
import './Head.css';
import Typewriter from 'typewriter-effect';

const Head = () => {
    return(
        <div className='home'>
            <div className='type'>
                        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('I Like K-Drama')
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(1200)
                .deleteChars(12)
                .callFunction(() => {
                    console.log('All strings were deleted');
                })
                typewriter.typeString('Love K-Drama')
                .start();
                
                
            }}
            
        
            />
            </div>
        </div>
    );
}

export default Head;