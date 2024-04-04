import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/api/recipes/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div className="flex-1 bg-gray-200"></div>;
};

export default DetailPage;
