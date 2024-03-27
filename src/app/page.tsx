"use client";

import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [check, setCheck] = useState("");
  const [palindrome, setPalindrome] = useState(false);
  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    let newWord = event.target.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    setCheck(event.target.value);
    if (newWord === "") {
      setPalindrome(false);
    } else {
      setPalindrome(newWord === newWord.split("").reverse().join(""));
    }
    console.log(newWord);
  };
  return (
    <main
      className={`flex flex-col items-center h-screen ${
        palindrome ? "bg-green-500" : "bg-slate-100"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center flex-col">
        <h1 className="text-4xl p-10">Palindrome Checker</h1>
        <div className=" flex flex-col gap-4">
          <div className="p-8 my-10 border text-4xl">{check}</div>
          <input
            className="border px-4 py-2 w-[1000px]"
            placeholder="type a word..."
            onChange={handleCheck}
          />
        </div>
      </div>
    </main>
  );
}
