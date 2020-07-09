function renderIcons( selector, icons ) {
    const count = icons.length;
    const DOM = document.querySelector(selector);
    let HTML = ' ';

    DOM.innerHTML = ' ';

    for ( let i=0; i<count; i++ ) {
        const social = icons[i];
        HTML += '<a href="'+social.url+'" class="fa fa-'+social.icon+'"></a>';
     
    }

    return DOM.innerHTML = HTML;
  
}
export default renderIcons;