import { createContext, useState } from "react";

export const ProductDetailsContext = createContext(null)

export default function ProductContext({children}){

    const [product,setProduct] = useState(null)
    return(
        <ProductDetailsContext.Provider value={{product,setProduct}}>
            {children}
        </ProductDetailsContext.Provider>
    )
}
