import TopMenuItem from "./TopMenuItem";
import Image from "next/image";

export default function TopMenu() {
  return (
    <div className="bg-white h-[60px] inset-x-0 top-0 z-30 flex flex-row justify-end fixed 
        px-8 py-2 font-mono bg-red-400">
      {/* Menu Items dffdm*/}
      
        <TopMenuItem label="Booking" href="/booking" />
      {/* Logo */}
      
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      

      
    </div>
  );
}