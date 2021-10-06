import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

import businessIcon from "../assets/images/busines.png";

const Technologies = (props) => {
  return (
    <Row className="p-2 silambam">
      <Col span={12} data-aos="fade-up" data-aos-duration="2000" className="alt-section-text">
        <h2 className="preserve">Our traditional arts are disappearing. We're preserving one.</h2>
      </Col>
     
    </Row>
  );
};
export default withRouter(Technologies);
