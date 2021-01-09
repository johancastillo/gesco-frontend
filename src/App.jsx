import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// ***** Components *****
import Menu from './components/menu/Menu';
import TopBar from './components/top-bar/TopBar';
import Home from './pages/Home';

import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';
import Providers from './pages/Providers';


function App() {
  return (
    <Router>
      
      <div className="conatiner-fluid">
        <div className="row">
          <TopBar />
          <Menu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/proveedores" component={Providers} />
                <Route exact path="/estadisticas" component={} />
                <Route component={PageNotFound} />
              </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
