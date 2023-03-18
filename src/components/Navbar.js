import { Link } from 'react-router-dom'

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">FILM-E</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/movies">Filmes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/nf">Notas Fiscais</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-movie">Criar Filme</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/budget">Criar Orçamento</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-nf">Criar Nota Fiscal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-star">Criar Casting</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/producer">Criar Produtor</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/investor">Criar Investidor</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/professionals">Criar Profissional Autônomo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-up">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar