import { Routes, Route } from 'react-router';
import '../public/favicon.ico';

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
              <Route key={route.path} path=":id"  {...route} element={<WithoutSidebarRoute />} />
            ))
          }
          {
            withSidebarRoutes.map(route => (
              <Route key={route.path} path=":id"  {...route} element={<WithSidebarRoute />} />
            ))
          }
        </Routes>
      </>
      <Footer />

    </div>
  );
}

export default App;
