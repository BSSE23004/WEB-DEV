import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null); // useRef to store the timer ID
  function clockStart() {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1); // increment the time by 1 every second
    }, 1000); //setInterval return a timer ID which we can use to clear the interval
    //we used useRef to store the timer ID so that we can clear it later i.e persist the value of timer ID between renders
  }
  function clockReset() {
    clockStop(); // stop the timer before resetting
    setTime(0); // reset the time to 0
  }
  function clockStop() {
    clearInterval(timerRef.current); // clear the interval using the timer ID stored in useRef
    timerRef.current = null; // reset the timerRef to null
  }

  return (
    <div>
      <h1>Stop Watch: {time} </h1>
      <br />
      <button onClick={clockStart}>Start</button>
      <br />
      <button onClick={clockReset}>Reset</button>
      <br />
      <button onClick={clockStop}>Stop</button>
      <br />
    </div>
  );
};

export default StopWatch;
