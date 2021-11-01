import React, { useEffect, useState } from 'react';
import './MyOrder.css'

const MyOrder = () => {

    const [users, setUsers]= useState([]);

    useEffect(()=>{
        fetch('https://arcane-hamlet-80803.herokuapp.com/myOrder')
        .then(res=>res.json())
        .then (data=> setUsers(data));
    },[])

    const handleDeleteUser= id =>{
        const proceed= window.confirm('Are you sure you want to remove it?');

        if (proceed){
         const url = `https://arcane-hamlet-80803.herokuapp.com/myOrder/${id}`;
         fetch(url,{
             method: 'DELETE'
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('deleted successfully');
                 const remainingUsers= users.filter(user => user._id !== id)
                 setUsers(remainingUsers);
             }
         })
        }
 }

    return (
        <div>
           <h1 className="text-warning mt-5">Your Current Orders are- </h1>
           <ol className="w-50 mx-auto">
                {
                    users.map(user=> <li className="mb-3" key={user._id}>Client:{user.Name} | Address:{user.address} | Package Name: {user.package} 
                    <button className="btn-danger ms-5" onClick={()=>
                    handleDeleteUser(user._id)}> Remove Order</button></li>)
                }
            </ol>
        </div>
    );
};

export default MyOrder;