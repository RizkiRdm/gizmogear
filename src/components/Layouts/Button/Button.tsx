import React from "react";
import Label from "@/components/Elements/Button/Label";
import ButtonAnimation from "@/components/Fragments/Button/ButtonAnimation";

interface BtnProps {
  label: string;
  url: string;
}

const Button: React.FC<BtnProps> = ({ label, url }) => {
  return (
    <ButtonAnimation >
      <Label label={label} url={url} />
    </ButtonAnimation>
  );
};

export default Button;
