import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "antd";
import TargetCircle from "../assets/images/target-circle.png";

const Rightlivelihood = () => {
  return (
    <Row className="p-2 alt-section">
      <Col span={24} data-aos="fade-up" data-aos-duration="2000" className="alt-section-text">
        <h2>Silambam</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nisi,
          ducimus voluptas, laborum et minus autem sequi nesciunt repellendus
          aliquam, suscipit fuga. Inventore culpa, ducimus quia quibusdam
          dolorum rerum ab suscipit sapiente praesentium nostrum quasi magni,
          ratione voluptas id non eligendi et animi minus mollitia enim labore?
          Culpa nemo non ipsum molestias, repellat impedit at corrupti commodi
          maiores reprehenderit dolore voluptates saepe sit tempore voluptate
          esse fugit consectetur excepturi est placeat nihil nisi eaque? In quas
          expedita nam deserunt minus animi est nisi eius, soluta laudantium,
          quibusdam ex consequuntur mollitia, ipsam commodi sint molestias
          explicabo? Repudiandae consectetur quia temporibus laboriosam
          recusandae dolores animi rem minus debitis. Ratione provident voluptas
          officiis vero dolorem quod perspiciatis neque molestias, harum ad
          quibusdam doloribus quidem magnam explicabo consequatur sunt optio
          possimus dolorum asperiores odit aut at? Tempora officiis, nihil magni
          aliquam laborum odit culpa quia, nisi vel omnis cupiditate labore
          repellendus. Ea nostrum commodi soluta aperiam, facere sequi
          consequatur alias harum sed veritatis aspernatur nemo, facilis quam
          ratione labore nihil dolorum dolores incidunt vitae. Ducimus atque
          molestias ullam. Qui quas fugiat dignissimos ratione ea. Autem
          expedita debitis nisi dignissimos facilis magnam voluptatum,
          voluptatibus modi aut tempora praesentium corrupti provident corporis
          earum nesciunt cumque sint.
        </p>
        <Button>Experinece Right livelihood</Button>
      </Col>
      {/* <Col span={6} offset={10} className="img-an">
        <img src={TargetCircle} width="100%" height="100%" />
      </Col> */}
    </Row>
  );
};
export default withRouter(Rightlivelihood);
