import React, { useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import { ProductDetailsContext } from '../../store/ProductContext';

import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState()
  const { product } = useContext(ProductDetailsContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    const { userId } = product
    firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
      res.forEach(doc => {
        console.log(doc.data());
        setUserDetails(doc.data())
      });
    })
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={product.url}
          alt="productImage"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product.proPrice} </p>
          <span>{product.proName}</span>
          <p>{product.proCat}</p>
          <span>{product.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          { userDetails && <div><p>{userDetails.username}</p>
          <p>{userDetails.phone}</p></div>}
        </div>
      </div>
    </div>
  );
}
export default View;
