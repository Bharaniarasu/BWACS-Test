import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

import businessIcon from "../assets/images/busines.png";

const Business = () => {
  return (
    <Row className="p-2 alt-business" align="middle">
      <Col span={10} offset={1} data-aos="fade-right" data-aos-duration="1000">
        <h2>Art</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
          asperiores reprehenderit illum ipsam molestias quaerat enim error
          architecto nulla voluptatum laboriosam molestiae libero suscipit et
          laudantium harum adipisci blanditiis officiis. Soluta, ut, dolor et
          inventore libero laudantium omnis ullam doloribus magni, rerum odit!
          Sint tempore culpa aliquid natus quasi, velit laboriosam inventore
          doloribus est in non delectus eaque? Sed reiciendis itaque dolores quo
          adipisci, sint quas harum officia. Assumenda odit dolor vero animi
          fuga, quae, possimus ipsum alias placeat consequatur, quo numquam
          voluptatibus quisquam minus aliquid sequi rem eligendi perferendis
          quis dolorum! Ipsa unde aperiam ab voluptatum voluptatibus vitae
          quaerat?
        </p>
        <Button className="bwaap-btn-primary">Click Here</Button>
      </Col>
      <Col span={10} offset={2} data-aos="fade-left" data-aos-duration="1000">
        <h2>Art</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
          asperiores reprehenderit illum ipsam molestias quaerat enim error
          architecto nulla voluptatum laboriosam molestiae libero suscipit et
          laudantium harum adipisci blanditiis officiis. Soluta, ut, dolor et
          inventore libero laudantium omnis ullam doloribus magni, rerum odit!
          Sint tempore culpa aliquid natus quasi, velit laboriosam inventore
          doloribus est in non delectus eaque? Sed reiciendis itaque dolores quo
          adipisci, sint quas harum officia. Assumenda odit dolor vero animi
          fuga, quae, possimus ipsum alias placeat consequatur, quo numquam
          voluptatibus quisquam minus aliquid sequi rem eligendi perferendis
          quis dolorum! Ipsa unde aperiam ab voluptatum voluptatibus vitae
          quaerat?
        </p>
        <Button className="bwaap-btn-primary">Click Here</Button>
      </Col>
      {/* <Col
        span={7}
        offset={1}
        data-aos="fade-up"
        data-aos-duration="1000"
        className="img-an"
      >
        <img src={businessIcon} width="100%" alt="bwaap" />
      </Col> */}
    </Row>
  );
};
export default withRouter(Business);
