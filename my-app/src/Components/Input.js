import React from 'react';

// Define the Input component as a functional component that accepts props
const Input = (props) => {
  // Destructure the props to get the label, value, and onChange function
  const { label, value, onChange } = props;
  
  // Return the input element with the label and value passed as props
  // The onChange function is called whenever the value of the input changes
  // and updates the state of the parent component
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

// Export the Input component so it can be used in other parts of the application
export default Input;





