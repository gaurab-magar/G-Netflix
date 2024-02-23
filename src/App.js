import './App.css';
import {BrowserRouter as Router} from  'react-router-dom';
import { AllRoutes } from './Routes/AllRoutes';
import { LayoutPage } from './Components/LayOUts/LayoutPage';
function App() {
  return (
    <div className="App">
      <Router>
        <LayoutPage>
          <AllRoutes />
        </LayoutPage>
      </Router>
    </div>
  );
}

export default App;
