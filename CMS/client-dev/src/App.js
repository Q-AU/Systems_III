import React from 'react'
import './App.css'

class App extends React.Component
{
  ///The constructor of our main view component, you can pass parameters as props
 constructor(props)
 {
   super(props);
   //state is where our "global" variable will be store
   this.state={
     CurrentColor:"white"
   }
 } 


QChangeViewerBG=(index)=>
{
 const SeccionsBG=["white","gray","blue","green","orange","yellow"]
  this.setState({
    CurrentColor:SeccionsBG[index]
  })
} 

render()
{
//Accesing the state value of a variable
var color= this.state.CurrentColor

  return (
    // Main container
    <div>
      {/* Menu container */}
      <div>
          <ul>
              <li>
                <a class="active" 
                 href="#"
                 onClick={()=>this.QChangeViewerBG(0)}>Home</a>
              </li>
              <li>
                <a href="#"
                  onClick={()=>this.QChangeViewerBG(1)}>About</a>
              </li>
              <li>
                <a href="#"
                  onClick={()=>this.QChangeViewerBG(2)}>Novice</a>
              </li>
              <li>
                <a href="#"
                  onClick={()=>this.QChangeViewerBG(3)}>Create news</a>
              </li>
              <li>
                <a  href="#"
                  onClick={()=>this.QChangeViewerBG(4)}>Register user</a>
              </li>
              <li style={{float:"right"}}>
                <a href="#"
                 onClick={()=>this.QChangeViewerBG(5)}>Login</a>
              </li>
  
          </ul>
      </div>
      {/* Viewer */}
      <div id="viewer" style={{backgroundColor:`${color}`}}>
        Something different here per button
      </div>
    </div>
  )
}
}

export default App