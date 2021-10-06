import React, { lazy, Suspense } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { compose } from 'recompact';

import Loader from './shared/loader';
// import NotFound from './shared/not-found';

// note: Keep the components in ascending for standard
const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const VisionMission = lazy(() => import('./about/vision-mission'));
const modusOperandi = lazy(() => import('./about/modus-operandi'));
const Art = lazy(() => import('./art'));
const Business = lazy(() => import('./business'));
const ourResponsibility = lazy(() => import('./our-responsibility'));
const rightLivelihood = lazy(() => import('./right-livelihood'));
const Farmsproducts = lazy(() => import('./farms-products'));
const Technology = lazy(() => import('./technology'));

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-bwaap" component={About} />
      <Route exact path="/vision-mission" component={VisionMission} />
      <Route exact path="/modus-operandi" component={modusOperandi} />
      <Route exact path="/art" component={Art} />
      <Route exact path="/business" component={Business} />
      <Route exact path="/farms-and-products" component={Farmsproducts} />
      <Route exact path="/technology" component={Technology} />
      <Route exact path="/our-responsibility" component={ourResponsibility} />
      <Route exact path="/right-livelihood" component={rightLivelihood} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Suspense>
);
export default compose(withRouter)(Routes);
