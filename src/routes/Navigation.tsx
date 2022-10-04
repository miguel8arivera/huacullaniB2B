import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../assets/agua-huacullani.jpg';
import { routes } from './routes';
import FormProduct from '../pages/FormProduct';

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt=" Imagen de Agua Huacullani" width={'220px'} height={'200px'} />

            <ul>
              {routes.map((route) => (
                <li key={route.id}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? 'nav-active' : null)}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component, id }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
            ,
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
