import React from "react";
import EmptySvg from "../../profile/empty-scg.gif";

const Empty = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={EmptySvg} alt="" style={{ width: "60px", height: "60px" }} />
      <h1 style={{ color: "gray" }}>Aucune entité trouvée ...</h1>
    </div>
  );
};

export default Empty;
