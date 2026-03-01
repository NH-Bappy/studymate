// src/windows/CalculatorWindow.jsx
import { useState, useEffect, useRef } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState([]);
  const [degreeMode, setDegreeMode] = useState(true);
  const [showScientific, setShowScientific] = useState(false);
  const inputRef = useRef(null);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (key === "Enter" || key === "=") {
        e.preventDefault();
        handleClick("=");
      } else if (key === "Escape") {
        e.preventDefault();
        handleClick("C");
      } else if (key === "Backspace") {
        e.preventDefault();
        handleDelete();
      } else if (/[\d\.\+\-\*\/\(\)]/.test(key)) {
        e.preventDefault();
        setInput((prev) => prev + key);
      }
    };

    if (inputRef.current) {
      inputRef.current.focus();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const evaluateExpression = (expr) => {
    const preparedExpr = expr
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/asin\(/g, "Math.asin(")
      .replace(/acos\(/g, "Math.acos(")
      .replace(/atan\(/g, "Math.atan(")
      .replace(/√/g, "Math.sqrt")
      .replace(/log\(/g, "Math.log10(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/π/g, "Math.PI")
      .replace(/e/g, "Math.E")
      .replace(/\^/g, "**");

    if (degreeMode) {
      const trigFuncs = ["sin", "cos", "tan", "asin", "acos", "atan"];
      let processedExpr = preparedExpr;
      trigFuncs.forEach((func) => {
        const regex = new RegExp(`Math\\.${func}\\(([^)]+)\\)`, "g");
        processedExpr = processedExpr.replace(regex, (match, p1) => {
          if (func.startsWith("a")) {
            return `Math.${func}(${p1}) * (180 / Math.PI)`;
          } else {
            return `Math.${func}(${p1} * (Math.PI / 180))`;
          }
        });
      });
      try {
        // eslint-disable-next-line no-eval
        return eval(processedExpr);
      } catch {
        return "Error";
      }
    }
    try {
      // eslint-disable-next-line no-eval
      return eval(preparedExpr);
    } catch {
      return "Error";
    }
  };

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "⌫") {
      handleDelete();
    } else if (value === "=") {
      if (input.trim() === "") return;
      const evalResult = evaluateExpression(input);
      const formattedResult =
        evalResult === "Error"
          ? "Error"
          : Number.isFinite(evalResult)
            ? parseFloat(evalResult.toFixed(10)).toString()
            : "Error";

      setResult(formattedResult);
      if (formattedResult !== "Error") {
        setHistory((prev) =>
          [...prev, { expression: input, result: formattedResult }].slice(-5),
        );
      }
    } else if (value === "M+") {
      if (result && result !== "Error")
        setMemory((prev) => prev + parseFloat(result));
    } else if (value === "M-") {
      if (result && result !== "Error")
        setMemory((prev) => prev - parseFloat(result));
    } else if (value === "MR") {
      if (memory) setInput((prev) => prev + memory.toString());
    } else if (value === "MC") {
      setMemory(0);
    } else if (value === "√") {
      setInput((prev) => prev + "√(");
    } else if (value === "x²") {
      setInput((prev) => prev + "^2");
    } else if (value === "xʸ") {
      setInput((prev) => prev + "^");
    } else if (value === "1/x") {
      setInput((prev) => prev + "1/(");
    } else if (value === "±") {
      if (input) {
        if (input.startsWith("-")) {
          setInput(input.substring(1));
        } else {
          setInput("-" + input);
        }
      }
    } else if (value === "()") {
      const openCount = (input.match(/\(/g) || []).length;
      const closeCount = (input.match(/\)/g) || []).length;
      setInput((prev) => prev + (openCount > closeCount ? ")" : "("));
    } else if (value === "π") {
      setInput((prev) => prev + "π");
    } else if (value === "e") {
      setInput((prev) => prev + "e");
    } else if (value === "sin") {
      setInput((prev) => prev + "sin(");
    } else if (value === "cos") {
      setInput((prev) => prev + "cos(");
    } else if (value === "tan") {
      setInput((prev) => prev + "tan(");
    } else if (value === "log") {
      setInput((prev) => prev + "log(");
    } else if (value === "ln") {
      setInput((prev) => prev + "ln(");
    } else if (value === "!") {
      if (result && result !== "Error") {
        const num = parseFloat(result);
        if (Number.isInteger(num) && num >= 0 && num <= 170) {
          let factorial = 1;
          for (let i = 2; i <= num; i++) factorial *= i;
          setResult(factorial.toString());
        } else {
          setResult("Error");
        }
      }
    } else if (value === "%") {
      if (result && result !== "Error") {
        try {
          const percentage = parseFloat(result) / 100;
          setResult(percentage.toString());
        } catch {
          setResult("Error");
        }
      }
    } else {
      setInput((prev) => prev + value);
    }
    inputRef.current?.focus();
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleHistoryClick = (item) => {
    setInput(item.expression);
    setResult(item.result);
  };

  // Basic buttons
  const basicButtons = [
    ["C", "±", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "⌫", "="],
  ];

  // Scientific buttons
  const scientificButtons = [
    ["C", "±", "%", "÷"],
    ["sin", "cos", "tan", "√"],
    ["log", "ln", "!", "^"],
    ["π", "e", "x²", "1/x"],
    ["()", "M+", "M-", "MR"],
    ["MC", "⌫", "=", "×"],
    ["7", "8", "9", "−"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "("],
    ["0", ".", ")", ")"],
  ];

  return (
    <div
      className="h-full flex flex-col bg-[#1c1c1e] overflow-hidden"
      style={{ width: "320px", margin: "0 auto" }}
    >
      {/* Window Header */}
      <div className="bg-[#2c2c2e] px-2 py-1 border-b border-[#3a3a3c]">
        <div className="flex items-center">
          <WindowControls target="calculator" />
          <span className="flex-1 text-center text-xs font-medium text-[#98989e]">
            Calculator
          </span>
          <div className="w-12"></div>
        </div>
      </div>

      {/* Display */}
      <div className="p-2 bg-[#1c1c1e]">
        <div className="bg-[#2c2c2e] rounded-lg p-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="0"
            className="w-full text-right text-2xl font-light bg-transparent outline-none text-white"
          />
          <div className="flex justify-between items-center mt-1">
            <div className="flex space-x-1">
              <button
                onClick={() => setShowScientific(false)}
                className={`px-2 py-0.5 text-xs rounded ${
                  !showScientific
                    ? "bg-[#0a84ff] text-white"
                    : "bg-[#3a3a3c] text-[#98989e]"
                }`}
              >
                Basic
              </button>
              <button
                onClick={() => setShowScientific(true)}
                className={`px-2 py-0.5 text-xs rounded ${
                  showScientific
                    ? "bg-[#0a84ff] text-white"
                    : "bg-[#3a3a3c] text-[#98989e]"
                }`}
              >
                Scientific
              </button>
            </div>
            <div className="flex items-center space-x-2">
              {showScientific && (
                <>
                  <button
                    onClick={() => setDegreeMode(true)}
                    className={`px-1.5 py-0.5 text-[10px] rounded ${
                      degreeMode
                        ? "bg-[#0a84ff] text-white"
                        : "bg-[#3a3a3c] text-[#98989e]"
                    }`}
                  >
                    Deg
                  </button>
                  <button
                    onClick={() => setDegreeMode(false)}
                    className={`px-1.5 py-0.5 text-[10px] rounded ${
                      !degreeMode
                        ? "bg-[#0a84ff] text-white"
                        : "bg-[#3a3a3c] text-[#98989e]"
                    }`}
                  >
                    Rad
                  </button>
                </>
              )}
              <div className="text-right text-lg font-light text-[#0a84ff]">
                {result || "0"}
                {memory !== 0 && (
                  <span className="ml-1 text-[10px] bg-[#3a3a3c] px-1 py-0.5 rounded-full text-[#98989e]">
                    M
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="px-2 py-1 bg-[#2c2c2e] border-t border-b border-[#3a3a3c]">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-[#98989e]">History</span>
            <button
              onClick={() => setHistory([])}
              className="text-[10px] text-[#0a84ff]"
            >
              Clear
            </button>
          </div>
          <div className="flex space-x-1 overflow-x-auto pb-0.5">
            {history
              .slice()
              .reverse()
              .map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleHistoryClick(item)}
                  className="flex-shrink-0 px-1.5 py-0.5 bg-[#3a3a3c] rounded text-[10px] text-[#98989e]"
                >
                  {item.result}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Basic Calculator */}
      {!showScientific && (
        <div className="flex-1 p-2 bg-[#1c1c1e]">
          <div className="space-y-1">
            {basicButtons.map((row, i) => (
              <div key={i} className="grid grid-cols-4 gap-1">
                {row.map((btn, j) => (
                  <button
                    key={j}
                    onClick={() => handleClick(btn)}
                    className={`
                      py-2.5 rounded-lg text-center font-medium transition-all
                      hover:brightness-125 active:brightness-90
                      ${
                        btn === "="
                          ? "bg-[#0a84ff] text-white text-base"
                          : btn === "C"
                            ? "bg-[#ff453a] text-white text-sm"
                            : btn.match(/[0-9.]/)
                              ? "bg-[#3a3a3c] text-white text-lg"
                              : btn.match(/[÷×−+]/)
                                ? "bg-[#ff9f0a] text-white text-lg"
                                : btn === "⌫"
                                  ? "bg-[#48484a] text-white text-sm"
                                  : "bg-[#3a3a3c] text-white text-xs"
                      }
                      ${btn === "0" ? "col-span-2" : ""}
                    `}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scientific Calculator */}
      {showScientific && (
        <div className="flex-1 p-2 bg-[#1c1c1e] overflow-y-auto">
          <div className="grid grid-cols-4 gap-1">
            {scientificButtons.map((row, i) =>
              row.map((btn, j) => (
                <button
                  key={`${i}-${j}`}
                  onClick={() => handleClick(btn)}
                  className={`
                    py-2 rounded-lg text-center font-medium transition-all
                    hover:brightness-125 active:brightness-90
                    ${
                      btn === "="
                        ? "bg-[#0a84ff] text-white text-sm"
                        : btn === "C"
                          ? "bg-[#ff453a] text-white text-xs"
                          : btn.match(/[0-9.]/)
                            ? "bg-[#3a3a3c] text-white text-base"
                            : btn.match(/[÷×−+]/)
                              ? "bg-[#ff9f0a] text-white text-base"
                              : btn === "⌫"
                                ? "bg-[#48484a] text-white text-xs"
                                : btn === "MC" ||
                                    btn === "MR" ||
                                    btn === "M+" ||
                                    btn === "M-"
                                  ? "bg-[#3a3a3c] text-[#0a84ff] text-[10px]"
                                  : "bg-[#3a3a3c] text-white text-[10px]"
                    }
                    ${btn === "0" ? "col-span-2" : ""}
                  `}
                >
                  {btn}
                </button>
              )),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const CalculatorWindow = WindowWrapper(Calculator, "calculator");
export default CalculatorWindow;
