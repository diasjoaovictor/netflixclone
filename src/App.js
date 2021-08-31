import React, { useEffect, useState} from 'react';
import MovieRow from './components/Movierow/MovieRow';
import Tmdb from './Tmdb';
import  './App.css';
//import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';

const App = () => {
  
  const [movieList, setMovieList] = useState([]);
  // const [featuredData, setfeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando filmes em destaque
      // let topRated = list.filter(i=>i.slug === 'toprated');
      // let randomChosen = Math.floor(Math.random() * (topRated[0].items.results.length -1));
      // let chosen = topRated[0].items.results[randomChosen];
      // let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
      // setfeaturedData(chosenInfo);
    }

    loadAll();
  }, [])
  return (
    <div className="page">
      
      {/* {featuredData &&
        <FeaturedMovie item={featuredData}/>
      } */}
      

      <section className="lists">
        {movieList.map((item,key) => (
        <MovieRow key={key} title={item.title} items={item.items}/>
        ))
        }
      </section>
    </div>
  )

}

export default App;
