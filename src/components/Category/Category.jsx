import { useEffect } from "react";
import { fetchCategory } from "../../store/slices/catalogSlice";
import { fetchProdsByCategory } from "../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const { catalogData } = useSelector((store) => store.catalog);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

const getCatalog = (id) => { 
    dispatch(fetchProdsByCategory(id));
}

  if (catalogData == null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white">
              Category
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {catalogData.slice(0, 4).map((el) => {
              return (
                <div key={el.id} className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-59 object-cover object-center mb-4"
                      src={el.image}
                    />
                    <div className="w-full">
                      <h2 onClick={()=>{
                        getCatalog(el.id)
                      }} 
                      className="title-font cursor-pointer font-medium text-lg text-white">
                        {el.name}
                      </h2>
                    </div>
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

export default Category;
