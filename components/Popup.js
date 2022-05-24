import React, { useState } from 'react'
import { words } from '../utiils/data'
import { useActive } from './hooks/useActive';

const Popup = ({ isPopup, setIsPopup }) => {
    
    const active = useActive(1000)

    var items = [...words];
    const renderWords = items.map(function (item) {
        return <span>{item}</span>;
    });


    return (
        isPopup && 
        <div className="words-wrapper">
            <div className="words-content">
            <div onClick={() => setIsPopup(false)} className="absolute top-0 right-2 font-bold cursor-pointer text-2xl">x</div>

                <h1 className="popup-heading"> <span className="animate-pulse">&#8505;</span> Hidden here is a word that matches the name of a place on this page,
                    find the word on the crosswords, and click on it on the page to reveal the path to the secret lair...</h1>
                <div className="words">
                    {renderWords}
                </div>
                <div className={active ? 'text-green-500' : 'text-red-500'}>
                    {active ? 'User is Active' : 'User is Inactive'}
                </div>
            </div>
        </div>
    )
}

export default Popup