import { useEffect, useState } from "react";
import Sidebar from "./../components/Sidebar";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import Card from "./../components/Card";
const MainPage = () => {
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:4000/api/recipes`)
      .then((res) => {
        setData(res.data);
        setErrorMsg(null);
      })
      .catch((err) => setErrorMsg(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-300 p-4">
        <section className="p-4">
          <div className="bg-white flex gap-3 p-2 rounded-lg overflow-hidden items-center">
            <CiSearch className="text-2xl" />
            <input className="w-full outline-none" type="text" />
          </div>
        </section>

        <section className="mt-5">
          {isLoading ? (
            <Loader />
          ) : errorMsg ? (
            <Error errorMsg={errorMsg} />
          ) : (
            data && (
              <>
                <h1 className="text-3xl">{data.results} Tarif bulundu.</h1>

                <div>
                  {data.recipes.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              </>
            )
          )}
        </section>
      </main>
    </div>
  );
};

export default MainPage;
