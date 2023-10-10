import ButtonBuy from "@/components/Layouts/ButtonBuyProduct/ButtonBuyproduct";
import Image from "next/image";
import React from "react";

interface bannerProps {
  _id: number
  title: string
  description: string
  imageUrl: string
}

const BannerInfo: React.FC<bannerProps> = ({ _id, title, description, imageUrl }) => {
  return (
    <div className="relative">
      <Image src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
        {/* title & description product carousel */}
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>

        {/* Link Buy Product */}
        <ButtonBuy url={`/products/${_id}`} />
      </div>
    </div>
  );
};

export default BannerInfo;
