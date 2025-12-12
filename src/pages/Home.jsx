import { Link } from "react-router-dom";
import Logo from "../assets/logo-caffe.png";
import Bg from "../assets/bg-image.jpeg";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <img src={Logo} className="w-full max-w-md mb-10 drop-shadow-2xl" />

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link
          to="/drink"
          className="py-4 text-center text-xl font-bold rounded-xl"
          style={{ backgroundColor: "#A27B5C", color: "#322119" }}
        >
          DRINK MENU
        </Link>

        <Link
          to="/food"
          className="py-4 text-center text-xl font-bold rounded-xl"
          style={{ backgroundColor: "#A27B5C", color: "#322119" }}
        >
          FOOD MENU
        </Link>
      </div>
    </div>
  );
}
