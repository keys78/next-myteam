import React, { useRef, useState } from 'react'

const Input = ({placeholder, type, error_msg}) => {
    const [value, setValue] = useState('')
    const inputRef = useRef();
    

    return (
        <div>
            <input value={value} required ref={inputRef} type={type} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} className="input-group"/>
             <div className="error-field">{error_msg}</div>
        </div>
    )
}

export default Input;