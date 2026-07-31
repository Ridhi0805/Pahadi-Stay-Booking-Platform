/**
 * Loader Component
 * Props:
 * size: controls loader size
 * text: loading message
 */

function Loader({ size, text }) {
  return (
    <div>
      Loading... {text}
    </div>
  );
}

export default Loader;