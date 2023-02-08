import Overview from "./component/Overview";
import React from "react";

class App extends React.Component {
  constructor () {
    super();

      this.state = {
        name: '',
      }

      this.handleClick = this.handleClick.bind(this);
  }
    handleClick(e){
    e.preventDefault();

    const nameHolder = e.target.name.value;
      this.setState({ 
        name: nameHolder,
      })

  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div>
          <form onSubmit={this.handleClick} >
              <label htmlFor='name'>TEST:</label>
              <input type='text' id="name"></input>
              <input type='button' value="Submit" ></input>
          </form>
      </div>

      <Overview name={this.state.name}></Overview>
    </div>
  );
}

}

// MAYBE WHEN I LEARN REACT HOOK OR SOMETHING??
// function App() {

//       const state = {
//         name: '',
//       }

//       // this.handleClick = this.handleClick.bind(this);

//    function handleClick(e){
//     e.preventDefault();
//     const nameHolder = e.target.name.value;
//     console.log(e.target.name.value);

//       App.setState({ 
//         name: nameHolder,
//       })

//   }
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//       <div>
//           <form onSubmit={handleClick} >
//               <label htmlFor='name'>TEST:</label>
//               <input type='text' id="name"></input>
//               <input type='button' value="Submit" ></input>
//           </form>
//       </div>

//       <Overview name={state.name}></Overview>
//     </div>
//   );
// }
export default App;
