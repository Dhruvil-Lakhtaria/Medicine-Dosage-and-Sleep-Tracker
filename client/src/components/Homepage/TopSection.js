import React from 'react'

const headerHeight = {height: window.innerHeight};
const TopSection = () => {
  return (
    <div className='section' style={headerHeight}>
        <h1>Healthcare Made Easy</h1>
        <p>Spend less time worrying about medicines,sleeps and appointments and focus more on health</p>
    </div>
  )
}

export default TopSection