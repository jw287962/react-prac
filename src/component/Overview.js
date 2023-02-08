import React from "react";

class Overview extends React.Component {

  constructor(props){
    super(props);
    
  }
  
  render(){
    return (
        <div>
             <ul> {this.props.name[0]}
            {this.props.name.map(
                function namesIterator(item, i){
                  if(i == 0){
                  i++;
                  return;
                  } 
                  return(
                    <li key={item+i}> {item} </li>
                  )
                }
              )}
              
              
            </ul>
        </div>
    )
  }
}


export default Overview