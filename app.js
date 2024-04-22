const plantillaRealMadrid2017 = [
    {
        nombre: "Keylor Navas",
        posicion: "Portero",
        nacionalidad: "Costa Rica"
    },
    {
        nombre: "Kiko Casilla",
        posicion: "Portero",
        nacionalidad: "España"
    },
    {
        nombre: "Luca Zidane",
        posicion: "Portero",
        nacionalidad: "Francia"
    },
    {
        nombre: "Dani Carvajal",
        posicion: "Defensa",
        nacionalidad: "España"
    },
    {
        nombre: "Jesús Vallejo",
        posicion: "Defensa",
        nacionalidad: "España"
    },
    {
        nombre: "Sergio Ramos",
        posicion: "Defensa",
        nacionalidad: "España"
    },
    {
        nombre: "Raphaël Varane",
        posicion: "Defensa",
        nacionalidad: "Francia"
    },
    {
        nombre: "Marcelo",
        posicion: "Defensa",
        nacionalidad: "Brasil"
    },
    {
        nombre: "Nacho Fernández",
        posicion: "Defensa",
        nacionalidad: "España"
    },
    {
        nombre: "Toni Kroos",
        posicion: "Mediocampista",
        nacionalidad: "Alemania"
    },
    {
        nombre: "Casemiro",
        posicion: "Mediocampista",
        nacionalidad: "Brasil"
    },
    {
        nombre: "Luka Modrić",
        posicion: "Mediocampista",
        nacionalidad: "Croacia"
    },
    {
        nombre: "Marco Asensio",
        posicion: "Mediocampista",
        nacionalidad: "España"
    },
    {
        nombre: "James Rodríguez",
        posicion: "Mediocampista",
        nacionalidad: "Colombia"
    },
    {
        nombre: "Isco",
        posicion: "Mediocampista",
        nacionalidad: "España"
    },
    {
        nombre: "Lucas Vázquez",
        posicion: "Mediocampista",
        nacionalidad: "España"
    },
    {
        nombre: "Cristiano Ronaldo",
        posicion: "Delantero",
        nacionalidad: "Portugal"
    },
    {
        nombre: "Karim Benzema",
        posicion: "Delantero",
        nacionalidad: "Francia"
    },
    {
        nombre: "Gareth Bale",
        posicion: "Delantero",
        nacionalidad: "Gales"
    },
    {
        nombre: "Álvaro Morata",
        posicion: "Delantero",
        nacionalidad: "España"
    },
    {
        nombre: "Mariano Díaz",
        posicion: "Delantero",
        nacionalidad: "República Dominicana"
    }
];

const jugadoresContenedor = document.getElementById("jugadores-contenedor");
plantillaRealMadrid2017.forEach(jugador => {
    const jugadorElemento = document.createElement("div");
    jugadorElemento.classList.add("jugador");
    jugadorElemento.innerHTML = `
<div class="card card-compact w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">${jugador.nombre}</h2>
                <p>${jugador.nacionalidad}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">${jugador.posicion}</button>
                </div>
            </div>
        </div>
            `;
    jugadoresContenedor.appendChild(jugadorElemento);
});

