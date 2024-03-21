import React, { FC, useEffect } from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class Timer {
  secondsPassed = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increase() {
    this.secondsPassed++;
  }
  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();

type PropsType = {
  timer: Timer;
};
const TimerView = observer((props: PropsType) => {
  const { timer } = props;

  return <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>;
});

const BasicDemo: FC = () => {
    useEffect(() => {
        const id = setInterval(() => {
            myTimer.increase()
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])
  return <div>
    <p>Basic Demo</p> 
    <TimerView timer={myTimer}></TimerView>
  </div>;
};

export default BasicDemo;
