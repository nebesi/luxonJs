import {printOutput} from "./output.js";
import getDatesDiff from "./getDatesDiff.js";
import {printResult} from "./output.js";

const form  = document.getElementById("datecalc");

form.onsubmit = (event) => {
    event.preventDefault();

    const {firstDate, secondDate} = form.elements;

    if(!firstDate.value || !secondDate.value) {
        printOutput('ошибка');

        return;
    }

    const dateDiff = getDatesDiff({from: firstDate.value, to: secondDate.value})

    printResult(dateDiff);

}