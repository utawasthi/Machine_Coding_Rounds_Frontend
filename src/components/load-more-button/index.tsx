import { useEffect, useState } from "react";

interface ProductType {
  id : number;
  title : string;
  images : string[];
}

export const LoadMoreButton = () => {

  const [products , setProducts] = useState<ProductType[]>([]);
  const [count , setCount] = useState(0);
  const [loading , setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count == 0 ? 0 : 20 * count}`);
        const data = await response.json();
        if(data){
          setProducts(
            (prev) => [...prev , ...data.products]
          );
        }
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }

    fetchProducts();
  } , [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  }

  console.log(products);

  return (
    <div className = 'p-3 m-3 flex flex-col justify-center items-center'>
      <h1 className = 'text-4xl text-center m-4 p-4 italic'>Load More Page</h1>
      <div className = 'grid grid-cols-12 gap-6 m-4 p-4'>
        {
          products && products.length > 0 && products.map((item) => (
            <div
              key = {item.id}
              className = 'col-span-4 md:col-span-3 shadow-xl'
            >
             <div className = 'text-xl font-light p-2 m-1 border-0'>
              {item.title}
             </div>
             <div>
              <img 
                src = {item.images[0]}
                className = 'h-50 w-50'
              />
             </div>
            </div>
          ))
        }
      </div>
      <button
        className = 'h-12 w-50 bg-amber-300 rounded-2xl cursor-pointer'
        onClick = {handleClick}
      >
        Load More Items
      </button>
    </div>
  )
}


// fetch('https://dummyjson.com/products?limit=10&skip=10')