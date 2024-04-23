import React from "react";
import {
  faChevronLeft,
  faCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, Button } from "react-bootstrap";
import classNames from "classnames";
import { useFaqTabContext } from "./FaqTabProvider";
import { faqCategories } from "./faq";

const FaqItem = ({ item, type }) => {
  const icon = type === "topFaq" ? faStar : faCircle;
  const iconClassName = classNames({
    "fs-8 text-primary me-2": type === "topFaq",
  });

  return (
    <li className="d-flex mt-6">
      <FontAwesomeIcon icon={icon} className={iconClassName} />
      <div>
        <h4 className="mb-3 text-body-highlight">{item.question}</h4>
        <p className="mb-0 text-body-tertiary">{item.answer}</p>
      </div>
    </li>
  );
};

const SubCategoryContent = () => {
  const { setIsOpenOffcanvas } = useFaqTabContext();

  const handleClick = () => {
    setIsOpenOffcanvas(true);
  };

  return (
    <Tab.Content style={{ top: "8rem" }} defaultValue="sale-101">
      <Button
        onClick={handleClick}
        variant="link"
        className="d-md-none mt-15 mt-md-6 fs-8 ps-0"
        startIcon={
          <FontAwesomeIcon icon={faChevronLeft} className="fs-9 me-2" />
        }
      >
        Categories
      </Button>
      {faqCategories.map((category) => (
        <Tab.Pane key={category.id} eventKey={category.id}>
          <ul className="list-inline mb-0">
            {category.topFaqs.map((item) => (
              <FaqItem key={item.question} item={item} type="topFaq" />
            ))}
          </ul>
          <hr className="border-top mt-6" />
          <ul className="faq-list list-inline">
            {category.faqs.map((item) => (
              <FaqItem key={item.question} item={item} />
            ))}
          </ul>
        </Tab.Pane>
      ))}
    </Tab.Content>
  );
};

export default SubCategoryContent;
