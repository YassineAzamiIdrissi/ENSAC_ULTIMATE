import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import AdvanceTable from "../listViews/AdvanceTable";
import AdvanceTableFooter from "../listViews/AdvanceTableFooter";

export const membersTablecolumns = [
  {
    accessorKey: "Nom",
    header: "Nom & Prenom",
    cell: ({ row: { original } }) => {
      const { name, avatar } = original;
      return (
        <Link to="#!" className=" d-flex align-items-center text-body">
          <Avatar src={avatar} size="m" />
          <p className="mb-0 ms-3 text-body-emphasis fw-semibold">{name}</p>
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: "15%", minWidth: "200px" },
        className: "px-1",
      },
      cellProps: { className: "align-middle white-space-nowrap py-2" },
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row: { original } }) => {
      const { email } = original;
      return (
        <Link to={`mailto:${email}`} className="fw-semibold">
          {email}
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: "15%", minWidth: "200px" },
      },
      cellProps: { className: "white-space-nowrap" },
    },
  },
  {
    accessorKey: "branch",
    header: "Branche",
    meta: {
      headerProps: {
        style: { width: "15%", minWidth: "100px" },
        className: "text-end",
      },
      cellProps: {
        className: "text-end text-body-tertiary",
      },
    },
  },
  {
    accessorKey: "Cycle",
    header: "Cycle",
    meta: {
      headerProps: {
        style: { width: "10%", minWidth: "100px" },
        className: "text-end pe-0",
      },
      cellProps: {
        className: "text-body-tertiary text-end",
      },
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row: { original } }) => {
      const { id } = original;
      // à coder : la fct d'exclusion de l'étudiant d'une certaine académie...
      return (
        <Link to={`_`} className="btn btn-danger">
          Exclure
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: "15%", minWidth: "200px" },
      },
      cellProps: { className: "white-space-nowrap" },
    },
  },
];

const MembersTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: "phoenix-table fs-9" }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default MembersTable;
