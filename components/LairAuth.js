import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useClickOutside from './hooks/useClickOutside';

const LairAuth = ({setIsModal, onClickOutside}) => {
    const router = useRouter();
    const clickRef = React.useRef();
    useClickOutside(clickRef, onClickOutside);

    const [value, setValue] = useState('')
    const key = 'keys'


    const verifyLair = (e) => {
        e.preventDefault();

        if (value.toString() !== key) {

        } else {
            router.push('/puzzle')
            setIsModal(false)
        }
    }


    return (

        <div className="lair-auth-wrapper">
            <div ref={clickRef} onClick={() => setIsModal(false)} className="absolute top-4 right-4 font-bold cursor-pointer">x</div>
            <form onSubmit={(e) => verifyLair(e)}  className="lair-auth-content sacramento">
                <h1>Enter secret keys of the Lair</h1>
                <input required className="input-group" value={value} placeholder={'secret code'} type="text" onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="submit-btn">submit</button>
            </form>
            {/* https://codepen.io/pen?editors=1010 */}
        </div>
    )
}

export default LairAuth