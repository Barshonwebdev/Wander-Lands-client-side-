import React from 'react';
import { useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import { useForm} from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
import './ServiceDetails.css'
import axios from 'axios';
const ServiceDetails = () => {
    const{serviceId} = useParams();

    const[detail,setDetail] = useState([])

    const [allData, setAllData]= useState({})

    const {user}= useFirebase();


    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
    data.email=user.email;
    data.Name=user.displayName;
    data.package=allData?.Name
    axios.post('http://localhost:4000/orders',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('Order Placed successfully');
            reset();
        }
        console.log(res);
        console.log(data);
    })
  };

    useEffect(()=>{
        fetch(`http://localhost:4000/services`)
        .then(res=> res.json())
        .then(data => setDetail(data) )
    },[reset])

    useEffect(()=>{
      const foundDetail=  detail.find(serviceDetail=> serviceDetail._id == serviceId)
      setAllData(foundDetail);
    },[detail]) 

    

    return (
        
            
            <div className="details-div">
                <h4>Username: {user.displayName}</h4>
                <h4>Email: {user.email}</h4>
                <h2>Package Name: {allData?.Name}</h2>
                <img src={allData?.image} 
                alt=""/>
                <div className="description">
                    <h4  >Details: {allData?.Description}</h4>
                    <h4  >Price: {allData?.Price}</h4>
                </div>
                <div className="form">
                    <h1>Wanna order this package? Fill the form!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                               
                                <p>Address</p>
                                <input className="form-box"  {...register("address", { required: true })} />
                                <p>Number of People</p>
                                <input className="form-box"  {...register("quantity", { required: true })} />
                                <p>Phone Number</p>
                                <input className="form-box"  {...register("PhoneNumber", { required: true })} />
                                
                                <br/>
                                <input type="submit" className="btn-success" value="Place Order" />
                    </form>
                </div>
            </div>
        
    );
};

export default ServiceDetails;