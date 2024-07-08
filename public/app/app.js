import './utils/array-helpers.js';
import { notesService as service } from "./note/note.service.js";
import { takeUntil, debounceTime } from './utils/operators.js';
import { timeoutPromise } from './utils/promise-helpers.js';

const operation = takeUntil(3, () => {
  timeoutPromise(500, service.sumItens('2143'))
    .then(console.log)
    .catch(console.error)
});

document.querySelector('#myButton').onclick = debounceTime(500, operation);