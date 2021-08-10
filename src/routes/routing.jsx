import Starter from '../views/starter/starter.jsx';
// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Signin from '../views/ui-components/signin.jsx';
import Signup from '../views/ui-components/signup.jsx';

// import Cards from '../views/ui-components/cards.jsx';
// import LayoutComponent from '../views/ui-components/layout.jsx';
// import PaginationComponent from '../views/ui-components/pagination.jsx';
// import PopoverComponent from '../views/ui-components/popover.jsx';
// import TooltipComponent from '../views/ui-components/tooltip.jsx';

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Home', 
    icon: 'mdi mdi-gauge', 
    component: Starter 
  },
  {
    path: '/alert',
    name: 'Traders',
    icon: 'mdi mdi-comment-processing-outline',
    component: Alerts
  },
  {
    path: '/badge',
    name: 'Settings',
    icon: 'mdi mdi-arrange-send-backward',
    component: Badges
  },
  {
    path: '/button',
    name: 'Profile',
    icon: 'mdi mdi-toggle-switch',
    component: Buttons
  },
  {
    path: '/Signin',
    name: 'Sign in',
    icon: 'mdi mdi-toggle-switch',
    component: Signin
  },
  {
    path: '/Signup',
    name: 'Sign up',
    icon: 'mdi mdi-toggle-switch',
    component: Signup
  },
  // {
  //   path: '/card',
  //   name: 'Cards',
  //   icon: 'mdi mdi-credit-card-multiple',
  //   component: Cards
  // },
  // {
  //   path: '/grid',
  //   name: 'Grid',
  //   icon: 'mdi mdi-apps',
  //   component: LayoutComponent
  // },
  // {
  //   path: '/pagination',
  //   name: 'Pagination',
  //   icon: 'mdi mdi-priority-high',
  //   component: PaginationComponent
  // },
  // {
  //   path: '/popover',
  //   name: 'Popover',
  //   icon: 'mdi mdi-pencil-circle',
  //   component: PopoverComponent
  // },
  // {
  //   path: '/ui-components/tooltip',
  //   name: 'Toltips',
  //   icon: 'mdi mdi-image-filter-vintage',
  //   component: TooltipComponent
  // }
  ,
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
