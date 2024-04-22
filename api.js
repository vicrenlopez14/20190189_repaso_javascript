const getRazas = async () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    const response = await fetch("https://dogapi.dog/api/v2/breeds", requestOptions);
    const result = await response.json();

    console.log(result.data)

    //     Extract the data from the response
    return result.data;
}

const mostrarRazas = async () => {
    const razas = await getRazas();
    const container = document.getElementById("perros-contenedor");
    razas.forEach((raza) => {
        const razaElement = document.createElement("div");
        razaElement.innerHTML = `
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">${raza.attributes.name}</h2>
                <p>${raza.attributes.description}</p>
                <div class="card-actions justify-end">
                <p>Edad máxima</p>
                    <button class="btn btn-primary">${raza.attributes.life.max}</button>
                </div>
            </div>
        </div>
        `;
        container.appendChild(razaElement);
    });

}

mostrarRazas();