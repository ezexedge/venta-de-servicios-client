import {BrowserRouter ,Switch, Route,Link} from 'react-router-dom' 
import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import TopNav from './component/TopNav'

  


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopNav/>
        <Switch>

            <Route exact path="/" component={Home} />

            <Route exact path="/login" component={Login} />

            <Route exact path="/register" component={Register} />

        </Switch>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
