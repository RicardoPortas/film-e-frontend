import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

const NfDetailsPage = props => {
    const [nf, setNf] = useState(null)
    const [formData, setFormData] = useState({})
    const { nfId } = useParams()
    const Navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [nfUrl, setNfUrl] = useState('')


    const headers = {
        'Authorization': 'Bearer ' + token
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/nf/${nfId}`, { headers })
        .then(response => {
            setNf(response.data)
        })
        .catch(err => console.log(err))
    }, [nfId])

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axios.put(`http://localhost:3001/nf/${nfId}`, formData, { headers })
        .then(response => {
            console.log(response)
            Navigate.push(`/nf/${nfId}`)
        })
        .catch(err => console.log(err))
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/nf/${nfId}`, {headers})
        .then(response => {
            Navigate.push('/')
        })
        .catch(err => console.log(err))
    }

    const handleUpload = e => {
        const uploadData = new FormData()
        uploadData.append('nfImage', e.target.files[0])
        axios.post(`http://localhost:3001/nf/${nfId}/nfUpload`, uploadData, {headers})
            .then(response => {
                setNfUrl(response.data.url)
                alert('upload ok')
            })
            .catch(err => console.log(err))
    }

    if (!nf) {
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <h1>{nf.invoiceNumber}</h1>

            <div className="row">
                <div className="col-3">
                    <img width="100%" src={nf.nfUrl} alt="poster" />
                </div>
                <div className="col-9">
                    <form onSubmit={handleSubmit}>
                        <label>InvoiceNumber:</label>
                        <input type="number" name="invoiceNumber" value={formData.invoiceNumber || nf.invoiceNumber} onChange={handleChange} />

                        <label>InvoiceDate:</label>
                        <input type="text" name="invoiceDate" value={formData.invoiceDate || nf.invoiceDate} onChange={handleChange} />

                        <label>InvoiceVerification:</label>
                        <input type="text" name="invoiceVerification" value={formData.invoiceVerification || nf.invoiceVerification} onChange={handleChange} />

                        <label>InvoiceAmount:</label>
                        <input type="text" name="invoiceAmount" value={formData.invoiceAmount || nf.invoiceAmount} onChange={handleChange} />

                        <label>validatorHash:</label>
                        <input type="text" name="validatorHash" value={formData.validatorHash || nf.validatorHash}/>

                        <button type="submit">Update</button>
                        <button onClick={handleDelete}>Delete Invoice</button>
                        <div>
                            <input type="file" onChange={e => handleUpload(e)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NfDetailsPage
