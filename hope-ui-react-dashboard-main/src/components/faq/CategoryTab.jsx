import { Col, Nav } from "react-bootstrap";
import { useFaqTabContext } from "./FaqTabProvider";

const CategoryTab = () => {
  const { setActiveKey, activeKey } = useFaqTabContext();
  return (
    <Col md={6} xl={5} xxl={4} className="faq-category-tab">
      <Nav
        variant="presentation"
        className="mb-2 mb-md-5 pb-3 pt-2 w-100 w-sm-75 w-md-100 mx-auto bg-body"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="popular"
            className="fw-semibold me-3 fs-8 pe-2 text-center"
            onClick={() => setActiveKey("popular")}
          >
            Popular Categories
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="all"
            className="fw-semibold me-3 fs-8 pe-2 text-center"
            onClick={() => setActiveKey("all")}
          >
            All Categories
          </Nav.Link>
        </Nav.Item>
        
      </Nav>
    </Col>
  );
};

export default CategoryTab;
