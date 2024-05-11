import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import { Badge, Dropdown, ProgressBar } from "react-bootstrap";
import RevealDropdown, { RevealDropdownTrigger } from "../base/RevealDropdown";
import AdvanceTable from "./AdvanceTable";
import AdvanceTableFooter from "./AdvanceTableFooter";
import team33 from "../../assets/images/team/33.webp";
import Button from "react-bootstrap/Button";

export const ListTableColumns = [
  {
    accessorKey: "name",
    header: "Nom complet",
    cell: ({ row: { original } }) => {
      const { name } = original;
      return (
        <Link to="#!" className="text-decoration-none fw-bold fs-8">
          {name}
        </Link>
      );
    },
    meta: {
      cellProps: { className: "white-space-nowrap py-4" },
      headerProps: { style: { width: "30%" } },
    },
  },
  {
    accessorKey: "bg",
    header: "Profile",
    cell: ({ row }) => {
      return (
        <Avatar
          src={row.original.bg}
          variant={team33 ? "image" : "name"}
          size="s"
        ></Avatar>
      );
    },
    meta: {
      cellProps: { className: "ps-3 py-4" },
      headerProps: { style: { width: "10%" }, className: "ps-3" },
    },
  },
  {
    header: "Start date",
    accessorKey: "start",
    meta: {
      cellProps: { className: "ps-3 fs-9 text-body white-space-nowrap py-4" },
      headerProps: { style: { width: "10%" }, className: "ps-3" },
    },
  },

  {
    accessorKey: "contributions",
    header: "Contributions",
    meta: {
      cellProps: { className: "ps-3 text-body py-4" },
      headerProps: { style: { width: "12%" }, className: "ps-3" },
    },
  },
  {
    header: "actions",
    id: "action",
    cell: (table) => {
      console.log("From actions column this is the row :");
      console.log(table);
      return (
        <Button
          variant="danger"
          onClick={() => {
            console.log(table.row.original.id);
          }}
        >
          Banner
        </Button>
      );
    },
    meta: {
      headerProps: { style: { width: "10%" }, className: "text-end" },
      cellProps: { className: "text-end" },
    },
  },
];

const ListTable = () => {
  return (
    <div className="border-bottom border-translucent">
      <AdvanceTable
        tableProps={{
          className: "phoenix-table border-top border-translucent fs-9",
        }}
      />
      <AdvanceTableFooter pagination className="py-3" />
    </div>
  );
};

export default ListTable;
