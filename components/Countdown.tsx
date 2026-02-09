
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 12, hours: 5, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        // Fix: Removed duplicate 'minutes' property from the returned object literal.
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const Box = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center p-4 bg-zinc-900 border border-zinc-800 rounded-lg min-w-[100px]">
      <span className="font-bebas text-4xl text-red-600">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs text-zinc-500 uppercase font-bold tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex space-x-4 animate-fadeIn">
      <Box value={timeLeft.days} label="Days" />
      <Box value={timeLeft.hours} label="Hours" />
      <Box value={timeLeft.minutes} label="Mins" />
      <Box value={timeLeft.seconds} label="Secs" />
    </div>
  );
};
