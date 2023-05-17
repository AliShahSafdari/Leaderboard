import './style.css';
import displayRanks from '../module/reload.js';
import addFunction from '../module/add.js';
import Selector from '../module/selector.js';

const objSelector = new Selector();

objSelector.jsForm.addEventListener('submit', (e) => {
    addFunction(e)
});
objSelector.refresh.addEventListener('click', displayRanks);

window.onload = displayRanks;