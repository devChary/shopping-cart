import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Sidenav from './components/sidenav/sidenav.component';

// Pages
import Homepage from './pages/homepage/homepage.component';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidenav />
        <Homepage />
      </div>

    </div>
  );
}

export default App;
