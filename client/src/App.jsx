import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './App.css';
import Main_Inv from './pages/Main_Inv';

function App (){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main_Inv} />
            <Route path="/home"  exact component={Main_Inv} /> 
          </Switch>
        </div>
      </Router>
    );
}
export default App;