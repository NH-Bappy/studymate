// src/windows/CalculatorWindow.jsx

import { useState, useEffect } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");
  const [shouldReset, setShouldReset] = useState(false);

  // 🔥 Smooth Live Calculate
  useEffect(() => {
    try {
      const lastChar = input.slice(-1);

      // 🚫 Do NOT calculate if last character is operator
      if (["+", "−", "×", "÷"].includes(lastChar)) {
        setResult("");
        return;
      }

      const prepared = input
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-");

      // eslint-disable-next-line no-eval
      const evalResult = eval(prepared);

      if (
        evalResult !== undefined &&
        !isNaN(evalResult) &&
        evalResult.toString() !== input
      ) {
        setResult(evalResult.toString());
      } else {
        setResult("");
      }
    } catch {
      setResult("");
    }
  }, [input]);

  // ⌨️ Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (!isNaN(key)) handleNumber(key);
      if (key === ".") handleNumber(".");
      if (key === "+") handleOperator("+");
      if (key === "-") handleOperator("−");
      if (key === "*") handleOperator("×");
      if (key === "/") handleOperator("÷");
      if (key === "Enter") handleEqual();
      if (key === "Backspace") handleClear();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  const handleNumber = (num) => {
    if (shouldReset) {
      setInput(num === "." ? "0." : num);
      setShouldReset(false);
      return;
    }

    if (input === "0" && num !== ".") {
      setInput(num);
    } else {
      setInput(input + num);
    }
  };

  const handleOperator = (operator) => {
    const lastChar = input.slice(-1);

    if (["+", "−", "×", "÷"].includes(lastChar)) {
      setInput(input.slice(0, -1) + operator);
    } else {
      setInput(input + operator);
    }

    setShouldReset(false);
  };

  const handleEqual = () => {
    if (result) {
      setInput(result);
      setResult("");
      setShouldReset(true);
    }
  };

  const handleClear = () => {
    setInput("0");
    setResult("");
  };

  const handlePlusMinus = () => {
    if (!isNaN(input)) {
      setInput((parseFloat(input) * -1).toString());
    }
  };

  const handlePercent = () => {
    if (!isNaN(input)) {
      setInput((parseFloat(input) / 100).toString());
    }
  };

  const buttons = [
    ["C", "±", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <div
      className="h-full flex flex-col bg-black overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      style={{ width: "320px", margin: "0 auto" }}
    >
      {/* Window Header */}
      <div className="bg-[#1c1c1e] px-3 py-2 border-b border-[#2c2c2e]">
        <div className="flex items-center">
          <WindowControls target="calculator" />
          <span className="flex-1 text-center text-xs font-medium text-gray-400">
            Calculator
          </span>
          <div className="w-12"></div>
        </div>
      </div>

      {/* Display */}
      <div className="bg-black px-6 pt-12 pb-6 text-right">
        {/* Main Input */}
        <div className="text-white text-6xl font-light tracking-wide break-all">
          {input}
        </div>

        {/* Live Preview - Always Has Space */}
        <div
          className={`
      text-gray-500 text-2xl mt-2
      transition-opacity duration-200
      h-8
      ${result ? "opacity-100" : "opacity-0"}
    `}
        >
          {result || "0"}
        </div>
      </div>



      {/* Buttons */}
      <div className="grid grid-cols-4 gap-4 px-5 pb-6 bg-black flex-1">
        {buttons.flat().map((btn, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isNaN(btn) || btn === ".") handleNumber(btn);
              else if (btn === "+" || btn === "−" || btn === "×" || btn === "÷")
                handleOperator(btn);
              else if (btn === "=") handleEqual();
              else if (btn === "C") handleClear();
              else if (btn === "±") handlePlusMinus();
              else if (btn === "%") handlePercent();
            }}
            className={`
              h-14 rounded-full text-2xl font-medium transition-all duration-150
              active:scale-95
              ${
                btn.match(/[0-9.]/)
                  ? "bg-[#505050] text-white"
                  : btn.match(/[÷×−+]/)
                    ? "bg-[#ff9f0a] text-white"
                    : btn === "C" || btn === "±" || btn === "%"
                      ? "bg-[#a5a5a5] text-black"
                      : btn === "="
                        ? "bg-[#ff9f0a] text-white"
                        : "bg-[#505050] text-white"
              }
              ${btn === "0" ? "col-span-2 text-left pl-7" : ""}
            `}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

const CalculatorWindow = WindowWrapper(Calculator, "calculator");
export default CalculatorWindow;
