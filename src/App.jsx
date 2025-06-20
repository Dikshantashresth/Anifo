import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, AnimeDetail, Searchfeed } from './Components';
import Overview from './Components/Overview';
import Producers from './Components/Producers';
import Character from './Components/Character';
import Trendingfeed from './Components/Trendingfeed';
import List from './Components/List';
import { Watchlistprovider } from './Components/context/context.jsx';

export default function App() {
  return (
    <Watchlistprovider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trendingfeed />} />
          <Route path="/search/:name" element={<Searchfeed />} />
          <Route path="/mylist" element={<List />} />
          <Route path="/anime/:id" element={<AnimeDetail />}>
            <Route index element={<Overview />} />
            <Route path="characters" element={<Character />} />
            <Route path="producers" element={<Producers />} />
          </Route>
        </Routes>
      </HashRouter>
    </Watchlistprovider>
  );
}
