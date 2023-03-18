async function loadFile(file) {

  let text = await file.text();

  const text2 = JSON.stringify(text);
  const text3 = JSON.parse(text);

  //document.getElementById('output').textContent = text;
  // document.getElementById('output2').textContent = text2;

  let res = { ...text3 }


  for (let i = 100; i <= 300; i++) {
    let Poster = text3.Videos[i].SDPosterUrl;
    let Titulo = text3.Videos[i].Title;
    let laUrl = text3.Videos[i].StreamUrl;
    let Idioma = text3.Videos[i].Language;
    let Year = text3.Videos[i].ReleaseDate;

    if (Idioma === "Espanol" || Idioma === "Dual Audio" || Idioma === "Ingles") {

      var image = new Image();

      // Set the source and alt attributes
      
      if (Poster.value === "" || Poster.value === null){
        image.src = "https://drm2ecjli5gr8.cloudfront.net/efectos/grandes/interviu.jpg";
      }
      else{
        image.src = `${Poster}\n`;
        image.alt = Titulo;
        
      }
      

      // Set the width and height attributes (optional)
      image.width = 200;
      image.height = 300;

      // Get a reference to the image container element

      document.getElementById('output').textContent +=
      `${i} ${Titulo}\n`;
      // Append the image element to the container
        var container = document.getElementById("image-container");
        container.appendChild(image);
      



     

    }
  }


  console.log(typeof (text));
  console.log(typeof (text2));
  console.log(typeof (text3));
  console.log(typeof (res));
}

  //console.log(text2[10][Description]);



