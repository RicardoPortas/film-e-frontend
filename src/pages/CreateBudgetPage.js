import { useState } from 'react'
import axios from 'axios'

const CreateBudgetPage = props => {
    const [banco, setBanco] = useState('')
    const [agencia, setAgencia] = useState('')
    const [numeroConta, setNumeroConta] = useState('')
    const [budgetName, setBudgetName] = useState('')
    const [invoiceNumber, setInvoiceNumber] = useState('')
    const [invoiceDate, setInvoiceDate] = useState('')
    const [invoiceVerification, setInvoiceVerification] = useState('')
    const [invoiceAmount, setInvoiceAmount] = useState('')

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }
console.log(headers)
    const handleSubmit = e => {
        e.preventDefault()
        const newBudget = {
            banco,
            agencia,
            numeroConta,
            budgetName,
            invoiceNumber,
            invoiceDate,
            invoiceVerification,
            invoiceAmount,
        }
    

        axios.post('http://localhost:3001/movies/:movieId/budget', newBudget, {headers})
            .then(response => {
                console.log(response.data)
                alert('orçemento criado!')
            })
            .catch(err => console.log(err) )
    }

    return (
            <div className='container'>
            <h1>Criar Orçamento</h1>
            <form onSubmit={e => handleSubmit(e)}>
            <div>
                 <input 
                        type="text" 
                        value={banco}
                        onChange={e => setBanco(e.target.value)}
                        placeholder="Banco"
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={agencia}
                        onChange={e => setAgencia(e.target.value)}
                        placeholder="Agencia"
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={numeroConta}
                        onChange={e => setNumeroConta(e.target.value)}
                        placeholder="NumeroConta"
                    />
                </div>
                <div>
                 <input 
                        type="text" 
                        value={budgetName}
                        onChange={e => setBudgetName(e.target.value)}
                        placeholder="BudgetName"
                    />
                </div>
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
                        type="number" 
                        value={invoiceAmount}
                        onChange={e => setInvoiceAmount(e.target.value)}
                        placeholder="InvoiceAmount"
                    />
                </div>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}

export default CreateBudgetPage