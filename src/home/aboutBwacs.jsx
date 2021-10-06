import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";

const AboutBwaap = () => {
  return (
    <Row className=" about-bwaap p-2">
      <Col
        span={24}
        className="about-bwaap-text"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          necessitatibus aspernatur! Optio quaerat harum, saepe quod pariatur
          adipisci maiores tenetur voluptatum qui tempora quasi a reprehenderit
          nisi repudiandae in soluta ipsam ratione provident sapiente nulla quia
          magnam eius. Libero aut nulla earum fugit sunt voluptas! Dolore ex
          unde quasi quis reiciendis. Sapiente voluptatibus quo odio porro totam
          quam quidem optio, beatae fugiat alias debitis odit, sit magni
          cupiditate! Nam aut excepturi error reiciendis nisi deleniti,
          repudiandae exercitationem recusandae doloremque? Deserunt doloremque,
          quibusdam rem odit doloribus, quod modi tempore molestiae
          necessitatibus dolor nam? Necessitatibus, ad nihil! Dolores assumenda
          et quidem numquam.
        </p>
        <Button>About Us</Button>
      </Col>
    </Row>
  );
};
export default withRouter(AboutBwaap);
