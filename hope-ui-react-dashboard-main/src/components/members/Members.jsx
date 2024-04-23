import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFileExport, faPlus } from "@fortawesome/free-solid-svg-icons";
import useAdvanceTable from "../../provider/hook/useAdvanceTable";
import { members } from "./data";
import AdvanceTableProvider from "../../provider/AdvanceTableProvider";

import { Col, Row, Button } from "react-bootstrap";
import SearchBox from "../SearchBox";
import MembersTable, { membersTablecolumns } from "./MembersTable";

const Members = () => {
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
                <Button variant="primary">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Ajouter un membre
                </Button>
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

export default Members;
