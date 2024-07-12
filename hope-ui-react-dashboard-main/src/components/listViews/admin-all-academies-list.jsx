import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import AdvanceTable from "./AdvanceTable";
import AdvanceTableFooter from "./AdvanceTableFooter";
import team33 from "../../assets/images/team/33.webp";
import Button from "react-bootstrap/Button";

export const ListTableColumns = [
  {
    accessorKey: "name",
    header: "Académie",
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
    header: "Avatar",
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
    accessorKey: "start",
    header: "Date de création",
    meta: {
      cellProps: { className: "ps-3 fs-9 text-body white-space-nowrap py-4" },
      headerProps: { style: { width: "10%" }, className: "ps-3" },
    },
  },
  {
    header: "actions",
    id: "action",
    cell: ({ row: { original } }) => {
      const go = () => {
        const { id } = original;
        window.location.replace(`/dashboard/app/admin-update-academy/${id}`);
      };
      return (
        <div>
          <Button variant="success" onClick={go}>
            Modifier
          </Button>
        </div>
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
