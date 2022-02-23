import React from 'react'
import Clock from 'react-live-clock';
const TopSection = () => {
  return (
    <div className='section'>
        <h1>Taking care of your sleep</h1>
        <p>Happy sleeping!!</p>
        <p id="id"><Clock format={'dddd, MMMM Do YYYY, h:mm:ss a'} ticking={true} timezone={'India'} /></p>
    </div>
  )
}

export default TopSection