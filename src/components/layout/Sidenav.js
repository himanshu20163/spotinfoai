import { useState } from "react";
import { Menu, Button, Switch } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/sportinfo_ai.png";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");
  const [isVisible, setIsVisible] = useState(true);

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

  const dashboard = [
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" key={0}>
      <path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill={color}></path>
      <path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill={color}></path>
      <path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 10C17 9.44771 16.5523 9 16 9H14Z" fill={color}></path>
    </svg>,
  ];

  // Define other icons here...

  return (
    <>
      {/* <div className="toggle-container">
        <Switch checked={isVisible} onChange={toggleVisibility} /> Toggle Sidebar
      </div> */}

      {/* {isVisible && ( */}
        <div>
          <div className="brand">
            <img src={logo} alt="" />
          </div>
          {/* <hr /> */}
          <Menu theme="light" mode="inline">
            <Menu.Item className="menu-item-header" key="5">
              Admin
            </Menu.Item>

            <Menu.Item key="6">
              <NavLink to="/config-app">
                <span className="icon" style={{ background: page === "profile" ? color : "" }}>
                  {dashboard}
                </span>
                <span className="label">Confi App</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="7">
              <NavLink to="/api-data">
                <span className="icon">{dashboard}</span>
                <span className="label">API Creds</span>
              </NavLink>
            </Menu.Item>

            {/* More Menu Items */}

            <Menu.Item className="menu-item-header" key="5">
              Developers
            </Menu.Item>

            <Menu.Item key="">
              <NavLink to="/collections">
                <span className="icon" style={{ background: page === "profile" ? color : "" }}>
                  {dashboard}
                </span>
                <span className="label">ICollection</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="7">
              <NavLink to="/page-third">
                <span className="icon">{dashboard}</span>
                <span className="label">Resources</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="8">
              <NavLink to="/search-app">
                <span className="icon">{dashboard}</span>
                <span className="label">X-Ray Mode</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item className="menu-item-header" key="5">
              Integrations
            </Menu.Item>

            <Menu.Item key="6">
              <NavLink to="/pageseven">
                <span className="icon" style={{ background: page === "profile" ? color : "" }}>
                  {dashboard}
                </span>
                <span className="label">Widgets</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="7">
              <NavLink to="/pagesixteen">
                <span className="icon">{dashboard}</span>
                <span className="label">API Keys</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item className="menu-item-header" key="5">
              User
            </Menu.Item>

            <Menu.Item key="6">
              <NavLink to="/api-data/page15">
                <span className="icon" style={{ background: page === "profile" ? color : "" }}>
                  {dashboard}
                </span>
                <span className="label">Q&A</span>
              </NavLink>
            </Menu.Item>

          </Menu>

          {/* <div className="aside-footer">
            <div className="footer-box" style={{ background: color }}>
              <span className="icon" style={{ color }}>
                {dashboard}
              </span>
              <h6>Need Help?</h6>
              <p>Please check our docs</p>
              <Button type="primary" className="ant-btn-sm ant-btn-block">
                DOCUMENTATION
              </Button>
            </div>
          </div> */}
        </div>
      {/* )} */}
    </>
  );
}

export default Sidenav;
