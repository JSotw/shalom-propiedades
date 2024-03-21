import Navbar from "../component/header/Navbar";
import { useProperty } from "../../back/context/PropertyContext";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GaleriaPropiedad from "../component/content/GaleriaPropiedad";
import NavFooter from "../component/footer/NavFooter";
import {
  FaCaretRight,
  FaWhatsapp,
} from "react-icons/fa";
import Layout from "../layout";
import { format } from "date-fns";
import "../../App.css";
import CardInfoPropiedad from "../component/content/cards/CardInfoPropiedad";
import {
  CardSkeletonInfo,
  CardSkeletonImage,
  CardSkeletonDescription,
} from "../component/content/cards/CardSkeletonInfo";
import Footer from "../component/footer/Footer";

const Propiedad = () => {
  const { getPropertyF, getImagesF, imagesF } = useProperty();
  const params = useParams();
  const [propertyF, setPropertyF] = useState([]);
  const imagesUrls = [];
  const [loading, setLoading] = useState(true);

  async function loadProperty() {
    if (params.id) {
      const res = await getPropertyF(params.id);
      setPropertyF(res);
    }
  }

  async function loadImages() {
    const urlsImg = await getImagesF(params.id);
    //console.log(urlsImg);
  }

  for (let i = 0; i < imagesF.length; i++) {
    //console.log(imagesF[i]);
    imagesUrls.push({ url: imagesF[i] });
  }
  //console.log(imagesUrls);

  //console.log(formattedDate);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const timer = setTimeout(() => {
      loadProperty();
      loadImages();
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  //console.log(imagesUrls)
  const title = propertyF.title;

  const formattedPrice = Intl.NumberFormat().format(propertyF.price);
  const price = `${formattedPrice} ${propertyF.price_type}`;

  const size = `${propertyF.size} ${propertyF.size_type}`;
  const cant_bathroom = propertyF.cant_bathroom;
  const cant_bedroom = propertyF.cant_bedroom;

  const location_street = propertyF.location_street;
  const location_city = propertyF.location_city;
  const location_region = propertyF.location_region;
  const location = `${
    location_street ? `Calle ${location_street},` : ""
  } ${location_city}, ${location_region}`;

  //const date = propertyF["updatedAt"];
  //let dateF = date;
  //console.log(dateF);

  return (
    <>
      <Navbar />
      <Layout>
        <section className="flex justify-center ">
          <div className="rounded-xl max-w-[1400px] w-[1400px] justify-center grid">
            <nav className=" bg-purple-900 relative z-10 animate-flip-down justify-between items-center 
            flex h-10 -mt-6 md:-mt-3 rounded-bl-xl rounded-br-xl w-full">
              <div className="inline-flex text-sm">
                <Link to="/propiedades" className="p-2 text-white font-semibold">
                  Volver
                </Link>
                <span className="bg-white opacity-70 w-[1.5px] rounded-lg my-2"></span>
                {propertyF != undefined && loading === false ? (
                  <span className="inline-flex">
                    <p className="p-2 text-gray-400 font-medium">{propertyF.type}</p>
                    <p className="p-2 text-gray-400 font-medium"> {">"} </p>
                    <p className="p-2 text-gray-400 font-medium">{propertyF.category}</p>
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="inline-flex text-sm">
                {/* <Link to="/propiedades" className="p-2 text-blue-500">
                  Ver más
                </Link> */}
                <span className="bg-gray-400 opacity-70 w-[0.5px] my-2"></span>
                <Link to="/contacto" className="p-2 text-white font-semibold">
                  
                </Link>
              </div>
            </nav>
            <div
              className="grid lg:flex flex-wrap w-auto justify-center lg:justify-center p-3 
              gap-4 md:p-3 rounded-xl "
            >
              <div className="lg:w-[50vw] bg-white w-auto rounded-xl shadow-lg">
                {imagesUrls.length > 0 && loading === false ? (
                  <GaleriaPropiedad imagesUrl={imagesUrls} isProperty={true} />
                ) : (
                  <CardSkeletonImage />
                )}
              </div>
              <div className="rounded-xl text-left flex flex-col gap-3">
                {loading === false && propertyF.price != undefined ? (
                  <CardInfoPropiedad
                    title={title}
                    price={price}
                    size={size}
                    cant_bathroom={cant_bathroom}
                    cant_bedroom={cant_bedroom}
                  />
                ) : (
                  <CardSkeletonInfo />
                )}
                <div className="flex flex-col p-5 justify-around rounded-xl shadow-lg bg-white h-44 lg:h-full">
                  <Link
                    className="p-2 text-white font-semibold hover:scale-105 transition-all duration-300
                  text-center rounded-xl w-full bg-purple-600"
                  >
                    Cotiza aquí
                  </Link>
                  <div className="text-sm font-light flex flex-col gap-2 pt-4 flex-wrap text-center">
                    O por mensaje directo
                    <span className="flex items-center font-normal justify-center gap-4">
                      +56 9 7995 4080
                      <a
                        className="text-white hover:scale-105 inline-flex transition-all duration-300"
                        href="https://wa.me/56979954080"
                        target="_blank"
                      >
                        <div className="flex bg-[#25D366] rounded-md p-1 pl-2 shadow-lg justify-center items-center">
                          <FaWhatsapp className="w-5 h-5 " />
                          <FaCaretRight className="w-5 h-5" />
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid w-auto xl:w-full 2xl:px-28">
                {propertyF.description != undefined && loading === false ? (
                  <div className="rounded-xl p-6 shadow-lg bg-white">
                    <h3 className="text-xl font-bold">Descripción</h3>
                    <p className="text-sm py-3">{propertyF.description}</p>
                    <hr />
                    <p className="text-sm pt-3 font-bold">{`${location}`}</p>
                  </div>
                ) : (
                  <CardSkeletonDescription />
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Footer/>
    </>
  );
};

export default Propiedad;
