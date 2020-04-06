async function recipe() {
    let response = await fetch('receitas.json').then(Response => {
        return Response.json();
    }).then(data => {
        var styles = `
                dt { 
                    font-family: Georgia,Cambria,"Times New Roman",Times,serif;
                    font-size: 1.5rem;
                    text-align: center;
                }

                dd {
                    font-family: Georgia,Cambria,"Times New Roman",Times,serif;
                    margin: 16px 0px;
                    font-size: 1.1rem;
                    color: gray;
                    text-align: center;
                }

                img {
                    margin: 16px 50% 16px;
                    width: 10%;
                }
        `
        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = styles
       
        let lista = document.getElementById('recipes');

        for (var items of data.results) {
            let title = document.createElement('dt');
            title.appendChild(document.createTextNode(items.title));
            let ingredients = document.createElement('dd');
            ingredients.appendChild(document.createTextNode("Ingredients " + items.ingredients));     
            let url = document.createElement('dd');
            url.appendChild(document.createTextNode(items.href));
            var img = document.createElement("img");
            img.src = items.thumbnail;
            lista.appendChild(title);
            lista.appendChild(ingredients);
            lista.appendChild(url);
            lista.appendChild(img);
            lista.appendChild(styleSheet)
        }

    }).catch(error => console.error(error))
}
