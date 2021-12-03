function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4  gap-y-10 px-32 py-14 text-gray-600 bg-gray-100">
    
      <div className="space-y-5 text-xs text-gray-800 " >
        <h5 className="font-bold" >ABOUT</h5>
        <p className="cursor-pointer hover:underline ">How Airbnb Works</p>
        <p className="cursor-pointer hover:underline ">Newsroom</p>
        <p className="cursor-pointer hover:underline ">Investors</p>
        <p className="cursor-pointer hover:underline ">Airbnb Plus</p>
        <p className="cursor-pointer hover:underline ">Airbnb Luxe</p>
      </div>
      <div className="space-y-5 text-xs text-gray-800 " >
        <h5 className="font-bold" >COMMUNITY</h5>
        <p className="cursor-pointer hover:underline">Accesibility</p>
        <p className="cursor-pointer hover:underline">This is not a real site</p>
        <p className="cursor-pointer hover:underline">It is pretty awesome clone</p>
        <p className="cursor-pointer hover:underline">Referrals Accepted</p>
        <p className="cursor-pointer hover:underline">PapaFam</p>
      </div>
      <div className="space-y-5 text-xs text-gray-800 " >
        <h5 className="font-bold" >HOST</h5>
        <p className="cursor-pointer hover:underline">Cengover</p>
        <p className="cursor-pointer hover:underline">Presents</p>
        <p className="cursor-pointer hover:underline">Frontend Dev</p>
        <p className="cursor-pointer hover:underline">Students</p>
        <p className="cursor-pointer hover:underline">Join me</p>
      </div>
      <div className="space-y-5 text-xs text-gray-800 " >
        <h5 className="font-bold" >SUPPORT</h5>
        <p className="cursor-pointer hover: underline" >Help Center</p>
        <p className="cursor-pointer hover: underline" >Trust & Safety</p>
        <p className="cursor-pointer hover: underline" >Say Hi To Comminutiy</p>
        <p className="cursor-pointer hover: underline" >Easter Eggs</p>
        <p className="cursor-pointer hover: underline" >For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
