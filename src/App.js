import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Sidebar/>
      </div>
    </Router>
  );
}

export default App;
