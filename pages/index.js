import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {withSSRContext} from 'aws-amplify'
import {listProducts} from '../src/graphql/queries'
import {AmplifyS3Image} from'@aws-amplify/ui-react'

export async function getServerSideProps(){
  const SSR= withSSRContext()
  const {data}= await SSR.API.graphql({
    query:listProducts
  })
  return{
    props:{
      products: data.listProducts.items,
    }
  }
}
export default function Home({products}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>El Chinchorro</title>

      </Head>
      <div className='container'>
        <h1>Ofertas <Link href='/create-product'>(+)</Link></h1>
        <div className='image-grid'>
          {products.map(product => {
            return(
              <div key={product.id} className='image-square'>
                  <h2>{product.name}</h2>
                  <AmplifyS3Image imgKey= {product.image.key} height='220px'/>
              </div>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}
