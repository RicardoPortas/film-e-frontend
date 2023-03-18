import { Link } from 'react-router-dom'

const NfCard = ({nf}) => {
    return (
        <div className='col-md-4 col-sm-6 mb-4'>
            <div className="card h-100">
                <img className="card-img-top" src={nf.nfUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Invoice { nf.invoiceNumber }</h5>
                    <p className="card-text">{nf.validatorHash}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/nf/${nf._id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default NfCard