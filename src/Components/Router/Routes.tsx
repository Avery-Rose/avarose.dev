import RequiredAuthState from '../Navbar/types/RequiredAuthState';

import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import Unauthorized from '../../Pages/Unauthorized';
import Cards from '../../Pages/Cards';

const Routes = [
  {
    title: 'AvaRose - Home',
    description: "Avery Rose's personal website",
    path: '/',
    name: 'Home',
    component: Home,
    reqAuthState: RequiredAuthState.Any,
    hidden: false,
  },
  {
    title: 'AvaRose - Unauthorized',
    description: 'Unauthorized',
    path: '/unauthorized',
    name: 'Unauthorized',
    component: Unauthorized,
    reqAuthState: RequiredAuthState.LoggedOut,
    hidden: true,
  },
  {
    title: 'Cards',
    description: 'Cards',
    path: '/cards',
    name: 'Cards',
    component: Cards,
    reqAuthState: RequiredAuthState.Any,
    hidden: true,
  },
  {
    title: 'AvaRose - 404',
    description: 'Page Not Found',
    path: '/404',
    name: '404',
    component: NotFound,
    reqAuthState: RequiredAuthState.Any,
    hidden: true,
  },
];

export default Routes;
