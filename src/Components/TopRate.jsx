import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from './Rating';
import './Trens.css';
import { Box } from '@mui/material';

const TopRate = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true); 
      const response = await axios.get('https://api.themoviedb.org/4/list/1', {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDFhZmNhODEyYzdlZmU3ZGI0MWNlMWYwYjc1NWIzYiIsIm5iZiI6MTcyNjY1NDAyMi4zMDY3MzIsInN1YiI6IjY2ZWFhMjUyYjY2NzQ2ZGQ3OTBiMjQ3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AdUjK7WVb0Upx1P5-YPPGZopI4uN9k-PC5t8epsUhvw' // Replace with your API key
        }
      });
      setMovies(response?.data?.results);
      console.log(response?.data?.results)
    } catch (error) {
      setError('Failed to fetch movies.'); 
    } finally {
      setLoading(false); 
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>{error}</div>; 

  return (
    <div className='cards-container'>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie, index) => (
          <div style={{width:'300px',position:'relative ' }}>
          <Card className='cards' key={index}>
            <CardMedia
              component="img"
              alt={movie.title}
              // sx={{width:'100%',height:'70%'}}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />

            {/* <Box>
            <CardContent sx={{background:'transparent'}}>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="containekd" size="small">
                Share
              </Button>
              <Button variant="contained" size="small">
                Watch Now
              </Button>
              <Rating rating={movie.vote_average / 2} /> 
            </CardActions>
            </Box> */}
          </Card>
             <div className='rating'>
              <Rating rating={movie.vote_average / 2} /> 
              </div>
          <div className='title'>
            <h3>{movie.title}</h3>
            <Button  style={{marginRight:'10px'}} variant="contained" size="small">
                Share
              </Button>
              <Button variant="contained" size="small">
                Watch Now
              </Button>
          </div>
          </div>
        ))
      ) : (
        <Typography></Typography>
      )}
    </div>
  );
};

export default TopRate;
