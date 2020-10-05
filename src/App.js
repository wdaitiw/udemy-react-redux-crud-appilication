import React from 'react';


function App() {
  const dom = "Yo"
  return (
    <React.Fragment>
      <div>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => { console.log("daichi") }}></input>
      </div>

    </React.Fragment >
  );
}

export default App;
