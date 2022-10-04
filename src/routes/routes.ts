import AlmacenPage from '../pages/AlmacenPage';
import FormProduct from '../pages/FormProduct';
import HomePage from '../pages/HomePage';
import VentasPage from '../pages/VentasPage';
import Ventas from '../pages/VentasPage';
import FormProductPage from '../pages/FormProductPage';
import FormikBasic from '../forms/pages/FormikBasic';

interface Route {
  id: string;
  path: string;
  to: string;
  name: string;
  Component: () => JSX.Element;
}

export const routes: Route[] = [
  {
    id: crypto.randomUUID(),
    path: '/home',
    to: '/home',
    name: 'Home',
    Component: HomePage,
  },
  {
    id: crypto.randomUUID(),
    path: '/producto',
    to: '/producto',
    name: 'Producto',
    Component: FormProductPage,
  },
  {
    id: crypto.randomUUID(),
    path: '/venta',
    to: '/venta',
    name: 'Venta',
    Component: VentasPage,
  },
  {
    id: crypto.randomUUID(),
    path: '/Form',
    to: '/form',
    name: 'Form',
    Component: FormProduct,
  },
  {
    id: crypto.randomUUID(),
    path: '/Formikbasic',
    to: '/formikbasic',
    name: 'formik basic',
    Component: FormikBasic,
  },
];
