import React, { useState } from 'react';

const DeficitCalculator = () => {
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [calorieDeficit, setCalorieDeficit] = useState(null);
  const [message, setMessage] = useState('');

  const isPositiveNumber = (value) => {
    return !isNaN(value) && Number(value) > 0;
  };

  const calculateDeficit = () => {
    const currentWeightValue = parseFloat(currentWeight);
    const targetWeightValue = parseFloat(targetWeight);
    const durationValue = parseFloat(duration);

    if (!isPositiveNumber(currentWeightValue) || !isPositiveNumber(targetWeightValue) || !isPositiveNumber(durationValue)) {
      setCalorieDeficit(null);
      setMessage('Invalid input. Please enter positive numbers only.');
      return;
    }

    // Calculate the total weight to lose
    const weightToLose = currentWeightValue - targetWeightValue;
    if (weightToLose <= 0) {
      setCalorieDeficit(null);
      setMessage('Target weight must be less than current weight.');
      return;
    }

    // Calorie deficit needed to lose weight
    const caloriesPerKg = 7700; // Approximate calories required to lose 1 kg
    const totalCaloriesNeeded = weightToLose * caloriesPerKg;
    const dailyCalorieDeficit = totalCaloriesNeeded / duration;

    setCalorieDeficit(dailyCalorieDeficit.toFixed(2));
    setMessage(`You need a daily calorie deficit of ${dailyCalorieDeficit.toFixed(2)} calories.`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Calorie Deficit Calculator</h2>
      <div style={styles.form}>
        <label style={styles.label}>
          Current Weight (kg):
          <input
            type="number"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Target Weight (kg):
          <input
            type="number"
            value={targetWeight}
            onChange={(e) => setTargetWeight(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Duration (days):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            style={styles.input}
          />
        </label>
        <button onClick={calculateDeficit} style={styles.button}>Calculate Deficit</button>
      </div>
      {calorieDeficit !== null && (
        <div style={styles.result}>
          {message && <p>{message}</p>}
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
    color: '#000000' // Heading color
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px' ,
    color: '#000000'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginTop: '5px'
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

export default DeficitCalculator;
