import React,{useState} from 'react';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import {API,Storage} from 'aws-amplify';
import {createProduct} from '../src/graphql/mutations';
import config from '../src/aws-exports'


const CreateProduct = () => {
    const [name, setName]= useState('')
    const [image, setImage]= useState('')
    const handleSubmit = async e=>{
        e.preventDefault()
        const uploadedImage = await Storage.put(image.name,image)
        const newProduct = await API.graphql({
            query:createProduct,
            variables:{
                input:{
                   name,
                   image:{
                     region:config.aws_user_files_s3_bucket_region ,
                     bucket:config.aws_user_files_s3_bucket,
                     key:uploadedImage.key

                   } 
                }
            }
        })
        console.log(newProduct)
    }
  return (
    <div>
    <form onSubmit={handleSubmit }>
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
