import './utils/array-helpers.js';
import { notesService as service } from "./note/note.service.js";
import { takeUntil, debounceTime } from './utils/operators.js';
import { retry, timeoutPromise } from './utils/promise-helpers.js';
import { EventEmitter } from './utils/event-emitter.js';

const operation = takeUntil(3, () => {
  retry(3, 3000, timeoutPromise(500, service.sumItens('2143')))
    .then((total) => EventEmitter.emit('totalItens', total))
    .catch(console.error)
});

document.querySelector('#myButton').onclick = debounceTime(500, operation);