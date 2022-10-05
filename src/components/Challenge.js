import React from 'react';

const Challenge = () => {
  const n1 = 20;
  const n2 = 300;
  return (
    <div>
      <p>{n1}</p>
      <p>{n2}</p>
      <button onClick={() => console.log(n1 + n2)}>Somar</button>
    </div>
  );
};

export default Challenge;
