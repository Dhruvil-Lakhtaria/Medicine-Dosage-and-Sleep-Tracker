import React, { useState } from "react";
import Button from "@material-ui/core/Button";
//import Date from './Date'
const SleepButton = () => {
    const [idx, incrementIdx] = useState(0);
    const [isSleeping, setIsSleeping] = useState(false);
    const [sleepingTimes, addSleepingTime] = useState([]);
    const [wakingTimes, addWakeTime] = useState([]);
    const [SleepTime, addSleepTime] = useState([]);
    function handleClick() {
        setIsSleeping(!isSleeping)
        const date = new Date();
        if (!isSleeping) {
            alert(`Sleeping time recorded @ \n ${date}`)
            addSleepingTime([...sleepingTimes, date]);
        }
        else {
            alert(`Waking time recorded @ \n${date}`)
            addWakeTime([...wakingTimes, date]);
            const curr_date=date;
            const pre_date=sleepingTimes[sleepingTimes.length-1];
            addSleepTime([...SleepTime, curr_date-pre_date]);
            incrementIdx(idx + 1);
        }
    }
    return (
        <div className='Sleep_Button'>
            <div className="Sleep_Text">
                <datetime />
               Click this button to add data regarding your sleep time.
            </div>
            <center>
                <Button id="buttonSleep" variant="outlined" onClick={handleClick}>
                    {isSleeping ? "Sleeping" : "Awake"}
                </Button>
            </center>
        </div>
    )
}

export default SleepButton