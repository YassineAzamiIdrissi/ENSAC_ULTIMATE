import useAdvanceTable from "../../provider/hook/useAdvanceTable";
import AdvanceTableProvider from "../../provider/AdvanceTableProvider";

import React, { useContext, useEffect, useState } from "react";
import TopSection from "../TopSection";
import ListTable, { ListTableColumns } from "./admin-all-academies-list";

import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";
const AdminAllAcademies = () => {
  const { currentUser } = useContext(UserContext);
  const [allAcademies, setAllAcademies] = useState(null);
  useEffect(() => {
    const fetchCustomizedAcs = async () => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/admins/getCustomAcademies`
        );
        setAllAcademies(resp.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire les académies personnalisées"
        );
        console.log(err);
      }
    };
    fetchCustomizedAcs();
  }, []);
  const table = useAdvanceTable({
    data: allAcademies,
    columns: ListTableColumns,
    pageSize: 6,
    pagination: true,
    sortable: true,
  });

  return (
    <div>
      {allAcademies && (
        <AdvanceTableProvider {...table}>
          <div className="d-flex flex-wrap mb-4 gap-3 gap-sm-6 align-items-center mt-3"></div>
          <TopSection activeView="list" />
          <ListTable />
        </AdvanceTableProvider>
      )}
    </div>
  );
};

export default AdminAllAcademies;
