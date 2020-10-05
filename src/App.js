import React from 'react';


// function App() {
//   const dom = "Yo"
//   return (
//     <React.Fragment>
//       <div>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => { console.log("daichi") }}></input>
//       </div>

//     </React.Fragment >
//   );
// }

const App = () => {

  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 22 },
    { name: "Noname" }
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
    <div>
      Hi,I am {props.name} and {props.age} years old !
    </div>
  )
}

// User.defaultProps = {
//   age: 1
// }

export default App;
