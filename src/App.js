import {BrowserRouter ,Switch, Route,Link} from 'react-router-dom' 
import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import TopNav from './component/TopNav'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopNav/>
      <ToastContainer/>

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
