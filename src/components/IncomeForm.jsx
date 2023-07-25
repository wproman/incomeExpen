import React, { useState } from 'react';

const IncomeForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code here to handle income transaction submission
    // For simplicity, you can just console.log the data for now.
    console.log('Income amount:', amount);
    console.log('Income description:', description);
  };

  return (
    <div>
      <h2>Income Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default IncomeForm;
