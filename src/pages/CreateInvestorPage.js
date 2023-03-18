import { useState } from 'react'
import axios from 'axios'

const CreateInvestorPage = () => {
  const [razaoSocial, setRazaoSocial] = useState('')
  const [nomeFantasia, setNomeFantasia] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')

  const token = localStorage.getItem('token')
  const headers = { 'Authorization': 'Bearer ' + token }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newInvestor = {
      razaoSocial,
      nomeFantasia,
      cnpj,
      endereco,
      cidade,
      cep
    }

    axios.post('http://localhost:3001/investor', newInvestor, { headers })
      .then((response) => {
        console.log(response.data)
        alert('Investidor criado!')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="container">
      <h1>Criar Investidor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={razaoSocial}
            onChange={(e) => setRazaoSocial(e.target.value)}
            placeholder="Razão Social"
          />
        </div>
        <div>
          <input
            type="text"
            value={nomeFantasia}
            onChange={(e) => setNomeFantasia(e.target.value)}
            placeholder="Nome Fantasia"
          />
        </div>
        <div>
          <input
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="CNPJ"
          />
        </div>
        <div>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="Endereço"
          />
        </div>
        <div>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Cidade"
          />
        </div>
        <div>
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="CEP"
          />
        </div>
        <button type="submit">Criar Investidor</button>
      </form>
    </div>
  )
}

export default CreateInvestorPage
