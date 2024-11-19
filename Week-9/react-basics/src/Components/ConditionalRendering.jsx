import React, { useState } from "react";

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && (
        <p>This message is conditionally rendered using the method 1!</p>
      )}
      {isVisible ? (
        <p>This message is conditionally rendered using the method 2!</p>
      ) : null}
    </div>
  );
};

export default ToggleMessage;
