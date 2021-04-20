import axios from "axios";
import { UrlApi } from "./config/configAPI";

export const getPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${UrlApi}/${id}/`);

    return filterData(response.data);
  } catch (error) {
    console.log(error);
  }
};

const filterData = (datas) => {
  const { moves, stats, types, sprites } = datas;

  const movesArray = moves.length <= 5 ? moves : moves.slice(0, 5);

  const attack = movesArray.map((item) => {
    return item.move.name;
  });

  const attributes = stats.map((item) => {
    const name = item.stat.name;
    const value = item.base_stat;
    return { name, value };
  });

  const elements = types.map((item) => {
    return item.type.name;
  });

  const { back_default, front_default } = sprites;

  const photos = {
    front: front_default,
    back: back_default,
  };

  return {
    attack,
    attributes,
    elements,
    photos,
  };
};
