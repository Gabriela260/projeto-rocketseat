function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* if(html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }  */

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver lightMode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //Se não tiver em lightMode manter a imagem raiz
    img.setAttribute("src", "./assets/avatar.png")
  }
  if(html.classList.contains("light")) {
    img.setAttribute("alt", "foto de perfil do light mode")
  } else {
    img.setAttribute("alt", "foto de perfil")
  }
} 