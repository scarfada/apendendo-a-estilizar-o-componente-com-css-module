import React from 'react';

const Event = () => {
  const HandleMyEvent = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div>
        <button onClick={HandleMyEvent()}>Click aqui</button>
      </div>
      <div>
        <button onClick={() => console.log('cliclou!')}>
          Click aqui também!
        </button>
      </div>
    </div>
  );
};

export default Event;
