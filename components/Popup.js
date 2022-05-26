import React, { useEffect, useRef } from 'react'
import { modalVariants } from '../utiils/Animations';
import { words } from '../utiils/data'
import { useActive } from './hooks/useActive';
import { AnimatePresence, motion } from 'framer-motion';


const Popup = ({ isPopup, setIsPopup }) => {
    const modalRef = useRef()

    useEffect(() => { document.body.addEventListener('mousedown', handleClickOutside) })
    const handleClickOutside = (event) => {
        modalRef.current && !modalRef.current.contains(event.target) && setIsPopup(false)
    };

    const active = useActive(1000)

    var items = [...words];
    const renderWords = items.map(function (item) {
        return <span>{item}</span>;
    });


    return (
        <AnimatePresence>
            {isPopup &&
                <div className="words-wrapper">
                    <motion.div
                        className="words-content"
                        variants={modalVariants}
                        initial="initial"
                        animate="final"
                        exit="exit"
                        ref={modalRef}
                    >
                        <div onClick={() => setIsPopup(false)} className="absolute top-0 right-2 font-bold cursor-pointer text-2xl">x</div>

                        <h1 className="popup-heading"> <span className="animate-pulse">i</span> Hidden here is a word that matches the name of a place on this page,
                            find the word on the crosswords, and click on it on the page to reveal the path to the secret lair...</h1>
                        <div className="words">
                            {renderWords}
                        </div>
                        <div className={active ? 'text-green-500' : 'text-red-500'}>
                            {active ? 'user is active' : 'user is inactive'}
                        </div>
                    </motion.div>
                </div>
            }
        </AnimatePresence>

    )
}

export default Popup