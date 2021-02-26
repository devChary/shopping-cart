import { Switch, Route } from 'react-router-dom';

// Layout Components
import Header from './components/UI/organisms/header/header.component';
import Sidenav from './components/UI/organisms/sidenav/sidenav.component';
import Footer from './components/UI/organisms/footer/footer.component';

import routes from './utils/routes';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidenav />
        <Switch>
          {
            routes.map(route => (
              <Route key={route.path} {...route} />
            ))
          }
          {/* <Route exact path='/' component={Homepage} />
          <Route path='/products' component={ProductsPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} /> */}
        </Switch>
      </div>
      <Footer />

    </div>
  );
}

export default App;
