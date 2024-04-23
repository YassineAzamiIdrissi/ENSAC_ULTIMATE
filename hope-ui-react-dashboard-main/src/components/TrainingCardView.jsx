import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AdvanceTableProvider from "../provider/AdvanceTableProvider";
import useAdvanceTable from "../provider/hook/useAdvanceTable";
import { Row, Col } from "react-bootstrap";
import CardViewItem from "./CardViewItem";
import { projects } from "../data";
import TopSection from "./TopSection";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { UserContext } from "../context/userContext";
import { toast } from "react-toastify";
export const columns = [
  {
    id: "status",
    accessorFn: ({ status }) => status.label,
  },
  {
    accessorKey: "name",
  },
];

const TrainingCardView = () => {
  const table = useAdvanceTable({
    data: projects,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
  });
  // logique backend commence ici :
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const [trainingsF, setTrainingsF] = useState([]);
  useEffect(() => {
    const getFollowedTrainigns = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/students/getFollowedTrainings`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Followed courses : ");
        console.log(response.data);
        setTrainingsF(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue dans la tentative de lire les formations suivies par cet étudiant..."
        );
        console.log(err);
      }
    };
    getFollowedTrainigns();
  }, []);
  return (
    <div>
      <AdvanceTableProvider {...table}>
        <h3 className="mt-7">Mes formations suivies</h3>
        <TopSection activeView="card" />
        <Row className="g-3 mb-9">
          {trainingsF.map((project) => (
            <Col xs={12} sm={6} xl={4} xxl={3} key={project.id}>
              <CardViewItem project={project} />
            </Col>
          ))}
        </Row>
      </AdvanceTableProvider>
    </div>
  );
};

export default TrainingCardView;
