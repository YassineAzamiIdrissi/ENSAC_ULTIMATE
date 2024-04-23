import React, { useContext, useEffect } from "react";
import { Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Card from "../../../components/Card";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    copy
  </Tooltip>
);

const DualTone = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  useEffect(() => {
    if (!token) {
      navigate("/auth/sign-in");
    }
  }, []);
  return (
    <>
      <Row>
        <Col lg="12">
          <Card className="mb-4">
            <Card.Header>
              <h4 className="card-title mb-0">Double Tone</h4>
            </Card.Header>
            <Card.Body>
              <div className="icon-grid">
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-1"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-1">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9173C2 20.3665 5.364 20.9999 9.34933 20.9999C13.3131 20.9999 16.6987 20.3876 16.6987 17.9403C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.1733 7.84873C16.1733 9.19505 15.7604 10.4513 15.0363 11.4948C14.961 11.6021 15.0275 11.7468 15.1586 11.7698C15.3406 11.7995 15.5275 11.8177 15.7183 11.8216C17.6165 11.8704 19.3201 10.6736 19.7907 8.87116C20.4884 6.19674 18.4414 3.79541 15.8338 3.79541C15.551 3.79541 15.2799 3.82416 15.0157 3.87686C14.9795 3.88453 14.9404 3.90177 14.9208 3.93244C14.8954 3.97172 14.914 4.02251 14.9394 4.05605C15.7232 5.13214 16.1733 6.44205 16.1733 7.84873Z"
                        fill="currentColor"
                      />
                      <path
                        d="M21.779 15.1693C21.4316 14.4439 20.593 13.9465 19.3171 13.7022C18.7153 13.5585 17.0852 13.3544 15.5695 13.3831C15.547 13.386 15.5343 13.4013 15.5324 13.4109C15.5294 13.4262 15.5363 13.4492 15.5656 13.4655C16.2662 13.8047 18.9737 15.2804 18.6332 18.3927C18.6185 18.5288 18.729 18.6438 18.867 18.6246C19.5333 18.5317 21.2476 18.1704 21.779 17.0474C22.0735 16.4533 22.0735 15.7634 21.779 15.1693Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-2"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-2">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z"
                        fill="currentColor"
                      />
                      <path
                        d="M22.8094 14.817C22.5086 14.1722 21.7824 13.73 20.6783 13.513C20.1572 13.3851 18.747 13.205 17.4352 13.2293C17.4155 13.232 17.4048 13.2455 17.403 13.2545C17.4003 13.2671 17.4057 13.2887 17.4316 13.3022C18.0378 13.6039 20.3811 14.916 20.0865 17.6834C20.074 17.8032 20.1698 17.9068 20.2888 17.8888C20.8655 17.8059 22.3492 17.4853 22.8094 16.4866C23.0637 15.9589 23.0637 15.3456 22.8094 14.817Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M7.04459 4.77973C6.81626 4.7329 6.58077 4.70679 6.33543 4.70679C4.07901 4.70679 2.30701 6.84201 2.9123 9.21947C3.31882 10.8216 4.79355 11.8851 6.43661 11.8419C6.60136 11.8374 6.76343 11.8221 6.92013 11.7951C7.03384 11.7753 7.09115 11.6465 7.02668 11.551C6.3999 10.6234 6.04263 9.50765 6.04263 8.30991C6.04263 7.05904 6.43303 5.89462 7.11085 4.93913C7.13234 4.90941 7.14845 4.86348 7.12696 4.82926C7.10906 4.80135 7.07593 4.78694 7.04459 4.77973Z"
                        fill="currentColor"
                      />
                      <path
                        d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-3"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-3">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.2428 4.73756C15.2428 6.95855 17.0459 8.75902 19.2702 8.75902C19.5151 8.75782 19.7594 8.73431 20 8.68878V16.6615C20 20.0156 18.0215 22 14.6624 22H7.34636C3.97851 22 2 20.0156 2 16.6615V9.3561C2 6.00195 3.97851 4 7.34636 4H15.3131C15.2659 4.243 15.2423 4.49001 15.2428 4.73756ZM13.15 14.8966L16.0078 11.2088V11.1912C16.2525 10.8625 16.1901 10.3989 15.8671 10.1463C15.7108 10.0257 15.5122 9.97345 15.3167 10.0016C15.1211 10.0297 14.9453 10.1358 14.8295 10.2956L12.4201 13.3951L9.6766 11.2351C9.51997 11.1131 9.32071 11.0592 9.12381 11.0856C8.92691 11.1121 8.74898 11.2166 8.63019 11.3756L5.67562 15.1863C5.57177 15.3158 5.51586 15.4771 5.51734 15.6429C5.5002 15.9781 5.71187 16.2826 6.03238 16.3838C6.35288 16.485 6.70138 16.3573 6.88031 16.0732L9.35125 12.8771L12.0948 15.0283C12.2508 15.1541 12.4514 15.2111 12.6504 15.1863C12.8494 15.1615 13.0297 15.0569 13.15 14.8966Z"
                        fill="currentColor"
                      />
                      <circle
                        opacity="0.4"
                        cx="19.5"
                        cy="4.5"
                        r="2.5"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-4"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-4">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-5"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-5">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8672 7.21433L15.0865 14.0624C15.1805 14.2158 15.1715 14.4122 15.0605 14.5558C14.5594 15.2064 14.0514 15.7877 13.6244 16.1755C13.6244 16.1755 13.2824 16.5096 13.0654 16.6542C12.7693 16.8877 12.3823 17 12.0063 17C11.5843 17 11.1853 16.8769 10.8662 16.6317C10.8092 16.576 10.5582 16.364 10.3532 16.1638C9.07715 14.9954 6.96905 11.9455 6.33002 10.3414C6.22701 10.1079 6.012 9.48466 6 9.16131C6 8.84967 6.068 8.54879 6.21701 8.25962C6.42202 7.90403 6.74004 7.62561 7.11706 7.46931C7.37907 7.36869 8.16511 7.21336 8.18811 7.21336C8.74914 7.11274 9.53718 7.03751 10.4572 7.00039C10.6222 6.99355 10.7822 7.07659 10.8672 7.21433Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M13.14 7.67228C12.953 7.37041 13.192 6.9904 13.551 7.00505C14.393 7.0412 15.1351 7.10372 15.6871 7.17992C15.6991 7.19164 16.6781 7.34697 17.0092 7.52574C17.6242 7.83737 18.0002 8.44892 18.0002 9.10637V9.16108C17.9892 9.58506 17.6132 10.4867 17.5902 10.4867C17.4012 10.941 17.0812 11.534 16.6961 12.1719C16.5221 12.4591 16.0951 12.466 15.9181 12.1787L13.14 7.67228Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-6"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-6">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12.6588 3.71101V12.189C12.6588 12.5812 12.3405 12.8995 11.9483 12.8995C11.5561 12.8995 11.2378 12.5812 11.2378 12.189V3.71101C11.2378 3.3188 11.5561 3.00049 11.9483 3.00049C12.3405 3.00049 12.6588 3.3188 12.6588 3.71101Z"
                        fill="currentColor"
                      />
                      <mask
                        id="mask4"
                        maskUnits="userSpaceOnUse"
                        x="6"
                        y="11"
                        width="12"
                        height="10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.5 11.4788H17.3964V20.4182H6.5V11.4788Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0)">
                        <path
                          d="M17.3967 12.1893C17.3967 12.3219 17.3597 12.4527 17.2877 12.5682L12.5499 20.0865C12.4192 20.2931 12.1928 20.4191 11.9484 20.4191C11.7039 20.4191 11.4775 20.2931 11.3468 20.0865L6.609 12.5682C6.47163 12.3494 6.4631 12.0728 6.5891 11.8463C6.71416 11.619 6.95195 11.4788 7.21058 11.4788H16.6862C16.9448 11.4788 17.1826 11.619 17.3076 11.8463C17.3673 11.9534 17.3967 12.0718 17.3967 12.1893Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-7"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-7">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 12C22 17.515 17.514 22 12 22C6.486 22 2 17.515 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.2211 10.5575C16.2211 10.7485 16.1481 10.9405 16.0021 11.0865L12.5321 14.5735C12.3911 14.7145 12.2001 14.7935 12.0001 14.7935C11.8011 14.7935 11.6101 14.7145 11.4691 14.5735L7.99707 11.0865C7.70507 10.7935 7.70507 10.3195 7.99907 10.0265C8.29307 9.73448 8.76807 9.73548 9.06007 10.0285L12.0001 12.9815L14.9401 10.0285C15.2321 9.73548 15.7061 9.73448 16.0001 10.0265C16.1481 10.1725 16.2211 10.3655 16.2211 10.5575Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-8"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-8">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M2 7.916V16.084C2 19.623 4.276 22 7.665 22H16.335C19.724 22 22 19.623 22 16.084V7.916C22 4.378 19.723 2 16.334 2H7.665C4.276 2 2 4.378 2 7.916Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.72033 12.8555L11.4683 16.6205C11.7503 16.9035 12.2493 16.9035 12.5323 16.6205L16.2803 12.8555C16.5723 12.5615 16.5713 12.0865 16.2773 11.7945C15.9833 11.5025 15.5093 11.5025 15.2163 11.7965L12.7493 14.2735V7.91846C12.7493 7.50346 12.4133 7.16846 11.9993 7.16846C11.5853 7.16846 11.2493 7.50346 11.2493 7.91846V14.2735L8.78333 11.7965C8.63633 11.6495 8.44433 11.5765 8.25133 11.5765C8.06033 11.5765 7.86833 11.6495 7.72233 11.7945C7.42933 12.0865 7.42833 12.5615 7.72033 12.8555Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-9"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-9">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M10.8096 8.20248L10.4824 4.50325C10.4824 3.67308 11.1621 3 12.0003 3C12.8386 3 13.5182 3.67308 13.5182 4.50325L13.1911 8.20248C13.1911 8.85375 12.6579 9.38174 12.0003 9.38174C11.3416 9.38174 10.8096 8.85375 10.8096 8.20248Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.8698 20.6247C10.8115 20.5668 10.5647 20.3508 10.3598 20.1479C9.07656 18.9643 6.97815 15.8738 6.33596 14.2571C6.23352 14.0116 6.01542 13.3909 6 13.0582C6 12.7408 6.0738 12.4375 6.2192 12.1484C6.42299 11.7873 6.74463 11.4993 7.12355 11.34C7.38572 11.2386 8.17331 11.0793 8.18763 11.0793C9.04792 10.9211 10.4469 10.835 11.9934 10.835C13.465 10.835 14.8067 10.9211 15.6813 11.051C15.6967 11.0651 16.6738 11.2244 17.0086 11.3979C17.6211 11.7153 18 12.336 18 13.0004V13.0582C17.9857 13.4913 17.6057 14.4011 17.5924 14.4011C16.9502 15.9316 14.9532 18.949 13.6258 20.1621C13.6258 20.1621 13.2844 20.5047 13.0718 20.653C12.7656 20.8843 12.3866 20.9999 12.0077 20.9999C11.5847 20.9999 11.1915 20.8701 10.8698 20.6247Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-10"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-10">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7857 10.8672L9.93756 15.0865C9.78418 15.1805 9.58782 15.1715 9.44422 15.0605C8.7936 14.5594 8.21234 14.0514 7.82451 13.6244C7.82451 13.6244 7.49041 13.2824 7.34582 13.0654C7.11234 12.7693 7 12.3823 7 12.0063C7 11.5843 7.12309 11.1853 7.36829 10.8662C7.42398 10.8092 7.63597 10.5582 7.83623 10.3532C9.00461 9.07715 12.0545 6.96905 13.6586 6.33002C13.8921 6.22701 14.5153 6.012 14.8387 6C15.1503 6 15.4512 6.068 15.7404 6.21701C16.096 6.42202 16.3744 6.74004 16.5307 7.11706C16.6313 7.37907 16.7866 8.16511 16.7866 8.18811C16.8873 8.74914 16.9625 9.53718 16.9996 10.4572C17.0064 10.6222 16.9234 10.7822 16.7857 10.8672Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.3275 13.1397C16.6293 12.9527 17.0094 13.1917 16.9947 13.5507C16.9586 14.3928 16.896 15.1348 16.8198 15.6869C16.8081 15.6989 16.6528 16.6779 16.474 17.0089C16.1624 17.6239 15.5508 18 14.8934 18H14.8387C14.4147 17.989 13.513 17.6129 13.513 17.5899C13.0588 17.4009 12.4658 17.0809 11.8279 16.6959C11.5406 16.5219 11.5338 16.0949 11.821 15.9179L16.3275 13.1397Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-11"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-11">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M20.289 12.6593L11.811 12.6593C11.4188 12.6593 11.1005 12.341 11.1005 11.9488C11.1005 11.5566 11.4188 11.2383 11.811 11.2383L20.289 11.2383C20.6812 11.2383 20.9995 11.5566 20.9995 11.9488C20.9995 12.341 20.6812 12.6593 20.289 12.6593Z"
                        fill="currentColor"
                      />
                      <mask
                        id="mask1"
                        maskUnits="userSpaceOnUse"
                        x="3"
                        y="6"
                        width="10"
                        height="12"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5215 6.50024L12.5215 17.3966H3.58202L3.58202 6.50024L12.5215 6.50024Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0)">
                        <path
                          d="M11.811 17.3969C11.6783 17.3969 11.5476 17.36 11.432 17.288L3.9137 12.5502C3.70717 12.4195 3.58117 12.193 3.58117 11.9486C3.58117 11.7042 3.70717 11.4778 3.9137 11.347L11.432 6.60924C11.6509 6.47187 11.9275 6.46335 12.1539 6.58935C12.3813 6.7144 12.5215 6.95219 12.5215 7.21082L12.5215 16.6864C12.5215 16.945 12.3813 17.1828 12.1539 17.3079C12.0469 17.3676 11.9284 17.3969 11.811 17.3969Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-12"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-12">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12 22.0002C6.485 22.0002 2 17.5142 2 12.0002C2 6.48624 6.485 2.00024 12 2.00024C17.514 2.00024 22 6.48624 22 12.0002C22 17.5142 17.514 22.0002 12 22.0002Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.4425 16.2208C13.2515 16.2208 13.0595 16.1478 12.9135 16.0018L9.42652 12.5318C9.28552 12.3908 9.20652 12.1998 9.20652 11.9998C9.20652 11.8008 9.28552 11.6098 9.42652 11.4688L12.9135 7.99683C13.2065 7.70483 13.6805 7.70483 13.9735 7.99883C14.2655 8.29283 14.2645 8.76783 13.9715 9.05983L11.0185 11.9998L13.9715 14.9398C14.2645 15.2318 14.2655 15.7058 13.9735 15.9998C13.8275 16.1478 13.6345 16.2208 13.4425 16.2208Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-13"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-13">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.084 2L7.916 2C4.377 2 2 4.276 2 7.665L2 16.335C2 19.724 4.377 22 7.916 22L16.084 22C19.622 22 22 19.723 22 16.334L22 7.665C22 4.276 19.622 2 16.084 2Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.1445 7.72082L7.37954 11.4688C7.09654 11.7508 7.09654 12.2498 7.37954 12.5328L11.1445 16.2808C11.4385 16.5728 11.9135 16.5718 12.2055 16.2778C12.4975 15.9838 12.4975 15.5098 12.2035 15.2168L9.72654 12.7498H16.0815C16.4965 12.7498 16.8315 12.4138 16.8315 11.9998C16.8315 11.5858 16.4965 11.2498 16.0815 11.2498L9.72654 11.2498L12.2035 8.78382C12.3505 8.63682 12.4235 8.44482 12.4235 8.25182C12.4235 8.06082 12.3505 7.86882 12.2055 7.72282C11.9135 7.42982 11.4385 7.42882 11.1445 7.72082Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-14"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-14">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M15.7975 10.8096L19.4967 10.4824C20.3269 10.4824 21 11.1621 21 12.0003C21 12.8386 20.3269 13.5182 19.4967 13.5182L15.7975 13.1911C15.1463 13.1911 14.6183 12.6579 14.6183 12.0003C14.6183 11.3416 15.1463 10.8096 15.7975 10.8096Z"
                        fill="currentColor"
                      />
                      <path
                        d="M3.37534 10.8698C3.43316 10.8115 3.64915 10.5647 3.85206 10.3598C5.03568 9.07656 8.12619 6.97815 9.7429 6.33596C9.98835 6.23352 10.6091 6.01542 10.9418 6C11.2592 6 11.5625 6.0738 11.8516 6.2192C12.2127 6.42299 12.5007 6.74463 12.66 7.12355C12.7614 7.38572 12.9207 8.17331 12.9207 8.18763C13.0789 9.04792 13.165 10.4469 13.165 11.9934C13.165 13.465 13.0789 14.8067 12.949 15.6813C12.9349 15.6967 12.7756 16.6738 12.6021 17.0086C12.2847 17.6211 11.664 18 10.9996 18H10.9418C10.5087 17.9857 9.5989 17.6057 9.5989 17.5924C8.06837 16.9502 5.05096 14.9532 3.83788 13.6258C3.83788 13.6258 3.49534 13.2844 3.34698 13.0718C3.11571 12.7656 3.00007 12.3866 3.00007 12.0077C3.00007 11.5847 3.12989 11.1915 3.37534 10.8698Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-15"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-15">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.21433 13.1328L14.0624 8.91355C14.2158 8.81954 14.4122 8.82854 14.5558 8.93955C15.2064 9.44057 15.7877 9.9486 16.1755 10.3756C16.1755 10.3756 16.5096 10.7176 16.6542 10.9346C16.8877 11.2307 17 11.6177 17 11.9937C17 12.4157 16.8769 12.8147 16.6317 13.1338C16.576 13.1908 16.364 13.4418 16.1638 13.6468C14.9954 14.9228 11.9455 17.031 10.3414 17.67C10.1079 17.773 9.48466 17.988 9.16131 18C8.84967 18 8.54879 17.932 8.25962 17.783C7.90403 17.578 7.62561 17.26 7.46931 16.8829C7.36869 16.6209 7.21336 15.8349 7.21336 15.8119C7.11274 15.2509 7.03751 14.4628 7.00039 13.5428C6.99355 13.3778 7.07659 13.2178 7.21433 13.1328Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M7.67252 10.8603C7.37066 11.0473 6.99064 10.8083 7.00529 10.4493C7.04144 9.60721 7.10396 8.86518 7.18016 8.31315C7.19188 8.30115 7.34721 7.3221 7.52598 6.99108C7.83762 6.37605 8.44916 6.00003 9.10662 6.00003H9.16132C9.5853 6.01103 10.487 6.38705 10.487 6.41005C10.9412 6.59906 11.5342 6.91908 12.1721 7.3041C12.4594 7.47811 12.4662 7.90513 12.179 8.08214L7.67252 10.8603Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-16"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-16">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M3.71101 11.3407H12.189C12.5812 11.3407 12.8995 11.659 12.8995 12.0512C12.8995 12.4434 12.5812 12.7617 12.189 12.7617H3.71101C3.3188 12.7617 3.00049 12.4434 3.00049 12.0512C3.00049 11.659 3.3188 11.3407 3.71101 11.3407Z"
                        fill="currentColor"
                      />
                      <mask
                        id="mask2"
                        maskUnits="userSpaceOnUse"
                        x="11"
                        y="6"
                        width="10"
                        height="12"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.4785 17.4998V6.60336H20.418V17.4998H11.4785Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0)">
                        <path
                          d="M12.189 6.60307C12.3217 6.60307 12.4524 6.64002 12.568 6.71202L20.0863 11.4498C20.2928 11.5805 20.4188 11.807 20.4188 12.0514C20.4188 12.2958 20.2928 12.5222 20.0863 12.653L12.568 17.3908C12.3491 17.5281 12.0725 17.5367 11.8461 17.4107C11.6187 17.2856 11.4785 17.0478 11.4785 16.7892V7.3136C11.4785 7.05497 11.6187 6.81718 11.8461 6.69213C11.9531 6.63244 12.0716 6.60307 12.189 6.60307Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-17"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-17">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12 1.99976C17.515 1.99976 22 6.48576 22 11.9998C22 17.5138 17.515 21.9998 12 21.9998C6.486 21.9998 2 17.5138 2 11.9998C2 6.48576 6.486 1.99976 12 1.99976Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.5575 7.77917C10.7485 7.77917 10.9405 7.85217 11.0865 7.99817L14.5735 11.4682C14.7145 11.6092 14.7935 11.8002 14.7935 12.0002C14.7935 12.1992 14.7145 12.3902 14.5735 12.5312L11.0865 16.0032C10.7935 16.2952 10.3195 16.2952 10.0265 16.0012C9.73448 15.7072 9.73548 15.2322 10.0285 14.9402L12.9815 12.0002L10.0285 9.06017C9.73548 8.76817 9.73448 8.29417 10.0265 8.00017C10.1725 7.85217 10.3655 7.77917 10.5575 7.77917Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-18"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-18">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M7.916 22H16.084C19.623 22 22 19.724 22 16.335V7.665C22 4.276 19.623 2 16.084 2H7.916C4.378 2 2 4.277 2 7.666L2 16.335C2 19.724 4.378 22 7.916 22Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.8555 16.2792L16.6205 12.5312C16.9035 12.2492 16.9035 11.7502 16.6205 11.4672L12.8555 7.71918C12.5615 7.42718 12.0865 7.42818 11.7945 7.72218C11.5025 8.01618 11.5025 8.49018 11.7965 8.78318L14.2735 11.2502H7.91846C7.50346 11.2502 7.16846 11.5862 7.16846 12.0002C7.16846 12.4142 7.50346 12.7502 7.91846 12.7502H14.2735L11.7965 15.2162C11.6495 15.3632 11.5765 15.5552 11.5765 15.7482C11.5765 15.9392 11.6495 16.1312 11.7945 16.2772C12.0865 16.5702 12.5615 16.5712 12.8555 16.2792Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-19"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-19">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M8.20248 13.1904L4.50325 13.5176C3.67308 13.5176 3 12.8379 3 11.9997C3 11.1614 3.67308 10.4818 4.50325 10.4818L8.20248 10.8089C8.85375 10.8089 9.38174 11.3421 9.38174 11.9997C9.38174 12.6584 8.85375 13.1904 8.20248 13.1904Z"
                        fill="currentColor"
                      />
                      <path
                        d="M20.6247 13.1302C20.5668 13.1885 20.3508 13.4353 20.1479 13.6402C18.9643 14.9234 15.8738 17.0218 14.2571 17.664C14.0116 17.7665 13.3909 17.9846 13.0582 18C12.7408 18 12.4375 17.9262 12.1484 17.7808C11.7873 17.577 11.4993 17.2554 11.34 16.8764C11.2386 16.6143 11.0793 15.8267 11.0793 15.8124C10.9211 14.9521 10.835 13.5531 10.835 12.0066C10.835 10.535 10.9211 9.19332 11.051 8.31871C11.0651 8.30329 11.2244 7.32623 11.3979 6.99137C11.7153 6.37892 12.336 6 13.0004 6H13.0582C13.4913 6.01432 14.4011 6.39435 14.4011 6.40756C15.9316 7.04975 18.949 9.04681 20.1621 10.3742C20.1621 10.3742 20.5047 10.7156 20.653 10.9282C20.8843 11.2344 20.9999 11.6134 20.9999 11.9923C20.9999 12.4153 20.8701 12.8085 20.6247 13.1302Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-20"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-20">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.1328 16.7857L8.91355 9.93756C8.81954 9.78418 8.82854 9.58782 8.93955 9.44422C9.44057 8.7936 9.9486 8.21234 10.3756 7.82451C10.3756 7.82451 10.7176 7.49041 10.9346 7.34582C11.2307 7.11234 11.6177 7 11.9937 7C12.4157 7 12.8147 7.12309 13.1338 7.36829C13.1908 7.42398 13.4418 7.63597 13.6468 7.83623C14.9228 9.00461 17.031 12.0545 17.67 13.6586C17.773 13.8921 17.988 14.5153 18 14.8387C18 15.1503 17.932 15.4512 17.783 15.7404C17.578 16.096 17.26 16.3744 16.8829 16.5307C16.6209 16.6313 15.8349 16.7866 15.8119 16.7866C15.2509 16.8873 14.4628 16.9625 13.5428 16.9996C13.3778 17.0064 13.2178 16.9234 13.1328 16.7857Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M10.86 16.3277C11.047 16.6296 10.808 17.0096 10.449 16.995C9.60697 16.9588 8.86493 16.8963 8.31291 16.8201C8.3009 16.8084 7.32186 16.653 6.99084 16.4743C6.37581 16.1626 5.99979 15.5511 5.99979 14.8936V14.8389C6.01079 14.4149 6.38681 13.5133 6.40981 13.5133C6.59882 13.059 6.91884 12.466 7.30385 11.8281C7.47786 11.5409 7.90488 11.534 8.08189 11.8213L10.86 16.3277Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-21"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-21">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M11.3412 20.289L11.3412 11.811C11.3412 11.4188 11.6595 11.1005 12.0517 11.1005C12.4439 11.1005 12.7622 11.4188 12.7622 11.811L12.7622 20.289C12.7622 20.6812 12.4439 20.9995 12.0517 20.9995C11.6595 20.9995 11.3412 20.6812 11.3412 20.289Z"
                        fill="currentColor"
                      />
                      <mask
                        id="mask3"
                        maskUnits="userSpaceOnUse"
                        x="6"
                        y="3"
                        width="12"
                        height="10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.5 12.5212L6.6036 12.5212L6.6036 3.58178L17.5 3.58178V12.5212Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0)">
                        <path
                          d="M6.60332 11.8107C6.60332 11.6781 6.64027 11.5473 6.71227 11.4318L11.4501 3.91345C11.5808 3.70692 11.8072 3.58092 12.0516 3.58092C12.2961 3.58092 12.5225 3.70692 12.6532 3.91345L17.391 11.4318C17.5284 11.6506 17.5369 11.9272 17.4109 12.1537C17.2858 12.381 17.0481 12.5212 16.7894 12.5212L7.31384 12.5212C7.05521 12.5212 6.81742 12.381 6.69237 12.1537C6.63269 12.0466 6.60332 11.9282 6.60332 11.8107Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-22"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-22">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M2 12C2 6.485 6.486 2 12 2C17.514 2 22 6.485 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.77942 13.4425C7.77942 13.2515 7.85242 13.0595 7.99842 12.9135L11.4684 9.42652C11.6094 9.28552 11.8004 9.20652 12.0004 9.20652C12.1994 9.20652 12.3904 9.28552 12.5314 9.42652L16.0034 12.9135C16.2954 13.2065 16.2954 13.6805 16.0014 13.9735C15.7074 14.2655 15.2324 14.2645 14.9404 13.9715L12.0004 11.0185L9.06042 13.9715C8.76842 14.2645 8.29442 14.2655 8.00042 13.9735C7.85242 13.8275 7.77942 13.6345 7.77942 13.4425Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-23"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-23">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 16.084V7.916C22 4.377 19.724 2 16.335 2H7.665C4.276 2 2 4.377 2 7.916V16.084C2 19.622 4.277 22 7.666 22H16.335C19.724 22 22 19.622 22 16.084Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.2792 11.1445L12.5312 7.37954C12.2492 7.09654 11.7502 7.09654 11.4672 7.37954L7.71918 11.1445C7.42718 11.4385 7.42818 11.9135 7.72218 12.2055C8.01618 12.4975 8.49018 12.4975 8.78318 12.2035L11.2502 9.72654V16.0815C11.2502 16.4965 11.5862 16.8315 12.0002 16.8315C12.4142 16.8315 12.7502 16.4965 12.7502 16.0815V9.72654L15.2162 12.2035C15.3632 12.3505 15.5552 12.4235 15.7482 12.4235C15.9392 12.4235 16.1312 12.3505 16.2772 12.2055C16.5702 11.9135 16.5712 11.4385 16.2792 11.1445Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-24"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-24">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M13.1904 15.7975L13.5176 19.4967C13.5176 20.3269 12.8379 21 11.9997 21C11.1614 21 10.4818 20.3269 10.4818 19.4967L10.8089 15.7975C10.8089 15.1463 11.3421 14.6183 11.9997 14.6183C12.6584 14.6183 13.1904 15.1463 13.1904 15.7975Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.1302 3.37534C13.1885 3.43316 13.4353 3.64915 13.6402 3.85206C14.9234 5.03568 17.0218 8.12619 17.664 9.7429C17.7665 9.98835 17.9846 10.6091 18 10.9418C18 11.2592 17.9262 11.5625 17.7808 11.8516C17.577 12.2127 17.2554 12.5007 16.8764 12.66C16.6143 12.7614 15.8267 12.9207 15.8124 12.9207C14.9521 13.0789 13.5531 13.165 12.0066 13.165C10.535 13.165 9.19332 13.0789 8.31871 12.949C8.30329 12.9349 7.32623 12.7756 6.99137 12.6021C6.37892 12.2847 6 11.664 6 10.9996V10.9418C6.01432 10.5087 6.39435 9.5989 6.40756 9.5989C7.04975 8.06837 9.04681 5.05096 10.3742 3.83788C10.3742 3.83788 10.7156 3.49534 10.9282 3.34698C11.2344 3.11571 11.6134 3.00007 11.9923 3.00007C12.4153 3.00007 12.8085 3.12989 13.1302 3.37534Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-25"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-25">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.6203 22H7.3797C4.68923 22 2.5 19.8311 2.5 17.1646V11.8354C2.5 9.16894 4.68923 7 7.3797 7H16.6203C19.3108 7 21.5 9.16894 21.5 11.8354V17.1646C21.5 19.8311 19.3108 22 16.6203 22Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.7551 10C15.344 10 15.0103 9.67634 15.0103 9.27754V6.35689C15.0103 4.75111 13.6635 3.44491 12.0089 3.44491C11.2472 3.44491 10.4477 3.7416 9.87861 4.28778C9.30854 4.83588 8.99272 5.56508 8.98974 6.34341V9.27754C8.98974 9.67634 8.65604 10 8.24487 10C7.8337 10 7.5 9.67634 7.5 9.27754V6.35689C7.50497 5.17303 7.97771 4.08067 8.82984 3.26285C9.68098 2.44311 10.7814 2.03179 12.0119 2C14.4849 2 16.5 3.95449 16.5 6.35689V9.27754C16.5 9.67634 16.1663 10 15.7551 10Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-26"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-26">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.9133 16.3147L20.1444 10.1201C19.676 7.90964 18.3503 7 17.0865 7H6.93171C5.65022 7 4.28034 7.84597 3.88264 10.1201L3.1049 16.3147C2.46858 20.8629 4.81062 22 7.86853 22H16.1585C19.2075 22 21.4789 20.3535 20.9133 16.3147ZM9.097 12.1486C8.60889 12.1486 8.21321 11.7413 8.21321 11.2389C8.21321 10.7366 8.60889 10.3293 9.097 10.3293C9.5851 10.3293 9.98079 10.7366 9.98079 11.2389C9.98079 11.7413 9.5851 12.1486 9.097 12.1486ZM14.002 11.2389C14.002 11.7413 14.3977 12.1486 14.8858 12.1486C15.3739 12.1486 15.7696 11.7413 15.7696 11.2389C15.7696 10.7366 15.3739 10.3293 14.8858 10.3293C14.3977 10.3293 14.002 10.7366 14.002 11.2389Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.9739 6.77432C16.977 6.85189 16.9621 6.92913 16.9303 7H15.4932C15.4654 6.92794 15.4506 6.85153 15.4497 6.77432C15.4497 4.85682 13.8899 3.30238 11.9657 3.30238C10.0416 3.30238 8.48184 4.85682 8.48184 6.77432C8.49502 6.84898 8.49502 6.92535 8.48184 7H7.00989C6.9967 6.92535 6.9967 6.84898 7.00989 6.77432C7.12172 4.10591 9.32499 2 12.0049 2C14.6849 2 16.8882 4.10591 17 6.77432H16.9739Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-27"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-027">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M11.9912 18.6215L5.49945 21.864C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7087C4 14.4283 4.40573 14.8725 5.47299 15.37L11.9912 18.6215Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-28"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-281">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-27"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-27">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 16.8701V9.25708H21V16.9311C21 20.0701 19.0241 22.0001 15.8628 22.0001H8.12733C4.99561 22.0001 3 20.0301 3 16.8701ZM7.95938 14.4101C7.50494 14.4311 7.12953 14.0701 7.10977 13.6111C7.10977 13.1511 7.46542 12.7711 7.91987 12.7501C8.36443 12.7501 8.72997 13.1011 8.73985 13.5501C8.7596 14.0111 8.40395 14.3911 7.95938 14.4101ZM12.0198 14.4101C11.5653 14.4311 11.1899 14.0701 11.1701 13.6111C11.1701 13.1511 11.5258 12.7711 11.9802 12.7501C12.4248 12.7501 12.7903 13.1011 12.8002 13.5501C12.82 14.0111 12.4643 14.3911 12.0198 14.4101ZM16.0505 18.0901C15.596 18.0801 15.2305 17.7001 15.2305 17.2401C15.2206 16.7801 15.5862 16.4011 16.0406 16.3911H16.0505C16.5148 16.3911 16.8902 16.7711 16.8902 17.2401C16.8902 17.7101 16.5148 18.0901 16.0505 18.0901ZM11.1701 17.2401C11.1899 17.7001 11.5653 18.0611 12.0198 18.0401C12.4643 18.0211 12.82 17.6411 12.8002 17.1811C12.7903 16.7311 12.4248 16.3801 11.9802 16.3801C11.5258 16.4011 11.1701 16.7801 11.1701 17.2401ZM7.09989 17.2401C7.11965 17.7001 7.49506 18.0611 7.94951 18.0401C8.39407 18.0211 8.74973 17.6411 8.72997 17.1811C8.72009 16.7311 8.35456 16.3801 7.90999 16.3801C7.45554 16.4011 7.09989 16.7801 7.09989 17.2401ZM15.2404 13.6011C15.2404 13.1411 15.596 12.7711 16.0505 12.7611C16.4951 12.7611 16.8507 13.1201 16.8705 13.5611C16.8804 14.0211 16.5247 14.4011 16.0801 14.4101C15.6257 14.4201 15.2503 14.0701 15.2404 13.6111V13.6011Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M3.00293 9.25699C3.01577 8.66999 3.06517 7.50499 3.15803 7.12999C3.63224 5.02099 5.24256 3.68099 7.54442 3.48999H16.4555C18.7376 3.69099 20.3677 5.03999 20.8419 7.12999C20.9338 7.49499 20.9832 8.66899 20.996 9.25699H3.00293Z"
                        fill="currentColor"
                      />
                      <path
                        d="M8.30465 6.59C8.73934 6.59 9.06535 6.261 9.06535 5.82V2.771C9.06535 2.33 8.73934 2 8.30465 2C7.86996 2 7.54395 2.33 7.54395 2.771V5.82C7.54395 6.261 7.86996 6.59 8.30465 6.59Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.6953 6.59C16.1201 6.59 16.456 6.261 16.456 5.82V2.771C16.456 2.33 16.1201 2 15.6953 2C15.2606 2 14.9346 2.33 14.9346 2.771V5.82C14.9346 6.261 15.2606 6.59 15.6953 6.59Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-28"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-28">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M19.3371 5.91772L21.7407 3.50518C21.9082 3.33698 22.0001 3.11407 22.0001 2.87798C22.0001 2.64189 21.9082 2.41898 21.7407 2.25078C21.4065 1.91641 20.8261 1.91641 20.4919 2.25078L18.0884 4.66434L15.6839 2.25078C15.3498 1.91641 14.7693 1.91641 14.4352 2.25078C14.2686 2.41898 14.1768 2.64189 14.1768 2.87798C14.1768 3.11407 14.2686 3.33698 14.4352 3.50518L16.8387 5.91772L14.4352 8.33027C14.2686 8.49847 14.1768 8.72138 14.1768 8.95747C14.1768 9.19356 14.2686 9.41647 14.4352 9.58467C14.7693 9.91904 15.3498 9.91904 15.6839 9.58467L18.0884 7.17111L20.4919 9.58467C20.6595 9.75186 20.8806 9.84406 21.1168 9.84406C21.353 9.84406 21.5741 9.75186 21.7407 9.58467C21.9082 9.41647 22.0001 9.19356 22.0001 8.95747C22.0001 8.72138 21.9082 8.49847 21.7407 8.33027L19.3371 5.91772Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0317 12.9724C15.0208 16.9604 15.9258 12.3467 18.4656 14.8848C20.9143 17.3328 22.3216 17.8232 19.2192 20.9247C18.8306 21.237 16.3616 24.9943 7.6846 16.3197C-0.993478 7.644 2.76158 5.17244 3.07397 4.78395C6.18387 1.67385 6.66586 3.08938 9.11449 5.53733C11.6544 8.0765 7.04266 8.98441 11.0317 12.9724Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-29"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-29">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.18493 14.2054C-0.246553 6.91826 2.96919 4.73963 3.25374 4.38547C6.32245 1.27315 6.79846 2.68979 9.20921 5.13672C11.2402 7.20803 8.60732 8.19539 9.68628 10.6531L6.18493 14.2054Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.09 13.3826C15.3702 16.0763 16.2953 12.2235 18.6188 14.5846C21.0158 17.0315 22.3941 17.5252 19.3547 20.6268C18.9973 20.938 16.6949 24.4689 8.79932 16.7417L12.09 13.3826Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M21.3746 3.85937V3.86954L11.9584 13.5151L3.44417 22.246C3.27567 22.4086 3.06752 22.5 2.84946 22.5C2.6314 22.5 2.42326 22.4086 2.24484 22.246C1.96731 21.9512 1.92767 21.5141 2.11599 21.1889L2.14573 21.1482C2.16555 21.1167 2.18537 21.0873 2.21511 21.0568L20.1753 2.62954C20.324 2.46691 20.542 2.36426 20.77 2.36426C20.998 2.36426 21.216 2.46691 21.3746 2.62954C21.7017 2.97511 21.7017 3.5138 21.3746 3.85937Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-30"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-30">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-31"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-31">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M14.4183 5.49C13.9422 5.40206 13.505 5.70586 13.4144 6.17054C13.3238 6.63522 13.6285 7.08891 14.0916 7.17984C15.4859 7.45166 16.5624 8.53092 16.8353 9.92995V9.93095C16.913 10.3337 17.2675 10.6265 17.6759 10.6265C17.7306 10.6265 17.7854 10.6215 17.8412 10.6115C18.3043 10.5186 18.609 10.0659 18.5184 9.60018C18.1111 7.51062 16.5027 5.89672 14.4183 5.49Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M14.3558 2.00793C14.1328 1.97595 13.9087 2.04191 13.7304 2.18381C13.5472 2.32771 13.4326 2.53557 13.4078 2.76841C13.355 3.23908 13.6946 3.66479 14.1646 3.71776C17.4063 4.07951 19.9259 6.60477 20.2904 9.85654C20.3392 10.2922 20.7047 10.621 21.1409 10.621C21.1738 10.621 21.2057 10.619 21.2385 10.615C21.4666 10.59 21.6698 10.4771 21.8132 10.2972C21.9556 10.1174 22.0203 9.89351 21.9944 9.66467C21.5403 5.60746 18.4002 2.45862 14.3558 2.00793Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0317 12.9724C15.0208 16.9604 15.9258 12.3467 18.4656 14.8848C20.9143 17.3328 22.3216 17.8232 19.2192 20.9247C18.8306 21.237 16.3616 24.9943 7.6846 16.3197C-0.993478 7.644 2.76158 5.17244 3.07397 4.78395C6.18387 1.67385 6.66586 3.08938 9.11449 5.53733C11.6544 8.0765 7.04266 8.98441 11.0317 12.9724Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-32"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-32">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.71 10.0721C16.71 10.5715 17.11 10.9711 17.61 10.9711C18.11 10.9711 18.52 10.5715 18.52 10.0721C18.52 9.57263 18.11 9.16309 17.61 9.16309C17.11 9.16309 16.71 9.57263 16.71 10.0721ZM14.77 16.1054C14.06 16.8146 13.08 17.2541 12 17.2541C10.95 17.2541 9.97 16.8446 9.22 16.1054C8.48 15.3562 8.07 14.3773 8.07 13.3285C8.06 12.2896 8.47 11.3107 9.21 10.5615C9.96 9.81236 10.95 9.40282 12 9.40282C13.05 9.40282 14.04 9.81236 14.78 10.5515C15.52 11.3007 15.93 12.2896 15.93 13.3285C15.92 14.4172 15.48 15.3962 14.77 16.1054ZM12 10.9012C11.35 10.9012 10.74 11.1509 10.27 11.6204C9.81 12.0798 9.56 12.6892 9.57 13.3185V13.3285C9.57 13.9777 9.82 14.5871 10.28 15.0465C10.74 15.506 11.35 15.7558 12 15.7558C13.34 15.7558 14.42 14.667 14.43 13.3285C14.43 12.6792 14.18 12.0699 13.72 11.6104C13.26 11.1509 12.65 10.9012 12 10.9012Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M17.44 6.2364L17.34 6.01665C17.07 5.44728 16.76 4.78801 16.57 4.40844C16.11 3.50943 15.32 3.00999 14.35 3H9.64C8.67 3.00999 7.89 3.50943 7.43 4.40844C7.23 4.80799 6.89 5.52719 6.61 6.11654L6.55 6.2364C6.52 6.31632 6.44 6.35627 6.36 6.35627C3.95 6.35627 2 8.3141 2 10.7114V16.6448C2 19.0422 3.95 21 6.36 21H17.64C20.04 21 22 19.0422 22 16.6448V10.7114C22 8.3141 20.04 6.35627 17.64 6.35627C17.55 6.35627 17.48 6.30633 17.44 6.2364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-33"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-33">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-34"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-34">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.6756 2H7.33333C3.92889 2 2 3.92889 2 7.33333V16.6667C2 20.0711 3.92889 22 7.33333 22H16.6756C20.08 22 22 20.0711 22 16.6667V7.33333C22 3.92889 20.08 2 16.6756 2Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.36866 9.3689C6.91533 9.3689 6.54199 9.74223 6.54199 10.2045V17.0756C6.54199 17.5289 6.91533 17.9022 7.36866 17.9022C7.83088 17.9022 8.20421 17.5289 8.20421 17.0756V10.2045C8.20421 9.74223 7.83088 9.3689 7.36866 9.3689Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.0352 6.08887C11.5818 6.08887 11.2085 6.4622 11.2085 6.92442V17.0755C11.2085 17.5289 11.5818 17.9022 12.0352 17.9022C12.4974 17.9022 12.8707 17.5289 12.8707 17.0755V6.92442C12.8707 6.4622 12.4974 6.08887 12.0352 6.08887Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.6398 12.9956C16.1775 12.9956 15.8042 13.3689 15.8042 13.8312V17.0756C15.8042 17.5289 16.1775 17.9023 16.6309 17.9023C17.0931 17.9023 17.4664 17.5289 17.4664 17.0756V13.8312C17.4664 13.3689 17.0931 12.9956 16.6398 12.9956Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-35"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-35">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12.02 2C6.21 2 2 6.74 2 12C2 13.68 2.49 15.41 3.35 16.99C3.51 17.25 3.53 17.58 3.42 17.89L2.75 20.13C2.6 20.67 3.06 21.07 3.57 20.91L5.59 20.31C6.14 20.13 6.57 20.36 7.081 20.67C8.541 21.53 10.36 21.97 12 21.97C16.96 21.97 22 18.14 22 11.97C22 6.65 17.7 2 12.02 2Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9807 13.2901C11.2707 13.2801 10.7007 12.7101 10.7007 12.0001C10.7007 11.3001 11.2807 10.7201 11.9807 10.7301C12.6907 10.7301 13.2607 11.3001 13.2607 12.0101C13.2607 12.7101 12.6907 13.2901 11.9807 13.2901ZM7.37033 13.2901C6.67033 13.2901 6.09033 12.7101 6.09033 12.0101C6.09033 11.3001 6.66033 10.7301 7.37033 10.7301C8.08033 10.7301 8.65033 11.3001 8.65033 12.0101C8.65033 12.7101 8.08033 13.2801 7.37033 13.2901ZM15.3105 12.0101C15.3105 12.7101 15.8805 13.2901 16.5905 13.2901C17.3005 13.2901 17.8705 12.7101 17.8705 12.0101C17.8705 11.3001 17.3005 10.7301 16.5905 10.7301C15.8805 10.7301 15.3105 11.3001 15.3105 12.0101Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-36"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-36">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.0158 13.7703L13.2368 11.9923L15.0148 10.2143C15.3568 9.87326 15.3568 9.31826 15.0148 8.97726C14.6728 8.63326 14.1198 8.63426 13.7778 8.97626L11.9988 10.7543L10.2198 8.97426C9.87782 8.63226 9.32382 8.63426 8.98182 8.97426C8.64082 9.31626 8.64082 9.87126 8.98182 10.2123L10.7618 11.9923L8.98582 13.7673C8.64382 14.1093 8.64382 14.6643 8.98582 15.0043C9.15682 15.1763 9.37982 15.2613 9.60382 15.2613C9.82882 15.2613 10.0518 15.1763 10.2228 15.0053L11.9988 13.2293L13.7788 15.0083C13.9498 15.1793 14.1728 15.2643 14.3968 15.2643C14.6208 15.2643 14.8448 15.1783 15.0158 15.0083C15.3578 14.6663 15.3578 14.1123 15.0158 13.7703Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-37"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-37">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M4.72251 21.1672C4.70951 21.1672 4.69751 21.1672 4.68351 21.1662C4.36851 21.1502 4.05951 21.0822 3.76551 20.9632C2.31851 20.3752 1.62051 18.7222 2.20751 17.2762L9.52851 4.45025C9.78051 3.99425 10.1625 3.61225 10.6285 3.35425C11.9935 2.59825 13.7195 3.09525 14.4745 4.45925L21.7475 17.1872C21.9095 17.5682 21.9785 17.8782 21.9955 18.1942C22.0345 18.9502 21.7765 19.6752 21.2705 20.2362C20.7645 20.7972 20.0695 21.1282 19.3145 21.1662L4.79451 21.1672H4.72251Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.1245 10.0208C11.1245 9.53875 11.5175 9.14575 11.9995 9.14575C12.4815 9.14575 12.8745 9.53875 12.8745 10.0208V12.8488C12.8745 13.3318 12.4815 13.7238 11.9995 13.7238C11.5175 13.7238 11.1245 13.3318 11.1245 12.8488V10.0208ZM11.1245 16.2699C11.1245 15.7849 11.5175 15.3899 11.9995 15.3899C12.4815 15.3899 12.8745 15.7799 12.8745 16.2589C12.8745 16.7519 12.4815 17.1449 11.9995 17.1449C11.5175 17.1449 11.1245 16.7519 11.1245 16.2699Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-38"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-38">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z"
                        fill="currentColor"
                      />
                      <path
                        d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-39"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-39">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M11.9993 21.9981C11.2303 21.9981 10.4623 21.7061 9.87526 21.1231L9.14526 20.3931C8.86226 20.1111 8.48326 19.9551 8.08126 19.9541H7.05426C5.39426 19.9541 4.04326 18.6031 4.04326 16.9431V15.9151C4.04226 15.5141 3.88626 15.1351 3.60326 14.8501L2.88526 14.1331C1.70926 12.9641 1.70426 11.0531 2.87426 9.87615L3.60426 9.14515C3.88626 8.86215 4.04226 8.48315 4.04326 8.08115V7.05515C4.04326 5.39415 5.39426 4.04315 7.05426 4.04315H8.08226C8.48326 4.04315 8.86126 3.88715 9.14626 3.60215L9.86526 2.88515C11.0343 1.70915 12.9443 1.70315 14.1223 2.87415L14.8523 3.60415C15.1363 3.88715 15.5143 4.04315 15.9153 4.04315H16.9433C18.6033 4.04315 19.9543 5.39415 19.9543 7.05515V8.08215C19.9553 8.48315 20.1113 8.86215 20.3943 9.14715L21.1123 9.86515C21.6813 10.4311 21.9963 11.1851 21.9993 11.9901C22.0013 12.7901 21.6933 13.5431 21.1323 14.1121C21.1223 14.1221 21.1133 14.1331 21.1033 14.1421L20.3933 14.8521C20.1113 15.1351 19.9553 15.5141 19.9543 15.9161V16.9431C19.9543 18.6031 18.6033 19.9541 16.9433 19.9541H15.9153C15.5143 19.9551 15.1353 20.1111 14.8513 20.3941L14.1323 21.1121C13.5463 21.7021 12.7723 21.9981 11.9993 21.9981Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0428 10.0508C9.87776 10.2158 9.66376 10.3048 9.42676 10.3048C9.20476 10.3048 8.98676 10.2138 8.81176 10.0498C8.64576 9.88483 8.55176 9.65883 8.55176 9.42983C8.55176 9.21183 8.64376 8.98783 8.80576 8.81483C8.89476 8.72483 9.00076 8.65683 9.10676 8.62083C9.40876 8.48283 9.80976 8.56383 10.0478 8.81383C10.1328 8.89883 10.1978 8.99183 10.2408 9.08883C10.2878 9.19283 10.3118 9.31083 10.3118 9.42983C10.3118 9.66783 10.2168 9.88883 10.0428 10.0508ZM15.1905 8.80973C14.8495 8.46973 14.2945 8.46973 13.9535 8.80973L8.81346 13.9497C8.47246 14.2907 8.47246 14.8457 8.81346 15.1877C8.97946 15.3527 9.19846 15.4437 9.43246 15.4437C9.66646 15.4437 9.88546 15.3527 10.0505 15.1877L15.1905 10.0477C15.5315 9.70573 15.5315 9.15173 15.1905 8.80973ZM14.9058 13.7638C14.5818 13.6278 14.1978 13.7018 13.9418 13.9578C13.8888 14.0198 13.8138 14.1158 13.7628 14.2288C13.7088 14.3508 13.7018 14.4818 13.7018 14.5698C13.7018 14.6578 13.7088 14.7878 13.7628 14.9098C13.8128 15.0218 13.8728 15.1128 13.9518 15.1918C14.1328 15.3598 14.3428 15.4448 14.5768 15.4448C14.7988 15.4448 15.0168 15.3548 15.1958 15.1878C15.3548 15.0288 15.4418 14.8088 15.4418 14.5698C15.4418 14.3298 15.3548 14.1108 15.1948 13.9508C15.1068 13.8638 15.0008 13.7958 14.9058 13.7638Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-40"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-40">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.8597 8.70505L14.2397 13.8251C14.1797 14.0351 14.0097 14.2051 13.7997 14.2661L8.69972 15.8651C8.35972 15.9761 8.02972 15.6451 8.13972 15.3051L9.73972 10.1751C9.79972 9.96505 9.96972 9.80505 10.1797 9.73505L15.2997 8.13505C15.6497 8.02505 15.9697 8.35505 15.8597 8.70505Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-41"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-41">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-42"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-42">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M17.554 7.29614C20.005 7.29614 22 9.35594 22 11.8876V16.9199C22 19.4453 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4412 2 16.9096V11.8773C2 9.35181 3.991 7.29614 6.438 7.29614H7.378L17.554 7.29614Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.5464 16.0374L15.4554 13.0695C15.7554 12.7627 15.7554 12.2691 15.4534 11.9634C15.1514 11.6587 14.6644 11.6597 14.3644 11.9654L12.7714 13.5905L12.7714 3.2821C12.7714 2.85042 12.4264 2.5 12.0004 2.5C11.5754 2.5 11.2314 2.85042 11.2314 3.2821L11.2314 13.5905L9.63742 11.9654C9.33742 11.6597 8.85043 11.6587 8.54843 11.9634C8.39743 12.1168 8.32142 12.3168 8.32142 12.518C8.32142 12.717 8.39743 12.9171 8.54643 13.0695L11.4554 16.0374C11.6004 16.1847 11.7964 16.268 12.0004 16.268C12.2054 16.268 12.4014 16.1847 12.5464 16.0374Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-43"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-43">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.6643 21.9897H7.33488C5.88835 22.0796 4.46781 21.5781 3.3989 20.6011C2.4219 19.5312 1.92041 18.1107 2.01032 16.6652V7.33482C1.92041 5.88932 2.4209 4.46878 3.3979 3.39889C4.46781 2.42189 5.88835 1.92041 7.33488 2.01032H16.6643C18.1089 1.92041 19.5284 2.4209 20.5973 3.39789C21.5733 4.46878 22.0758 5.88832 21.9899 7.33482V16.6652C22.0788 18.1107 21.5783 19.5312 20.6013 20.6011C19.5314 21.5781 18.1109 22.0796 16.6643 21.9897Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17.0545 10.3976L10.5018 16.9829C10.161 17.3146 9.7131 17.5 9.24574 17.5H6.95762C6.83105 17.5 6.71421 17.4512 6.62658 17.3634C6.53895 17.2756 6.5 17.1585 6.5 17.0317L6.55842 14.7195C6.56816 14.261 6.75315 13.8317 7.07446 13.5098L11.7189 8.8561C11.7967 8.77805 11.9331 8.77805 12.011 8.8561L13.6399 10.4785C13.747 10.5849 13.9028 10.6541 14.0683 10.6541C14.4286 10.6541 14.7109 10.3615 14.7109 10.0102C14.7109 9.83463 14.6428 9.67854 14.5357 9.56146C14.5065 9.52244 12.9554 7.97805 12.9554 7.97805C12.858 7.88049 12.858 7.71463 12.9554 7.61707L13.6078 6.95366C14.2114 6.34878 15.1851 6.34878 15.7888 6.95366L17.0545 8.22195C17.6485 8.81707 17.6485 9.79268 17.0545 10.3976Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-44"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-44">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-45"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-45">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5715 13.5941L20.4266 7.72014C20.7929 7.35183 21 6.84877 21 6.32376V4.60099C21 3.52002 20.1423 3 19.0844 3H4.91556C3.85765 3 3 3.52002 3 4.60099V6.3547C3 6.85177 3.18462 7.33087 3.51772 7.69419L8.89711 13.5632C8.9987 13.674 9.14034 13.7368 9.28979 13.7378L14.1915 13.7518C14.3332 13.7528 14.4699 13.6969 14.5715 13.5941Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M9.05615 13.6858V20.2904C9.05615 20.5309 9.17728 20.7575 9.37557 20.8873C9.48889 20.9621 9.61978 21.0001 9.75068 21.0001C9.84934 21.0001 9.948 20.9791 10.0398 20.9372L14.0057 19.0886C14.2539 18.9739 14.4131 18.7213 14.4131 18.4429V13.6858H9.05615Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-46"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-46">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M10.0833 15.958H3.50777C2.67555 15.958 2 16.6217 2 17.4393C2 18.2559 2.67555 18.9207 3.50777 18.9207H10.0833C10.9155 18.9207 11.5911 18.2559 11.5911 17.4393C11.5911 16.6217 10.9155 15.958 10.0833 15.958Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M22.0001 6.37867C22.0001 5.56214 21.3246 4.89844 20.4934 4.89844H13.9179C13.0857 4.89844 12.4102 5.56214 12.4102 6.37867C12.4102 7.1963 13.0857 7.86 13.9179 7.86H20.4934C21.3246 7.86 22.0001 7.1963 22.0001 6.37867Z"
                        fill="currentColor"
                      />
                      <path
                        d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856Z"
                        fill="currentColor"
                      />
                      <path
                        d="M21.9998 17.3992C21.9998 19.2648 20.4609 20.7777 18.5609 20.7777C16.6621 20.7777 15.1221 19.2648 15.1221 17.3992C15.1221 15.5325 16.6621 14.0195 18.5609 14.0195C20.4609 14.0195 21.9998 15.5325 21.9998 17.3992Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-47"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-47">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.8843 5.11485H13.9413C13.2081 5.11969 12.512 4.79355 12.0474 4.22751L11.0782 2.88762C10.6214 2.31661 9.9253 1.98894 9.19321 2.00028H7.11261C3.37819 2.00028 2.00001 4.19201 2.00001 7.91884V11.9474C1.99536 12.3904 21.9956 12.3898 21.9969 11.9474V10.7761C22.0147 7.04924 20.6721 5.11485 16.8843 5.11485Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.8321 6.54353C21.1521 6.91761 21.3993 7.34793 21.5612 7.81243C21.8798 8.76711 22.0273 9.77037 21.9969 10.7761V16.0292C21.9956 16.4717 21.963 16.9135 21.8991 17.3513C21.7775 18.1241 21.5057 18.8656 21.0989 19.5342C20.9119 19.8571 20.6849 20.1553 20.4231 20.4215C19.2383 21.5089 17.665 22.0749 16.0574 21.9921H7.93061C6.32049 22.0743 4.74462 21.5086 3.55601 20.4215C3.2974 20.1547 3.07337 19.8566 2.88915 19.5342C2.48475 18.8661 2.21869 18.1238 2.1067 17.3513C2.03549 16.9142 1.99981 16.4721 2 16.0292V10.7761C1.99983 10.3374 2.02357 9.89902 2.07113 9.46288C2.08113 9.38636 2.09614 9.31109 2.11098 9.23659C2.13573 9.11241 2.16005 8.99038 2.16005 8.86836C2.25031 8.34204 2.41496 7.83116 2.64908 7.35101C3.34261 5.86916 4.76525 5.11492 7.09481 5.11492H16.8754C18.1802 5.01401 19.4753 5.4068 20.5032 6.21522C20.6215 6.3156 20.7316 6.4254 20.8321 6.54353ZM6.97033 15.5412H17.0355H17.0533C17.2741 15.5507 17.4896 15.4717 17.6517 15.3217C17.8137 15.1716 17.9088 14.963 17.9157 14.7425C17.9282 14.5487 17.8644 14.3577 17.7379 14.2101C17.5924 14.0118 17.3618 13.8935 17.1155 13.8907H6.97033C6.51365 13.8907 6.14343 14.2602 6.14343 14.7159C6.14343 15.1717 6.51365 15.5412 6.97033 15.5412Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-48"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-48">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M13.3051 5.88243V6.06547C12.8144 6.05584 12.3237 6.05584 11.8331 6.05584V5.89206C11.8331 5.22733 11.2737 4.68784 10.6064 4.68784H9.63482C8.52589 4.68784 7.62305 3.80152 7.62305 2.72254C7.62305 2.32755 7.95671 2 8.35906 2C8.77123 2 9.09508 2.32755 9.09508 2.72254C9.09508 3.01155 9.34042 3.24276 9.63482 3.24276H10.6064C12.0882 3.2524 13.2953 4.43736 13.3051 5.88243Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.164 6.08279C15.4791 6.08712 15.7949 6.09145 16.1119 6.09469C19.5172 6.09469 22 8.52241 22 11.875V16.1813C22 19.5339 19.5172 21.9616 16.1119 21.9616C14.7478 21.9905 13.3837 22.0001 12.0098 22.0001C10.6359 22.0001 9.25221 21.9905 7.88813 21.9616C4.48283 21.9616 2 19.5339 2 16.1813V11.875C2 8.52241 4.48283 6.09469 7.89794 6.09469C9.18351 6.07542 10.4985 6.05615 11.8332 6.05615C12.3238 6.05615 12.8145 6.05615 13.3052 6.06579C13.9238 6.06579 14.5425 6.07427 15.164 6.08279ZM10.8518 14.7459H9.82139V15.767C9.82139 16.162 9.48773 16.4896 9.08538 16.4896C8.67321 16.4896 8.34936 16.162 8.34936 15.767V14.7459H7.30913C6.90677 14.7459 6.57311 14.4279 6.57311 14.0233C6.57311 13.6283 6.90677 13.3008 7.30913 13.3008H8.34936V12.2892C8.34936 11.8942 8.67321 11.5667 9.08538 11.5667C9.48773 11.5667 9.82139 11.8942 9.82139 12.2892V13.3008H10.8518C11.2542 13.3008 11.5878 13.6283 11.5878 14.0233C11.5878 14.4279 11.2542 14.7459 10.8518 14.7459ZM15.0226 13.1177H15.1207C15.5231 13.1177 15.8567 12.7998 15.8567 12.3952C15.8567 12.0002 15.5231 11.6727 15.1207 11.6727H15.0226C14.6104 11.6727 14.2866 12.0002 14.2866 12.3952C14.2866 12.7998 14.6104 13.1177 15.0226 13.1177ZM16.7007 16.4318H16.7988C17.2012 16.4318 17.5348 16.1139 17.5348 15.7092C17.5348 15.3143 17.2012 14.9867 16.7988 14.9867H16.7007C16.2885 14.9867 15.9647 15.3143 15.9647 15.7092C15.9647 16.1139 16.2885 16.4318 16.7007 16.4318Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-49"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-49">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1528 5.55559C10.2037 5.65925 10.2373 5.77027 10.2524 5.8844L10.5308 10.0243L10.669 12.1051C10.6705 12.3191 10.704 12.5317 10.7687 12.7361C10.9356 13.1326 11.3372 13.3846 11.7741 13.3671L18.4313 12.9316C18.7196 12.9269 18.998 13.0347 19.2052 13.2313C19.3779 13.3952 19.4894 13.6096 19.5246 13.8402L19.5364 13.9802C19.2609 17.795 16.4592 20.9767 12.6524 21.7981C8.84555 22.6194 4.94186 20.8844 3.06071 17.535C2.51839 16.5619 2.17965 15.4923 2.06438 14.389C2.01623 14.0624 1.99503 13.7326 2.00098 13.4026C1.99503 9.31279 4.90747 5.77702 8.98433 4.92463C9.47501 4.84822 9.95603 5.10798 10.1528 5.55559Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M12.8701 2.00082C17.43 2.11683 21.2624 5.39579 22.0001 9.81229L21.993 9.84488L21.9729 9.89227L21.9757 10.0224C21.9652 10.1947 21.8987 10.3605 21.784 10.4945C21.6646 10.634 21.5014 10.729 21.3217 10.7659L21.2121 10.7809L13.5313 11.2786C13.2758 11.3038 13.0214 11.2214 12.8314 11.052C12.6731 10.9107 12.5719 10.7201 12.5433 10.5147L12.0277 2.84506C12.0188 2.81913 12.0188 2.79102 12.0277 2.76508C12.0348 2.55367 12.1278 2.35384 12.2861 2.21023C12.4444 2.06662 12.6547 1.9912 12.8701 2.00082Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-50"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-50">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M11.7761 21.8374C9.49311 20.4273 7.37081 18.7645 5.44807 16.8796C4.09069 15.5338 3.05404 13.8905 2.41735 12.0753C1.27971 8.53523 2.60399 4.48948 6.30129 3.2884C8.2528 2.67553 10.3752 3.05175 12.0072 4.29983C13.6398 3.05315 15.7616 2.67705 17.7132 3.2884C21.4105 4.48948 22.7436 8.53523 21.606 12.0753C20.9745 13.8888 19.944 15.5319 18.5931 16.8796C16.6686 18.7625 14.5465 20.4251 12.265 21.8374L12.0161 22L11.7761 21.8374Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.0109 22.0001L11.776 21.8375C9.49013 20.4275 7.36487 18.7648 5.43902 16.8797C4.0752 15.5357 3.03238 13.8923 2.39052 12.0754C1.26177 8.53532 2.58605 4.48957 6.28335 3.28849C8.23486 2.67562 10.3853 3.05213 12.0109 4.31067V22.0001Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-51"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-51">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9902 3.88184H12C13.3951 3.88184 14.7512 4.21657 16 4.84567L12.7415 8.13491C12.5073 8.09553 12.2537 8.066 12 8.066C9.8439 8.066 8.09756 9.82827 8.09756 12.004C8.09756 12.26 8.12683 12.516 8.16585 12.7523L4.5561 16.3949C3.58049 15.2529 2.73171 13.8736 2.05854 12.2895C1.98049 12.1123 1.98049 11.8957 2.05854 11.7087C4.14634 6.80583 7.86341 3.88184 11.9902 3.88184ZM18.4293 6.54985C19.8439 7.8494 21.0439 9.60183 21.9415 11.7087C22.0195 11.8957 22.0195 12.1123 21.9415 12.2895C19.8537 17.1924 16.1366 20.1262 12 20.1262H11.9902C10.1073 20.1262 8.30244 19.506 6.71219 18.3738L9.80488 15.2529C10.4293 15.6753 11.1902 15.9322 12 15.9322C14.1463 15.9322 15.8927 14.1699 15.8927 12.004C15.8927 11.1869 15.639 10.419 15.2195 9.78889L18.4293 6.54985Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.4296 6.54952L20.2052 4.75771C20.4979 4.4722 20.4979 3.99964 20.2052 3.71413C19.9223 3.42862 19.4637 3.42862 19.1711 3.71413L18.254 4.63957C18.2442 4.65926 18.2247 4.67895 18.2052 4.69864C18.1954 4.71833 18.1759 4.73802 18.1564 4.75771L17.2881 5.63491L14.1954 8.7558L3.72715 19.3186L3.69789 19.358C3.50276 19.6435 3.54179 20.0383 3.78569 20.2844C3.92228 20.4311 4.1174 20.5 4.30276 20.5C4.48813 20.5 4.6735 20.4311 4.81984 20.2844L15.2198 9.78855L18.4296 6.54952ZM12.0004 14.4555C13.337 14.4555 14.4297 13.3529 14.4297 12.0041C14.4297 11.5906 14.3321 11.1968 14.1565 10.8621L10.8687 14.1798C11.2004 14.3571 11.5907 14.4555 12.0004 14.4555Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-52"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-52">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-53"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-53">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9999 14.7024V16.0859C21.9999 16.3155 21.9899 16.5471 21.9699 16.7767C21.6893 19.9357 19.4949 22 16.3286 22H7.67126C6.06806 22 4.71535 21.4797 3.74341 20.5363C3.36265 20.1864 3.042 19.7753 2.7915 19.3041C3.12217 18.9021 3.49291 18.462 3.85363 18.0208C4.46485 17.289 5.05603 16.5661 5.42677 16.0959C5.97788 15.4142 7.43078 13.6196 9.44481 14.4617C9.85563 14.6322 10.2164 14.8728 10.547 15.0833C11.3586 15.6247 11.6993 15.7851 12.2705 15.4743C12.9017 15.1335 13.3125 14.4617 13.7434 13.76C13.9739 13.388 14.2043 13.0281 14.4548 12.6972C15.547 11.2736 17.2304 10.8926 18.6332 11.7348C19.3346 12.1559 19.9358 12.6872 20.4969 13.2276C20.6172 13.3479 20.7374 13.4592 20.8476 13.5695C20.9979 13.7198 21.4989 14.2211 21.9999 14.7024Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.3387 2H7.67134C4.27455 2 2 4.37607 2 7.91411V16.086C2 17.3181 2.28056 18.4119 2.79158 19.3042C3.12224 18.9022 3.49299 18.4621 3.85371 18.0199C4.46493 17.2891 5.05611 16.5662 5.42685 16.096C5.97796 15.4143 7.43086 13.6197 9.44489 14.4618C9.85571 14.6323 10.2164 14.8729 10.5471 15.0834C11.3587 15.6248 11.6994 15.7852 12.2705 15.4734C12.9018 15.1336 13.3126 14.4618 13.7435 13.759C13.9739 13.3881 14.2044 13.0282 14.4549 12.6973C15.5471 11.2737 17.2305 10.8927 18.6333 11.7349C19.3347 12.1559 19.9359 12.6873 20.497 13.2277C20.6172 13.348 20.7375 13.4593 20.8477 13.5696C20.998 13.7189 21.499 14.2202 22 14.7025V7.91411C22 4.37607 19.7255 2 16.3387 2Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.4543 8.79668C11.4543 10.2053 10.2809 11.3783 8.87313 11.3783C7.46632 11.3783 6.29297 10.2053 6.29297 8.79668C6.29297 7.38909 7.46632 6.21509 8.87313 6.21509C10.2809 6.21509 11.4543 7.38909 11.4543 8.79668Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-54"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-54">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.3328 22H7.66618C4.2769 22 2 19.6229 2 16.0843V7.91672C2 4.37811 4.2769 2 7.66618 2H16.3338C19.7231 2 22 4.37811 22 7.91672V16.0843C22 19.6229 19.7231 22 16.3328 22Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2451 8.67496C11.2451 10.045 10.1301 11.16 8.7601 11.16C7.3891 11.16 6.2751 10.045 6.2751 8.67496C6.2751 7.30496 7.3891 6.18896 8.7601 6.18896C10.1301 6.18896 11.2451 7.30496 11.2451 8.67496ZM19.4005 14.0876C19.6335 14.3136 19.8005 14.5716 19.9105 14.8466C20.2435 15.6786 20.0705 16.6786 19.7145 17.5026C19.2925 18.4836 18.4845 19.2246 17.4665 19.5486C17.0145 19.6936 16.5405 19.7556 16.0675 19.7556H7.6865C6.8525 19.7556 6.1145 19.5616 5.5095 19.1976C5.1305 18.9696 5.0635 18.4446 5.3445 18.1026C5.8145 17.5326 6.2785 16.9606 6.7465 16.3836C7.6385 15.2796 8.2395 14.9596 8.9075 15.2406C9.1785 15.3566 9.4505 15.5316 9.7305 15.7156C10.4765 16.2096 11.5135 16.8876 12.8795 16.1516C13.8132 15.641 14.3552 14.7673 14.827 14.0069L14.8365 13.9916C14.8682 13.9407 14.8997 13.8898 14.9311 13.8391C15.0915 13.5799 15.2495 13.3246 15.4285 13.0896C15.6505 12.7986 16.4745 11.8886 17.5395 12.5366C18.2185 12.9446 18.7895 13.4966 19.4005 14.0876Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-55"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-55">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 11.9998C22 17.5238 17.523 21.9998 12 21.9998C6.477 21.9998 2 17.5238 2 11.9998C2 6.47776 6.477 1.99976 12 1.99976C17.523 1.99976 22 6.47776 22 11.9998Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8701 12.6307C12.8701 13.1127 12.4771 13.5057 11.9951 13.5057C11.5131 13.5057 11.1201 13.1127 11.1201 12.6307V8.21069C11.1201 7.72869 11.5131 7.33569 11.9951 7.33569C12.4771 7.33569 12.8701 7.72869 12.8701 8.21069V12.6307ZM11.1251 15.8035C11.1251 15.3215 11.5161 14.9285 11.9951 14.9285C12.4881 14.9285 12.8801 15.3215 12.8801 15.8035C12.8801 16.2855 12.4881 16.6785 12.0051 16.6785C11.5201 16.6785 11.1251 16.2855 11.1251 15.8035Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-56"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-56">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.1246 8.18921C11.1246 8.67121 11.5156 9.06421 11.9946 9.06421C12.4876 9.06421 12.8796 8.67121 12.8796 8.18921C12.8796 7.70721 12.4876 7.31421 12.0046 7.31421C11.5196 7.31421 11.1246 7.70721 11.1246 8.18921ZM12.8696 11.362C12.8696 10.88 12.4766 10.487 11.9946 10.487C11.5126 10.487 11.1196 10.88 11.1196 11.362V15.782C11.1196 16.264 11.5126 16.657 11.9946 16.657C12.4766 16.657 12.8696 16.264 12.8696 15.782V11.362Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-57"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-57">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.53162 2.93677C10.7165 1.66727 13.402 1.68946 15.5664 2.99489C17.7095 4.32691 19.012 6.70418 18.9998 9.26144C18.95 11.8019 17.5533 14.19 15.8075 16.0361C14.7998 17.1064 13.6726 18.0528 12.4488 18.856C12.3228 18.9289 12.1848 18.9777 12.0415 19C11.9036 18.9941 11.7693 18.9534 11.6508 18.8814C9.78243 17.6746 8.14334 16.134 6.81233 14.334C5.69859 12.8314 5.06584 11.016 5 9.13442C4.99856 6.57225 6.34677 4.20627 8.53162 2.93677ZM9.79416 10.1948C10.1617 11.1008 11.0292 11.6918 11.9916 11.6918C12.6221 11.6964 13.2282 11.4438 13.6748 10.9905C14.1214 10.5371 14.3715 9.92064 14.3692 9.27838C14.3726 8.29804 13.7955 7.41231 12.9073 7.03477C12.0191 6.65723 10.995 6.86235 10.3133 7.55435C9.63159 8.24635 9.42664 9.28872 9.79416 10.1948Z"
                        fill="currentColor"
                      />
                      <ellipse
                        opacity="0.4"
                        cx="12"
                        cy="21"
                        rx="5"
                        ry="1"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-58"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-58">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.7688 8.71387H16.2312C18.5886 8.71387 20.5 10.5831 20.5 12.8885V17.8254C20.5 20.1308 18.5886 22 16.2312 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8254V12.8885C3.5 10.5831 5.41136 8.71387 7.7688 8.71387ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.9419 12.8891 16.455V14.2489C12.8891 13.772 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.772 11.1109 14.2489V16.455C11.1109 16.9419 11.5072 17.3295 11.9949 17.3295Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M17.523 7.39595V8.86667C17.1673 8.7673 16.7913 8.71761 16.4052 8.71761H15.7447V7.39595C15.7447 5.37868 14.0681 3.73903 12.0053 3.73903C9.94257 3.73903 8.26594 5.36874 8.25578 7.37608V8.71761H7.60545C7.20916 8.71761 6.83319 8.7673 6.47754 8.87661V7.39595C6.4877 4.41476 8.95692 2 11.985 2C15.0537 2 17.523 4.41476 17.523 7.39595Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-59"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-59">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M7.29639 6.446C7.29639 3.995 9.35618 2 11.8878 2H16.9201C19.4456 2 21.5002 3.99 21.5002 6.436V17.552C21.5002 20.004 19.4414 22 16.9098 22H11.8775C9.35205 22 7.29639 20.009 7.29639 17.562V16.622V6.446Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.0374 11.4538L13.0695 8.54482C12.7627 8.24482 12.2691 8.24482 11.9634 8.54682C11.6587 8.84882 11.6597 9.33582 11.9654 9.63582L13.5905 11.2288H3.2821C2.85042 11.2288 2.5 11.5738 2.5 11.9998C2.5 12.4248 2.85042 12.7688 3.2821 12.7688H13.5905L11.9654 14.3628C11.6597 14.6628 11.6587 15.1498 11.9634 15.4518C12.1168 15.6028 12.3168 15.6788 12.518 15.6788C12.717 15.6788 12.9171 15.6028 13.0695 15.4538L16.0374 12.5448C16.1847 12.3998 16.268 12.2038 16.268 11.9998C16.268 11.7948 16.1847 11.5988 16.0374 11.4538Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-60"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-60">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z"
                        fill="currentColor"
                      />
                      <path
                        d="M21.7787 11.4548L18.9329 8.5458C18.6388 8.2458 18.1655 8.2458 17.8723 8.5478C17.5802 8.8498 17.5811 9.3368 17.8743 9.6368L19.4335 11.2298H17.9386H9.54826C9.13434 11.2298 8.79834 11.5748 8.79834 11.9998C8.79834 12.4258 9.13434 12.7698 9.54826 12.7698H19.4335L17.8743 14.3628C17.5811 14.6628 17.5802 15.1498 17.8723 15.4518C18.0194 15.6028 18.2113 15.6788 18.4041 15.6788C18.595 15.6788 18.7868 15.6028 18.9329 15.4538L21.7787 12.5458C21.9199 12.4008 21.9998 12.2048 21.9998 11.9998C21.9998 11.7958 21.9199 11.5998 21.7787 11.4548Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-61"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-61">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z"
                        fill="currentColor"
                      />
                      <path
                        d="M21.4759 5.67351C20.6099 4.04151 18.9059 2.99951 17.0299 2.99951H7.04988C5.17388 2.99951 3.46988 4.04151 2.60388 5.67351C2.40988 6.03851 2.50188 6.49351 2.82488 6.75151L10.2499 12.6905C10.7699 13.1105 11.3999 13.3195 12.0299 13.3195C12.0339 13.3195 12.0369 13.3195 12.0399 13.3195C12.0429 13.3195 12.0469 13.3195 12.0499 13.3195C12.6799 13.3195 13.3099 13.1105 13.8299 12.6905L21.2549 6.75151C21.5779 6.49351 21.6699 6.03851 21.4759 5.67351Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-62"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-62">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 11.9998C22 17.5238 17.523 21.9998 12 21.9998C6.477 21.9998 2 17.5238 2 11.9998C2 6.47776 6.477 1.99976 12 1.99976C17.523 1.99976 22 6.47776 22 11.9998Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.52075 10.8035C6.85975 10.8035 6.32275 11.3405 6.32275 11.9995C6.32275 12.6595 6.85975 13.1975 7.52075 13.1975C8.18175 13.1975 8.71875 12.6595 8.71875 11.9995C8.71875 11.3405 8.18175 10.8035 7.52075 10.8035ZM11.9999 10.8035C11.3389 10.8035 10.8019 11.3405 10.8019 11.9995C10.8019 12.6595 11.3389 13.1975 11.9999 13.1975C12.6609 13.1975 13.1979 12.6595 13.1979 11.9995C13.1979 11.3405 12.6609 10.8035 11.9999 10.8035ZM15.2813 11.9995C15.2813 11.3405 15.8183 10.8035 16.4793 10.8035C17.1403 10.8035 17.6773 11.3405 17.6773 11.9995C17.6773 12.6595 17.1403 13.1975 16.4793 13.1975C15.8183 13.1975 15.2813 12.6595 15.2813 11.9995Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-63"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-63">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.52124 10.8035C6.86024 10.8035 6.32324 11.3405 6.32324 11.9995C6.32324 12.6595 6.86024 13.1975 7.52124 13.1975C8.18224 13.1975 8.71924 12.6595 8.71924 11.9995C8.71924 11.3405 8.18224 10.8035 7.52124 10.8035ZM12.0002 10.8035C11.3392 10.8035 10.8022 11.3405 10.8022 11.9995C10.8022 12.6595 11.3392 13.1975 12.0002 13.1975C12.6612 13.1975 13.1982 12.6595 13.1982 11.9995C13.1982 11.3405 12.6612 10.8035 12.0002 10.8035ZM15.2817 11.9995C15.2817 11.3405 15.8187 10.8035 16.4797 10.8035C17.1407 10.8035 17.6777 11.3405 17.6777 11.9995C17.6777 12.6595 17.1407 13.1975 16.4797 13.1975C15.8187 13.1975 15.2817 12.6595 15.2817 11.9995Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-64"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-64">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-65"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-65">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.8089 9.021C18.3574 9.021 17.7594 9.011 17.0149 9.011C15.199 9.011 13.7059 7.508 13.7059 5.675V2.459C13.7059 2.206 13.503 2 13.2525 2H7.96436C5.49604 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59109 22 8.1703 22H16.0455C18.5059 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6238 9.016 19.1168 9.021 18.8089 9.021Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.0842 2.56737C15.7852 2.25637 15.2632 2.47037 15.2632 2.90137V5.53837C15.2632 6.64437 16.1732 7.55437 17.2792 7.55437C17.9772 7.56237 18.9452 7.56437 19.7672 7.56237C20.1882 7.56137 20.4022 7.05837 20.1102 6.75437C19.0552 5.65737 17.1662 3.69137 16.0842 2.56737Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.1052 12.7088C14.8132 12.4198 14.3432 12.4178 14.0512 12.7108L12.4622 14.3078V9.48084C12.4622 9.06984 12.1282 8.73584 11.7172 8.73584C11.3062 8.73584 10.9722 9.06984 10.9722 9.48084V14.3078L9.38224 12.7108C9.09124 12.4178 8.62024 12.4198 8.32924 12.7088C8.03724 12.9988 8.03724 13.4698 8.32624 13.7618L11.1892 16.6378H11.1902C11.2582 16.7058 11.3392 16.7608 11.4302 16.7988C11.5202 16.8358 11.6182 16.8558 11.7172 16.8558C11.8172 16.8558 11.9152 16.8358 12.0052 16.7978C12.0942 16.7608 12.1752 16.7058 12.2432 16.6388L12.2452 16.6378L15.1072 13.7618C15.3972 13.4698 15.3972 12.9988 15.1052 12.7088Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-66"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-66">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.8089 9.021C18.3574 9.021 17.7594 9.011 17.0149 9.011C15.199 9.011 13.7059 7.508 13.7059 5.675V2.459C13.7059 2.206 13.503 2 13.2525 2H7.96337C5.49604 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59109 22 8.1703 22H16.0455C18.5059 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6238 9.016 19.1168 9.021 18.8089 9.021Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.0842 2.56737C15.7862 2.25637 15.2632 2.47037 15.2632 2.90137V5.53837C15.2632 6.64437 16.1742 7.55437 17.2802 7.55437C17.9772 7.56237 18.9452 7.56437 19.7672 7.56237C20.1882 7.56137 20.4022 7.05837 20.1102 6.75437C19.0552 5.65737 17.1662 3.69137 16.0842 2.56737Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.9349 12.9854L14.1559 11.7634C14.4469 11.4734 14.4469 11.0024 14.1559 10.7114C13.8649 10.4204 13.3939 10.4204 13.1029 10.7114L11.8819 11.9314L10.6609 10.7114C10.3699 10.4204 9.89792 10.4204 9.60692 10.7114C9.31592 11.0024 9.31592 11.4734 9.60692 11.7634L10.8289 12.9854L9.60692 14.2064C9.31592 14.4974 9.31592 14.9684 9.60692 15.2584C9.75292 15.4044 9.94292 15.4774 10.1339 15.4774C10.3249 15.4774 10.5149 15.4044 10.6609 15.2584L11.8819 14.0384L13.1029 15.2584C13.2479 15.4044 13.4389 15.4774 13.6299 15.4774C13.8199 15.4774 14.0109 15.4044 14.1559 15.2584C14.4469 14.9684 14.4469 14.4974 14.1559 14.2064L12.9349 12.9854Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-67"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-67">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.8089 9.021C18.3574 9.021 17.7594 9.011 17.0149 9.011C15.199 9.011 13.7059 7.508 13.7059 5.675V2.459C13.7059 2.206 13.503 2 13.2525 2H7.96337C5.49604 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59109 22 8.1703 22H16.0455C18.5059 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6238 9.016 19.1168 9.021 18.8089 9.021Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.0837 2.56737C15.7857 2.25637 15.2627 2.47037 15.2627 2.90137V5.53837C15.2627 6.64437 16.1737 7.55437 17.2797 7.55437C17.9767 7.56237 18.9447 7.56437 19.7677 7.56237C20.1877 7.56137 20.4017 7.05837 20.1097 6.75437C19.0547 5.65737 17.1657 3.69137 16.0837 2.56737Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.3672 14.5693H9.4242C9.0132 14.5693 8.6792 14.2363 8.6792 13.8253C8.6792 13.4143 9.0132 13.0803 9.4242 13.0803H14.3672C14.7782 13.0803 15.1122 13.4143 15.1122 13.8253C15.1122 14.2363 14.7782 14.5693 14.3672 14.5693Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-68"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-68">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.8088 9.021C18.3573 9.021 17.7592 9.011 17.0146 9.011C15.1987 9.011 13.7055 7.508 13.7055 5.675V2.459C13.7055 2.206 13.5026 2 13.253 2H7.96363C5.49517 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59022 22 8.16958 22H16.0453C18.5058 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6247 9.016 19.1168 9.021 18.8088 9.021Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.0842 2.56737C15.7852 2.25637 15.2632 2.47037 15.2632 2.90137V5.53837C15.2632 6.64437 16.1742 7.55437 17.2792 7.55437C17.9772 7.56237 18.9452 7.56437 19.7672 7.56237C20.1882 7.56137 20.4022 7.05837 20.1102 6.75437C19.0552 5.65737 17.1662 3.69137 16.0842 2.56737Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.3672 12.2364H12.6392V10.5094C12.6392 10.0984 12.3062 9.7644 11.8952 9.7644C11.4842 9.7644 11.1502 10.0984 11.1502 10.5094V12.2364H9.4232C9.0122 12.2364 8.6792 12.5704 8.6792 12.9814C8.6792 13.3924 9.0122 13.7264 9.4232 13.7264H11.1502V15.4524C11.1502 15.8634 11.4842 16.1974 11.8952 16.1974C12.3062 16.1974 12.6392 15.8634 12.6392 15.4524V13.7264H14.3672C14.7782 13.7264 15.1122 13.3924 15.1122 12.9814C15.1122 12.5704 14.7782 12.2364 14.3672 12.2364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-69"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-69">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.8088 9.021C18.3573 9.021 17.7592 9.011 17.0146 9.011C15.1987 9.011 13.7055 7.508 13.7055 5.675V2.459C13.7055 2.206 13.5026 2 13.253 2H7.96363C5.49517 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59022 22 8.16958 22H16.0453C18.5058 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6247 9.016 19.1168 9.021 18.8088 9.021Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.0842 2.56737C15.7852 2.25637 15.2632 2.47037 15.2632 2.90137V5.53837C15.2632 6.64437 16.1742 7.55437 17.2792 7.55437C17.9772 7.56237 18.9452 7.56437 19.7672 7.56237C20.1882 7.56137 20.4022 7.05837 20.1102 6.75437C19.0552 5.65737 17.1662 3.69137 16.0842 2.56737Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.1052 12.8838C14.8142 13.1728 14.3432 13.1748 14.0512 12.8818L12.4622 11.2848V16.1118C12.4622 16.5228 12.1282 16.8568 11.7172 16.8568C11.3062 16.8568 10.9732 16.5228 10.9732 16.1118V11.2848L9.38223 12.8818C9.09223 13.1748 8.62023 13.1728 8.32923 12.8838C8.03823 12.5948 8.03723 12.1228 8.32723 11.8308L11.1892 8.95582C11.1902 8.95482 11.1902 8.95482 11.1902 8.95482C11.2582 8.88682 11.3402 8.83182 11.4302 8.79482C11.5202 8.75682 11.6182 8.73682 11.7172 8.73682C11.8172 8.73682 11.9152 8.75682 12.0052 8.79482C12.0942 8.83182 12.1752 8.88682 12.2432 8.95382C12.2442 8.95482 12.2452 8.95482 12.2452 8.95582L15.1072 11.8308C15.3972 12.1228 15.3972 12.5948 15.1052 12.8838Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-70"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-70">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.8088 9.021C18.3573 9.021 17.7592 9.011 17.0146 9.011C15.1987 9.011 13.7055 7.508 13.7055 5.675V2.459C13.7055 2.206 13.5036 2 13.253 2H7.96363C5.49517 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59022 22 8.16958 22H16.0463C18.5058 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.299 9.012 20.0475 9.013C19.6247 9.016 19.1177 9.021 18.8088 9.021Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.0842 2.56737C15.7852 2.25637 15.2632 2.47037 15.2632 2.90137V5.53837C15.2632 6.64437 16.1742 7.55437 17.2802 7.55437C17.9772 7.56237 18.9452 7.56437 19.7672 7.56237C20.1882 7.56137 20.4022 7.05837 20.1102 6.75437C19.0552 5.65737 17.1662 3.69137 16.0842 2.56737Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.97398 11.3877H12.359C12.77 11.3877 13.104 11.0547 13.104 10.6437C13.104 10.2327 12.77 9.89868 12.359 9.89868H8.97398C8.56298 9.89868 8.22998 10.2327 8.22998 10.6437C8.22998 11.0547 8.56298 11.3877 8.97398 11.3877ZM8.97408 16.3819H14.4181C14.8291 16.3819 15.1631 16.0489 15.1631 15.6379C15.1631 15.2269 14.8291 14.8929 14.4181 14.8929H8.97408C8.56308 14.8929 8.23008 15.2269 8.23008 15.6379C8.23008 16.0489 8.56308 16.3819 8.97408 16.3819Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-71"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-71">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.3345 1.99976H7.66549C4.27649 1.99976 2.00049 4.37776 2.00049 7.91676V16.0838C2.00049 19.6218 4.27649 21.9998 7.66549 21.9998H16.3335C19.7225 21.9998 22.0005 19.6218 22.0005 16.0838V7.91676C22.0005 4.37776 19.7235 1.99976 16.3345 1.99976Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.3144 11.2484H17.0144C17.4244 11.2484 17.7644 11.5884 17.7644 11.9984V13.8484C17.7644 14.2684 17.4244 14.5984 17.0144 14.5984C16.5944 14.5984 16.2644 14.2684 16.2644 13.8484V12.7484H14.9344V13.8484C14.9344 14.2684 14.5944 14.5984 14.1844 14.5984C13.7644 14.5984 13.4344 14.2684 13.4344 13.8484V12.7484H11.3144C10.9944 13.8184 10.0144 14.5984 8.84437 14.5984C7.40437 14.5984 6.23438 13.4384 6.23438 11.9984C6.23438 10.5684 7.40437 9.39844 8.84437 9.39844C10.0144 9.39844 10.9944 10.1784 11.3144 11.2484ZM7.73438 11.9984C7.73438 12.6084 8.23438 13.0984 8.84438 13.0984C9.44438 13.0984 9.94438 12.6084 9.94438 11.9984C9.94438 11.3884 9.44438 10.8984 8.84438 10.8984C8.23438 10.8984 7.73438 11.3884 7.73438 11.9984Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-72"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-72">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-73"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-73">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.6667 2H7.33333C3.92889 2 2 3.92889 2 7.33333V16.6667C2 20.0622 3.92 22 7.33333 22H16.6667C20.0711 22 22 20.0622 22 16.6667V7.33333C22 3.92889 20.0711 2 16.6667 2Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.3205 12.7083H12.7495V15.257C12.7495 15.6673 12.4139 16 12 16C11.5861 16 11.2505 15.6673 11.2505 15.257V12.7083H8.67955C8.29342 12.6687 8 12.3461 8 11.9613C8 11.5765 8.29342 11.2539 8.67955 11.2143H11.2424V8.67365C11.2824 8.29088 11.6078 8 11.996 8C12.3842 8 12.7095 8.29088 12.7495 8.67365V11.2143H15.3205C15.7066 11.2539 16 11.5765 16 11.9613C16 12.3461 15.7066 12.6687 15.3205 12.7083Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-74"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-74">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-75"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-75">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.18824 3.74722C9.18824 3.33438 8.84724 3 8.42724 3H8.42624L6.79724 3.00098C4.60624 3.00294 2.82324 4.75331 2.82324 6.90279V8.76201C2.82324 9.17386 3.16424 9.50923 3.58424 9.50923C4.00424 9.50923 4.34624 9.17386 4.34624 8.76201V6.90279C4.34624 5.57604 5.44624 4.4964 6.79824 4.49444L8.42724 4.49345C8.84824 4.49345 9.18824 4.15907 9.18824 3.74722ZM17.1931 3.00029H15.6001C15.1801 3.00029 14.8391 3.33468 14.8391 3.74751C14.8391 4.15936 15.1801 4.49277 15.6001 4.49277H17.1931C18.5501 4.49277 19.6541 5.57535 19.6541 6.90603V8.7623C19.6541 9.17415 19.9951 9.50952 20.4151 9.50952C20.8361 9.50952 21.1761 9.17415 21.1761 8.7623V6.90603C21.1761 4.75165 19.3901 3.00029 17.1931 3.00029ZM9.23804 6.74266H14.762C15.367 6.74266 15.948 6.98094 16.371 7.40554C16.797 7.83407 17.033 8.40968 17.032 9.00883V10.2542C17.027 10.4003 16.908 10.5189 16.759 10.5229H7.23904C7.09104 10.518 6.97204 10.3993 6.96904 10.2542V9.00883C6.95804 7.76837 7.97404 6.75541 9.23804 6.74266Z"
                        fill="currentColor"
                      />
                      <path
                        d="M22.239 12.0413H1.762C1.342 12.0413 1 12.3756 1 12.7885C1 13.2003 1.342 13.5337 1.762 13.5337H2.823V17.0972C2.823 19.2467 4.607 20.9971 6.798 20.999L8.427 21C8.848 21 9.188 20.6656 9.189 20.2528C9.189 19.841 8.848 19.5066 8.428 19.5066L6.8 19.5056C5.447 19.5036 4.346 18.424 4.346 17.0972V13.5337H6.969V14.5251C6.959 15.7656 7.974 16.7795 9.238 16.7913H14.762C16.027 16.7795 17.042 15.7656 17.032 14.5251V13.5337H19.655V17.0933C19.655 18.425 18.551 19.5066 17.194 19.5066H15.601C15.18 19.5066 14.839 19.841 14.839 20.2528C14.839 20.6656 15.18 21 15.601 21H17.194C19.39 21 21.177 19.2487 21.177 17.0933V13.5337H22.239C22.659 13.5337 23 13.2003 23 12.7885C23 12.3756 22.659 12.0413 22.239 12.0413Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-76"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-76">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="10.5992"
                        cy="10.6532"
                        rx="8.59922"
                        ry="8.65324"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M20.6745 21.9553C20.3405 21.9445 20.0228 21.807 19.7853 21.5705L17.7488 19.1902C17.3122 18.7909 17.2765 18.1123 17.6688 17.6689C17.8524 17.4831 18.102 17.3787 18.3624 17.3787C18.6228 17.3787 18.8725 17.4831 19.0561 17.6689L21.6172 19.7181C21.9861 20.0957 22.0999 20.6563 21.9078 21.1492C21.7157 21.6422 21.2535 21.9754 20.7279 22L20.6745 21.9553Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-77"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-77">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079ZM6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003ZM7.02539 21.5683C7.17139 21.7153 7.36339 21.7883 7.55539 21.7883C7.74739 21.7883 7.93939 21.7153 8.08539 21.5683L9.45139 20.2033C9.74339 19.9103 9.74339 19.4353 9.45139 19.1423C9.15839 18.8503 8.68339 18.8503 8.39039 19.1423L7.02539 20.5083C6.73239 20.8013 6.73239 21.2753 7.02539 21.5683Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-78"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-78">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0122 14.8299C10.4077 14.8299 9.10986 13.5799 9.10986 12.0099C9.10986 10.4399 10.4077 9.17993 12.0122 9.17993C13.6167 9.17993 14.8839 10.4399 14.8839 12.0099C14.8839 13.5799 13.6167 14.8299 12.0122 14.8299Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M21.2301 14.37C21.036 14.07 20.76 13.77 20.4023 13.58C20.1162 13.44 19.9322 13.21 19.7687 12.94C19.2475 12.08 19.5541 10.95 20.4228 10.44C21.4447 9.87 21.7718 8.6 21.179 7.61L20.4943 6.43C19.9118 5.44 18.6344 5.09 17.6226 5.67C16.7233 6.15 15.5685 5.83 15.0473 4.98C14.8838 4.7 14.7918 4.4 14.8122 4.1C14.8429 3.71 14.7203 3.34 14.5363 3.04C14.1582 2.42 13.4735 2 12.7172 2H11.2763C10.5302 2.02 9.84553 2.42 9.4674 3.04C9.27323 3.34 9.16081 3.71 9.18125 4.1C9.20169 4.4 9.10972 4.7 8.9462 4.98C8.425 5.83 7.27019 6.15 6.38109 5.67C5.35913 5.09 4.09191 5.44 3.49917 6.43L2.81446 7.61C2.23194 8.6 2.55897 9.87 3.57071 10.44C4.43937 10.95 4.74596 12.08 4.23498 12.94C4.06125 13.21 3.87729 13.44 3.59115 13.58C3.24368 13.77 2.93709 14.07 2.77358 14.37C2.39546 14.99 2.4159 15.77 2.79402 16.42L3.49917 17.62C3.87729 18.26 4.58245 18.66 5.31825 18.66C5.66572 18.66 6.0745 18.56 6.40153 18.36C6.65702 18.19 6.96361 18.13 7.30085 18.13C8.31259 18.13 9.16081 18.96 9.18125 19.95C9.18125 21.1 10.1215 22 11.3069 22H12.6968C13.872 22 14.8122 21.1 14.8122 19.95C14.8429 18.96 15.6911 18.13 16.7029 18.13C17.0299 18.13 17.3365 18.19 17.6022 18.36C17.9292 18.56 18.3278 18.66 18.6855 18.66C19.411 18.66 20.1162 18.26 20.4943 17.62L21.2097 16.42C21.5776 15.75 21.6083 14.99 21.2301 14.37Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-79"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-79">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12.0865 22C11.9627 22 11.8388 21.9716 11.7271 21.9137L8.12599 20.0496C7.10415 19.5201 6.30481 18.9259 5.68063 18.2336C4.31449 16.7195 3.5544 14.776 3.54232 12.7599L3.50004 6.12426C3.495 5.35842 3.98931 4.67103 4.72826 4.41215L11.3405 2.10679C11.7331 1.96656 12.1711 1.9646 12.5707 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.779 16.6274 18.434 18.1581C17.8168 18.8602 17.0245 19.4632 16.0128 20.0025L12.4439 21.9088C12.3331 21.9686 12.2103 21.999 12.0865 22Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.3194 14.3209C11.1261 14.3219 10.9328 14.2523 10.7838 14.1091L8.86695 12.2656C8.57097 11.9793 8.56795 11.5145 8.86091 11.2262C9.15387 10.9369 9.63207 10.934 9.92906 11.2193L11.3083 12.5451L14.6758 9.22479C14.9698 8.93552 15.448 8.93258 15.744 9.21793C16.041 9.50426 16.044 9.97004 15.751 10.2574L11.8519 14.1022C11.7049 14.2474 11.5127 14.3199 11.3194 14.3209Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-80"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-80">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12.086 22C11.9622 22 11.8393 21.9716 11.7276 21.9137L8.12627 20.0496C7.10336 19.5201 6.30397 18.9259 5.68076 18.2336C4.31353 16.7195 3.55441 14.776 3.54132 12.7599L3.50004 6.12426C3.495 5.35842 3.98833 4.67103 4.72732 4.41215L11.34 2.10679C11.7336 1.96656 12.1716 1.9646 12.5703 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.7799 16.6274 18.4349 18.1581C17.8167 18.8602 17.0253 19.4632 16.0135 20.0025L12.4444 21.9088C12.3337 21.9686 12.2098 21.999 12.086 22Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.0679 11.7249L14.426 10.4021C14.721 10.1148 14.721 9.65001 14.426 9.3627C14.131 9.07539 13.6528 9.07539 13.3578 9.3627L11.9996 10.6845L10.6425 9.3627C10.3475 9.07539 9.86926 9.07539 9.57427 9.3627C9.27928 9.65001 9.27928 10.1148 9.57427 10.4021L10.9324 11.7249L9.57427 13.0478C9.27928 13.3351 9.27928 13.7999 9.57427 14.0872C9.72227 14.2313 9.91557 14.3029 10.1089 14.3029C10.3012 14.3029 10.4945 14.2313 10.6425 14.0872L11.9996 12.7653L13.3578 14.0872C13.5058 14.2313 13.6981 14.3029 13.8914 14.3029C14.0847 14.3029 14.278 14.2313 14.426 14.0872C14.721 13.7999 14.721 13.3351 14.426 13.0478L13.0679 11.7249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-81"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-81">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.7366 6.04606C19.4439 7.36388 20.8976 9.29455 21.9415 11.7091C22.0195 11.8924 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8924 2.05854 11.7091C4.14634 6.87903 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.4308 11.997C14.4308 13.3255 13.3381 14.4115 12.0015 14.4115C10.6552 14.4115 9.5625 13.3255 9.5625 11.997C9.5625 11.8321 9.58201 11.678 9.61128 11.5228H9.66006C10.743 11.5228 11.621 10.6695 11.6601 9.60184C11.7674 9.58342 11.8845 9.57275 12.0015 9.57275C13.3381 9.57275 14.4308 10.6588 14.4308 11.997Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-82"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-82">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12.9763 3.11361L15.2028 7.58789C15.3668 7.91205 15.6799 8.13717 16.041 8.18719L21.042 8.91556C21.3341 8.95658 21.5992 9.11066 21.7782 9.34578C21.9552 9.5779 22.0312 9.87205 21.9882 10.1612C21.9532 10.4013 21.8402 10.6234 21.6672 10.7935L18.0434 14.3063C17.7783 14.5514 17.6583 14.9146 17.7223 15.2698L18.6145 20.2083C18.7095 20.8046 18.3144 21.3669 17.7223 21.48C17.4783 21.519 17.2282 21.478 17.0082 21.3659L12.5472 19.0417C12.2161 18.8746 11.8251 18.8746 11.494 19.0417L7.03303 21.3659C6.48491 21.657 5.80576 21.4589 5.5007 20.9187C5.38767 20.7036 5.34766 20.4584 5.38467 20.2193L6.27686 15.2798C6.34088 14.9256 6.21985 14.5604 5.95579 14.3153L2.33202 10.8045C1.90092 10.3883 1.88792 9.70296 2.30301 9.27175C2.31201 9.26274 2.32201 9.25274 2.33202 9.24273C2.50405 9.06764 2.7301 8.95658 2.97415 8.92757L7.97523 8.1982C8.33531 8.14717 8.64837 7.92406 8.81341 7.59789L10.9599 3.11361C11.1509 2.72942 11.547 2.4903 11.9771 2.5003H12.1111C12.4842 2.54533 12.8093 2.77644 12.9763 3.11361Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.992 18.9171C11.7983 18.9231 11.6096 18.9752 11.4399 19.0682L7.00072 21.3871C6.45756 21.6464 5.80756 21.4452 5.50303 20.9258C5.39021 20.7136 5.34927 20.4704 5.38721 20.2322L6.27384 15.3032C6.33375 14.9449 6.21394 14.5806 5.95334 14.3284L2.32794 10.8185C1.8976 10.3971 1.88961 9.70556 2.31096 9.27421C2.31695 9.26821 2.32195 9.2632 2.32794 9.2582C2.49967 9.08806 2.72133 8.97597 2.95996 8.94094L7.96523 8.20433C8.32767 8.1583 8.64219 7.93211 8.80194 7.60384L10.9776 3.06312C11.1843 2.69682 11.5806 2.47864 12 2.50166C11.992 2.7989 11.992 18.715 11.992 18.9171Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-83"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-83">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M6.70555 12.8906C6.18944 12.8906 5.77163 13.3146 5.77163 13.8384L5.51416 18.4172C5.51416 19.0847 6.04783 19.6251 6.70555 19.6251C7.36328 19.6251 7.89577 19.0847 7.89577 18.4172L7.63947 13.8384C7.63947 13.3146 7.22167 12.8906 6.70555 12.8906Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.98037 3.67345C7.98037 3.67345 7.71236 3.39789 7.54618 3.27793C7.30509 3.09264 7.00783 3 6.71173 3C6.37936 3 6.07039 3.10452 5.81877 3.30169C5.77313 3.34801 5.57886 3.5226 5.41852 3.68532C4.41204 4.6367 2.76539 7.12026 2.26215 8.42083C2.18257 8.618 2.01053 9.11685 2 9.38409C2 9.63827 2.05618 9.88294 2.17087 10.1145C2.3312 10.4044 2.58282 10.6372 2.88009 10.7642C3.08606 10.8462 3.70282 10.9733 3.71453 10.9733C4.38981 11.1016 5.48757 11.1704 6.70003 11.1704C7.85514 11.1704 8.90727 11.1016 9.59308 10.997C9.60478 10.9852 10.3702 10.8581 10.6335 10.7179C11.1133 10.4626 11.4118 9.96371 11.4118 9.43041V9.38409C11.4001 9.03608 11.1016 8.30444 11.0911 8.30444C10.5879 7.07394 9.02079 4.64858 7.98037 3.67345Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M17.2949 11.1096C17.811 11.1096 18.2288 10.6856 18.2288 10.1618L18.4851 5.58296C18.4851 4.91543 17.9526 4.375 17.2949 4.375C16.6372 4.375 16.1035 4.91543 16.1035 5.58296L16.361 10.1618C16.361 10.6856 16.7788 11.1096 17.2949 11.1096Z"
                        fill="currentColor"
                      />
                      <path
                        d="M21.8293 13.8853C21.6689 13.5955 21.4173 13.3638 21.1201 13.2356C20.9141 13.1536 20.2961 13.0265 20.2856 13.0265C19.6103 12.8982 18.5126 12.8293 17.3001 12.8293C16.145 12.8293 15.0929 12.8982 14.4071 13.0028C14.3954 13.0146 13.63 13.1429 13.3666 13.2819C12.8856 13.5373 12.5884 14.0361 12.5884 14.5706V14.6169C12.6001 14.9649 12.8973 15.6954 12.909 15.6954C13.4123 16.9259 14.9782 19.3525 16.0198 20.3265C16.0198 20.3265 16.2878 20.6021 16.454 20.7208C16.6939 20.9073 16.9911 21 17.2896 21C17.6208 21 17.9286 20.8954 18.1814 20.6983C18.227 20.652 18.4213 20.4774 18.5816 20.3158C19.5869 19.3632 21.2347 16.8796 21.7368 15.5802C21.8176 15.383 21.9896 14.883 22.0001 14.6169C22.0001 14.3616 21.944 14.1169 21.8293 13.8853Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-84"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-84">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.3405 1.99976H7.67049C4.28049 1.99976 2.00049 4.37976 2.00049 7.91976V16.0898C2.00049 19.6198 4.28049 21.9998 7.67049 21.9998H16.3405C19.7305 21.9998 22.0005 19.6198 22.0005 16.0898V7.91976C22.0005 4.37976 19.7305 1.99976 16.3405 1.99976Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.8134 15.248C10.5894 15.248 10.3654 15.163 10.1944 14.992L7.82144 12.619C7.47944 12.277 7.47944 11.723 7.82144 11.382C8.16344 11.04 8.71644 11.039 9.05844 11.381L10.8134 13.136L14.9414 9.00796C15.2834 8.66596 15.8364 8.66596 16.1784 9.00796C16.5204 9.34996 16.5204 9.90396 16.1784 10.246L11.4324 14.992C11.2614 15.163 11.0374 15.248 10.8134 15.248Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-85"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-85">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M21.25 13.4764C20.429 13.4764 19.761 12.8145 19.761 12.001C19.761 11.1865 20.429 10.5246 21.25 10.5246C21.449 10.5246 21.64 10.4463 21.78 10.3076C21.921 10.1679 22 9.97864 22 9.78146L21.999 7.10415C21.999 4.84102 20.14 3 17.856 3H6.144C3.86 3 2.001 4.84102 2.001 7.10415L2 9.86766C2 10.0648 2.079 10.2541 2.22 10.3938C2.36 10.5325 2.551 10.6108 2.75 10.6108C3.599 10.6108 4.239 11.2083 4.239 12.001C4.239 12.8145 3.571 13.4764 2.75 13.4764C2.336 13.4764 2 13.8093 2 14.2195V16.8949C2 19.158 3.858 21 6.143 21H17.857C20.142 21 22 19.158 22 16.8949V14.2195C22 13.8093 21.664 13.4764 21.25 13.4764Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.4303 11.5887L14.2513 12.7367L14.5303 14.3597C14.5783 14.6407 14.4653 14.9177 14.2343 15.0837C14.0053 15.2517 13.7063 15.2727 13.4543 15.1387L11.9993 14.3737L10.5413 15.1397C10.4333 15.1967 10.3153 15.2267 10.1983 15.2267C10.0453 15.2267 9.89434 15.1787 9.76434 15.0847C9.53434 14.9177 9.42134 14.6407 9.46934 14.3597L9.74734 12.7367L8.56834 11.5887C8.36434 11.3907 8.29334 11.0997 8.38134 10.8287C8.47034 10.5587 8.70034 10.3667 8.98134 10.3267L10.6073 10.0897L11.3363 8.61268C11.4633 8.35868 11.7173 8.20068 11.9993 8.20068H12.0013C12.2843 8.20168 12.5383 8.35968 12.6633 8.61368L13.3923 10.0897L15.0213 10.3277C15.2993 10.3667 15.5293 10.5587 15.6173 10.8287C15.7063 11.0997 15.6353 11.3907 15.4303 11.5887Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-86"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-86">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M13.7505 9.70303V7.68318C13.354 7.68318 13.0251 7.36377 13.0251 6.97859V4.57356C13.0251 4.2532 12.764 4.00049 12.4352 4.00049H5.7911C3.70213 4.00049 2 5.653 2 7.68318V10.1155C2 10.3043 2.07737 10.4828 2.21277 10.6143C2.34816 10.7449 2.53191 10.8201 2.72534 10.8201C3.46035 10.8201 4.02128 11.3274 4.02128 11.9944C4.02128 12.6905 3.45068 13.2448 2.73501 13.2533C2.33849 13.2533 2 13.5257 2 13.9203V16.3262C2 18.3555 3.70213 19.9995 5.78143 19.9995H12.4352C12.764 19.9995 13.0251 19.745 13.0251 19.4265V17.3963C13.0251 17.0027 13.354 16.6917 13.7505 16.6917V14.8701C13.354 14.8701 13.0251 14.5497 13.0251 14.1655V10.4076C13.0251 10.0224 13.354 9.70303 13.7505 9.70303Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.9787 11.9948C19.9787 12.69 20.559 13.2443 21.265 13.2537C21.6615 13.2537 22 13.5262 22 13.9113V16.3258C22 18.3559 20.3075 20 18.2186 20H15.0658C14.7466 20 14.4758 19.7454 14.4758 19.426V17.3967C14.4758 17.0022 14.1567 16.6921 13.7505 16.6921V14.8705C14.1567 14.8705 14.4758 14.5502 14.4758 14.1659V10.4081C14.4758 10.022 14.1567 9.70348 13.7505 9.70348V7.6827C14.1567 7.6827 14.4758 7.36328 14.4758 6.9781V4.57401C14.4758 4.25366 14.7466 4 15.0658 4H18.2186C20.3075 4 22 5.64406 22 7.6733V10.0407C22 10.2286 21.9226 10.4081 21.7872 10.5387C21.6518 10.6702 21.4681 10.7453 21.2747 10.7453C20.559 10.7453 19.9787 11.31 19.9787 11.9948Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-87"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-87">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22 12C22 17.524 17.523 22 12 22C6.477 22 2 17.524 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.5739 15.8145C15.4429 15.8145 15.3109 15.7805 15.1899 15.7095L11.2639 13.3675C11.0379 13.2315 10.8989 12.9865 10.8989 12.7225V7.67554C10.8989 7.26154 11.2349 6.92554 11.6489 6.92554C12.0629 6.92554 12.3989 7.26154 12.3989 7.67554V12.2965L15.9589 14.4195C16.3139 14.6325 16.4309 15.0925 16.2189 15.4485C16.0779 15.6835 15.8289 15.8145 15.5739 15.8145Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-88"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-88">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.34 1.99976H7.67C4.28 1.99976 2 4.37976 2 7.91976V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.91976C22 4.37976 19.73 1.99976 16.34 1.99976Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.5734 15.8143C15.4424 15.8143 15.3104 15.7803 15.1894 15.7093L11.2634 13.3673C11.0374 13.2313 10.8984 12.9863 10.8984 12.7223V7.67529C10.8984 7.26129 11.2344 6.92529 11.6484 6.92529C12.0624 6.92529 12.3984 7.26129 12.3984 7.67529V12.2963L15.9584 14.4193C16.3134 14.6323 16.4304 15.0923 16.2184 15.4483C16.0774 15.6833 15.8284 15.8143 15.5734 15.8143Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-89"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-89">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M8.23918 8.70907V7.36726C8.24934 5.37044 9.92597 3.73939 11.9989 3.73939C13.5841 3.73939 15.0067 4.72339 15.5249 6.19541C15.6976 6.65262 16.2057 6.89017 16.663 6.73213C16.8865 6.66156 17.0694 6.50253 17.171 6.29381C17.2727 6.08508 17.293 5.84654 17.2117 5.62787C16.4394 3.46208 14.3462 2 11.9786 2C8.95048 2 6.48126 4.41626 6.46094 7.38714V8.91084L8.23918 8.70907Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.7688 8.71118H16.2312C18.5886 8.71118 20.5 10.5808 20.5 12.8867V17.8246C20.5 20.1305 18.5886 22.0001 16.2312 22.0001H7.7688C5.41136 22.0001 3.5 20.1305 3.5 17.8246V12.8867C3.5 10.5808 5.41136 8.71118 7.7688 8.71118ZM11.9949 17.3286C12.4928 17.3286 12.8891 16.941 12.8891 16.454V14.2474C12.8891 13.7703 12.4928 13.3827 11.9949 13.3827C11.5072 13.3827 11.1109 13.7703 11.1109 14.2474V16.454C11.1109 16.941 11.5072 17.3286 11.9949 17.3286Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-90"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-90">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M6.447 22C3.996 22 2 19.9698 2 17.4755V12.5144C2 10.0252 3.99 8 6.437 8L17.553 8C20.005 8 22 10.0302 22 12.5256V17.4846C22 19.9748 20.01 22 17.563 22H16.623H6.447Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.455 2.22103L8.54604 5.06682C8.24604 5.36094 8.24604 5.83427 8.54804 6.12742C8.85004 6.41959 9.33704 6.41862 9.63704 6.12547L11.23 4.56623V6.06119V14.4515C11.23 14.8654 11.575 15.2014 12 15.2014C12.426 15.2014 12.77 14.8654 12.77 14.4515V4.56623L14.363 6.12547C14.663 6.41862 15.15 6.41959 15.452 6.12742C15.603 5.98036 15.679 5.78849 15.679 5.59566C15.679 5.40477 15.603 5.21291 15.454 5.06682L12.546 2.22103C12.401 2.07981 12.205 1.99995 12 1.99995C11.796 1.99995 11.6 2.07981 11.455 2.22103Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-91"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-91">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M21.3309 7.44251C20.9119 7.17855 20.3969 7.1552 19.9579 7.37855L18.4759 8.12677C17.9279 8.40291 17.5879 8.96129 17.5879 9.58261V15.4161C17.5879 16.0374 17.9279 16.5948 18.4759 16.873L19.9569 17.6202C20.1579 17.7237 20.3729 17.7735 20.5879 17.7735C20.8459 17.7735 21.1019 17.7004 21.3309 17.5572C21.7499 17.2943 21.9999 16.8384 21.9999 16.339V8.66179C21.9999 8.1623 21.7499 7.70646 21.3309 7.44251Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.9051 20H6.11304C3.69102 20 2 18.3299 2 15.9391V9.06091C2 6.66904 3.69102 5 6.11304 5H11.9051C14.3271 5 16.0181 6.66904 16.0181 9.06091V15.9391C16.0181 18.3299 14.3271 20 11.9051 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-92"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-92">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8251 15.2171H12.1748C14.0987 15.2171 15.731 13.985 16.3054 12.2764C16.3887 12.0276 16.1979 11.7713 15.9334 11.7713H14.8562C14.5133 11.7713 14.2362 11.4977 14.2362 11.16C14.2362 10.8213 14.5133 10.5467 14.8562 10.5467H15.9005C16.2463 10.5467 16.5263 10.2703 16.5263 9.92875C16.5263 9.58722 16.2463 9.31075 15.9005 9.31075H14.8562C14.5133 9.31075 14.2362 9.03619 14.2362 8.69849C14.2362 8.35984 14.5133 8.08528 14.8562 8.08528H15.9005C16.2463 8.08528 16.5263 7.8088 16.5263 7.46728C16.5263 7.12575 16.2463 6.84928 15.9005 6.84928H14.8562C14.5133 6.84928 14.2362 6.57472 14.2362 6.23606C14.2362 5.89837 14.5133 5.62381 14.8562 5.62381H15.9886C16.2483 5.62381 16.4343 5.3789 16.3645 5.13113C15.8501 3.32401 14.1694 2 12.1748 2H11.8251C9.42172 2 7.47363 3.92287 7.47363 6.29729V10.9198C7.47363 13.2933 9.42172 15.2171 11.8251 15.2171Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M19.5313 9.82568C18.9966 9.82568 18.5626 10.2533 18.5626 10.7823C18.5626 14.3554 15.6186 17.2627 12.0005 17.2627C8.38136 17.2627 5.43743 14.3554 5.43743 10.7823C5.43743 10.2533 5.00345 9.82568 4.46872 9.82568C3.93398 9.82568 3.5 10.2533 3.5 10.7823C3.5 15.0873 6.79945 18.6413 11.0318 19.1186V21.0434C11.0318 21.5715 11.4648 22.0001 12.0005 22.0001C12.5352 22.0001 12.9692 21.5715 12.9692 21.0434V19.1186C17.2006 18.6413 20.5 15.0873 20.5 10.7823C20.5 10.2533 20.066 9.82568 19.5313 9.82568Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-93"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-93">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M19.5313 9.82568C18.9966 9.82568 18.5626 10.2533 18.5626 10.7823C18.5626 14.3554 15.6186 17.2627 12.0005 17.2627C8.38136 17.2627 5.43743 14.3554 5.43743 10.7823C5.43743 10.2533 5.00345 9.82568 4.46872 9.82568C3.93398 9.82568 3.5 10.2533 3.5 10.7823C3.5 15.0873 6.79945 18.6412 11.0318 19.1186V21.0434C11.0318 21.5714 11.4648 22 12.0005 22C12.5352 22 12.9692 21.5714 12.9692 21.0434V19.1186C17.2006 18.6412 20.5 15.0873 20.5 10.7823C20.5 10.2533 20.066 9.82568 19.5313 9.82568Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.8241 15.2171H12.1748C14.5772 15.2171 16.5263 13.2932 16.5263 10.9208V6.29727C16.5263 3.92287 14.5772 2 12.1748 2H11.8241C9.42171 2 7.47266 3.92287 7.47266 6.29727V10.9208C7.47266 13.2932 9.42171 15.2171 11.8241 15.2171Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-94"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-94">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3716 6.45056C15.3212 5.96422 15.2687 5.45963 15.1396 4.95611C14.7879 3.75153 13.8136 3.00001 12.7691 3.00001C12.1864 2.99786 11.4494 3.35644 11.0316 3.71932L7.56822 6.61697H5.75517C4.42084 6.61697 3.34792 7.6444 3.1453 9.12705C2.97313 10.5506 2.93114 13.2379 3.1453 14.8042C3.33112 16.3706 4.35575 17.383 5.75517 17.383H7.56822L11.0988 20.3236C11.461 20.6382 12.1003 20.9989 12.6882 20.9989C12.726 21 12.7596 21 12.7932 21C13.8577 21 14.7952 20.2206 15.1469 19.0192C15.2802 18.5082 15.3264 18.0293 15.3716 17.5666L15.4188 17.1082C15.5994 15.6213 15.5994 8.36908 15.4188 6.89288L15.3716 6.45056Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M19.4263 6.49467C19.1397 6.0706 18.5665 5.96538 18.1476 6.25848C17.7319 6.55479 17.629 7.14097 17.9177 7.56612C18.7208 8.74923 19.1628 10.3231 19.1628 12.0001C19.1628 13.676 18.7208 15.251 17.9177 16.4341C17.629 16.8592 17.7319 17.4454 18.1476 17.7417C18.302 17.8512 18.4836 17.9092 18.6715 17.9092C18.9728 17.9092 19.2542 17.7578 19.4263 17.5055C20.4405 16.0121 21 14.0571 21 12.0001C21 9.94307 20.4405 7.98805 19.4263 6.49467Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-96"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-96">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8582 7.55636C15.8764 7.68967 15.8935 7.81524 15.9027 7.98142L6.29038 17.5926H6.06807C4.66009 17.5926 3.63322 16.5976 3.44267 15.0522C3.23094 13.5068 3.27329 10.8605 3.44267 9.45274C3.64381 7.992 4.72361 6.98643 6.06807 6.98643H7.8995L11.393 4.12741C11.8164 3.76858 12.568 3.42986 13.1503 3.41821C14.2089 3.41821 15.1829 4.16022 15.5322 5.34575C15.6698 5.84219 15.7228 6.34074 15.7651 6.81601L15.8498 7.49451C15.8526 7.51542 15.8554 7.53598 15.8582 7.55636ZM14.881 13.7315C15.025 13.5907 15.3437 13.4912 15.4876 13.5272C15.8772 13.6267 15.9524 14.1846 15.9471 14.6228C15.9291 15.8951 15.8857 16.78 15.8179 17.3273L15.7703 17.7782L15.7695 17.7866C15.7242 18.2402 15.6774 18.7096 15.5437 19.2103C15.1902 20.3937 14.2448 21.1622 13.1714 21.1622C13.1354 21.1622 13.1004 21.1622 13.0644 21.1612C12.4716 21.1612 11.8269 20.8055 11.4617 20.4954L10.1606 19.4887C9.6673 19.1214 9.81233 18.534 10.0897 18.1942C10.2967 17.9413 12.7846 15.6581 14.0924 14.4578C14.5365 14.0502 14.8445 13.7675 14.881 13.7315Z"
                        fill="currentColor"
                      />
                      <path
                        d="M21.7275 3.26979C21.3538 2.90884 20.7801 2.91095 20.4201 3.27085L3.27035 20.4186C2.90936 20.7795 2.90936 21.3543 3.27352 21.7322C3.45984 21.9047 3.69062 22 3.92458 22C4.16383 22 4.40943 21.8994 4.57987 21.729L21.7286 4.58127C22.0906 4.21926 22.0906 3.63285 21.7275 3.26979Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-97"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-97">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3571 6.45056C13.3068 5.96422 13.2543 5.45963 13.1254 4.95611C12.7741 3.75153 11.801 3.00001 10.7576 3.00001C10.1757 2.99786 9.43954 3.35644 9.0222 3.71932L5.56287 6.61697H3.75194C2.41918 6.61697 1.34751 7.6444 1.14513 9.12705C0.973161 10.5506 0.931217 13.2379 1.14513 14.8042C1.33073 16.3706 2.35416 17.383 3.75194 17.383H5.56287L9.08931 20.3236C9.45107 20.6382 10.0897 20.9989 10.6769 20.9989C10.7146 21 10.7482 21 10.7817 21C11.845 21 12.7814 20.2206 13.1327 19.0192C13.2659 18.5082 13.312 18.0293 13.3571 17.5666L13.4043 17.1082C13.5846 15.6213 13.5846 8.36908 13.4043 6.89288L13.3571 6.45056Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M17.4064 6.49468C17.118 6.06953 16.5465 5.96325 16.1281 6.25849C15.7139 6.55587 15.6112 7.14206 15.8995 7.56613C16.7017 8.74816 17.1432 10.3221 17.1432 12.0001C17.1432 13.6771 16.7017 15.252 15.8995 16.4341C15.6112 16.8581 15.7139 17.4443 16.1292 17.7417C16.2844 17.8512 16.4658 17.9092 16.6524 17.9092C16.9534 17.9092 17.2344 17.7578 17.4064 17.5055C18.4193 16.0132 18.9782 14.0582 18.9782 12.0001C18.9782 9.94201 18.4193 7.98698 17.4064 6.49468Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M20.5672 3.45726C20.2809 3.03319 19.7073 2.92475 19.29 3.22107C18.8758 3.51845 18.773 4.10464 19.0603 4.52871C20.4172 6.52776 21.1649 9.18169 21.1649 11.9999C21.1649 14.8192 20.4172 17.4731 19.0603 19.4722C18.773 19.8973 18.8758 20.4824 19.291 20.7798C19.4462 20.8893 19.6266 20.9473 19.8132 20.9473C20.1142 20.9473 20.3963 20.7959 20.5672 20.5436C22.1359 18.2343 22.9999 15.2003 22.9999 11.9999C22.9999 8.80164 22.1359 5.76657 20.5672 3.45726Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-98"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-98">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.4"
                        d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z"
                        fill="currentColor"
                      />
                      <circle cx="18" cy="11.8999" r="1" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-99"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-99">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M2 11.0786C2.05 13.4166 2.19 17.4156 2.21 17.8566C2.281 18.7996 2.642 19.7526 3.204 20.4246C3.986 21.3676 4.949 21.7886 6.292 21.7886C8.148 21.7986 10.194 21.7986 12.181 21.7986C14.176 21.7986 16.112 21.7986 17.747 21.7886C19.071 21.7886 20.064 21.3566 20.836 20.4246C21.398 19.7526 21.759 18.7896 21.81 17.8566C21.83 17.4856 21.93 13.1446 21.99 11.0786H2Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.2451 15.3843V16.6783C11.2451 17.0923 11.5811 17.4283 11.9951 17.4283C12.4091 17.4283 12.7451 17.0923 12.7451 16.6783V15.3843C12.7451 14.9703 12.4091 14.6343 11.9951 14.6343C11.5811 14.6343 11.2451 14.9703 11.2451 15.3843Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.211 14.5565C10.111 14.9195 9.762 15.1515 9.384 15.1015C6.833 14.7455 4.395 13.8405 2.337 12.4815C2.126 12.3435 2 12.1075 2 11.8555V8.38949C2 6.28949 3.712 4.58149 5.817 4.58149H7.784C7.972 3.12949 9.202 2.00049 10.704 2.00049H13.286C14.787 2.00049 16.018 3.12949 16.206 4.58149H18.183C20.282 4.58149 21.99 6.28949 21.99 8.38949V11.8555C21.99 12.1075 21.863 12.3425 21.654 12.4815C19.592 13.8465 17.144 14.7555 14.576 15.1105C14.541 15.1155 14.507 15.1175 14.473 15.1175C14.134 15.1175 13.831 14.8885 13.746 14.5525C13.544 13.7565 12.821 13.1995 11.99 13.1995C11.148 13.1995 10.433 13.7445 10.211 14.5565ZM13.286 3.50049H10.704C10.031 3.50049 9.469 3.96049 9.301 4.58149H14.688C14.52 3.96049 13.958 3.50049 13.286 3.50049Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-100"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="7.5"
                        fill="currentColor"
                        fillOpacity="0.4"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-101"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-101">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Ellipse 158"
                        d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z"
                        fill="#130F26"
                        fillOpacity="0.4"
                        stroke="#130F26"
                      />
                      <circle
                        id="Ellipse 159"
                        cx="12"
                        cy="12"
                        r="5"
                        stroke="#130F26"
                      />
                      <circle
                        id="Ellipse 160"
                        cx="12"
                        cy="12"
                        r="3"
                        fill="#130F26"
                      />
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="9"
                        y="9"
                        width="6"
                        height="6"
                      >
                        <circle
                          id="Ellipse 163"
                          cx="12"
                          cy="12"
                          r="3"
                          fill="#130F26"
                        />
                      </mask>
                      <circle
                        id="Ellipse 161"
                        opacity="0.53"
                        cx="13.5"
                        cy="10.5"
                        r="1.5"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="overlay">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Button
                        variant="btn btn-sm btn-soft-primary"
                        data-toggle="copy"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-copy-target="#dual-svg-container-102"
                        title="Copy"
                      >
                        Copy
                      </Button>
                    </OverlayTrigger>
                  </div>
                  <div id="dual-svg-container-102">
                    <svg
                      width="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="path-1-outside-1"
                        maskUnits="userSpaceOnUse"
                        x="3"
                        y="0"
                        width="18"
                        height="24"
                        fill="black"
                      >
                        <rect fill="white" x="3" width="18" height="24" />
                        <path d="M4 3.00004C4 1.89547 4.89543 1.00004 6 1.00004H13.0801C13.664 1.00004 14.2187 1.25517 14.5986 1.69845L19.5185 7.43826C19.8292 7.80075 20 8.26243 20 8.73985V21C20 22.1046 19.1046 23 18 23H6C4.89543 23 4 22.1046 4 21V3.00004Z" />
                      </mask>
                      <path
                        d="M4 3.00004C4 1.89547 4.89543 1.00004 6 1.00004H13.0801C13.664 1.00004 14.2187 1.25517 14.5986 1.69845L19.5185 7.43826C19.8292 7.80075 20 8.26243 20 8.73985V21C20 22.1046 19.1046 23 18 23H6C4.89543 23 4 22.1046 4 21V3.00004Z"
                        fill="#130F26"
                        fillOpacity="0.4"
                      />
                      <path
                        d="M4 3.00004C4 1.89547 4.89543 1.00004 6 1.00004H13.0801C13.664 1.00004 14.2187 1.25517 14.5986 1.69845L19.5185 7.43826C19.8292 7.80075 20 8.26243 20 8.73985V21C20 22.1046 19.1046 23 18 23H6C4.89543 23 4 22.1046 4 21V3.00004Z"
                        stroke="#130F26"
                        strokeWidth="2"
                        mask="url(#path-1-outside-1)"
                      />
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="3"
                        y="0"
                        width="18"
                        height="24"
                      >
                        <mask
                          id="path-2-outside-2"
                          mask-type="luminance"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="0"
                          width="18"
                          height="24"
                          fill="black"
                        >
                          <rect fill="white" x="3" width="18" height="24" />
                          <path d="M4 3.00004C4 1.89547 4.89543 1.00004 6 1.00004H13.0801C13.664 1.00004 14.2187 1.25517 14.5986 1.69845L19.5185 7.43826C19.8292 7.80075 20 8.26243 20 8.73985V21C20 22.1046 19.1046 23 18 23H6C4.89543 23 4 22.1046 4 21V3.00004Z" />
                        </mask>
                        <path
                          d="M4 3.00004C4 1.89547 4.89543 1.00004 6 1.00004H13.0801C13.664 1.00004 14.2187 1.25517 14.5986 1.69845L19.5185 7.43826C19.8292 7.80075 20 8.26243 20 8.73985V21C20 22.1046 19.1046 23 18 23H6C4.89543 23 4 22.1046 4 21V3.00004Z"
                          fill="#130F26"
                        />
                        <path
                          d="M4 3.00004C4 1.89547 4.89543 1.00004 6 1.00004H13.0801C13.664 1.00004 14.2187 1.25517 14.5986 1.69845L19.5185 7.43826C19.8292 7.80075 20 8.26243 20 8.73985V21C20 22.1046 19.1046 23 18 23H6C4.89543 23 4 22.1046 4 21V3.00004Z"
                          stroke="#130F26"
                          strokeWidth="2"
                          mask="url(#path-2-outside-2)"
                        />
                      </mask>
                      <path
                        id="Rectangle 21"
                        d="M14 6V0L21 8H16C14.8954 8 14 7.10457 14 6Z"
                        stroke="#130F26"
                      />
                      <mask id="path-4-inside-3" fill="white">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                        />
                      </mask>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                        stroke="#130F26"
                        strokeWidth="2"
                        strokeLinecap="round"
                        mask="url(#path-4-inside-3)"
                      />
                      <path
                        id="Line 71 (Stroke)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z"
                        fill="#130F26"
                      />
                      <mask id="path-6-inside-4" fill="white">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.1031C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                        />
                      </mask>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.1031C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                        stroke="#130F26"
                        strokeWidth="2"
                        strokeLinecap="round"
                        mask="url(#path-6-inside-4)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DualTone;
