import { useState, useEffect } from "react";

export default function MyComponent() {
  const [loading, setLoading] = useState(true);

  // Simulate a delay before rendering the component content
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  if (loading) {
    return <div>Loading content...</div>;
  }

  return (
    <div>
      <h2>My Component has been lazily loaded!</h2>
      <p>This content appeared after a delay.</p>
    </div>
  );
}
