import { getCharacters } from './../services/networking/character.services';
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
      name: string;
      url: string;
  };
  location: {
      name: string;
      url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface getCharactersType {
  info: {
    count: number;
    next: string
    pages: number;
    prev: null | string;
  }
  result: Character[]
}