

import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2024, made with
            {<HeartFilled />} by
            <a href="www.alpinetechnologies.in" className="font-weight-bold" target="_blank">
              Alpine Technologies
            </a>
            for a better web.
          </div>
        </Col>
        
      </Row>
    </AntFooter>
  );
}

export default Footer;
