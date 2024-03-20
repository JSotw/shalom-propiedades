import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Venta",
  },
  {
    id: 4,
    name: "Arriendo",
  },
];

const types = [
  {
    id: "1",
    name: "Departamento",
  },
  {
    id: "12",
    name: "Casa",
  },
  {
    id: "124",
    name: "Terreno",
  },
];

const CardBuscador = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [serviceSelected, setServiceSelected] = useState("");
  const [typeSelected, setTypeSelected] = useState("");
  const [typeId, setTypeId] = useState("");
  const [serviceId, setServiceId] = useState("");

  return (
    <div>
      <form className="max-w-4xl w-auto p-4 sm:p-8 flex  justify-center bg-white shadow-sm rounded">
        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <div>
            <div
              onClick={() => setServiceOpen(!serviceOpen)}
              className="p-2 w-full sm:w-36 px-5 h-[54px] gap-2 cursor-pointer flex items-center justify-between  
            rounded border hover:bg-purple-400 text-[12px] hover:text-white transition-all hover:border-purple-400"
            >
              {serviceSelected ? serviceSelected : "Todo"}
              <TiArrowSortedDown className={`${serviceOpen && "rotate-180"}`} />
            </div>
            <div className="relative">
              <input type="hidden" value={serviceId ? serviceId : ""} />
              <ul
                className={`bg-white absolute z-10 border-x border-b rounded-b transition-all w-full ${
                  serviceOpen ? "block" : "hidden"
                }`}
              >
                {services.map((service, index) => (
                  <li
                    id={service.name}
                    key={index}
                    className="p-3 hover:bg-purple-400 transition-all duration-250 
                  cursor-pointer hover:text-white hover:rounded-b-[3px] px-5 text-[12px] 
                  hover:border-violet-300"
                    onClick={() => {
                      if (
                        service?.name.toLowerCase() !==
                        serviceSelected.toLowerCase()
                      ) {
                        setServiceSelected(service?.name);
                        setServiceId(service?.id);
                        setServiceOpen(!serviceOpen);
                      }
                    }}
                  >
                    {service?.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div
              onClick={() => setTypeOpen(!typeOpen)}
              className="p-2 w-full sm:w-36 px-5 h-[54px] gap-2 cursor-pointer flex items-center justify-between 
              rounded border hover:bg-purple-400 text-[12px] hover:text-white transition-all hover:border-purple-400"
            >
              {typeSelected ? typeSelected : "Todo"}
              <TiArrowSortedDown className={`${typeOpen && "rotate-180"}`} />
            </div>
            <div className="relative">
              <input type="hidden" value={typeId ? typeId : ""} />

              <ul
                className={`bg-white absolute border-x border-b rounded-b transition-all w-full ${
                  typeOpen ? "block" : "hidden"
                }`}
              >
                {types.map((type, index) => (
                  <li
                    id={type.name}
                    key={index}
                    className="p-3 hover:bg-purple-400 transition-all duration-250 
                  cursor-pointer hover:text-white hover:rounded-b-[3px] px-5 text-[12px] 
                  hover:border-violet-300"
                    onClick={() => {
                      if (
                        type?.name.toLowerCase() !== typeSelected.toLowerCase()
                      ) {
                        setTypeSelected(type?.name);
                        setTypeId(type?.id);
                        setTypeOpen(!typeOpen);
                      }
                    }}
                  >
                    {type?.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="inline-flex rounded-[5px]">
            <input
              type="text"
              placeholder="Buscar propiedad..."
              className="p-4 h-[54px] rounded-l text-[12px] border focus:outline-none focus:border-violet-300 focus:border"
            />
            <button
              className="p-4 h-[54px] flex items-center border-r border-t border-b rounded-r justify-center transition-all
                hover:bg-violet-300 hover:text-white hover:border-violet-300"
              type="submit"
            >
              <IoSearch />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardBuscador;
