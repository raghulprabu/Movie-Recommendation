import * as React from 'react';
import './Trens.css';
import Rating from './Rating';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserCards = [
  {
    movie: "leo",
    image: "image/leo1.jpg",
  },
  {
    movie: "SPIDER",
    image: "image/spider2.jpg",
  },
  {
    movie: "Avatar",
    image: "image/avatar3.jpeg",
  },
  {
    movie: "jocker",
    image: "image/jocker4.jpg",
  },
  {
    movie: "World War",
    image: "image/worldwar5.jpg",
  },
];

function ImgMediaCard({ movie,image }) {
  return (
    <Card className='popular'>
      <CardMedia
        component="img"
        alt="movie poster"
        height="310"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" size="small">
          Share
        </Button>
        <Button variant="contained" size="small">
          Watch Now
        </Button>
        <Rating/>
      </CardActions>
    </Card>
  );
}
export const Popular = ({ searchQuery }) => {
  const filteredMovies = UserCards.filter((user) =>
    user.movie.toLowerCase().includes(searchQuery)
  );

  return (
    <>
       {/* <h1 className='trend'>What's a Popular</h1> */}
      <div className='cards-container'>
        {filteredMovies.map((user, index) => (
          <ImgMediaCard
            key={index}
            movie={user.movie}
            image={user.image}
          />
        ))}
      </div>
    </>
  );
}

export default Popular;