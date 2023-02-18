function testAdmin(){
    const val = confirm('Etes vous un administrateur du site')
    if (val == true){
        motDePasseAdmin = prompt("Entrer le mot de passe: ")
        if(motDePasseAdmin == 'D@taCorp 12'){
            document.querySelector('.sectionadmin').style.display = 'block'
        }
        else{
            alert('mot de passe incorrect veuillez ressayer')
        }
    }
}
function fermer(){
    document.querySelector('.sectionadmin').style.display = 'none'
}