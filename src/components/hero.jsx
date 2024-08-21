import React from "react";
import { IoIosRefresh } from "react-icons/io";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useState } from "react";
export default function Hero() {
  // h - acts as a function, H - acts as a component
  const [password, setPassword] = useState("");
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState(false);
  const [buttonText, setButtonText] = useState("Copy");

  const generatePassword = (length) => {
    // Define the character set
    setButtonText("Copy");
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+";
    let characters = "";
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSpecialCharacters
    ) {
      alert("Please select atleast one character set");
      return;
    }
    if (includeUpperCase) characters += upperCase;
    if (includeLowerCase) characters += lowerCase;
    if (includeNumbers) characters += numbers;
    if (includeSpecialCharacters) characters += specialCharacters;

    let result = "";
    for (let i = 0; i < length; i++) {
      // Pick a random character from the character set
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    setPassword(result);
  };
  const [rangeValue, setRangeValue] = useState(8);
  // Handle changes to the range input
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    console.log(rangeValue);
  };
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
            value={password}
          />
          <IoIosRefresh
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
            onClick={() => generatePassword(rangeValue)}
          />
        </div>
        <button
          className="font-mono border-2 rounded px-6 py-2  bg-[#031526] text-white border-[#26a3d9] hover:bg-[#26a3d9] hover:text-black transition duration-200 "
          onClick={(e) => {
            navigator.clipboard.writeText(password);
            setButtonText("Copied");
          }}
        >
          {buttonText}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <div className="flex justify-center items-center gap-2 mt-4">
          <LuMinus
            className="text-white p-2 border rounded-full border-[#26a3d9] text-4xl hover:bg-[#26a3d9] hover:text-black duration-200 "
            onClick={() => {
              if (rangeValue === 1) return;
              if(rangeValue > 0) setRangeValue(rangeValue - 1);
            }}
          />
          <input
            type="range"
            className="w-64"
            min="1"
            max="20"
            step="1"
            value={rangeValue}
            onChange={handleRangeChange}
          />
          <LuPlus
            className="text-white p-2 border rounded-full border-[#26a3d9] text-4xl hover:bg-[#26a3d9] hover:text-black duration-200"
            onClick={() => {
              if(rangeValue === 20) return;
              if (rangeValue < 21) setRangeValue(rangeValue + 1);
            }}
          />
        </div>
        <p className="w-full text-center font-mono text-white">
          Lenght: {rangeValue}
        </p>
      </div>
      <p className="text-[#ccffff] font-mono text-[20px] mt-2 mb-2">
        Characters used:{" "}
      </p>
      <div className="flex justify-center gap-10">
        <div className="flex gap-2 text-white">
          <input
            type="checkbox"
            onChange={(e) => {
              setIncludeUpperCase(!includeUpperCase);
            }}
          />
          <p>ABC</p>
        </div>
        <div className="flex gap-2 text-white">
          <input
            type="checkbox"
            onChange={(e) => setIncludeLowerCase(!includeUpperCase)}
          />
          <p>abc</p>
        </div>
        <div className="flex gap-2 text-white">
          <input
            type="checkbox"
            onChange={(e) => setIncludeNumbers(!includeNumbers)}
          />
          <p>123</p>
        </div>
        <div className="flex gap-2 text-white items-center">
          <input
            type="checkbox"
            onChange={(e) =>
              setIncludeSpecialCharacters(!includeSpecialCharacters)
            }
          />
          <p>#&$</p>
        </div>
      </div>
    </div>
  );
}
// e hota hai events, for example here in checkbox event is of true or false
