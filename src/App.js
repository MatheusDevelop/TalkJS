import React from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Header from './Components/Header/Header'
import Talk from './Pages/Talk'
import Login from './Pages/Login'

// Redux
import {connect} from 'react-redux'


function App(props) {
  let logged=props.logged;
  return(
    
      <BrowserRouter>

        <Header />
        <Switch>
          <Route exact path="/" >
            {logged ? <Talk /> : <Login /> }
          </Route>
        </Switch>

      </BrowserRouter>
    
    
  )
}
const mapStateToProps = (state)=>({
    logged:state.userData.status
})
export default connect(mapStateToProps)(App);