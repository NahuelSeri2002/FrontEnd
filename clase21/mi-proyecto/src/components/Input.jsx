import "../App.css"

function Input({type, label, value, labelId, evento, placeholder}) {
  return (
    <div className="campo">
      <label htmlFor={labelId}>{label}</label>
      <input
        type={type}
        id={labelId}
        value={value}
        placeholder={placeholder}
        onChange={evento}
      />
    </div>
  );
}

export default Input
