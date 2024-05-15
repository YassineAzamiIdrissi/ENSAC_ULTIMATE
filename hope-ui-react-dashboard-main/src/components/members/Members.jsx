import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFileExport, faPlus } from "@fortawesome/free-solid-svg-icons";
import useAdvanceTable from "../../provider/hook/useAdvanceTable";
import { members } from "./data";
import AdvanceTableProvider from "../../provider/AdvanceTableProvider";

import { Col, Row, Button } from "react-bootstrap";
import SearchBox from "../SearchBox";
import MembersTable, { membersTablecolumns } from "./MembersTable";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";
const Members = () => {
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const [subsList, setSubsList] = useState(null);
  const [academy, setAcademy] = useState(null);
  useEffect(() => {
    const fetchSubscribedStudentsToAcademy = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/students/getStudentsInTheAcademy`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSubsList(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire les étudiants abonnés à cette académie"
        );
        console.log(err);
      }
    };
    fetchSubscribedStudentsToAcademy();
  }, []);
  useEffect(() => {
    const fetchAcademy = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/academies/getAcByProf/${currentUser?.id}`
        );
        setAcademy(response.data);
      } catch (err) {
        toast.error("Une erreur ajemi =)");
        console.log(err);
      }
    };
    fetchAcademy();
  }, []);
  const table = useAdvanceTable({
    data: subsList,
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
        <h2 className="mb-5">
          Tous les étudiants inscrit dans l'académie "{academy?.name}"
        </h2>
        {subsList && (
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
              </Row>
            </div>
            <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
              <MembersTable />
            </div>
          </AdvanceTableProvider>
        )}
      </div>
    </div>
  );
};

export default Members;
