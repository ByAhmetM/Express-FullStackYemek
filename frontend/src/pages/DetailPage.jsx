import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegClock, FaTrashAlt } from "react-icons/fa";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import { toast } from "react-toastify";

const DetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:4000/api/recipes/${id}`)
      .then((res) => {
        setData(res.data.recipe);
        setErrorMsg(null);
      })
      .catch((err) => setErrorMsg(err.response.data.message))
      .finally(() => setIsLoading(false));
  }, []);

  const handleDelete = () => {
    if (confirm("Silmek istediğinizden emin misiniz ?")) {
      axios
        .delete(`http://127.0.0.1:4000/api/recipes/${id}`)
        .then(() => {
          toast.warn("Silme işlemi başarıyla gerçekleştirildi.");
          navigate("/");
        })
        .catch((err) =>
          toast.error("Silme işlemi sırasında bir sorun oluştu.")
        );
    }
  };

  return (
    <div className="flex-1 bg-gray-200 p-5 h-screen overflow-auto">
      <div className="flex justify-between">
        <Link
          to={-1}
          className="flex items-center gap-4 text-xl hover:bg-gray-400 p-1 rounded-md"
        >
          <IoMdArrowRoundBack />
          Geri
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-500 flex items-center gap-3 px-4 py-2 rounded-md text-white hover:bg-red-600 transition"
        >
          <FaTrashAlt /> Sil
        </button>
      </div>

      {isLoading ? (
        <Loader />
      ) : errorMsg ? (
        <Error errorMsg={errorMsg} />
      ) : (
        data && (
          <div className="max-w-5xl m-auto my-10 flex flex-col gap-10">
            <h1 className="text-3xl font-bold">{data.recipeName}</h1>
            <div className="flex gap-4">
              <span className="bg-orange-500 rounded-lg py-2 px-4 text-white font-semibold">
                {data.category}
              </span>

              <span className="bg-orange-500 rounded-lg py-2 px-4 text-white font-semibold flex items-center gap-3">
                <FaRegClock />
                {data.recipeTime}dk
              </span>
            </div>
            <img
              className="rounded-lg max-h-[400px]"
              src={data.image}
              alt={data.recipeName}
            />
            {/* Malzemeler */}
            <div>
              <h1 className="text-2xl font-bold">Malzemeler</h1>
              <ul className="font-semibold text-lg list-disc ms-4">
                {data.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
            {/* Tarifi */}
            <div>
              <h1 className="text-2xl font-bold my-4 text-red-400">Tarif</h1>
              <ol className="font-semibold text-lg list-decimal ps-4">
                {data.instructions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </div>
            {/* sunum */}
            <div>
              <h1 className="text-2xl font-bold mb-4 text-red-400">
                Sunum Önerisi
              </h1>
              <p className="font-semibold text-lg">{data.servingSuggestion}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DetailPage;
