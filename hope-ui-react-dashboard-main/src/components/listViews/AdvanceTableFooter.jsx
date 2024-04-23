import { useState } from "react";
import { Button, Col, Pagination, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import {
  faAngleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import usePagination from "../../provider/hook/usePagination";
import { useAdvanceTableContext } from "../../provider/AdvanceTableProvider";

const AdvanceTableFooter = ({
  className,
  pagination,
  navBtn,
  showViewAllBtn = true,
}) => {
  const {
    setPageSize,
    previousPage,
    nextPage,
    getCanNextPage,
    getCanPreviousPage,
    getState,
    getPrePaginationRowModel,
    getPaginationRowModel,
    getPageCount,
    setPageIndex,
  } = useAdvanceTableContext();

  const {
    pagination: { pageSize, pageIndex },
  } = getState();

  const [perPage] = useState(pageSize);
  const { hasNextEllipsis, hasPrevEllipsis, visiblePaginationItems } =
    usePagination({
      currentPageNo: pageIndex + 1,
      totalPage: getPageCount(),
      maxPaginationButtonCount: 5,
    });

  const [isAllVisible, setIsAllVisible] = useState(false);

  return (
    <Row className={classNames(className, "align-items-center py-1")}>
      <Col className="d-flex fs-9">
        <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body">
          {pageSize * pageIndex + 1} à {" "}
          {pageSize * pageIndex + getPaginationRowModel().rows.length}
          <span className="text-body-tertiary"> éléments </span>
          {getPrePaginationRowModel().rows.length}
        </p>
        {showViewAllBtn && (
          <Button
            variant="link"
            className="p-0 fw-semibold"
            endIcon={
              <FontAwesomeIcon icon={faAngleRight} className="ms-1 fs-9" />
            }
            onClick={() => {
              setIsAllVisible(!isAllVisible);
              setPageSize(
                isAllVisible ? perPage : getPrePaginationRowModel().rows.length
              );
            }}
          >
            Voir {isAllVisible ? "mois" : "tout"}
          </Button>
        )}
      </Col>
      {navBtn && (
        <Col xs="auto" className="d-flex gap-2">
          <Button
            variant="link"
            startIcon={
              <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
            }
            className={classNames("px-1", {
              disabled: !getCanPreviousPage(),
            })}
            onClick={() => {
              previousPage();
            }}
          >
            Précédant
          </Button>
          <Button
            variant="link"
            endIcon={<FontAwesomeIcon icon={faChevronRight} className="ms-2" />}
            className={classNames("px-1", {
              disabled: !getCanNextPage(),
            })}
            onClick={() => {
              nextPage();
            }}
          >
            Suivant
          </Button>
        </Col>
      )}
      {pagination && (
        <Col xs="auto">
          <Pagination className="mb-0 justify-content-center">
            <Pagination.Prev
              disabled={!getCanPreviousPage()}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </Pagination.Prev>

            {hasPrevEllipsis && (
              <>
                <Pagination.Item
                  active={pageIndex === 0}
                  onClick={() => setPageIndex(0)}
                >
                  1
                </Pagination.Item>
                <Pagination.Ellipsis disabled />
              </>
            )}

            {visiblePaginationItems.map((page) => (
              <Pagination.Item
                key={page}
                active={pageIndex === page - 1}
                onClick={() => setPageIndex(page - 1)}
              >
                {page}
              </Pagination.Item>
            ))}

            {hasNextEllipsis && (
              <>
                <Pagination.Ellipsis disabled />
                <Pagination.Item
                  active={pageIndex === getPageCount() - 1}
                  onClick={() => setPageIndex(getPageCount() - 1)}
                >
                  {getPageCount()}
                </Pagination.Item>
              </>
            )}
            <Pagination.Next
              disabled={!getCanNextPage()}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </Pagination.Next>
          </Pagination>
        </Col>
      )}
    </Row>
  );
};

export default AdvanceTableFooter;
