import { Link } from 'react-router-dom'

const StarCard = ({star}) => {
    return (
        <div className='col-3'>
            <div className="card">
                <img className="card-img-top" src={star.picture} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{ star.name }</h5>
                </div>
            </div>
        </div>
    )
}

export default StarCard