var annonces = [
  {
    titre: "Agadir - Marrakech",
    conducteur: "Mohammed Benmoumen",
    date: "2023-05-26",
    placesDisponibles: 1,
    prix: 100,
  },
  {
    titre: "Fes - Marrakech",
    conducteur: "Mohammed Benmoumen",
    date: "2023-05-26",
    placesDisponibles: 4,
    prix: 1000.12,
  },
  {
    titre: "Marrakech - Casablanca",
    conducteur: "Samir Moumsik",
    date: "2023-05-26",
    placesDisponibles: 3,
    prix: 900,
  },
  {
    titre: "Errachidia - Fes",
    conducteur: "Aymane Berrada",
    date: "2023-05-26",
    placesDisponibles: 2,
    prix: 300,
  },
  {
    titre: "Rabat - Tetouan",
    conducteur: "Othmane Benchekroun",
    date: "2023-05-26",
    placesDisponibles: 1,
    prix: 700,
  },
  {
    titre: "Taza - Taounate",
    conducteur: "Youssef Bensouoda",
    date: "2023-05-26",
    placesDisponibles: 4,
    prix: 500,
  },
  {
    titre: "Tetouan - Fes",
    conducteur: "Hamid Slaoui",
    date: "2023-05-26",
    placesDisponibles: 4,
    prix: 600,
  },
  {
    titre: "Rabat - Agadir",
    conducteur: "Amine Aferiad",
    date: "2023-05-26",
    placesDisponibles: 2,
    prix: 700,
  },
  {
    titre: "Casablanca - Fes",
    conducteur: "Siham Jabri",
    date: "2023-05-26",
    placesDisponibles: 3,
    prix: 500,
  },
  {
    titre: "Taounate - Taza",
    conducteur: "Omar Jamali",
    date: "2023-05-26",
    placesDisponibles: 1,
    prix: 300,
  },
  {
    titre: "Agadir - Marrakech",
    conducteur: "Mehdi Akesbi",
    date: "2023-05-26",
    placesDisponibles: 3,
    prix: 200,
  },
];
var annoncesContainer = document.getElementById("annonces-container");

function afficherAnnonces(annonces) {
  // Efface les annonces précédentes
  annoncesContainer.innerHTML = "";

  annonces.forEach(function (annonce) {
    var annonceElement = document.createElement("div");
    annonceElement.classList.add("annonce");

    var titreElement = document.createElement("h2");
    titreElement.textContent = annonce.titre;

    var conducteurElement = document.createElement("p");
    conducteurElement.textContent = "Conducteur : " + annonce.conducteur;

    var dateElement = document.createElement("p");
    dateElement.textContent = "Date : " + annonce.date;
    var placesElement = document.createElement("p");
    placesElement.textContent =
      "Places disponibles : " + annonce.placesDisponibles;
    var priceElement = document.createElement("p");
    priceElement.textContent = "Prix : " + annonce.prix + " $";

    var reserveButton = document.createElement("button");
    reserveButton.textContent = "Réserver";
    reserveButton.classList.add("btn", "success");

    annonceElement.appendChild(titreElement);
    annonceElement.appendChild(conducteurElement);
    annonceElement.appendChild(dateElement);
    annonceElement.appendChild(placesElement);
    annonceElement.appendChild(priceElement);
    annonceElement.appendChild(reserveButton);

    annoncesContainer.appendChild(annonceElement);
  });
}

afficherAnnonces(annonces);

var villes = [
  "Agadir",
  "Casablanca",
  "Fes",
  "Marrakech",
  "Rabat",
  "Errachidia",
  "Tetouan",
  "Tangier",
  "Kenitra",
  "Taza",
  "Taounate",
];

function createOptions(selectElement, options) {
  options.forEach(function (option) {
    var optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.text = option;
    selectElement.appendChild(optionElement);
  });
}

var departureSelect = document.getElementById("departure-input");
var destinationSelect = document.getElementById("destination-input");

// Remplissez les options des listes déroulantes avec les villes du Maroc
createOptions(departureSelect, villes);
createOptions(destinationSelect, villes);

var searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function () {
  var departure = departureSelect.value;
  var destination = destinationSelect.value;
  var date = document.getElementById("date-input").value;
  var passengers = document.getElementById("passengers-input").value;

  var annoncesFiltrees = annonces.filter(function (annonce) {
    return (
      annonce.titre.toLowerCase().includes(departure.toLowerCase()) &&
      annonce.titre.toLowerCase().includes(destination.toLowerCase()) &&
      annonce.date === date &&
      annonce.placesDisponibles >= passengers
    );
  });

  afficherAnnonces(annoncesFiltrees);
});
