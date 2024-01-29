import React, { useState, useEffect } from 'react';

const Joksie = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
          throw new Error('Failed to fetch joke');
        }
        const data = await response.json();
        setJoke(data.value);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching joke:', error);
        setLoading(false);
      }
    };

    fetchJoke();

    // Cleanup function
    return () => {
      // Any cleanup code can go here
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <div>
      {loading ? (
        <p>Loading joke...</p>
      ) : (
        <div>
          <h2>Life is all about jokes , how about these 😂😂😂:</h2>
          <p>{joke}</p>
        </div>
      )}
    </div>
  );
};

export default Joksie;
