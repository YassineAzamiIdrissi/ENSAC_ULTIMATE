import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FilterTab from "components/common/FilterTab";
//import { useAdvanceTableContext } from "providers/AdvanceTableProvider";
//import { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ToggleViewButton from "./ToggleViewButton";
import FourGrid from "./FourGrid";

const TopSection = ({ activeView }) => {
  const navigate = useNavigate();
  

  return (
    <Row className="g-3 justify-content-between align-items-center mb-4">
      <Col xs={12} sm="auto">
   
      </Col>
      <Col xs={12} sm="auto">
        <div className="d-flex align-items-center gap-1">

          <ToggleViewButton
            tooltip="Liste"
            active={activeView === "list"}
            onClick={() => {
              navigate("/dashboard/app/list-table-training");
            }}
          >
            <FontAwesomeIcon icon={faList} className="fs-10" />
          </ToggleViewButton>

          <ToggleViewButton
            tooltip="Carte"
            active={activeView === "card"}
            onClick={() => {
              navigate("/dashboard/app/card-list-training");
            }}
          >
            <FourGrid />
          </ToggleViewButton>
        </div>
      </Col>
    </Row>
  );
};

export default TopSection;
