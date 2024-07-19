import Alaskaimg from "../asset/img/Homeimg.jpg";
import axios from "axios";
export const Place = [{ chipid: 1, image: Alaskaimg, description: "", id: "" }];

export const data = async () => {
  const response = await axios
    .get("https://fakestoreapi.com/products/")
    .then((res) => console.log(res.data));
};
