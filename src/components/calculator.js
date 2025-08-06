import React, { useState } from "react";

const Calculator = () => {
    const [result, setResult] = useState("");
    const [input, setInput] = useState("");

    const buttons = [
        '7', '8', '9', '+',
        '4', '5', '6', '-',
        '1', '2', '3', '*',
        'C', '0', '=', '/'
    ];

    const handleClick = (value) => {
        if (value === 'C') {
            setInput("");
            setResult("");
        } else if (value === '=') {
            calculateResult();
        } else {
            setInput(input + value);
        }
    };

    const calculateResult = () => {
        try {
            if (input.trim() === '') {
                setResult('Error');
            } else {
                const evalResult = eval(input);
                setResult(String(evalResult));
            }
        } catch (error) {
            setResult("Error");
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '250px', margin: '0 auto' }}>
        <h2>Calculator</h2>

        <input
            type="text"
            value={input}
            readOnly
            style={{ width: '100%', height: '40px', fontSize: '18px', marginBottom: '10px', textAlign: 'right' }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {buttons.map((btn) => (
            <button
                key={btn}
                onClick={() => handleClick(btn)}
                style={{ padding: '10px', fontSize: '18px' }}
            >
                {btn}
            </button>
            ))}
        </div>

        {result !== '' && (
            <div style={{ marginTop: '20px', fontSize: '20px' }}>
            {result}
            </div>
        )}
        </div>
    );
};

export default Calculator;