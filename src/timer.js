
function initField(el) {
    const form = document.getElementById(el);
    return form
};

function stop(timerId) {
    clearInterval(timerId)
}

function start(el) {
    let timerId = setInterval(() => {
        el.value--;
        if(el.value < 1) {
            el.value = 0;
            stop(timerId)
        }
    }, 1000)
}

export {initField, stop, start}