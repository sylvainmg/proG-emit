// Animation d'apparition de la carte recette
window.addEventListener("load", () => {
    const card = document.querySelector(".recipe-card");

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
        card.style.transform = "0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 300);
});