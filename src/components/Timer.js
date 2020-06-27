import React, {useState} from 'react';

function Timer() {
  let [timerCount, setTimerCount] = useState(3)

  if(timerCount !== 0)
    setTimeout(()=>setTimerCount(timerCount - 1), 1000)

  return (
    <div className="Timer">
      {timerCount}
    </div>
  )
}

export default Timer;