import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import AdvanceTable from "./AdvanceTable";
import AdvanceTableFooter from "./AdvanceTableFooter";
import team33 from "../../assets/images/team/33.webp";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faEllipsisVertical,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import ProfDetailsModal from "../profDetails/ProfDetailsModal";
import { useState } from "react";

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
        />
      );
    },
    meta: {
      cellProps: { className: "ps-3 py-4" },
      headerProps: { style: { width: "10%" }, className: "ps-3" },
    },
  },
  {
    header: "Date d'adhésion",
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
    cell: ({ row: { original } }) => {
      return <ActionButtons original={original} />;
    },
    meta: {
      headerProps: { style: { width: "10%" }, className: "text-end" },
      cellProps: { className: "text-end" },
    },
  },
];

const ActionButtons = ({ original }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [profId, setProfId] = useState("");

  const go = () => {
    // const { id } = original;
    // window.location.replace(`/dashboard/app/admin-update-professor/${id}`);
    setProfId(original.id);
    setOpenDetailsModal(true);
  };

  const profTrainings = [
    {
      name: "ReactJS_Tutorial",
      preview: "https://via.placeholder.com/64x64",
      date: "21st July, 10:00 AM",
    },
    {
      name: "VueJS_Tutorial",
      preview: "https://via.placeholder.com/64x64",
      date: "22nd July, 11:00 AM",
    },
    {
      name: "Angular_Tutorial ",
      preview: "https://via.placeholder.com/64x64",
      date: "23rd July, 12:00 PM",
    },
  ];

  return (
    <div>
      <Button variant="Button" onClick={go}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </Button>
      <ProfDetailsModal
        show={openDetailsModal}
        handleClose={() => setOpenDetailsModal(false)}
        profTrainings={profTrainings}
        profId={profId}
      />
    </div>
  );
};

const ListTable = () => {
  return (
    <div className="border-bottom border-translucent">
      <AdvanceTable
        tableProps={{
          className: "phoenix-table border-top border-translucent fs-9",
        }}
        columns={ListTableColumns}
      />
      <AdvanceTableFooter pagination className="py-3" />
    </div>
  );
};

export default ListTable;
