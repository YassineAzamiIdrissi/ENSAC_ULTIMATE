import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../../data";
import useAdvanceTable from "../../provider/hook/useAdvanceTable";
import AdvanceTableProvider from "../../provider/AdvanceTableProvider";

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopSection from "../TopSection";
import ListTable, { ListTableColumns } from "./ListTable";

import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";
const Progressions = () => {
  // LOGIQUE BACKEND COMMENCE ::
  const [progs, setProgs] = useState([]);
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/progressions/getProgressionInMyTrainings`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProgs(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire les progressions.."
        );
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const table = useAdvanceTable({
    data: progs,
    columns: ListTableColumns,
    pageSize: 6,
    pagination: true,
    sortable: true,
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="d-flex flex-wrap mb-4 gap-3 gap-sm-6 align-items-center mt-3"></div>
        <TopSection activeView="list" />
        <ListTable />
      </AdvanceTableProvider>
    </div>
  );
};

export default Progressions;
