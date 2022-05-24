import { useRef } from 'react'

const TextArea = ({ placeholder, type }) => {
    const messagetRef = useRef();

    return (
        <div>
            <textarea required ref={messagetRef} type={type} placeholder={placeholder} cols="10" rows="3"></textarea>
            <div className="error-field-area">what's your message ..?</div>

            {/* <div>
                if I were your eulogy, my inks will dry.
                If I were to read your eulogy, words would come in battered forms.
                You were strong person, and I'd keep the memories safe.
                Rest On Cartel.
            </div> */}
        </div>
    )
}

export default TextArea;
