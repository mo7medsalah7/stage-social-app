function InputItem({ label, inputName, inputType, inputValue, handleChange }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className="inputCLass"
        type={inputType}
        value={inputValue}
        name={inputName}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputItem;
