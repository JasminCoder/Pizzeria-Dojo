//funcion pizzaOven
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    return pizza;
}
var ing = pizzaOven("crocante", "tomate", "cheddar", ["ajo", "barbacoa", "inglesa"]);
console.log(ing);



//crear pizza estilo chicago, tradicional, [mozzarella] y [pepperoni. salchicha]
var pizza = {
    estilo: "chicago",
    sabor: "tradicional",
    queso: ["mozzarella"],
    extras: ["pepperoni", "salchichas"]
};
console.log(pizza);



//crear una pizza con lanzada a mano, marinara, [mozzarella y feta] [champiñones, aceitunas, cebollas]
var pizzaHorno = {
    preparacion: "lanzada a mano",
    estilo: "marinara",
    quesos: ["mozzarella", "feta"],
    adheresos: ["champiñones", "aceitunas", "cebollas"]
}
console.log(pizzaHorno);



//crear 2 pizzas
var miniPizza = {
    masa: "especial",
    sabor: "alemana",
    extras: ["aceitunas", "tocino", "choclo"],
}
console.log(miniPizza);


var pizzaDeli = {
    corteza: ["normal", "crocante"],
    sabor: "napolitana",
    queso: "cheddar",
    estras: ["tomate", "pimenton", "pollo", "tocino"]
}
console.log(pizzaDeli);
































