import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

import Image from "next/image";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b 
    hover:shadow-lg hover:opacity-80 transition duration-200 ease-in">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          objectFit="cover"
          layout="fill"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow  pl-5">
        
        <div className="flex justify-between items-center " >
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-lg font-semibold" >{title}</h4>
        <div className=" border-b w-10 pt-2" />

        <p className="text-xs  text-gray-400 flex-grow  py-4" >{description}</p>
      
        <div className="flex justify-between items-end pt-5">
            <div className="flex items-center" >
                <StarIcon className="h-4 text-red-400 " />
                <p>{star}</p>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold text-xl" >{price}</p>
                <p className="self-end text-xs text-gray-500 " >{total}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
