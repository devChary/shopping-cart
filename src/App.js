import { Routes } from 'react-router';

// Layout Components
import Header from 'components/UI/organisms/header';
import Footer from 'components/UI/organisms/footer';

import { WithSidebarRoute, WithoutSidebarRoute } from 'components/HOCs/route-wrapper.component';

import routes from './utils/routes';

import './App.scss';

function App() {

  const { withoutSidebarRoutes, withSidebarRoutes } = routes;

  return (
    <div className="container">
      <Header />
      <>
        <Routes>
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
        </Routes>
      </>
      <Footer />

    </div>
  );
}

export default App;
