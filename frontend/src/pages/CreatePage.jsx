import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactSelect from "react-select/creatable";
import axios from "axios";
import { toast } from "react-toastify";

const CreatePage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let newRecipe = Object.fromEntries(formData.entries());
    newRecipe = {
      ...newRecipe,
      ingredients,
      instructions,
      image: `https://picsum.photos/4${Math.floor(Math.random() * 89) + 10}`,
    };

    axios
      .post("http://127.0.0.1:4000/api/recipes", newRecipe)
      .then((res) => {
        toast.success("Tarif başarıyla oluşturuldu.");
        navigate("/");
      })
      .catch((err) => toast.error("Tarif oluşturma başarısız"));
  };

  return (
    <div className="flex-1 bg-gray-300 p-4 h-screen overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl m-auto my-10 flex flex-col gap-10"
      >
        <h1 className="text-3xl font-bold text-red-400">Yeni Tarif Oluştur</h1>

        <div className="flex flex-col gap-3">
          <label className="font-semibold">Tarif Başlığı</label>
          <input
            className="rounded-md p-2 focus:outline-red-400"
            name="recipeName"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-semibold">Tarif Kategorisi</label>
          <input
            className="rounded-md p-2 focus:outline-red-400"
            name="category"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-semibold">Tarif Süresi</label>
          <input
            className="rounded-md p-2 focus:outline-red-400"
            name="recipeTime"
            min={3}
            max={500}
            type="number"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-semibold">Malzemeler</label>
          <ReactSelect
            onChange={(options) => {
              const refined = options.map((opt) => opt.label);
              setIngredients(refined);
            }}
            isMulti
            required
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-semibold">
            Tarif Adımları(Sırasına Dikkat Edin)
          </label>
          <ReactSelect
            onChange={(options) => {
              const refined = options.map((opt) => opt.label);
              setInstructions(refined);
            }}
            isMulti
            required
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-semibold">Sunum Önerisi</label>
          <textarea
            name="servingSuggestion"
            className="p-2 rounded-md max-h-[250px] min-h-[100px]"
            required
          ></textarea>
        </div>

        <div className="flex justify-end gap-6">
          <Link
            to={"/"}
            className="bg-gray-400 px-4 py-2 rounded-md text-white font-semibold text-lg transition hover:bg-gray-500"
          >
            İptal
          </Link>
          <button
            type="submit"
            className="bg-red-400 px-4 py-2 rounded-md text-white font-semibold text-lg transition hover:bg-gray-500"
          >
            Oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
