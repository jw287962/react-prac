import React from "react";

class Overview extends React.Component {

  constructor(props){
    super(props);

  }

   deleteTask = (e) =>{
  e.preventDefault();
   let taskString = e.target.parentElement.textContent.substring(1);
   let num = 0;
  this.props.name.forEach(item => {
    let string = taskString.substring(0,taskString.indexOf(" "));
    if(item.number == string){
      console.log(item);
      this.setState({
        tasks: this.props.name.splice(num,1),
      })
    }
    num++;
  });
  }


  render(){
    return (
        <div>
             <ul> TASKS
            {this.props.name.map(
                (item, i) => {
                  return(
                    <li key={item.text+i}> {item.number} {item.text}  
                     <button onClick={this.deleteTask} >Delete</button>
                    </li>
                  )
                }
              )}
             
            </ul>
        </div>
    )
  }
}


export default Overview