import Image from "next/dist/client/image"
function MediumCard({img,title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-in" >
            <div className="relative rounded-lg  w-60  h-60">
                    <Image className="rounded-lg" src={img} layout="fill"/>
            </div>
            <p className="mt-2 text-2xl" >{title}</p>
        </div>
    )
}

export default MediumCard
