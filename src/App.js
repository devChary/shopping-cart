import { Switch, Route } from 'react-router-dom';

// Layout Components
import Header from './components/UI/organisms/header/header.component';
import Footer from './components/UI/organisms/footer/footer.component';

import { WithSidebarRoute, WithoutSidebarRoute } from './components/HOCs/route-wrapper.component';

import routes from './utils/routes';

import './App.scss';

function App() {

  const { withoutSidebarRoutes, withSidebarRoutes } = routes;

  return (
    <div className="container">
      <Header />
      <>
        <Switch>
          {
            withoutSidebarRoutes.map(route => (
              <WithoutSidebarRoute key={route.path} {...route} />
            ))
          }
          {
            withSidebarRoutes.map(route => (
              <WithSidebarRoute key={route.path} {...route} />
            ))
          }
        </Switch>
      </>
      <Footer />

    </div>
  );
}

export default App;
