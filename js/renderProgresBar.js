function renderProgressBarrs (selector, data) {
    if (typeof selector !== 'string' ||
        selector.length < 1) {
            return console.error('ERROR: have to pass non empty string selector value');
        }
        const DOM = document.querySelector(selector);
        if ( !DOM ) {
            return console.error( 'ERROR: selectrod not existe');
        }

    if (typeof data !== 'object') {
        return console.error('ERROR: data has to be an object type');
    }
    if (!Array.isArray(data)) {
        data = [data];
    }
    const size = data.length;
    let HTML = '';
    for( let i = 0; i < size; i++) {
        const progressBarr = data[i];
        if (typeof progressBarr.title !== 'string' ||
            progressBarr.title.length < 1) {
            console.error('ERROR');
            continue;
        } 
        if (typeof progressBarr.value !== 'number' ||
            !isFinite(progressBarr.value)  ||
            progressBarr.value < 0 ||
            progressBarr.value > 100 ) {
            console.error('ERROR');
             continue;
        }


        HTML += `<div class="progres-bar">
                <div class="top">
                    <div class="label">${progressBarr.title}</div>
                    <div class="value">${progressBarr.value}%</div>
                </div>
                <div class="bar">
                    <div class="fill" style="width: ${progressBarr.value}%></div>
                    <div class="loading"></div>
                </div>
            </div>`;
    }
    
    return DOM.insertAdjacentHTML( 'beforeend', HTML);
}

export default renderProgressBarrs;