import { partialize, compose, pipe } from "../utils/operators.js";
import { handleStatus } from "../utils/promise-helpers.js";

const API = 'http://localhost:3000/notas';

const getItemsFromNotes = (notes) => notes.$flatMap((note) => note.itens);
const filterItemsByCode = (code, items) => items.filter((item) => item.codigo === code);
const sumItemsValue = (items) => items.reduce((total, item) => total + item.valor, 0);

export const notesService = {
  async listAll() {
    return fetch(API).then(handleStatus);
  },

  async sumItens(code) {
    const filterItems = partialize(filterItemsByCode, code)
    const sumItens = pipe(getItemsFromNotes, filterItems, sumItemsValue);

    return this.listAll()
      .then(sumItens)
      .catch(Promise.reject)
  }
};
