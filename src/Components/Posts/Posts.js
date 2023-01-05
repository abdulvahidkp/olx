import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import {ProductDetailsContext} from '../../store/ProductContext';

function  Posts() {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([])
  const history = useHistory();
  const {setProduct} = useContext(ProductDetailsContext)

  useEffect(() => {
    console.log('helo')
    firebase.firestore().collection('products').get().then(snapshot => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost);
    })
  }, [])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards" on>
          {
            products.map(product => {

              return <div className="card " onClick={()=>{
                setProduct(product)
                history.push('/singleProduct/')
                }}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.proPrice}</p>
                  <span className="kilometer">{product.proName}</span>
                  <p className="name"> {product.proCat}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            })

          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
