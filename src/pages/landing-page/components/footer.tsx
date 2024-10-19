import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Logo } from "../../../component/atoms";

export default function Footer () {
  return(
    <footer className="w-full  m-h-[40vh] flex flex-col md:flex-row  justify-between items-center gap-10 p-6">
      <Logo className="hidden md:flex"/>
      <div className="flex gap-10 justify-between items-center text-2xl  text-primary">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
      <h4>Implemented By Wah Vanessa</h4>
    </footer>
  )
}