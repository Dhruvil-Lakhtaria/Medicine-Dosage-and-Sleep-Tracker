import React from 'react'
import TopSection from './TopSection';

import SleepButton from './SleepButton';
import SnoozeFooter from './SnoozeFooter.js'


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