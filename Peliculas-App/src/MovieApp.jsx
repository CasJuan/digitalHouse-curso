import { useState, useTransition } from 'react'
import './MovieApp.css'

export const MovieApp = () => {

    const [search, setSearch] = useState('')
    const [movieList, setMovieList] = useState([])

    const urlBase = 'https://api.themoviedb.org/3/search/movie';
    const APY_KEY = '4ad9465728858b4e4869eef719a32dbf';

    const handleInputeChange = ({target}) => {
        setSearch(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchMovies()
        console.log(search)
    }

    const fetchMovies = async() => {
        try {
            const response = await fetch(`${urlBase}?query=${search}&api_key=${APY_KEY}&language=es-ES`)
            const data = await response.json()
            setMovieList(data.results)
        } catch (error) {
            console.log(error)
        }
    }





  return (
    <div className='container'>
        <h1 className='title'>Buscador de Peliculas</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Escribi la pelicula' value={search} onChange={handleInputeChange}/>
            <button className='search-button'>Buscar</button>
        </form>

        {movieList && 
        <div className='movie-list'>
            {
                movieList.map(movie => (
                    <div key={movie.id} className='movie-card'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                ))
            }

        </div>        
        }



    </div>
  )
}
