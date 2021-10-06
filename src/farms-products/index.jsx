import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";
// import { RightOutlined } from '@ant-design/icons';
// import Section1 from "./section-1";
import aboutImg from "../assets/images/020.png";
// import missionImg from "../assets/images/mission.png";

const Farmsplantation = () => 
<>
<Row className="inner-banner section">
    <Col  span={24} className="">
        <div className="bwaap-title-common">
            <h3>bwaap</h3>
            <h2>Farms & Plantations</h2>
        </div>
    </Col>
</Row>

<Row className="section about-sec">
    <Col className="" span={12}>
        <div className="content">
            <h3>about</h3>
            <h2>Farms & Plantations</h2>
            <div className="quotes">               
                <h3><span>W</span>e come from the earth, we return to the earth, and in between, we garden the earth, <br/><span class="author"> says Bees.</span>
                <br/><span>W</span>e follow the path of Bees nurturing World, <br/><span class="author">says Bees World Organization. </span> </h3>
            </div>                  
        </div>
    </Col>

    <Col span={12}>
    <img src={aboutImg} width="100%" alt="bwaap" />
    </Col>

    <Col span={24}>
        <div className="content">
            <p>Bees are the batteries of orchards, gardens, and they pollinate crops, serve the Food Cycle, and nurtures Nature. Bees World Organization desires to mimic Bees in nurturing Nature, People & Planet Earth.</p>
            <p>
            BWAAP aims to plant millions of trees through its Smart Agroforestry & Agri-Plantation initiative benefiting Nature, Society & Country to the greatest level. BWAAP also desires to bring like-minded people who wish to spread Health, Wealth, Success, Spirituality & Happiness to the complete Humanity and to create a World of Well-Being.  
            </p>
            <p>
            BWAAP through its Smart Agroforestry project envisages creating a land-use management system that integrates trees on farmlands & innovative technologies like Smart IoT sensors, Drones, Autonomous vehicles, etc., in promoting diversity, ecosystem sustainability, benefitting microclimate moderation, natural resources conservation, and carbon sequestration in the long run. It would be developed as a dynamic, ecologically based, natural resource management system that, through the integration of woody perennials on farms in the agricultural landscape, diversifies and sustains production and also builds social institutions. It also involves integrated soil fertility management and technology-aided land restoration & management which could drastically reduce soil degradation, soil compaction paving way for conservation agriculture.  
            </p>
        </div>
    </Col>
</Row>


</>;

export default withRouter(Farmsplantation);
