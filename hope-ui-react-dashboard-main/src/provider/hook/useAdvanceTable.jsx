import React from "react";
import IndeterminateCheckbox from "../../components/base/IndeterminateCheckbox";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

const selectionColumn = {
  id: "select",
  accessorKey: "",
  header: ({ table }) => (
    <IndeterminateCheckbox
      className="form-check fs-8 mb-0"
      checked={table.getIsAllRowsSelected()}
      indeterminate={table.getIsSomeRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: ({ row }) => (
    <IndeterminateCheckbox
      className="form-check fs-8 mb-0"
      checked={row.getIsSelected()}
      disabled={!row.getCanSelect()}
      indeterminate={row.getIsSomeSelected()}
      onChange={row.getToggleSelectedHandler()}
    />
  ),
  meta: {
    headerProps: { style: { width: "30px" } },
  },
};

const useAdvanceTable = ({
  columns,
  data,
  selection,
  sortable,
  pagination,
  pageSize,
  initialState,
}) => {
  const state = {
    pagination: pagination
      ? { pageSize: pagination ? pageSize : data.length }
      : undefined,
    ...initialState,
  };

  const table = useReactTable({
    data,
    columns: selection ? [selectionColumn, ...columns] : columns,
    enableSorting: sortable,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: state,
  });

  return table;
};

export default useAdvanceTable;
