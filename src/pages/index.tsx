import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import math from 'mathjs';


export default function Home() {
  const [input, setInput] = useState('');
  const [fontSize, setFontSize] = useState('4em'); // Initial font size
  const MAX_CHARACTERS = 15;

  const handleButtonClick = (value: number | string) => {
    setInput((prevInput) => prevInput + value);
  };
  

  const handleClearClick = () => {
    setInput('');
  };
  
  const handleEqualClick = () => {
    try {
      let modifiedInput = input.replace(/%/g, '/100');
      const result = eval(modifiedInput);
      setInput(String(result)); // Set the input to the result
    } catch (error) {
      setInput('Error'); // Display "Error" in case of an error
    }
  };

  
  useEffect(() => {
    if (input.length >= 10) {
      setFontSize('2.5em'); // Reduce font size once input reaches 11 characters
    } else {
      setFontSize('4em'); // Reset font size if input is less than 11 characters
    }
  }, [input]);
  
  
  return (
    <>
      <Head>
        <title>Calculator App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='w3-container w3-center w3-round-large' id='mCalc'>
        <div className='w3-container w3-round-large' id='sCalc'>
        <h1 id="input" style={{ fontSize }}>
      {input.length > MAX_CHARACTERS ? input.slice(0, MAX_CHARACTERS) : input}
    </h1>
                </div>
        <div className='w3-padding-8' id='calc'>
          <div className='w3-row' id='1'>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={handleClearClick}
            >
              C
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('+-')}
            >
              +-
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('%')}
            >
              %
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('/')}
            >
              /
            </button>
          </div>
          <div className='w3-row' id='2'>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('7')}
            >
              7
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('8')}
            >
              8
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('9')}
            >
              9
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('*')}
            >
              X
            </button>
          </div>
          <div className='w3-row' id='3'>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('4')}
            >
              4
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('5')}
            >
              5
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('6')}
            >
              6
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('-')}
            >
              -
            </button>
          </div>
          <div className='w3-row' id='4'>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('1')}
            >
              1
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('2')}
            >
              2
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('3')}
            >
              3
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('+')}
            >
              +
            </button>
          </div>
          <div className='w3-row' id='5'>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('0')}
            >
              0
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              onClick={() => handleButtonClick('.')}
            >
              .
            </button>
            <button
              className='w3-btn w3-padding-8 w3-round-large w3-ripple'
              id='btn'
              style={{ width: '44.4%', backgroundColor: '#ff4800' }}
              onClick={handleEqualClick}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
