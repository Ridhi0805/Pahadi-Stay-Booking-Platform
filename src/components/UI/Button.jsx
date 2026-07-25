/**
 * Button Component
 * Props:
 * text: button label
 * onClick: function to execute when clicked
 * type: button style type
 */

function Button({ text, onClick, type }) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;