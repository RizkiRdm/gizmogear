import Link from "next/link";
import React from "react";

interface labelBtn {
  label: string;
  url: string;
}

const Label: React.FC<labelBtn> = ({ label, url }) => {
  return (
    <Link href={url}>
      <span className="text-white font-semibold text-sm">{label}</span>
    </Link>
  );
};

export default Label;
