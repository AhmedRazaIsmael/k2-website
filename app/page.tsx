import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrowseByType from "@/components/BrowseByType";
import PromoSection from "@/components/PromoSection";
import AvailableStocks from "@/components/AvailableStocks";
import { mockBrands, mockCountries } from "@/data/mockData";
import Footer from "@/components/Footer";

const mockCars = [
  {
    id: 1,
    title: "TOYOTA ALPHARD Royal Lounge 2017",
    image: "/car1.png",
    location: "Japan",
    cc: "3500",
    km: "86000",
    stock: "002545",
    drive: "RHD",
    reserved: false,
  },
  {
    id: 2,
    title: "NISSAN NV350 2017",
    image: "/car2.png",
    location: "Japan",
    cc: "2500",
    km: "72000",
    stock: "002542",
    drive: "RHD",
    reserved: true,
  },
  {
    id: 3,
    title: "TOYOTA LAND CRUISER 2015",
    image: "/car1.png",
    location: "Japan",
    cc: "4000",
    km: "66000",
    stock: "002543",
    drive: "RHD",
    reserved: false,
  },
   {
    id: 4,
    title: "TOYOTA LAND CRUISER 2024",
    image: "/car2.png",
    location: "Japan",
    cc: "4000",
    km: "66000",
    stock: "002543",
    drive: "RHD",
    reserved: false,
  },
   {
    id: 5,
    title: "TOYOTA LAND CRUISER 2024",
    image: "/car2.png",
    location: "Japan",
    cc: "4000",
    km: "66000",
    stock: "002543",
    drive: "RHD",
    reserved: false,
  },
  {
    id: 6,
    title: "TOYOTA ALPHARD Royal Lounge 2017",
    image: "/car1.png",
    location: "Japan",
    cc: "3500",
    km: "86000",
    stock: "002545",
    drive: "RHD",
    reserved: false,
  },
  {
    id: 7,
    title: "NISSAN NV350 2017",
    image: "/car2.png",
    location: "Japan",
    cc: "2500",
    km: "72000",
    stock: "002542",
    drive: "RHD",
    reserved: true,
  },
  {
    id: 8,
    title: "TOYOTA LAND CRUISER 2015",
    image: "/car1.png",
    location: "Japan",
    cc: "4000",
    km: "66000",
    stock: "002543",
    drive: "RHD",
    reserved: false,
  },
  //  {
  //   id: 9,
  //   title: "TOYOTA LAND CRUISER 2024",
  //   image: "/car2.png",
  //   location: "Japan",
  //   cc: "4000",
  //   km: "66000",
  //   stock: "002543",
  //   drive: "RHD",
  //   reserved: true,
  // },
  //  {
  //   id: 10,
  //   title: "TOYOTA LAND CRUISER 2024",
  //   image: "/car2.png",
  //   location: "Japan",
  //   cc: "4000",
  //   km: "66000",
  //   stock: "002543",
  //   drive: "RHD",
  //   reserved: false,
  // },
];

export default function HomePage() {
  return (
    <div className="relative">

      {/* Header overlay */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>
      {/* Hero (background) */}
      <Hero />

      <BrowseByType />

      <PromoSection />
      <AvailableStocks cars={mockCars} brands={mockBrands}
      countries={mockCountries}/>

      <Footer />

      

    </div>
  );
}