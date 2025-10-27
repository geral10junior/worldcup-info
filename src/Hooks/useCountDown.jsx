import React, { useCallback, useEffect } from "react";

const WORLD_CUP_START_DATE = new Date("2026-06-11T12:00:00-03:00").getTime();
const MILLISECONDS_PER_SECOND = 1000;
const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * 60;
const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * 60;
const MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOUR * 24;

const useCountDown = (futureDate) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();

    const difference = futureDate - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
    }

    const days = Math.floor(difference / MILLISECONDS_PER_DAY);
    const hours = Math.floor(
      (difference % MILLISECONDS_PER_DAY) / MILLISECONDS_PER_HOUR
    );
    const minutes = Math.floor(
      (difference % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE
    );
    const seconds = Math.floor(
      (difference % MILLISECONDS_PER_MINUTE) / MILLISECONDS_PER_SECOND
    );

    return { days, hours, minutes, seconds, isFinished: false };
  }, [futureDate]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();

      if (newTimeLeft.isFinished) {
        clearInterval(interval);
      }
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [futureDate, calculateTimeLeft]);

  return timeLeft;
};

export default useCountDown;
