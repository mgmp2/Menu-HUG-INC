var listaCoder = document.getElementById("coders");
var coders = ["Fiorella Quispe","Lulú Vilchez","Leidy Maldonado","Yessenia Huaman","Miriam Mendoza", "Elizabeth Condori",
"Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana :v", "Jenny Velasquez", "Nadia Cuadros",
"Mishel More", "Marilu Llamoca","Mariel García","Fiorella Cisneros", "Geraldine Chauca","Yelitza Choque","Stephanieh Iyagon",
"Emma Tapia","Dana Franco","Flor Retamozo", "Nathal Pacheco","Erika Vidal","Katherine Ortega","Brilly Majuan","Flor Cantuta",
"Leslie Aavendaño","Cindy Mendoza", "Annia Flores","Betsi Loayza","Ayda Sulca","Milagros Gutierrez","Nakarid Jave", "Angie Condor",
"Maia Rojas","Ariana Cabana","Flor Condori", "Mitchell Condori", "Naomi Villanueva","Mary Castillo","Myriam Peralta","Karin Alejo",
"Liliana Peña","Ruth Salvador", "Maribel :v","Wendy Reyes","Cynthia Quispe","MariaGrecia Cutipa","Ana Durand","Glisse Jorge","Neiza Nuñez",
"Sandra Solorzano"];


document.getElementById("toggle").addEventListener("click", function(e){
  e.preventDefault();
      document.getElementById("nav-header").classList.toggle("open");

  document.getElementById('body').classList.toggle("overflow-hidden");
})

var lastScrollTop = 0;
window.addEventListener("load", function (e){
  e.preventDefault();
  createLiPictures();

})
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
}, false);


function createLiPictures(){

  //   <div class="grid">
  //     <figure>
  //       <div CLASS ="SOMBRA">
  //       <img src="assets/img/students/5.png" alt="Fiorella Quispe">
  //       <figcaption class="center">
  //         <span>Fiorella Quispe</span>
  //       </figcaption>
  //     </figure>
  //   </div>
  for (var i = 1; i < 55; i++) {
    var grid = document.createElement("div");
    grid.setAttribute("class","grid");
    var fig = document.createElement("figure");
    /* start children*/
    var div = document.createElement("div");
    div.setAttribute("class","sombra");
    var img= document.createElement("img");
    img.setAttribute("src","assets/img/students/"+i+".png");
    img.setAttribute("alt",coders[i-1]);
    var figcap= document.createElement("figcaption");
    figcap.setAttribute("class","center");
    var span = document.createTextNode(coders[i-1]);
    /*finish childredn */
    figcap.appendChild(span);
    fig.appendChild(figcap);
    fig.appendChild(div);
    fig.appendChild(img);
    grid.appendChild(fig);
    listaCoder.appendChild(grid);
  };
}
