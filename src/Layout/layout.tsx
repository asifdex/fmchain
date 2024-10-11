import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Header from "@/components/Header/header";
import Footer from "@/components/footer/Footer";

const Layout = (props: any) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-sine",
      // delay: 100,
    });
  }, []);

  return (
    <div className="w-full h-full bg-white text-black">
      <div className="px-5 xl:px-0 r">
        <Header />
      </div>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
