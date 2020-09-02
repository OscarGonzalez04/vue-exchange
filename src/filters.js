//Archivo que contendra los filtros que aplicaremos en toda la pagina web
import numeral from "numeral";

const dollarFilter = function(value){
    if(!value){
        return "$ 0";
    }
    return numeral(value).format('$ 0.00a');
}

const percentFilter = function(value){
    if(!value){
        return "0%";
    }
    return `${Number(value).toFixed(2)}%`;
}

export { dollarFilter, percentFilter }
//Para poder usar estos filtros los tengo que importar en main.js y agregarlos de forma global con Vue.filter