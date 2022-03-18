import React, { useState } from "react";
import TopSection from "./TopSection";
import SleepButton from "./SleepButton";
import Copyrights from "../Homepage/Copyrights";
import SleepChart from "./SleepChart";
const Snooze = () => {
  const [idx, incrementIdx] = useState(0);
  const [isSleeping, setIsSleeping] = useState(false);
  const [sleepingTimes, addSleepingTime] = useState([]);
  const [wakingTimes, addWakeTime] = useState([]);
  const [SleepTime, addSleepTime] = useState([]);
  function handleClick() {
    setIsSleeping(!isSleeping);
    const date = new Date();
    if (!isSleeping) {
      // alert(`Sleeping time recorded @ \n ${date}`)
      addSleepingTime([...sleepingTimes, date]);
    } else {
      //     alert(`Waking time recorded @ \n${date}`)
      addWakeTime([...wakingTimes, date]);
      const pre_date = sleepingTimes[sleepingTimes.length - 1];
      var newSleepData = {
        time: (date - pre_date) / 1000,
        dataKey:
          date.getDate().toString() +
          "/" +
          date.getMonth().toString() +
          "/" +
          date.getFullYear().toString(),
      };
      addSleepTime([...SleepTime, newSleepData]);
      incrementIdx(idx + 1);
    }
  }
  return (
    <div className="Snooze">
      <TopSection />
      <SleepButton handleTime={handleClick} sleepState={isSleeping} />
      <SleepChart sleepData={SleepTime} />
      <Copyrights />
    </div>
  );
};

export default Snooze;
