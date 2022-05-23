import React, { useRef } from 'react'

const Input = ({placeholder}) => {
    // const term = (inputRef.current.value <= 1)
    const inputRef = useRef();
    
    const validateInput = () => {
        if(inputRef.current.value <= 1) {
            alert('empty')
        }
    }

    return (
        <>
            <input ref={inputRef} onClick={validateInput} placeholder={placeholder} className="input-group" type="text" />
            {/* {inputRef.current.value <= 1 && <span className="error-field">field is required</span>} */}
        </>
    )
}

export default Input

// onClick={() => inputRef.ref.focus()} 