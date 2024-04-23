import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import classNames from "classnames";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import CreateCourseModal from "../ModalAction/createModal";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/userContext";
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
const ChaptersByCoursesItem = ({
  content,
  className,
  labelClassName,
  halfLayoutBreakpoints = [],
  fullLayoutBreakpoints = [],
  courseId,
  onClick,
  courseTitle,
}) => {
  const [selected, setSelected] = useState(content.completed);
  const [openInviteModal, setOpenInviteModal] = useState(false);

  const course = {
    title: "test Edit course",
  };

  const handleClick = (item) => {
    if (onClick) {
      onClick(item);
    } else {
      setSelected(!selected);
    }
  };

  const getBreakpointClasses = useCallback(
    (className, values) =>
      [
        ...halfLayoutBreakpoints.map(
          (breakpoint) => `${className}-${breakpoint}-${values[0]}`
        ),
        ...fullLayoutBreakpoints.map(
          (breakpoint) => `${className}-${breakpoint}-${values[1]}`
        ),
      ].join(" "),
    [halfLayoutBreakpoints, fullLayoutBreakpoints]
  );
  // LOGIQUE BACKEND  :
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const deleteSpecCourse = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/courses/deleteCourse/${id}`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Cours supprimé");
      setTimeout(() => {
        navigate(0);
      }, [3000]);
    } catch (err) {
      console.log("An error trying to delete this item : ");
      console.log(err);
      toast.error(
        "Une erreur est survenue lors de la tentative à supprimer la ressource en attache!"
      );
    }
  };
  return (
    <>
      <div
        className={classNames(
          className,
          "d-flex align-items-center hover-actions-trigger border-bottom border-translucent gap-2 todolist-item"
        )}
      >
        <Row className="justify-content-between align-items-center btn-reveal-trigger border-translucent gx-0 flex-1 gy-1">
          <Col
            xs={12}
            {...fullLayoutBreakpoints?.reduce((acc, val) => {
              acc[val] = "auto";
              return acc;
            }, {})}
            {...halfLayoutBreakpoints?.reduce((acc, val) => {
              acc[val] = 12;
              return acc;
            }, {})}
          >
            <div className="d-flex align-items-center lh-1 gap-2">
              <h5
                className={classNames(
                  labelClassName,
                  "mb-0 line-clamp-1 fw-semibold text-body-tertiary cursor-pointer",
                  {
                    "text-decoration-line-through text-body-quaternary":
                      selected,
                  }
                )}
                onClick={() => handleClick(content)}
              >
                {content.title}
              </h5>
            </div>
          </Col>
          <Col
            xs={12}
            {...fullLayoutBreakpoints?.reduce((acc, val) => {
              acc[val] = "auto";
              return acc;
            }, {})}
            {...halfLayoutBreakpoints?.reduce((acc, val) => {
              acc[val] = 12;
              return acc;
            }, {})}
          >
            <div className="d-flex lh-1 align-items-center">
              <p
                className={classNames(
                  getBreakpointClasses("me", [2, 3]),
                  "text-body-tertiary fs-10 me-2 mb-0"
                )}
              >
                {
                  <ReactTimeAgo
                    date={new Date(content.createdAt)}
                    locale="en-US"
                  />
                }
              </p>
              <div
                className={classNames(
                  getBreakpointClasses("hover", ["show", "hide"])
                )}
              >
                <p
                  className={classNames(
                    getBreakpointClasses("ps", [0, 3]),
                    "text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0"
                  )}
                >
                  {content.updatedAt.slice(0, 10)}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div
          className={classNames(
            getBreakpointClasses("d", ["none", "block"]),
            "d-none end-0 position-absolute"
          )}
          style={{ top: "23%" }}
        >
          <div className="hover-actions end-0">
            <Button
              variant="phoenix-secondary"
              className="btn-icon fs-10 me-1"
              onClick={() => setOpenInviteModal(!openInviteModal)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button
              variant="phoenix-secondary"
              className="btn-icon fs-10"
              onClick={() => {
                deleteSpecCourse(courseId);
              }}
            >
              <FontAwesomeIcon icon={faTrash} className="text-danger" />
            </Button>
          </div>
        </div>
      </div>
      <CreateCourseModal
        show={openInviteModal}
        handleClose={() => setOpenInviteModal(false)}
        type={"edit"}
        courseTitle={courseTitle}
        course={content}
        courseId={courseId}
      />
    </>
  );
};

export default ChaptersByCoursesItem;
