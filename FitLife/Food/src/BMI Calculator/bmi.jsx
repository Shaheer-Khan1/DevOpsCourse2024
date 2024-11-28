import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const isPositiveNumber = (value) => {
    return !isNaN(value) && Number(value) > 0;
  };

  const convertHeightToMeters = (height, unit) => {
    if (unit === 'cm') {
      return height / 100; // Convert cm to meters
    } else if (unit === 'ft') {
      return height * 0.3048; // Convert feet to meters
    }
    return 0;
  };

  const convertWeightToKg = (weight, unit) => {
    if (unit === 'kg') {
      return weight;
    } else if (unit === 'lb') {
      return weight * 0.453592; // Convert pounds to kilograms
    }
    return 0;
  };

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (!isPositiveNumber(weightValue) || !isPositiveNumber(heightValue)) {
      setBmi(null);
      setMessage('Invalid input. Please enter positive numbers only.');
      return;
    }

    const heightInMeters = convertHeightToMeters(heightValue, heightUnit);
    const weightInKg = convertWeightToKg(weightValue, weightUnit);
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    
    let resultMessage = '';
    if (bmiValue < 18.5) {
      resultMessage = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      resultMessage = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      resultMessage = 'Overweight';
    } else {
      resultMessage = 'Obesity';
    }
    setMessage(resultMessage);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>BMI Calculator</h2>
      <div style={styles.form}>
        <label style={styles.label}>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={styles.input}
          />
          <select
            value={weightUnit}
            onChange={(e) => setWeightUnit(e.target.value)}
            style={styles.select}
          >
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </label>
        <label style={styles.label}>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={styles.input}
          />
          <select
            value={heightUnit}
            onChange={(e) => setHeightUnit(e.target.value)}
            style={styles.select}
          >
            <option value="cm">cm</option>
            <option value="ft">ft</option>
          </select>
        </label>
        <button onClick={calculateBMI} style={styles.button}>Calculate BMI</button>
      </div>
      {bmi !== null && (
        <div style={styles.result}>
          {message && <p>{message}</p>}
          {bmi && !message && (
            <>
              <h3>Your BMI: {bmi}</h3>
              <p>{message}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center'
  },
  heading: {
    marginBottom: '20px',
    color: '#000000' // Changed color to black
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px' ,
    color: '#000000'
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginTop: '5px'
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginTop: '5px',
    marginBottom: '10px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  result: {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000000'
  }
};

export default BMICalculator;
