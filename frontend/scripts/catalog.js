async function loadCatalog() {
    const response = await fetch("http://localhost:8000/flowers/");
    const flowers = await response.json();
    const catalog = document.getElementById("catalog");
    flowers.forEach((flower) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${flower.name}</h3>
            <img src="${flower.image_url}" alt="${flower.name}">
            <p>${flower.description}</p>
            <p>Price: $${flower.price}</p>
            <p>Rating: ${flower.rating}</p>
        `;
        catalog.appendChild(div);
    });
}

loadCatalog();
