import { useState } from 'react'
import axios from 'axios'

const CreateNfPage = props => {
    const [invoiceNumber, setInvoiceNumber] = useState('')
    const [invoiceDate, setInvoiceDate] = useState('')
    const [invoiceVerification, setInvoiceVerification] = useState('')
    const [invoiceAmount, setInvoiceAmount] = useState('')
    const [nfUrl, setNfUrl] = useState('')


    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }
console.log(headers)
    const handleSubmit = e => {
        e.preventDefault()
        const newNf = {
            invoiceNumber,
            invoiceDate,
            invoiceVerification,
            invoiceAmount,
            nfUrl,
        }
    

        axios.post('http://localhost:3001/nf', newNf, {headers})
            .then(response => {
                console.log(response.data)
                alert('nf criada!')
            })
            .catch(err => console.log(err) )
    }
    

    const handleUpload = e => {
        const uploadData = new FormData()
        uploadData.append('nfImage', e.target.files[0])
        axios.post('http://localhost:3001/nf/nfUpload', uploadData, {headers})
            .then(response => {
                setNfUrl(response.data.url)
                alert('upload ok')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <h1>Criar Nota Fiscal</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <input 
                        type="number" 
                        value={invoiceNumber}
                        onChange={e => setInvoiceNumber(e.target.value)}
                        placeholder="InvoiceNumber"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={invoiceDate}
                        onChange={e => setInvoiceDate(e.target.value)}
                        placeholder="InvoiceDate"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={invoiceVerification}
                        onChange={e => setInvoiceVerification(e.target.value)}
                        placeholder="InvoiceVerification"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={invoiceAmount}
                        onChange={e => setInvoiceAmount(e.target.value)}
                        placeholder="InvoiceAmount"
                    />
                </div>
                <div>
                    <input type="file" onChange={e => handleUpload(e)} />
                </div>
                <button type="submit" disabled={!nfUrl}>Criar</button>
            </form>
        </div>
    )
}

export default CreateNfPage