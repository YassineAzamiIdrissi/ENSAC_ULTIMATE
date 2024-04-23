import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import { Select, SelectItem } from "@nextui-org/react";

import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

import { Link } from "react-router-dom";
import LearningPic from "../image/learningSignup.jpg";
import LearningPic2 from "../image/learning2.avif";

import googleIcon from "../image/googleIcon.png";
import { cycle } from "../data";
import SignIn from "./SignIn";

export default function SignUp(props) {
  const { openButtonClassname, openModal } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  //EMAIL VALIDATION
  const [value, setValue] = React.useState("");

  const validateEmail = (value) =>
    //value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);
  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  //PASSWORD visibility

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // GESTION DES SELECT
  const [selected, setSelected] = React.useState(new Set([]));

  if (openModal) {
    {
      isOpen = true;
    }
  }

  return (
    <div className="z-50">
      <h1    className={"bg-red-400"}>
        S'inscire
      </h1>
      <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className=" p-0 z-20">
          {(onClose) => (
            <>
              <ModalBody className="flex p-0 w-full  flex-row gap-0 relative -z-10  ">
                {" "}
                {/*h-[600px]*/}
                <div className="hidden md:flex flex-1  h-[600px]">
                  <img
                    src={LearningPic}
                    alt=""
                    className=" object-cover w-full h-full "
                  />
                </div>
                <div className="flex-1 flex flex-col items-center h-[600px]  bg-[#f9f8f9] pt-4 ">
                  <div className="p-0 ml-8 mr-8 mt-2 flex items-center flex-col ">
                    <div className="mt-1">
                      <h1 className="font-bold text-xl text-center p-3">
                        Inscrivez-vous sur ENSAC
                      </h1>
                      <p className="text-[14px]">
                        Vous avez un compte ?
                        <Link
                          to={"/mantor"}
                          className="text-blue-500 font-bold "
                        >
                          {" "}
                          Se connecter {">"}
                        </Link>
                      </p>
                    </div>
                    {/* LES INPUTS */}
                    <div className=" flex flex-col items-center w-full h-full  space-y-3 mt-3">
                      <Input
                        type="text"
                        variant="bordered"
                        label="Nom et prenom"
                      />

                      <Input
                        value={value}
                        type="email"
                        label="Email"
                        variant="bordered"
                        radius="sm"
                        isInvalid={isInvalid}
                        color={isInvalid ? "danger" : "success"}
                        errorMessage={isInvalid && "Please enter a valid email"}
                        onValueChange={setValue}
                        className="max-w-xs "
                      />

                      <Input
                        label="Mot de passe"
                        variant="bordered"
                        radius="sm"
                        endContent={
                          <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                          >
                            {isVisible ? (
                              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                          </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="max-w-xs "
                      />
                      {/*<div className="w-full">
                        <Select
                          label="Choisissez votre domaine d'étude"
                          variant="bordered"
                          selectedKeys={selected}
                          onSelectionChange={setSelected}
                        >
                          {cycle.map((cycle) => (
                            <SelectItem key={cycle.value} value={cycle.value}>
                              {cycle.label}
                            </SelectItem>
                          ))}
                        </Select>
                        <p className="text-small text-default-500">
                          Selected: {selected}
                        </p>
                      </div>*/}

                      <Button
                        radius="sm"
                        className="text-white w-80 bg-black text-medium"
                      >
                        S'inscrire
                      </Button>

                      {/* SOCIA MEDIA */}
                      <span className="border-b-1 border-gray-300 w-full" />
                      <Button
                        radius="sm"
                        isIconOnly
                        aria-label="Like"
                        className="w-80 bg-white text-medium"
                      >
                        <img
                          src={googleIcon}
                          alt=""
                          className="object-cover w-5 h-5 mr-5"
                        />
                        S'inscrire avec Google
                      </Button>
                    </div>

                    <p className="font-light text-[14px] text-gray-500 w-80 mt-9 mb-10 ">
                      En continuant, vous acceptez les{" "}
                      <span className="text-blue-600 cursor-pointer">
                        conditions dutilisations
                      </span>{" "}
                      de ENSAC et{" "}
                      <span className="text-blue-600 cursor-pointer">
                        Politique de confiidentialité
                      </span>
                    </p>
                  </div>
                </div>
              </ModalBody>
              {/*<ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={{ onclose: true }}
                >
                  Close
                </Button>
                <Button color="primary" onPress={{ onclose: true }}>
                  Action
                </Button>
              </ModalFooter>*/}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
