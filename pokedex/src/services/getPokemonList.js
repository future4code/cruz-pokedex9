import axios from "axios";
import { UrlApi } from "./config/configAPI";
import { getPokemonDetails } from "./getPokemonDetails";

export const getPokemonList = async () => {
  try {
    const response = await axios.get(`${UrlApi}`);
    const data = Promise.all(
      response.data.results.map(async (item) => {
        const id = item.url.split("/")[6];
        const details = await getPokemonDetails(id);

        return {
          id,
          name: item.name,
          details,
        };
      })
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
