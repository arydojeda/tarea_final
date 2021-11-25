function openCity(evt, cityName) {
  // Decalro las variable
  var i, tabcontent, tablinks;

  // obtengo elementos de la class="tabcontent" y los oculto
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // obtengo todos los elementos de la clase class="tablinks" y les quito la clase "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // muestro el tab activo, y le agrego la clase "active" al boton para que abra el tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
