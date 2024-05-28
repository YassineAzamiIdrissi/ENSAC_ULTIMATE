import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.css";
import axios from "axios";
import B_Search_Results_List from "./B_Search_Results_List";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
const A_Nav_Bar_Search = () => {
  const [input, setInput] = useState();
  const [trainings, setTrainings] = useState([]);
  const [resultsList, setResultsList] = useState([]);
  const handleChange = (value) => {
    setInput(value);
    const resultsList = trainings.filter((training) =>
      training.name.toLowerCase().includes(value.toLowerCase())
    );
    setResultsList(resultsList);
    if (!value.length) {
      setResultsList([]);
    }
  };
  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getAllTrainings`
        );
        const trainingDocuments = response.data;
        let names = trainingDocuments.map((training) => {
          return { name: training.name, id: training._id };
        });
        setTrainings(names);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrainings();
  }, []);
  return (
    <>
      {" "}
      <div className={classNames("search-box")}>
        <form className={classNames("position-relative")}>
          <Form.Control
            className={classNames("search-input search")}
            placeholder="Recherchez par mots clés..."
            type="search"
            value={input}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
          <FontAwesomeIcon icon={faSearch} className="search-box-icon" />
        </form>
      </div>
      <B_Search_Results_List data={resultsList} />
    </>
  );
};

export default A_Nav_Bar_Search;
