/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["Mi Perro", "Mi Abuela", "Mis tortugas", "Mis pajaros"];
  let action = ["ate", "peed", "crushed", "broker"];
  let what = ["my homework", "they keys", "the car"];
  let when = [
    "before the class",
    "rigth on time",
    "when i finished",
    "during my luch",
    "while i was praying"
  ];

  const getRandomElement = ListElements => {
    let element = "";
    element = ListElements[Math.floor(Math.random() * ListElements.length)];
    return element;
  };
  let excusegeneral = document.querySelector("#excuse");
  excusegeneral.innerHTML =
    getRandomElement(who) +
    " " +
    getRandomElement(action) +
    " " +
    getRandomElement(what) +
    " " +
    getRandomElement(when);
};
