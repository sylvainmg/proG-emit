const button = document.querySelector("button");

button.onclick = () => {
  const choice = confirm("Voulez-vous quitter la page pour voir la vidéo ?");
  if (choice) {
    window.open("https://youtu.be/IOb5uric4n0?si=TKSqOigk6SR6Zzr1");
  } else {
    return;
  }
};
