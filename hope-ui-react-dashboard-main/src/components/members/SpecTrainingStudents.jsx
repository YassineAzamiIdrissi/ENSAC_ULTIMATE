import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFileExport, faPlus } from "@fortawesome/free-solid-svg-icons";
import useAdvanceTable from "../../provider/hook/useAdvanceTable";
import { members } from "./data";
import AdvanceTableProvider from "../../provider/AdvanceTableProvider";
import Form from "react-bootstrap/Form";
import { Col, Row, Button } from "react-bootstrap";
import SearchBox from "../SearchBox";
import MembersTable, { membersTablecolumns } from "./MembersTable";

const SpecTrainingStudents = () => {
  const table = useAdvanceTable({
    data: members,
    columns: membersTablecolumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: false,
  });
  const handleSearchInputChange = (e) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <div className="mb-9 mt-7">
        <h2 className="mb-5">Etudiants memebre de : 'name of tarining'</h2>
        <AdvanceTableProvider {...table}>
          <div className="mb-4">
            <Row className="g-3">
              <Col xs="auto">
                <SearchBox
                  placeholder="Rechercher un membre"
                  onChange={handleSearchInputChange}
                />
              </Col>
              <Col
                xs="auto"
                className="scrollbar overflow-hidden-y flex-grow-1"
              ></Col>
              <Col xs="auto">
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>
          </div>

          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <MembersTable />
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default SpecTrainingStudents;
