import React from "react";

class Overview extends React.Component {

  constructor(props){
    super(props);
  console.log(this.props.name);
    
  }
  
  render(){
    return (
        <div>
             <ul>
              <li >{this.props.name}</li>
            </ul>
        </div>
    )
  }
}


export default Overview