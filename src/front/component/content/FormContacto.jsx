
function FormContacto() {
  return (
    <div className="flex items-center justify-center  text-[14px] h-full ">
      <div className="mx-auto w-full p-2">
        <form action="" method="" className="">
          <p className="md:text-xl font-bold text-center pb-10" >Envíanos tu mensaje</p>
          <div className="-mx-3 flex flex-wrap justify-center">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="mb-3 block  font-normal text-[#07074D]"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 
                    px-6 font-light text-[#6B7280] outline-none text-[12px] 
                     focus:border-purple-400 focus:shadow-sm focus:shadow-purple-100"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2 ">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block  font-normal text-[#07074D]"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border text-[12px] border-[#e0e0e0] bg-white py-3 px-6 
                    text-[#6B7280] outline-none focus:border-purple-400 
                    focus:shadow-sm focus:shadow-purple-100"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="guest"
              className="mb-3 block  font-normal text-[#07074D]"
            >
              Correo
            </label>
            <input
            type="email"
              className="w-full appearance-none rounded-md border border-[#e0e0e0]
                bg-white py-3 px-6  font-light text-[#6B7280] outline-none text-[12px] 
                focus:border-purple-400 focus:shadow-sm focus:shadow-purple-100"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="guest"
              className="mb-3 block  font-normal text-[#07074D]"
            >
              Mensaje
            </label>
            <textarea
              className="w-full h-[100px] appearance-none rounded-md border border-[#e0e0e0]
                bg-white py-3 px-6  font-light text-[#6B7280] outline-none text-[12px] 
                focus:border-purple-400 focus:shadow-sm focus:shadow-purple-100"
            />
          </div>


          <div>
            <button className="hover:before:bg-red-border-red-500 relative h-10 w-full overflow-hidden 
            border border-purple-600 bg-white px-3 text-purple-600 shadow-lg shadow-purple-200 
            transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full 
            before:w-0 before:bg-purple-600 before:transition-all before:duration-500 hover:text-white 
            hover:shadow-purple-200 hover:before:left-0 hover:before:w-full rounded text-[14px] font-semibold">
              <span className="relative z-10">Enviar</span>
            </button>
          </div>
        </form>
      </div>
    </div>


  )
}

export default FormContacto