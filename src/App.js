import './App.css';
import { Header, Rout, Footer} from '../src/component/index'
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HomeProdects from './component/Homeprodect/homprodect';



// add to cart
    

function App() {
  // shop page prodect
  const [shop, setshop]= useState(HomeProdects) 
  const [Search, setSearch] = useState('')
  const [cart, setcart] = useState ([])
  // const navigate = useNavigate()


   // shop filter

   const Filter = (x) =>{
    const catefilter = HomeProdects.filter((prodect) =>{
        return prodect.cat === x
    })
    setshop(catefilter)
}

const allproduct = () =>{
    setshop(HomeProdects)
}

// search filter

const searchlenght = (Search || []).length === 0
const searchproduct = () =>{
  if (searchlenght) {
    alert("Please Search Something !" )
    setshop(HomeProdects)
  }else{
  
      const searchfilter = HomeProdects.filter((x) =>{
        return x.cat === Search
      })
      setshop(searchfilter)
  
  }

}

// add to cart

const addtocart = (product) =>{
if (localStorage.getItem("name")) {
    const exist = cart.find((ele) => {
      return ele.id === product.id
    })
    if (exist) {
      alert("This Product Is Already In Your Cart")
    }else{
      setcart([...cart, {...product, qty:1}])
       alert('added')
    }
  
  }else {
    alert("Register first to can buy your products")
    // navigate("/login")
  }
} 

// const addtocart = (product) =>{
//   const exist = cart.find((ele) => {
//     return ele.id === product.id
//   })
//   if (exist) {
//     alert("This Product Is Already In Your Cart")
//   }else{
//     setcart([...cart, {...product, qty:1}])
//      alert('added')
//   }

// }

  
  return (
    <div className="App">
    <BrowserRouter>
     <Header Search= {Search} setSearch= {setSearch} searchproduct ={searchproduct}/>
     <Rout shop={shop} Filter={Filter} allproduct={allproduct} addtocart= {addtocart} cart={cart} setcart={setcart}/>
     <Footer/>
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
