//require('./styles/css/default.css');
import '@scss/index.scss';
import '@scss/_variables.scss';

import Logo from './static/images/logo-from-url-loader.jpg'
function writecom() {
    let element = document.createElement('div');
    element.innerHTML = 'Hello Webpack';
    let myLogo = new Image();
    myLogo.src = Logo;
    element.appendChild(myLogo);
    return element;
}
 
document.body.appendChild(writecom());
