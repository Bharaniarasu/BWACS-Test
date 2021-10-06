import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Table, Tag, Space } from "antd";
// import { RightOutlined } from "@ant-design/icons";

import missionImg from "../../assets/images/mission.png";
const { Column, ColumnGroup } = Table;

const dataWhy = [
    {
        key:'1',
        why:"To nurture Nature by Planet Greening & To empower people to generate their own wealth and to live a Life with the Right Livelihood in a meaningful manner "
    }
]

const data = [
    {
      key: '1',
      how: 'Extensive Planting of trees, Adopting Mixed farming & using Natural inputs  ',
      what: 'Fostering Ecological Sustainability ',
     
    },
    {
      key: '2',
      how: 'Adopting Technology aided Smart Farming, Precision techniques, Natural Fertilizers & Adopting Organic Farming ',
      what: 'Increased yields, Productivity, Resource efficiency, Land & Soil conservation  ',      
    },
    {
      key: '3',
      how: 'Generating power through Solar panels on buildings and lands ',
      what: 'Nature-friendly Cleaner energy, Greener Brand image & Savings on Operational Costs ',
    },
    {
        key: '4',
        how: 'Providing Medicinal Honey, Nutrient-Rich Fruits & Vegetables, Spices & Plant products, Energy & Body Building Diary, Fish & Animal Products to People  ',
        what: 'Paving way for the Holistic health of Bees World family members',
    
    },
    {
        key: '5',
        how:'Ideal Smart Farm to Smart Home model and products offered at Shareholder price ',
        what:'Continuous Consumer Cost-Savings & Benefits to Bees World family members',
    },
    {
        key: '6',
        how:'Engaging People in Motivational, Self-Awareness & Self-realization activities ',
        what:'Augmenting Emotional & Spiritual well-being of Bees World family members',
    },
    {
        key: '7',
        how:'Making Organic Fruits & Vegetables accessible & economical ',
        what:'Consuming Organic Produce & leading a healthier life ',
    },
    {
        key: '8',
        how:'Providing Wealth creation opportunities to Bees World Family members  thereby they could better fulfill their healthcare, education, income and, security needs on their own Independently ',
        what:'Dignified living with Right Livelihood for Bees World family members',
    },
    {
        key: '9',
        how:'Providing Skill development, Training & Activities aiding Bees World family members to realize their own potential',
        what:'Bees World family members attaining Success through Franchise & Entrepreneurship opportunities ',
    },
    {
        key: '10',
        how:"Mostly Company Owned Properties, Buildings, Plantations, Farmlands & Ranches",
        what:"Company's Tangible Assets Growth & resulting Robust Financial Strength",
    },
    {
        key: '11',
        how:"Ascending Asset value, Profits on own products & Probable Company's Growth & Scale expansion",
        what:"Share value appreciation & Exponential ROI, Dividends to Bees World family members",
    },
    {
        key: '12',
        how:"Multi-Channel shopping like Real-time shopping, E-commerce, Brick and Mortar Store shopping, etc., & Expedited Delivery ",
        what:"OmniChannel seamless customer experience to Bees World family members",
    },
    {
        key: '13',
        how:"Through ATMA Bank & Emulating Bees characteristics like being Productive, Industrious, Selflessness, etc., in our Organizational Model ",
        what:"Bees Way of Prospering World, Nature & Bees World family members",
    },
    {
        key: '14',
        how:"Through Royal Bees Club, Promoting Altruistic, Volunteering living & Embracing Bees Service orientation in our lives  ",
        what:"Enhancing Humanitarian, Compassionate mindset & ensuing greater benefit to society through Charity ",
    },
  ];

const modusOperandi = () => (
  <>
    <Row className="inner-banner section">
      <Col span={24} className="" align="center">
        <div className="quotes">
          <span>"</span>
          <h3>
            Great things are done by a series of small things brought together
          </h3>
        </div>
      </Col>
    </Row>

    <Row className="section">
      <Col span={18} offset={3}>
        <div className="">
          <Table dataSource={dataWhy}>
            <Column title="WHY WE DO" dataIndex="why" key="why" />
          </Table>
        </div>
      </Col>
    </Row>

    <Row className="section">
      <Col span={18} offset={3}>
        <div className="">
          <Table dataSource={data}>
            <Column title=" HOW WE DO " dataIndex="how" key="how" />
            <Column title="WHAT WE COULD ACHIEVE " dataIndex="what" key="what" /> 
          </Table>
        </div>
      </Col>
    </Row>
  </>
);

export default withRouter(modusOperandi);
