import { Link } from "react-router-dom";
import Navbar from "../component/header/Navbar";
import Layout from "../layout";
import { useEffect } from "react";
import { useProperty } from "../../back/context/PropertyContext";
import CardPropiedad from "../component/content/cards/CardPropiedad";
import CardCatalogo from "../component/content/cards/CardCatalogo";
import NavFooter from "../component/footer/NavFooter";

const Propiedades = () => {
  const { getPropertiesF, propertiesF } = useProperty();

  useEffect(() => {
    getPropertiesF();
  }, []);


  const lastProperties = propertiesF.sort((a, b) => new Date(a.updatedAt).getTime() < new Date(b.updatedAt).getTime());
  console.log(propertiesF);
  console.log(lastProperties);


  return (
    <>
      <Navbar />
      <Layout>
        <section className="flex justify-center">
          {/* <aside className="w-[40vw] px-5">
           <CardCatalogo />
          </aside> */}
          <div className="grid gap-8 justify-around">
            <nav className=" bg-gray-200 shadow rounded-md justify-between items-center flex w-full h-10">
              <div className="inline-flex text-sm">
                <Link to="/" className="p-2 text-blue-500">
                  Volver
                </Link>
                <span className="bg-gray-400 opacity-70 w-[0.5px] my-2"></span>
                <p className="p-2 text-gray-500">Propiedades</p>
              </div>
              <div className="inline-flex text-sm">
                <span className="bg-gray-400 opacity-70 w-[0.5px] my-2"></span>
                <Link to="/contacto" className="p-2 text-blue-500 hover:">
                  Contactar
                </Link>
              </div>
            </nav>

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
      <NavFooter />
    </>
  );
};

export default Propiedades;
