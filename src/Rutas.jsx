import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./back/context/AuthContext.jsx";
import { PropertyProvider } from "./back/context/PropertyContext.jsx";

/* Front Pages */
import Inicio from "./front/page/inicio.jsx";
import Contacto from "./front/page/contacto.jsx";
import QuienesSomos from "./front/page/quienes-somos.jsx";
import Error404 from "./front/page/error404.jsx";
import Servicios from "./front/page/servicios.jsx";
import Propiedad from "./front/page/propiedad.jsx";
import Propiedades from "./front/page/propiedades.jsx";

/* Back Pages */
import RutaProtegida from "./back/page/RutaProtegida.jsx";
// import Dashboard from "./back/page/Dashboard.jsx";
import Login from "./back/page/Login.jsx";
import ListaPropiedades from "./back/page/propiedades/ListaPropiedades.jsx";
import AgregarPropiedad from "./back/page/propiedades/AgregarPropiedad.jsx";

const Rutas = () => {
  return (
    <AuthProvider>
      <PropertyProvider>
        <BrowserRouter>
          <Routes>
            {/* Rutas front */}
            <Route path="/" element={<Inicio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/somos" element={<QuienesSomos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/propiedades" element={<Propiedades />} />
            <Route path="/propiedades/propiedad/:id" element={<Propiedad />} />
            <Route path="*" element={<Error404 />} />

            {/* Rutas back */}

            <Route>
              <Route path="/admin/login" element={<Login />} />
              {/* Rutas privadas */}
              <Route element={<RutaProtegida />}>
                <Route
                  path="/admin/lista-propiedades"
                  element={<ListaPropiedades />}
                />
                <Route
                  path="/admin/agregar-propiedad"
                  element={<AgregarPropiedad />}
                />
                <Route
                  path="/admin/editar-propiedad/:id"
                  element={<ListaPropiedades />}
                />
                <Route
                  path="/admin/eliminar-propiedad/:id"
                  element={<ListaPropiedades />}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PropertyProvider>
    </AuthProvider>
  );
};

export default Rutas;
