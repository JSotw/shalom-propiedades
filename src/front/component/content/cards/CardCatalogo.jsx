const CardCatalogo = () => {
  return (
    <div className="h-full w-full p-2 px-20 flex flex-col gap-3 rounded-xl">
      <h3 className="font-bold text-lg">Catálogo</h3>
      <div className="">
        <h5 className="font-semibold py-2">Ubicación</h5>
        <p
          className="text-sm cursor-pointer 
          hover:decoration-violet-700 transition-all duration-300"
        >
          Valparaiso
        </p>
        <p
          className="text-sm cursor-pointer 
          hover:decoration-violet-700 transition-all duration-300"
        >
          Bio Bio
        </p>
      </div>
    </div>
  );
};

export default CardCatalogo;
