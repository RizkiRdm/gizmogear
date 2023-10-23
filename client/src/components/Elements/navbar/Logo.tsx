import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return <div className="text-2xl font-bold uppercase">
    <Link href={'/'}>
      GizmoGear.
    </Link>
  </div>;
};

export default Logo;
