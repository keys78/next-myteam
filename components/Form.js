import React from 'react'
import Input from './Input'
import TextArea from './TextArea'

const Form = () => {
  return (
    <div className="form-container sm:pt-0 pt-20 ">
      <form>
        <Input placeholder={'Name'} type={'text'} error_msg={'name field is required'}/>
        <Input placeholder={'Email'} type={'email'} error_msg={'invalid email format'}/>
        <Input placeholder={'Company'} type={'text'} error_msg={'company field is required'}/>
        <Input placeholder={'Title'} type={'text'} error_msg={'title field is required'}/>
        <TextArea  placeholder={'Message'}/>

        <button type='submit' className='submit-btn'>submit</button>
      </form>
    </div>
  )
}

export default Form