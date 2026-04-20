"use client";

import { useEffect, useState } from "react";

export default function JSTTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Tokyo",
        hour12: false,
      });
      setTime(now + " JST");
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
}