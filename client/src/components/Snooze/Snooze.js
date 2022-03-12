import React from 'react'
import TopSection from './TopSection';
import Form from './Form.js'
import SleepButton from './SleepButton';
import SnoozeFooter from './SnoozeFooter.js'
import Date from './Date.js'

const Snooze = () => {
  return (
    <div className='Snooze'>
        
        <TopSection/>
        <SleepButton />
        <SnoozeFooter/>
        

    </div>
  )
}

export default Snooze