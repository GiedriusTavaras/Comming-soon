import renderIcons from './renderIcons.js';
import leftProgressBarss from '../data/progressBarss.js';
import socials from '../data/socials.js';
import renderClock from './/clock.js';
import renderProgressBarrs from './renderProgresBar.js';

renderIcons( '.icons-list', socials );
renderClock( '.clock');

renderProgressBarrs( '.column-left', leftProgressBarss);

