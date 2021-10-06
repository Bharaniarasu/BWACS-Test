import React from "react";
import { withRouter } from "react-router-dom";

// import sample from "../assets/video/bwaap.mp4";
import culture from "../assets/images/culture.png";

import bannerImg from "../assets/images/imgbin_silambam-tamil-nadu-indian-martial-arts-kalaripayattu-png.png";
const Banner = () => {
  return (
    <div className="banner">
      <div className="home-header"></div>
      {/* <video autoPlay loop muted playsinline>
        <source src={sample} type="video/mp4" />
      </video> */}
      <h1 className="banner-h1">Let the Future experience<br/> our Past. </h1>
      {/* <img src={culture} className="bannerimg" width='100%'  type="image/jpg" />  */}
    </div>
  );
};

export default withRouter(Banner);
