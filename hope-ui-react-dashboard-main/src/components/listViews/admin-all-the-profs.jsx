import useAdvanceTable from "../../provider/hook/useAdvanceTable";
import AdvanceTableProvider from "../../provider/AdvanceTableProvider";

import React, { useContext, useEffect, useState } from "react";
import TopSection from "../TopSection";
import ListTable, { ListTableColumns } from "./admin-all-profs-list";

import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";

const AdminAllProfessors = () => {
  const { currentUser } = useContext(UserContext);
  const [allProfessors, setAllProfessors] = useState(null);
  useEffect(() => {
    const fetchAllProfessors = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/professors/getAllProfsAdmin`
        );
        setAllProfessors(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire les professeurs"
        );
        console.log(err);
      }
    };
    fetchAllProfessors();
  }, []);
  const table = useAdvanceTable({
    data: allProfessors,
    columns: ListTableColumns,
    pageSize: 6,
    pagination: true,
    sortable: true,
  });

  return (
    <div>
      {allProfessors && (
        <AdvanceTableProvider {...table}>
          <div className="d-flex flex-wrap mb-4 gap-3 gap-sm-6 align-items-center mt-3"></div>
          <TopSection activeView="list" />
          <ListTable />
        </AdvanceTableProvider>
      )}
    </div>
  );
};

export default AdminAllProfessors;
