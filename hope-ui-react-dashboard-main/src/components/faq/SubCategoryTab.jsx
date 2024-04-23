import { useEffect, useState } from "react";
import { Col, Nav } from "react-bootstrap";
import { faqCategories } from "./faq";
import FaqCategoryCard from "./FaqCategoryCard";
import { useFaqTabContext } from "./FaqTabProvider";

const SubCategoryTab = () => {
  const [categories, setCategories] = useState([]);
  const {
    setIsOpenOffcanvas,
    activeKey,
    setActiveKey,
    setSubCategoryActiveKey,
  } = useFaqTabContext();

  useEffect(() => {
    if (activeKey === "popular") {
      setCategories(
        faqCategories.filter((item) => item.category === "popular")
      );
    } else {
      setCategories(faqCategories);
    }
  }, [activeKey]);

  return (
    <Col md={6} xl={5} xxl={4}>
      <Nav
        className="faq-subcategory-tab scrollbar align-content-start w-sm-75 w-md-100 mx-auto mb-4 gap-3"
        style={{ width: "90%" }}
      >
        {categories?.map((category) => (
          <Nav.Item
            onClick={() => {
              setIsOpenOffcanvas(false);
              setActiveKey(activeKey);
              setSubCategoryActiveKey(category.id);
            }}
            key={category.id}
            className="w-100"
          >
            <FaqCategoryCard category={category} />
          </Nav.Item>
        ))}
      </Nav>
    </Col>
  );
};

export default SubCategoryTab;
