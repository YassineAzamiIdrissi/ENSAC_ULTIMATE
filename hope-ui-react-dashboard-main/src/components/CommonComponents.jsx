import React from "react";

export const Iframe = ({ src, style }) => {
  return (
    <div>
      <iframe style={style} src={src} allowFullScreen></iframe>
    </div>
  );
};
