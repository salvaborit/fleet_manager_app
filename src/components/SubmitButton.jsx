import React from 'react';

const SubmitButton = ({onClick, disabled}) => {
  return (
    <button type="submit" onClick={onClick} disabled={disabled}>
      Entrar
    </button>
  );
};

const App = () => {
    const handleSubmit = () => {
      // do something on submit
    };
  
    return (
      <div>
        <SubmitButton onClick={handleSubmit} />
      </div>
    );
  }

export default SubmitButton;
