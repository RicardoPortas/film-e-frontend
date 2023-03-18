import { useState } from 'react'
import axios from 'axios'

const CreateStarPage = props => {
    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [birthPlace, setBirthPlace] = useState('')
    const [funFacts, setFunFacts] = useState('')
    const [wikipediaLink, setWikipediaLink] = useState('')
    const [picture, setPicture] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const newStar = {
            name,
            birthDate,
            birthPlace,
            funFacts,
            wikipediaLink,
            picture
        }

        const token = localStorage.getItem('token')

        const headers = {
            'Authorization': 'Bearer ' + token
        }

        axios.post('http://localhost:3001/stars', newStar, {headers})
            .then(response => {
                console.log(response.data)
                alert('star criada!')
            })
            .catch(err => console.log(err) )
    }

    const handleUpload = e => {
        const uploadData = new FormData()
        uploadData.append('starPicture', e.target.files[0])
        axios.post('http://localhost:3001/stars/upload', uploadData)
            .then(response => {
                setPicture(response.data.url)
                alert('upload ok')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <h1>Create Star</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <input 
                        type="text" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={birthDate}
                        onChange={e => setBirthDate(e.target.value)}
                        placeholder="Data de Nascimento"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={birthPlace}
                        onChange={e => setBirthPlace(e.target.value)}
                        placeholder="Lugar de Nascimento"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={funFacts}
                        onChange={e => setFunFacts(e.target.value)}
                        placeholder="Fun Facts"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={wikipediaLink}
                        onChange={e => setWikipediaLink(e.target.value)}
                        placeholder="Wikipedia Link"
                    />
                </div>
                <div>
                    <input type="file" onChange={e => handleUpload(e)} />
                </div>
                <button type="submit" disabled={!picture}>Criar</button>
            </form>
        </div>
    )
}

export default CreateStarPage