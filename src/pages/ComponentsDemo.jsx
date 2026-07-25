import { Button, Input, Modal, Toast, Loader } from "../components/ui";

function ComponentsDemo() {
  return (
    <div>

      <h1>Component Library Demo</h1>

      <Button text="Click Me" />

      <Input 
        placeholder="Enter text"
        type="text"
      />

      <Modal isOpen={true}>
        <h2>Demo Modal</h2>
      </Modal>

      <Toast 
        message="Success message"
        type="Success"
      />

      <Loader text="Please wait" />

    </div>
  );
}

export default ComponentsDemo;