import React from 'react'
import Clock from 'react-live-clock';
const TopSection = () => {
  return (
    <div className='snooze-section'>
        <h1 className='snooze-header'>Taking care of your sleep</h1>
        <h4>Happy sleeping!!</h4>
        <p id="id"><Clock format={'dddd, MMMM Do YYYY, h:mm:ss a'} ticking={true} timezone='india' /></p>
    </div>
  )
}

export default TopSection