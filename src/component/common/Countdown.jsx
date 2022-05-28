import React from "react";

export default function Countdown(props) {
  const { count, timeProperties } = props;

  return (
    <div className="border-4 p-4 border-emas-asyik w-20 rounded-2xl flex flex-col items-center">
      <div className="text-emas-asyik font-Century text-4xl">{count}</div>
      <div className="text-emas-asyik font-Century text-xl">
        {timeProperties}
      </div>
    </div>
  );
}
