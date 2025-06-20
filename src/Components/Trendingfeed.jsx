import React, { useEffect,useState } from 'react'
import { fetch } from '../utils/fetch';
import {Animecard} from './index'
const Trendingfeed = () => {
  const [Trending,setTrending] = useState([])
    useEffect(()=>{
      const getTrending = async ()=>{
        const res = await fetch('top/anime');
        console.log(res.data);
        setTrending(res.data)
      }
      getTrending();
    },[])
  return (
    <div>
      <Animecard anime = {Trending}/>
    </div>
  )
}

export default Trendingfeed
