import React, { useState } from 'react';

function InputText() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <label>
        Input Text:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <p>Value: {value}</p>
    </form>
  );
}

export default InputText;