import Image from "next/dist/client/image";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-1/3   left-12 ">
        <h3 className="text-4xl mb-3 w-64 font-bold" >{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 rounded-lg mt-5 px-4 py-2 hover:scale-105 transform transition duration-300 " >{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
