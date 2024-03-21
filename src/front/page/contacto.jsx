import Layout from "../layout.jsx";
import CardContacto from "../component/content/cards/CardContacto.jsx";
import FormContacto from "../component/content/FormContacto.jsx";
import NavFooter from "../component/footer/NavFooter.jsx";
import Navbar from "../component/header/Navbar.jsx";
import { useEffect } from "react";
import Footer from "../component/footer/Footer.jsx";

const cardContacto = [
  {
    title: "Teléfono",
    description: "+56 9 79954080",
  },
  {
    title: "Correo",
    description: "shalom_propiedades@gmail.cl",
  },
  {
    title: "Ubicación",
    description: "Viña del Mar, Chile",
  },
  {
    title: "Lun a Vier",
    description: "8:00-18:00",
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
          <section className="flex w-auto flex-wrap justify-around gap-5 sm:gap-10">
            {cardContacto.map((contactType, index) => (
              <div key={index}>
                <CardContacto
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53534.983648497655!2d-71.57145502611152!3d-33.005450152907876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de84ead41255%3A0x8e5fde76df3d413f!2zVmnDsWEgZGVsIE1hciwgVmFscGFyYcOtc28!5e0!3m2!1ses!2scl!4v1708209307795!5m2!1ses!2scl"
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
