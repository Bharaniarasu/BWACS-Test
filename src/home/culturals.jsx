import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const GlobalChallenges = (props) => {
  return (
    <Row className="bwaap-global p-2">
      <Col
        span={8}
        align="center"
        data-aos="fade-right"
        data-aos-duration="3000"
         className="bwaap-global-text"
      > 
          <img className="fade-img" src='https://image.shutterstock.com/image-vector/dancing-tamil-couple-india-vector-600w-1743737825.jpg'/>
          <Button className="bwaap-btn-secondary">Click Here</Button>
      </Col>
      <Col
        span={8}
        align="center"
        data-aos="fade-up"
        data-aos-duration="3000"
        className="bwaap-global-text"
      >
          <img className="fade-img" src='https://image.shutterstock.com/image-vector/ball-soccer-player-600w-616755164.jpg'/>
          <Button className="bwaap-btn-secondary">Click Here</Button>
      </Col>
      <Col
        span={8}
        align="center"
        data-aos="fade-left"
        data-aos-duration="3000"
         className="bwaap-global-text"
      >
          <img className="fade-img" src='https://image.shutterstock.com/image-photo/stone-sculptures-thirukkurungudi-temple-vaishnava-600w-1920430484.jpg'/>
          <Button className="bwaap-btn-secondary">Click Here</Button>
      </Col>
    </Row>
  );
};
export default withRouter(GlobalChallenges);
