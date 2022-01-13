import React from 'react'
//My custom components
import HomeView from './CustomComponents/HomeView'
import AboutView from './CustomComponents/AboutView'
import AddNovicaView from './CustomComponents/AddNovicaView'
import LoginView from './CustomComponents/LoginView'
import NoviceView from './CustomComponents/NoviceView'
import SignupView from './CustomComponents/SignupView'
import SingleNovicaView from './CustomComponents/SingleNovicaView'


class App extends React.Component
{
  constructor(props){
    super(props)
    this.state={
      CurrentPage:"home"
    }
  }

QGetView=(state)=>{
  let page = state.CurrentPage

  switch(page)
  {
    case "home":
      return <HomeView/>
    case "about":
      return <AboutView/>
    case "novice":
      return <NoviceView QIDFromChild={this.QSetView}/>
    case "addnew":
      return <AddNovicaView/>
    case "signup":
      return <SignupView/>
    case "login":
      return <LoginView/>
    case "novica":
      return <SingleNovicaView QPageFromChild={this.QSetView} />
    default:
      return <h1>I doesnt work</h1>
    
  }
}

QSetView=(obj)=>
{
  this.setState({
    CurrentPage:obj.page
  })
}


render(){ 
  console.log(this.state)
  return(
    <div id="APP" className="container">
        <div id="menu" className="row">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                <a onClick={()=>this.QSetView({page:"home"})} className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a onClick={()=>this.QSetView({page:"about"})} className="nav-link " href="#">About</a>
                    </li>

                    <li className="nav-item">
                      <a onClick={()=>this.QSetView({page:"novice"})} className="nav-link "  href="#">News</a>
                    </li>
                      
                    <li className="nav-item">
                      <a onClick={()=>this.QSetView({page:"addnew"})} className="nav-link">Add news</a>
                    </li>

                    <li className="nav-item"> 
                      <a onClick={()=>this.QSetView({page:"signup"})} className="nav-link " href="#">Sign up</a>
                    </li>

                    <li className="nav-item" >
                      <a onClick={()=>this.QSetView({page:"login"})} className="nav-link "  href="#">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>

        <div id="viewer" className="row container">
         {this.QGetView(this.state)}
        </div>
        

    </div>

  )
}

}

export default App