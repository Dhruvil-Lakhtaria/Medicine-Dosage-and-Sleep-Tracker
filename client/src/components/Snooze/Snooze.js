import React from 'react'
import TopSection from './TopSection';
import Form from './Form.js'
import Navbar from "./Navbar";


const Snooze = () => {
  return (
    <div className='Snooze'>
        <Navbar />
        <TopSection/>
        <Form />
    </div>
  )
}

export default Snooze