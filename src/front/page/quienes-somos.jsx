import Layout from "../layout.jsx";
import {
  CardSomos,
  CardSomosUsuario,
} from "../component/content/cards/CardSomos.jsx";
import Navbar from "../component/header/Navbar.jsx";
import infoSomos from "../info/infoSomos.json";
import infoProfile from "../info/infoProfile.json";
import { useEffect } from "react";
import Footer from "../component/footer/Footer.jsx";

const QuienesSomos = () => {
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
        <h1 className="text-center font-bold text-xl md:text-3xl text-gray-800">Sobre nosotros</h1>

        <section className="grid px-5 justify-center">
          <div className="flex gap-6 md:gap-20 justify-center mt-10 flex-wrap">
            {infoSomos.map((info, index) => {
              return (
                <CardSomos key={index} title={info.title} text={info.text} />
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            {infoProfile.map((iP) => {
              return (
                <CardSomosUsuario
                  key={iP.title}
                  title={iP.title}
                  text={iP.text}
                  profileImg={iP.profileImg}
                  profileName={iP.profileName}
                  profileDescription={iP.profileDescription}
                  profileEmail={iP.profileEmail}
                />
              );
            })}
          </div>
        </section>
      </Layout>
      <Footer/>
    </>
  );
};

export default QuienesSomos;
