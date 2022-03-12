import React from 'react'
import Button from "@material-ui/core/Button";
//import Date from './Date'
const SleepButton = () => {
    function showTime() {
        const date = new Date();
        const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
        alert(showTime);
      }
  return (
    <div className='Sleep_Button'>
        <div className="Sleep_Text">
            <datetime />
            Please click this button when you start sleeping.
        </div>
        <center>
        <Button id="buttonSleep" variant="outlined" onClick={showTime}>
                I am Sleeping!!
        </Button>
        </center>
    </div>
  )
}

export default SleepButton