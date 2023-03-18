import { Link } from 'react-router-dom';
import axios from 'axios';

const MovieCard = ({ movie }) => {
  const token = localStorage.getItem('token');

  const headers = {
    'Authorization': 'Bearer ' + token
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/movies/${movie._id}`, {headers})
      .then(response => {
        console.log(response);
        // Remove the deleted movie from the state in the parent component
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div className='col-3'>
      <div className="card">
        <img className="card-img-top" src={movie.posterUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{ movie.title }</h5>
          <p className="card-text">{ movie.synopsis }</p>
        </div>
        <div className="card-footer">
          <Link to={`/movies/${movie._id}`} className="btn btn-primary mr-2">View Details</Link>
          <button className="btn btn-danger" onClick={handleDelete}>Delete Movie</button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;
