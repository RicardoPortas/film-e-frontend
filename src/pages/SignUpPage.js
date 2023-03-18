import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Style.css';

const SignUpPage = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('entusiast')
    const navigate = useNavigate() // initialize useNavigate


    const handleSubmit = e => {
        e.preventDefault()

        const payload = {
            email, 
            password,
            userType
        }

        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, payload)
            .then(response => {
                console.log(response.data)
                alert('Sign Up Ok')
                if (userType === 'producer') {
                    navigate('/producer')
                  } else if (userType === 'professional') {
                    navigate('/professionals')
                  }
                  console.log(navigate)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <h1>Sign Up</h1>
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
                <div>
                    <label htmlFor="userType">Choose userType:</label>
                    <select name="userType" id="userType" value={userType} onChange={e => setUserType(e.target.value)}>
                        <option value="producer">produtor</option>
                        <option value="investor">Investidor</option>
                        <option value="professional">professional</option>
                        <option value="channel">canal</option>
                        <option value="entusiast">entusiast</option>
                    </select>
                </div>
                <button type="submit">Sign-Up</button>
            </form>
        </div>
    )
}

export default SignUpPage