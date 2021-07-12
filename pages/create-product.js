import React,{useState} from 'react';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
const CreateProduct = () => {
    const [name, setName]= useState('')
    const [image, setImage]= useState('')
  return (
    <div>
    <form>
        <h2>Create product</h2>
        <label htmlFor='name'>Product Name</label>
        <input type='text' id='name' onChange ={e=> setName(e.target.value)}/>
        <input type='file' id='image' onChange ={e=> setImage(e.target.files[0])}/>
        <input type='submit' value='create'/>

    </form>
      {/* <AmplifySignOut/> */}
    </div>
  );
}

export default withAuthenticator (CreateProduct);
