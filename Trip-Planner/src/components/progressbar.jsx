import {useState, useEffect} from 'react';

export default function Progressbar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
      const interval = setInterval(() => {
        console.log('INTERVAL');
        setRemainingTime(prevTime => prevTime - 10);
      }, 10); // 100 times per second

      return () => {
        clearInterval(interval);
      }
    }, []);

    return <progress value={remainingTime} max={timer} />
}