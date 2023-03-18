import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NfTable = ({ nf, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState(nf.invoiceNumber);
  const [invoiceDate, setInvoiceDate] = useState(nf.invoiceDate);
  const [invoiceVerification, setInvoiceVerification] = useState(nf.invoiceVerification);
  const [invoiceAmount, setInvoiceAmount] = useState(nf.invoiceAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));

  const token = localStorage.getItem('token');
  const headers = {
    Authorization: 'Bearer ' + token,
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3001/nf/${nf._id}`, {
        invoiceNumber,
        invoiceDate,
        invoiceVerification,
        invoiceAmount: parseFloat(invoiceAmount.replaceAll('.', '').replace(',', '.')),
      }, { headers })
      .then((response) => {
        setIsEditing(false);
        onUpdate(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/nf/${nf._id}`, { headers })
      .then(() => onDelete(nf._id))
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <td>{isEditing ? <input type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} /> : nf.invoiceNumber}</td>
      <td>{isEditing ? <input type="text" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} /> : nf.invoiceDate}</td>
      <td>{isEditing ? <input type="text" value={invoiceVerification} onChange={(e) => setInvoiceVerification(e.target.value)} /> : nf.invoiceVerification}</td>
      <td>{isEditing ? <input type="text" value={invoiceAmount} onChange={(e) => setInvoiceAmount(e.target.value)} /> : nf.invoiceAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
      <td>
        <div className="card-footer">
          <Link to={`/nf/${nf._id}`} className="btn btn-primary">View Details</Link>
        </div>
        {isEditing ? (
          <>
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default NfTable;
