import LandingPage from "./Components/landingpage";
import DaftarPlaces from "./Components/daftarPlaces";
import Image from "next/image";



export default function Home() {



  return (
   <div>
    <div className="relative">
    
      <LandingPage />
      <DaftarPlaces />
    </div>
   </div>
  );
}
