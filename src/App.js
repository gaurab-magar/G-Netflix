import './App.css';
import {BrowserRouter as Router} from  'react-router-dom';
import { AllRoutes } from './Routes/AllRoutes';
import { LayoutPage } from './Components/LayOUts/LayoutPage';
import { Header } from './Components/LayOUts/Header';
import { Footer } from './Components/LayOUts/Footer';
function App() {
  return (
    <div className="App">
      <Router>
          <Header />
            <LayoutPage>
              <AllRoutes />
            </LayoutPage>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
