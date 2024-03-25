import Layout from "../layout.jsx";
import CardContacto from "../component/content/cards/CardContacto.jsx";
import FormContacto from "../component/content/FormContacto.jsx";
import NavFooter from "../component/footer/NavFooter.jsx";
import Navbar from "../component/header/Navbar.jsx";
import { useEffect } from "react";
import Footer from "../component/footer/Footer.jsx";
import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const cardContacto = [
  {
    icon: <FaPhone size={20} />,
    title: "Teléfono",
    description: "+56 9 7995 4080",
  },
  {
    icon: <FaEnvelope size={20} />,
    title: "Correo",
    description: "shalom_propiedades@gmail.cl",
  },
  {
    icon: <FaLocationDot size={20} />,
    title: "Ubicación",
    description: "Alessandri 215, Villa Alemana, Valparaíso, Chile",
  },
  {
    icon: <FaClock size={20} />,
    title: "Lun a Dom",
    description: "10:00-17:00",
  },
];

const Contacto = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }),[];
  return (
    <>
      <Navbar />
      <Layout>
        <section className="grid justify-center gap-10">
          <h1 className="text-center font-bold text-xl md:text-3xl text-gray-800">
            
          </h1>
          <section className="grid sm:flex w-auto sm:flex-wrap justify-center gap-5 sm:gap-10">
            {cardContacto.map((contactType, index) => (
              <div key={index}>
                <CardContacto
                  icon={contactType.icon}
                  title={contactType.title}
                  description={contactType.description}
                />
              </div>
            ))}
          </section>
          <section className="bg-transparent flex justify-around flex-wrap p-5 rounded">
            <div className="">
              <FormContacto />
            </div>
            <div>
              <iframe
                className="rounded-xl bg-white shadow-md w-auto h-full sm:w-full sm:h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.401125850283!2d-71.3579727246202!3d-33.04590487355239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689d7a302910125%3A0xa9a8a3d8e1bc1e13!2sAlessandri%20215%2C%20Villa%20Alemana%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1711077105550!5m2!1ses-419!2scl"
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </section>
      </Layout>
      <Footer/>
    </>
  );
};

export default Contacto;
