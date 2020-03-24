import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import "./screen.css";
import Graphical from "./Root of Equation/Graphical";
import Bisection from "./Root of Equation/Bisection";
import Onepoint from "./Root of Equation/Onepoint";
import Newton from "./Root of Equation/Newton-raphson";
import Secant from "./Root of Equation/Secant";
import Gauss from "./Linear Algebra/Gauss";
import Jordan from "./Linear Algebra/Jordan";
import Inverse from "./Linear Algebra/Inverse";
import Seidel from "./Linear Algebra/Seidel";
import Linear from "./Regression/Linear";
import { Layout, Menu, Icon, Breadcrumb } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
class Index extends React.Component {
  background = "#00008B";
  rootSubmenuKeys = [
    "rootofeq_submenu",
    "L_algebra_submenu",
    "regression_submenu",
  ];

  state = {
    openKeys: ["regression_submenu"]
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };
  onChangePage = props => {
    if (props.key.localeCompare("m_graphical") === 0) {
      ReactDOM.render(<Graphical />, document.getElementById("content"));
    } else if (props.key.localeCompare("m_bisection") === 0) {
      ReactDOM.render(<Bisection />, document.getElementById("content"));
    }  else if (props.key.localeCompare("m_onepoint") === 0) {
      ReactDOM.render(<Onepoint />, document.getElementById("content"));
    } else if (props.key.localeCompare("m_newton") === 0) {
      ReactDOM.render(<Newton />, document.getElementById("content"));
    } else if (props.key.localeCompare("m_secant") === 0) {
      ReactDOM.render(<Secant />, document.getElementById("content"));
    } else if (props.key.localeCompare("m_gauss") === 0) {
      ReactDOM.render(<Gauss />, document.getElementById("content"));
    } else if (props.key.localeCompare("m_jordan") === 0) {
      ReactDOM.render(<Jordan />, document.getElementById("content"));
    } else if (props.key.localeCompare("m_inverse") === 0) {
      ReactDOM.render(<Inverse />, document.getElementById("content"));
    }  else if (props.key.localeCompare("m_seidel") === 0) {
      ReactDOM.render(<Seidel />, document.getElementById("content"));
    } else if (props.key.localeCompare("m_linear") === 0) {
      ReactDOM.render(<Linear />, document.getElementById("content"));
    } 
  };

  render() {
    return (
      <Layout>
        <Header className="header" style={{ height: "80px" }}>
          <div className="headertext">
            <Icon
              type="fund"
              theme="filled"
              style={{
                color: "white",
                fontSize: "70%",
                float: "left",
                marginTop: "2%"
              }}
            />
            <label className="typewriter">&nbsp;&nbsp;&nbsp;Numerical</label>
          </div>
          >
        </Header>

        <Layout>
          <Sider width={335} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              style={{
                height: "80vh",
                borderRight: 0,
                backgroundColor: "#696969",
                overflowY: "scroll"
              }}
              theme="dark"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              onClick={this.onChangePage}
            >
              <SubMenu
                key="regression_submenu"
                title={
                  <span>
                  <Icon type="search"  />Regression
                  </span>
                }
              >
                <Menu.Item key="m_linear">Linear Regression</Menu.Item>
              </SubMenu>
              <SubMenu
                key="rootofeq_submenu"
                title={
                  <span>
                  <Icon type="account-book"  />Root of Equation
                  </span>
                }
              >
                <Menu.Item key="m_graphical">Graphical</Menu.Item>
                <Menu.Item key="m_bisection">Bisection</Menu.Item>
                <Menu.Item key="m_onepoint">One-Point Iteration</Menu.Item>
                <Menu.Item key="m_newton">Newton-Raphson</Menu.Item>
                <Menu.Item key="m_secant">Secant Method</Menu.Item>
              </SubMenu>
              <SubMenu
                key="L_algebra_submenu"
                title={
                  //file-zip
                  <span>
                  <Icon type="file-zip"  /> Linear Algebra
                  </span>
                }
              >
                <Menu.Item key="m_gauss">Gauss's Elimination</Menu.Item>
                <Menu.Item key="m_jordan">Gauss Jordan Method</Menu.Item>
                <Menu.Item key="m_inverse">Matrix Inversion</Menu.Item>
                <Menu.Item key="m_seidel">Gauss Seidel Iteration</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
              <div id="content"></div>
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ backgroundColor: "#0c0c0d", minHeight: 120 }}>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
            <Icon type="star" theme="filled" style={{ fontSize: "30px" }} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              {"    "} 
            Sopon Hiruntiwakul <br />
              6004062660139 CSB
            </a>
            <p
              style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
            ></p>
          </p>
        </Footer>
      </Layout>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
