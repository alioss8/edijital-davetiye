import React, { useEffect, useState, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";
const DateInfo = ({ targetDate }) => {
  const { styles } = useTheme(); // styles artık context’ten geliyor
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]); // ✅ burada artık bağımlılık tamam

  if (!timeLeft) {
    return (
      <p className="text-xl text-red-600 font-semibold">
        Zaman doldu!
      </p>
    );
  }

  return (
    <div className={`${styles.wrapper} text-center text-lg font-medium`}>
    <h1 className="text-2xl font-bold mb-4">Düğüne Geri Sayım</h1>
  
    <div className="flex gap-4 justify-center">
      <div>
        <div className="text-3xl font-bold">{timeLeft.days}</div>
        <div>Gün</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{timeLeft.hours}</div>
        <div>Saat</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{timeLeft.minutes}</div>
        <div>Dakika</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{timeLeft.seconds}</div>
        <div>Saniye</div>
      </div>
    </div>
  </div>
  
  );
};

export default DateInfo;

