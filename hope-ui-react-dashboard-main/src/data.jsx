import bg51 from "./assets/images/academies/51.png";
import bg52 from "./assets/images/academies/52.png";
import bg53 from "./assets/images/academies/53.png";
import bg54 from "./assets/images/academies/54.png";
import bg55 from "./assets/images/academies/55.png";
import bg56 from "./assets/images/academies/56.png";
import bg57 from "./assets/images/academies/57.png";
import { Video, GraduationCap, PanelRight } from "lucide-react";
import team33 from "./assets/images/team/33.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBoxArchive,
  faCalendarDays,
  faCircle,
  faCopy,
  faPaperclip,
  faShareNodes,
  faSquareCheck,
  faTag,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
export const Homeextra_1 = [
  {
    icon: <PanelRight size={28} strokeWidth={3} />,
    title: "30,000 cours en ligne",
    des: "Apprendre de variété de thèmes",
  },
  {
    icon: <GraduationCap size={28} strokeWidth={3} />,
    title: "Un apprentissage de qualité",
    des: "Trouver le meilleur instructeur pour vous.",
  },
  {
    icon: <Video size={32} strokeWidth={3} />,
    title: "Acces à vie",
    des: "Apprendre selon votre disponibilité",
  },
];

export const home_count = [
  { icon: <Video />, title: "150+", des: "Instructeurs" },
  { icon: <Video />, title: "28K+", des: "Videos" },
  { icon: <Video />, title: "9.3M+", des: "Etudiants" },
  { icon: <Video />, title: "4.1M+", des: "Utilisateurs" },
];

export const sliderData = [{}];

export const cycle = [
  { label: "Informatique", value: "Informatique" },
  { label: "Génie Energétique", value: "Génie Energétique" },
  { label: "Réseaux", value: "Réseaux" },
  { label: "Intelligence artificielle", value: "Intelligence artificielle" },
  { label: "Data Science", value: "Data Science" },
];

// import { BadgeBg } from 'components/base/Badge';
// import { Member, members } from 'data/users';
//UTILISATEURS FACTICES
export const members = [
  {
    id: 1,
    name: "Tyrion Lannister",
    avatar: team33,
    username: "tyrion222",
    connections: 224,
    mutual: 24,
  },
  {
    id: 2,
    name: "Milind Mikuja",
    avatar: team33,
    username: "milind12",
    connections: 178,
    mutual: 56,
  },
  {
    id: 3,
    name: "Stanly Drinkwater",
    avatar: team33,
    username: "drinkwater8",
    connections: 204,
    mutual: 4,
  },
  {
    id: 4,
    name: "Josef Stravinsky",
    avatar: team33,
    username: "josef60",
    connections: 556,
    mutual: 15,
  },
  {
    id: 5,
    name: "Igor Borvibson",
    avatar: team33,
    username: "Igor65",
    connections: 122,
    mutual: 9,
  },
  {
    id: 6,
    name: "Carry Anna",
    avatar: team33,
    username: "carry_anna",
    connections: 97,
    mutual: 0,
  },
  {
    id: 7,
    name: "Milind Mikuja",
    username: "milind_mikuja",
    connections: 13,
    mutual: 18,
  },
  {
    id: 8,
    name: "Stanly Drinkwater",
    avatar: team33,
    username: "stanly_drinkwater",
    connections: 13,
    mutual: 45,
  },
  {
    id: 9,
    name: "Josef Stravinsky",
    avatar: team33,
    username: "josef_stravinsky",
    connections: 33,
    mutual: 46,
  },
  {
    id: 10,
    name: "Igor Borvibson",
    avatar: team33,
    username: "igor_borvibson",
    connections: 66,
    mutual: 6,
  },
  {
    id: 11,
    name: "Katerina Karenin",
    avatar: team33,
    username: "katerina_karenin",
    connections: 44,
    mutual: 10,
  },
  {
    id: 12,
    name: "Roy Anderson",
    username: "roy_anderson",
    connections: 23,
    mutual: 49,
  },
  {
    id: 13,
    name: "Jean Renoir",
    avatar: team33,
    username: "jean_renoir",
    connections: 70,
    mutual: 22,
  },
  {
    id: 14,
    name: "Ricky Antony",
    avatar: team33,
    username: "ricky_antony",
    connections: 17,
    mutual: 18,
  },
  {
    id: 15,
    name: "Emma Watson",
    avatar: team33,
    username: "emma_watson",
    connections: 45,
    mutual: 17,
  },
  {
    id: 16,
    name: "Jennifer Schramm",
    username: "jennifer_schramm",
    connections: 19,
    mutual: 10,
  },
  {
    id: 17,
    name: "Michael Jenkins",
    avatar: team33,
    username: "michael_jenkins",
    connections: 8,
    mutual: 26,
  },
  {
    id: 18,
    name: "John Doe",
    avatar: team33,
    username: "john_doe",
    connections: 120,
    mutual: 8,
  },
  {
    id: 19,
    name: "Jane Smith",
    avatar: team33,
    username: "jane_smith",
    connections: 95,
    mutual: 4,
  },
  {
    id: 20,
    name: "Alex Johnson",
    avatar: team33,
    username: "alex_johnson",
    connections: 60,
    mutual: 12,
  },
];

export const defaultTeamMembers = [
  {
    image: team33,
    name: "John Smith",
    designation: "CEO, Global Cheat",
    facebookHandle: "#!",
    twitterHandle: "#!",
    linkedinHandle: "#!",
  },
  {
    image: team33,
    name: "Marc Chiasson",
    designation: "Vice President",
    facebookHandle: "#!",
    twitterHandle: "#!",
    linkedinHandle: "#!",
  },
  {
    image: team33,
    name: "Lilah Lola",
    designation: "Marketing Manager",
    facebookHandle: "#!",
    twitterHandle: "#!",
    linkedinHandle: "#!",
  },
  {
    image: team33,
    name: "Thomas Doe",
    designation: "UX Designer",
    facebookHandle: "#!",
    twitterHandle: "#!",
    linkedinHandle: "#!",
  },
  {
    image: team33,
    name: "Alan Casey",
    designation: "Front End Developer",
    facebookHandle: "#!",
    twitterHandle: "#!",
    linkedinHandle: "#!",
  },
  {
    image: team33,
    name: "Narokin Hijita",
    designation: "CEO, Global Cheat",
    facebookHandle: "#!",
    twitterHandle: "#!",
    linkedinHandle: "#!",
  },
  {
    image: team33,
    name: "Jane Smith",
    designation: "CEO, Global Cheat",
    facebookHandle: "#!",
    twitterHandle: "#!",
    linkedinHandle: "#!",
  },
  {
    image: team33,
    name: "Alex Johnson",
    designation: "CEO, Global Cheat",
    facebookHandle: "#!",
    twitterHandle: "#!",
    linkedinHandle: "#!",
  },
];

export const projects = [
  {
    id: 1,
    name: "Making the Butterflies shoot each other dead",
    start: "Dec 12, 2018",
    deadline: "Dec 12, 2026",
    calculation: {
      amount: "$4",
      label: "Cost",
    },
    assigness: [17, 16, 11, 5, 18, 19].map((index) => members[index]),
    progress: {
      min: 145,
      max: 145,
    },
    statusProgress: {
      ongoing: 30,
      critical: 5,
      inactive: 45,
      completed: 15,
    },
    task: 287,
    status: {
      label: "completed",
      type: "success",
    },
    bg: bg51,
    budget: 3991,
  },
  {
    id: 2,
    name: "Project Doughnut Dungeon",
    assigness: [18, 19].map((index) => members[index]),
    start: "Jan 9, 2019",
    deadline: "Dec 9, 2022",
    progress: {
      min: 148,
      max: 223,
    },
    statusProgress: {
      ongoing: 20,
      critical: 15,
      inactive: 45,
      completed: 30,
    },
    task: 125,
    status: {
      label: "inactive",
      type: "warning",
    },
    bg: bg52,
    budget: 5832,
  },
  {
    id: 3,
    name: "The Chewing Gum Attack",
    assigness: [12, 10].map((index) => members[index]),
    start: "Sep 4, 2019",
    deadline: "Dec 4, 2021",
    calculation: {
      amount: "$657k",
      label: "Estimation",
    },
    progress: {
      min: 277,
      max: 539,
    },
    statusProgress: {
      ongoing: 10,
      critical: 10,
      inactive: 35,
      completed: 45,
    },
    task: 72,
    status: {
      label: "ongoing",
      type: "primary",
    },
    bg: bg53,
    budget: 8305,
  },
  {
    id: 4,
    name: "Execution of Micky the foul mouse",
    assigness: [11, 18, 17, 5, 19].map((index) => members[index]),
    start: "Nov 1, 2019",
    deadline: "Dec 1, 2024",
    progress: {
      min: 16,
      max: 56,
    },
    statusProgress: {
      ongoing: 45,
      critical: 15,
      inactive: 20,
      completed: 20,
    },
    task: 91,
    status: {
      label: "critical",
      type: "danger",
    },
    bg: bg54,
    budget: 8888,
  },
  {
    id: 5,
    name: "Harnessing stupidity from Jerry",
    assigness: [17, 16, 15].map((index) => members[index]),
    start: "Dec 28, 2019",
    deadline: "Nov 28, 2021",
    progress: {
      min: 169,
      max: 394,
    },
    statusProgress: {
      ongoing: 25,
      critical: 35,
      inactive: 20,
      completed: 15,
    },
    task: 134,
    status: {
      label: "ongoing",
      type: "primary",
    },
    bg: bg55,
    budget: 7324,
  },
  {
    id: 6,
    name: "Water resistant mosquito killer gun",
    assigness: [1, 11, 10, 2].map((index) => members[index]),
    start: "Feb 24, 2020",
    deadline: "Nov 24, 2021",
    calculation: {
      amount: "$55k",
      label: "Budget",
    },
    progress: {
      min: 400,
      max: 600,
    },
    statusProgress: {
      ongoing: 24,
      critical: 5,
      inactive: 35,
      completed: 35,
    },
    task: 24,
    status: {
      label: "cancelled",
      type: "secondary",
    },
    bg: bg56,
    budget: 1219,
  },
  {
    id: 7,
    name: "Olga Dies Dreaming by Xóchitl González",
    assigness: [16, 18, 19].map((index) => members[index]),
    start: "Feb 24, 2020",
    deadline: "Nov 24, 2021",
    calculation: {
      amount: "$55k",
      label: "Budget",
    },
    progress: {
      min: 500,
      max: 800,
    },
    statusProgress: {
      ongoing: 24,
      critical: 5,
      inactive: 35,
      completed: 35,
    },
    task: 24,
    status: {
      label: "cancelled",
      type: "secondary",
    },
    bg: bg57,
    budget: 6067,
  },
];

export const comments = [
  {
    id: 1,
    text: "uploaded a file",
    user: {
      name: "Anthony Van Dyck",
      url: "#!",
    },
    attachment: bg57,
    date: "Oct 3 at 4:38 pm",
    details: (
      <p className="text-body-highlight fw-semibold fs-9 mb-0">Fruit blast</p>
    ),
  },
  {
    id: 2,
    text: "added a subtask",
    user: {
      name: "Kazimir Malevich",
      url: "#!",
    },
    date: "Oct 4 at 12:16 pm",
  },
  {
    id: 3,
    text: "created this task",
    user: {
      name: "Kazimir Malevich",
      url: "#!",
    },
    own: true,
    date: "Oct 4 at 12:18 pm",
  },
  {
    id: 4,
    text: "changed status from ",
    user: {
      name: "Henri Rousseau",
      url: "#!",
    },
    date: "Oct 5 at 9:59 am",
    details: (
      <div className="d-flex text-body-secondary fs-9">
        <p className="mb-0 fw-semibold text-body-highlight">
          <FontAwesomeIcon
            icon={faCircle}
            className="text-primary"
            transform="shrink-8"
          />
          Doing
        </p>
        <span className="mx-2">to</span>
        <p className="mb-0 fw-semibold text-body-highlight">
          <FontAwesomeIcon
            icon={faCircle}
            className="text-primary"
            transform="shrink-8"
          />
          Review
        </p>
      </div>
    ),
  },
  {
    id: 5,
    text: "commented",
    user: {
      name: "Peter Paul Rubens",
      url: "#!",
    },
    date: "Oct 5 at 11:09 pm",
    details: (
      <p className="text-body fs-9 mb-0">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form
      </p>
    ),
  },
];

export const addToCardItems = [
  {
    icon: faUserPlus,
    label: "Assignee",
  },
  {
    icon: faTag,
    label: "Labels",
  },
  {
    icon: faPaperclip,
    label: "Attachments",
  },
  {
    icon: faSquareCheck,
    label: "Checklist",
  },
  {
    icon: faCalendarDays,
    label: "Dates",
  },
];

export const actionItems = [
  {
    icon: faArrowRight,
    label: "Move",
  },
  {
    icon: faCopy,
    label: "Copy",
  },
  {
    icon: faTrash,
    label: "Remove",
  },
  {
    icon: faBoxArchive,
    label: "Archive",
  },
  {
    icon: faShareNodes,
    label: "Share",
  },
];
