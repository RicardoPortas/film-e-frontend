import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import StarCard from "../components/StarCard"

const MovieDetailsPage = props => {
    const [movie, setMovie] = useState(null)

    const { movieId } = useParams()

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/movies/${movieId}`, {headers})
        .then(response => {
            setMovie(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    if(!movie) {
        return <p>Loading...</p>
    }

    return (
        <div style={{ margin: '20px auto', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>{ movie.title }</h1>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '30%' }}>
                    <img style={{ width: '100%' }} src={movie.posterUrl} alt="poster" />
                </div>
                <div style={{ width: '70%' }}>
                    <p style={{ fontWeight: 'bold' }}>Year: {movie.year}</p>
                    <p style={{ fontWeight: 'bold' }}>YearAproved: {movie.yearAproved}</p>
                    <p style={{ fontWeight: 'bold' }}>Salic: {movie.salic}</p>
                    <p style={{ fontWeight: 'bold' }}>Proposer: {movie.proposer}</p>
                    <p style={{ fontWeight: 'bold' }}>Uf: {movie.uf}</p>
                    <p style={{ fontWeight: 'bold' }}>ProcessNumber: {movie.processNumber}</p>
                    <p style={{ fontWeight: 'bold' }}>Plot: {movie.plot}</p>
                    <p style={{ fontWeight: 'bold' }}>Geners: {movie.geners}</p>
                    <p style={{ fontWeight: 'bold' }}>Directors: {movie.directors}</p>
                    <p style={{ fontWeight: 'bold' }}>Writers: {movie.writers}</p>
                    <p style={{ fontWeight: 'bold' }}>Cast: {movie.cast}</p>
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Stars</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    { movie.cast.length > 0 && movie.cast.map(star => {
                        return (
                            <StarCard star={star} key={star._id} />       
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsPage