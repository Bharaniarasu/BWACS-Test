import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";

import agarwoodIcon from "../assets/images/icons/agar-wood.png";
import redsanderIcon from "../assets/images/icons/red-sanders.png";
import vegtableIcon from "../assets/images/icons/vegetables.png";
import fruitsIcon from "../assets/images/icons/fruits.png";
import honeyIcon from "../assets/images/icons/honey.png";
import mediplantIcon from "../assets/images/icons/medicinalplant.png";
import livestockIcon from "../assets/images/icons/livestock.png";
import fishIcon from "../assets/images/icons/fish.png";
import spicesIcon from "../assets/images/icons/spices.png";

const SmartFarmsAndProducts = (props) => {
  return (
    <Row className="farms-plantations p-2">
      <Col span={24} align="center">
      <h2>Smart Farms And Products</h2>
      <p>
        BWAAP proposed to cultivate through Open Field Smart Farms & Plantations
        and Smart Autonomous Green house farms encompassing around 3000 hectares
        in Southern Indian States & Assam by 2026. BWAAP intends to take up
        farming of Agarwood, Red sanders, Organic Medi-Honey, Organic Fruits &
        Vegetables, Animal husbandry, Fish, Medicinal Plants & Aromatic Spices
        cultivation.
      </p>
      <p>
        At BWAAP, we produce a plethora of natural and organically prepared
        products like aroma enriched Agar items to make you feel calm and smell
        the Royal Fragrance, Multi Flavour Medi-Honey to enrich yourself with
        Vital Anti-Ageing & Vital Immune booster naturally, Fresh Organic,
        Nutrient Fruits & Vegetables, Natural Live Stock Products, Fishes,
        Spices and Medicinal Plants to make Customers/Shareholders experience
        the real taste of goodness paving way for holistic health.
      </p>
      </Col>
      <Col span={24}>
        <Row justify="space-around">
          <Col span={4}>
            <img src={livestockIcon} width="80%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
          <Col span={4}>
            <img src={livestockIcon} width="80%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
          <Col span={4}>
            <img src={livestockIcon} width="80%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
          <Col span={4}>
            <img src={livestockIcon} width="80%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
          <Col span={4}>
            <img src={livestockIcon} width="80%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
          <Col span={4}>
            <img src={livestockIcon} width="80%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
          <Col span={4}>
            <img src={livestockIcon} width="80%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
          <Col span={4}>
            <img src={livestockIcon} width="80%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
          <Col span={4}>
            <img src={livestockIcon} width="80%" alt="bwaap" />
            <h4>Livestock</h4>
          </Col>
        </Row>
      </Col>     
    </Row>
  );
};
export default withRouter(SmartFarmsAndProducts);
