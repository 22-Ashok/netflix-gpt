import { useEffect } from 'react'
import Header from "./Header"
import { useDispatch } from 'react-redux';
import { allMoviesList } from '../redux/slices/moviesSlice';

const Browse = () => {
    const dispatch = useDispatch();

    const options = {
        methods:'GET',
        headers:{
            accept: 'application/json',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTYwNDJiMjRlNDkwODcxYzdhYjc1MWQ3OWFlNWY0NSIsIm5iZiI6MTcyMzQ2Nzg4MC4xMjY5MTksInN1YiI6IjY2YmEwNTdkM2UyZWU5ZTdhY2I3NjFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z2eToflnLU7iheJcW9DYqm4w0S-1jRf4sbGQ6wb3Gr4',
        }
    };

    useEffect(()=> {
       const movieData = async () => {
           const fetchData = await fetch("https://api.themoviedb.org/3/movie/now_playing", options);
           const response = await fetchData.json();
           const movies = response.results;
           
           dispatch(allMoviesList(movies));
       }
       movieData();
    },[])


    return (
        <>
        <Header />
         <h1>from browse </h1>
        </>
    )
}

export default Browse