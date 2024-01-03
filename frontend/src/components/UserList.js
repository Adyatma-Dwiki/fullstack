import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    getUsers();
}, []);


const deleteUser = async (id) => {
    try{
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
    }catch (error){ 
        console.log('error');
    }
}

const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
}

    return (
       <div className="columns mt-5 is-centered">
        <div className="column is-half">
            
            <h1>Daftar Karywan</h1>
            <table className="table is-bordered  is-fullwidth mt-3">
            <thead>
                <tr>
                    <th className='has-text-centered'>No</th>
                    <th className='has-text-centered'>Name</th>
                    <th className='has-text-centered'>Email</th>
                    <th className='has-text-centered'>Gender</th>
                    <th className='has-text-centered'>Action</th>
                </tr>   
            </thead>
            <tbody>
                {users.map((user, index) => (
                <tr key={user.id}>
                     <td className='has-text-centered'>{index + 1}</td>
                     <td className='has-text-centered'>{user.name}</td>
                     <td className='has-text-centered'>{user.email}</td>
                     <td className='has-text-centered'> {user.gender}</td>
                     <td><Link to={`edit/${user.id}`} className='button is-small is-info mr-2'>Edit
                        </Link>
                        <button onClick={()=> deleteUser(user.id)} className='button is-small is-danger ml-4'>Delete
                        </button>
                        </td>
                 </tr>
                ))}
               
            </tbody>
            </table>
            <Link to={'addUser'} className='button is-success'>Add New</Link>
        </div>
       </div>
    )                           
}

export default UserList;