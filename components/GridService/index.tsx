import React from "react";

export default function GridService() {
  return (
    <div className="grid grid-cols-8 grid-rows-[repeat(9, minmax(0, 1fr))] h-[100vh] max-h-[800px] py-14 gap-6">
      <div className="col-span-4 row-span-4 bg-red-500">1</div>
      <div className="col-span-4 row-span-5 bg-blue-500">2</div>
      <div className="col-span-4 row-span-5 bg-green-500">3</div>
      <div className="col-span-4 row-span-4 bg-purple-500">4</div>
    </div>
  );
}
