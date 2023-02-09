import Overview from "./component/Overview";
import React from "react";
import app from './app.css';
class App extends React.Component {
  constructor () {
    super();
   
      this.state = {
        task: {text: '',number: 1},
        tasks: [],
      }

  }

  handleChange = (e) =>{
    e.preventDefault();
    this.setState({
      task : {
        text: e.target.value,
        number: this.state.task.number,
      }
    });
  };
  submitButton = (e) =>{
    e.preventDefault();
         this.updateState();
  }
  handleClick = (e) => {
    e.preventDefault();
    this.updateState();
  }
  updateState(){console.log(this.state.task);
    this.setState({ 
      
      tasks: this.state.tasks.concat(this.state.task),
      task: {text: '', number: this.state.task.number+1},
    })
  }

  render() {
  return (
    <div className="App">
   
      <div>
          <form onSubmit={this.submitButton}   >
              <label htmlFor='task'>TEST:</label>
              <input type='text' id="task"  value={this.state.task.text} onChange={this.handleChange}></input>
              <input type='button' value="Submit"  onClick={this.handleClick}></input>
          </form>
      </div>

      <Overview name={this.state.tasks}></Overview>
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
