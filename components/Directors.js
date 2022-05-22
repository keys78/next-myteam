import { useState } from "react";
import { directors } from "../utiils/data";

const Directors = () => {
    const [isActive, setIsActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState()

    const toggleOpen = (i) => {
        activeIndex === i ? setActiveIndex('') : setActiveIndex(i)
        setIsActive(!isActive)
    }

    const renderDirectors = directors && directors.map((val, i) => (
        <div key={i} className="single-director-wrapper">
            {activeIndex !== i  &&
                <div className="single-director">
                    <img src={val.icon} alt="person" />
                    <h1>{val.name}</h1>
                    <h2>{val.rank}</h2>
                </div>
            }
            {activeIndex === i  &&
                <div className="dir-quote">
                    <h1>{val.name}</h1>
                    <p>{val.quote}</p>
                    <div className="flex items-center justify-center space-x-4 pt-6">
                        <img className="cursor-pointer" src="/images/icon-twitter.svg" alt="twitter" />
                        <img className="cursor-pointer" src="/images/icon-linkedin.svg" alt="linkedin" />
                    </div>
                </div>
            }
            <div onClick={() => toggleOpen(i)} className={`dir-toggle ${activeIndex === i ? 'lightCoral' : 'robin'}`}>
                <svg className={activeIndex === i ? 'rotate-dir' : 'undo-rotate'} xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16"><path fill={activeIndex === i ? '#fff' : '#012F34'} fillRule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z" />
                </svg>
            </div>
        </div>
    ))

    return (
        <div>
            <h1 className="text-4xl text-center pb-10 font-bold ">Meet the directors</h1>
            <div className='dir-wrapper'> {renderDirectors} </div>
        </div>
    );
}

export default Directors;