import Banner from "@/components/home/Banner";
import BannerPort from "@/components/home/BannerPort";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="homepage">
      <Navbar/>
      <Banner/>
      <BannerPort/>
      <Footer/>
    </div>
  );
}
