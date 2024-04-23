import classNames from "classnames";
import { useMemo } from "react";

const useProjectProgress = ({ project }) => {
  const progress = useMemo(() => {
    return Math.ceil((47 / 100) * 100);
  }, [project]);

  // const variant = useMemo(() => {
  //   return classNames({
  //     [project.status.type]: project.status.type !== "secondary",
  //     700: project.status.type === "secondary",
  //   });
  // }, [project]);

  // const bgClassName = useMemo(() => {
  //   return classNames({
  //     //[`bg-secondary-subtle`]: project.status.type !== "secondary",
  //     "bg-body-secondary": project.status.type === "secondary",
  //   });
  // }, [project]);

  // return { progress, variant, bgClassName };
  return { progress };
};

export default useProjectProgress;
