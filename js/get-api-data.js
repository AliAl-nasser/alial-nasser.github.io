export function fetchMatches() {
    fetch('https://f421a18b-f3a3-470c-a2f0-92867fda0547.mock.pstmn.io/menus')
    .then(Response => Response.json())
    .then(data => handleData(data))
    .catch(error => console.error('error: ' + error));
}

function handleData(data) {
    console.debug(data)
    const pizza = data.Pizza;
    const drinks = data.Drinks
    const row1 = [];
    var x = 0;
    var y = 0;
    const row2 = [];
    var k = 0;
    var j = 0;
    const pizzatable = document.getElementById('pizza')
    const drinkstable = document.getElementById('drinks')
    for (var i=0; i < pizza.length; i++) {
        var tr = document.createElement("tr");
        row1.push(tr)
        pizzatable.appendChild(tr);
        var td1 =document.createElement("td");
        var td2 =document.createElement("td");
        var td3 =document.createElement("td");

        if(pizza[i].type == "Napoletana") {
            td1.innerHTML += '<h3>' +pizza[i].name+' ' + pizza[i].price + '</h3><p>'+ pizza[i].ingredients +'</p>';
            tr.appendChild(td1)
        }
        else if(pizza[i].type == "Alla Palla") {
            td2.innerHTML += '<h3>' +pizza[i].name+' ' + pizza[i].price + '</h3><p>'+ pizza[i].ingredients +'</p>';
            row1[x].appendChild(td2)
            x++;
        }
        else if (pizza[i].type == "Siciliana") {
            td3.innerHTML += '<h3>' +pizza[i].name+' ' + pizza[i].price + '</h3><p>'+ pizza[i].ingredients +'</p>';
            row1[y].appendChild(td3)
            y++;
        }
    }

    for (var z=0; z < drinks.length; z++) {
        var tr = document.createElement("tr");
        row2.push(tr)
        drinkstable.appendChild(tr);
        var td1 =document.createElement("td");
        var td2 =document.createElement("td");
        var td3 =document.createElement("td");

        if(drinks[z].type == "Cocktail") {
            td1.innerHTML += '<h3>' +drinks[z].name+' ' + drinks[z].price + '</h3>';
            tr.appendChild(td1)
        }
        else if(drinks[z].type == "Beer") {
            td2.innerHTML += '<h3>' +drinks[z].name+' ' + drinks[z].price + '</h3>';
            row2[k].appendChild(td2)
            k++;
        }
        else if (drinks[z].type == "Non alcoholic") {
            td3.innerHTML += '<h3>' +drinks[z].name+' ' + drinks[z].price + '</h3>';
            row2[j].appendChild(td3)
            j++;
        }
    }
}
