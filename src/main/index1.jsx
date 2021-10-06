import React, { Component } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

import Footersection from "../footer/footer";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: "",
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let activeClass = "styleHeader";
      if (window.scrollY === 0) {
        activeClass = "";
      }
      this.setState({ activeClass });
    });
  }
  render() {
    // const { history, children } = this.props;
    const { children } = this.props;
    console.log("--", this.props);
    const { activeClass } = this.state;
    return (
      <>
        <Layout className="wrapper">
          <Header className={activeClass}>
            <Link to="/">
              <div className="logo" />
            </Link>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="header-menu"
            >
               <SubMenu key="SubMenu" title="About Us">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="about-bwaap">
                      {" "}
                      <Link to="/about-bwaap">About BWAAP</Link>
                    </Menu.Item>
                    <Menu.Item key="mdspeech">
                      <Link to="/md-speech">MD's Message</Link>
                    </Menu.Item>
                    <Menu.Item key="visionmission">
                      <Link to="/vision-mission">Vision &amp; Mission</Link>
                    </Menu.Item>
                  </Menu>
                }
                trigger={["click"]}
              >
                <Link
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <Menu.Item key="/">
                    About Us 
                  </Menu.Item>
                </Link>
              </Dropdown>
              <Menu.Item key="right-livelihood">
                <Link to="/right-livelihood">Right Livelihood</Link>
              </Menu.Item>
              <Menu.Item key="our-responsibility">
                <Link to="/our-responsibility">Our Responsibility</Link>
              </Menu.Item>
              <Menu.Item key="technology">
                <Link to="/technology">Technology</Link>
              </Menu.Item>
              <Menu.Item key="farms-and-products">
                <Link to="/farms-and-products">Smart Farms &amp; Products</Link>
              </Menu.Item>
              <Menu.Item key="business">
                <Link to="/business">changed</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>{children}</Content>
          <Footer>
            <Footersection />
          </Footer>
        </Layout>
      </>
    );
  }
}
export default Main;
