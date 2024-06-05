var annonceForm = document.getElementById("annonce-form");

annonceForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var titre = document.getElementById("titre-input").value;
  var conducteur = document.getElementById("conducteur-input").value;
  var date = document.getElementById("date-input").value;
  var places = document.getElementById("places-input").value;
  var prix = document.getElementById("prix").value;

  var annonce = {
    titre: titre,
    conducteur: conducteur,
    date: date,
    placesDisponibles: places,
    prix: prix,
  };

  console.log("Annonce déposée :", annonce);

  annonceForm.reset();

  alert("Votre annonce a été déposée avec succès !");
});
