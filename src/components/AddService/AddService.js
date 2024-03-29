import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{ console.log(data);
    axios.post('https://arcane-hamlet-80803.herokuapp.com/services',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('added successfully');
            reset();
        }
        console.log(res);
    })
    
    
}


    return (
        <div>
            <h1>Add a new Package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="m-2 p-2" placeholder="Name" {...register("Name")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input  className="m-2 p-2" placeholder="Price" {...register("Price", { required: true })} />
      <input className="m-2 p-2" placeholder="Description" {...register("Description", { required: true })} />
      <input className="m-2 p-2" placeholder="image" {...register("image", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <br/> <br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;