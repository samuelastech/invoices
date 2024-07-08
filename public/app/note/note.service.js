import { Maybe } from "../utils/maybe.js";
import { partialize, pipe } from "../utils/operators.js";
import { handleStatus } from "../utils/promise-helpers.js";

const API = 'http://localhost:3000/notas';

const getItemsFromNotes = (notesM) => notesM.map((notes) => notes.$flatMap((note) => note.itens));
const filterItemsByCode = (code, itemsM) => itemsM.map((items) => items.filter((item) => item.codigo === code));
const sumItemsValue = (itemsM) => itemsM.map((items) => items.reduce((total, item) => total + item.valor, 0));

export const notesService = {
  async listAll() {
    return fetch(API)
      .then(handleStatus)
      .then(Maybe.of);
  },

  async sumItens(code) {
    const filterItems = partialize(filterItemsByCode, code)
    const sumItens = pipe(getItemsFromNotes, filterItems, sumItemsValue);

    return this.listAll()
      .then(sumItens)
      .then(result => result.getOrElse(0))
      .catch(Promise.reject)
  }
};
