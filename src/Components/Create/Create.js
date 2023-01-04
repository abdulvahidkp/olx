import React, { Fragment ,useState, useContext} from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

const Create = () => {

  const {firebase} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext);
  const history = useHistory();

  const [proName,setProName] = useState('');
  const [proCat,setProCat] = useState('');
  const [proPrice,setProPrice] = useState('');
  const [proImage,setProImage] = useState(null);
  const date = new Date()
  const handleSubmit = ()=>{
     firebase.storage().ref(`/image/${proImage.name}`).put(proImage).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          proName,
          proCat,
          proPrice,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        history.push('/')
      })
     })
  }

  return (  
    <Fragment>
      <Header />
        <div className="centerDiv">
            <label htmlFor="productName">Product Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="productName"
              name="productName"
              value={proName}
              onChange={(e) => setProName(e.target.value)}
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category" 
              name="category"
              value={proCat}
              onChange={(e) => setProCat(e.target.value)}
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input className="input" type="number" id="price" name="Price" value={proPrice} onChange={(e) => setProPrice(e.target.value)}/>
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={ proImage ? URL.createObjectURL(proImage) :""}></img>
            <br />
            <input type="file" accept="image/png, image/gif, image/jpeg" onChange={(e)=>setProImage(e.target.files[0])} />
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
          
        </div>
    </Fragment>
  );
};

export default Create;
