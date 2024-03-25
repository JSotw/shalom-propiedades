import { Link } from "react-router-dom";
import Navbar from "../component/header/Navbar";
import Layout from "../layout";
import { useEffect } from "react";
import { useProperty } from "../../back/context/PropertyContext";
import CardPropiedad from "../component/content/cards/CardPropiedad";
import CardCatalogo from "../component/content/cards/CardCatalogo";
import NavFooter from "../component/footer/NavFooter";
import Footer from "../component/footer/Footer";

const Propiedades = () => {
  const { getPropertiesF, propertiesF } = useProperty();

  useEffect(() => {
    getPropertiesF();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const lastProperties = propertiesF.sort(
    (a, b) => new Date(a.updatedAt).getTime() < new Date(b.updatedAt).getTime()
  );
  // console.log(propertiesF);
  // console.log(lastProperties);

  return (
    <>
      <Navbar />
      <nav
        className=" bg-purple-900 relative z-10 animate-flip-down justify-between items-center 
            flex h-10 mt-[70px] rounded-bl-xl rounded-br-xl w-full"
      >
        <div className="inline-flex text-sm">
          <Link to="/" className="p-2 text-white font-semibold">
            Volver
          </Link>
          <span className="bg-white opacity-70 w-[1.5px] rounded-lg my-2"></span>
          <p className="p-2 text-gray-400 font-medium">Propiedades</p>
        </div>
        <div className="inline-flex text-sm">
          {/* <Link to="/propiedades" className="p-2 text-blue-500">
                  Ver más
                </Link> */}
          <span className="bg-gray-400 opacity-70 w-[0.5px] my-2"></span>
          <Link to="/contacto" className="p-2 text-white font-semibold"></Link>
        </div>
      </nav>
      <Layout>
        <section className="flex justify-center">
          {/* <aside className="w-[40vw] px-5">
           <CardCatalogo />
          </aside> */}
          <div className="grid gap-8 justify-around">
            <div className="flex flex-wrap gap-10 justify-center">
              {lastProperties?.map((p, index) => (
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
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default Propiedades;
