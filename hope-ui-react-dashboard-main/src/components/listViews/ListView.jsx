import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../../data";
import useAdvanceTable from "../../provider/hook/useAdvanceTable";
import AdvanceTableProvider from "../../provider/AdvanceTableProvider";

import React from "react";
import { Link } from "react-router-dom";
import TopSection from "../TopSection";
import ListTable, { ListTableColumns } from "./ListTable";

const ListView = () => {
  const table = useAdvanceTable({
    data: projects,
    columns: ListTableColumns,
    pageSize: 6,
    pagination: true,
    sortable: true,
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="d-flex flex-wrap mb-4 gap-3 gap-sm-6 align-items-center mt-3">
        </div>
        <TopSection activeView="list" />
        <ListTable />
      </AdvanceTableProvider>
    </div>
  );
};

export default ListView;
