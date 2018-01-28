var config = require("./config.json");
import styles from './greeter.css';//导入

module.exports = function(){
    var greet = document.createElement("div");
    greet.textContent = config.greetText;
    var divs = document.createElement("div");
    divs.className = styles.root;
    divs.textContent = "this div with root class!";
    greet.appendChild(divs);
    return greet;
}
