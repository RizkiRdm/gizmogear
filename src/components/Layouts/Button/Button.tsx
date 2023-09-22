import React from "react";
import Label from "@/components/Elements/Button/Label";
import ButtonAnimation from "@/components/Fragments/Button/ButtonAnimation";

interface BtnProps {
  label: string;
  url: string;
  onClick: () => void;
}

const Button: React.FC<BtnProps> = ({ label, onClick, url }) => {
  return (
    <ButtonAnimation onClick={onClick}>
      <Label label={label} url={url} />
    </ButtonAnimation>
  );
};

export default Button;
