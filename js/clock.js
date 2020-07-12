function renderClock ( selector) {
   const DOM = document.querySelector( selector );
   const time = [432, 9, 37, 39];
   const label = ['days', 'hours', 'minutes', 'seconds'];
   let HTML = ' ';

   for (let i=0; i < 4; i++) {
       HTML += `<div class="time">\
                    <div class="value">${time[i]}</div>\
                    <div class="label">${label[i]}</div>\
                </div>`;
   }

    return DOM.innerHTML = HTML;
}

export default renderClock;