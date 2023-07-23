function validationForm() {
    let validationCod = document.forms ["register"]["cod"].value;
    let validationTitle = document.forms ["register"]["title"].value;
    let validationCapa = document.forms ["register"]["capa"].value;
    let validationDirector = document.forms ["register"]["director"].value;
    let validationDate = document.forms ["register"]["date"].value;
    let validationRadio = document.forms ["register"]["radio"].value;
    let validationActor = document.forms ["register"]["actor"].value;
    let validationNote = document.forms ["register"]["note"].value;

   if(validationCod == "") {alert("O código deve ser preenchido"); return false;}
   if(validationTitle == "") {alert("O título do filme deve ser preenchido"); return false;}
   if(validationCapa == "") {alert("O link da imagem da capa deve ser preenchido"); return false;}
   if(validationDirector == "") {alert("O nome do Diretor deve ser preenchido"); return false;}
   if(validationDate == "") {alert("A data de lançamento deve ser preenchida"); return false;}
   if(validationRadio == "") {alert("O gênero do filme deve ser selecionado"); return false;}
   if(validationActor == "") {alert("O nome do ator/atriz principal deve ser preenchido"); return false;}
   if(validationNote == "") {alert("A nota IMDB deve ser preenchida"); return false;}
    
   console.log("A validação ocorreu de forma correta")
    alert("O filme foi adicionado")
}

function insert() {
    let cod = document.forms ["register"]["cod"].value;
    let title = document.forms ["register"]["title"].value;
    let capa = document.forms ["register"]["capa"].value;
    let director = document.forms ["register"]["director"].value;
    let date = document.forms ["register"]["date"].value;
    let radio = document.forms ["register"]["radio"].value;
    let actor = document.forms ["register"]["actor"].value;
    let note = document.forms ["register"]["note"].value;

    let insert = window.document.getElementById("insertRow");
    insert.innerHTML =  `<th scope="row">${cod}</th>
    <td> ${title} </td> 
    <td> ${capa} </td> 
    <td> ${director} </td> 
    <td> ${date} </td> 
    <td> ${radio} </td> 
    <td> ${actor} </td> 
    <td> ${note} </td>  
    `;
}