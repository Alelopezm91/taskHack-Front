
const InputGroup = ({
  label,
  id,
  name,
  type,
  placeholder,
  register,
  error,
  options,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {type === "select" ? (
        <select className="form-select" id={id} {...register(id)}>
          {options.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className={`form-control ${error ? "is-invalid" : ""}`}
          id={id}
          placeholder={placeholder}
          {...register(id)}
        />
      )}
      <p className="invalid-feedback">{error}</p>
    </div>
  );
};

InputGroup.defaultProps = {
  type: "text",
};

export default InputGroup;
