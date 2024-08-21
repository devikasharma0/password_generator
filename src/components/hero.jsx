import React from "react";
import { IoIosRefresh } from "react-icons/io";
import { LuMinus, LuPlus } from "react-icons/lu";
export default function Hero() {
  // h - acts as a function, H - acts as a component
  return (
    <div className="">
      <h1 className="text-5xl text-[#ccffff] font-bold font-bricolage">
        Random Password Generator
      </h1>
      <p className="py-5 font-mono text-[#ccffff] text-l">
        Create strong and secure passwords to keep your account safe online.
      </p>
      <div className="flex justify-center gap-5">
        <div className="relative">
          <input
            type="text"
            className="w-96 border py-2 rounded bg-[#000f1f] text-white p-2"
          />
          <IoIosRefresh className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
        </div>
        <button className="font-mono border-2 rounded px-6 py-2  bg-[#031526] text-white border-[#26a3d9] hover:bg-[#26a3d9] hover:text-black transition duration-200 ">
          Copy
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <LuMinus className="text-white p-2 border rounded-full border-[#26a3d9] text-4xl hover:bg-[#26a3d9] hover:text-black duration-200 " />
        <input type="range" className="w-64" />
        <LuPlus className="text-white p-2 border rounded-full border-[#26a3d9] text-4xl hover:bg-[#26a3d9] hover:text-black duration-200" />
      </div>
      <p className="text-[#ccffff] font-mono text-[20px] mt-2 mb-2">
        Characters used:{" "}
      </p>
      <div className="flex justify-center gap-10">
        <div className="flex gap-2 text-white">
          <input type="checkbox" className="" />
          <p>ABC</p>
        </div>
        <div className="flex gap-2 text-white">
          <input type="checkbox" />
          <p>abc</p>
        </div>
        <div className="flex gap-2 text-white">
          <input type="checkbox" />
          <p>123</p>
        </div>
        <div className="flex gap-2 text-white items-center">
          <input type="checkbox" className="" />
          <p>#&$</p>
        </div>
      </div>
    </div>
  );
}
