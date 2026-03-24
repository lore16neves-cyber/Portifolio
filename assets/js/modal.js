function abrirModal(src, texto) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("imgModal").src = src;
    document.getElementById("legenda").innerText = texto;
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}