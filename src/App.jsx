import {
  createBrowserRouter,
  
  RouterProvider,
} from 'react-router-dom';
import { Home, AnimeDetail, Searchfeed } from './Components';
import Overview from './Components/Overview';
import Producers from './Components/Producers';
import Character from './Components/Character';
import Trendingfeed from './Components/Trendingfeed';
import List from './Components/List';
import './App.css'
import { Watchlistprovider } from './Components/context/context.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // or any default component you want
  },
  {
    path: '/trending',
    element: <Trendingfeed />
  },
  {
    path: '/anime/:id',
    element: <AnimeDetail />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: 'characters',
        element: <Character />,
      },
      {
        path: 'producers',
        element: <Producers />,
      },
    ],
  },
  {
    path: '/search/:name',
    element: <Searchfeed />,
  },
  {
    path: '/mylist',
    element: <List />
  }
]);


export default function App() {
  return (
    <Watchlistprovider>
      <RouterProvider router={router} />
    </Watchlistprovider>
  );
}
