import axios from 'axios'
import { useState } from 'react'

const LoginPage = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = e => {
        e.preventDefault()

        const payload = {
            email, 
            password
        }

        axios.post(`${process.env.REACT_APP_API_URL}/login`, payload)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                alert('Login Ok')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-mail"
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage