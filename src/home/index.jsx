import React from "react";
import { withRouter } from "react-router-dom";

import Banner from "./banner";
import Moto from "./moto";
import AboutBwacs from "./aboutBwacs";
import Silambam from './silambam';
import Business from "./business";
import Culturals from "./culturals";
import SmartFarmsAndProducts from "./smartFarmsAndProducts";
import OmniChannel from "./omniChannel";
import Tradition from "./tradition";

const Home = () => (
  <>
    <Banner />
     {/* <Moto /> */}
    <AboutBwacs />
   <Silambam />
     <Tradition />
   <Culturals />
   <Business />
   {/*   <SmartFarmsAndProducts />
    <OmniChannel /> */}
  </>
);

export default withRouter(Home);
