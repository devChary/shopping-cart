import { Switch, Route } from 'react-router-dom';

// Layout Components
import Header from './components/header/header.component';
import Sidenav from './components/sidenav/sidenav.component';
import Footer from './components/footer/footer.component';

// Pages
import Homepage from './pages/homepage/homepage.component';
import ProductsPage from './pages/products/products.component';

// ---Auth
import LoginPage from './pages/login/login.component';
import SignupPage from './pages/signup/signup.component';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidenav />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/products' component={ProductsPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} />
        </Switch>
      </div>
      <Footer />

    </div>
  );
}

export default App;
