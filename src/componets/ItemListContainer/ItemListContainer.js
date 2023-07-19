import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../../Json/arrayProductos.json';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
     const [item, setItem] = useState([]);
     const {id} = useParams();

   useEffect(()=>{
     const fetchData = async()=>{
        try{
        const data = await new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(id ? arrayProductos.filter(item=> item.categoria === id) : arrayProductos)
       }, 2000);
        });
        setItem(data);
      }catch(error){
        console.log('Error:', error);
      }
    };
    fetchData();
//      const promesa = new Promise((resolve)=>{
 //       setTimeout(()=>{
 //         resolve(id ? arrayProductos.filter(item=> item.categoria === id) : arrayProductos)
  //      }, 2000)
  //    });
  //    promesa.then((data)=>{
   //     setItem(data)
   //   })
     }, [id])

  return (
    <div className='container'>
      <div className='row'>
       <ItemList item={item}/>
      </div>
      
    </div>
  )
}

export default ItemListContainer
