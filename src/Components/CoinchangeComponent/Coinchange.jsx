import React, { useState } from "react";
import Header from './Header';
import CoinList from './CoinList';
import Inputs from './Inputs';
import RunButton from './RunButton';
import CombinationDisplay from './CombinationDisplay';
import "../../index.css";


export default function Coinchange() {
  const [coinInput, setCoinInput] = useState("1,2,3"); // Start with a simple comma-separated list
  const [amount, setAmount] = useState("4");
  const [answer, setAnswer] = useState([]);
  const [error, setError] = useState("");

  const parseCoins = (coinString) => {
    // Filter out any empty strings from the array to prevent parseInt from returning NaN
    return coinString.split(',')
      .map((coin) => coin.trim()) // Trim whitespace from each coin string
      .filter((coin) => coin !== '') // Filter out empty strings
      .map((coin) => {
        const parsedCoin = parseInt(coin, 10);
        if (isNaN(parsedCoin)) {
          throw new Error(`Invalid coin value: ${coin}`);
        }
        return parsedCoin;
      }).sort((a, b) => a - b);
  };
  

  const generate = () => {
    try {
      setError("");
      setAnswer([]);
      const coinsRepresentation = parseCoins(coinInput);
      findCombinations(coinsRepresentation, parseInt(amount));
    } catch (error) {
      setError("Invalid coin input. Please enter a comma-separated list of numbers.");
      console.error(error);
    }
  }

  const findCombinations = (coinsArr, totalAmount) => {
    let combinations = [];

    const find = (remaining, path, startIndex) => {
      if (remaining === 0) {
        combinations.push([...path]);
        return;
      }
      if (remaining < 0) {
        return;
      }

      for (let i = startIndex; i < coinsArr.length; i++) {
        find(remaining - coinsArr[i], [...path, coinsArr[i]], i);
      }
    };

    find(totalAmount, [], 0);
    setAnswer(combinations);
  };

  return (
    <div>
      <Header>
        <div className='md:text-3xl sm:text-2xl text-xl font-bold flex justify-center items-center pb-4'>Coin change simulator</div>
        <CoinList coins={parseCoins(coinInput)} />
      </Header>
      <div className="w-full bg-green-600 text-white text-center py-2 px-4 text-xl font-bold shadow-md mb-4 rounded">
        <b>Combinations :</b> <br />
        {answer.length}
      </div>
      <Inputs
        amount={amount}
        setAmount={setAmount}
        coinInput={coinInput}
        setCoinInput={setCoinInput}
        error={error}
      />
      <RunButton onClick={generate} />
      <CombinationDisplay combinations={answer} />
    </div>
  );
}