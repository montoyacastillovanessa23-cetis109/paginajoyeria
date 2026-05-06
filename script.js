function abrirModal(img) {
    const modal = document.getElementById("modal");
    const imgGrande = document.getElementById("imgGrande");

    modal.style.display = "block";
    imgGrande.src = img.src;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}