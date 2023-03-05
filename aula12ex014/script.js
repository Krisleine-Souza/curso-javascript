function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 15//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#fade91'
    } else if (hora < 18) {
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#ff9b51'
    } else {
        //Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#744a71'
    }
}
