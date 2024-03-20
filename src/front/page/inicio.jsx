import Layout from "../layout.jsx";
import CardPropiedad from "../component/content/cards/CardPropiedad.jsx";
import Navbar from "../component/header/Navbar.jsx";
import NavFooter from "../component/footer/NavFooter.jsx";
import Banner from "../component/content/banner/Banner.jsx";
import { useProperty } from "../../back/context/PropertyContext.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";
//import CardBuscador from "../component/content/cards/CardBuscador.jsx";

const Inicio = () => {
  const { getLastFourP, lastFourP } = useProperty();

  useEffect(() => {
    getLastFourP();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="h-full mt-20">
        <Banner />
      </section>
      <Layout>
        <main className="grid gap-4">
          <section className="grid">
            <h1 className="text-center font-bold text-xl md:text-3xl text-gray-800 px-10">
              Encuentra casas y departamentos en arriendo o venta
            </h1>
            <div className="w-full grid justify-around gap-6">
              <h1 className="font-normal px-10 md:px-10 text-xl mt-14">
                Novedades{" "}
                <span className="pl-4 text-[14px]">
                  <Link className=" text-blue-600" to="/propiedades">
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
      <NavFooter />
    </>
  );
};

export default Inicio;
