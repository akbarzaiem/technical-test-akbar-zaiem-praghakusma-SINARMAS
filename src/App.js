import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [inputNumberTemp, setInputNumberTemp] = useState(0);
  const [NumberReverse, setNumberReverse] = useState(0);
  const [resultReverse, setResultReverse] = useState(0);
  const [resultDifference, setResultDifference] = useState(0);
  const [numberCleansing, setNumberCleansing] = useState(0);

  function removeZeros(value) {
    const str = value.toString();
    const trimmedStr = str.replace(/0+$/, "");

    return parseInt(trimmedStr);
  }

  function reversedNumber(value) {
    return value.split("").reverse().join("");
  }

  function handleInput(e) {
    const value = e.target.value;

    if (value % 10 === 0 && value !== 0) {
      const cleansing = removeZeros(value);
      setNumberReverse(cleansing);
    }
    if (value.includes(".") || value.includes(",")) {
      replaceValue = value.replace(/[\.,]/g, "");
      setNumberReverse(parseInt(reversedNumber(replaceValue), 10) || 0);
      setNumberCleansing(replaceValue);
    } else {
      setNumberReverse(parseInt(reversedNumber(value), 10) || 0);
    }
    setInputNumberTemp(value);
  }

  function handleSubmit() {
    setInputNumber(inputNumberTemp);
    setResultReverse(NumberReverse);
    if (inputNumberTemp > NumberReverse) {
      setResultDifference(inputNumberTemp - NumberReverse);
    } else {
      setResultDifference(NumberReverse - numberCleansing);
    }
  }

  return (
    <div className="App">
      <div>
        Number: <input onChange={handleInput} type="number" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result : </div>
      <div>Input Number : {inputNumber}</div>
      <div>Reverse Number : {resultReverse}</div>
      <div>Difference Number : {resultDifference} </div>
    </div>
  );
}
