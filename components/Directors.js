import { useState } from "react";

const Directors = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div>
            Meet the directors
            <div className="single-director-wrapper">
                {!isActive &&
                    <div className="single-director">
                        <img src="/images/avatar-nikita.jpg" alt="person" />
                        <h1>Nikita Marks</h1>
                        <h2>Founder &#38; CEO</h2>
                    </div>
                }
                {isActive &&
                    <div className="dir-quote">
                        <h1>Nikita Marks</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nulla.</p>
                    </div>
                }
                <div onClick={() => setIsActive(!isActive)} className={`dir-toggle ${isActive ? 'lightCoral' : 'robin'}`}>
                    <svg className={isActive ? 'rotate-dir' : 'undo-rotate'} xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill={isActive ? '#fff' : '#012F34'} fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/></svg>
                </div>
            </div>

        </div>
    );
}

export default Directors;