import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { useSpeechSynthesis } from "react-speech-kit";



const LairAuth = ({ setIsModal }) => {
    const router = useRouter();
    const [value, setValue] = useState('')
    const [toastValue, setToastValue] = useState('😈 hahahahahaha!')
    const [soundVal, setSoundVal] = useState('troll.mp3')
    const { speak } = useSpeechSynthesis();
    const key = 'keys'

    const audio = new Audio(soundVal);
    const audio2 = new Audio('clap.mp3')


    // fish-yates
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    var arr = ['Crazy!', 'Who is this peasant ..?', 'You must be joking!!', 'Interesting!', 'Unbelieveable!', 'You don"t have the guts!', 'What Audacity!', 'Person Wey don Mad ! 🤣', 'Na you go tire! 😂 '];
    var soundArr = ['troll.mp3', 'horror-new.mp3']
    shuffle(arr, soundArr);




    const verifyLair = (e) => {
        e.preventDefault();

        if (value.toString() !== key) {
            setToastValue(arr[0])
            setSoundVal(soundArr[0])
            toast.error(toastValue, { autoClose: 2000});
            console.log(toastValue);
            audio.play();
            // speak({ text: toastValue })


        } else {
            setIsModal(false)
            toast.success('Good One Lad', { autoClose: 2000});
            audio2.play();

            setTimeout(() => {
                router.push('/puzzle')
            }, 2000)
        }
    }


    return (

        <div className="lair-auth-wrapper">
            <div onClick={() => setIsModal(false)} className="absolute top-4 right-4 font-bold cursor-pointer text-2xl">x</div>
            <form onSubmit={(e) => verifyLair(e)} className="lair-auth-content jungle">
                <h1 className='nosifer'>Enter secret keys of the Lair</h1>
                <input required className="input-group nosifer" value={value} placeholder={'secret code'} type="text" onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="submit-btn nosifer">submit</button>
            </form>
        </div>
    )
}

export default LairAuth;





