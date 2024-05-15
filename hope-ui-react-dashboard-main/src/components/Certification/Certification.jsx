import React from "react";
import CertificateGenerator from "./CertificateGenerator";

const Certification = ({studentName, trainingName,academyName  }) => {
  return (
    <div>
      <CertificateGenerator
        studentName="AYOUB - Certificate"
        trainingName="ADMINISTRATION DES SYSTEMES DE SECURITE RESEAU"
        academyName="RESEAU ET ADMINISTRATEUR SECURITE"
      />
    </div>
  );
};

export default Certification;
