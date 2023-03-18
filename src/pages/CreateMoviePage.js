import { useState } from 'react'
import axios from 'axios'

const CreateMoviesPage = props => {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [yearAproved, setYearAproved] = useState('')
    const [salic, setSalic] = useState('')
    const [proposer, setProposer] = useState('')
    const [posterUrl, setPosterUrl] = useState('')
    const [uf, setUf] = useState('')
    const [processNumber, setProcessNumber] = useState('')
    const [plot, setPlot] = useState('')
    const [geners, setGeners] = useState('')
    const [directors, setDirectors] = useState('')
    const [writers, setWriters] = useState('')

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }
    const handleSubmit = e => {
        e.preventDefault()
        const newMovie = {
            title,
            year,
            yearAproved,
            salic,
            proposer,
            posterUrl,
            uf,
            processNumber,
            plot,
            geners,
            directors,
            writers,
        }
    

        axios.post('http://localhost:3001/movies', newMovie, {headers})
            .then(response => {
                console.log(response.data)
                alert('filme criado!')
            })
            .catch(err => console.log(err) )
    }
    

    const handleUpload = e => {
        const uploadData = new FormData()
        uploadData.append('moviePoster', e.target.files[0])
        axios.post('http://localhost:3001/movies/movieUpload', uploadData, {headers})
            .then(response => {
                setPosterUrl(response.data.url)
                alert('upload ok')
            })
            .catch(err => console.log(err))
    }

    return (
            <div className='container'>
            <h1>Create Movie</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <input 
                        type="text" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        placeholder="Year"
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={yearAproved}
                        onChange={e => setYearAproved(e.target.value)}
                        placeholder="YearAproved"
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={salic}
                        onChange={e => setSalic(e.target.value)}
                        placeholder="Salic"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={proposer}
                        onChange={e => setProposer(e.target.value)}
                        placeholder="Proposer"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        placeholder="Uf"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={processNumber}
                        onChange={e => setProcessNumber(e.target.value)}
                        placeholder="ProcessNumber"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={plot}
                        onChange={e => setPlot(e.target.value)}
                        placeholder="Plot"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={geners}
                        onChange={e => setGeners(e.target.value)}
                        placeholder="Geners"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={directors}
                        onChange={e => setDirectors(e.target.value)}
                        placeholder="Directors"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={writers}
                        onChange={e => setWriters(e.target.value)}
                        placeholder="Writers"
                    />
                </div>
                <div>
                    <input type="file" onChange={e => handleUpload(e)} />
                </div>
                <button type="submit" disabled={!posterUrl}>Criar</button>
            </form>
        </div>
    )
}

export default CreateMoviesPage