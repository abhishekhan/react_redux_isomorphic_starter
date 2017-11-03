import Home from './Home';
import Counter from './Counter';

const routes = [
        { path: '/',
          exact: true,
          component: Home
        },
        { path: '/counter',
          component: Counter
        }
      ]
export default routes;