import Layout from "../layout.jsx";
import CardPropiedad from "../component/content/cards/CardPropiedad.jsx";
import Navbar from "../component/header/Navbar.jsx";
import NavFooter from "../component/footer/NavFooter.jsx";
import Banner from "../component/content/banner/Banner.jsx";
import { useProperty } from "../../back/context/PropertyContext.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/footer/Footer.jsx";
//import CardBuscador from "../component/content/cards/CardBuscador.jsx";

const Inicio = () => {
  const { getLastFourP, lastFourP } = useProperty();
  const imagesUrls = [];

  useEffect(() => {
    getLastFourP();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  for (let i = 0; i < lastFourP.length; i++) {
    //console.log(imagesF[i]);
    imagesUrls.push({ url: lastFourP[i].images[0] });
  }

  return (
    <>
      <Navbar />
      <section className="h-full relative">
        {lastFourP.length > 0 ? <Banner imagesUrl={imagesUrls} /> : ""}
      </section>
      <Layout>
        <main className="grid">
          <section className="grid">
            <div className="w-full grid justify-around gap-6">
              <h1 className="text-left font-bold text-xl md:text-3xl text-gray-800 px-4">
                Propiedades disponibles
              </h1>
              <h1 className="text-left -mt-4 font-light text-sm px-5 flex flex-col sm:block">
                Propiedades agregadas recientemente
                <span className="text-[12px]">
                  <Link className="sm:pl-4 text-end text-blue-600" to="/propiedades">
                    Ver más...
                  </Link>
                </span>
              </h1>
              <div className="bg-gray-300 h-[1px] rounded-md -mt-4"></div>
              <section className="flex flex-wrap gap-10 justify-center">
                {lastFourP?.map((p, index) => (
                  <article key={index}>
                    <Link to={`/propiedades/propiedad/${p.id}`}>
                      <CardPropiedad
                        img={p.images[1]}
                        price={`${Intl.NumberFormat().format(p.price)} ${
                          p.price_type
                        }`}
                        size={`${p.size} ${p.size_type}`}
                        type={p.type}
                        category={p.category}
                        location_region={p.location_region}
                        cant_bathroom={p.cant_bathroom}
                        cant_bedroom={p.cant_bedroom}
                      />
                    </Link>
                  </article>
                ))}
              </section>
            </div>
          </section>
        </main>
      </Layout>
      <Footer />
    </>
  );
};

export default Inicio;
