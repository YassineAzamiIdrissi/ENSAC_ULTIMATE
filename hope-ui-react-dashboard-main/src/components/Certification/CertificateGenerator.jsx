import React from "react";
import jsPDF from "jspdf";
//import img from "../assets/certificate-background.png";
import img from "../../assets/Completion-certificate-template.png";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

// Generate the certificate
const generateCertificate = (studentName, trainingName, academyName) => {
  // Create a new jsPDF instance
  const doc = new jsPDF({
    orientation: "landscape",
  });

  // Add background image
  doc.addImage(
    img,
    "PNG",
    0,
    0,
    doc.internal.pageSize.getWidth(),
    doc.internal.pageSize.getHeight()
  );

  // Add recipient name
  doc.setFontSize(36);
  doc.setFont("Nunito"); // Change the font family and style
  doc.text(studentName, 150, 90, { align: "center" }); // put the nick name

  // Add course name
  doc.setFontSize(20);
  doc.setFont("Nunito");
  doc.text(trainingName, 150, 120, { align: "center" }); // put the course name

  // Add trainingName name
  doc.setFontSize(16);
  doc.setFont("Nunito");
  doc.text(academyName, 215, 160, { align: "center" }); // put the trainingName

  // Save the PDF
  doc.save(`${studentName}-${trainingName}.pdf`);
};

function CertificateGenerator(props) {
  return (
    <div>
      {/* <Button
        variant=""
        className="w-100  fs-9"
        size="md"
        onClick={() =>
          generateCertificate(
            props.studentName,
            props.trainingName,
            props.academyName
          )
        }
      >
        Télécharger mon certification
      </Button> */}
      <Button
        variant="success"
        className="w-100  fs-9 mt-2"
        size="lg"
        style={{ fontSize: "28px" }}
        onClick={() =>
          generateCertificate(
            props.studentName,
            props.trainingName,
            props.academyName
          )
        }
      >
        <FontAwesomeIcon
          size="lg"
          icon={faShare}
          style={{ paddingRight: "20px", fontSize: "22px" }}
        />
        TELECHARGER LE CERTIFICAT
      </Button>
    </div>
  );
}

export default CertificateGenerator;
