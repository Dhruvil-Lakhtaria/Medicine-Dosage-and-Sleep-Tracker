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
            alert(`Sleeping @ ${date}`)
            addSleepingTime([...sleepingTimes, date]);
        }
        else {
            alert(`Woke @ ${date}`)
            addWakeTime([...wakingTimes, date]);
            addSleepTime([...SleepTime, wakingTimes[idx] - sleepingTimes[idx]])
            incrementIdx(idx + 1);
        }

    }
    return (
        <div className='Sleep_Button'>
            <div className="Sleep_Text">
                <datetime />
                Please click this button when you start or stop sleeping.
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