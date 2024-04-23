import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import { Badge, Dropdown, ProgressBar } from "react-bootstrap";
import RevealDropdown, { RevealDropdownTrigger } from "../base/RevealDropdown";
import AdvanceTable from "./AdvanceTable";
import AdvanceTableFooter from "./AdvanceTableFooter";
import team33 from "../../assets/images/team/33.webp";

export const ListTableColumns = [
  {
    accessorKey: "name",
    header: "Formation",
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
    id: "assigness",
    header: "Auteur",
    cell: ({ row }) => {
      return (
        <Avatar
          src={team33}
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
    accessorKey: "task",
    header: "Nb souscris",
    meta: {
      cellProps: { className: "ps-3 text-body py-4" },
      headerProps: { style: { width: "12%" }, className: "ps-3" },
    },
  },
  {
    id: "progress",
    header: "Progression",
    cell: ({ row: { original } }) => {
      const { progress } = original;

      return (
        <>
          <p className="text-body-secondary fs-10 mb-0">
            {progress.min} / {progress.max}
          </p>
          <ProgressBar
            now={(progress.min / progress.max) * 100}
            style={{ height: 3 }}
            variant="success"
          />
        </>
      );
    },
    meta: {
      cellProps: { className: "ps-3 py-4" },
      headerProps: { style: { width: "5%" }, className: "ps-3" },
    },
  },
  {
    id: "status",
    header: "Status",
    accessorFn: ({ status }) => status.label,
    cell: ({ row: { original } }) => {
      const { status } = original;
      return (
        <Badge variant="phoenix" bg={status.type}>
          {status.label}
        </Badge>
      );
    },
    meta: {
      cellProps: { className: "ps-8 py-4" },
      headerProps: { style: { width: "10%" }, className: "ps-8" },
    },
  },
  {
    id: "action",
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          {/* <ActionDropdownItems /> */}
          <>
            <Dropdown.Item eventKey="1">
              <Link to={"/singleCourse/1"}>Voir</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4" className="text-danger">
              Supprimer
            </Dropdown.Item>
          </>
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
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
