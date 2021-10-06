import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";

import healthIcon from "../assets/images/icons/health.png";
import wealthIcon from "../assets/images/icons/wealth.png";
import successIcon from "../assets/images/icons/success.png";
import spritualityIcon from "../assets/images/icons/sprituality.png";
import happinessIcon from "../assets/images/icons/happiness.png";

const Moto = () => {
  return (
    <Row className="bwaap-moto" justify="space-around" align="middle">
          <Col span={3} data-aos="fade-up">
            <img src={healthIcon} alt="bwaap" />
            <h4>Health</h4>
          </Col>
          <Col span={3} data-aos="fade-up" data-aos-duration="1000">
            <img src={wealthIcon} alt="bwaap" />
            <h4>Wealth</h4>
          </Col>
          <Col span={3} data-aos="fade-up" data-aos-duration="3000">
            <img src={successIcon} alt="bwaap" />
            <h4>Success</h4>
          </Col>
          <Col span={3} data-aos="fade-up" data-aos-duration="3000">
            <img src={spritualityIcon} alt="bwaap" />
            <h4>Sprituality</h4>
          </Col>
          <Col span={3} data-aos="fade-up" data-aos-duration="3000">
            <img src={happinessIcon} alt="bwaap" />
            <h4>Happiness</h4>
          </Col>
    </Row>
  );
};

export default withRouter(Moto);
