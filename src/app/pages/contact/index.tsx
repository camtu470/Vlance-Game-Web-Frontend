
import NameArea from "../../../components/layout/name";
import { IoSettings } from "react-icons/io5";
import {
  FaFacebookF,
  FaInfoCircle,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      <NameArea title="CONTACT" />

      {/* Contact info + form */}
      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-10 p-6 md:p-10">
        {/* Contact info */}
        <div className="w-full md:w-7/12 flex flex-col gap-4">
          <p className="font-extrabold font-sans text-3xl md:text-4xl uppercase">
            CONTACT US
          </p>
          <p className="text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit esse ducimus praesentium tempora, facere labore
            commodi quo totam beatae earum illum eius perspiciatis eaque, hic
            aliquid perferendis velit dolore explicabo?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <p className="font-bold text-lg">Call Us</p>
              <p>+971 333 222 557</p>
            </div>
            <div>
              <p className="font-bold text-lg">Visit Us</p>
              <p>New Central Park W7 Street, New York</p>
            </div>
            <div>
              <p className="font-bold text-lg">Email</p>
              <p>info@exemple.com</p>
            </div>
            <div>
              <p className="font-bold text-lg">Chat to us</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, iusto.
              </p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="w-full md:w-5/12 border rounded-xl p-6 bg-white text-black">
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full md:w-1/2 p-2 bg-[#eeefee] rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="Email*"
                className="w-full md:w-1/2 p-2 bg-[#eeefee] rounded-md outline-none"
              />
            </div>
            <textarea
              placeholder="Enter your message.."
              className="w-full p-2 bg-[#eeefee] rounded-md h-32 outline-none"
            ></textarea>
            <button className="w-full md:w-10/12 mx-auto border p-4 rounded-full bg-[#3b5a46] text-white font-bold hover:bg-[#1f5833] transition-all">
              Submit now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-10 mt-4">
        <div className="w-full md:w-5/12 bg-white text-center text-[#1c242f] rounded-2xl flex flex-col justify-center items-center gap-4 p-6 md:p-10">
          <p className="text-2xl md:text-4xl font-extrabold">
            Lorem ipsum dolor
          </p>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            dolorem aut, ipsum doloribus quibusdam dolor consequatur numquam
            saepe pariatur obcaecati?
          </p>
          <button className="p-3 md:p-4 mt-2 bg-[#1c242f] text-white font-bold w-8/12 md:w-7/12 mx-auto rounded-full">
            JOIN NOW
          </button>
        </div>

        <div className="w-full md:w-7/12 bg-white rounded-2xl text-[#1c242f] flex flex-col gap-4 p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-full md:w-7/12 flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <IoSettings className="text-3xl md:text-4xl" />
                <p className="text-2xl md:text-3xl font-bold">Calmerry</p>
              </div>
              <p className="text-sm md:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                voluptas.
              </p>
            </div>
            <div className="w-full md:w-4/12 flex gap-6 md:gap-2 justify-between">
              <div className="flex flex-col font-medium">
                <p>Lorem </p>
                <p> ipsum </p>
                <p>Lorem </p>
              </div>
              <div className="flex flex-col font-medium">
                <p>Lorem </p>
                <p> ipsum </p>
                <p> ipsum </p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 text-2xl mt-2 justify-center md:justify-start">
            <a href="#" className="hover:text-[#45f882] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#45f882] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#45f882] transition-colors">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#45f882] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#45f882] transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-[#45f882] transition-colors">
              <FaTiktok />
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <FaInfoCircle className="text-[80px] md:text-[130px]" />
            <p className="text-sm md:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
              quibusdam voluptatem veritatis, minus iure, illo minima, culpa
              iusto sit doloremque nihil inventore nostrum quam?
            </p>
          </div>
        </div>
      </div>

      {/* Maps */}
      <div className="w-full h-[300px] md:h-[500px] my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.873159704192!2d-73.9741878233782!3d40.76435627138617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fbd63d2a27%3A0x77f9f3a7e7a8d3e4!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1693155178936!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
