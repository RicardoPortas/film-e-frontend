import { useState } from 'react'
import axios from 'axios'

const CreateProducerPage = props => {
    const [razaoSocial, setRazaoSocial] = useState('')
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [enderecoRegistro, setEnderecoRegistro] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')
    const [cnaes, setCnaes] = useState('')
    const [registroANCINE, setRegistroANCINE] = useState('')
    const [movie, setMovie] = useState('')

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newProducer = {
            razaoSocial,
            nomeFantasia,
            cnpj,
            enderecoRegistro,
            cidade,
            cep,
            cnaes,
            registroANCINE,
            movie,
        }

        axios.post('http://localhost:3001/producer', newProducer, {headers})
            .then(response => {
                console.log(response.data)
                alert('produtor criado!')
            })
            .catch(err => console.log(err) )
    }

    return (
        <div className='container'>
            <h1>Criar Produtor</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <input 
                        type="text" 
                        value={razaoSocial}
                        onChange={e => setRazaoSocial(e.target.value)}
                        placeholder="Razão Social"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={nomeFantasia}
                        onChange={e => setNomeFantasia(e.target.value)}
                        placeholder="Nome Fantasia"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={cnpj}
                        onChange={e => setCnpj(e.target.value)}
                        placeholder="CNPJ"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={enderecoRegistro}
                        onChange={e => setEnderecoRegistro(e.target.value)}
                        placeholder="Endereço de Registro"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                        placeholder="Cidade"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        placeholder="CEP"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={cnaes}
                        onChange={e => setCnaes(e.target.value.split(','))}
                        placeholder="CNAEs (separados por vírgula)"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={registroANCINE}
                        onChange={(e) => setRegistroANCINE(e.target.value.split(','))}
                        placeholder="Registro ANCINE (separados por vírgula)"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={movie}
                        onChange={(e) => setMovie(e.target.value)}
                        placeholder="ID do Filme (Opcional)"
                    />
                </div>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}

export default CreateProducerPage