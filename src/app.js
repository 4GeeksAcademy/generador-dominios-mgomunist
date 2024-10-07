/* eslint-disable */

import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Listas de pronombres, adjetivos y sustantivos
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];

  // Lista de extensiones
  let extensions = [".com", ".net", ".us", ".io"];

  // Lista de domain hacks
  let domainHacks = [".es", ".ly", ".to"];

  // Función para generar dominios
  function generateDomains() {
    let domainsList = ""; // Variable para almacenar los dominios generados

    // Generar combinaciones
    for (let pronoun of pronouns) {
      for (let adj of adjectives) {
        for (let noun of nouns) {
          // Extensiones estándar
          for (let ext of extensions) {
            const domain = `${pronoun}${adj}${noun}${ext}`;
            console.log(domain); // Imprimir dominio en consola
            domainsList += `<p>${domain}</p>`; // Agregar dominio a la lista
          }

          // Domain hacks
          for (let hack of domainHacks) {
            const domainHack = `${pronoun}${adj}${noun}${hack}`;
            console.log(domainHack); // Imprimir dominio hackeado en consola
            domainsList += `<p>${domainHack}</p>`; // Agregar dominio hackeado a la lista
          }
        }
      }
    }

    document.getElementById("domains").innerHTML = domainsList;
  }

  // Agregar evento al botón
  document
    .getElementById("generateButton")
    .addEventListener("click", generateDomains);

  console.log("Hello Rigo from the console!");
};
