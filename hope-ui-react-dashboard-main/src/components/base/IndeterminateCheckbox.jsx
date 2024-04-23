import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import classNames from "classnames";
import { useEffect } from "react";

const IndeterminateCheckbox = ({ indeterminate, className, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      if (ref.current) {
        ref.current.indeterminate = !rest.checked && indeterminate;
      }
    }
  }, [ref, indeterminate]);

  return (
    <Form.Check type="checkbox" className={classNames(className)}>
      <Form.Check.Input type="checkbox" ref={ref} {...rest} />
    </Form.Check>
  );
};

export default IndeterminateCheckbox;
