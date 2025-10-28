"use client";
import React, { useEffect, useState, useRef } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const updated = decrement(prev);
        if (
          updated.days <= 0 &&
          updated.hours <= 0 &&
          updated.minutes <= 0 &&
          updated.seconds <= 0
        ) {
          clearInterval(intervalRef.current);
        }
        return updated;
      });
    }, 1000); // update every second

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex gap-4 rounded-md items-center">
      <TimeUnit label="Days" value={timeLeft.days} />{" "}
      <span className="text-[#db4444] font-bold">:</span>
      <TimeUnit label="Hours" value={timeLeft.hours} />{" "}
      <span className="text-[#db4444] font-bold">:</span>
      <TimeUnit label="Minutes" value={timeLeft.minutes} />{" "}
      <span className="text-[#db4444] font-bold">:</span>
      <TimeUnit label="Seconds" value={timeLeft.seconds} />
    </div>
  );
}

/* --------------------- Time Unit Component --------------------- */
function TimeUnit({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}

/* --------------------- Logic --------------------- */

// Calculate initial time left
function getTimeLeft(targetDate) {
  const now = new Date();
  const target = targetDate
    ? new Date(targetDate)
    : new Date(now.getTime() + 24 * 60 * 60 * 1000); // default 1 day later
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((diff % (60 * 1000)) / 1000);

  return { days, hours, minutes, seconds };
}

// Decrement the countdown properly
function decrement({ days, hours, minutes, seconds }) {
  if (seconds > 0) return { days, hours, minutes, seconds: seconds - 1 };
  if (minutes > 0) return { days, hours, minutes: minutes - 1, seconds: 59 };
  if (hours > 0) return { days, hours: hours - 1, minutes: 59, seconds: 59 };
  if (days > 0) return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}
