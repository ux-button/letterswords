import { useState } from "react";
import { BasicIcon } from "./BasicIcon";

const Input = ({ type, placeholder, title, text }) => {
  const [inputText, setInputText] = useState(text);

  // Styles
  const textType = {
    onLight:
      "bg-mono-4 caret-avocado-500 border-0 placeholder:text-mono-16 hover:bg-mono-20 focus:bg-mono-8",
    onDark:
      "bg-mono-84 caret-avocado-500 border-0 placeholder:text-mono-4 hover:bg-mono-75 focus:bg-mono-92 text-mono-4",
  };

  const labalType = {
    onLight: "text-default text-mono-50",
    onDark: "text-default text-mono-50",
  };

  // Controllers
  const handleChange = (value) => {
    setInputText(() => value);
  };

  const handleClear = () => {
    setInputText("");
  };

  return (
    <div className={`${textType[type]} p-4 w-full rounded-3xl flex`}>
      <div className="w-full">
        <div className={labalType[type]}>{title}</div>
        <input
          className="text-subsection outline-none w-full"
          type="text"
          name={title}
          value={inputText}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
      <div onClick={handleClear} className="flex flex-col justify-center">
        {inputText ? (
          <BasicIcon type="cross" size="24" style="fill-none stroke-mono-25" />
        ) : null}
      </div>
    </div>
  );
};

export { Input };
