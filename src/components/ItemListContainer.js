import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore';
import ItemList from '../components/ItemList';
import Spinner from './Spinner';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState(); 
  const [load, setLoad] = useState(true);
  const getData = async (categoria) => {
    setLoad(true);
    const querydb = getFirestore();
    const queryCollection = categoria      ? query(collection(querydb, 'products'), where('category', '==', categoria), limit(10)) : collection(querydb, 'products');
    const resultado = await getDocs(queryCollection);
    const datos = resultado.docs.map((p) => ({ id: p.id, ...p.data() }));
    setItems(datos);
    setLoad(false);
  };

  useEffect(() => {
    getData(categoryId);
  }, [categoryId]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container">
        {load ? <Spinner /> : <ItemList data={items} />}
      </div>
    </div>
  );
};

export default ItemListContainer;