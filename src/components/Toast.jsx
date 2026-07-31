/**
 * Toast Component
 * Props:
 * message: text to display
 * type: success/error/info type
 */

function Toast({ message, type }) {
  return (
    <div>
      {type}: {message}
    </div>
  );
}

export default Toast;