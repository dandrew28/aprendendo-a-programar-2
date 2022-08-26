let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


let roupa = "camiseta"

if (produtoA.internacional == true ) {
         let acrescimo = 100 * 1.2
    console.log (`A ${roupa} que custa ${acrescimo} é internacional` )
}   else {
        let acrescimo1 = 100 * 1.12
    console.log (`A ${roupa} que custa ${acrescimo1} é nacional` )
}

let roupa1 = "perfume"

if (produtoB.internacional == true ) {
         let acrescimo2 = 200 * 1.2
    console.log (`A ${roupa1} que custa ${acrescimo2} é internacional` )
}   else {
        let acrescimo3 = 200 * 1.12
    console.log (`O ${roupa1} que custa ${acrescimo13} é nacional` )
}

let roupa2 = "sandália"

if (produtoA.internacional == false ) {
         let acrescimo4 = 100 * 1.2
    console.log (`A ${roupa2} que custa ${acrescimo4} é internacional` )
}   else {
        let acrescimo5 = 100 * 1.12
    console.log (`A ${roupa2} que custa ${acrescimo5} é nacional` )
}
