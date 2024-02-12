import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from ".././store/slices/productsSlice";
import { useNavigate } from "react-router-dom";



const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { productsData } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (productsData == null) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {productsData?.slice(0, 12).map((prod) => {
              return (
                <div 
                onClick={() => {
                  navigate(`/product/${prod.id}`)
                }}
                key={prod.id} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                    <img
                      className="h-400 rounded w-full object-cover object-center mb-6"
                      src={prod.images[0]}
                      alt="content"
                    />  
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Chichen Itza
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
