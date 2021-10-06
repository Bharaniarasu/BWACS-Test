import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";

import missionImg from "../../assets/images/mission.png";
// import healthIcon from "../../assets/images/icons/health.png";
// import wealthIcon from "../../assets/images/icons/wealth.png";
// import successIcon from "../../assets/images/icons/success.png";
// import spritualityIcon from "../../assets/images/icons/sprituality.png";
// import happinessIcon from "../../assets/images/icons/happiness.png";

const About = () => (
  <>
    <Row className="about-banner section">
      <Col span={24} className="">
        <div className="bwaap-title-common">
          <h3>bwaap</h3>
          <h2>GOVERNMENT ACTS REGULATED LIMITED COMPANY  </h2>
        </div>
      </Col>
    </Row>

    <Row className="bwaap-vision ">
      <div className="overlay"></div>
      <Col className="circle-vision" span={18} offset={3}>
        <div className="cicrle-wrapper">
          <div className="vision-title">
            <h3>bwaap</h3>
            <h2>vision</h2>
          </div>
          <div className="circle deg-0">
            <h2>
              <span>P</span>artners
            </h2>
          </div>
          <div className="circle deg-25">
            <h2>
              <span>P</span>lanet{" "}
            </h2>
          </div>
          <div className="circle deg-50">
            <h2>
              <span>P</span>lantation
            </h2>
          </div>
          <div className="circle deg-75">
            <h2>
              <span>P</span>eople{" "}
            </h2>
          </div>
          <div className="circle deg-100">
            <h2>
              <span>P</span>ortfolio{" "}
            </h2>
          </div>
          <div className="circle deg-125">
            <h2>
              <span>P</span>roductivity{" "}
            </h2>
          </div>
          <div className="circle deg-150">
            <h2>
              <span>P</span>rosperity {" "}
            </h2>
          </div>
        </div>
      </Col>
    </Row>

    <Row className="section bwaap-mission">
      <Col span={14}>
        <div className="bwaap-title-common">
          <h3>bwaap</h3>
          <h2>Mission</h2>
        </div>
        <div className="mission-list">
          <ul>
            <li>
              <span>
                <RightOutlined />
              </span>{" "}
              BWAAP predominantly wishes abundant Health, Wealth, Success,
              Spirituality & Happiness to complete Humanity and to create
              a World of Well-Being. {" "}
            </li>
            <li>
              <span>
                <RightOutlined />
              </span>{" "}
              BWAAP envisioned to regenerate Critically
              Endangered species- Aquilaria crassna (Agar Tree
              and Endangered species - Pterocarpus santalinus (Red Sandalwood)
              on a larger scale. {" "}
            </li>
            <li>
              <span>
                <RightOutlined />
              </span>{" "}
              To groom Millions of Entrepreneurs through collaborative work
              involving the Consumer Integrated model by transforming People
              day-to-day consumerism into a Business Advantage. {" "}
            </li>
            <li>
              <span>
                <RightOutlined />
              </span>{" "}
              To offer not just superior products for consumers but
              also Entrepreneurial opportunities as Business
              Owners & Franchising opportunities involving integrated Business
              Development. {" "}
            </li>
            <li>
              <span>
                <RightOutlined />
              </span>{" "}
              To accelerate the shareholder's equity value along with the
              company's brand value appreciation and business expansion. {" "}
            </li>
          </ul>
        </div>
      </Col>

      <Col span={10} className="mission-img">
        <img src={missionImg} width="100%" alt="bwaap" />
      </Col>
    </Row>
  </>
);

export default withRouter(About);
