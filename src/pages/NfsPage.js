import { useEffect, useState } from 'react';
import axios from 'axios';
import NfTable from '../components/NfTable.js';

const NfsPage = (props) => {
  const [nfs, setNfs] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [updateTrigger, setUpdateTrigger] = useState(false); // new state variable

  const token = localStorage.getItem('token');

  const headers = {
    Authorization: 'Bearer ' + token,
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/nf', { headers })
      .then((response) => {
        setNfs(response.data);
        const amountSum = response.data.reduce((acc, curr) => acc + parseFloat(curr.invoiceAmount.replace(",", ".")), 0);
        setTotalAmount(amountSum.toFixed(2).replace(".", ","));
      })
      .catch((err) => console.log(err));
  }, [updateTrigger, headers]); // reload data when updateTrigger or headers change

  const handleUpdate = (id, data) => {
    axios.put(`http://localhost:3001/nf/${id}`, data, { headers })
      .then((response) => {
        const updatedNf = response.data;
        const updatedNfs = nfs.map((nf) => (nf._id === updatedNf._id ? updatedNf : nf));
        setNfs(updatedNfs);
        setUpdateTrigger(!updateTrigger); // set updateTrigger to trigger useEffect hook
      })
      .catch((err) => console.log(err));
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/nf/${id}`, { headers })
      .then((response) => {
        const deletedNfId = response.data._id;
        const updatedNfs = nfs.filter((nf) => nf._id !== deletedNfId);
        setNfs(updatedNfs);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h1>Notas Fiscais</h1>

      <table>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Invoice Date</th>
            <th>Invoice Verification</th>
            <th>Invoice Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {nfs.map((nf) => (
            <NfTable nf={nf} key={nf._id} handleUpdate={handleUpdate} handleDelete={handleDelete} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total Amount:</td>
            <td colSpan="2">{totalAmount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default NfsPage;
