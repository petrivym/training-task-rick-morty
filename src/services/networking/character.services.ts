import { ROUTES, httpMethods } from "../../constants";
import { getCharactersType } from "../../types";
import { makeRequest, rickAndMortyApi } from "./apis";

export const getCharacters:getCharactersType = makeRequest<getCharactersType>(httpMethods.get, rickAndMortyApi, ROUTES.characters())