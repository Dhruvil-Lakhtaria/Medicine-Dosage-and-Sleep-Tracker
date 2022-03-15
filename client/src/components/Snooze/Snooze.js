import React from 'react'
import TopSection from './TopSection';
import SleepButton from './SleepButton';
import Copyrights from '../Homepage/Copyrights';
const Snooze = () => {
  return (
    <div className='Snooze'>
        <TopSection/>
        <SleepButton />    
        <Copyrights />    
    </div>
  )
}

export default Snooze