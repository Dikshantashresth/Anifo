import { createContext, useContext, useEffect, useState } from "react";

export const WatchContext = createContext([]);
export const useWatchList = () => useContext(WatchContext);

export const Watchlistprovider = ({ children }) => {
  const [watchList, setwatchList] = useState(() => {
    const stored = localStorage.getItem('myWatchList');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('myWatchList', JSON.stringify(watchList));
  }, [watchList]);

  const addAnime = (item) => {
    setwatchList(prev => {
      const exists = prev.some(anime => anime.mal_id === item.mal_id);
      return exists ? prev : [...prev, item];
    });
  };

  return (
    <WatchContext.Provider value={{ addAnime, watchList, setwatchList }}>
      {children}
    </WatchContext.Provider>
  );
};
