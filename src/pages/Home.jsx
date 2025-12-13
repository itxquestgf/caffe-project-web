import { Link } from "react-router-dom";
import Logo from "../assets/logo-caffe.png";
import Bg from "../assets/bg-image.jpeg";

export default function Home() {
  return (
    <div
      className="relative min-h-[100svh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${Bg})`,
        fontFamily: "Recoleta Alt, serif",
      }}
    >
      {/* Overlay supaya tidak pecah & lebih fokus */}
      <div className="absolute inset-0 bg-[#322119]/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 w-full">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="w-full max-w-md mb-12 drop-shadow-2xl"
        />

        {/* Buttons */}
        <div className="flex flex-col gap-5 w-full max-w-xs">
          <Link
            to="/drink"
            className="py-4 text-center text-xl font-bold rounded-xl shadow-lg transition active:scale-95"
            style={{ backgroundColor: "#A27B5C", color: "#322119" }}
          >
            DRINK MENU
          </Link>

          <Link
            to="/food"
            className="py-4 text-center text-xl font-bold rounded-xl shadow-lg transition active:scale-95"
            style={{ backgroundColor: "#A27B5C", color: "#322119" }}
          >
            FOOD MENU
          </Link>
        </div>
      </div>
    </div>
  );
}
