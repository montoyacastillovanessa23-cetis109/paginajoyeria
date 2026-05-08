function abrirModal(img) {
    const modal = document.getElementById("modal");
    const imgGrande = document.getElementById("imgGrande");

    modal.style.display = "block";
    imgGrande.src = img.src;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function filtrar(categoria) {

    let items = document.querySelectorAll(".item");

    items.forEach(item => {

        if (categoria == "todo") {
            item.style.display = "block";
        }

        else if (item.classList.contains(categoria)) {
            item.style.display = "block";
        }

        else {
            item.style.display = "none";
        }

    });

}
