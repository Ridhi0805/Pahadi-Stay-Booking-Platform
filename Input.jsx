/**
 * Input Component
 * Props:
 * placeholder: text shown inside input
 * value: input value
 * onChange: function when value changes
 * type: input type (text/password/email)
 */

function Input({ placeholder, value, onChange, type }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;