import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

import businessIcon from "../assets/images/busines.png";

const OmniChannel = () => {
  return (
    <Row className="alt-section p-2">
       <Col span={7} data-aos="fade-up" data-aos-duration="1000" className="img-an">
        <img src={businessIcon} width="100%" alt="bwaap" />
      </Col>
      <Col
        span={16}
        offset={1}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2>Omni-channel</h2>
        <p>
          BWAAP will deploy Omni-channel retail providing seamless integrated
          customer experience whether the shareholder/ customer is
          shopping online from a mobile device, a laptop, or by telephone or in
          a brick-and-mortar physical store. Our Smart Farm To Smart Home model
          paves way for a Rapid Delivery to get our farm fresh products directly
          to your home. we will make rapid processing and Delivering and also
          you can Monitor orders real-time, quick & accurately.
        </p>
        <Button>About Us</Button>
      </Col>
    </Row>
  );
};
export default withRouter(OmniChannel);
