import './utils/array-helpers.js';
import { notesService as service } from "./note/note.service.js";
import { takeUntil, debounceTime } from './utils/operators.js';

const operation = takeUntil(3, () => {
  service.sumItens('2143')
    .then(console.log)
    .catch(console.error)
});

document.querySelector('#myButton').onclick = debounceTime(500, operation);