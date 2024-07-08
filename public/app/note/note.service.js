import { handleStatus } from "../utils/promise-helpers.js";

const API = 'http://localhost:3000/notas';

const sumItens = (code) => (notes) => {
  return notes
    .$flatMap((note) => note.itens)
    .filter((item) => item.codigo === code)
    .reduce((total, item) => total + item.valor, 0);
}

export const notesService = {
  async listAll() {
    return fetch(API).then(handleStatus);
  },

  async sumItens(code) {
    return this.listAll().then(sumItens(code));
  }
};
