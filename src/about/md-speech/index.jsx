import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";
// import { RightOutlined } from "@ant-design/icons";

import missionImg from "../../assets/images/mission.png";

const About = () => (
  <>
    <Row className="inner-banner section">
      <Col span={24} className="" align="center">
        <div className="quotes">
          <span>"</span>
          <h3>
            What you leave behind is not what is engraved in stone monuments,{" "}
            <br />
            but what is woven into the lives of others.
          </h3>
        </div>
      </Col>
    </Row>

    <Row className="section bwaap-mission">
      <Col span={14}>
        <div className="bwaap-title-common">
          <h3>bwaap</h3>
          <h2>
            MD'<span>s</span> Message
          </h2>
        </div>
        <div className="content">
          <p>
               I am pleased to share the broad insights on our Organization's
            Vision, purpose, and the difference we intend to create in
            prospering the People & Planet.   
          </p>
          <p>
            India is a Global agricultural powerhouse. It is the world’s largest
            producer of milk, pulses, cotton, and spices, and has the
            world’s largest cattle herd (buffaloes), as well as the largest area
            under wheat, rice, and cotton. It is the second-largest producer
            of rice, wheat, sugarcane, sheep & goat meat, fruits, vegetables,
            and tea. Agriculture accounts for nearly 18% of India's economic
            output and 47% of India's workforce. Economists suggest Agriculture
            has a pivotal role to play in helping the country achieve its goal
            of becoming a $5 trillion economy, and BWAAP will contribute its
            part in achieving it through our Smart Farming initiative. 
          </p>
        </div>
      </Col>

      <Col span={10} className="mission-img">
        <img src={missionImg} width="100%" alt="bwaap" />
      </Col>
    </Row>

    <Row className="mds-speech section">
      <Col span={24}>
        <div className="">
          <p>
            Though India spearheads the World's Agriculture production, India’s
            food security still depends on producing cereal crops, as well as
            increasing its production of fruits, vegetables, and milk to meet
            the demands of a growing population with rising incomes. Moreover,
            there are nearly 189 million undernourished people in India, which
            is a quarter of the world's hunger burden. Also, roughly 43% of
            children in India are chronically undernourished. India ranks 76 out
            of 113 major countries in terms of the Food security index 2018.
            India lagging far behind in terms of quality protein and nutrient
            intake of 20%. In order to get rid of this food problem,
            a productive, competitive, diversified, and sustainable agricultural
            sector will need to emerge at an accelerated pace. BWAAP aims
            at enhancing the Food Security Index by implementing its Smart
            Technology-based Agroforestry & Agri-Plantation based Organic
            farming on a large-scale and make available a diverse range of
            nutrient-rich food products like pulses, milk, eggs, meat, fish,
            chicken, etc., at shareholders prices through its Smart farm to
            Smart home model.  
          </p>
          <p>
            BWAAP's work would also support the Nation's dream of enhancing the
            Rainbow Revolution, an integrated development programme
            of agriculture, horticulture, forestry, sugarcane, fishery, poultry,
            and animal husbandry through advanced farm techniques, scientific
            planning & Execution, etc., 
          </p>
        </div>
      </Col>
    </Row>

    <Row className="section bwaap-mission">
      <Col span={10} className="mission-img">
        <img src={missionImg} width="100%" alt="bwaap" />
      </Col>

      <Col span={14}>
        <div className="content">
          <p>
               In Tree Management, the world's overall tree leader is Russia,
            with 642 billion trees, reports The Washington Post, which analyzed
            the data presented by researchers. Next is Canada with 318 billion
            trees and Brazil with 302 billion. The United States comes in fourth
            with 228 billion trees and other countries with significant tree
            wealth include China (140 billion), the Democratic Republic of the
            Congo (100 billion), Indonesia (81 billion), and Australia (77
            billion). There are only 35 billion trees in India to shade a
            population of 1.38 billion (MOSPI, 2020) leading to just 28 trees
            per person compared to Brazil which has 301 billion trees (1,494 per
            person), Canada 318 billion (8,953 per person), and China 139
            billion (102 trees per person) and it is our shared responsibility
            as Indians to widen India's tree cover matching with India's
            burgeoning population (India accounts for a meager 2.4 % of
            the world surface area yet it supports and sustains a whopping 17.7
            % of the world population and experts forecasting that India will
            cross China as the world's most populous country by 2027).
          </p>
          <p>
            BWAAP's Smart Agroforestry initiative aims at enhancing the
            country's Tree Intensity & Trees per capita nationally and
            also globally. The Agroforestry project will also benefit
            through microclimate moderation and natural resources conservation
            in the short run and carbon sequestration in the long run. 
          </p>
        </div>
      </Col>
    </Row>

    <Row className="mds-speech section">
      <Col span={24}>
        <div className="">
          <p>
            We as Bees World Organization wishes to bio-mimic Bees working
            model as a method for Human Development through SOCIAL
            ENTREPRENEURSHIP. Bees are exemplary players who work selflessly,
            productively, and with much coordination to attain a Coherent
            Vision. Honey Bees are LONG TERM MAXIMISERS and their basic strategy
            is to maximize returns over a broad geographic area and extended
            time horizon. We as Bees of this Organization not only work together
            to achieve a common goal but in the process will also create a
            highly coordinated, efficient, and remarkably productive
            Organization.  <br/><br/>
            Like the Queen Bee delegates the authority
            relentlessly to the Worker bees, Our organization will push
            decision-making much DECENTRALIZED to enable decisions taken on
            local cues and requirements for being more Agile and Responsive to
            changing circumstances of the World.    <br/><br/>
            We aim at maintaining THE 
            HIVE CULTURE to work on well-strategized Goals promoting Social
            versus Self-interested Actions, predominantly building Higher Trust
            among the Bees World family (members of Organization - Consumers,
            Employees, Shareholders, Vendors, etc.,).      <br/><br/>
            Our Organization has
            greater ORIENTATION TOWARDS THE WORKFORCE. Every Bee born into the
            World is expected to Live a Full, Complete, and Productive Life and
            we will emulate this in our workforce through
            consistent Self-Development & Inner Potential Awareness Training's
            bringing empowered actions from within rather than through the
            exterior.    <br/><br/>
            We as Honeybees started nesting
            Our BEE-HIVE (Organization) in 2021 and you can locate our hive
            in Chennai. We BWAAP predicatively lead and strive for Unity and
            Expansion of Colony and we warmly welcome you to be a part of our
            colony and to create a Productive, Selfless Bee's World. 
          </p>
        </div>
      </Col>
    </Row>
  </>
);

export default withRouter(About);
