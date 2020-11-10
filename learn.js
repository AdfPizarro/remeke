$( document ).ready(function() {

draw(getTags(dictionary));
 $(".carousel").hide();
// drawPractice();
});

var allTags=[];
var carrouselIndex=0;
var currentList=[];

function resetCarrousel(){
  carrouselIndex=0;
  while (currentList.length) {
    currentList.pop();
  }
  while (allTags.length) {
    allTags.pop();
  }
  draw(getTags(dictionary));
   $(".carousel").hide();
}

function display(id){
  console.log(allTags[id]);
  $(".card").hide();
  $(".notes").hide();

 getWords(id);

 $(".carousel").show();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function drawPractice(){
  $(".back").hide();
  $(".next").hide();

  var x=getRandomArbitrary(0,currentList.length);

  var number="Selecciona la opcion que corresponda con la traduccion";
  $(".number").empty()
  $(".number").append(number);


  $(".carrouselContent").empty();
   var content='<div><div class="card"><div class="card-header"><span class="badge badge-warning">Rarámuri</span>'+
     "a"
   +' </div><div class="card-body"><span class="badge badge-warning">Español</span>'+
     "a"
   +'</div></div></div> ';


   $(".carrouselContent").append(content);

}

function sendAnswer(id){

  var x=getRandomArbitrary(0,currentList.length);

  $(".carrouselContent").empty();
   var content='<div><div class="card"><div class="card-header"><span class="badge badge-warning">Rarámuri</span>'+
     words[x].rar
   +' </div><div class="card-body"><span class="badge badge-warning">Español</span>'+
     words[x].spa
   +'</div></div></div> ';


   $(".carrouselContent").append(content);

}

function next(){

 if (carrouselIndex+1<currentList.length){
   carrouselIndex++;
   drawCarousel();
   console.log(currentList);
 }else{
   resetCarrousel();
 }

}

function prev(){
  if (carrouselIndex>0){
    carrouselIndex--;
    drawCarousel();
    console.log(currentList);
  }else{
    resetCarrousel();
  }
}

function drawCarousel(){
  $(".back").show();
  $(".next").show();
 var number=(carrouselIndex+1)+"/"+currentList.length;
 $(".number").empty()
 $(".number").append(number);

 drawCarouselContent(currentList,carrouselIndex);
}

function drawCarouselContent(words, x){
 $(".carrouselContent").empty();
  var content='<div><div class="card"><div class="card-header"><span class="badge badge-warning">Rarámuri</span>'+
    words[x].rar
  +' </div><div class="card-body"><span class="badge badge-warning">Español</span>'+
    words[x].spa
  +'</div></div></div> ';


  $(".carrouselContent").append(content);
}

function getWords(id){
  var wordList=[];
  var tag=allTags[id];
  for (x=0;x<dictionary.length;x++){
    if (dictionary[x].hasOwnProperty('tags')){
      tagList=dictionary[x].tags

        if (tagList.includes(tag)){
          wordList.push(dictionary[x]);
        }

      }
    }

 currentList=wordList;
 drawCarousel(wordList);
 return wordList;

}


function draw(array){
  $("#resultContainer").empty()
  var limit;
  var mediaWidth = window.matchMedia("(max-width: 600px)");
  limit=array.length;



  if (array.length==0){
    var content='<div class="no_info"><h2>No hay informacion</h2>'
    +'</div> ';

    $("#container").append(content);
  }else{
    for(x=0;x<limit;x++){
      var sizeclass="";
      if (limit==1){
        sizeclass="full";
      }

      var content='<div onclick="display('+x+')""><div class="card"><div class="card-header">'+
        array[x]
      +' </div><div class="card-body">'+

      '</div></div></div> ';

      $("#resultContainer").append(content);
    }

  }


}

function getTags(array){
  tags=[];
  for (x=0;x<array.length-1;x++){
    if (array[x].hasOwnProperty('tags')){
      tagList=array[x].tags
      for(y=0;y<tagList.length;y++){
        if (!(tags.includes(tagList[y]))){
          tags.push(tagList[y]);
        }

      }
    }


  }
  console.log(tags);
  allTags=tags;
  return tags
}
const dictionary=[
  {
    "rar": "ásiga",
    "spa": "buscándolo",
    "rarNo": "asiga",
    "spaNo": "buscandolo"
  },
  {
    "rar": "ay",
    "spa": "lo buscaba",
    "rarNo": "ay",
    "spaNo": "lo buscaba"
  },
  {
    "rar": "abé",
    "spa": "hoy",
    "rarNo": "abe",
    "spaNo": "hoy"
  },
  {
    "rar": "abé huauú ucuri",
    "spa": "hoy llovió mucho",
    "rarNo": "abe huauu ucuri",
    "spaNo": "hoy llovio mucho"
  },
  {
    "rar": "abijí",
    "spa": "todavía - aún",
    "rarNo": "abiji",
    "spaNo": "todavia - aun"
  },
  {
    "rar": "aboni",
    "spa": "ellos - ellas",
    "rarNo": "aboni",
    "spaNo": "ellos - ellas"
  },
  {
    "rar": "acá",
    "spa": "cara - nariz",
    "rarNo": "aca",
    "spaNo": "cara - nariz"
  },
  {
    "rar": "binoy acara",
    "spa": "su cara",
    "rarNo": "binoy acara",
    "spaNo": "su cara"
  },
  {
    "rar": "binoy acárachi",
    "spa": "en su cara",
    "rarNo": "binoy acarachi",
    "spaNo": "en su cara"
  },
  {
    "rar": "acá vi",
    "spa": "tener sal - está dulce o sabroso",
    "rarNo": "aca vi",
    "spaNo": "tener sal - esta dulce o sabroso"
  },
  {
    "rar": "acá ",
    "spa": "huarache",
    "rarNo": "aca ",
    "spaNo": "huarache"
  },
  {
    "rar": "acará",
    "spa": "poner huaraches",
    "rarNo": "acara",
    "spaNo": "poner huaraches"
  },
  {
    "rar": "acarapta",
    "spa": "quitar huaraches",
    "rarNo": "acarapta",
    "spaNo": "quitar huaraches"
  },
  {
    "rar": "acá",
    "spa": "embotarse - quitarse (filo)",
    "rarNo": "aca",
    "spaNo": "embotarse - quitarse (filo)"
  },
  {
    "rar": "acáami",
    "spa": "salado - dulce",
    "rarNo": "acaami",
    "spaNo": "salado - dulce"
  },
  {
    "rar": "acáanami",
    "spa": "Sano de  pie o de brazo",
    "rarNo": "acaanami",
    "spaNo": "Sano de  pie o de brazo"
  },
  {
    "rar": "acabó",
    "spa": "hoyo de la nariz",
    "rarNo": "acabo",
    "spaNo": "hoyo de la nariz"
  },
  {
    "rar": "acáchura",
    "spa": "abuela paterna",
    "rarNo": "acachura",
    "spaNo": "abuela paterna"
  },
  {
    "rar": "acajihua",
    "spa": "correa",
    "rarNo": "acajihua",
    "spaNo": "correa"
  },
  {
    "rar": "acami",
    "spa": "estar vivo",
    "rarNo": "acami",
    "spaNo": "estar vivo"
  },
  {
    "rar": "acaná",
    "spa": " boca abajo",
    "rarNo": "acana",
    "spaNo": " boca abajo"
  },
  {
    "rar": "acará",
    "spa": "herrar - rostro",
    "rarNo": "acara",
    "spaNo": "herrar - rostro"
  },
  {
    "rar": "acha",
    "spa": "¿acaso?",
    "rarNo": "acha",
    "spaNo": "¿acaso?"
  },
  {
    "rar": "acha gará ju?",
    "spa": "¿estás bien?",
    "rarNo": "acha gara ju?",
    "spaNo": "¿estas bien?"
  },
  {
    "rar": "achá",
    "spa": "poner",
    "rarNo": "acha",
    "spaNo": "poner"
  },
  {
    "rar": "achagó",
    "spa": "mata espinosa",
    "rarNo": "achago",
    "spaNo": "mata espinosa"
  },
  {
    "rar": "aché",
    "spa": "atiesarse - morirse de frio",
    "rarNo": "ache",
    "spaNo": "atiesarse - morirse de frio"
  },
  {
    "rar": "achí",
    "spa": "reir - sonreir",
    "rarNo": "achi",
    "spaNo": "reir - sonreir"
  },
  {
    "rar": "achíami",
    "spa": "risueño",
    "rarNo": "achiami",
    "spaNo": "risueno"
  },
  {
    "rar": "achigó yiri ju",
    "spa": "es igual",
    "rarNo": "achigo yiri ju",
    "spaNo": "es igual"
  },
  {
    "rar": "achigórigá",
    "spa": "de la misma manera",
    "rarNo": "achigoriga",
    "spaNo": "de la misma manera"
  },
  {
    "rar": "achíptiami",
    "spa": "cómico",
    "rarNo": "achiptiami",
    "spaNo": "comico"
  },
  {
    "rar": "achó",
    "spa": "iguales",
    "rarNo": "acho",
    "spaNo": "iguales"
  },
  {
    "rar": "agá",
    "spa": "dándole",
    "rarNo": "aga",
    "spaNo": "dandole"
  },
  {
    "rar": "agásane",
    "spa": "bilis",
    "rarNo": "agasane",
    "spaNo": "bilis"
  },
  {
    "rar": "ahuá",
    "spa": "cuerno",
    "rarNo": "ahua",
    "spaNo": "cuerno"
  },
  {
    "rar": "a'huá",
    "spa": "tragar",
    "rarNo": "a'hua",
    "spaNo": "tragar"
  },
  {
    "rar": "a'huánami",
    "spa": "ligeros",
    "rarNo": "a'huanami",
    "spaNo": "ligeros"
  },
  {
    "rar": "ahué",
    "spa": "asar",
    "rarNo": "ahue",
    "spaNo": "asar"
  },
  {
    "rar": "ahuérami",
    "spa": "asado",
    "rarNo": "ahuerami",
    "spaNo": "asado"
  },
  {
    "rar": "a'hué",
    "spa": "águila",
    "rarNo": "a'hue",
    "spaNo": "aguila"
  },
  {
    "rar": "ahuí",
    "spa": "bailar",
    "rarNo": "ahui",
    "spaNo": "bailar"
  },
  {
    "rar": "a'huí",
    "spa": "brotar - germinar (semillas)",
    "rarNo": "a'hui",
    "spaNo": "brotar - germinar (semillas)"
  },
  {
    "rar": "ahuínari",
    "spa": "solos",
    "rarNo": "ahuinari",
    "spaNo": "solos"
  },
  {
    "rar": "a'huínari",
    "spa": "aparte",
    "rarNo": "a'huinari",
    "spaNo": "aparte"
  },
  {
    "rar": "ajó",
    "spa": "desgranar maíz",
    "rarNo": "ajo",
    "spaNo": "desgranar maiz"
  },
  {
    "rar": "ajo",
    "spa": "mosquito - zancudo",
    "rarNo": "ajo",
    "spaNo": "mosquito - zancudo"
  },
  {
    "rar": "amá",
    "spa": "hígado",
    "rarNo": "ama",
    "spaNo": "higado"
  },
  {
    "rar": "huáasi amará",
    "spa": "hígado de vaca",
    "rarNo": "huaasi amara",
    "spaNo": "higado de vaca"
  },
  {
    "rar": "amachí",
    "spa": "rezar",
    "rarNo": "amachi",
    "spaNo": "rezar"
  },
  {
    "rar": "amarú",
    "spa": "estar entero",
    "rarNo": "amaru",
    "spaNo": "estar entero"
  },
  {
    "rar": "amí",
    "spa": "buscar",
    "rarNo": "ami",
    "spaNo": "buscar"
  },
  {
    "rar": "amígohua",
    "spa": "amigo",
    "rarNo": "amigohua",
    "spaNo": "amigo"
  },
  {
    "rar": "aná",
    "spa": "de otro modo",
    "rarNo": "ana",
    "spaNo": "de otro modo"
  },
  {
    "rar": "aná",
    "spa": "ala- aleta",
    "rarNo": "ana",
    "spaNo": "ala- aleta"
  },
  {
    "rar": "a'nabáa",
    "spa": "juntarse",
    "rarNo": "a'nabaa",
    "spaNo": "juntarse"
  },
  {
    "rar": "anacha",
    "spa": "aguantar",
    "rarNo": "anacha",
    "spaNo": "aguantar"
  },
  {
    "rar": "anachapa",
    "spa": "aletear",
    "rarNo": "anachapa",
    "spaNo": "aletear"
  },
  {
    "rar": "a'nagú",
    "spa": "por los dos lados",
    "rarNo": "a'nagu",
    "spaNo": "por los dos lados"
  },
  {
    "rar": "a'nagupi",
    "spa": "mutuamente - unos a otros",
    "rarNo": "a'nagupi",
    "spaNo": "mutuamente - unos a otros"
  },
  {
    "rar": "anahui",
    "spa": "medir - pesar",
    "rarNo": "anahui",
    "spaNo": "medir - pesar"
  },
  {
    "rar": "a'nahuí",
    "spa": "al mismo tiempo",
    "rarNo": "a'nahui",
    "spaNo": "al mismo tiempo"
  },
  {
    "rar": "a'najata",
    "spa": "perseguir",
    "rarNo": "a'najata",
    "spaNo": "perseguir"
  },
  {
    "rar": "a'namótami",
    "spa": "uno encima de otro",
    "rarNo": "a'namotami",
    "spaNo": "uno encima de otro"
  },
  {
    "rar": "anara",
    "spa": "igualar",
    "rarNo": "anara",
    "spaNo": "igualar"
  },
  {
    "rar": "ané",
    "spa": "decir",
    "rarNo": "ane",
    "spaNo": "decir"
  },
  {
    "rar": "anebi",
    "spa": "le hubiéramos dicho",
    "rarNo": "anebi",
    "spaNo": "le hubieramos dicho"
  },
  {
    "rar": "anemi",
    "spa": "le hubiera dicho",
    "rarNo": "anemi",
    "spaNo": "le hubiera dicho"
  },
  {
    "rar": "aní",
    "spa": "decir",
    "rarNo": "ani",
    "spaNo": "decir"
  },
  {
    "rar": "anihuáami",
    "spa": "querer decir",
    "rarNo": "anihuaami",
    "spaNo": "querer decir"
  },
  {
    "rar": "anirá",
    "spa": "decir (futuro)",
    "rarNo": "anira",
    "spaNo": "decir (futuro)"
  },
  {
    "rar": "aniríhuami",
    "spa": "nombrado",
    "rarNo": "anirihuami",
    "spaNo": "nombrado"
  },
  {
    "rar": "aorí",
    "spa": "táscate",
    "rarNo": "aori",
    "spaNo": "tascate"
  },
  {
    "rar": "apanérohua",
    "spa": "compañero",
    "rarNo": "apanerohua",
    "spaNo": "companero"
  },
  {
    "rar": "aparúami",
    "spa": "Bravo - cruel - feroz - valiente",
    "rarNo": "aparuami",
    "spaNo": "Bravo - cruel - feroz - valiente"
  },
  {
    "rar": "apé",
    "spa": "echar a la espalda",
    "rarNo": "ape",
    "spaNo": "echar a la espalda"
  },
  {
    "rar": "apurá",
    "spa": "hacer olas (en el agua)",
    "rarNo": "apura",
    "spaNo": "hacer olas (en el agua)"
  },
  {
    "rar": "aqué",
    "spa": "nadar",
    "rarNo": "aque",
    "spaNo": "nadar"
  },
  {
    "rar": "aquibi",
    "spa": "desaparecer",
    "rarNo": "aquibi",
    "spaNo": "desaparecer"
  },
  {
    "rar": "arara",
    "spa": "arado",
    "rarNo": "arara",
    "spaNo": "arado"
  },
  {
    "rar": "arí",
    "spa": "tarde",
    "rarNo": "ari",
    "spaNo": "tarde"
  },
  {
    "rar": "jipi arí",
    "spa": "hoy en la tarde - enseguida",
    "rarNo": "jipi ari",
    "spaNo": "hoy en la tarde - enseguida"
  },
  {
    "rar": "arí biché ",
    "spa": "entonces",
    "rarNo": "ari biche ",
    "spaNo": "entonces"
  },
  {
    "rar": "ariché",
    "spa": "tardar - dilatar",
    "rarNo": "ariche",
    "spaNo": "tardar - dilatar"
  },
  {
    "rar": "arigá",
    "spa": "a pesar de- de todos modos",
    "rarNo": "ariga",
    "spaNo": "a pesar de- de todos modos"
  },
  {
    "rar": "arihua",
    "spa": "atardecer",
    "rarNo": "arihua",
    "spaNo": "atardecer"
  },
  {
    "rar": "arihuá",
    "spa": "alma",
    "rarNo": "arihua",
    "spaNo": "alma"
  },
  {
    "rar": "arihué",
    "spa": "dejar",
    "rarNo": "arihue",
    "spaNo": "dejar"
  },
  {
    "rar": "a' rínamorí",
    "spa": "al poco rato",
    "rarNo": "a' rinamori",
    "spaNo": "al poco rato"
  },
  {
    "rar": "ariósibá",
    "spa": "adios",
    "rarNo": "ariosiba",
    "spaNo": "adios"
  },
  {
    "rar": "arirí",
    "spa": "!ay!",
    "rarNo": "ariri",
    "spaNo": "!ay!"
  },
  {
    "rar": "aró",
    "spa": "marchitarse",
    "rarNo": "aro",
    "spaNo": "marchitarse"
  },
  {
    "rar": "asahua",
    "spa": "sacudir",
    "rarNo": "asahua",
    "spaNo": "sacudir"
  },
  {
    "rar": "asé",
    "spa": "montar (un animal)",
    "rarNo": "ase",
    "spaNo": "montar (un animal)"
  },
  {
    "rar": "así",
    "spa": "también",
    "rarNo": "asi",
    "spaNo": "tambien"
  },
  {
    "rar": "asibá",
    "spa": "siéntate",
    "rarNo": "asiba",
    "spaNo": "sientate"
  },
  {
    "rar": "asiba",
    "spa": "sentarse",
    "rarNo": "asiba",
    "spaNo": "sentarse"
  },
  {
    "rar": "asisi",
    "spa": "levantarse",
    "rarNo": "asisi",
    "spaNo": "levantarse"
  },
  {
    "rar": "atá",
    "spa": "arco",
    "rarNo": "ata",
    "spaNo": "arco"
  },
  {
    "rar": "atahuépata",
    "spa": "podar",
    "rarNo": "atahuepata",
    "spaNo": "podar"
  },
  {
    "rar": "atí",
    "spa": "estar sentado",
    "rarNo": "ati",
    "spaNo": "estar sentado"
  },
  {
    "rar": "atisi",
    "spa": "estornudar",
    "rarNo": "atisi",
    "spaNo": "estornudar"
  },
  {
    "rar": "auché",
    "spa": "otro",
    "rarNo": "auche",
    "spaNo": "otro"
  },
  {
    "rar": "a' yapi",
    "spa": "uno tras otro",
    "rarNo": "a' yapi",
    "spaNo": "uno tras otro"
  },
  {
    "rar": "auchecho",
    "spa": "otra vez",
    "rarNo": "auchecho",
    "spaNo": "otra vez"
  },
  {
    "rar": "ayena",
    "spa": "sí",
    "rarNo": "ayena",
    "spaNo": "si"
  },
  {
    "rar": "ayena cho",
    "spa": "también - aún",
    "rarNo": "ayena cho",
    "spaNo": "tambien - aun"
  },
  {
    "rar": "ayénasí",
    "spa": "sí también",
    "rarNo": "ayenasi",
    "spaNo": "si tambien"
  },
  {
    "rar": "ba'arí",
    "spa": "mañana",
    "rarNo": "ba'ari",
    "spaNo": "manana"
  },
  {
    "rar": "ba'ari piché",
    "spa": "hasta mañana",
    "rarNo": "ba'ari piche",
    "spaNo": "hasta manana"
  },
  {
    "rar": "ba'arínara",
    "spa": "al siguiente día",
    "rarNo": "ba'arinara",
    "spaNo": "al siguiente dia"
  },
  {
    "rar": "bacahúa",
    "spa": "hoja de la marzocra",
    "rarNo": "bacahua",
    "spaNo": "hoja de la marzocra"
  },
  {
    "rar": "bacamú",
    "spa": "infectarse",
    "rarNo": "bacamu",
    "spaNo": "infectarse"
  },
  {
    "rar": "bacarí",
    "spa": "tener enfermedad venérea",
    "rarNo": "bacari",
    "spaNo": "tener enfermedad venerea"
  },
  {
    "rar": "bacó",
    "spa": "ponerse amarillo",
    "rarNo": "baco",
    "spaNo": "ponerse amarillo"
  },
  {
    "rar": "bachochi",
    "spa": "río",
    "rarNo": "bachochi",
    "spaNo": "rio"
  },
  {
    "rar": "bacúu",
    "spa": "palo",
    "rarNo": "bacuu",
    "spaNo": "palo"
  },
  {
    "rar": "bachá",
    "spa": "primeramente - adelante - enfrente",
    "rarNo": "bacha",
    "spaNo": "primeramente - adelante - enfrente"
  },
  {
    "rar": "bachá simí",
    "spa": "avanza - precede",
    "rarNo": "bacha simi",
    "spaNo": "avanza - precede"
  },
  {
    "rar": "bacháami",
    "spa": "ante - delante - enfrente de",
    "rarNo": "bachaami",
    "spaNo": "ante - delante - enfrente de"
  },
  {
    "rar": "bachagochi",
    "spa": "hueso del tobillo",
    "rarNo": "bachagochi",
    "spaNo": "hueso del tobillo"
  },
  {
    "rar": "bachahuara",
    "spa": "ir adelante",
    "rarNo": "bachahuara",
    "spaNo": "ir adelante"
  },
  {
    "rar": "bachéi",
    "spa": "tener hermano mayor",
    "rarNo": "bachei",
    "spaNo": "tener hermano mayor"
  },
  {
    "rar": "bachí",
    "spa": "hermano mayor",
    "rarNo": "bachi",
    "spaNo": "hermano mayor"
  },
  {
    "rar": "bachí",
    "spa": "calabaza",
    "rarNo": "bachi",
    "spaNo": "calabaza"
  },
  {
    "rar": "bachima",
    "spa": "rociar",
    "rarNo": "bachima",
    "spaNo": "rociar"
  },
  {
    "rar": "ba'hue",
    "spa": "hay agua",
    "rarNo": "ba'hue",
    "spaNo": "hay agua"
  },
  {
    "rar": "ba'huí",
    "spa": "aguantar",
    "rarNo": "ba'hui",
    "spaNo": "aguantar"
  },
  {
    "rar": "ba'huí bají",
    "spa": "toma agua",
    "rarNo": "ba'hui baji",
    "spaNo": "toma agua"
  },
  {
    "rar": "ba'huira",
    "spa": "jugo - caldo",
    "rarNo": "ba'huira",
    "spaNo": "jugo - caldo"
  },
  {
    "rar": "baisá",
    "spa": "tercero",
    "rarNo": "baisa",
    "spaNo": "tercero"
  },
  {
    "rar": "baisá macoy",
    "spa": "treinta",
    "rarNo": "baisa macoy",
    "spaNo": "treinta"
  },
  {
    "rar": "bajácami",
    "spa": "hinchado",
    "rarNo": "bajacami",
    "spaNo": "hinchado"
  },
  {
    "rar": "baji",
    "spa": "tomar - beber",
    "rarNo": "baji",
    "spaNo": "tomar - beber"
  },
  {
    "rar": "bajíami",
    "spa": "curandero",
    "rarNo": "bajiami",
    "spaNo": "curandero"
  },
  {
    "rar": "bajíbachami",
    "spa": "hinchado por desnutricion",
    "rarNo": "bajibachami",
    "spaNo": "hinchado por desnutricion"
  },
  {
    "rar": "bajicháhuari",
    "spa": "norte",
    "rarNo": "bajichahuari",
    "spaNo": "norte"
  },
  {
    "rar": "bajichi",
    "spa": "pozo",
    "rarNo": "bajichi",
    "spaNo": "pozo"
  },
  {
    "rar": "bahpuhuami",
    "spa": "potable",
    "rarNo": "bahpuhuami",
    "spaNo": "potable"
  },
  {
    "rar": "bajina",
    "spa": "hincharse",
    "rarNo": "bajina",
    "spaNo": "hincharse"
  },
  {
    "rar": "bajuhua",
    "spa": "ir a tomar",
    "rarNo": "bajuhua",
    "spaNo": "ir a tomar"
  },
  {
    "rar": "bamíbari",
    "spa": "año",
    "rarNo": "bamibari",
    "spaNo": "ano"
  },
  {
    "rar": "baná",
    "spa": "mejilla",
    "rarNo": "bana",
    "spaNo": "mejilla"
  },
  {
    "rar": "banagé",
    "spa": "lama - moho",
    "rarNo": "banage",
    "spaNo": "lama - moho"
  },
  {
    "rar": "banira",
    "spa": "arrastrar - llevar jalando",
    "rarNo": "banira",
    "spaNo": "arrastrar - llevar jalando"
  },
  {
    "rar": "baquí",
    "spa": "entrar ",
    "rarNo": "baqui",
    "spaNo": "entrar "
  },
  {
    "rar": "bará",
    "spa": "tiempo de lluvia",
    "rarNo": "bara",
    "spaNo": "tiempo de lluvia"
  },
  {
    "rar": "baquirini",
    "spa": "padrino - madrina",
    "rarNo": "baquirini",
    "spaNo": "padrino - madrina"
  },
  {
    "rar": "baraché",
    "spa": "tener sed",
    "rarNo": "barache",
    "spaNo": "tener sed"
  },
  {
    "rar": "ba'raguéchuri",
    "spa": "huérfano",
    "rarNo": "ba'raguechuri",
    "spaNo": "huerfano"
  },
  {
    "rar": "baré",
    "spa": "cura",
    "rarNo": "bare",
    "spaNo": "cura"
  },
  {
    "rar": "basachí",
    "spa": "coyote",
    "rarNo": "basachi",
    "spaNo": "coyote"
  },
  {
    "rar": "basi",
    "spa": "taza - vaso",
    "rarNo": "basi",
    "spaNo": "taza - vaso"
  },
  {
    "rar": "basigó",
    "spa": "lavarse la cara",
    "rarNo": "basigo",
    "spaNo": "lavarse la cara"
  },
  {
    "rar": "basoná",
    "spa": "pato",
    "rarNo": "basona",
    "spaNo": "pato"
  },
  {
    "rar": "basoná",
    "spa": "derretir",
    "rarNo": "basona",
    "spaNo": "derretir"
  },
  {
    "rar": "basori",
    "spa": "pozole",
    "rarNo": "basori",
    "spaNo": "pozole"
  },
  {
    "rar": "basú",
    "spa": "cocer - hervir",
    "rarNo": "basu",
    "spaNo": "cocer - hervir"
  },
  {
    "rar": "batari",
    "spa": "tesguino",
    "rarNo": "batari",
    "spaNo": "tesguino"
  },
  {
    "rar": "batú",
    "spa": "moler en metate",
    "rarNo": "batu",
    "spaNo": "moler en metate"
  },
  {
    "rar": "batú",
    "spa": "mapache",
    "rarNo": "batu",
    "spaNo": "mapache"
  },
  {
    "rar": "batusí",
    "spa": "masa",
    "rarNo": "batusi",
    "spaNo": "masa"
  },
  {
    "rar": "bayé",
    "spa": "llamar",
    "rarNo": "baye",
    "spaNo": "llamar"
  },
  {
    "rar": "bayeba",
    "spa": "guiar - llevar",
    "rarNo": "bayeba",
    "spaNo": "guiar - llevar"
  },
  {
    "rar": "bayera",
    "spa": "invitar",
    "rarNo": "bayera",
    "spaNo": "invitar"
  },
  {
    "rar": "ba'yó",
    "spa": "estar bonito",
    "rarNo": "ba'yo",
    "spaNo": "estar bonito"
  },
  {
    "rar": "ba'yoami",
    "spa": "bello - hermoso - lindo",
    "rarNo": "ba'yoami",
    "spaNo": "bello - hermoso - lindo"
  },
  {
    "rar": "bicá",
    "spa": "pudrir",
    "rarNo": "bica",
    "spaNo": "pudrir"
  },
  {
    "rar": "ba'yori",
    "spa": "gustar",
    "rarNo": "ba'yori",
    "spaNo": "gustar"
  },
  {
    "rar": "bicajuca",
    "spa": "oler mal",
    "rarNo": "bicajuca",
    "spaNo": "oler mal"
  },
  {
    "rar": "bicamú",
    "spa": "salir pus",
    "rarNo": "bicamu",
    "spaNo": "salir pus"
  },
  {
    "rar": "biché",
    "spa": "entonces",
    "rarNo": "biche",
    "spaNo": "entonces"
  },
  {
    "rar": "bachihuá",
    "spa": "verdad",
    "rarNo": "bachihua",
    "spaNo": "verdad"
  },
  {
    "rar": "bichíhuaga",
    "spa": "jurar- prometer",
    "rarNo": "bichihuaga",
    "spaNo": "jurar- prometer"
  },
  {
    "rar": "bichíhuami",
    "spa": "VERDADERO",
    "rarNo": "bichihuami",
    "spaNo": "VERDADERO"
  },
  {
    "rar": "bi'huá",
    "spa": "limpiar",
    "rarNo": "bi'hua",
    "spaNo": "limpiar"
  },
  {
    "rar": "bihuárami",
    "spa": "limpiarse",
    "rarNo": "bihuarami",
    "spaNo": "limpiarse"
  },
  {
    "rar": "bihuara",
    "spa": "hacer duro",
    "rarNo": "bihuara",
    "spaNo": "hacer duro"
  },
  {
    "rar": "bi'líami",
    "spa": "chueco - torcido",
    "rarNo": "bi'liami",
    "spaNo": "chueco - torcido"
  },
  {
    "rar": "bimó",
    "spa": "neblina - polvo",
    "rarNo": "bimo",
    "spaNo": "neblina - polvo"
  },
  {
    "rar": "binéami",
    "spa": "estudiante",
    "rarNo": "bineami",
    "spaNo": "estudiante"
  },
  {
    "rar": "binéami",
    "spa": "aprender - estudiar",
    "rarNo": "bineami",
    "spaNo": "aprender - estudiar"
  },
  {
    "rar": "binériami",
    "spa": "maestro",
    "rarNo": "bineriami",
    "spaNo": "maestro"
  },
  {
    "rar": "bi'néripi",
    "spa": "único",
    "rarNo": "bi'neripi",
    "spaNo": "unico"
  },
  {
    "rar": "biní",
    "spa": "hermana menor",
    "rarNo": "bini",
    "spaNo": "hermana menor"
  },
  {
    "rar": "binoy",
    "spa": "el - ella - el mismo",
    "rarNo": "binoy",
    "spaNo": "el - ella - el mismo"
  },
  {
    "rar": "biquiyá",
    "spa": "tres",
    "rarNo": "biquiya",
    "spaNo": "tres"
  },
  {
    "rar": "biré",
    "spa": "uno",
    "rarNo": "bire",
    "spaNo": "uno"
  },
  {
    "rar": "biré ciento",
    "spa": "cien",
    "rarNo": "bire ciento",
    "spaNo": "cien"
  },
  {
    "rar": "biréana",
    "spa": "en una sola parte",
    "rarNo": "bireana",
    "spaNo": "en una sola parte"
  },
  {
    "rar": "birina",
    "spa": "pedernal",
    "rarNo": "birina",
    "spaNo": "pedernal"
  },
  {
    "rar": "bi'rina",
    "spa": "torcer - exprimir",
    "rarNo": "bi'rina",
    "spaNo": "torcer - exprimir"
  },
  {
    "rar": "bisiruta",
    "spa": "rasparse",
    "rarNo": "bisiruta",
    "spaNo": "rasparse"
  },
  {
    "rar": "bisú",
    "spa": "despellejar",
    "rarNo": "bisu",
    "spaNo": "despellejar"
  },
  {
    "rar": "bité",
    "spa": "habitar - vivir",
    "rarNo": "bite",
    "spaNo": "habitar - vivir"
  },
  {
    "rar": "¿cumi bité?",
    "spa": "preg. donde vives",
    "rarNo": "¿cumi bite?",
    "spaNo": "preg. donde vives"
  },
  {
    "rar": "biteba",
    "spa": "pasar la noche",
    "rarNo": "biteba",
    "spaNo": "pasar la noche"
  },
  {
    "rar": "bitechi",
    "spa": "casa",
    "rarNo": "bitechi",
    "spaNo": "casa"
  },
  {
    "rar": "bití",
    "spa": "estar acostados",
    "rarNo": "biti",
    "spaNo": "estar acostados"
  },
  {
    "rar": "bitichí",
    "spa": "casa - habitación",
    "rarNo": "bitichi",
    "spaNo": "casa - habitacion"
  },
  {
    "rar": "bitori",
    "spa": "plato - cazuela",
    "rarNo": "bitori",
    "spaNo": "plato - cazuela"
  },
  {
    "rar": "bi'yá",
    "spa": "temprano",
    "rarNo": "bi'ya",
    "spaNo": "temprano"
  },
  {
    "rar": "bocuírachi",
    "spa": "cascada",
    "rarNo": "bocuirachi",
    "spaNo": "cascada"
  },
  {
    "rar": "bo'na",
    "spa": "arrancar hierba",
    "rarNo": "bo'na",
    "spaNo": "arrancar hierba"
  },
  {
    "rar": "boní",
    "spa": "hermano menor",
    "rarNo": "boni",
    "spaNo": "hermano menor"
  },
  {
    "rar": "bonorí",
    "spa": "anzuelo",
    "rarNo": "bonori",
    "spaNo": "anzuelo"
  },
  {
    "rar": "bo'obu",
    "spa": "desplumar",
    "rarNo": "bo'obu",
    "spaNo": "desplumar"
  },
  {
    "rar": "borogá",
    "spa": "amarrado",
    "rarNo": "boroga",
    "spaNo": "amarrado"
  },
  {
    "rar": "bosá",
    "spa": "llenarse comiendo",
    "rarNo": "bosa",
    "spaNo": "llenarse comiendo"
  },
  {
    "rar": "bot'a",
    "spa": "soltarse - desatarse",
    "rarNo": "bot'a",
    "spaNo": "soltarse - desatarse"
  },
  {
    "rar": "botobú",
    "spa": "hundir - sumergir",
    "rarNo": "botobu",
    "spaNo": "hundir - sumergir"
  },
  {
    "rar": "bucurí",
    "spa": "hace poco",
    "rarNo": "bucuri",
    "spaNo": "hace poco"
  },
  {
    "rar": "buchí",
    "spa": "contener",
    "rarNo": "buchi",
    "spaNo": "contener"
  },
  {
    "rar": "ocuá litro buchí",
    "spa": "contiene dos litros",
    "rarNo": "ocua litro buchi",
    "spaNo": "contiene dos litros"
  },
  {
    "rar": "buchíami",
    "spa": "lleno",
    "rarNo": "buchiami",
    "spaNo": "lleno"
  },
  {
    "rar": "bucuríhuami",
    "spa": "nuevo - fresco",
    "rarNo": "bucurihuami",
    "spaNo": "nuevo - fresco"
  },
  {
    "rar": "buhué",
    "spa": "camino",
    "rarNo": "buhue",
    "spaNo": "camino"
  },
  {
    "rar": "bubuigá",
    "spa": "estar esperando",
    "rarNo": "bubuiga",
    "spaNo": "estar esperando"
  },
  {
    "rar": "bujé",
    "spa": "cobrar - quitar algo",
    "rarNo": "buje",
    "spaNo": "cobrar - quitar algo"
  },
  {
    "rar": "buná",
    "spa": "agacharse - inclinarse",
    "rarNo": "buna",
    "spaNo": "agacharse - inclinarse"
  },
  {
    "rar": "buqúé",
    "spa": "tener - poseer (animal)",
    "rarNo": "buque",
    "spaNo": "tener - poseer (animal)"
  },
  {
    "rar": "buré",
    "spa": "amarrar",
    "rarNo": "bure",
    "spaNo": "amarrar"
  },
  {
    "rar": "burito",
    "spa": "burro",
    "rarNo": "burito",
    "spaNo": "burro"
  },
  {
    "rar": "¿cum burú?",
    "spa": "preg. dónde está el camino",
    "rarNo": "¿cum buru?",
    "spaNo": "preg. donde esta el camino"
  },
  {
    "rar": "busí",
    "spa": "ojo",
    "rarNo": "busi",
    "spaNo": "ojo"
  },
  {
    "rar": "busugachi",
    "spa": "ciego",
    "rarNo": "busugachi",
    "spaNo": "ciego"
  },
  {
    "rar": "busurébana",
    "spa": "despertar",
    "rarNo": "busurebana",
    "spaNo": "despertar"
  },
  {
    "rar": "buyana",
    "spa": "enfermar de viruela",
    "rarNo": "buyana",
    "spaNo": "enfermar de viruela"
  },
  {
    "rar": "ca",
    "spa": "llevar en la mano",
    "rarNo": "ca",
    "spaNo": "llevar en la mano"
  },
  {
    "rar": "cabítana",
    "spa": "rodar - envolver",
    "rarNo": "cabitana",
    "spaNo": "rodar - envolver"
  },
  {
    "rar": "cabóchi",
    "spa": "músuclo de pierna o brazo",
    "rarNo": "cabochi",
    "spaNo": "musuclo de pierna o brazo"
  },
  {
    "rar": "cabu",
    "spa": "preg. cuándo",
    "rarNo": "cabu",
    "spaNo": "preg. cuando"
  },
  {
    "rar": "cachagá",
    "spa": "cadera",
    "rarNo": "cachaga",
    "spaNo": "cadera"
  },
  {
    "rar": "cachí",
    "spa": "reirse",
    "rarNo": "cachi",
    "spaNo": "reirse"
  },
  {
    "rar": "cachuna",
    "spa": "arrugar",
    "rarNo": "cachuna",
    "spaNo": "arrugar"
  },
  {
    "rar": "ca'huá",
    "spa": "poner hueos",
    "rarNo": "ca'hua",
    "spaNo": "poner hueos"
  },
  {
    "rar": "cahué",
    "spa": "caballo",
    "rarNo": "cahue",
    "spaNo": "caballo"
  },
  {
    "rar": "cahuí",
    "spa": "monte - terreno",
    "rarNo": "cahui",
    "spaNo": "monte - terreno"
  },
  {
    "rar": "cahuíami",
    "spa": "claro - limpio (cielo)",
    "rarNo": "cahuiami",
    "spaNo": "claro - limpio (cielo)"
  },
  {
    "rar": "cahuisori",
    "spa": "cobija",
    "rarNo": "cahuisori",
    "spaNo": "cobija"
  },
  {
    "rar": "cajé",
    "spa": "café",
    "rarNo": "caje",
    "spaNo": "cafe"
  },
  {
    "rar": "cajuina",
    "spa": "derribar",
    "rarNo": "cajuina",
    "spaNo": "derribar"
  },
  {
    "rar": "ca'marota",
    "spa": "ampollarse",
    "rarNo": "ca'marota",
    "spaNo": "ampollarse"
  },
  {
    "rar": "cameri",
    "spa": "sería bueno",
    "rarNo": "cameri",
    "spaNo": "seria bueno"
  },
  {
    "rar": "cami",
    "spa": "extraordinario",
    "rarNo": "cami",
    "spaNo": "extraordinario"
  },
  {
    "rar": "ca'mocha",
    "spa": "hincharse la cara",
    "rarNo": "ca'mocha",
    "spaNo": "hincharse la cara"
  },
  {
    "rar": "banachí ca'móchari",
    "spa": "se le hinzó la mejilla",
    "rarNo": "banachi ca'mochari",
    "spaNo": "se le hinzo la mejilla"
  },
  {
    "rar": "campori",
    "spa": "tambor",
    "rarNo": "campori",
    "spaNo": "tambor"
  },
  {
    "rar": "ca'muchí",
    "spa": "maiz para palomitas",
    "rarNo": "ca'muchi",
    "spaNo": "maiz para palomitas"
  },
  {
    "rar": "canápuromí",
    "spa": "en muchas parte",
    "rarNo": "canapuromi",
    "spaNo": "en muchas parte"
  },
  {
    "rar": "canira",
    "spa": "alegrarse",
    "rarNo": "canira",
    "spaNo": "alegrarse"
  },
  {
    "rar": "caniri",
    "spa": "estar feliz - contento",
    "rarNo": "caniri",
    "spaNo": "estar feliz - contento"
  },
  {
    "rar": "capaneri",
    "spa": "campana",
    "rarNo": "capaneri",
    "spaNo": "campana"
  },
  {
    "rar": "capitani",
    "spa": "capitán",
    "rarNo": "capitani",
    "spaNo": "capitan"
  },
  {
    "rar": "carí",
    "spa": "casa",
    "rarNo": "cari",
    "spaNo": "casa"
  },
  {
    "rar": "capona",
    "spa": "quebrar",
    "rarNo": "capona",
    "spaNo": "quebrar"
  },
  {
    "rar": "cárabá",
    "spa": "por nada",
    "rarNo": "caraba",
    "spaNo": "por nada"
  },
  {
    "rar": "cáraca",
    "spa": "completamente",
    "rarNo": "caraca",
    "spaNo": "completamente"
  },
  {
    "rar": "caré",
    "spa": "parecerse",
    "rarNo": "care",
    "spaNo": "parecerse"
  },
  {
    "rar": "caré",
    "spa": "amar - querer",
    "rarNo": "care",
    "spaNo": "amar - querer"
  },
  {
    "rar": "caréami",
    "spa": "amable",
    "rarNo": "careami",
    "spaNo": "amable"
  },
  {
    "rar": "cari ju",
    "spa": "es todo",
    "rarNo": "cari ju",
    "spaNo": "es todo"
  },
  {
    "rar": "carichí",
    "spa": "en la casa",
    "rarNo": "carichi",
    "spaNo": "en la casa"
  },
  {
    "rar": "carihuérami",
    "spa": "listo - arreglado",
    "rarNo": "carihuerami",
    "spaNo": "listo - arreglado"
  },
  {
    "rar": "ca'rina",
    "spa": "quebrar",
    "rarNo": "ca'rina",
    "spaNo": "quebrar"
  },
  {
    "rar": "ca'rígami",
    "spa": "quebrado",
    "rarNo": "ca'rigami",
    "spaNo": "quebrado"
  },
  {
    "rar": "casí",
    "spa": "pierna - muslo",
    "rarNo": "casi",
    "spaNo": "pierna - muslo"
  },
  {
    "rar": "casibacha",
    "spa": "pantalón - calzón",
    "rarNo": "casibacha",
    "spaNo": "pantalon - calzon"
  },
  {
    "rar": "catehua",
    "spa": "alzar - guardar",
    "rarNo": "catehua",
    "spaNo": "alzar - guardar"
  },
  {
    "rar": "cobata",
    "spa": "enchilar a otra persona",
    "rarNo": "cobata",
    "spaNo": "enchilar a otra persona"
  },
  {
    "rar": "cobisi",
    "spa": "pinole",
    "rarNo": "cobisi",
    "spaNo": "pinole"
  },
  {
    "rar": "coché",
    "spa": "ahogarse",
    "rarNo": "coche",
    "spaNo": "ahogarse"
  },
  {
    "rar": "catá",
    "spa": "arco",
    "rarNo": "cata",
    "spaNo": "arco"
  },
  {
    "rar": "casuna",
    "spa": "bajar del monte",
    "rarNo": "casuna",
    "spaNo": "bajar del monte"
  },
  {
    "rar": "cochí",
    "spa": "perro",
    "rarNo": "cochi",
    "spaNo": "perro"
  },
  {
    "rar": "cayena",
    "spa": "terminar - levantar",
    "rarNo": "cayena",
    "spaNo": "terminar - levantar"
  },
  {
    "rar": "cochí",
    "spa": "hermana mayor",
    "rarNo": "cochi",
    "spaNo": "hermana mayor"
  },
  {
    "rar": "cochí",
    "spa": "dormir",
    "rarNo": "cochi",
    "spaNo": "dormir"
  },
  {
    "rar": "cochi",
    "spa": "marrano",
    "rarNo": "cochi",
    "spaNo": "marrano"
  },
  {
    "rar": "cochinari",
    "spa": "tener sueño",
    "rarNo": "cochinari",
    "spaNo": "tener sueno"
  },
  {
    "rar": "Echirigá ju",
    "spa": "así es",
    "rarNo": "Echiriga ju",
    "spaNo": "asi es"
  },
  {
    "rar": "cóami",
    "spa": "picante",
    "rarNo": "coami",
    "spaNo": "picante"
  },
  {
    "rar": "cochírahua",
    "spa": "ceja",
    "rarNo": "cochirahua",
    "spaNo": "ceja"
  },
  {
    "rar": "cohua",
    "spa": "dar de comer",
    "rarNo": "cohua",
    "spaNo": "dar de comer"
  },
  {
    "rar": "co'huá",
    "spa": "comer",
    "rarNo": "co'hua",
    "spaNo": "comer"
  },
  {
    "rar": "co'huáami",
    "spa": "alimento - comida",
    "rarNo": "co'huaami",
    "spaNo": "alimento - comida"
  },
  {
    "rar": "co'ué",
    "spa": "comer mucho",
    "rarNo": "co'ue",
    "spaNo": "comer mucho"
  },
  {
    "rar": "co'huí",
    "spa": "matar- asesinar",
    "rarNo": "co'hui",
    "spaNo": "matar- asesinar"
  },
  {
    "rar": "comichi",
    "spa": "arroyo",
    "rarNo": "comichi",
    "spaNo": "arroyo"
  },
  {
    "rar": "comurachi",
    "spa": "cárcel",
    "rarNo": "comurachi",
    "spaNo": "carcel"
  },
  {
    "rar": "coná",
    "spa": "tostar",
    "rarNo": "cona",
    "spaNo": "tostar"
  },
  {
    "rar": "coná",
    "spa": "sal (condimento)",
    "rarNo": "cona",
    "spaNo": "sal (condimento)"
  },
  {
    "rar": "cónahua",
    "spa": "donar- regalar",
    "rarNo": "conahua",
    "spaNo": "donar- regalar"
  },
  {
    "rar": "co'nari",
    "spa": "tener hambre",
    "rarNo": "co'nari",
    "spaNo": "tener hambre"
  },
  {
    "rar": "cor",
    "spa": "obsequiar- regalar",
    "rarNo": "cor",
    "spaNo": "obsequiar- regalar"
  },
  {
    "rar": "conomí",
    "spa": "arcoiris",
    "rarNo": "conomi",
    "spaNo": "arcoiris"
  },
  {
    "rar": "cóo",
    "spa": "dar de comer",
    "rarNo": "coo",
    "spaNo": "dar de comer"
  },
  {
    "rar": "cora",
    "spa": "obsequiar- regalar",
    "rarNo": "cora",
    "spaNo": "obsequiar- regalar"
  },
  {
    "rar": "corá",
    "spa": "frente (cabeza)",
    "rarNo": "cora",
    "spaNo": "frente (cabeza)"
  },
  {
    "rar": "corácami",
    "spa": "amargo",
    "rarNo": "coracami",
    "spaNo": "amargo"
  },
  {
    "rar": "coraca",
    "spa": "picante",
    "rarNo": "coraca",
    "spaNo": "picante"
  },
  {
    "rar": "corachi ",
    "spa": "cuervo",
    "rarNo": "corachi ",
    "spaNo": "cuervo"
  },
  {
    "rar": "corí",
    "spa": "chile",
    "rarNo": "cori",
    "spaNo": "chile"
  },
  {
    "rar": "córima",
    "spa": "regalar",
    "rarNo": "corima",
    "spaNo": "regalar"
  },
  {
    "rar": "corimena",
    "spa": "miel de abeja",
    "rarNo": "corimena",
    "spaNo": "miel de abeja"
  },
  {
    "rar": "corochi",
    "spa": "saltamontes",
    "rarNo": "corochi",
    "spaNo": "saltamontes"
  },
  {
    "rar": "corogá",
    "spa": "collar",
    "rarNo": "coroga",
    "spaNo": "collar"
  },
  {
    "rar": "ocorú",
    "spa": "codiciar - desear mucho",
    "rarNo": "ocoru",
    "spaNo": "codiciar - desear mucho"
  },
  {
    "rar": "corúcami",
    "spa": "envidioso - codicioso",
    "rarNo": "corucami",
    "spaNo": "envidioso - codicioso"
  },
  {
    "rar": "cosibera",
    "spa": "banca",
    "rarNo": "cosibera",
    "spaNo": "banca"
  },
  {
    "rar": "cotúura",
    "spa": "dar comida",
    "rarNo": "cotuura",
    "spaNo": "dar comida"
  },
  {
    "rar": "co'yacha",
    "spa": "sombrero",
    "rarNo": "co'yacha",
    "spaNo": "sombrero"
  },
  {
    "rar": "coyera",
    "spa": "paño para cabeza",
    "rarNo": "coyera",
    "spaNo": "pano para cabeza"
  },
  {
    "rar": "cu",
    "spa": "otra vez",
    "rarNo": "cu",
    "spaNo": "otra vez"
  },
  {
    "rar": "cu",
    "spa": "leña - madera",
    "rarNo": "cu",
    "spaNo": "lena - madera"
  },
  {
    "rar": "cúchara",
    "spa": "hijos",
    "rarNo": "cuchara",
    "spaNo": "hijos"
  },
  {
    "rar": "cúchuhua",
    "spa": "tener hijos",
    "rarNo": "cuchuhua",
    "spaNo": "tener hijos"
  },
  {
    "rar": "cohuana",
    "spa": "tostar",
    "rarNo": "cohuana",
    "spaNo": "tostar"
  },
  {
    "rar": "cohuana",
    "spa": "al otro lado - detrás",
    "rarNo": "cohuana",
    "spaNo": "al otro lado - detras"
  },
  {
    "rar": "cuhué",
    "spa": "tiempo de calor",
    "rarNo": "cuhue",
    "spaNo": "tiempo de calor"
  },
  {
    "rar": "co'huira",
    "spa": "ayudar - salvar",
    "rarNo": "co'huira",
    "spaNo": "ayudar - salvar"
  },
  {
    "rar": "cuira",
    "spa": "hola",
    "rarNo": "cuira",
    "spaNo": "hola"
  },
  {
    "rar": "cu'lina",
    "spa": "espeso",
    "rarNo": "cu'lina",
    "spaNo": "espeso"
  },
  {
    "rar": "cu0luhua",
    "spa": "derramar - tirar (líquido)",
    "rarNo": "cu0luhua",
    "spaNo": "derramar - tirar (liquido)"
  },
  {
    "rar": "cumé",
    "spa": "estorbar - molestar",
    "rarNo": "cume",
    "spaNo": "estorbar - molestar"
  },
  {
    "rar": "cumí",
    "spa": "comer",
    "rarNo": "cumi",
    "spaNo": "comer"
  },
  {
    "rar": "cumi",
    "spa": "¿Dónde? - ¿A dónde?",
    "rarNo": "cumi",
    "spaNo": "¿Donde? - ¿A donde?"
  },
  {
    "rar": "cumi simí",
    "spa": "¿A dónde vas?",
    "rarNo": "cumi simi",
    "spaNo": "¿A donde vas?"
  },
  {
    "rar": "cumúchari",
    "spa": "tío (hermano mayor del padre)",
    "rarNo": "cumuchari",
    "spaNo": "tio (hermano mayor del padre)"
  },
  {
    "rar": "cumurachi",
    "spa": "casa de la comunidad",
    "rarNo": "cumurachi",
    "spaNo": "casa de la comunidad"
  },
  {
    "rar": "cuná",
    "spa": "marido - esposo",
    "rarNo": "cuna",
    "spaNo": "marido - esposo"
  },
  {
    "rar": "cunama",
    "spa": "enviudar",
    "rarNo": "cunama",
    "spaNo": "enviudar"
  },
  {
    "rar": "cunámami",
    "spa": "viuda",
    "rarNo": "cunamami",
    "spaNo": "viuda"
  },
  {
    "rar": "cusí",
    "spa": "palo",
    "rarNo": "cusi",
    "spaNo": "palo"
  },
  {
    "rar": "cupá",
    "spa": "cabello",
    "rarNo": "cupa",
    "spaNo": "cabello"
  },
  {
    "rar": "cupí",
    "spa": "cerrar los ojos",
    "rarNo": "cupi",
    "spaNo": "cerrar los ojos"
  },
  {
    "rar": "cupisi",
    "spa": "luciérnaga",
    "rarNo": "cupisi",
    "spaNo": "luciernaga"
  },
  {
    "rar": "cupucha",
    "spa": "pestañear",
    "rarNo": "cupucha",
    "spaNo": "pestanear"
  },
  {
    "rar": "cusibera",
    "spa": "banca",
    "rarNo": "cusibera",
    "spaNo": "banca"
  },
  {
    "rar": "cusuchí",
    "spa": "nalga",
    "rarNo": "cusuchi",
    "spaNo": "nalga"
  },
  {
    "rar": "cutá",
    "spa": "cuello - garganta",
    "rarNo": "cuta",
    "spaNo": "cuello - garganta"
  },
  {
    "rar": "cutámachi",
    "spa": "nuca",
    "rarNo": "cutamachi",
    "spaNo": "nuca"
  },
  {
    "rar": "curipi",
    "spa": "hace poco",
    "rarNo": "curipi",
    "spaNo": "hace poco"
  },
  {
    "rar": "curichi",
    "spa": "tío (hermano mayor de la madre)",
    "rarNo": "curichi",
    "spaNo": "tio (hermano mayor de la madre)"
  },
  {
    "rar": "cursi",
    "spa": "cruz",
    "rarNo": "cursi",
    "spaNo": "cruz"
  },
  {
    "rar": "cúruhui",
    "spa": "niños - muchachos",
    "rarNo": "curuhui",
    "spaNo": "ninos - muchachos"
  },
  {
    "rar": "cuseba",
    "spa": "colgarse - ahogarse",
    "rarNo": "cuseba",
    "spaNo": "colgarse - ahogarse"
  },
  {
    "rar": "cusébana",
    "spa": "ahorcar - estrangular",
    "rarNo": "cusebana",
    "spaNo": "ahorcar - estrangular"
  },
  {
    "rar": "cusera",
    "spa": "flauta",
    "rarNo": "cusera",
    "spaNo": "flauta"
  },
  {
    "rar": "chá",
    "spa": "feo",
    "rarNo": "cha",
    "spaNo": "feo"
  },
  {
    "rar": "chá",
    "spa": "tener granos o llagas",
    "rarNo": "cha",
    "spaNo": "tener granos o llagas"
  },
  {
    "rar": "chabé",
    "spa": "antes - hace poco - el otro día",
    "rarNo": "chabe",
    "spaNo": "antes - hace poco - el otro dia"
  },
  {
    "rar": "chabé choquichí",
    "spa": "al principio",
    "rarNo": "chabe choquichi",
    "spaNo": "al principio"
  },
  {
    "rar": "chabóa",
    "spa": "barba - bigote",
    "rarNo": "chaboa",
    "spaNo": "barba - bigote"
  },
  {
    "rar": "chabochi",
    "spa": "mestizo",
    "rarNo": "chabochi",
    "spaNo": "mestizo"
  },
  {
    "rar": "chacá",
    "spa": "chanate",
    "rarNo": "chaca",
    "spaNo": "chanate"
  },
  {
    "rar": "cha'i",
    "spa": "apretarse - atorarse",
    "rarNo": "cha'i",
    "spaNo": "apretarse - atorarse"
  },
  {
    "rar": "chamarí",
    "spa": "venado",
    "rarNo": "chamari",
    "spaNo": "venado"
  },
  {
    "rar": "cha'merohua",
    "spa": "lengua",
    "rarNo": "cha'merohua",
    "spaNo": "lengua"
  },
  {
    "rar": "chané",
    "spa": "sonar mal",
    "rarNo": "chane",
    "spaNo": "sonar mal"
  },
  {
    "rar": "chapí",
    "spa": "agarrar",
    "rarNo": "chapi",
    "spaNo": "agarrar"
  },
  {
    "rar": "chaquena",
    "spa": "a un lado",
    "rarNo": "chaquena",
    "spaNo": "a un lado"
  },
  {
    "rar": "charóara",
    "spa": "quijada",
    "rarNo": "charoara",
    "spaNo": "quijada"
  },
  {
    "rar": "charóarahua",
    "spa": "barba - bigote",
    "rarNo": "charoarahua",
    "spaNo": "barba - bigote"
  },
  {
    "rar": "chati",
    "spa": "feo - mal",
    "rarNo": "chati",
    "spaNo": "feo - mal"
  },
  {
    "rar": "chérami",
    "spa": "vieja (cosa)",
    "rarNo": "cherami",
    "spaNo": "vieja (cosa)"
  },
  {
    "rar": "chí",
    "spa": "me",
    "rarNo": "chi",
    "spaNo": "me"
  },
  {
    "rar": "chibá",
    "spa": "chiva",
    "rarNo": "chiba",
    "spaNo": "chiva"
  },
  {
    "rar": "chibi",
    "spa": "mal",
    "rarNo": "chibi",
    "spaNo": "mal"
  },
  {
    "rar": "chicónami",
    "spa": "hueco",
    "rarNo": "chiconami",
    "spaNo": "hueco"
  },
  {
    "rar": "chicuri",
    "spa": "ratón",
    "rarNo": "chicuri",
    "spaNo": "raton"
  },
  {
    "rar": "chi'eé",
    "spa": "cuñado - cuñada",
    "rarNo": "chi'ee",
    "spaNo": "cunado - cunada"
  },
  {
    "rar": "chigá",
    "spa": "¿quién?",
    "rarNo": "chiga",
    "spaNo": "¿quien?"
  },
  {
    "rar": "chigó",
    "spa": "robar",
    "rarNo": "chigo",
    "spaNo": "robar"
  },
  {
    "rar": "chigórami",
    "spa": "ladrón",
    "rarNo": "chigorami",
    "spaNo": "ladron"
  },
  {
    "rar": "chihuá",
    "spa": "pegar",
    "rarNo": "chihua",
    "spaNo": "pegar"
  },
  {
    "rar": "chi'hua",
    "spa": "romperse - cortarse",
    "rarNo": "chi'hua",
    "spaNo": "romperse - cortarse"
  },
  {
    "rar": "chi'huana",
    "spa": "romper - cortar",
    "rarNo": "chi'huana",
    "spaNo": "romper - cortar"
  },
  {
    "rar": "chihuí",
    "spa": "guajolote",
    "rarNo": "chihui",
    "spaNo": "guajolote"
  },
  {
    "rar": "chi'í",
    "spa": "tomar pecho",
    "rarNo": "chi'i",
    "spaNo": "tomar pecho"
  },
  {
    "rar": "chijisó",
    "spa": "picar",
    "rarNo": "chijiso",
    "spaNo": "picar"
  },
  {
    "rar": "chijuna",
    "spa": "dar asco - menospreciar",
    "rarNo": "chijuna",
    "spaNo": "dar asco - menospreciar"
  },
  {
    "rar": "chimorí",
    "spa": "ardilla",
    "rarNo": "chimori",
    "spaNo": "ardilla"
  },
  {
    "rar": "chi'múcari",
    "spa": "calabacita",
    "rarNo": "chi'mucari",
    "spaNo": "calabacita"
  },
  {
    "rar": "chi'mura",
    "spa": "seno",
    "rarNo": "chi'mura",
    "spaNo": "seno"
  },
  {
    "rar": "chiná",
    "spa": "despeinado",
    "rarNo": "china",
    "spaNo": "despeinado"
  },
  {
    "rar": "chinasa",
    "spa": "esconder",
    "rarNo": "chinasa",
    "spaNo": "esconder"
  },
  {
    "rar": "chiní",
    "spa": "manta - ropa",
    "rarNo": "chini",
    "spaNo": "manta - ropa"
  },
  {
    "rar": "chiquí",
    "spa": "camote",
    "rarNo": "chiqui",
    "spaNo": "camote"
  },
  {
    "rar": "chipú",
    "spa": "estar amargo",
    "rarNo": "chipu",
    "spaNo": "estar amargo"
  },
  {
    "rar": "chipó",
    "spa": "palpitar",
    "rarNo": "chipo",
    "spaNo": "palpitar"
  },
  {
    "rar": "chipó",
    "spa": "salpicar - brincar",
    "rarNo": "chipo",
    "spaNo": "salpicar - brincar"
  },
  {
    "rar": "chi'rá",
    "spa": "amanecer",
    "rarNo": "chi'ra",
    "spaNo": "amanecer"
  },
  {
    "rar": "chi'ré",
    "spa": "importar",
    "rarNo": "chi're",
    "spaNo": "importar"
  },
  {
    "rar": "¿chu chiré",
    "spa": "¿Qué importa?",
    "rarNo": "¿chu chire",
    "spaNo": "¿Que importa?"
  },
  {
    "rar": "que chireco",
    "spa": "no importa",
    "rarNo": "que chireco",
    "spaNo": "no importa"
  },
  {
    "rar": "chi'reba",
    "spa": "pasar la noche",
    "rarNo": "chi'reba",
    "spaNo": "pasar la noche"
  },
  {
    "rar": "chi'ré",
    "spa": "pasar un tiempo",
    "rarNo": "chi're",
    "spaNo": "pasar un tiempo"
  },
  {
    "rar": "chirena",
    "spa": "sudar",
    "rarNo": "chirena",
    "spaNo": "sudar"
  },
  {
    "rar": "chirí",
    "spa": "queja",
    "rarNo": "chiri",
    "spaNo": "queja"
  },
  {
    "rar": "chirigá",
    "spa": "de ninguna manera",
    "rarNo": "chiriga",
    "spaNo": "de ninguna manera"
  },
  {
    "rar": "chirihuperaba",
    "spa": "no hay de que - de nada",
    "rarNo": "chirihuperaba",
    "spaNo": "no hay de que - de nada"
  },
  {
    "rar": "chi'ró",
    "spa": "aletear",
    "rarNo": "chi'ro",
    "spaNo": "aletear"
  },
  {
    "rar": "chirúrami",
    "spa": "círculos",
    "rarNo": "chirurami",
    "spaNo": "circulos"
  },
  {
    "rar": "chócami",
    "spa": "negro",
    "rarNo": "chocami",
    "spaNo": "negro"
  },
  {
    "rar": "chocó",
    "spa": "estar agrio",
    "rarNo": "choco",
    "spaNo": "estar agrio"
  },
  {
    "rar": "choba",
    "spa": "quemarse por el sol",
    "rarNo": "choba",
    "spaNo": "quemarse por el sol"
  },
  {
    "rar": "chocoba",
    "spa": "rodilla -hincarse - ponerse de rodillas",
    "rarNo": "chocoba",
    "spaNo": "rodilla -hincarse - ponerse de rodillas"
  },
  {
    "rar": "chocoóbara",
    "spa": "madrastra",
    "rarNo": "chocoobara",
    "spaNo": "madrastra"
  },
  {
    "rar": "chochora",
    "spa": "entumirse (pie o brazo)",
    "rarNo": "chochora",
    "spaNo": "entumirse (pie o brazo)"
  },
  {
    "rar": "cho'huá",
    "spa": "apagar fuego",
    "rarNo": "cho'hua",
    "spaNo": "apagar fuego"
  },
  {
    "rar": "cho'má",
    "spa": "resfriarse - moco",
    "rarNo": "cho'ma",
    "spaNo": "resfriarse - moco"
  },
  {
    "rar": "cho'méami",
    "spa": "mocoso",
    "rarNo": "cho'meami",
    "spaNo": "mocoso"
  },
  {
    "rar": "chomá",
    "spa": "nariz",
    "rarNo": "choma",
    "spaNo": "nariz"
  },
  {
    "rar": "cho'mabú",
    "spa": "limpiarse la nariz",
    "rarNo": "cho'mabu",
    "spaNo": "limpiarse la nariz"
  },
  {
    "rar": "cho'márachi",
    "spa": "hoyo de la nariz",
    "rarNo": "cho'marachi",
    "spaNo": "hoyo de la nariz"
  },
  {
    "rar": "cho'ná",
    "spa": "golpear - pegar",
    "rarNo": "cho'na",
    "spaNo": "golpear - pegar"
  },
  {
    "rar": "cho'maná",
    "spa": "tener tos - catarro",
    "rarNo": "cho'mana",
    "spaNo": "tener tos - catarro"
  },
  {
    "rar": "chonachona",
    "spa": "obscurecer",
    "rarNo": "chonachona",
    "spaNo": "obscurecer"
  },
  {
    "rar": "chónami",
    "spa": "sucio",
    "rarNo": "chonami",
    "spaNo": "sucio"
  },
  {
    "rar": "cho'ó",
    "spa": "hocico",
    "rarNo": "cho'o",
    "spaNo": "hocico"
  },
  {
    "rar": "cho'obáchari",
    "spa": "máscara",
    "rarNo": "cho'obachari",
    "spaNo": "mascara"
  },
  {
    "rar": "chopé",
    "spa": "ocote",
    "rarNo": "chope",
    "spaNo": "ocote"
  },
  {
    "rar": "chopi",
    "spa": "solamente - pero - sino",
    "rarNo": "chopi",
    "spaNo": "solamente - pero - sino"
  },
  {
    "rar": "chu iquí",
    "spa": "¿Qué pasa?",
    "rarNo": "chu iqui",
    "spaNo": "¿Que pasa?"
  },
  {
    "rar": "chu quipu",
    "spa": "¿Cuánto? - ¿Qué cantidad?",
    "rarNo": "chu quipu",
    "spaNo": "¿Cuanto? - ¿Que cantidad?"
  },
  {
    "rar": "chu yena",
    "spa": "¿a qué hora?",
    "rarNo": "chu yena",
    "spaNo": "¿a que hora?"
  },
  {
    "rar": "chu mi iquiri",
    "spa": "¿qué te parece?",
    "rarNo": "chu mi iquiri",
    "spaNo": "¿que te parece?"
  },
  {
    "rar": "chu yiri",
    "spa": "¿Qué color?- ¿cuál?",
    "rarNo": "chu yiri",
    "spaNo": "¿Que color?- ¿cual?"
  },
  {
    "rar": "choquéami",
    "spa": "veces",
    "rarNo": "choqueami",
    "spaNo": "veces"
  },
  {
    "rar": "choquira",
    "spa": "culpable",
    "rarNo": "choquira",
    "spaNo": "culpable"
  },
  {
    "rar": "choquira",
    "spa": "prinicipio",
    "rarNo": "choquira",
    "spaNo": "prinicipio"
  },
  {
    "rar": "chóruhua",
    "spa": "mugre - suciedad",
    "rarNo": "choruhua",
    "spaNo": "mugre - suciedad"
  },
  {
    "rar": "chorohuera",
    "spa": "ensuciarse",
    "rarNo": "chorohuera",
    "spaNo": "ensuciarse"
  },
  {
    "rar": "choyá",
    "spa": "encogerse",
    "rarNo": "choya",
    "spaNo": "encogerse"
  },
  {
    "rar": "choquira ju",
    "spa": "tiene la culpa",
    "rarNo": "choquira ju",
    "spaNo": "tiene la culpa"
  },
  {
    "rar": "choró",
    "spa": "estar pegajoso",
    "rarNo": "choro",
    "spaNo": "estar pegajoso"
  },
  {
    "rar": "chúbirigá",
    "spa": "de alguna manera",
    "rarNo": "chubiriga",
    "spaNo": "de alguna manera"
  },
  {
    "rar": "chuché",
    "spa": "¿qué?",
    "rarNo": "chuche",
    "spaNo": "¿que?"
  },
  {
    "rar": "chuhué",
    "spa": "como quiera",
    "rarNo": "chuhue",
    "spaNo": "como quiera"
  },
  {
    "rar": "chuhué biré",
    "spa": "cualquier",
    "rarNo": "chuhue bire",
    "spaNo": "cualquier"
  },
  {
    "rar": "chu'huechi",
    "spa": "panteón - tumba",
    "rarNo": "chu'huechi",
    "spaNo": "panteon - tumba"
  },
  {
    "rar": "chu'huí",
    "spa": "espiritú - fantasma",
    "rarNo": "chu'hui",
    "spaNo": "espiritu - fantasma"
  },
  {
    "rar": "chu' huiró",
    "spa": "sepultar - enterrar",
    "rarNo": "chu' huiro",
    "spaNo": "sepultar - enterrar"
  },
  {
    "rar": "chumarí",
    "spa": "venado",
    "rarNo": "chumari",
    "spaNo": "venado"
  },
  {
    "rar": "chuná",
    "spa": "higuera",
    "rarNo": "chuna",
    "spaNo": "higuera"
  },
  {
    "rar": "chuná racara",
    "spa": "higos",
    "rarNo": "chuna racara",
    "spaNo": "higos"
  },
  {
    "rar": "chupará",
    "spa": "sacar punta",
    "rarNo": "chupara",
    "spaNo": "sacar punta"
  },
  {
    "rar": "chupéami",
    "spa": "agudo - puntiagudo",
    "rarNo": "chupeami",
    "spaNo": "agudo - puntiagudo"
  },
  {
    "rar": "churi",
    "spa": "perrito",
    "rarNo": "churi",
    "spaNo": "perrito"
  },
  {
    "rar": "churicó",
    "spa": "¿Cuándo? ¿qué día?",
    "rarNo": "churico",
    "spaNo": "¿Cuando? ¿que dia?"
  },
  {
    "rar": "churigá",
    "spa": "¿cómo? ¿de que manera?",
    "rarNo": "churiga",
    "spaNo": "¿como? ¿de que manera?"
  },
  {
    "rar": "churigá mi mayé",
    "spa": "¿qué te parece?",
    "rarNo": "churiga mi maye",
    "spaNo": "¿que te parece?"
  },
  {
    "rar": "churipí",
    "spa": "pollito",
    "rarNo": "churipi",
    "spaNo": "pollito"
  },
  {
    "rar": "churubi rahué",
    "spa": "todos los días",
    "rarNo": "churubi rahue",
    "spaNo": "todos los dias"
  },
  {
    "rar": "churuguí",
    "spa": "pájaro",
    "rarNo": "churugui",
    "spaNo": "pajaro"
  },
  {
    "rar": "chuseá",
    "spa": "¿por qué?",
    "rarNo": "chusea",
    "spaNo": "¿por que?"
  },
  {
    "rar": "chuyiripi",
    "spa": "cualquiera",
    "rarNo": "chuyiripi",
    "spaNo": "cualquiera"
  },
  {
    "rar": "echaní",
    "spa": "así dice - eso dice",
    "rarNo": "echani",
    "spaNo": "asi dice - eso dice"
  },
  {
    "rar": "echarí",
    "spa": "entonces - más allá",
    "rarNo": "echari",
    "spaNo": "entonces - mas alla"
  },
  {
    "rar": "echi",
    "spa": "ése - ésa - aquel",
    "rarNo": "echi",
    "spaNo": "ese - esa - aquel"
  },
  {
    "rar": "echi jaré",
    "spa": "esos - esas",
    "rarNo": "echi jare",
    "spaNo": "esos - esas"
  },
  {
    "rar": "echijiti",
    "spa": "por causa de - por lo tanto",
    "rarNo": "echijiti",
    "spaNo": "por causa de - por lo tanto"
  },
  {
    "rar": "echimí",
    "spa": "aquel - aquella",
    "rarNo": "echimi",
    "spaNo": "aquel - aquella"
  },
  {
    "rar": "echiquí",
    "spa": "esa cantidad",
    "rarNo": "echiqui",
    "spaNo": "esa cantidad"
  },
  {
    "rar": "echo'ná inaro",
    "spa": "allá viene",
    "rarNo": "echo'na inaro",
    "spaNo": "alla viene"
  },
  {
    "rar": "garabé",
    "spa": "muy bien - muy bueno - perfecto",
    "rarNo": "garabe",
    "spaNo": "muy bien - muy bueno - perfecto"
  },
  {
    "rar": "garana",
    "spa": "mejorarse - convertirse",
    "rarNo": "garana",
    "spaNo": "mejorarse - convertirse"
  },
  {
    "rar": "garani machí",
    "spa": "estoy seguro",
    "rarNo": "garani machi",
    "spaNo": "estoy seguro"
  },
  {
    "rar": "garara",
    "spa": "componer - mejorar",
    "rarNo": "garara",
    "spaNo": "componer - mejorar"
  },
  {
    "rar": "garé",
    "spa": "amar - querer",
    "rarNo": "gare",
    "spaNo": "amar - querer"
  },
  {
    "rar": "hua",
    "spa": "flecha",
    "rarNo": "hua",
    "spaNo": "flecha"
  },
  {
    "rar": "hua",
    "spa": "madurarse (fruta o verdura)",
    "rarNo": "hua",
    "spaNo": "madurarse (fruta o verdura)"
  },
  {
    "rar": "huabé",
    "spa": "muchísimo",
    "rarNo": "huabe",
    "spaNo": "muchisimo"
  },
  {
    "rar": "gará",
    "spa": "bueno",
    "rarNo": "gara",
    "spaNo": "bueno"
  },
  {
    "rar": "gará aní",
    "spa": "ponerse de acuerdo",
    "rarNo": "gara ani",
    "spaNo": "ponerse de acuerdo"
  },
  {
    "rar": "huacasí",
    "spa": "vaca - res",
    "rarNo": "huacasi",
    "spaNo": "vaca - res"
  },
  {
    "rar": "huacocha",
    "spa": "estar chueco o encorvado",
    "rarNo": "huacocha",
    "spaNo": "estar chueco o encorvado"
  },
  {
    "rar": "hua'ché",
    "spa": "atiestarse de frío",
    "rarNo": "hua'che",
    "spaNo": "atiestarse de frio"
  },
  {
    "rar": "huachíami",
    "spa": "derecho - recto",
    "rarNo": "huachiami",
    "spaNo": "derecho - recto"
  },
  {
    "rar": "huachica",
    "spa": "costilla",
    "rarNo": "huachica",
    "spaNo": "costilla"
  },
  {
    "rar": "huajó",
    "spa": "zancudo",
    "rarNo": "huajo",
    "spaNo": "zancudo"
  },
  {
    "rar": "hua'ícari",
    "spa": "esófago",
    "rarNo": "hua'icari",
    "spaNo": "esofago"
  },
  {
    "rar": "huaminá",
    "spa": "por allá",
    "rarNo": "huamina",
    "spaNo": "por alla"
  },
  {
    "rar": "huaminá arihué",
    "spa": "abandonar",
    "rarNo": "huamina arihue",
    "spaNo": "abandonar"
  },
  {
    "rar": "huaminá 'masa",
    "spa": "escaparse",
    "rarNo": "huamina 'masa",
    "spaNo": "escaparse"
  },
  {
    "rar": "huaminá pa",
    "spa": "arrojar",
    "rarNo": "huamina pa",
    "spaNo": "arrojar"
  },
  {
    "rar": "huaminabi",
    "spa": "mucho más",
    "rarNo": "huaminabi",
    "spaNo": "mucho mas"
  },
  {
    "rar": "huaminana",
    "spa": "después - más adelante",
    "rarNo": "huaminana",
    "spaNo": "despues - mas adelante"
  },
  {
    "rar": "huaná",
    "spa": "lejos",
    "rarNo": "huana",
    "spaNo": "lejos"
  },
  {
    "rar": "huanihuí",
    "spa": "apartarse",
    "rarNo": "huanihui",
    "spaNo": "apartarse"
  },
  {
    "rar": "huanihuí",
    "spa": "pasado mañana",
    "rarNo": "huanihui",
    "spaNo": "pasado manana"
  },
  {
    "rar": "huanihuí rocogó",
    "spa": "anteanoche",
    "rarNo": "huanihui rocogo",
    "spaNo": "anteanoche"
  },
  {
    "rar": "huaqué",
    "spa": "secar",
    "rarNo": "huaque",
    "spaNo": "secar"
  },
  {
    "rar": "huaquiché",
    "spa": "secarse",
    "rarNo": "huaquiche",
    "spaNo": "secarse"
  },
  {
    "rar": "huaquichéami",
    "spa": "seco",
    "rarNo": "huaquicheami",
    "spaNo": "seco"
  },
  {
    "rar": "quiná",
    "spa": "acá - por acá",
    "rarNo": "quina",
    "spaNo": "aca - por aca"
  },
  {
    "rar": "huamí",
    "spa": "allá - más",
    "rarNo": "huami",
    "spaNo": "alla - mas"
  },
  {
    "rar": "huaré",
    "spa": "quizás - tal vez",
    "rarNo": "huare",
    "spaNo": "quizas - tal vez"
  },
  {
    "rar": "huarina",
    "spa": "veloz",
    "rarNo": "huarina",
    "spaNo": "veloz"
  },
  {
    "rar": "huarú",
    "spa": "grande - mucho",
    "rarNo": "huaru",
    "spaNo": "grande - mucho"
  },
  {
    "rar": "huarú ba' huechi",
    "spa": "mar",
    "rarNo": "huaru ba' huechi",
    "spaNo": "mar"
  },
  {
    "rar": "huarubé",
    "spa": "enorme - gigante - inmenso",
    "rarNo": "huarube",
    "spaNo": "enorme - gigante - inmenso"
  },
  {
    "rar": "huarúrachi",
    "spa": "ciudad",
    "rarNo": "huarurachi",
    "spaNo": "ciudad"
  },
  {
    "rar": "huasa",
    "spa": "cocinar",
    "rarNo": "huasa",
    "spaNo": "cocinar"
  },
  {
    "rar": "huasarara",
    "spa": "azadón",
    "rarNo": "huasarara",
    "spaNo": "azadon"
  },
  {
    "rar": "huasí",
    "spa": "cola",
    "rarNo": "huasi",
    "spaNo": "cola"
  },
  {
    "rar": "huasí",
    "spa": "suegra",
    "rarNo": "huasi",
    "spaNo": "suegra"
  },
  {
    "rar": "huasoná",
    "spa": "pato",
    "rarNo": "huasona",
    "spaNo": "pato"
  },
  {
    "rar": "huataca",
    "spa": "estar fuerte",
    "rarNo": "huataca",
    "spaNo": "estar fuerte"
  },
  {
    "rar": "huatácammi",
    "spa": "fuerte",
    "rarNo": "huatacammi",
    "spaNo": "fuerte"
  },
  {
    "rar": "huató",
    "spa": "estirarse",
    "rarNo": "huato",
    "spaNo": "estirarse"
  },
  {
    "rar": "huatoná",
    "spa": "estirarse",
    "rarNo": "huatona",
    "spaNo": "estirarse"
  },
  {
    "rar": "huatónari",
    "spa": "atole - pinole",
    "rarNo": "huatonari",
    "spaNo": "atole - pinole"
  },
  {
    "rar": "huayé",
    "spa": "hermana menor",
    "rarNo": "huaye",
    "spaNo": "hermana menor"
  },
  {
    "rar": "hie",
    "spa": "muy - mucho",
    "rarNo": "hie",
    "spaNo": "muy - mucho"
  },
  {
    "rar": "huabé",
    "spa": "muchísimo",
    "rarNo": "huabe",
    "spaNo": "muchisimo"
  },
  {
    "rar": "huenumí",
    "spa": "dinero",
    "rarNo": "huenumi",
    "spaNo": "dinero"
  },
  {
    "rar": "huenomí rojuácami",
    "spa": "cambio (dinero)",
    "rarNo": "huenomi rojuacami",
    "spaNo": "cambio (dinero)"
  },
  {
    "rar": "huepi",
    "spa": "solamente - nada más",
    "rarNo": "huepi",
    "spaNo": "solamente - nada mas"
  },
  {
    "rar": "huera ",
    "spa": "criar",
    "rarNo": "huera ",
    "spaNo": "criar"
  },
  {
    "rar": "huisa",
    "spa": "agarrar - arrebatar",
    "rarNo": "huisa",
    "spaNo": "agarrar - arrebatar"
  },
  {
    "rar": " huihuachi",
    "spa": "la pizca",
    "rarNo": " huihuachi",
    "spaNo": "la pizca"
  },
  {
    "rar": "huiba",
    "spa": "bañarse",
    "rarNo": "huiba",
    "spaNo": "banarse"
  },
  {
    "rar": "huicá",
    "spa": "mucho más",
    "rarNo": "huica",
    "spaNo": "mucho mas"
  },
  {
    "rar": "huicabé",
    "spa": "muchísimos",
    "rarNo": "huicabe",
    "spaNo": "muchisimos"
  },
  {
    "rar": "huicahua",
    "spa": "perdonar",
    "rarNo": "huicahua",
    "spaNo": "perdonar"
  },
  {
    "rar": "huicáhuaraba",
    "spa": "de nada - por nada",
    "rarNo": "huicahuaraba",
    "spaNo": "de nada - por nada"
  },
  {
    "rar": "huicáhuari",
    "spa": "perdón",
    "rarNo": "huicahuari",
    "spaNo": "perdon"
  },
  {
    "rar": "huicaná",
    "spa": "en muchas partes",
    "rarNo": "huicana",
    "spaNo": "en muchas partes"
  },
  {
    "rar": "huicari",
    "spa": "olvidarse",
    "rarNo": "huicari",
    "spaNo": "olvidarse"
  },
  {
    "rar": "huicará",
    "spa": "cantar",
    "rarNo": "huicara",
    "spaNo": "cantar"
  },
  {
    "rar": "huicó",
    "spa": "abejorro",
    "rarNo": "huico",
    "spaNo": "abejorro"
  },
  {
    "rar": "huicohuí",
    "spa": "hongo",
    "rarNo": "huicohui",
    "spaNo": "hongo"
  },
  {
    "rar": "huicheami",
    "spa": "piojoso",
    "rarNo": "huicheami",
    "spaNo": "piojoso"
  },
  {
    "rar": "huichí",
    "spa": "piel - cuero",
    "rarNo": "huichi",
    "spaNo": "piel - cuero"
  },
  {
    "rar": "huicuhui",
    "spa": "chiflar",
    "rarNo": "huicuhui",
    "spaNo": "chiflar"
  },
  {
    "rar": "huichá",
    "spa": "aguja",
    "rarNo": "huicha",
    "spaNo": "aguja"
  },
  {
    "rar": "simabo",
    "spa": "vamos a pie",
    "rarNo": "simabo",
    "spaNo": "vamos a pie"
  },
  {
    "rar": "huichí",
    "spa": "suelo",
    "rarNo": "huichi",
    "spaNo": "suelo"
  },
  {
    "rar": "huichí",
    "spa": "caerse",
    "rarNo": "huichi",
    "spaNo": "caerse"
  },
  {
    "rar": "huichiba",
    "spa": "caerse",
    "rarNo": "huichiba",
    "spaNo": "caerse"
  },
  {
    "rar": "huichibebcha",
    "spa": "rasparse",
    "rarNo": "huichibebcha",
    "spaNo": "rasparse"
  },
  {
    "rar": "huichimoba",
    "spa": "mundo",
    "rarNo": "huichimoba",
    "spaNo": "mundo"
  },
  {
    "rar": "huichó",
    "spa": "lavar ropa",
    "rarNo": "huicho",
    "spaNo": "lavar ropa"
  },
  {
    "rar": "huichorí",
    "spa": "barro",
    "rarNo": "huichori",
    "spaNo": "barro"
  },
  {
    "rar": "huigáami",
    "spa": "perdido",
    "rarNo": "huigaami",
    "spaNo": "perdido"
  },
  {
    "rar": "huíi",
    "spa": "lazar - amarrar (un animal)",
    "rarNo": "huii",
    "spaNo": "lazar - amarrar (un animal)"
  },
  {
    "rar": "hui'í",
    "spa": "manteca",
    "rarNo": "hui'i",
    "spaNo": "manteca"
  },
  {
    "rar": "huijáhua",
    "spa": "colgar",
    "rarNo": "huijahua",
    "spaNo": "colgar"
  },
  {
    "rar": "huiqué",
    "spa": "deber",
    "rarNo": "huique",
    "spaNo": "deber"
  },
  {
    "rar": "huiquiá",
    "spa": "extraviarse - perderse",
    "rarNo": "huiquia",
    "spaNo": "extraviarse - perderse"
  },
  {
    "rar": "hui'rá",
    "spa": "arete",
    "rarNo": "hui'ra",
    "spaNo": "arete"
  },
  {
    "rar": "huiputa",
    "spa": "tener demasiada hambre o sed",
    "rarNo": "huiputa",
    "spaNo": "tener demasiada hambre o sed"
  },
  {
    "rar": "huiquiyá muhué",
    "spa": "multiplicar",
    "rarNo": "huiquiya muhue",
    "spaNo": "multiplicar"
  },
  {
    "rar": "huirá",
    "spa": "parar",
    "rarNo": "huira",
    "spaNo": "parar"
  },
  {
    "rar": "huiráami",
    "spa": "vieja - anciana",
    "rarNo": "huiraami",
    "spaNo": "vieja - anciana"
  },
  {
    "rar": "huiraba",
    "spa": "detener",
    "rarNo": "huiraba",
    "spaNo": "detener"
  },
  {
    "rar": "hui'ré",
    "spa": "ancho",
    "rarNo": "hui're",
    "spaNo": "ancho"
  },
  {
    "rar": "hui'rí",
    "spa": "estar largo",
    "rarNo": "hui'ri",
    "spaNo": "estar largo"
  },
  {
    "rar": "hui'ribé ",
    "spa": "muy extenso",
    "rarNo": "hui'ribe ",
    "spaNo": "muy extenso"
  },
  {
    "rar": "huiriba",
    "spa": "pararse",
    "rarNo": "huiriba",
    "spaNo": "pararse"
  },
  {
    "rar": "huiríbari",
    "spa": "empezar a llover",
    "rarNo": "huiribari",
    "spaNo": "empezar a llover"
  },
  {
    "rar": "huiribeco",
    "spa": "después",
    "rarNo": "huiribeco",
    "spaNo": "despues"
  },
  {
    "rar": "hui'rique",
    "spa": "mucho despé",
    "rarNo": "hui'rique",
    "spaNo": "mucho despe"
  },
  {
    "rar": "hiuirihuirira",
    "spa": "andar (haciendo algo)",
    "rarNo": "hiuirihuirira",
    "spaNo": "andar (haciendo algo)"
  },
  {
    "rar": "huirisa",
    "spa": "levantarse",
    "rarNo": "huirisa",
    "spaNo": "levantarse"
  },
  {
    "rar": "huisiburi",
    "spa": "paño - trapo",
    "rarNo": "huisiburi",
    "spaNo": "pano - trapo"
  },
  {
    "rar": "huisogá",
    "spa": "lodo - zoquete",
    "rarNo": "huisoga",
    "spaNo": "lodo - zoquete"
  },
  {
    "rar": "huisú",
    "spa": "ordeñar",
    "rarNo": "huisu",
    "spaNo": "ordenar"
  },
  {
    "rar": "huiya",
    "spa": "mecate",
    "rarNo": "huiya",
    "spaNo": "mecate"
  },
  {
    "rar": "huiyé",
    "spa": "madre",
    "rarNo": "huiye",
    "spaNo": "madre"
  },
  {
    "rar": "hui'ye",
    "spa": "tierra - barro",
    "rarNo": "hui'ye",
    "spaNo": "tierra - barro"
  },
  {
    "rar": "ibiri - ibíripi",
    "spa": "cada uno - unos a otros",
    "rarNo": "ibiri - ibiripi",
    "spaNo": "cada uno - unos a otros"
  },
  {
    "rar": "ibócari",
    "spa": "chile (colorado - grande - seco)",
    "rarNo": "ibocari",
    "spaNo": "chile (colorado - grande - seco)"
  },
  {
    "rar": "icá",
    "spa": "hacer aire",
    "rarNo": "ica",
    "spaNo": "hacer aire"
  },
  {
    "rar": "icárata",
    "spa": "abanicar",
    "rarNo": "icarata",
    "spaNo": "abanicar"
  },
  {
    "rar": "icosa",
    "spa": "quemarse por el sol",
    "rarNo": "icosa",
    "spaNo": "quemarse por el sol"
  },
  {
    "rar": "ichá",
    "spa": "sembrar",
    "rarNo": "icha",
    "spaNo": "sembrar"
  },
  {
    "rar": "icháami",
    "spa": "sembrador",
    "rarNo": "ichaami",
    "spaNo": "sembrador"
  },
  {
    "rar": "iché",
    "spa": "picar - inyectar",
    "rarNo": "iche",
    "spaNo": "picar - inyectar"
  },
  {
    "rar": "ichipa",
    "spa": "esconderse",
    "rarNo": "ichipa",
    "spaNo": "esconderse"
  },
  {
    "rar": "ichuromí",
    "spa": "todo le cuerpo",
    "rarNo": "ichuromi",
    "spaNo": "todo le cuerpo"
  },
  {
    "rar": "igúsuhuami",
    "spa": "autoridades",
    "rarNo": "igusuhuami",
    "spaNo": "autoridades"
  },
  {
    "rar": "ihuará",
    "spa": "agujerar - perforar",
    "rarNo": "ihuara",
    "spaNo": "agujerar - perforar"
  },
  {
    "rar": "ihué",
    "spa": "muchachas",
    "rarNo": "ihue",
    "spaNo": "muchachas"
  },
  {
    "rar": "ihué",
    "spa": "tierra",
    "rarNo": "ihue",
    "spaNo": "tierra"
  },
  {
    "rar": "ihuepa",
    "spa": "tirar (al suelo)",
    "rarNo": "ihuepa",
    "spaNo": "tirar (al suelo)"
  },
  {
    "rar": "ihuérami",
    "spa": "fuerte",
    "rarNo": "ihuerami",
    "spaNo": "fuerte"
  },
  {
    "rar": "i'huita",
    "spa": "enredarse",
    "rarNo": "i'huita",
    "spaNo": "enredarse"
  },
  {
    "rar": "imá",
    "spa": "hígado",
    "rarNo": "ima",
    "spaNo": "higado"
  },
  {
    "rar": "ijínari",
    "spa": "éramos - eran",
    "rarNo": "ijinari",
    "spaNo": "eramos - eran"
  },
  {
    "rar": "imaséhuami",
    "spa": "caerse - tropezar",
    "rarNo": "imasehuami",
    "spaNo": "caerse - tropezar"
  },
  {
    "rar": "imúami",
    "spa": "voraz",
    "rarNo": "imuami",
    "spaNo": "voraz"
  },
  {
    "rar": "i'ní",
    "spa": "volar",
    "rarNo": "i'ni",
    "spaNo": "volar"
  },
  {
    "rar": "iqué",
    "spa": "ventilar",
    "rarNo": "ique",
    "spaNo": "ventilar"
  },
  {
    "rar": "iquí",
    "spa": "acontecer - suceder",
    "rarNo": "iqui",
    "spaNo": "acontecer - suceder"
  },
  {
    "rar": "chu mi iquiri",
    "spa": "¿qué te pasó?",
    "rarNo": "chu mi iquiri",
    "spaNo": "¿que te paso?"
  },
  {
    "rar": "iquí",
    "spa": "picar - morder (animal)",
    "rarNo": "iqui",
    "spaNo": "picar - morder (animal)"
  },
  {
    "rar": "iquíi ",
    "spa": "saber (lo que pasó)",
    "rarNo": "iquii ",
    "spaNo": "saber (lo que paso)"
  },
  {
    "rar": "irá",
    "spa": "nopal",
    "rarNo": "ira",
    "spaNo": "nopal"
  },
  {
    "rar": "irapa",
    "spa": "abrir",
    "rarNo": "irapa",
    "spaNo": "abrir"
  },
  {
    "rar": "irápara",
    "spa": "llave",
    "rarNo": "irapara",
    "spaNo": "llave"
  },
  {
    "rar": "irápata",
    "spa": "abrirse",
    "rarNo": "irapata",
    "spaNo": "abrirse"
  },
  {
    "rar": "irápatami",
    "spa": "abierto",
    "rarNo": "irapatami",
    "spaNo": "abierto"
  },
  {
    "rar": "iré ",
    "spa": "estar bueno - servir",
    "rarNo": "ire ",
    "spaNo": "estar bueno - servir"
  },
  {
    "rar": "ireta",
    "spa": "explicar bien",
    "rarNo": "ireta",
    "spaNo": "explicar bien"
  },
  {
    "rar": "irí",
    "spa": "cerco",
    "rarNo": "iri",
    "spaNo": "cerco"
  },
  {
    "rar": "irura",
    "spa": "ciertamiente",
    "rarNo": "irura",
    "spaNo": "ciertamiente"
  },
  {
    "rar": "isaba",
    "spa": "descansar",
    "rarNo": "isaba",
    "spaNo": "descansar"
  },
  {
    "rar": "isí",
    "spa": "orinar",
    "rarNo": "isi",
    "spaNo": "orinar"
  },
  {
    "rar": "itiyeri",
    "spa": "jugar",
    "rarNo": "itiyeri",
    "spaNo": "jugar"
  },
  {
    "rar": "iyéata",
    "spa": "estar abierto",
    "rarNo": "iyeata",
    "spaNo": "estar abierto"
  },
  {
    "rar": "iyénasí",
    "spa": "hasta que",
    "rarNo": "iyenasi",
    "spaNo": "hasta que"
  },
  {
    "rar": "jaba",
    "spa": "pararse",
    "rarNo": "jaba",
    "spaNo": "pararse"
  },
  {
    "rar": "jabu",
    "spa": "caballo",
    "rarNo": "jabu",
    "spaNo": "caballo"
  },
  {
    "rar": "jácami",
    "spa": "vivo",
    "rarNo": "jacami",
    "spaNo": "vivo"
  },
  {
    "rar": "jami",
    "spa": "por aquí - por este lado",
    "rarNo": "jami",
    "spaNo": "por aqui - por este lado"
  },
  {
    "rar": "janiri",
    "spa": "estar contento",
    "rarNo": "janiri",
    "spaNo": "estar contento"
  },
  {
    "rar": "jasa",
    "spa": "levantarse",
    "rarNo": "jasa",
    "spaNo": "levantarse"
  },
  {
    "rar": "jeré",
    "spa": "así es",
    "rarNo": "jere",
    "spaNo": "asi es"
  },
  {
    "rar": "jícuri",
    "spa": "peyote",
    "rarNo": "jicuri",
    "spaNo": "peyote"
  },
  {
    "rar": "jiero",
    "spa": "fierro",
    "rarNo": "jiero",
    "spaNo": "fierro"
  },
  {
    "rar": "jecuá",
    "spa": "aca esta",
    "rarNo": "jecua",
    "spaNo": "aca esta"
  },
  {
    "rar": "jínohua",
    "spa": "tener hijos",
    "rarNo": "jinohua",
    "spaNo": "tener hijos"
  },
  {
    "rar": "jipi",
    "spa": "ahora",
    "rarNo": "jipi",
    "spaNo": "ahora"
  },
  {
    "rar": "mapujiti",
    "spa": "porque",
    "rarNo": "mapujiti",
    "spaNo": "porque"
  },
  {
    "rar": "jiyá",
    "spa": "apresurarse",
    "rarNo": "jiya",
    "spaNo": "apresurarse"
  },
  {
    "rar": "jiyata",
    "spa": "apresurarse",
    "rarNo": "jiyata",
    "spaNo": "apresurarse"
  },
  {
    "rar": "jiyero ",
    "spa": "hierro",
    "rarNo": "jiyero ",
    "spaNo": "hierro"
  },
  {
    "rar": "jócari",
    "spa": "camaleón",
    "rarNo": "jocari",
    "spaNo": "camaleon"
  },
  {
    "rar": "jochi",
    "spa": "hoyo de la nariz",
    "rarNo": "jochi",
    "spaNo": "hoyo de la nariz"
  },
  {
    "rar": "jóhua",
    "spa": "apuntar - señalar",
    "rarNo": "johua",
    "spaNo": "apuntar - senalar"
  },
  {
    "rar": "jonsa",
    "spa": "desde - de ",
    "rarNo": "jonsa",
    "spaNo": "desde - de "
  },
  {
    "rar": "jora",
    "spa": "escarbar (hoyo)",
    "rarNo": "jora",
    "spaNo": "escarbar (hoyo)"
  },
  {
    "rar": "ju - juco - jupá",
    "spa": "ser - estar",
    "rarNo": "ju - juco - jupa",
    "spaNo": "ser - estar"
  },
  {
    "rar": "jubá",
    "spa": "atrás",
    "rarNo": "juba",
    "spaNo": "atras"
  },
  {
    "rar": "jubáami",
    "spa": "por atrás",
    "rarNo": "jubaami",
    "spaNo": "por atras"
  },
  {
    "rar": "jubá ocuá",
    "spa": "hacia atrás",
    "rarNo": "juba ocua",
    "spaNo": "hacia atras"
  },
  {
    "rar": "cha jubá",
    "spa": "tener mal olor",
    "rarNo": "cha juba",
    "spaNo": "tener mal olor"
  },
  {
    "rar": "jubáami",
    "spa": "al fin - finalmente",
    "rarNo": "jubaami",
    "spaNo": "al fin - finalmente"
  },
  {
    "rar": "jubánara",
    "spa": "anterior",
    "rarNo": "jubanara",
    "spaNo": "anterior"
  },
  {
    "rar": "jubé",
    "spa": "mesa - banca",
    "rarNo": "jube",
    "spaNo": "mesa - banca"
  },
  {
    "rar": "jubí ",
    "spa": "esposas",
    "rarNo": "jubi ",
    "spaNo": "esposas"
  },
  {
    "rar": "juca ",
    "spa": "oler",
    "rarNo": "juca ",
    "spaNo": "oler"
  },
  {
    "rar": "jumsa",
    "spa": "huir",
    "rarNo": "jumsa",
    "spaNo": "huir"
  },
  {
    "rar": "jurá",
    "spa": "enviar - mandar (mensaje)",
    "rarNo": "jura",
    "spaNo": "enviar - mandar (mensaje)"
  },
  {
    "rar": "jurárami",
    "spa": "mandado",
    "rarNo": "jurarami",
    "spaNo": "mandado"
  },
  {
    "rar": "juri",
    "spa": "si seguro",
    "rarNo": "juri",
    "spaNo": "si seguro"
  },
  {
    "rar": "juma",
    "spa": "correr",
    "rarNo": "juma",
    "spaNo": "correr"
  },
  {
    "rar": "la",
    "spa": "sangre",
    "rarNo": "la",
    "spaNo": "sangre"
  },
  {
    "rar": "nijé lalá",
    "spa": "mi sangre",
    "rarNo": "nije lala",
    "spaNo": "mi sangre"
  },
  {
    "rar": "lábara",
    "spa": "venado",
    "rarNo": "labara",
    "spaNo": "venado"
  },
  {
    "rar": "lábari",
    "spa": "nervio",
    "rarNo": "labari",
    "spaNo": "nervio"
  },
  {
    "rar": "lamú",
    "spa": "adolorido por golpe",
    "rarNo": "lamu",
    "spaNo": "adolorido por golpe"
  },
  {
    "rar": "lánami",
    "spa": "anaranjado",
    "rarNo": "lanami",
    "spaNo": "anaranjado"
  },
  {
    "rar": "lasiba",
    "spa": "oxidarse",
    "rarNo": "lasiba",
    "spaNo": "oxidarse"
  },
  {
    "rar": "lasíbami",
    "spa": "oxidado",
    "rarNo": "lasibami",
    "spaNo": "oxidado"
  },
  {
    "rar": "léami",
    "spa": "sangriento",
    "rarNo": "leami",
    "spaNo": "sangriento"
  },
  {
    "rar": "lena",
    "spa": "sangrar - desangrar",
    "rarNo": "lena",
    "spaNo": "sangrar - desangrar"
  },
  {
    "rar": "limeta",
    "spa": "botella de vidrio",
    "rarNo": "limeta",
    "spaNo": "botella de vidrio"
  },
  {
    "rar": "loca",
    "spa": "batir - mezclar",
    "rarNo": "loca",
    "spaNo": "batir - mezclar"
  },
  {
    "rar": "lohua - 'loché",
    "spa": "tener hambre",
    "rarNo": "lohua - 'loche",
    "spaNo": "tener hambre"
  },
  {
    "rar": "lohuari",
    "spa": "hambre",
    "rarNo": "lohuari",
    "spaNo": "hambre"
  },
  {
    "rar": "lohuera",
    "spa": "abanico",
    "rarNo": "lohuera",
    "spaNo": "abanico"
  },
  {
    "rar": "luhuíami",
    "spa": "usado - gastado",
    "rarNo": "luhuiami",
    "spaNo": "usado - gastado"
  },
  {
    "rar": "ma",
    "spa": "correr",
    "rarNo": "ma",
    "spaNo": "correr"
  },
  {
    "rar": "ma'agá",
    "spa": "ciempiés",
    "rarNo": "ma'aga",
    "spaNo": "ciempies"
  },
  {
    "rar": "mabá",
    "spa": "!vamos!",
    "rarNo": "maba",
    "spaNo": "!vamos!"
  },
  {
    "rar": "macari",
    "spa": "cuarta (medida)",
    "rarNo": "macari",
    "spaNo": "cuarta (medida)"
  },
  {
    "rar": "macahui",
    "spa": "paloma",
    "rarNo": "macahui",
    "spaNo": "paloma"
  },
  {
    "rar": "macoy",
    "spa": "diez",
    "rarNo": "macoy",
    "spaNo": "diez"
  },
  {
    "rar": "macó",
    "spa": "agarrar",
    "rarNo": "maco",
    "spaNo": "agarrar"
  },
  {
    "rar": "macoy miná biquiyá",
    "spa": "trece",
    "rarNo": "macoy mina biquiya",
    "spaNo": "trece"
  },
  {
    "rar": "macoy miná bire",
    "spa": "once",
    "rarNo": "macoy mina bire",
    "spaNo": "once"
  },
  {
    "rar": "macoy miná marí",
    "spa": "quince",
    "rarNo": "macoy mina mari",
    "spaNo": "quince"
  },
  {
    "rar": "macoy miná nahuó",
    "spa": "catorce",
    "rarNo": "macoy mina nahuo",
    "spaNo": "catorce"
  },
  {
    "rar": "macoy miná ocuá",
    "spa": "doce",
    "rarNo": "macoy mina ocua",
    "spaNo": "doce"
  },
  {
    "rar": "macúsuhua",
    "spa": "dedo",
    "rarNo": "macusuhua",
    "spaNo": "dedo"
  },
  {
    "rar": "machá",
    "spa": "garrapata",
    "rarNo": "macha",
    "spaNo": "garrapata"
  },
  {
    "rar": "machí",
    "spa": "saber - conocer",
    "rarNo": "machi",
    "spaNo": "saber - conocer"
  },
  {
    "rar": "machí ",
    "spa": "verse bien",
    "rarNo": "machi ",
    "spaNo": "verse bien"
  },
  {
    "rar": "machíami",
    "spa": "claramente",
    "rarNo": "machiami",
    "spaNo": "claramente"
  },
  {
    "rar": "machíri",
    "spa": "podria ver",
    "rarNo": "machiri",
    "spaNo": "podria ver"
  },
  {
    "rar": "machí oserí 'néniya",
    "spa": "sabe leer",
    "rarNo": "machi oseri 'neniya",
    "spaNo": "sabe leer"
  },
  {
    "rar": "machibú",
    "spa": "sacar punta",
    "rarNo": "machibu",
    "spaNo": "sacar punta"
  },
  {
    "rar": "machiná",
    "spa": "afuera",
    "rarNo": "machina",
    "spaNo": "afuera"
  },
  {
    "rar": "machíi",
    "spa": "ver bien",
    "rarNo": "machii",
    "spaNo": "ver bien"
  },
  {
    "rar": "machina",
    "spa": "salir",
    "rarNo": "machina",
    "spaNo": "salir"
  },
  {
    "rar": "machira",
    "spa": "descubrir - mostrar",
    "rarNo": "machira",
    "spaNo": "descubrir - mostrar"
  },
  {
    "rar": "machiri",
    "spa": "alacran",
    "rarNo": "machiri",
    "spaNo": "alacran"
  },
  {
    "rar": "machíriami",
    "spa": "que puede ver",
    "rarNo": "machiriami",
    "spaNo": "que puede ver"
  },
  {
    "rar": "que machíriami",
    "spa": "ciego",
    "rarNo": "que machiriami",
    "spaNo": "ciego"
  },
  {
    "rar": "mahuiyá",
    "spa": "león - puma",
    "rarNo": "mahuiya",
    "spaNo": "leon - puma"
  },
  {
    "rar": "majajá",
    "spa": "espantarse",
    "rarNo": "majaja",
    "spaNo": "espantarse"
  },
  {
    "rar": "majaga",
    "spa": "temer - tener miedo",
    "rarNo": "majaga",
    "spaNo": "temer - tener miedo"
  },
  {
    "rar": "majáami",
    "spa": "cobarde - miedoso - temeroso",
    "rarNo": "majaami",
    "spaNo": "cobarde - miedoso - temeroso"
  },
  {
    "rar": "majajara - majajárata",
    "spa": "asustar - espantar",
    "rarNo": "majajara - majajarata",
    "spaNo": "asustar - espantar"
  },
  {
    "rar": "majárami",
    "spa": "nervioso",
    "rarNo": "majarami",
    "spaNo": "nervioso"
  },
  {
    "rar": "maní",
    "spa": "contener un líquido",
    "rarNo": "mani",
    "spaNo": "contener un liquido"
  },
  {
    "rar": "mapari",
    "spa": "cuando",
    "rarNo": "mapari",
    "spaNo": "cuando"
  },
  {
    "rar": "maparí jonsa",
    "spa": "desde que",
    "rarNo": "mapari jonsa",
    "spaNo": "desde que"
  },
  {
    "rar": "mapo'na",
    "spa": "dónde",
    "rarNo": "mapo'na",
    "spaNo": "donde"
  },
  {
    "rar": "mapujiti",
    "spa": "para - que - el cual ",
    "rarNo": "mapujiti",
    "spaNo": "para - que - el cual "
  },
  {
    "rar": "mapu iquí",
    "spa": "cuánto",
    "rarNo": "mapu iqui",
    "spaNo": "cuanto"
  },
  {
    "rar": "mapuyena",
    "spa": "mientras",
    "rarNo": "mapuyena",
    "spaNo": "mientras"
  },
  {
    "rar": "mapuyénasi",
    "spa": "hasta que",
    "rarNo": "mapuyenasi",
    "spaNo": "hasta que"
  },
  {
    "rar": "mapuyiri",
    "spa": "semejante",
    "rarNo": "mapuyiri",
    "spaNo": "semejante"
  },
  {
    "rar": "mapuyíripi",
    "spa": "cualquier",
    "rarNo": "mapuyiripi",
    "spaNo": "cualquier"
  },
  {
    "rar": "mará",
    "spa": "hija",
    "rarNo": "mara",
    "spaNo": "hija"
  },
  {
    "rar": "maracá",
    "spa": "paleta",
    "rarNo": "maraca",
    "spaNo": "paleta"
  },
  {
    "rar": "marachi",
    "spa": "sobaco",
    "rarNo": "marachi",
    "spaNo": "sobaco"
  },
  {
    "rar": "marí",
    "spa": "cinco",
    "rarNo": "mari",
    "spaNo": "cinco"
  },
  {
    "rar": "marí",
    "spa": "padre (de la hija)",
    "rarNo": "mari",
    "spaNo": "padre (de la hija)"
  },
  {
    "rar": "marisa",
    "spa": "quinto",
    "rarNo": "marisa",
    "spaNo": "quinto"
  },
  {
    "rar": "marisa macoy",
    "spa": "cincuenta",
    "rarNo": "marisa macoy",
    "spaNo": "cincuenta"
  },
  {
    "rar": "masa ",
    "spa": "huir",
    "rarNo": "masa ",
    "spaNo": "huir"
  },
  {
    "rar": "masó",
    "spa": "amasar",
    "rarNo": "maso",
    "spaNo": "amasar"
  },
  {
    "rar": "matá",
    "spa": "metate",
    "rarNo": "mata",
    "spaNo": "metate"
  },
  {
    "rar": "mató",
    "spa": "hombro",
    "rarNo": "mato",
    "spaNo": "hombro"
  },
  {
    "rar": "matora",
    "spa": "llevar - cargar (en la espalda)",
    "rarNo": "matora",
    "spaNo": "llevar - cargar (en la espalda)"
  },
  {
    "rar": "matosá",
    "spa": "canas",
    "rarNo": "matosa",
    "spaNo": "canas"
  },
  {
    "rar": "matosé",
    "spa": "tener canas",
    "rarNo": "matose",
    "spaNo": "tener canas"
  },
  {
    "rar": "mayé",
    "spa": "creer que sí - pensar - opinar",
    "rarNo": "maye",
    "spaNo": "creer que si - pensar - opinar"
  },
  {
    "rar": "mayé",
    "spa": "tener celos",
    "rarNo": "maye",
    "spaNo": "tener celos"
  },
  {
    "rar": "me",
    "spa": "maguey",
    "rarNo": "me",
    "spaNo": "maguey"
  },
  {
    "rar": "me ",
    "spa": "traer",
    "rarNo": "me ",
    "spaNo": "traer"
  },
  {
    "rar": "me ",
    "spa": "tanto - mucho",
    "rarNo": "me ",
    "spaNo": "tanto - mucho"
  },
  {
    "rar": "me ",
    "spa": "ganar sueldo",
    "rarNo": "me ",
    "spaNo": "ganar sueldo"
  },
  {
    "rar": "me ",
    "spa": "mezcal",
    "rarNo": "me ",
    "spaNo": "mezcal"
  },
  {
    "rar": "méchuri",
    "spa": "cordero",
    "rarNo": "mechuri",
    "spaNo": "cordero"
  },
  {
    "rar": "meta",
    "spa": "arrear - llevar (animales)",
    "rarNo": "meta",
    "spaNo": "arrear - llevar (animales)"
  },
  {
    "rar": "mi",
    "spa": "aquel - aquella",
    "rarNo": "mi",
    "spaNo": "aquel - aquella"
  },
  {
    "rar": "micá",
    "spa": "lejos",
    "rarNo": "mica",
    "spaNo": "lejos"
  },
  {
    "rar": "micabé",
    "spa": "muy lejos",
    "rarNo": "micabe",
    "spaNo": "muy lejos"
  },
  {
    "rar": "micabéana",
    "spa": "alejarse - retirarse",
    "rarNo": "micabeana",
    "spaNo": "alejarse - retirarse"
  },
  {
    "rar": "michá",
    "spa": "luna - mes",
    "rarNo": "micha",
    "spaNo": "luna - mes"
  },
  {
    "rar": "michira",
    "spa": "astilla",
    "rarNo": "michira",
    "spaNo": "astilla"
  },
  {
    "rar": "michira",
    "spa": "alacran",
    "rarNo": "michira",
    "spaNo": "alacran"
  },
  {
    "rar": "michona",
    "spa": "martillar",
    "rarNo": "michona",
    "spaNo": "martillar"
  },
  {
    "rar": "michora",
    "spa": "marro - mazo",
    "rarNo": "michora",
    "spaNo": "marro - mazo"
  },
  {
    "rar": "michóntami",
    "spa": "clavado",
    "rarNo": "michontami",
    "spaNo": "clavado"
  },
  {
    "rar": "misi",
    "spa": "gato",
    "rarNo": "misi",
    "spaNo": "gato"
  },
  {
    "rar": "michú",
    "spa": "abollarse",
    "rarNo": "michu",
    "spaNo": "abollarse"
  },
  {
    "rar": "michúnari",
    "spa": "aplastar",
    "rarNo": "michunari",
    "spaNo": "aplastar"
  },
  {
    "rar": "mijírami",
    "spa": "asado - tatemado",
    "rarNo": "mijirami",
    "spaNo": "asado - tatemado"
  },
  {
    "rar": "sapá mijírami",
    "spa": "barbacoa",
    "rarNo": "sapa mijirami",
    "spaNo": "barbacoa"
  },
  {
    "rar": "minana",
    "spa": "mas allá - poco después",
    "rarNo": "minana",
    "spaNo": "mas alla - poco despues"
  },
  {
    "rar": "mi'ró",
    "spa": "desmayarse",
    "rarNo": "mi'ro",
    "spaNo": "desmayarse"
  },
  {
    "rar": "misucuá",
    "spa": "zarzamora",
    "rarNo": "misucua",
    "spaNo": "zarzamora"
  },
  {
    "rar": "mitá",
    "spa": "ganar (juego o carrera)",
    "rarNo": "mita",
    "spaNo": "ganar (juego o carrera)"
  },
  {
    "rar": "mitáchana",
    "spa": "aplastar",
    "rarNo": "mitachana",
    "spaNo": "aplastar"
  },
  {
    "rar": "mitáchami",
    "spa": "aplastado",
    "rarNo": "mitachami",
    "spaNo": "aplastado"
  },
  {
    "rar": "miteba",
    "spa": "tocerse (tobillo)",
    "rarNo": "miteba",
    "spaNo": "tocerse (tobillo)"
  },
  {
    "rar": "mi'yá",
    "spa": "asesinar - matar",
    "rarNo": "mi'ya",
    "spaNo": "asesinar - matar"
  },
  {
    "rar": "miyérati",
    "spa": "madrastra",
    "rarNo": "miyerati",
    "spaNo": "madrastra"
  },
  {
    "rar": "mo",
    "spa": "subir",
    "rarNo": "mo",
    "spaNo": "subir"
  },
  {
    "rar": "moba",
    "spa": "sobre - encima",
    "rarNo": "moba",
    "spaNo": "sobre - encima"
  },
  {
    "rar": "mocuásari",
    "spa": "quelite",
    "rarNo": "mocuasari",
    "spaNo": "quelite"
  },
  {
    "rar": "mochocuá",
    "spa": "helecho",
    "rarNo": "mochocua",
    "spaNo": "helecho"
  },
  {
    "rar": "mochogohua",
    "spa": "tener cerebro",
    "rarNo": "mochogohua",
    "spaNo": "tener cerebro"
  },
  {
    "rar": "mo'huá",
    "spa": "encerrar",
    "rarNo": "mo'hua",
    "spaNo": "encerrar"
  },
  {
    "rar": "mojuana",
    "spa": "quebrar",
    "rarNo": "mojuana",
    "spaNo": "quebrar"
  },
  {
    "rar": "mo'né",
    "spa": "yerno",
    "rarNo": "mo'ne",
    "spaNo": "yerno"
  },
  {
    "rar": "mo'ó",
    "spa": "cabeza",
    "rarNo": "mo'o",
    "spaNo": "cabeza"
  },
  {
    "rar": "mo'orí",
    "spa": "nuera",
    "rarNo": "mo'ori",
    "spaNo": "nuera"
  },
  {
    "rar": "morí",
    "spa": "humo",
    "rarNo": "mori",
    "spaNo": "humo"
  },
  {
    "rar": "morisó",
    "spa": "hollin ",
    "rarNo": "moriso",
    "spaNo": "hollin "
  },
  {
    "rar": "morisó",
    "spa": "ahumarse",
    "rarNo": "moriso",
    "spaNo": "ahumarse"
  },
  {
    "rar": "morisota",
    "spa": "ahumarse",
    "rarNo": "morisota",
    "spaNo": "ahumarse"
  },
  {
    "rar": "mosí",
    "spa": "desmenuzar",
    "rarNo": "mosi",
    "spaNo": "desmenuzar"
  },
  {
    "rar": "motosá",
    "spa": "canas",
    "rarNo": "motosa",
    "spaNo": "canas"
  },
  {
    "rar": "mubú",
    "spa": "elevar",
    "rarNo": "mubu",
    "spaNo": "elevar"
  },
  {
    "rar": "mucú",
    "spa": "morirse - fallecer",
    "rarNo": "mucu",
    "spaNo": "morirse - fallecer"
  },
  {
    "rar": "mucúami",
    "spa": "muerto - difunto",
    "rarNo": "mucuami",
    "spaNo": "muerto - difunto"
  },
  {
    "rar": "múchari",
    "spa": "nene - criatura",
    "rarNo": "muchari",
    "spaNo": "nene - criatura"
  },
  {
    "rar": "muchínara",
    "spa": "querer senarse",
    "rarNo": "muchinara",
    "spaNo": "querer senarse"
  },
  {
    "rar": "muchuhua",
    "spa": "poner",
    "rarNo": "muchuhua",
    "spaNo": "poner"
  },
  {
    "rar": "muguí",
    "spa": "mujeres",
    "rarNo": "mugui",
    "spaNo": "mujeres"
  },
  {
    "rar": "mugúsuhuami",
    "spa": "epiléptico",
    "rarNo": "mugusuhuami",
    "spaNo": "epileptico"
  },
  {
    "rar": "muhuehua",
    "spa": "aumentar",
    "rarNo": "muhuehua",
    "spaNo": "aumentar"
  },
  {
    "rar": "mujé",
    "spa": "tu - usted",
    "rarNo": "muje",
    "spaNo": "tu - usted"
  },
  {
    "rar": "mujeru",
    "spa": "¿y tú?",
    "rarNo": "mujeru",
    "spaNo": "¿y tu?"
  },
  {
    "rar": "mujé binoy",
    "spa": "tú mismo",
    "rarNo": "muje binoy",
    "spaNo": "tu mismo"
  },
  {
    "rar": "muné ",
    "spa": "sembrar frijol",
    "rarNo": "mune ",
    "spaNo": "sembrar frijol"
  },
  {
    "rar": "muquira",
    "spa": "hembra",
    "rarNo": "muquira",
    "spaNo": "hembra"
  },
  {
    "rar": "torí muquira",
    "spa": "gallina",
    "rarNo": "tori muquira",
    "spaNo": "gallina"
  },
  {
    "rar": "muripi",
    "spa": "cerca",
    "rarNo": "muripi",
    "spaNo": "cerca"
  },
  {
    "rar": "murubé",
    "spa": "muy cerca",
    "rarNo": "murube",
    "spaNo": "muy cerca"
  },
  {
    "rar": "murubpe bitéami",
    "spa": "vecino",
    "rarNo": "murubpe biteami",
    "spaNo": "vecino"
  },
  {
    "rar": "murubéana",
    "spa": "acercarse",
    "rarNo": "murubeana",
    "spaNo": "acercarse"
  },
  {
    "rar": "muté",
    "spa": "aplastarse",
    "rarNo": "mute",
    "spaNo": "aplastarse"
  },
  {
    "rar": "muteta",
    "spa": "aplastar",
    "rarNo": "muteta",
    "spaNo": "aplastar"
  },
  {
    "rar": "na - nari",
    "spa": "éste - ésta",
    "rarNo": "na - nari",
    "spaNo": "este - esta"
  },
  {
    "rar": "na'á",
    "spa": "quemar",
    "rarNo": "na'a",
    "spaNo": "quemar"
  },
  {
    "rar": "náapa",
    "spa": "alcanzar",
    "rarNo": "naapa",
    "spaNo": "alcanzar"
  },
  {
    "rar": "na'árami",
    "spa": "quemado",
    "rarNo": "na'arami",
    "spaNo": "quemado"
  },
  {
    "rar": "nabé",
    "spa": "poco más allá",
    "rarNo": "nabe",
    "spaNo": "poco mas alla"
  },
  {
    "rar": "naca",
    "spa": "de lejos",
    "rarNo": "naca",
    "spaNo": "de lejos"
  },
  {
    "rar": "nacá",
    "spa": "oreja - oído",
    "rarNo": "naca",
    "spaNo": "oreja - oido"
  },
  {
    "rar": "nacarópari",
    "spa": "mariposa",
    "rarNo": "nacaropari",
    "spaNo": "mariposa"
  },
  {
    "rar": "nacátara",
    "spa": "hacer mucho ruido",
    "rarNo": "nacatara",
    "spaNo": "hacer mucho ruido"
  },
  {
    "rar": "cha nacátara",
    "spa": "callate",
    "rarNo": "cha nacatara",
    "spaNo": "callate"
  },
  {
    "rar": "nacóo ",
    "spa": "pelear",
    "rarNo": "nacoo ",
    "spaNo": "pelear"
  },
  {
    "rar": "nacuba",
    "spa": "borrar",
    "rarNo": "nacuba",
    "spaNo": "borrar"
  },
  {
    "rar": "nacurihua",
    "spa": "cambiar",
    "rarNo": "nacurihua",
    "spaNo": "cambiar"
  },
  {
    "rar": "nacuríhua",
    "spa": "transformar",
    "rarNo": "nacurihua",
    "spaNo": "transformar"
  },
  {
    "rar": "nachigó",
    "spa": "amarrar - anudar",
    "rarNo": "nachigo",
    "spaNo": "amarrar - anudar"
  },
  {
    "rar": "nachibuí",
    "spa": "alcanzar",
    "rarNo": "nachibui",
    "spaNo": "alcanzar"
  },
  {
    "rar": "nachupa",
    "spa": "conectar",
    "rarNo": "nachupa",
    "spaNo": "conectar"
  },
  {
    "rar": "nachuta",
    "spa": "repartir - distribuir",
    "rarNo": "nachuta",
    "spaNo": "repartir - distribuir"
  },
  {
    "rar": "na'érami",
    "spa": "prendido",
    "rarNo": "na'erami",
    "spaNo": "prendido"
  },
  {
    "rar": "nahuá",
    "spa": "raíz",
    "rarNo": "nahua",
    "spaNo": "raiz"
  },
  {
    "rar": "nahuají",
    "spa": "cantar",
    "rarNo": "nahuaji",
    "spaNo": "cantar"
  },
  {
    "rar": "nahuará",
    "spa": "enraizar",
    "rarNo": "nahuara",
    "spaNo": "enraizar"
  },
  {
    "rar": "nahuara",
    "spa": "dar a luz ",
    "rarNo": "nahuara",
    "spaNo": "dar a luz "
  },
  {
    "rar": "nahuesa",
    "spa": "avisar - predicar",
    "rarNo": "nahuesa",
    "spaNo": "avisar - predicar"
  },
  {
    "rar": "nahuíi",
    "spa": "acercarse",
    "rarNo": "nahuii",
    "spaNo": "acercarse"
  },
  {
    "rar": "nahuó",
    "spa": "cuatro",
    "rarNo": "nahuo",
    "spaNo": "cuatro"
  },
  {
    "rar": "na'í",
    "spa": "aquí",
    "rarNo": "na'i",
    "spaNo": "aqui"
  },
  {
    "rar": "na'í",
    "spa": "lumbre",
    "rarNo": "na'i",
    "spaNo": "lumbre"
  },
  {
    "rar": "najata",
    "spa": "seguir",
    "rarNo": "najata",
    "spaNo": "seguir"
  },
  {
    "rar": "najirémami",
    "spa": "hermanos",
    "rarNo": "najiremami",
    "spaNo": "hermanos"
  },
  {
    "rar": "nami",
    "spa": "oír",
    "rarNo": "nami",
    "spaNo": "oir"
  },
  {
    "rar": "namuti",
    "spa": "cosa - animal",
    "rarNo": "namuti",
    "spaNo": "cosa - animal"
  },
  {
    "rar": "na'oma",
    "spa": "tapar",
    "rarNo": "na'oma",
    "spaNo": "tapar"
  },
  {
    "rar": "napacha",
    "spa": "camisa",
    "rarNo": "napacha",
    "spaNo": "camisa"
  },
  {
    "rar": "napachota",
    "spa": "pegar - juntar ",
    "rarNo": "napachota",
    "spaNo": "pegar - juntar "
  },
  {
    "rar": "napahuí",
    "spa": "juntarse",
    "rarNo": "napahui",
    "spaNo": "juntarse"
  },
  {
    "rar": "napé",
    "spa": "juntarse - casarse",
    "rarNo": "nape",
    "spaNo": "juntarse - casarse"
  },
  {
    "rar": "napéa",
    "spa": "también - con - juntos",
    "rarNo": "napea",
    "spaNo": "tambien - con - juntos"
  },
  {
    "rar": "napíhuari",
    "spa": "nixtamal",
    "rarNo": "napihuari",
    "spaNo": "nixtamal"
  },
  {
    "rar": "napisó",
    "spa": "polvo - ceniza",
    "rarNo": "napiso",
    "spaNo": "polvo - ceniza"
  },
  {
    "rar": "napó",
    "spa": "tuna",
    "rarNo": "napo",
    "spaNo": "tuna"
  },
  {
    "rar": "napó",
    "spa": "deshierbar - quitar hierba",
    "rarNo": "napo",
    "spaNo": "deshierbar - quitar hierba"
  },
  {
    "rar": "napora",
    "spa": "cubrirse la cara",
    "rarNo": "napora",
    "spaNo": "cubrirse la cara"
  },
  {
    "rar": "napona",
    "spa": "quebrar",
    "rarNo": "napona",
    "spaNo": "quebrar"
  },
  {
    "rar": "naquétari",
    "spa": "sordo",
    "rarNo": "naquetari",
    "spaNo": "sordo"
  },
  {
    "rar": "naquí",
    "spa": "querer - desear",
    "rarNo": "naqui",
    "spaNo": "querer - desear"
  },
  {
    "rar": "nará",
    "spa": "llorar",
    "rarNo": "nara",
    "spaNo": "llorar"
  },
  {
    "rar": "narácuri",
    "spa": "caracol",
    "rarNo": "naracuri",
    "spaNo": "caracol"
  },
  {
    "rar": "naraquéami",
    "spa": "llorón",
    "rarNo": "naraqueami",
    "spaNo": "lloron"
  },
  {
    "rar": "narasi",
    "spa": "naranja",
    "rarNo": "narasi",
    "spaNo": "naranja"
  },
  {
    "rar": "naré",
    "spa": "recibir - aceptar",
    "rarNo": "nare",
    "spaNo": "recibir - aceptar"
  },
  {
    "rar": "narepa",
    "spa": "saludar",
    "rarNo": "narepa",
    "spaNo": "saludar"
  },
  {
    "rar": "nariyochi",
    "spa": "lobo",
    "rarNo": "nariyochi",
    "spaNo": "lobo"
  },
  {
    "rar": "nariyochi",
    "spa": "éste - ésta",
    "rarNo": "nariyochi",
    "spaNo": "este - esta"
  },
  {
    "rar": "na'rohua",
    "spa": "con - también",
    "rarNo": "na'rohua",
    "spaNo": "con - tambien"
  },
  {
    "rar": "na'rina",
    "spa": "quebrar",
    "rarNo": "na'rina",
    "spaNo": "quebrar"
  },
  {
    "rar": "na´sinami",
    "spa": "perezoso",
    "rarNo": "na´sinami",
    "spaNo": "perezoso"
  },
  {
    "rar": "nasipa",
    "spa": "medio",
    "rarNo": "nasipa",
    "spaNo": "medio"
  },
  {
    "rar": "nasipa recogó",
    "spa": "medianoche",
    "rarNo": "nasipa recogo",
    "spaNo": "medianoche"
  },
  {
    "rar": "nasipasí",
    "spa": "mitad",
    "rarNo": "nasipasi",
    "spaNo": "mitad"
  },
  {
    "rar": "nasípasigó",
    "spa": "miércoles",
    "rarNo": "nasipasigo",
    "spaNo": "miercoles"
  },
  {
    "rar": "nasinácuri",
    "spa": "tener flojera",
    "rarNo": "nasinacuri",
    "spaNo": "tener flojera"
  },
  {
    "rar": "narúchari",
    "spa": "araña",
    "rarNo": "naruchari",
    "spaNo": "arana"
  },
  {
    "rar": "nasó",
    "spa": "guardar - esconder",
    "rarNo": "naso",
    "spaNo": "guardar - esconder"
  },
  {
    "rar": "nasó",
    "spa": "mezclarse - revolver",
    "rarNo": "naso",
    "spaNo": "mezclarse - revolver"
  },
  {
    "rar": "nasóami",
    "spa": "revuelto",
    "rarNo": "nasoami",
    "spaNo": "revuelto"
  },
  {
    "rar": "nasohua",
    "spa": "mezclar",
    "rarNo": "nasohua",
    "spaNo": "mezclar"
  },
  {
    "rar": "0nata",
    "spa": "pensar",
    "rarNo": "0nata",
    "spaNo": "pensar"
  },
  {
    "rar": "natabú",
    "spa": "perforar - taladrar",
    "rarNo": "natabu",
    "spaNo": "perforar - taladrar"
  },
  {
    "rar": "nataguésuri",
    "spa": "tonto",
    "rarNo": "nataguesuri",
    "spaNo": "tonto"
  },
  {
    "rar": "nátami",
    "spa": "pensador - inteligente",
    "rarNo": "natami",
    "spaNo": "pensador - inteligente"
  },
  {
    "rar": "nate",
    "spa": "difícil - trabajoso",
    "rarNo": "nate",
    "spaNo": "dificil - trabajoso"
  },
  {
    "rar": "huabé 'nate ju",
    "spa": "está muy difícil",
    "rarNo": "huabe 'nate ju",
    "spaNo": "esta muy dificil"
  },
  {
    "rar": "natéami",
    "spa": "costoso",
    "rarNo": "nateami",
    "spaNo": "costoso"
  },
  {
    "rar": "natepa",
    "spa": "encontrar",
    "rarNo": "natepa",
    "spaNo": "encontrar"
  },
  {
    "rar": "natépari",
    "spa": "liston",
    "rarNo": "natepari",
    "spaNo": "liston"
  },
  {
    "rar": "nateta",
    "spa": "pagar",
    "rarNo": "nateta",
    "spaNo": "pagar"
  },
  {
    "rar": "natérarabá",
    "spa": "gracias",
    "rarNo": "nateraraba",
    "spaNo": "gracias"
  },
  {
    "rar": "natétarahua",
    "spa": "pagar",
    "rarNo": "natetarahua",
    "spaNo": "pagar"
  },
  {
    "rar": "natibú",
    "spa": "atajar",
    "rarNo": "natibu",
    "spaNo": "atajar"
  },
  {
    "rar": "natigara",
    "spa": "paga - valor",
    "rarNo": "natigara",
    "spaNo": "paga - valor"
  },
  {
    "rar": "quipu natiguí",
    "spa": "¿Cuánto vale?",
    "rarNo": "quipu natigui",
    "spaNo": "¿Cuanto vale?"
  },
  {
    "rar": "nayá",
    "spa": "mucho antes",
    "rarNo": "naya",
    "spaNo": "mucho antes"
  },
  {
    "rar": "nayáhuari",
    "spa": "antepasado",
    "rarNo": "nayahuari",
    "spaNo": "antepasado"
  },
  {
    "rar": "nayuna",
    "spa": "enfermarse",
    "rarNo": "nayuna",
    "spaNo": "enfermarse"
  },
  {
    "rar": "nayúami",
    "spa": "enfermo",
    "rarNo": "nayuami",
    "spaNo": "enfermo"
  },
  {
    "rar": "nayurí",
    "spa": "enfermedad",
    "rarNo": "nayuri",
    "spaNo": "enfermedad"
  },
  {
    "rar": "né",
    "spa": "ver",
    "rarNo": "ne",
    "spaNo": "ver"
  },
  {
    "rar": "ne",
    "spa": "mirar - observar",
    "rarNo": "ne",
    "spaNo": "mirar - observar"
  },
  {
    "rar": "ne",
    "spa": "muy - sumamente",
    "rarNo": "ne",
    "spaNo": "muy - sumamente"
  },
  {
    "rar": "néchigo",
    "spa": "igual",
    "rarNo": "nechigo",
    "spaNo": "igual"
  },
  {
    "rar": "née",
    "spa": "usar",
    "rarNo": "nee",
    "spaNo": "usar"
  },
  {
    "rar": "nehuará",
    "spa": "acordarse - recordar",
    "rarNo": "nehuara",
    "spaNo": "acordarse - recordar"
  },
  {
    "rar": "neni",
    "spa": "mirar",
    "rarNo": "neni",
    "spaNo": "mirar"
  },
  {
    "rar": "nepi",
    "spa": "muchísimo",
    "rarNo": "nepi",
    "spaNo": "muchisimo"
  },
  {
    "rar": "nera",
    "spa": "mostrar",
    "rarNo": "nera",
    "spaNo": "mostrar"
  },
  {
    "rar": "ni biré",
    "spa": "ni uno",
    "rarNo": "ni bire",
    "spaNo": "ni uno"
  },
  {
    "rar": "nicá ",
    "spa": "ladrar",
    "rarNo": "nica ",
    "spaNo": "ladrar"
  },
  {
    "rar": "ne'ogá",
    "spa": "voz",
    "rarNo": "ne'oga",
    "spaNo": "voz"
  },
  {
    "rar": "nicá ",
    "spa": "ladrar",
    "rarNo": "nica ",
    "spaNo": "ladrar"
  },
  {
    "rar": "nicóami",
    "spa": "asesino",
    "rarNo": "nicoami",
    "spaNo": "asesino"
  },
  {
    "rar": "nicahuera",
    "spa": "estar orgulloso",
    "rarNo": "nicahuera",
    "spaNo": "estar orgulloso"
  },
  {
    "rar": "nigúurami",
    "spa": "ayudante",
    "rarNo": "niguurami",
    "spaNo": "ayudante"
  },
  {
    "rar": "nigá",
    "spa": "viéndolo - mirandolo",
    "rarNo": "niga",
    "spaNo": "viendolo - mirandolo"
  },
  {
    "rar": "nigúura",
    "spa": "ayudar - salvar",
    "rarNo": "niguura",
    "spaNo": "ayudar - salvar"
  },
  {
    "rar": "nihúa",
    "spa": "hacer",
    "rarNo": "nihua",
    "spaNo": "hacer"
  },
  {
    "rar": "nihua",
    "spa": "tener - poseer ",
    "rarNo": "nihua",
    "spaNo": "tener - poseer "
  },
  {
    "rar": "níhuami",
    "spa": "poseedor - rico",
    "rarNo": "nihuami",
    "spaNo": "poseedor - rico"
  },
  {
    "rar": "ni'huá",
    "spa": "relampaguear",
    "rarNo": "ni'hua",
    "spaNo": "relampaguear"
  },
  {
    "rar": "nihuícohua",
    "spa": "casarse",
    "rarNo": "nihuicohua",
    "spaNo": "casarse"
  },
  {
    "rar": "nihuíi",
    "spa": "hacer",
    "rarNo": "nihuii",
    "spaNo": "hacer"
  },
  {
    "rar": "nijá",
    "spa": "dar - entregar",
    "rarNo": "nija",
    "spaNo": "dar - entregar"
  },
  {
    "rar": "nijehua",
    "spa": "hacer caso - contestar - responder",
    "rarNo": "nijehua",
    "spaNo": "hacer caso - contestar - responder"
  },
  {
    "rar": "nijiyá",
    "spa": "pon atención",
    "rarNo": "nijiya",
    "spaNo": "pon atencion"
  },
  {
    "rar": "nijí",
    "spa": "dar - entregar - obsequiar",
    "rarNo": "niji",
    "spaNo": "dar - entregar - obsequiar"
  },
  {
    "rar": "nijohua",
    "spa": "invitar",
    "rarNo": "nijohua",
    "spaNo": "invitar"
  },
  {
    "rar": "ni'mayé",
    "spa": "tener celos",
    "rarNo": "ni'maye",
    "spaNo": "tener celos"
  },
  {
    "rar": "ni'mayéami",
    "spa": "celoso",
    "rarNo": "ni'mayeami",
    "spaNo": "celoso"
  },
  {
    "rar": "nimí",
    "spa": "yo a ti",
    "rarNo": "nimi",
    "spaNo": "yo a ti"
  },
  {
    "rar": "nimí garé",
    "spa": "yo te amo",
    "rarNo": "nimi gare",
    "spaNo": "yo te amo"
  },
  {
    "rar": "nimica",
    "spa": "contradecir",
    "rarNo": "nimica",
    "spaNo": "contradecir"
  },
  {
    "rar": "niná",
    "spa": "ver",
    "rarNo": "nina",
    "spaNo": "ver"
  },
  {
    "rar": "nipá",
    "spa": "cobrar - quitar algo",
    "rarNo": "nipa",
    "spaNo": "cobrar - quitar algo"
  },
  {
    "rar": "nipáami",
    "spa": "cobrador",
    "rarNo": "nipaami",
    "spaNo": "cobrador"
  },
  {
    "rar": "niquí",
    "spa": "picar",
    "rarNo": "niqui",
    "spaNo": "picar"
  },
  {
    "rar": "níraga",
    "spa": "ser",
    "rarNo": "niraga",
    "spaNo": "ser"
  },
  {
    "rar": "echirigá níraga",
    "spa": "así sea",
    "rarNo": "echiriga niraga",
    "spaNo": "asi sea"
  },
  {
    "rar": "nírasi",
    "spa": "sean",
    "rarNo": "nirasi",
    "spaNo": "sean"
  },
  {
    "rar": "nírata",
    "spa": "animar - dar fe",
    "rarNo": "nirata",
    "spaNo": "animar - dar fe"
  },
  {
    "rar": "nirú",
    "spa": "hay",
    "rarNo": "niru",
    "spaNo": "hay"
  },
  {
    "rar": "nisé",
    "spa": "cuidar - pastorear",
    "rarNo": "nise",
    "spaNo": "cuidar - pastorear"
  },
  {
    "rar": "nitapa",
    "spa": "aplastar",
    "rarNo": "nitapa",
    "spaNo": "aplastar"
  },
  {
    "rar": "ni'yúbana",
    "spa": "soltar",
    "rarNo": "ni'yubana",
    "spaNo": "soltar"
  },
  {
    "rar": "ni'yusa",
    "spa": "soltarse -escaparse",
    "rarNo": "ni'yusa",
    "spaNo": "soltarse -escaparse"
  },
  {
    "rar": "no",
    "spa": "hijo",
    "rarNo": "no",
    "spaNo": "hijo"
  },
  {
    "rar": "no ",
    "spa": "confiar - admirar",
    "rarNo": "no ",
    "spaNo": "confiar - admirar"
  },
  {
    "rar": "nicá ",
    "spa": "moverse",
    "rarNo": "nica ",
    "spaNo": "moverse"
  },
  {
    "rar": "nocuisa",
    "spa": "seguir haciendo",
    "rarNo": "nocuisa",
    "spaNo": "seguir haciendo"
  },
  {
    "rar": "nochá",
    "spa": "tentar - tocar",
    "rarNo": "nocha",
    "spaNo": "tentar - tocar"
  },
  {
    "rar": "nocha",
    "spa": "trabajar",
    "rarNo": "nocha",
    "spaNo": "trabajar"
  },
  {
    "rar": "nóchami",
    "spa": "obrero - trabajador",
    "rarNo": "nochami",
    "spaNo": "obrero - trabajador"
  },
  {
    "rar": "nochárata",
    "spa": "emplear",
    "rarNo": "nocharata",
    "spaNo": "emplear"
  },
  {
    "rar": "nóchari",
    "spa": "dificil",
    "rarNo": "nochari",
    "spaNo": "dificil"
  },
  {
    "rar": "nóchari",
    "spa": "trabajo",
    "rarNo": "nochari",
    "spaNo": "trabajo"
  },
  {
    "rar": "noguí",
    "spa": "casi",
    "rarNo": "nogui",
    "spaNo": "casi"
  },
  {
    "rar": "nohua",
    "spa": "tener un hijo",
    "rarNo": "nohua",
    "spaNo": "tener un hijo"
  },
  {
    "rar": "nóochami",
    "spa": "orgilloso",
    "rarNo": "noochami",
    "spaNo": "orgilloso"
  },
  {
    "rar": "nóochami",
    "spa": "tener orgullo",
    "rarNo": "noochami",
    "spaNo": "tener orgullo"
  },
  {
    "rar": "niporí",
    "spa": "inundar",
    "rarNo": "nipori",
    "spaNo": "inundar"
  },
  {
    "rar": "niporíbana",
    "spa": "cubrir con agua",
    "rarNo": "niporibana",
    "spaNo": "cubrir con agua"
  },
  {
    "rar": "noqué",
    "spa": "moverse",
    "rarNo": "noque",
    "spaNo": "moverse"
  },
  {
    "rar": "nocuá",
    "spa": "moverse",
    "rarNo": "nocua",
    "spaNo": "moverse"
  },
  {
    "rar": "noré",
    "spa": "rodear",
    "rarNo": "nore",
    "spaNo": "rodear"
  },
  {
    "rar": "noré",
    "spa": "estar nublado",
    "rarNo": "nore",
    "spaNo": "estar nublado"
  },
  {
    "rar": "noreba",
    "spa": "nublarse",
    "rarNo": "noreba",
    "spaNo": "nublarse"
  },
  {
    "rar": "noreba",
    "spa": "dar vuelta",
    "rarNo": "noreba",
    "spaNo": "dar vuelta"
  },
  {
    "rar": "norí",
    "spa": "nube",
    "rarNo": "nori",
    "spaNo": "nube"
  },
  {
    "rar": "norigá",
    "spa": "alrededor",
    "rarNo": "noriga",
    "spaNo": "alrededor"
  },
  {
    "rar": "norina",
    "spa": "volver - venir",
    "rarNo": "norina",
    "spaNo": "volver - venir"
  },
  {
    "rar": "norira",
    "spa": "andar dando vueltas",
    "rarNo": "norira",
    "spaNo": "andar dando vueltas"
  },
  {
    "rar": "norírahuachi",
    "spa": "semana santa",
    "rarNo": "norirahuachi",
    "spaNo": "semana santa"
  },
  {
    "rar": "nosobú",
    "spa": "descomponer - echar a perder",
    "rarNo": "nosobu",
    "spaNo": "descomponer - echar a perder"
  },
  {
    "rar": "nosohuí",
    "spa": "descomponerse",
    "rarNo": "nosohui",
    "spaNo": "descomponerse"
  },
  {
    "rar": "norohuí",
    "spa": "ocultarse",
    "rarNo": "norohui",
    "spaNo": "ocultarse"
  },
  {
    "rar": "norohuiri",
    "spa": "desaparecerse",
    "rarNo": "norohuiri",
    "spaNo": "desaparecerse"
  },
  {
    "rar": "nurá",
    "spa": "mandar - ordenar",
    "rarNo": "nura",
    "spaNo": "mandar - ordenar"
  },
  {
    "rar": "riosi nurarira",
    "spa": "los mandamientos de Dios",
    "rarNo": "riosi nurarira",
    "spaNo": "los mandamientos de Dios"
  },
  {
    "rar": "nuraríhuami",
    "spa": "ley - mandamiento",
    "rarNo": "nurarihuami",
    "spaNo": "ley - mandamiento"
  },
  {
    "rar": "nuré",
    "spa": "mandar - ordenar",
    "rarNo": "nure",
    "spaNo": "mandar - ordenar"
  },
  {
    "rar": "nuté",
    "spa": "guardar - retener",
    "rarNo": "nute",
    "spaNo": "guardar - retener"
  },
  {
    "rar": "nuté",
    "spa": "alzar",
    "rarNo": "nute",
    "spaNo": "alzar"
  },
  {
    "rar": "nuté",
    "spa": "tener comiga",
    "rarNo": "nute",
    "spaNo": "tener comiga"
  },
  {
    "rar": "nutugá",
    "spa": "lonche - merienda",
    "rarNo": "nutuga",
    "spaNo": "lonche - merienda"
  },
  {
    "rar": "nututa",
    "spa": "hacer merienda",
    "rarNo": "nututa",
    "spaNo": "hacer merienda"
  },
  {
    "rar": "ocó",
    "spa": "doler",
    "rarNo": "oco",
    "spaNo": "doler"
  },
  {
    "rar": "ocorá",
    "spa": "tiene dolor",
    "rarNo": "ocora",
    "spaNo": "tiene dolor"
  },
  {
    "rar": "ocó",
    "spa": "pino",
    "rarNo": "oco",
    "spaNo": "pino"
  },
  {
    "rar": "ocochí",
    "spa": "dormir",
    "rarNo": "ocochi",
    "spaNo": "dormir"
  },
  {
    "rar": "ocuá",
    "spa": "dos",
    "rarNo": "ocua",
    "spaNo": "dos"
  },
  {
    "rar": "ocuá",
    "spa": "de - desde",
    "rarNo": "ocua",
    "spaNo": "de - desde"
  },
  {
    "rar": "ocuánica",
    "spa": "ambos",
    "rarNo": "ocuanica",
    "spaNo": "ambos"
  },
  {
    "rar": "ocubá",
    "spa": "estar plano",
    "rarNo": "ocuba",
    "spaNo": "estar plano"
  },
  {
    "rar": "ochébana ",
    "spa": "criar",
    "rarNo": "ochebana ",
    "spaNo": "criar"
  },
  {
    "rar": "ochéi",
    "spa": "tener huesos",
    "rarNo": "ochei",
    "spaNo": "tener huesos"
  },
  {
    "rar": "ochera",
    "spa": "crecer",
    "rarNo": "ochera",
    "spaNo": "crecer"
  },
  {
    "rar": "ochera",
    "spa": "envejecer",
    "rarNo": "ochera",
    "spaNo": "envejecer"
  },
  {
    "rar": "ochera aní",
    "spa": "tiene hipo",
    "rarNo": "ochera ani",
    "spaNo": "tiene hipo"
  },
  {
    "rar": "ochérami",
    "spa": "viejos - ancianos",
    "rarNo": "ocherami",
    "spaNo": "viejos - ancianos"
  },
  {
    "rar": "ochérami",
    "spa": "viejo",
    "rarNo": "ocherami",
    "spaNo": "viejo"
  },
  {
    "rar": "ochí",
    "spa": "hueso",
    "rarNo": "ochi",
    "spaNo": "hueso"
  },
  {
    "rar": "ochícari",
    "spa": "abuelo paterno",
    "rarNo": "ochicari",
    "spaNo": "abuelo paterno"
  },
  {
    "rar": "ochícari",
    "spa": "nieto",
    "rarNo": "ochicari",
    "spaNo": "nieto"
  },
  {
    "rar": "ochobé",
    "spa": "chamuscar",
    "rarNo": "ochobe",
    "spaNo": "chamuscar"
  },
  {
    "rar": "ochobeta",
    "spa": "quemarse por el sol",
    "rarNo": "ochobeta",
    "spaNo": "quemarse por el sol"
  },
  {
    "rar": "ochoréami",
    "spa": "mugriento",
    "rarNo": "ochoreami",
    "spaNo": "mugriento"
  },
  {
    "rar": "ochorí",
    "spa": "barro",
    "rarNo": "ochori",
    "spaNo": "barro"
  },
  {
    "rar": "ohuá",
    "spa": "flecha",
    "rarNo": "ohua",
    "spaNo": "flecha"
  },
  {
    "rar": "ohua",
    "spa": "curar",
    "rarNo": "ohua",
    "spaNo": "curar"
  },
  {
    "rar": "ohuáami",
    "spa": "medicina - remedio",
    "rarNo": "ohuaami",
    "spaNo": "medicina - remedio"
  },
  {
    "rar": "o'huari",
    "spa": "grande",
    "rarNo": "o'huari",
    "spaNo": "grande"
  },
  {
    "rar": "ohuí",
    "spa": "invitar",
    "rarNo": "ohui",
    "spaNo": "invitar"
  },
  {
    "rar": "o'huibichi",
    "spa": "zurdo",
    "rarNo": "o'huibichi",
    "spaNo": "zurdo"
  },
  {
    "rar": "o'huicha",
    "spa": "levantarse",
    "rarNo": "o'huicha",
    "spaNo": "levantarse"
  },
  {
    "rar": "cu o'huína",
    "spa": "resucitar",
    "rarNo": "cu o'huina",
    "spaNo": "resucitar"
  },
  {
    "rar": "o'huina",
    "spa": "comenzar",
    "rarNo": "o'huina",
    "spaNo": "comenzar"
  },
  {
    "rar": "o'huiná",
    "spa": "izquierdo",
    "rarNo": "o'huina",
    "spaNo": "izquierdo"
  },
  {
    "rar": "o'huiqué",
    "spa": "respetar - obedecer",
    "rarNo": "o'huique",
    "spaNo": "respetar - obedecer"
  },
  {
    "rar": "o'huiqué",
    "spa": "dar comida ",
    "rarNo": "o'huique",
    "spaNo": "dar comida "
  },
  {
    "rar": "ohuira",
    "spa": "mmacho",
    "rarNo": "ohuira",
    "spaNo": "mmacho"
  },
  {
    "rar": "ojuí",
    "spa": "oso",
    "rarNo": "ojui",
    "spaNo": "oso"
  },
  {
    "rar": "omá",
    "spa": "también - con - juntos",
    "rarNo": "oma",
    "spaNo": "tambien - con - juntos"
  },
  {
    "rar": "o'máana",
    "spa": "en todas partes",
    "rarNo": "o'maana",
    "spaNo": "en todas partes"
  },
  {
    "rar": "omahua",
    "spa": "hacer fiesta",
    "rarNo": "omahua",
    "spaNo": "hacer fiesta"
  },
  {
    "rar": "omohuárahuachi",
    "spa": "día de fiesta",
    "rarNo": "omohuarahuachi",
    "spaNo": "dia de fiesta"
  },
  {
    "rar": "omáhuari",
    "spa": "fiesta",
    "rarNo": "omahuari",
    "spaNo": "fiesta"
  },
  {
    "rar": "oméachi",
    "spa": "domingo",
    "rarNo": "omeachi",
    "spaNo": "domingo"
  },
  {
    "rar": "omeba",
    "spa": "vencer",
    "rarNo": "omeba",
    "spaNo": "vencer"
  },
  {
    "rar": "omée",
    "spa": "estar dificil",
    "rarNo": "omee",
    "spaNo": "estar dificil"
  },
  {
    "rar": "omérahuami",
    "spa": "poder",
    "rarNo": "omerahuami",
    "spaNo": "poder"
  },
  {
    "rar": "omériami",
    "spa": "poderoso",
    "rarNo": "omeriami",
    "spaNo": "poderoso"
  },
  {
    "rar": "omero ",
    "spa": "poder",
    "rarNo": "omero ",
    "spaNo": "poder"
  },
  {
    "rar": "o'mona",
    "spa": "estar triste",
    "rarNo": "o'mona",
    "spaNo": "estar triste"
  },
  {
    "rar": "o0mónami ",
    "spa": "triste",
    "rarNo": "o0monami ",
    "spaNo": "triste"
  },
  {
    "rar": "o'nami",
    "spa": "doctor - médico",
    "rarNo": "o'nami",
    "spaNo": "doctor - medico"
  },
  {
    "rar": "oné",
    "spa": "tener padre",
    "rarNo": "one",
    "spaNo": "tener padre"
  },
  {
    "rar": "onorúami",
    "spa": "padre (de la hija)",
    "rarNo": "onoruami",
    "spaNo": "padre (de la hija)"
  },
  {
    "rar": "onó",
    "spa": "estar enojado",
    "rarNo": "ono",
    "spaNo": "estar enojado"
  },
  {
    "rar": "onorúami",
    "spa": "Dios Padre",
    "rarNo": "onoruami",
    "spaNo": "Dios Padre"
  },
  {
    "rar": "opesi",
    "spa": "vomitar",
    "rarNo": "opesi",
    "spaNo": "vomitar"
  },
  {
    "rar": "opó",
    "spa": "arrancar - sacar",
    "rarNo": "opo",
    "spaNo": "arrancar - sacar"
  },
  {
    "rar": "opoáami",
    "spa": "hueco",
    "rarNo": "opoaami",
    "spaNo": "hueco"
  },
  {
    "rar": "opochi",
    "spa": "tía",
    "rarNo": "opochi",
    "spaNo": "tia"
  },
  {
    "rar": "orá",
    "spa": "hacer - obrar",
    "rarNo": "ora",
    "spaNo": "hacer - obrar"
  },
  {
    "rar": "oroyá",
    "spa": "haciéndolo",
    "rarNo": "oroya",
    "spaNo": "haciendolo"
  },
  {
    "rar": "orá",
    "spa": "tener filo",
    "rarNo": "ora",
    "spaNo": "tener filo"
  },
  {
    "rar": "oráami",
    "spa": "afilado",
    "rarNo": "oraami",
    "spaNo": "afilado"
  },
  {
    "rar": "orara",
    "spa": "afilar",
    "rarNo": "orara",
    "spaNo": "afilar"
  },
  {
    "rar": "orari ",
    "spa": "quiso (de querer)",
    "rarNo": "orari ",
    "spaNo": "quiso (de querer)"
  },
  {
    "rar": "oré",
    "spa": "huella",
    "rarNo": "ore",
    "spaNo": "huella"
  },
  {
    "rar": "o'rí",
    "spa": "español",
    "rarNo": "o'ri",
    "spaNo": "espanol"
  },
  {
    "rar": "o'rí",
    "spa": "tambalearse",
    "rarNo": "o'ri",
    "spaNo": "tambalearse"
  },
  {
    "rar": "orí",
    "spa": "hacer así",
    "rarNo": "ori",
    "spaNo": "hacer asi"
  },
  {
    "rar": "o'rina",
    "spa": "ladear",
    "rarNo": "o'rina",
    "spaNo": "ladear"
  },
  {
    "rar": "o'rina",
    "spa": "quebrar",
    "rarNo": "o'rina",
    "spaNo": "quebrar"
  },
  {
    "rar": "osá",
    "spa": "escribir",
    "rarNo": "osa",
    "spaNo": "escribir"
  },
  {
    "rar": "osá",
    "spa": "segundo",
    "rarNo": "osa",
    "spaNo": "segundo"
  },
  {
    "rar": "osá macoy",
    "spa": "veinte",
    "rarNo": "osa macoy",
    "spaNo": "veinte"
  },
  {
    "rar": "osá nahuó",
    "spa": "ocho",
    "rarNo": "osa nahuo",
    "spaNo": "ocho"
  },
  {
    "rar": "osa nahuosa macoy",
    "spa": "ochenta",
    "rarNo": "osa nahuosa macoy",
    "spaNo": "ochenta"
  },
  {
    "rar": "osé",
    "spa": "escribir",
    "rarNo": "ose",
    "spaNo": "escribir"
  },
  {
    "rar": "oserí",
    "spa": "papel - carta",
    "rarNo": "oseri",
    "spaNo": "papel - carta"
  },
  {
    "rar": "oserí 'nena",
    "spa": "leer",
    "rarNo": "oseri 'nena",
    "spaNo": "leer"
  },
  {
    "rar": "oserí osé",
    "spa": "levantar un acta",
    "rarNo": "oseri ose",
    "spaNo": "levantar un acta"
  },
  {
    "rar": "otérami",
    "spa": "muela",
    "rarNo": "oterami",
    "spaNo": "muela"
  },
  {
    "rar": "otobé",
    "spa": "canasta grande",
    "rarNo": "otobe",
    "spaNo": "canasta grande"
  },
  {
    "rar": "otohuá",
    "spa": "rama grande",
    "rarNo": "otohua",
    "spaNo": "rama grande"
  },
  {
    "rar": "otoná",
    "spa": "derecho",
    "rarNo": "otona",
    "spaNo": "derecho"
  },
  {
    "rar": "óyami",
    "spa": "curandero - médico",
    "rarNo": "oyami",
    "spaNo": "curandero - medico"
  },
  {
    "rar": "oyera",
    "spa": "regañar",
    "rarNo": "oyera",
    "spaNo": "reganar"
  },
  {
    "rar": "oyera",
    "spa": "dar consejos",
    "rarNo": "oyera",
    "spaNo": "dar consejos"
  },
  {
    "rar": "oyera",
    "spa": "llamar la atención",
    "rarNo": "oyera",
    "spaNo": "llamar la atencion"
  },
  {
    "rar": "o'yó",
    "spa": "vomitar ",
    "rarNo": "o'yo",
    "spaNo": "vomitar "
  },
  {
    "rar": "o'yona",
    "spa": "tener ganas de vomitar",
    "rarNo": "o'yona",
    "spaNo": "tener ganas de vomitar"
  },
  {
    "rar": "pe o'yó",
    "spa": "poco a poco",
    "rarNo": "pe o'yo",
    "spaNo": "poco a poco"
  },
  {
    "rar": "pa",
    "spa": "traer",
    "rarNo": "pa",
    "spaNo": "traer"
  },
  {
    "rar": "pa",
    "spa": "tirar - echar",
    "rarNo": "pa",
    "spaNo": "tirar - echar"
  },
  {
    "rar": "paayé",
    "spa": "arriba",
    "rarNo": "paaye",
    "spaNo": "arriba"
  },
  {
    "rar": "pabaca",
    "spa": "lavar",
    "rarNo": "pabaca",
    "spaNo": "lavar"
  },
  {
    "rar": "pabera ",
    "spa": "acarrear en la espalda",
    "rarNo": "pabera ",
    "spaNo": "acarrear en la espalda"
  },
  {
    "rar": "paca",
    "spa": "colar",
    "rarNo": "paca",
    "spaNo": "colar"
  },
  {
    "rar": "pachá",
    "spa": "adentro",
    "rarNo": "pacha",
    "spaNo": "adentro"
  },
  {
    "rar": "ri're pachá",
    "spa": "debajo",
    "rarNo": "ri're pacha",
    "spaNo": "debajo"
  },
  {
    "rar": "pachá bachá",
    "spa": "meter",
    "rarNo": "pacha bacha",
    "spaNo": "meter"
  },
  {
    "rar": "pachá bachara encarcelar",
    "spa": "",
    "rarNo": "pacha bachara encarcelar",
    "spaNo": ""
  },
  {
    "rar": "pachí",
    "spa": "elote",
    "rarNo": "pachi",
    "spaNo": "elote"
  },
  {
    "rar": "pachoca",
    "spa": "remendar",
    "rarNo": "pachoca",
    "spaNo": "remendar"
  },
  {
    "rar": "pachú",
    "spa": "gotear",
    "rarNo": "pachu",
    "spaNo": "gotear"
  },
  {
    "rar": "pagó",
    "spa": "lavar",
    "rarNo": "pago",
    "spaNo": "lavar"
  },
  {
    "rar": "pagó",
    "spa": "bautizar",
    "rarNo": "pago",
    "spaNo": "bautizar"
  },
  {
    "rar": "pagóami",
    "spa": "el que bautiza",
    "rarNo": "pagoami",
    "spaNo": "el que bautiza"
  },
  {
    "rar": "pagónara",
    "spa": "el día anterior",
    "rarNo": "pagonara",
    "spaNo": "el dia anterior"
  },
  {
    "rar": "pagótami ",
    "spa": "gente",
    "rarNo": "pagotami ",
    "spaNo": "gente"
  },
  {
    "rar": "pagué",
    "spa": "remojar",
    "rarNo": "pague",
    "spaNo": "remojar"
  },
  {
    "rar": "pánara ",
    "spa": "querer traer",
    "rarNo": "panara ",
    "spaNo": "querer traer"
  },
  {
    "rar": "pasá",
    "spa": "echar - tirar",
    "rarNo": "pasa",
    "spaNo": "echar - tirar"
  },
  {
    "rar": "pasó",
    "spa": "remojar",
    "rarNo": "paso",
    "spaNo": "remojar"
  },
  {
    "rar": "pasochi",
    "spa": "zorrillo",
    "rarNo": "pasochi",
    "spaNo": "zorrillo"
  },
  {
    "rar": "payéhuachi",
    "spa": "zanja",
    "rarNo": "payehuachi",
    "spaNo": "zanja"
  },
  {
    "rar": "pe",
    "spa": "poco",
    "rarNo": "pe",
    "spaNo": "poco"
  },
  {
    "rar": "pe ocuá",
    "spa": "pocos",
    "rarNo": "pe ocua",
    "spaNo": "pocos"
  },
  {
    "rar": "pebi",
    "spa": "muy poco",
    "rarNo": "pebi",
    "spaNo": "muy poco"
  },
  {
    "rar": "pe táa",
    "spa": "poquito",
    "rarNo": "pe taa",
    "spaNo": "poquito"
  },
  {
    "rar": "pe risensi",
    "spa": "por favor",
    "rarNo": "pe risensi",
    "spaNo": "por favor"
  },
  {
    "rar": "pe téeri",
    "spa": "chaparro",
    "rarNo": "pe teeri",
    "spaNo": "chaparro"
  },
  {
    "rar": "pe téeri",
    "spa": "un rato",
    "rarNo": "pe teeri",
    "spaNo": "un rato"
  },
  {
    "rar": "pe téeri ripí",
    "spa": "demora",
    "rarNo": "pe teeri ripi",
    "spaNo": "demora"
  },
  {
    "rar": "péebi",
    "spa": "poquito",
    "rarNo": "peebi",
    "spaNo": "poquito"
  },
  {
    "rar": "péebi niráa",
    "spa": "",
    "rarNo": "peebi niraa",
    "spaNo": ""
  },
  {
    "rar": "péebi ratáami ",
    "spa": "tibio",
    "rarNo": "peebi rataami ",
    "spaNo": "tibio"
  },
  {
    "rar": "pehua",
    "spa": "fiumar",
    "rarNo": "pehua",
    "spaNo": "fiumar"
  },
  {
    "rar": "péhuari",
    "spa": "cigarro",
    "rarNo": "pehuari",
    "spaNo": "cigarro"
  },
  {
    "rar": "pénama",
    "spa": "aprenderé",
    "rarNo": "penama",
    "spaNo": "aprendere"
  },
  {
    "rar": "pénami",
    "spa": "que puede aprender",
    "rarNo": "penami",
    "spaNo": "que puede aprender"
  },
  {
    "rar": "perí",
    "spa": "petate",
    "rarNo": "peri",
    "spaNo": "petate"
  },
  {
    "rar": "pericó",
    "spa": "por favor",
    "rarNo": "perico",
    "spaNo": "por favor"
  },
  {
    "rar": "pibá",
    "spa": "zambullirse",
    "rarNo": "piba",
    "spaNo": "zambullirse"
  },
  {
    "rar": "pibíiri",
    "spa": "remolino",
    "rarNo": "pibiiri",
    "spaNo": "remolino"
  },
  {
    "rar": "piché",
    "spa": "hasta",
    "rarNo": "piche",
    "spaNo": "hasta"
  },
  {
    "rar": "ba'arí piché",
    "spa": "hasta mañana",
    "rarNo": "ba'ari piche",
    "spaNo": "hasta manana"
  },
  {
    "rar": "pichí",
    "spa": "barrer",
    "rarNo": "pichi",
    "spaNo": "barrer"
  },
  {
    "rar": "pichira",
    "spa": "escoba",
    "rarNo": "pichira",
    "spaNo": "escoba"
  },
  {
    "rar": "pihuácami",
    "spa": "fumador",
    "rarNo": "pihuacami",
    "spaNo": "fumador"
  },
  {
    "rar": "píhui",
    "spa": "remoler",
    "rarNo": "pihui",
    "spaNo": "remoler"
  },
  {
    "rar": "pioni",
    "spa": "peón",
    "rarNo": "pioni",
    "spaNo": "peon"
  },
  {
    "rar": "piré",
    "spa": "vivir - habitar",
    "rarNo": "pire",
    "spaNo": "vivir - habitar"
  },
  {
    "rar": "piri",
    "spa": "¿qué?",
    "rarNo": "piri",
    "spaNo": "¿que?"
  },
  {
    "rar": "piri ju",
    "spa": "¿qué es?",
    "rarNo": "piri ju",
    "spaNo": "¿que es?"
  },
  {
    "rar": "pochí",
    "spa": "brincar",
    "rarNo": "pochi",
    "spaNo": "brincar"
  },
  {
    "rar": "pora",
    "spa": "cubrir - tapar",
    "rarNo": "pora",
    "spaNo": "cubrir - tapar"
  },
  {
    "rar": "porapa",
    "spa": "destapar",
    "rarNo": "porapa",
    "spaNo": "destapar"
  },
  {
    "rar": "posá",
    "spa": "llenarse comiendo",
    "rarNo": "posa",
    "spaNo": "llenarse comiendo"
  },
  {
    "rar": "poyaca",
    "spa": "desabrido",
    "rarNo": "poyaca",
    "spaNo": "desabrido"
  },
  {
    "rar": "pu'",
    "spa": "faisán",
    "rarNo": "pu'",
    "spaNo": "faisan"
  },
  {
    "rar": "pucha",
    "spa": "soplar",
    "rarNo": "pucha",
    "spaNo": "soplar"
  },
  {
    "rar": "pura",
    "spa": "cinturón - faja",
    "rarNo": "pura",
    "spaNo": "cinturon - faja"
  },
  {
    "rar": "qué",
    "spa": "fue - era - siendo",
    "rarNo": "que",
    "spaNo": "fue - era - siendo"
  },
  {
    "rar": "que",
    "spa": "hija grande",
    "rarNo": "que",
    "spaNo": "hija grande"
  },
  {
    "rar": "queba",
    "spa": "retumbar",
    "rarNo": "queba",
    "spaNo": "retumbar"
  },
  {
    "rar": "quecha",
    "spa": "masticar",
    "rarNo": "quecha",
    "spaNo": "masticar"
  },
  {
    "rar": "quemi",
    "spa": "tuyo",
    "rarNo": "quemi",
    "spaNo": "tuyo"
  },
  {
    "rar": "queni",
    "spa": "mío - mía - mi - mis",
    "rarNo": "queni",
    "spaNo": "mio - mia - mi - mis"
  },
  {
    "rar": "quepu",
    "spa": "su - sus",
    "rarNo": "quepu",
    "spaNo": "su - sus"
  },
  {
    "rar": "quere",
    "spa": "quizá - tal vez",
    "rarNo": "quere",
    "spaNo": "quiza - tal vez"
  },
  {
    "rar": "queta",
    "spa": "nuestro - nuestra",
    "rarNo": "queta",
    "spaNo": "nuestro - nuestra"
  },
  {
    "rar": "quétamo",
    "spa": "su - sus",
    "rarNo": "quetamo",
    "spaNo": "su - sus"
  },
  {
    "rar": "quetasi",
    "spa": "no",
    "rarNo": "quetasi",
    "spaNo": "no"
  },
  {
    "rar": "quicháo",
    "spa": "siete",
    "rarNo": "quichao",
    "spaNo": "siete"
  },
  {
    "rar": "quicháosa",
    "spa": "séptimo",
    "rarNo": "quichaosa",
    "spaNo": "septimo"
  },
  {
    "rar": "quicháosa macoy",
    "spa": "setenta",
    "rarNo": "quichaosa macoy",
    "spaNo": "setenta"
  },
  {
    "rar": "quichí",
    "spa": "aborrecer",
    "rarNo": "quichi",
    "spaNo": "aborrecer"
  },
  {
    "rar": "qui'huí",
    "spa": "traer leña",
    "rarNo": "qui'hui",
    "spaNo": "traer lena"
  },
  {
    "rar": "quimá",
    "spa": "cobija",
    "rarNo": "quima",
    "spaNo": "cobija"
  },
  {
    "rar": "químacoy",
    "spa": "nueve",
    "rarNo": "quimacoy",
    "spaNo": "nueve"
  },
  {
    "rar": "quimacoysa",
    "spa": "noveno",
    "rarNo": "quimacoysa",
    "spaNo": "noveno"
  },
  {
    "rar": "quimacoysa macoy",
    "spa": "noventa",
    "rarNo": "quimacoysa macoy",
    "spaNo": "noventa"
  },
  {
    "rar": "quimé",
    "spa": "tener cobija",
    "rarNo": "quime",
    "spaNo": "tener cobija"
  },
  {
    "rar": "quimira",
    "spa": "sábana",
    "rarNo": "quimira",
    "spaNo": "sabana"
  },
  {
    "rar": "qui'mo",
    "spa": "morder",
    "rarNo": "qui'mo",
    "spaNo": "morder"
  },
  {
    "rar": "quiná",
    "spa": "acá - por acá",
    "rarNo": "quina",
    "spaNo": "aca - por aca"
  },
  {
    "rar": "quipá",
    "spa": "nevar",
    "rarNo": "quipa",
    "spaNo": "nevar"
  },
  {
    "rar": "quiparí",
    "spa": "nieve",
    "rarNo": "quipari",
    "spaNo": "nieve"
  },
  {
    "rar": "quipú",
    "spa": "escucchar",
    "rarNo": "quipu",
    "spaNo": "escucchar"
  },
  {
    "rar": "quipu",
    "spa": "¿Cuánto?",
    "rarNo": "quipu",
    "spaNo": "¿Cuanto?"
  },
  {
    "rar": "quirá",
    "spa": "calmarse",
    "rarNo": "quira",
    "spaNo": "calmarse"
  },
  {
    "rar": "quirá",
    "spa": "hija",
    "rarNo": "quira",
    "spaNo": "hija"
  },
  {
    "rar": "qui'raca",
    "spa": "crujir los dientes",
    "rarNo": "qui'raca",
    "spaNo": "crujir los dientes"
  },
  {
    "rar": "quirí",
    "spa": "quieto - silencio",
    "rarNo": "quiri",
    "spaNo": "quieto - silencio"
  },
  {
    "rar": "asagá",
    "spa": "callate",
    "rarNo": "asaga",
    "spaNo": "callate"
  },
  {
    "rar": "quirí niráa",
    "spa": "poco a poco",
    "rarNo": "quiri niraa",
    "spaNo": "poco a poco"
  },
  {
    "rar": "rabó",
    "spa": "cerro - cordillera",
    "rarNo": "rabo",
    "spaNo": "cerro - cordillera"
  },
  {
    "rar": "rabota",
    "spa": "tener calambre",
    "rarNo": "rabota",
    "spaNo": "tener calambre"
  },
  {
    "rar": "rabótami",
    "spa": "entumido",
    "rarNo": "rabotami",
    "spaNo": "entumido"
  },
  {
    "rar": "racá",
    "spa": "semilla",
    "rarNo": "raca",
    "spaNo": "semilla"
  },
  {
    "rar": "rachí",
    "spa": "aplastarse",
    "rarNo": "rachi",
    "spaNo": "aplastarse"
  },
  {
    "rar": "rachina",
    "spa": "aplastar",
    "rarNo": "rachina",
    "spaNo": "aplastar"
  },
  {
    "rar": "ra'e",
    "spa": "conocer (lugar)",
    "rarNo": "ra'e",
    "spaNo": "conocer (lugar)"
  },
  {
    "rar": "rahuá",
    "spa": "ligamento",
    "rarNo": "rahua",
    "spaNo": "ligamento"
  },
  {
    "rar": "rahué",
    "spa": "día",
    "rarNo": "rahue",
    "spaNo": "dia"
  },
  {
    "rar": "rahué",
    "spa": "pecho",
    "rarNo": "rahue",
    "spaNo": "pecho"
  },
  {
    "rar": "rahué",
    "spa": "volver",
    "rarNo": "rahue",
    "spaNo": "volver"
  },
  {
    "rar": "nijé rahuira",
    "spa": "mi pecho",
    "rarNo": "nije rahuira",
    "spaNo": "mi pecho"
  },
  {
    "rar": "rahuihui",
    "spa": "gavilán",
    "rarNo": "rahuihui",
    "spaNo": "gavilan"
  },
  {
    "rar": "rahuirí",
    "spa": "mediodía",
    "rarNo": "rahuiri",
    "spaNo": "mediodia"
  },
  {
    "rar": "ra'íami",
    "spa": "que tiene apetito",
    "rarNo": "ra'iami",
    "spaNo": "que tiene apetito"
  },
  {
    "rar": "ra'icha",
    "spa": "hablar - platicar",
    "rarNo": "ra'icha",
    "spaNo": "hablar - platicar"
  },
  {
    "rar": "ra'ama",
    "spa": "reprender - prohibir",
    "rarNo": "ra'ama",
    "spaNo": "reprender - prohibir"
  },
  {
    "rar": "ra'íchami",
    "spa": "hablador",
    "rarNo": "ra'ichami",
    "spaNo": "hablador"
  },
  {
    "rar": "ra'ichárami",
    "spa": "idioma",
    "rarNo": "ra'icharami",
    "spaNo": "idioma"
  },
  {
    "rar": "ra'íchari",
    "spa": "palabra",
    "rarNo": "ra'ichari",
    "spaNo": "palabra"
  },
  {
    "rar": "ra'ihuá",
    "spa": "gustar (comida)",
    "rarNo": "ra'ihua",
    "spaNo": "gustar (comida)"
  },
  {
    "rar": "rajá",
    "spa": "alumbrar - arder - quemar",
    "rarNo": "raja",
    "spaNo": "alumbrar - arder - quemar"
  },
  {
    "rar": "rajáami",
    "spa": "ardiente",
    "rarNo": "rajaami",
    "spaNo": "ardiente"
  },
  {
    "rar": "rajamó",
    "spa": "peñasco",
    "rarNo": "rajamo",
    "spaNo": "penasco"
  },
  {
    "rar": "rajé",
    "spa": "iluminar",
    "rarNo": "raje",
    "spaNo": "iluminar"
  },
  {
    "rar": "rajirí",
    "spa": "vela",
    "rarNo": "rajiri",
    "spaNo": "vela"
  },
  {
    "rar": "ra'lá",
    "spa": "derramarse",
    "rarNo": "ra'la",
    "spaNo": "derramarse"
  },
  {
    "rar": "ra'lana",
    "spa": "extender - exparcir",
    "rarNo": "ra'lana",
    "spaNo": "extender - exparcir"
  },
  {
    "rar": "ramé",
    "spa": "diente",
    "rarNo": "rame",
    "spaNo": "diente"
  },
  {
    "rar": "ramé otéramachi jáhuami",
    "spa": "muela",
    "rarNo": "rame oteramachi jahuami",
    "spaNo": "muela"
  },
  {
    "rar": "ramú",
    "spa": "ponerse negro por un golpe",
    "rarNo": "ramu",
    "spaNo": "ponerse negro por un golpe"
  },
  {
    "rar": "raná",
    "spa": "parir",
    "rarNo": "rana",
    "spaNo": "parir"
  },
  {
    "rar": "raná",
    "spa": "hijo",
    "rarNo": "rana",
    "spaNo": "hijo"
  },
  {
    "rar": "ra'náchani",
    "spa": "sonar",
    "rarNo": "ra'nachani",
    "spaNo": "sonar"
  },
  {
    "rar": "ran'né",
    "spa": "disparar",
    "rarNo": "ran'ne",
    "spaNo": "disparar"
  },
  {
    "rar": "ranné",
    "spa": "tener hijo",
    "rarNo": "ranne",
    "spaNo": "tener hijo"
  },
  {
    "rar": "tanéami",
    "spa": "que tiene hijos",
    "rarNo": "taneami",
    "spaNo": "que tiene hijos"
  },
  {
    "rar": "ranícuri",
    "spa": "talón",
    "rarNo": "ranicuri",
    "spaNo": "talon"
  },
  {
    "rar": "echo'ná ranícuchi",
    "spa": "le duele su talón",
    "rarNo": "echo'na ranicuchi",
    "spaNo": "le duele su talon"
  },
  {
    "rar": "ra'oa",
    "spa": "agacharse",
    "rarNo": "ra'oa",
    "spaNo": "agacharse"
  },
  {
    "rar": "rapá",
    "spa": "rajarse - partirse",
    "rarNo": "rapa",
    "spaNo": "rajarse - partirse"
  },
  {
    "rar": "rapana",
    "spa": "rajar - partir",
    "rarNo": "rapana",
    "spaNo": "rajar - partir"
  },
  {
    "rar": "raoaci",
    "spa": "ayer",
    "rarNo": "raoaci",
    "spaNo": "ayer"
  },
  {
    "rar": "rapárachi",
    "spa": "rendija",
    "rarNo": "raparachi",
    "spaNo": "rendija"
  },
  {
    "rar": "rapirá",
    "spa": "rebanar",
    "rarNo": "rapira",
    "spaNo": "rebanar"
  },
  {
    "rar": "rapirátachi",
    "spa": "patio",
    "rarNo": "rapiratachi",
    "spaNo": "patio"
  },
  {
    "rar": "raquibú",
    "spa": "empujar",
    "rarNo": "raquibu",
    "spaNo": "empujar"
  },
  {
    "rar": "rará",
    "spa": "comprar",
    "rarNo": "rara",
    "spaNo": "comprar"
  },
  {
    "rar": "raráami",
    "spa": "comprador",
    "rarNo": "raraami",
    "spaNo": "comprador"
  },
  {
    "rar": "rará",
    "spa": "pie",
    "rarNo": "rara",
    "spaNo": "pie"
  },
  {
    "rar": "ra'rana",
    "spa": "desparramar - extender",
    "rarNo": "ra'rana",
    "spaNo": "desparramar - extender"
  },
  {
    "rar": "raramú",
    "spa": "caer un rayo",
    "rarNo": "raramu",
    "spaNo": "caer un rayo"
  },
  {
    "rar": "rarámuri",
    "spa": "tarahumara - gente",
    "rarNo": "raramuri",
    "spaNo": "tarahumara - gente"
  },
  {
    "rar": "rarámuri niráa uchucha",
    "spa": "interpretar - traducir al tarahumara",
    "rarNo": "raramuri niraa uchucha",
    "spaNo": "interpretar - traducir al tarahumara"
  },
  {
    "rar": "rarámuri ra'ícharara",
    "spa": "idioma tarahumara",
    "rarNo": "raramuri ra'icharara",
    "spaNo": "idioma tarahumara"
  },
  {
    "rar": "rarinéa",
    "spa": "vender",
    "rarNo": "rarinea",
    "spaNo": "vender"
  },
  {
    "rar": "rasá",
    "spa": "machucarse",
    "rarNo": "rasa",
    "spaNo": "machucarse"
  },
  {
    "rar": "rasáami",
    "spa": "blando",
    "rarNo": "rasaami",
    "spaNo": "blando"
  },
  {
    "rar": "rasana",
    "spa": "machucarse",
    "rarNo": "rasana",
    "spaNo": "machucarse"
  },
  {
    "rar": "rasíami",
    "spa": "desobediente",
    "rarNo": "rasiami",
    "spaNo": "desobediente"
  },
  {
    "rar": "rasiba",
    "spa": "oxidarse",
    "rarNo": "rasiba",
    "spaNo": "oxidarse"
  },
  {
    "rar": "rasícari",
    "spa": "ligamentos de la rodilla",
    "rarNo": "rasicari",
    "spaNo": "ligamentos de la rodilla"
  },
  {
    "rar": "rasó",
    "spa": "desulmbrar",
    "rarNo": "raso",
    "spaNo": "desulmbrar"
  },
  {
    "rar": "rasuca",
    "spa": "calentarse al sol",
    "rarNo": "rasuca",
    "spaNo": "calentarse al sol"
  },
  {
    "rar": "ratá",
    "spa": "hacer calor",
    "rarNo": "rata",
    "spaNo": "hacer calor"
  },
  {
    "rar": "ratá",
    "spa": "disparar con un rifle",
    "rarNo": "rata",
    "spaNo": "disparar con un rifle"
  },
  {
    "rar": "rataba",
    "spa": "relumbrar - brillar mucho",
    "rarNo": "rataba",
    "spaNo": "relumbrar - brillar mucho"
  },
  {
    "rar": "ratabáachi",
    "spa": "cuando hace calor",
    "rarNo": "ratabaachi",
    "spaNo": "cuando hace calor"
  },
  {
    "rar": "ratabacha",
    "spa": "calentar",
    "rarNo": "ratabacha",
    "spaNo": "calentar"
  },
  {
    "rar": "ratábami",
    "spa": "brillante",
    "rarNo": "ratabami",
    "spaNo": "brillante"
  },
  {
    "rar": "ratara",
    "spa": "tener calentura - fiebre",
    "rarNo": "ratara",
    "spaNo": "tener calentura - fiebre"
  },
  {
    "rar": "raté",
    "spa": "tío - tía - primo - prima",
    "rarNo": "rate",
    "spaNo": "tio - tia - primo - prima"
  },
  {
    "rar": "rayena ",
    "spa": "hacer sol",
    "rarNo": "rayena ",
    "spaNo": "hacer sol"
  },
  {
    "rar": "rayénari",
    "spa": "el sol",
    "rarNo": "rayenari",
    "spaNo": "el sol"
  },
  {
    "rar": "ricamuchi",
    "spa": "comadreja",
    "rarNo": "ricamuchi",
    "spaNo": "comadreja"
  },
  {
    "rar": "ricóchari",
    "spa": "pedernal",
    "rarNo": "ricochari",
    "spaNo": "pedernal"
  },
  {
    "rar": "ricomarí",
    "spa": "frijol",
    "rarNo": "ricomari",
    "spaNo": "frijol"
  },
  {
    "rar": "ricú",
    "spa": "emborracharse",
    "rarNo": "ricu",
    "spaNo": "emborracharse"
  },
  {
    "rar": "ricuchuri",
    "spa": "grillo",
    "rarNo": "ricuchuri",
    "spaNo": "grillo"
  },
  {
    "rar": "ricurí",
    "spa": "borracho",
    "rarNo": "ricuri",
    "spaNo": "borracho"
  },
  {
    "rar": "ri'é",
    "spa": "jugar",
    "rarNo": "ri'e",
    "spaNo": "jugar"
  },
  {
    "rar": "ri'echa",
    "spa": "malgastar - jugar",
    "rarNo": "ri'echa",
    "spaNo": "malgastar - jugar"
  },
  {
    "rar": "rihuá",
    "spa": "nombre",
    "rarNo": "rihua",
    "spaNo": "nombre"
  },
  {
    "rar": "rihuá",
    "spa": "ver - hallar",
    "rarNo": "rihua",
    "spaNo": "ver - hallar"
  },
  {
    "rar": "ri'huá",
    "spa": "hacerse liso",
    "rarNo": "ri'hua",
    "spaNo": "hacerse liso"
  },
  {
    "rar": "ri'huana",
    "spa": "alisar - aplanar - cepillar",
    "rarNo": "ri'huana",
    "spaNo": "alisar - aplanar - cepillar"
  },
  {
    "rar": "rihuará",
    "spa": "nombrar",
    "rarNo": "rihuara",
    "spaNo": "nombrar"
  },
  {
    "rar": "rihué",
    "spa": "llamarse - tener nombre",
    "rarNo": "rihue",
    "spaNo": "llamarse - tener nombre"
  },
  {
    "rar": "rihuera",
    "spa": "tener vergüenza",
    "rarNo": "rihuera",
    "spaNo": "tener verguenza"
  },
  {
    "rar": "rihuérata",
    "spa": "avergonzarse",
    "rarNo": "rihuerata",
    "spaNo": "avergonzarse"
  },
  {
    "rar": "rihuí",
    "spa": "cuesta arriba",
    "rarNo": "rihui",
    "spaNo": "cuesta arriba"
  },
  {
    "rar": "rihuí",
    "spa": "mostrarse",
    "rarNo": "rihui",
    "spaNo": "mostrarse"
  },
  {
    "rar": "rihuinra",
    "spa": "mostrar",
    "rarNo": "rihuinra",
    "spaNo": "mostrar"
  },
  {
    "rar": "rihuisáa",
    "spa": "viéndolo",
    "rarNo": "rihuisaa",
    "spaNo": "viendolo"
  },
  {
    "rar": "ri'í",
    "spa": "gemir - lanzar quejas",
    "rarNo": "ri'i",
    "spaNo": "gemir - lanzar quejas"
  },
  {
    "rar": "ri'ícami",
    "spa": "que se queja",
    "rarNo": "ri'icami",
    "spaNo": "que se queja"
  },
  {
    "rar": "ri'ibú",
    "spa": "limpiar frijol",
    "rarNo": "ri'ibu",
    "spaNo": "limpiar frijol"
  },
  {
    "rar": "ra'icha",
    "spa": "echarse a perder - desperdiciar",
    "rarNo": "ra'icha",
    "spaNo": "echarse a perder - desperdiciar"
  },
  {
    "rar": "ra'íchani",
    "spa": "gemir - lanzar quejas",
    "rarNo": "ra'ichani",
    "spaNo": "gemir - lanzar quejas"
  },
  {
    "rar": "ri'iquéami",
    "spa": "jugador",
    "rarNo": "ri'iqueami",
    "spaNo": "jugador"
  },
  {
    "rar": "ra'inana",
    "spa": "para arriba",
    "rarNo": "ra'inana",
    "spaNo": "para arriba"
  },
  {
    "rar": "rijachi",
    "spa": "arrooyo",
    "rarNo": "rijachi",
    "spaNo": "arrooyo"
  },
  {
    "rar": "rijata",
    "spa": "desgastarse",
    "rarNo": "rijata",
    "spaNo": "desgastarse"
  },
  {
    "rar": "rijé",
    "spa": "granizo",
    "rarNo": "rije",
    "spaNo": "granizo"
  },
  {
    "rar": "rijí",
    "spa": "mentar - poner apellido",
    "rarNo": "riji",
    "spaNo": "mentar - poner apellido"
  },
  {
    "rar": "\"roko",
    "spa": "amp\"",
    "rarNo": "\"roko",
    "spaNo": "amp\""
  },
  {
    "rar": "rijóara",
    "spa": "vivir allí",
    "rarNo": "rijoara",
    "spaNo": "vivir alli"
  },
  {
    "rar": "acha rijóara echo'ná",
    "spa": "¿vive alguien allí?",
    "rarNo": "acha rijoara echo'na",
    "spaNo": "¿vive alguien alli?"
  },
  {
    "rar": "rijorá",
    "spa": "aguantar ",
    "rarNo": "rijora",
    "spaNo": "aguantar "
  },
  {
    "rar": "rijoy",
    "spa": "hombre",
    "rarNo": "rijoy",
    "spaNo": "hombre"
  },
  {
    "rar": "sihuará",
    "spa": "intestino",
    "rarNo": "sihuara",
    "spaNo": "intestino"
  },
  {
    "rar": "ri'marí",
    "spa": "joven",
    "rarNo": "ri'mari",
    "spaNo": "joven"
  },
  {
    "rar": "rimé",
    "spa": "tortilla",
    "rarNo": "rime",
    "spaNo": "tortilla"
  },
  {
    "rar": "rimério",
    "spa": "curandero - crucifijo",
    "rarNo": "rimerio",
    "spaNo": "curandero - crucifijo"
  },
  {
    "rar": "rimó",
    "spa": "rana",
    "rarNo": "rimo",
    "spaNo": "rana"
  },
  {
    "rar": "rimú",
    "spa": "soñar",
    "rarNo": "rimu",
    "spaNo": "sonar"
  },
  {
    "rar": "ri'ná",
    "spa": "nivelar",
    "rarNo": "ri'na",
    "spaNo": "nivelar"
  },
  {
    "rar": "ri'ná",
    "spa": "boca arriba",
    "rarNo": "ri'na",
    "spaNo": "boca arriba"
  },
  {
    "rar": "riná",
    "spa": "arbir la boca",
    "rarNo": "rina",
    "spaNo": "arbir la boca"
  },
  {
    "rar": "ri'náami",
    "spa": "parejo",
    "rarNo": "ri'naami",
    "spaNo": "parejo"
  },
  {
    "rar": "ri'nabuca",
    "spa": "al revés",
    "rarNo": "ri'nabuca",
    "spaNo": "al reves"
  },
  {
    "rar": "ri'nahuí",
    "spa": "caerse",
    "rarNo": "ri'nahui",
    "spaNo": "caerse"
  },
  {
    "rar": "ri'nará",
    "spa": "emparejar",
    "rarNo": "ri'nara",
    "spaNo": "emparejar"
  },
  {
    "rar": "riní",
    "spa": "boca arriba",
    "rarNo": "rini",
    "spaNo": "boca arriba"
  },
  {
    "rar": "ri'obá",
    "spa": "iglesia - templo",
    "rarNo": "ri'oba",
    "spaNo": "iglesia - templo"
  },
  {
    "rar": "riosi",
    "spa": "Dios Padre",
    "rarNo": "riosi",
    "spaNo": "Dios Padre"
  },
  {
    "rar": "ripá",
    "spa": "arriba",
    "rarNo": "ripa",
    "spaNo": "arriba"
  },
  {
    "rar": "ripabé",
    "spa": "muy alto o arriba",
    "rarNo": "ripabe",
    "spaNo": "muy alto o arriba"
  },
  {
    "rar": "ripáami ju ",
    "spa": "está muy alto",
    "rarNo": "ripaami ju ",
    "spaNo": "esta muy alto"
  },
  {
    "rar": "ripá",
    "spa": "rascar",
    "rarNo": "ripa",
    "spaNo": "rascar"
  },
  {
    "rar": "ripá moba",
    "spa": "sobre - encima",
    "rarNo": "ripa moba",
    "spaNo": "sobre - encima"
  },
  {
    "rar": "ripari",
    "spa": "para arriba",
    "rarNo": "ripari",
    "spaNo": "para arriba"
  },
  {
    "rar": "ripata rabó",
    "spa": "loma",
    "rarNo": "ripata rabo",
    "spaNo": "loma"
  },
  {
    "rar": "ripí",
    "spa": "quedar",
    "rarNo": "ripi",
    "spaNo": "quedar"
  },
  {
    "rar": "ripiyá",
    "spa": "cuchillo",
    "rarNo": "ripiya",
    "spaNo": "cuchillo"
  },
  {
    "rar": "ripopa",
    "spa": "espalda",
    "rarNo": "ripopa",
    "spaNo": "espalda"
  },
  {
    "rar": "ripora",
    "spa": "despedir",
    "rarNo": "ripora",
    "spaNo": "despedir"
  },
  {
    "rar": "ripú",
    "spa": "trozarse - cortarse",
    "rarNo": "ripu",
    "spaNo": "trozarse - cortarse"
  },
  {
    "rar": "ripuca",
    "spa": "basura - abono",
    "rarNo": "ripuca",
    "spaNo": "basura - abono"
  },
  {
    "rar": "ripuchí",
    "spa": "pulga",
    "rarNo": "ripuchi",
    "spaNo": "pulga"
  },
  {
    "rar": "ripurá",
    "spa": "hacha",
    "rarNo": "ripura",
    "spaNo": "hacha"
  },
  {
    "rar": "ripuna simira",
    "spa": "atravesar",
    "rarNo": "ripuna simira",
    "spaNo": "atravesar"
  },
  {
    "rar": "riqué",
    "spa": "pisar",
    "rarNo": "rique",
    "spaNo": "pisar"
  },
  {
    "rar": "riquina",
    "spa": "bajar",
    "rarNo": "riquina",
    "spaNo": "bajar"
  },
  {
    "rar": "ri'ré",
    "spa": "abajo",
    "rarNo": "ri're",
    "spaNo": "abajo"
  },
  {
    "rar": "riré huchí",
    "spa": "suelo",
    "rarNo": "rire huchi",
    "spaNo": "suelo"
  },
  {
    "rar": "ri'rena",
    "spa": "por abajo",
    "rarNo": "ri'rena",
    "spaNo": "por abajo"
  },
  {
    "rar": "ri'reque",
    "spa": "sur",
    "rarNo": "ri'reque",
    "spaNo": "sur"
  },
  {
    "rar": "ri'rohui",
    "spa": "papas",
    "rarNo": "ri'rohui",
    "spaNo": "papas"
  },
  {
    "rar": "rirú",
    "spa": "eructar",
    "rarNo": "riru",
    "spaNo": "eructar"
  },
  {
    "rar": "rirú",
    "spa": "zumbar de un motor",
    "rarNo": "riru",
    "spaNo": "zumbar de un motor"
  },
  {
    "rar": "risensi",
    "spa": "licencia - permiso",
    "rarNo": "risensi",
    "spaNo": "licencia - permiso"
  },
  {
    "rar": "pe risénsia",
    "spa": "con permiso",
    "rarNo": "pe risensia",
    "spaNo": "con permiso"
  },
  {
    "rar": "risénsia 'ya",
    "spa": "conceder - autorizar - permitir",
    "rarNo": "risensia 'ya",
    "spaNo": "conceder - autorizar - permitir"
  },
  {
    "rar": "risí ",
    "spa": "cansarse",
    "rarNo": "risi ",
    "spaNo": "cansarse"
  },
  {
    "rar": "risira",
    "spa": "cansar",
    "rarNo": "risira",
    "spaNo": "cansar"
  },
  {
    "rar": "risirúami",
    "spa": "miserable - tacaño",
    "rarNo": "risiruami",
    "spaNo": "miserable - tacano"
  },
  {
    "rar": "risó",
    "spa": "cueva",
    "rarNo": "riso",
    "spaNo": "cueva"
  },
  {
    "rar": "risúati",
    "spa": "pobre",
    "rarNo": "risuati",
    "spaNo": "pobre"
  },
  {
    "rar": "risúu",
    "spa": "sufrir",
    "rarNo": "risuu",
    "spaNo": "sufrir"
  },
  {
    "rar": "risúu aní",
    "spa": "quejarse",
    "rarNo": "risuu ani",
    "spaNo": "quejarse"
  },
  {
    "rar": "rité",
    "spa": "patear",
    "rarNo": "rite",
    "spaNo": "patear"
  },
  {
    "rar": "ritéami",
    "spa": "el que ve",
    "rarNo": "riteami",
    "spaNo": "el que ve"
  },
  {
    "rar": "ritéena",
    "spa": "bostezar",
    "rarNo": "riteena",
    "spaNo": "bostezar"
  },
  {
    "rar": "ritehuá",
    "spa": "ver - hallar",
    "rarNo": "ritehua",
    "spaNo": "ver - hallar"
  },
  {
    "rar": "ritémahua",
    "spa": "hermanos",
    "rarNo": "ritemahua",
    "spaNo": "hermanos"
  },
  {
    "rar": "ritú",
    "spa": "helarse",
    "rarNo": "ritu",
    "spaNo": "helarse"
  },
  {
    "rar": "ritú",
    "spa": "mirar - admirar",
    "rarNo": "ritu",
    "spaNo": "mirar - admirar"
  },
  {
    "rar": "riyahui",
    "spa": "hay hierba",
    "rarNo": "riyahui",
    "spaNo": "hay hierba"
  },
  {
    "rar": "ri'yónachi",
    "spa": "tronar",
    "rarNo": "ri'yonachi",
    "spaNo": "tronar"
  },
  {
    "rar": "rocó",
    "spa": "estar hondo",
    "rarNo": "roco",
    "spaNo": "estar hondo"
  },
  {
    "rar": "rocóami",
    "spa": "hondo",
    "rarNo": "rocoami",
    "spaNo": "hondo"
  },
  {
    "rar": "rocogó",
    "spa": "noche",
    "rarNo": "rocogo",
    "spaNo": "noche"
  },
  {
    "rar": "rapaco rocogó",
    "spa": "anoche",
    "rarNo": "rapaco rocogo",
    "spaNo": "anoche"
  },
  {
    "rar": "rocogó niráa",
    "spa": "de anoche",
    "rarNo": "rocogo niraa",
    "spaNo": "de anoche"
  },
  {
    "rar": "rocohuárari",
    "spa": "obscuridad",
    "rarNo": "rocohuarari",
    "spaNo": "obscuridad"
  },
  {
    "rar": "rocomíami",
    "spa": "cóncavo",
    "rarNo": "rocomiami",
    "spaNo": "concavo"
  },
  {
    "rar": "rocuahua",
    "spa": "obscurecerse",
    "rarNo": "rocuahua",
    "spaNo": "obscurecerse"
  },
  {
    "rar": "rochá",
    "spa": "lagartija",
    "rarNo": "rocha",
    "spaNo": "lagartija"
  },
  {
    "rar": "rochí",
    "spa": "pez - pescado",
    "rarNo": "rochi",
    "spaNo": "pez - pescado"
  },
  {
    "rar": "rochorí",
    "spa": "codorniz",
    "rarNo": "rochori",
    "spaNo": "codorniz"
  },
  {
    "rar": "rohué",
    "spa": "atizar",
    "rarNo": "rohue",
    "spaNo": "atizar"
  },
  {
    "rar": "ro'hué",
    "spa": "cultivar maíz",
    "rarNo": "ro'hue",
    "spaNo": "cultivar maiz"
  },
  {
    "rar": "rohuera ",
    "spa": "aro",
    "rarNo": "rohuera ",
    "spaNo": "aro"
  },
  {
    "rar": "rohuí",
    "spa": "conejo",
    "rarNo": "rohui",
    "spaNo": "conejo"
  },
  {
    "rar": "ro'hupi",
    "spa": "dar vueltas ",
    "rarNo": "ro'hupi",
    "spaNo": "dar vueltas "
  },
  {
    "rar": "ro'huí",
    "spa": "arrepentirse",
    "rarNo": "ro'hui",
    "spaNo": "arrepentirse"
  },
  {
    "rar": "rojácami",
    "spa": "cambio de dinero",
    "rarNo": "rojacami",
    "spaNo": "cambio de dinero"
  },
  {
    "rar": "rojana",
    "spa": "apartar",
    "rarNo": "rojana",
    "spaNo": "apartar"
  },
  {
    "rar": "rojoná",
    "spa": "separar",
    "rarNo": "rojona",
    "spaNo": "separar"
  },
  {
    "rar": "rojuí",
    "spa": "bellota",
    "rarNo": "rojui",
    "spaNo": "bellota"
  },
  {
    "rar": "romíami",
    "spa": "flexible",
    "rarNo": "romiami",
    "spaNo": "flexible"
  },
  {
    "rar": "romina",
    "spa": "doblar - enrollar",
    "rarNo": "romina",
    "spaNo": "doblar - enrollar"
  },
  {
    "rar": "romírachi",
    "spa": "coyuntura",
    "rarNo": "romirachi",
    "spaNo": "coyuntura"
  },
  {
    "rar": "romírachi",
    "spa": "tobillo",
    "rarNo": "romirachi",
    "spaNo": "tobillo"
  },
  {
    "rar": "romó",
    "spa": "invierno",
    "rarNo": "romo",
    "spaNo": "invierno"
  },
  {
    "rar": "romohua",
    "spa": "lloviznar",
    "rarNo": "romohua",
    "spaNo": "lloviznar"
  },
  {
    "rar": "roné",
    "spa": "tener pies",
    "rarNo": "rone",
    "spaNo": "tener pies"
  },
  {
    "rar": "roné",
    "spa": "hervir",
    "rarNo": "rone",
    "spaNo": "hervir"
  },
  {
    "rar": "ronena",
    "spa": "hacer espuma",
    "rarNo": "ronena",
    "spaNo": "hacer espuma"
  },
  {
    "rar": "ronó",
    "spa": "hervirse",
    "rarNo": "rono",
    "spaNo": "hervirse"
  },
  {
    "rar": "ronó",
    "spa": "pie",
    "rarNo": "rono",
    "spaNo": "pie"
  },
  {
    "rar": "ropá",
    "spa": "estómago - vientre",
    "rarNo": "ropa",
    "spaNo": "estomago - vientre"
  },
  {
    "rar": "ropéami",
    "spa": "panzón",
    "rarNo": "ropeami",
    "spaNo": "panzon"
  },
  {
    "rar": "ropéami ju",
    "spa": "está embarazada",
    "rarNo": "ropeami ju",
    "spaNo": "esta embarazada"
  },
  {
    "rar": "ropochí",
    "spa": "panza",
    "rarNo": "ropochi",
    "spaNo": "panza"
  },
  {
    "rar": "rorí",
    "spa": "rata",
    "rarNo": "rori",
    "spaNo": "rata"
  },
  {
    "rar": "roró",
    "spa": "rugir",
    "rarNo": "roro",
    "spaNo": "rugir"
  },
  {
    "rar": "roró",
    "spa": "gruñir",
    "rarNo": "roro",
    "spaNo": "grunir"
  },
  {
    "rar": "roró",
    "spa": "roncar",
    "rarNo": "roro",
    "spaNo": "roncar"
  },
  {
    "rar": "rorobá",
    "spa": "enfriar",
    "rarNo": "roroba",
    "spaNo": "enfriar"
  },
  {
    "rar": "roroca",
    "spa": "tráquea",
    "rarNo": "roroca",
    "spaNo": "traquea"
  },
  {
    "rar": "rorónaché",
    "spa": "zumbar",
    "rarNo": "roronache",
    "spaNo": "zumbar"
  },
  {
    "rar": "ro'roché",
    "spa": "congelarse",
    "rarNo": "ro'roche",
    "spaNo": "congelarse"
  },
  {
    "rar": "ro'rochébana",
    "spa": "congelar",
    "rarNo": "ro'rochebana",
    "spaNo": "congelar"
  },
  {
    "rar": "rosácami",
    "spa": "blanco",
    "rarNo": "rosacami",
    "spaNo": "blanco"
  },
  {
    "rar": "rosábachami",
    "spa": "gris",
    "rarNo": "rosabachami",
    "spaNo": "gris"
  },
  {
    "rar": "rosana",
    "spa": "blanquearse",
    "rarNo": "rosana",
    "spaNo": "blanquearse"
  },
  {
    "rar": "rosánahua",
    "spa": "blanquear",
    "rarNo": "rosanahua",
    "spaNo": "blanquear"
  },
  {
    "rar": "rosó",
    "spa": "nido",
    "rarNo": "roso",
    "spaNo": "nido"
  },
  {
    "rar": "rosobocha",
    "spa": "despintarse",
    "rarNo": "rosobocha",
    "spaNo": "despintarse"
  },
  {
    "rar": "rosohua",
    "spa": "toser",
    "rarNo": "rosohua",
    "spaNo": "toser"
  },
  {
    "rar": "rosoná",
    "spa": "pato",
    "rarNo": "rosona",
    "spaNo": "pato"
  },
  {
    "rar": "rosorá",
    "spa": "nido",
    "rarNo": "rosora",
    "spaNo": "nido"
  },
  {
    "rar": "rotebi",
    "spa": "salamandra",
    "rarNo": "rotebi",
    "spaNo": "salamandra"
  },
  {
    "rar": "rotosí",
    "spa": "sauz",
    "rarNo": "rotosi",
    "spaNo": "sauz"
  },
  {
    "rar": "ru",
    "spa": "avisar",
    "rarNo": "ru",
    "spaNo": "avisar"
  },
  {
    "rar": "ru",
    "spa": "testificar ",
    "rarNo": "ru",
    "spaNo": "testificar "
  },
  {
    "rar": "ru",
    "spa": "descubrir",
    "rarNo": "ru",
    "spaNo": "descubrir"
  },
  {
    "rar": "rucuchiri",
    "spa": "grillo",
    "rarNo": "rucuchiri",
    "spaNo": "grillo"
  },
  {
    "rar": "rucué",
    "spa": "preguntar",
    "rarNo": "rucue",
    "spaNo": "preguntar"
  },
  {
    "rar": "ruchí",
    "spa": "gato montés",
    "rarNo": "ruchi",
    "spaNo": "gato montes"
  },
  {
    "rar": "ruhué",
    "spa": "liembre",
    "rarNo": "ruhue",
    "spaNo": "liembre"
  },
  {
    "rar": "ru'náami",
    "spa": "grueso",
    "rarNo": "ru'naami",
    "spaNo": "grueso"
  },
  {
    "rar": "ruráami",
    "spa": "frío - fresco",
    "rarNo": "ruraami",
    "spaNo": "frio - fresco"
  },
  {
    "rar": "rurú",
    "spa": "sonaja",
    "rarNo": "ruru",
    "spaNo": "sonaja"
  },
  {
    "rar": "rurusí",
    "spa": "tomatillo",
    "rarNo": "rurusi",
    "spaNo": "tomatillo"
  },
  {
    "rar": "rúsiami",
    "spa": "intérprete",
    "rarNo": "rusiami",
    "spaNo": "interprete"
  },
  {
    "rar": "rusú",
    "spa": "moler",
    "rarNo": "rusu",
    "spaNo": "moler"
  },
  {
    "rar": "ruyé",
    "spa": "avisar - aconsejar - informar",
    "rarNo": "ruye",
    "spaNo": "avisar - aconsejar - informar"
  },
  {
    "rar": "ruhuigá",
    "spa": "avisándole",
    "rarNo": "ruhuiga",
    "spaNo": "avisandole"
  },
  {
    "rar": "ruyénara júuri",
    "spa": "le manda decir",
    "rarNo": "ruyenara juuri",
    "spaNo": "le manda decir"
  },
  {
    "rar": "sáa",
    "spa": "oler - olfatear",
    "rarNo": "saa",
    "spaNo": "oler - olfatear"
  },
  {
    "rar": "sáata",
    "spa": "hacer brasas",
    "rarNo": "saata",
    "spaNo": "hacer brasas"
  },
  {
    "rar": "saca",
    "spa": "conseguir",
    "rarNo": "saca",
    "spaNo": "conseguir"
  },
  {
    "rar": "sacará",
    "spa": "zacate",
    "rarNo": "sacara",
    "spaNo": "zacate"
  },
  {
    "rar": "sacuá",
    "spa": "sapo",
    "rarNo": "sacua",
    "spaNo": "sapo"
  },
  {
    "rar": "sahuá",
    "spa": "hoja",
    "rarNo": "sahua",
    "spaNo": "hoja"
  },
  {
    "rar": "sahua",
    "spa": "quemar",
    "rarNo": "sahua",
    "spaNo": "quemar"
  },
  {
    "rar": "sa'huá",
    "spa": "curar - sanar",
    "rarNo": "sa'hua",
    "spaNo": "curar - sanar"
  },
  {
    "rar": "sáhuara",
    "spa": "sonaja",
    "rarNo": "sahuara",
    "spaNo": "sonaja"
  },
  {
    "rar": "sahuarásimí",
    "spa": "retoñar",
    "rarNo": "sahuarasimi",
    "spaNo": "retonar"
  },
  {
    "rar": "sahuí",
    "spa": "quemarse",
    "rarNo": "sahui",
    "spaNo": "quemarse"
  },
  {
    "rar": "sa'huí",
    "spa": "quemarse ",
    "rarNo": "sa'hui",
    "spaNo": "quemarse "
  },
  {
    "rar": "sa'huí",
    "spa": "aliviarse",
    "rarNo": "sa'hui",
    "spaNo": "aliviarse"
  },
  {
    "rar": "sahuiri",
    "spa": "brasas - carbón",
    "rarNo": "sahuiri",
    "spaNo": "brasas - carbon"
  },
  {
    "rar": "sahuiruma",
    "spa": "temblar",
    "rarNo": "sahuiruma",
    "spaNo": "temblar"
  },
  {
    "rar": "sái",
    "spa": "oler - olfatear",
    "rarNo": "sai",
    "spaNo": "oler - olfatear"
  },
  {
    "rar": "sa'í",
    "spa": "lombriz",
    "rarNo": "sa'i",
    "spaNo": "lombriz"
  },
  {
    "rar": "sa'mecha",
    "spa": "remojar - mojar",
    "rarNo": "sa'mecha",
    "spaNo": "remojar - mojar"
  },
  {
    "rar": "sa'mí",
    "spa": "estar mojado",
    "rarNo": "sa'mi",
    "spaNo": "estar mojado"
  },
  {
    "rar": "sa'míami",
    "spa": "humedo - mojado",
    "rarNo": "sa'miami",
    "spaNo": "humedo - mojado"
  },
  {
    "rar": "sa'mina",
    "spa": "humedecerse",
    "rarNo": "sa'mina",
    "spaNo": "humedecerse"
  },
  {
    "rar": "sampá",
    "spa": "mojarse",
    "rarNo": "sampa",
    "spaNo": "mojarse"
  },
  {
    "rar": "sampacha",
    "spa": "remojar",
    "rarNo": "sampacha",
    "spaNo": "remojar"
  },
  {
    "rar": "sapá",
    "spa": "carne",
    "rarNo": "sapa",
    "spaNo": "carne"
  },
  {
    "rar": "sapará",
    "spa": "engordarse",
    "rarNo": "sapara",
    "spaNo": "engordarse"
  },
  {
    "rar": "saparábana",
    "spa": "engordar",
    "rarNo": "saparabana",
    "spaNo": "engordar"
  },
  {
    "rar": "saparusa",
    "spa": "enflacar",
    "rarNo": "saparusa",
    "spaNo": "enflacar"
  },
  {
    "rar": "sapé",
    "spa": "estar gordo",
    "rarNo": "sape",
    "spaNo": "estar gordo"
  },
  {
    "rar": "machí sapepa",
    "spa": "desnudarse",
    "rarNo": "machi sapepa",
    "spaNo": "desnudarse"
  },
  {
    "rar": "machí sapéami",
    "spa": "desnudo",
    "rarNo": "machi sapeami",
    "spaNo": "desnudo"
  },
  {
    "rar": "sapota",
    "spa": "hacer palomitas de maíz",
    "rarNo": "sapota",
    "spaNo": "hacer palomitas de maiz"
  },
  {
    "rar": "sapú",
    "spa": "apurarse",
    "rarNo": "sapu",
    "spaNo": "apurarse"
  },
  {
    "rar": "sapunú",
    "spa": "apurarse mucho",
    "rarNo": "sapunu",
    "spaNo": "apurarse mucho"
  },
  {
    "rar": "saquí",
    "spa": "esquite",
    "rarNo": "saqui",
    "spaNo": "esquite"
  },
  {
    "rar": "saquiri",
    "spa": "comal",
    "rarNo": "saquiri",
    "spaNo": "comal"
  },
  {
    "rar": "sa'rihuá",
    "spa": "saliva",
    "rarNo": "sa'rihua",
    "spaNo": "saliva"
  },
  {
    "rar": "saróami",
    "spa": "amarillo - anaranjado",
    "rarNo": "saroami",
    "spaNo": "amarillo - anaranjado"
  },
  {
    "rar": "sasira",
    "spa": "resbalarse",
    "rarNo": "sasira",
    "spaNo": "resbalarse"
  },
  {
    "rar": "saté",
    "spa": "arena",
    "rarNo": "sate",
    "spaNo": "arena"
  },
  {
    "rar": "satibó",
    "spa": "arenal",
    "rarNo": "satibo",
    "spaNo": "arenal"
  },
  {
    "rar": "satibótami",
    "spa": "arenoso",
    "rarNo": "satibotami",
    "spaNo": "arenoso"
  },
  {
    "rar": "sayahui",
    "spa": "víbora de cascabel",
    "rarNo": "sayahui",
    "spaNo": "vibora de cascabel"
  },
  {
    "rar": "sayé",
    "spa": "enemigo",
    "rarNo": "saye",
    "spaNo": "enemigo"
  },
  {
    "rar": "sayiná",
    "spa": "de repente",
    "rarNo": "sayina",
    "spaNo": "de repente"
  },
  {
    "rar": "seba",
    "spa": "alcanzar - llegar - lograr",
    "rarNo": "seba",
    "spaNo": "alcanzar - llegar - lograr"
  },
  {
    "rar": "sayiruma",
    "spa": "teblarse",
    "rarNo": "sayiruma",
    "spaNo": "teblarse"
  },
  {
    "rar": "sebara",
    "spa": "completar - cumplir",
    "rarNo": "sebara",
    "spaNo": "completar - cumplir"
  },
  {
    "rar": "sébari",
    "spa": "bastante - completo",
    "rarNo": "sebari",
    "spaNo": "bastante - completo"
  },
  {
    "rar": "sehuá",
    "spa": "florecer",
    "rarNo": "sehua",
    "spaNo": "florecer"
  },
  {
    "rar": "si",
    "spa": "llegan",
    "rarNo": "si",
    "spaNo": "llegan"
  },
  {
    "rar": "si",
    "spa": "hacer",
    "rarNo": "si",
    "spaNo": "hacer"
  },
  {
    "rar": "si",
    "spa": "dilatarse",
    "rarNo": "si",
    "spaNo": "dilatarse"
  },
  {
    "rar": "si'á",
    "spa": "suegro",
    "rarNo": "si'a",
    "spaNo": "suegro"
  },
  {
    "rar": "sibori",
    "spa": "renacuajo",
    "rarNo": "sibori",
    "spaNo": "renacuajo"
  },
  {
    "rar": "sicá",
    "spa": "trasquilar",
    "rarNo": "sica",
    "spaNo": "trasquilar"
  },
  {
    "rar": "sicá",
    "spa": "brazo o mano",
    "rarNo": "sica",
    "spaNo": "brazo o mano"
  },
  {
    "rar": "sicá jiti",
    "spa": "a mano",
    "rarNo": "sica jiti",
    "spaNo": "a mano"
  },
  {
    "rar": "sicachó",
    "spa": "aplaudir",
    "rarNo": "sicacho",
    "spaNo": "aplaudir"
  },
  {
    "rar": "sicahué",
    "spa": "bracear",
    "rarNo": "sicahue",
    "spaNo": "bracear"
  },
  {
    "rar": "sicara",
    "spa": "mover los brazos",
    "rarNo": "sicara",
    "spaNo": "mover los brazos"
  },
  {
    "rar": "sichoochi",
    "spa": "en un rincon",
    "rarNo": "sichoochi",
    "spaNo": "en un rincon"
  },
  {
    "rar": "sicóona",
    "spa": "salir lagaqña",
    "rarNo": "sicoona",
    "spaNo": "salir lagaqna"
  },
  {
    "rar": "sicorí",
    "spa": "olla - jarro",
    "rarNo": "sicori",
    "spaNo": "olla - jarro"
  },
  {
    "rar": "sicuí",
    "spa": "hormiga",
    "rarNo": "sicui",
    "spaNo": "hormiga"
  },
  {
    "rar": "sihuá",
    "spa": "intestino",
    "rarNo": "sihua",
    "spaNo": "intestino"
  },
  {
    "rar": "sihuá",
    "spa": "florecer",
    "rarNo": "sihua",
    "spaNo": "florecer"
  },
  {
    "rar": "sihuáchari",
    "spa": "flor",
    "rarNo": "sihuachari",
    "spaNo": "flor"
  },
  {
    "rar": "si'huérahua",
    "spa": "pestaña",
    "rarNo": "si'huerahua",
    "spaNo": "pestana"
  },
  {
    "rar": "si'huina",
    "spa": "en otra parte",
    "rarNo": "si'huina",
    "spaNo": "en otra parte"
  },
  {
    "rar": "si'huinárigá",
    "spa": "de otra manera - en cambio",
    "rarNo": "si'huinariga",
    "spaNo": "de otra manera - en cambio"
  },
  {
    "rar": "sijabó",
    "spa": "estar empachado ",
    "rarNo": "sijabo",
    "spaNo": "estar empachado "
  },
  {
    "rar": "sijarí",
    "spa": "vejiga",
    "rarNo": "sijari",
    "spaNo": "vejiga"
  },
  {
    "rar": "sijarí",
    "spa": "ampolla",
    "rarNo": "sijari",
    "spaNo": "ampolla"
  },
  {
    "rar": "si'luna",
    "spa": "pegar",
    "rarNo": "si'luna",
    "spaNo": "pegar"
  },
  {
    "rar": "si'lúami",
    "spa": "plegado",
    "rarNo": "si'luami",
    "spaNo": "plegado"
  },
  {
    "rar": "simá",
    "spa": "irse",
    "rarNo": "sima",
    "spaNo": "irse"
  },
  {
    "rar": "simati",
    "spa": "bonito - hermoso",
    "rarNo": "simati",
    "spaNo": "bonito - hermoso"
  },
  {
    "rar": "simó",
    "spa": "tocar un instrumento musical",
    "rarNo": "simo",
    "spaNo": "tocar un instrumento musical"
  },
  {
    "rar": "simera ",
    "spa": "pasar",
    "rarNo": "simera ",
    "spaNo": "pasar"
  },
  {
    "rar": "simí",
    "spa": "irse",
    "rarNo": "simi",
    "spaNo": "irse"
  },
  {
    "rar": "simí",
    "spa": "caminar",
    "rarNo": "simi",
    "spaNo": "caminar"
  },
  {
    "rar": "simírami",
    "spa": "sobrante",
    "rarNo": "simirami",
    "spaNo": "sobrante"
  },
  {
    "rar": "simuchí",
    "spa": "colibrí",
    "rarNo": "simuchi",
    "spaNo": "colibri"
  },
  {
    "rar": "siná",
    "spa": "gritar",
    "rarNo": "sina",
    "spaNo": "gritar"
  },
  {
    "rar": "siné",
    "spa": "vez",
    "rarNo": "sine",
    "spaNo": "vez"
  },
  {
    "rar": "que sine",
    "spa": "nunca - jamás",
    "rarNo": "que sine",
    "spaNo": "nunca - jamas"
  },
  {
    "rar": "siné cáachi",
    "spa": "en otra ocasión - tal vez",
    "rarNo": "sine caachi",
    "spaNo": "en otra ocasion - tal vez"
  },
  {
    "rar": "sinepi",
    "spa": "una vez",
    "rarNo": "sinepi",
    "spaNo": "una vez"
  },
  {
    "rar": "si'néami",
    "spa": "todo - toda la gente",
    "rarNo": "si'neami",
    "spaNo": "todo - toda la gente"
  },
  {
    "rar": "sinibí",
    "spa": "siempre",
    "rarNo": "sinibi",
    "spaNo": "siempre"
  },
  {
    "rar": "sinohui",
    "spa": "culebras - víboras",
    "rarNo": "sinohui",
    "spaNo": "culebras - viboras"
  },
  {
    "rar": "sinibí rahué",
    "spa": "todos los días",
    "rarNo": "sinibi rahue",
    "spaNo": "todos los dias"
  },
  {
    "rar": "sinomí",
    "spa": "a veces - de vez en cuando",
    "rarNo": "sinomi",
    "spaNo": "a veces - de vez en cuando"
  },
  {
    "rar": "si'nú",
    "spa": "distinto - diferente",
    "rarNo": "si'nu",
    "spaNo": "distinto - diferente"
  },
  {
    "rar": "si'orí",
    "spa": "abeja - mosca",
    "rarNo": "si'ori",
    "spaNo": "abeja - mosca"
  },
  {
    "rar": "si'núriga",
    "spa": "al contrario",
    "rarNo": "si'nuriga",
    "spaNo": "al contrario"
  },
  {
    "rar": "sipá",
    "spa": "rascar - lijar - raspar - cepillar",
    "rarNo": "sipa",
    "spaNo": "rascar - lijar - raspar - cepillar"
  },
  {
    "rar": "sipáami",
    "spa": "curandero - hechicero",
    "rarNo": "sipaami",
    "spaNo": "curandero - hechicero"
  },
  {
    "rar": "tabla sipáami",
    "spa": "carpintero",
    "rarNo": "tabla sipaami",
    "spaNo": "carpintero"
  },
  {
    "rar": "siparí",
    "spa": "ejote",
    "rarNo": "sipari",
    "spaNo": "ejote"
  },
  {
    "rar": "sipabú",
    "spa": "hechizar",
    "rarNo": "sipabu",
    "spaNo": "hechizar"
  },
  {
    "rar": "sipée",
    "spa": "espejo",
    "rarNo": "sipee",
    "spaNo": "espejo"
  },
  {
    "rar": "sipí",
    "spa": "enfirarse",
    "rarNo": "sipi",
    "spaNo": "enfirarse"
  },
  {
    "rar": "sipirú",
    "spa": "pelar",
    "rarNo": "sipiru",
    "spaNo": "pelar"
  },
  {
    "rar": "sipiyoni",
    "spa": "sarampión",
    "rarNo": "sipiyoni",
    "spaNo": "sarampion"
  },
  {
    "rar": "sipucha",
    "spa": "enaguas",
    "rarNo": "sipucha",
    "spaNo": "enaguas"
  },
  {
    "rar": "sipurí",
    "spa": "tárantula",
    "rarNo": "sipuri",
    "spaNo": "tarantula"
  },
  {
    "rar": "siqué ",
    "spa": "tener brazo",
    "rarNo": "sique ",
    "spaNo": "tener brazo"
  },
  {
    "rar": "siquiré",
    "spa": "cortar con un cuchillo",
    "rarNo": "siquire",
    "spaNo": "cortar con un cuchillo"
  },
  {
    "rar": "siquirépari",
    "spa": "se cortó",
    "rarNo": "siquirepari",
    "spaNo": "se corto"
  },
  {
    "rar": "siquiríchi",
    "spa": "gavilán",
    "rarNo": "siquirichi",
    "spaNo": "gavilan"
  },
  {
    "rar": "sirá",
    "spa": "lanza",
    "rarNo": "sira",
    "spaNo": "lanza"
  },
  {
    "rar": "sira",
    "spa": "irse",
    "rarNo": "sira",
    "spaNo": "irse"
  },
  {
    "rar": "si'rí",
    "spa": "ahogarse",
    "rarNo": "si'ri",
    "spaNo": "ahogarse"
  },
  {
    "rar": "si'rina",
    "spa": "ahogar",
    "rarNo": "si'rina",
    "spaNo": "ahogar"
  },
  {
    "rar": "siri",
    "spa": "tijera",
    "rarNo": "siri",
    "spaNo": "tijera"
  },
  {
    "rar": "siríami",
    "spa": "gobernador",
    "rarNo": "siriami",
    "spaNo": "gobernador"
  },
  {
    "rar": "si'rú",
    "spa": "arrugarse",
    "rarNo": "si'ru",
    "spaNo": "arrugarse"
  },
  {
    "rar": "sirú",
    "spa": "cazar - pescar",
    "rarNo": "siru",
    "spaNo": "cazar - pescar"
  },
  {
    "rar": "sirúami",
    "spa": "cazado",
    "rarNo": "siruami",
    "spaNo": "cazado"
  },
  {
    "rar": "si'runá",
    "spa": "aflojar ",
    "rarNo": "si'runa",
    "spaNo": "aflojar "
  },
  {
    "rar": "si'runá",
    "spa": "arrugar - plegar",
    "rarNo": "si'runa",
    "spaNo": "arrugar - plegar"
  },
  {
    "rar": "sitá",
    "spa": "resbalarse",
    "rarNo": "sita",
    "spaNo": "resbalarse"
  },
  {
    "rar": "sitácami",
    "spa": "colorado",
    "rarNo": "sitacami",
    "spaNo": "colorado"
  },
  {
    "rar": "sitá",
    "spa": "tinta",
    "rarNo": "sita",
    "spaNo": "tinta"
  },
  {
    "rar": "sití",
    "spa": "feo - que no sirve",
    "rarNo": "siti",
    "spaNo": "feo - que no sirve"
  },
  {
    "rar": "sití oráami",
    "spa": "malvado",
    "rarNo": "siti oraami",
    "spaNo": "malvado"
  },
  {
    "rar": "sitira ané",
    "spa": "criticar - insultar",
    "rarNo": "sitira ane",
    "spaNo": "criticar - insultar"
  },
  {
    "rar": "sitó",
    "spa": "esquina",
    "rarNo": "sito",
    "spaNo": "esquina"
  },
  {
    "rar": "sitóachi",
    "spa": "codorniz",
    "rarNo": "sitoachi",
    "spaNo": "codorniz"
  },
  {
    "rar": "sitúra",
    "spa": "estar redondo",
    "rarNo": "situra",
    "spaNo": "estar redondo"
  },
  {
    "rar": "sitúrami",
    "spa": "redondo",
    "rarNo": "siturami",
    "spaNo": "redondo"
  },
  {
    "rar": "si'yá",
    "spa": "suegro",
    "rarNo": "si'ya",
    "spaNo": "suegro"
  },
  {
    "rar": "siyónami",
    "spa": "verde - azul",
    "rarNo": "siyonami",
    "spaNo": "verde - azul"
  },
  {
    "rar": "soguí",
    "spa": "casi",
    "rarNo": "sogui",
    "spaNo": "casi"
  },
  {
    "rar": "so'huá",
    "spa": "espinas",
    "rarNo": "so'hua",
    "spaNo": "espinas"
  },
  {
    "rar": "so'hué",
    "spa": "golondrina",
    "rarNo": "so'hue",
    "spaNo": "golondrina"
  },
  {
    "rar": "so'huira",
    "spa": "espinar",
    "rarNo": "so'huira",
    "spaNo": "espinar"
  },
  {
    "rar": "soma",
    "spa": "lavarse la cabeza",
    "rarNo": "soma",
    "spaNo": "lavarse la cabeza"
  },
  {
    "rar": "sonorá",
    "spa": "los pulmones",
    "rarNo": "sonora",
    "spaNo": "los pulmones"
  },
  {
    "rar": "sontarsi",
    "spa": "soldado",
    "rarNo": "sontarsi",
    "spaNo": "soldado"
  },
  {
    "rar": "sopichí",
    "spa": "murcielago",
    "rarNo": "sopichi",
    "spaNo": "murcielago"
  },
  {
    "rar": "soporí",
    "spa": "estrella",
    "rarNo": "sopori",
    "spaNo": "estrella"
  },
  {
    "rar": "sopota",
    "spa": "despeinado",
    "rarNo": "sopota",
    "spaNo": "despeinado"
  },
  {
    "rar": "sotóchi",
    "spa": "ratoncito",
    "rarNo": "sotochi",
    "spaNo": "ratoncito"
  },
  {
    "rar": "sotóchi",
    "spa": "chaparro",
    "rarNo": "sotochi",
    "spaNo": "chaparro"
  },
  {
    "rar": "su",
    "spa": "coser",
    "rarNo": "su",
    "spaNo": "coser"
  },
  {
    "rar": "súami",
    "spa": "cocido",
    "rarNo": "suami",
    "spaNo": "cocido"
  },
  {
    "rar": "sucú",
    "spa": "raspar - rascarse",
    "rarNo": "sucu",
    "spaNo": "raspar - rascarse"
  },
  {
    "rar": "sucuchí",
    "spa": "en el ombligo",
    "rarNo": "sucuchi",
    "spaNo": "en el ombligo"
  },
  {
    "rar": "sucuchú",
    "spa": "pellizcar - rasguñar",
    "rarNo": "sucuchu",
    "spaNo": "pellizcar - rasgunar"
  },
  {
    "rar": "sucuí",
    "spa": "hormiga",
    "rarNo": "sucui",
    "spaNo": "hormiga"
  },
  {
    "rar": "sucurú",
    "spa": "hechizar",
    "rarNo": "sucuru",
    "spaNo": "hechizar"
  },
  {
    "rar": "sucurúami",
    "spa": "hechicero - brujo",
    "rarNo": "sucuruami",
    "spaNo": "hechicero - brujo"
  },
  {
    "rar": "suguí",
    "spa": "tesgüino",
    "rarNo": "sugui",
    "spaNo": "tesguino"
  },
  {
    "rar": "sugúrami",
    "spa": "sucio ",
    "rarNo": "sugurami",
    "spaNo": "sucio "
  },
  {
    "rar": "suhuá",
    "spa": "acabar - terminar",
    "rarNo": "suhua",
    "spaNo": "acabar - terminar"
  },
  {
    "rar": "suhuaba",
    "spa": "destruir - acabar",
    "rarNo": "suhuaba",
    "spaNo": "destruir - acabar"
  },
  {
    "rar": "suhuaba",
    "spa": "todo",
    "rarNo": "suhuaba",
    "spaNo": "todo"
  },
  {
    "rar": "su'hué",
    "spa": "bonito ",
    "rarNo": "su'hue",
    "spaNo": "bonito "
  },
  {
    "rar": "su'hueti júcami",
    "spa": "fragante",
    "rarNo": "su'hueti jucami",
    "spaNo": "fragante"
  },
  {
    "rar": "su'huetari",
    "spa": "bonito",
    "rarNo": "su'huetari",
    "spaNo": "bonito"
  },
  {
    "rar": "suhuí",
    "spa": "acabarse - morirse",
    "rarNo": "suhui",
    "spaNo": "acabarse - morirse"
  },
  {
    "rar": "su'hueti juca",
    "spa": "tiene buen olor",
    "rarNo": "su'hueti juca",
    "spaNo": "tiene buen olor"
  },
  {
    "rar": "suhuíami",
    "spa": "cadáveres",
    "rarNo": "suhuiami",
    "spaNo": "cadaveres"
  },
  {
    "rar": "suhuirá",
    "spa": "orilla",
    "rarNo": "suhuira",
    "spaNo": "orilla"
  },
  {
    "rar": "sumá",
    "spa": "sobar",
    "rarNo": "suma",
    "spaNo": "sobar"
  },
  {
    "rar": "suní",
    "spa": "terminar - acabar - cumplir",
    "rarNo": "suni",
    "spaNo": "terminar - acabar - cumplir"
  },
  {
    "rar": "mani suniri nóchia",
    "spa": "ya terminé de trabajar",
    "rarNo": "mani suniri nochia",
    "spaNo": "ya termine de trabajar"
  },
  {
    "rar": "suníami",
    "spa": "en todas partes",
    "rarNo": "suniami",
    "spaNo": "en todas partes"
  },
  {
    "rar": "sunú",
    "spa": "maíz",
    "rarNo": "sunu",
    "spaNo": "maiz"
  },
  {
    "rar": "sunú o'néami",
    "spa": "mazorca",
    "rarNo": "sunu o'neami",
    "spaNo": "mazorca"
  },
  {
    "rar": "supuchí",
    "spa": "murciélago",
    "rarNo": "supuchi",
    "spaNo": "murcielago"
  },
  {
    "rar": "suquí",
    "spa": "ombligo",
    "rarNo": "suqui",
    "spaNo": "ombligo"
  },
  {
    "rar": "sucuchí",
    "spa": "en el ombligo",
    "rarNo": "sucuchi",
    "spaNo": "en el ombligo"
  },
  {
    "rar": "su'rá",
    "spa": "aflojarse",
    "rarNo": "su'ra",
    "spaNo": "aflojarse"
  },
  {
    "rar": "surá",
    "spa": "corazón",
    "rarNo": "sura",
    "spaNo": "corazon"
  },
  {
    "rar": "suré",
    "spa": "tener corazón",
    "rarNo": "sure",
    "spaNo": "tener corazon"
  },
  {
    "rar": "surachí ",
    "spa": "en el corazón",
    "rarNo": "surachi ",
    "spaNo": "en el corazon"
  },
  {
    "rar": "surí",
    "spa": "no querer compartir",
    "rarNo": "suri",
    "spaNo": "no querer compartir"
  },
  {
    "rar": "su'rina",
    "spa": "soltar",
    "rarNo": "su'rina",
    "spaNo": "soltar"
  },
  {
    "rar": "sutú",
    "spa": "uña - pezuña",
    "rarNo": "sutu",
    "spaNo": "una - pezuna"
  },
  {
    "rar": "ta ",
    "spa": "pedir",
    "rarNo": "ta ",
    "spaNo": "pedir"
  },
  {
    "rar": "taní",
    "spa": "estar pidiendo",
    "rarNo": "tani",
    "spaNo": "estar pidiendo"
  },
  {
    "rar": "ta",
    "spa": "chiquito",
    "rarNo": "ta",
    "spaNo": "chiquito"
  },
  {
    "rar": "tabé",
    "spa": "más chiquito",
    "rarNo": "tabe",
    "spaNo": "mas chiquito"
  },
  {
    "rar": "táa",
    "spa": "chico - infante - pequeño",
    "rarNo": "taa",
    "spaNo": "chico - infante - pequeno"
  },
  {
    "rar": "táami",
    "spa": "músico",
    "rarNo": "taami",
    "spaNo": "musico"
  },
  {
    "rar": "táa nira",
    "spa": "se encoge",
    "rarNo": "taa nira",
    "spaNo": "se encoge"
  },
  {
    "rar": "taba",
    "spa": "luchar",
    "rarNo": "taba",
    "spaNo": "luchar"
  },
  {
    "rar": "tabachi",
    "spa": "calentar",
    "rarNo": "tabachi",
    "spaNo": "calentar"
  },
  {
    "rar": "tabachi",
    "spa": "taparrabo",
    "rarNo": "tabachi",
    "spaNo": "taparrabo"
  },
  {
    "rar": "tábara",
    "spa": "tabla",
    "rarNo": "tabara",
    "spaNo": "tabla"
  },
  {
    "rar": "tabé",
    "spa": "más chiquito",
    "rarNo": "tabe",
    "spaNo": "mas chiquito"
  },
  {
    "rar": "tabéara",
    "spa": "menor",
    "rarNo": "tabeara",
    "spaNo": "menor"
  },
  {
    "rar": "tamí",
    "spa": "a mí",
    "rarNo": "tami",
    "spaNo": "a mi"
  },
  {
    "rar": "tamujé",
    "spa": "nosotros",
    "rarNo": "tamuje",
    "spaNo": "nosotros"
  },
  {
    "rar": "tamujé níhuara",
    "spa": "nuestro",
    "rarNo": "tamuje nihuara",
    "spaNo": "nuestro"
  },
  {
    "rar": "tamuro",
    "spa": "mudo",
    "rarNo": "tamuro",
    "spaNo": "mudo"
  },
  {
    "rar": "tana",
    "spa": "pedir",
    "rarNo": "tana",
    "spaNo": "pedir"
  },
  {
    "rar": "tanehua",
    "spa": "fiar",
    "rarNo": "tanehua",
    "spaNo": "fiar"
  },
  {
    "rar": "tanehui",
    "spa": "prestar",
    "rarNo": "tanehui",
    "spaNo": "prestar"
  },
  {
    "rar": "tani",
    "spa": "rogar",
    "rarNo": "tani",
    "spaNo": "rogar"
  },
  {
    "rar": "tani riosi",
    "spa": "pedir a dios",
    "rarNo": "tani riosi",
    "spaNo": "pedir a dios"
  },
  {
    "rar": "tapa",
    "spa": "acarrear - traer en las manos",
    "rarNo": "tapa",
    "spaNo": "acarrear - traer en las manos"
  },
  {
    "rar": "tará",
    "spa": "contar",
    "rarNo": "tara",
    "spaNo": "contar"
  },
  {
    "rar": "tarárami",
    "spa": "contados",
    "rarNo": "tararami",
    "spaNo": "contados"
  },
  {
    "rar": "tarapé",
    "spa": "no",
    "rarNo": "tarape",
    "spaNo": "no"
  },
  {
    "rar": "tarapé te ",
    "spa": "no hay",
    "rarNo": "tarape te ",
    "spaNo": "no hay"
  },
  {
    "rar": "tarapé machíami",
    "spa": "ignorante",
    "rarNo": "tarape machiami",
    "spaNo": "ignorante"
  },
  {
    "rar": "tarari",
    "spa": "semana",
    "rarNo": "tarari",
    "spaNo": "semana"
  },
  {
    "rar": "tarí",
    "spa": "semilla",
    "rarNo": "tari",
    "spaNo": "semilla"
  },
  {
    "rar": "tarí",
    "spa": "apuesta",
    "rarNo": "tari",
    "spaNo": "apuesta"
  },
  {
    "rar": "tasi iré",
    "spa": "no sirve",
    "rarNo": "tasi ire",
    "spaNo": "no sirve"
  },
  {
    "rar": "tasi iré",
    "spa": "no",
    "rarNo": "tasi ire",
    "spaNo": "no"
  },
  {
    "rar": "tata",
    "spa": "padre",
    "rarNo": "tata",
    "spaNo": "padre"
  },
  {
    "rar": "te",
    "spa": "tejer",
    "rarNo": "te",
    "spaNo": "tejer"
  },
  {
    "rar": "técuri",
    "spa": "borrachos",
    "rarNo": "tecuri",
    "spaNo": "borrachos"
  },
  {
    "rar": "téeribi",
    "spa": "poco tiempo",
    "rarNo": "teeribi",
    "spaNo": "poco tiempo"
  },
  {
    "rar": "témari",
    "spa": "jóvenes",
    "rarNo": "temari",
    "spaNo": "jovenes"
  },
  {
    "rar": "tera",
    "spa": "telar",
    "rarNo": "tera",
    "spaNo": "telar"
  },
  {
    "rar": "teri",
    "spa": "corto",
    "rarNo": "teri",
    "spaNo": "corto"
  },
  {
    "rar": "pe peri",
    "spa": "poco tiempo",
    "rarNo": "pe peri",
    "spaNo": "poco tiempo"
  },
  {
    "rar": "térico",
    "spa": "al rato - ahorita",
    "rarNo": "terico",
    "spaNo": "al rato - ahorita"
  },
  {
    "rar": "térico piché",
    "spa": "hasta luego",
    "rarNo": "terico piche",
    "spaNo": "hasta luego"
  },
  {
    "rar": "tétari ",
    "spa": "la medida - plazo de tiempo",
    "rarNo": "tetari ",
    "spaNo": "la medida - plazo de tiempo"
  },
  {
    "rar": "tibí",
    "spa": "quedar - sobrar",
    "rarNo": "tibi",
    "spaNo": "quedar - sobrar"
  },
  {
    "rar": "tibí",
    "spa": "permanecer",
    "rarNo": "tibi",
    "spaNo": "permanecer"
  },
  {
    "rar": "tibíami",
    "spa": "restante",
    "rarNo": "tibiami",
    "spaNo": "restante"
  },
  {
    "rar": "tibú",
    "spa": "cuidar - vigilar",
    "rarNo": "tibu",
    "spaNo": "cuidar - vigilar"
  },
  {
    "rar": "tibuta",
    "spa": "guardar - proteger - vigilar",
    "rarNo": "tibuta",
    "spaNo": "guardar - proteger - vigilar"
  },
  {
    "rar": "tibútana",
    "spa": "encomendar",
    "rarNo": "tibutana",
    "spaNo": "encomendar"
  },
  {
    "rar": "tibútari",
    "spa": "espantapájaros",
    "rarNo": "tibutari",
    "spaNo": "espantapajaros"
  },
  {
    "rar": "tichí",
    "spa": "peinar",
    "rarNo": "tichi",
    "spaNo": "peinar"
  },
  {
    "rar": "tichícari",
    "spa": "peinar",
    "rarNo": "tichicari",
    "spaNo": "peinar"
  },
  {
    "rar": "ticó",
    "spa": "cercar",
    "rarNo": "tico",
    "spaNo": "cercar"
  },
  {
    "rar": "tigótachi",
    "spa": "cerco de piedra",
    "rarNo": "tigotachi",
    "spaNo": "cerco de piedra"
  },
  {
    "rar": "tihué",
    "spa": "muchacha",
    "rarNo": "tihue",
    "spaNo": "muchacha"
  },
  {
    "rar": "tinicha",
    "spa": "repetir - burlar",
    "rarNo": "tinicha",
    "spaNo": "repetir - burlar"
  },
  {
    "rar": "tisó",
    "spa": "usar bastópn",
    "rarNo": "tiso",
    "spaNo": "usar bastopn"
  },
  {
    "rar": "tisora",
    "spa": "bastón",
    "rarNo": "tisora",
    "spaNo": "baston"
  },
  {
    "rar": "to",
    "spa": "enterrar",
    "rarNo": "to",
    "spaNo": "enterrar"
  },
  {
    "rar": "to",
    "spa": "llevar - tomar",
    "rarNo": "to",
    "spaNo": "llevar - tomar"
  },
  {
    "rar": "tobá",
    "spa": "atascarse",
    "rarNo": "toba",
    "spaNo": "atascarse"
  },
  {
    "rar": "towi",
    "spa": "muchacho - niño",
    "rarNo": "towi",
    "spaNo": "muchacho - nino"
  },
  {
    "rar": "toná",
    "spa": "poner parado",
    "rarNo": "tona",
    "spaNo": "poner parado"
  },
  {
    "rar": "toreta",
    "spa": "cacarear",
    "rarNo": "toreta",
    "spaNo": "cacarear"
  },
  {
    "rar": "toni",
    "spa": "poste",
    "rarNo": "toni",
    "spaNo": "poste"
  },
  {
    "rar": "torí",
    "spa": "gallina - pollo",
    "rarNo": "tori",
    "spaNo": "gallina - pollo"
  },
  {
    "rar": "tu ",
    "spa": "traer agua - sacar agua",
    "rarNo": "tu ",
    "spaNo": "traer agua - sacar agua"
  },
  {
    "rar": "túcami",
    "spa": "asado",
    "rarNo": "tucami",
    "spaNo": "asado"
  },
  {
    "rar": "tucua",
    "spa": "desde abajo",
    "rarNo": "tucua",
    "spaNo": "desde abajo"
  },
  {
    "rar": "tumujé",
    "spa": "nosotros",
    "rarNo": "tumuje",
    "spaNo": "nosotros"
  },
  {
    "rar": "turio",
    "spa": "trigo",
    "rarNo": "turio",
    "spaNo": "trigo"
  },
  {
    "rar": "turupa",
    "spa": "tropezar",
    "rarNo": "turupa",
    "spaNo": "tropezar"
  },
  {
    "rar": "uba",
    "spa": "bañarse",
    "rarNo": "uba",
    "spaNo": "banarse"
  },
  {
    "rar": "úca",
    "spa": "espinazo",
    "rarNo": "uca",
    "spaNo": "espinazo"
  },
  {
    "rar": "ucú",
    "spa": "llover",
    "rarNo": "ucu",
    "spaNo": "llover"
  },
  {
    "rar": "ocuá",
    "spa": "lagrima",
    "rarNo": "ocua",
    "spaNo": "lagrima"
  },
  {
    "rar": "ocuí",
    "spa": "llover",
    "rarNo": "ocui",
    "spaNo": "llover"
  },
  {
    "rar": "uché",
    "spa": "untar - frotar",
    "rarNo": "uche",
    "spaNo": "untar - frotar"
  },
  {
    "rar": "uché",
    "spa": "vacunar",
    "rarNo": "uche",
    "spaNo": "vacunar"
  },
  {
    "rar": "uchíi",
    "spa": "estrecho - angosto",
    "rarNo": "uchii",
    "spaNo": "estrecho - angosto"
  },
  {
    "rar": "uchú",
    "spa": "besar - chupar",
    "rarNo": "uchu",
    "spaNo": "besar - chupar"
  },
  {
    "rar": "uchú",
    "spa": "picar - picotear",
    "rarNo": "uchu",
    "spaNo": "picar - picotear"
  },
  {
    "rar": "uchucha",
    "spa": "traducir del tarahumara a español",
    "rarNo": "uchucha",
    "spaNo": "traducir del tarahumara a espanol"
  },
  {
    "rar": "ujuma",
    "spa": "correr",
    "rarNo": "ujuma",
    "spaNo": "correr"
  },
  {
    "rar": "umí",
    "spa": "cintura",
    "rarNo": "umi",
    "spaNo": "cintura"
  },
  {
    "rar": "umugusa",
    "spa": "desmayarse",
    "rarNo": "umugusa",
    "spaNo": "desmayarse"
  },
  {
    "rar": "umpá",
    "spa": "perder en el juego",
    "rarNo": "umpa",
    "spaNo": "perder en el juego"
  },
  {
    "rar": "umuri",
    "spa": "bisabuelo - bisnieto",
    "rarNo": "umuri",
    "spaNo": "bisabuelo - bisnieto"
  },
  {
    "rar": "upé",
    "spa": "tener esposa",
    "rarNo": "upe",
    "spaNo": "tener esposa"
  },
  {
    "rar": "upí",
    "spa": "esposa",
    "rarNo": "upi",
    "spaNo": "esposa"
  },
  {
    "rar": "upímami",
    "spa": "viudo",
    "rarNo": "upimami",
    "spaNo": "viudo"
  },
  {
    "rar": "urí",
    "spa": "barranca",
    "rarNo": "uri",
    "spaNo": "barranca"
  },
  {
    "rar": "usani",
    "spa": "seis",
    "rarNo": "usani",
    "spaNo": "seis"
  },
  {
    "rar": "usansa",
    "spa": "sexto",
    "rarNo": "usansa",
    "spaNo": "sexto"
  },
  {
    "rar": "usansa macoy",
    "spa": "sesenta",
    "rarNo": "usansa macoy",
    "spaNo": "sesenta"
  },
  {
    "rar": "usí",
    "spa": "arriba por el arroyo",
    "rarNo": "usi",
    "spaNo": "arriba por el arroyo"
  },
  {
    "rar": "usú",
    "spa": "abuela - nieta materna",
    "rarNo": "usu",
    "spaNo": "abuela - nieta materna"
  },
  {
    "rar": "usuta",
    "spa": "zurdo",
    "rarNo": "usuta",
    "spaNo": "zurdo"
  },
  {
    "rar": "ya",
    "spa": "dar - convidar",
    "rarNo": "ya",
    "spaNo": "dar - convidar"
  },
  {
    "rar": "yáati",
    "spa": "inmediatamente - pronto",
    "rarNo": "yaati",
    "spaNo": "inmediatamente - pronto"
  },
  {
    "rar": "yé",
    "spa": "quitar",
    "rarNo": "ye",
    "spaNo": "quitar"
  },
  {
    "rar": "ye",
    "spa": "por alla - alrededor",
    "rarNo": "ye",
    "spaNo": "por alla - alrededor"
  },
  {
    "rar": "corí yé",
    "spa": "por allá",
    "rarNo": "cori ye",
    "spaNo": "por alla"
  },
  {
    "rar": "yéachi",
    "spa": "abierto",
    "rarNo": "yeachi",
    "spaNo": "abierto"
  },
  {
    "rar": "yeba",
    "spa": "traer",
    "rarNo": "yeba",
    "spaNo": "traer"
  },
  {
    "rar": "yeca",
    "spa": "engañar - mentir",
    "rarNo": "yeca",
    "spaNo": "enganar - mentir"
  },
  {
    "rar": "yécarami",
    "spa": "engañado",
    "rarNo": "yecarami",
    "spaNo": "enganado"
  },
  {
    "rar": "yémta",
    "spa": "causar vértigo",
    "rarNo": "yemta",
    "spaNo": "causar vertigo"
  },
  {
    "rar": "yemi",
    "spa": "ustedes",
    "rarNo": "yemi",
    "spaNo": "ustedes"
  },
  {
    "rar": "yemi níhuara",
    "spa": "de ustedes",
    "rarNo": "yemi nihuara",
    "spaNo": "de ustedes"
  },
  {
    "rar": "yena",
    "spa": "andar",
    "rarNo": "yena",
    "spaNo": "andar"
  },
  {
    "rar": "chu yénasí",
    "spa": "¿hasta cuándo?",
    "rarNo": "chu yenasi",
    "spaNo": "¿hasta cuando?"
  },
  {
    "rar": "chu yénaco",
    "spa": "¿qué hora? - ¿Cuándo?",
    "rarNo": "chu yenaco",
    "spaNo": "¿que hora? - ¿Cuando?"
  },
  {
    "rar": "cumi yénari",
    "spa": "¿Dónde andabas?",
    "rarNo": "cumi yenari",
    "spaNo": "¿Donde andabas?"
  },
  {
    "rar": "yepu",
    "spa": "¿quién?",
    "rarNo": "yepu",
    "spaNo": "¿quien?"
  },
  {
    "rar": "yera",
    "spa": "pierta",
    "rarNo": "yera",
    "spaNo": "pierta"
  },
  {
    "rar": "yera",
    "spa": "invitar",
    "rarNo": "yera",
    "spaNo": "invitar"
  },
  {
    "rar": "yeri",
    "spa": "conducir",
    "rarNo": "yeri",
    "spaNo": "conducir"
  },
  {
    "rar": "yeta",
    "spa": "cerrado",
    "rarNo": "yeta",
    "spaNo": "cerrado"
  },
  {
    "rar": "yiri",
    "spa": "clase o color",
    "rarNo": "yiri",
    "spaNo": "clase o color"
  },
  {
    "rar": "chu yiri",
    "spa": "¿Qué color? - ¿cuál?",
    "rarNo": "chu yiri",
    "spaNo": "¿Que color? - ¿cual?"
  },
  {
    "rar": "yiri",
    "spa": "esemajanza",
    "rarNo": "yiri",
    "spaNo": "esemajanza"
  },
  {
    "rar": "onó",
    "spa": "está enojado",
    "rarNo": "ono",
    "spaNo": "esta enojado"
  },
  {
    "rar": "mapu yíripi",
    "spa": "cualquier",
    "rarNo": "mapu yiripi",
    "spaNo": "cualquier"
  },
  {
    "rar": "yoca",
    "spa": "teñir",
    "rarNo": "yoca",
    "spaNo": "tenir"
  },
  {
    "rar": "yona ",
    "spa": "regañar",
    "rarNo": "yona ",
    "spaNo": "reganar"
  },
  {
    "rar": "yónarati",
    "spa": "fue regañado",
    "rarNo": "yonarati",
    "spaNo": "fue reganado"
  },
  {
    "rar": "yora",
    "spa": "enojar",
    "rarNo": "yora",
    "spaNo": "enojar"
  },
  {
    "rar": "yora",
    "spa": "inclinar la cabeza",
    "rarNo": "yora",
    "spaNo": "inclinar la cabeza"
  },
  {
    "rar": "yura",
    "spa": "guiar",
    "rarNo": "yura",
    "spaNo": "guiar"
  },
  {
    "rar": "yuga",
    "spa": "con",
    "rarNo": "yuga",
    "spaNo": "con"
  },
  {
    "rar": "",
    "spa": "",
    "rarNo": "",
    "spaNo": ""
  },
  {
    "rar": "ásaga",
    "spa": "si lo busca",
    "rarNo": "asaga",
    "spaNo": "si lo busca",
    "tags": []
  },
  {
    "rar": "ásiga",
    "spa": "buscándolo",
    "rarNo": "asiga",
    "spaNo": "buscandolo",
    "tags": []
  },
  {
    "rar": "ay",
    "spa": "lo buscaba",
    "rarNo": "ay",
    "spaNo": "lo buscaba",
    "tags": []
  },
  {
    "rar": "abé",
    "spa": "hoy",
    "rarNo": "abe",
    "spaNo": "hoy",
    "tags": []
  },
  {
    "rar": "abé huauú ucuri",
    "spa": "hoy llovió mucho",
    "rarNo": "abe huauu ucuri",
    "spaNo": "hoy llovio mucho",
    "tags": []
  },
  {
    "rar": "abijí",
    "spa": "todavía - aún",
    "rarNo": "abiji",
    "spaNo": "todavia - aun",
    "tags": []
  },
  {
    "rar": "aboni",
    "spa": "ellos - ellas",
    "rarNo": "aboni",
    "spaNo": "ellos - ellas",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "acá",
    "spa": "cara - nariz",
    "rarNo": "aca",
    "spaNo": "cara - nariz",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "binoy acara",
    "spa": "su cara",
    "rarNo": "binoy acara",
    "spaNo": "su cara",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "binoy acárachi",
    "spa": "en su cara",
    "rarNo": "binoy acarachi",
    "spaNo": "en su cara",
    "tags": []
  },
  {
    "rar": "acá vi",
    "spa": "tener sal - está dulce o sabroso",
    "rarNo": "aca vi",
    "spaNo": "tener sal - esta dulce o sabroso",
    "tags": [
      "sabor"
    ]
  },
  {
    "rar": "acá ",
    "spa": "huarache",
    "rarNo": "aca ",
    "spaNo": "huarache",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "acará",
    "spa": "poner huaraches",
    "rarNo": "acara",
    "spaNo": "poner huaraches",
    "tags": []
  },
  {
    "rar": "acarapta",
    "spa": "quitar huaraches",
    "rarNo": "acarapta",
    "spaNo": "quitar huaraches",
    "tags": []
  },
  {
    "rar": "acá",
    "spa": "embotarse - quitarse (filo)",
    "rarNo": "aca",
    "spaNo": "embotarse - quitarse (filo)",
    "tags": []
  },
  {
    "rar": "acáami",
    "spa": "salado - dulce",
    "rarNo": "acaami",
    "spaNo": "salado - dulce",
    "tags": [
      "sabor"
    ]
  },
  {
    "rar": "acáanami",
    "spa": "Sano de  pie o de brazo",
    "rarNo": "acaanami",
    "spaNo": "Sano de  pie o de brazo",
    "tags": []
  },
  {
    "rar": "acabó",
    "spa": "hoyo de la nariz",
    "rarNo": "acabo",
    "spaNo": "hoyo de la nariz",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "acáchura",
    "spa": "abuela paterna",
    "rarNo": "acachura",
    "spaNo": "abuela paterna",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "acajihua",
    "spa": "correa",
    "rarNo": "acajihua",
    "spaNo": "correa",
    "tags": []
  },
  {
    "rar": "acami",
    "spa": "estar vivo",
    "rarNo": "acami",
    "spaNo": "estar vivo",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "acaná",
    "spa": "boca abajo",
    "rarNo": "acana",
    "spaNo": "boca abajo",
    "tags": []
  },
  {
    "rar": "acará",
    "spa": "herrar - rostro",
    "rarNo": "acara",
    "spaNo": "herrar - rostro",
    "tags": []
  },
  {
    "rar": "acha",
    "spa": "¿acaso?",
    "rarNo": "acha",
    "spaNo": "¿acaso?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "acha gará ju?",
    "spa": "¿estás bien?",
    "rarNo": "acha gara ju?",
    "spaNo": "¿estas bien?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "achá",
    "spa": "poner",
    "rarNo": "acha",
    "spaNo": "poner",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "achagó",
    "spa": "mata espinosa",
    "rarNo": "achago",
    "spaNo": "mata espinosa",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "aché",
    "spa": "atiesarse - morirse de frio",
    "rarNo": "ache",
    "spaNo": "atiesarse - morirse de frio",
    "tags": []
  },
  {
    "rar": "achí",
    "spa": "reir - sonreir",
    "rarNo": "achi",
    "spaNo": "reir - sonreir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "achíami",
    "spa": "risueño",
    "rarNo": "achiami",
    "spaNo": "risueno",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "achigó yiri ju",
    "spa": "es igual",
    "rarNo": "achigo yiri ju",
    "spaNo": "es igual",
    "tags": []
  },
  {
    "rar": "achigórigá",
    "spa": "de la misma manera",
    "rarNo": "achigoriga",
    "spaNo": "de la misma manera",
    "tags": []
  },
  {
    "rar": "achíptiami",
    "spa": "cómico",
    "rarNo": "achiptiami",
    "spaNo": "comico",
    "tags": []
  },
  {
    "rar": "achó",
    "spa": "iguales",
    "rarNo": "acho",
    "spaNo": "iguales",
    "tags": []
  },
  {
    "rar": "agá",
    "spa": "dándole",
    "rarNo": "aga",
    "spaNo": "dandole",
    "tags": []
  },
  {
    "rar": "agásane",
    "spa": "bilis",
    "rarNo": "agasane",
    "spaNo": "bilis",
    "tags": []
  },
  {
    "rar": "ahuá",
    "spa": "cuerno",
    "rarNo": "ahua",
    "spaNo": "cuerno",
    "tags": []
  },
  {
    "rar": "a'huá",
    "spa": "tragar",
    "rarNo": "a'hua",
    "spaNo": "tragar",
    "tags": []
  },
  {
    "rar": "a'huánami",
    "spa": "ligeros",
    "rarNo": "a'huanami",
    "spaNo": "ligeros",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ahué",
    "spa": "asar",
    "rarNo": "ahue",
    "spaNo": "asar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ahuérami",
    "spa": "asado",
    "rarNo": "ahuerami",
    "spaNo": "asado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "a'hué",
    "spa": "águila",
    "rarNo": "a'hue",
    "spaNo": "aguila",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "ahuí",
    "spa": "bailar",
    "rarNo": "ahui",
    "spaNo": "bailar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "a'huí",
    "spa": "brotar - germinar (semillas)",
    "rarNo": "a'hui",
    "spaNo": "brotar - germinar (semillas)",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "ahuínari",
    "spa": "solos",
    "rarNo": "ahuinari",
    "spaNo": "solos",
    "tags": []
  },
  {
    "rar": "a'huínari",
    "spa": "aparte",
    "rarNo": "a'huinari",
    "spaNo": "aparte",
    "tags": []
  },
  {
    "rar": "ajó",
    "spa": "desgranar maíz",
    "rarNo": "ajo",
    "spaNo": "desgranar maiz",
    "tags": []
  },
  {
    "rar": "ajo",
    "spa": "mosquito - zancudo",
    "rarNo": "ajo",
    "spaNo": "mosquito - zancudo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "amá",
    "spa": "hígado",
    "rarNo": "ama",
    "spaNo": "higado",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "huáasi amará",
    "spa": "hígado de vaca",
    "rarNo": "huaasi amara",
    "spaNo": "higado de vaca",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "amachí",
    "spa": "rezar",
    "rarNo": "amachi",
    "spaNo": "rezar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "amarú",
    "spa": "estar entero",
    "rarNo": "amaru",
    "spaNo": "estar entero",
    "tags": []
  },
  {
    "rar": "amí",
    "spa": "buscar",
    "rarNo": "ami",
    "spaNo": "buscar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "amígohua",
    "spa": "amigo",
    "rarNo": "amigohua",
    "spaNo": "amigo",
    "tags": []
  },
  {
    "rar": "aná",
    "spa": "de otro modo",
    "rarNo": "ana",
    "spaNo": "de otro modo",
    "tags": []
  },
  {
    "rar": "aná",
    "spa": "ala- aleta",
    "rarNo": "ana",
    "spaNo": "ala- aleta",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "a'nabáa",
    "spa": "juntarse",
    "rarNo": "a'nabaa",
    "spaNo": "juntarse",
    "tags": []
  },
  {
    "rar": "anacha",
    "spa": "aguantar",
    "rarNo": "anacha",
    "spaNo": "aguantar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "anachapa",
    "spa": "aletear",
    "rarNo": "anachapa",
    "spaNo": "aletear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "a'nagú",
    "spa": "por los dos lados",
    "rarNo": "a'nagu",
    "spaNo": "por los dos lados",
    "tags": []
  },
  {
    "rar": "a'nagupi",
    "spa": "mutuamente - unos a otros",
    "rarNo": "a'nagupi",
    "spaNo": "mutuamente - unos a otros",
    "tags": []
  },
  {
    "rar": "anahui",
    "spa": "medir - pesar",
    "rarNo": "anahui",
    "spaNo": "medir - pesar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "a'nahuí",
    "spa": "al mismo tiempo",
    "rarNo": "a'nahui",
    "spaNo": "al mismo tiempo",
    "tags": []
  },
  {
    "rar": "a'najata",
    "spa": "perseguir",
    "rarNo": "a'najata",
    "spaNo": "perseguir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "a'namótami",
    "spa": "uno encima de otro",
    "rarNo": "a'namotami",
    "spaNo": "uno encima de otro",
    "tags": []
  },
  {
    "rar": "anara",
    "spa": "igualar",
    "rarNo": "anara",
    "spaNo": "igualar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ané",
    "spa": "decir",
    "rarNo": "ane",
    "spaNo": "decir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "anebi",
    "spa": "le hubiéramos dicho",
    "rarNo": "anebi",
    "spaNo": "le hubieramos dicho",
    "tags": []
  },
  {
    "rar": "anemi",
    "spa": "le hubiera dicho",
    "rarNo": "anemi",
    "spaNo": "le hubiera dicho",
    "tags": []
  },
  {
    "rar": "aní",
    "spa": "decir",
    "rarNo": "ani",
    "spaNo": "decir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "anihuáami",
    "spa": "querer decir",
    "rarNo": "anihuaami",
    "spaNo": "querer decir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "anirá",
    "spa": "decir (futuro)",
    "rarNo": "anira",
    "spaNo": "decir (futuro)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "aniríhuami",
    "spa": "nombrado",
    "rarNo": "anirihuami",
    "spaNo": "nombrado",
    "tags": []
  },
  {
    "rar": "aorí",
    "spa": "táscate",
    "rarNo": "aori",
    "spaNo": "tascate",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "apanérohua",
    "spa": "compañero",
    "rarNo": "apanerohua",
    "spaNo": "companero",
    "tags": []
  },
  {
    "rar": "aparúami",
    "spa": "Bravo - cruel - feroz - valiente",
    "rarNo": "aparuami",
    "spaNo": "Bravo - cruel - feroz - valiente",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "apé",
    "spa": "echar a la espalda",
    "rarNo": "ape",
    "spaNo": "echar a la espalda",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "apurá",
    "spa": "hacer olas (en el agua)",
    "rarNo": "apura",
    "spaNo": "hacer olas (en el agua)",
    "tags": []
  },
  {
    "rar": "aqué",
    "spa": "nadar",
    "rarNo": "aque",
    "spaNo": "nadar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "aquibi",
    "spa": "desaparecer",
    "rarNo": "aquibi",
    "spaNo": "desaparecer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "arara",
    "spa": "arado",
    "rarNo": "arara",
    "spaNo": "arado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "arí",
    "spa": "tarde",
    "rarNo": "ari",
    "spaNo": "tarde",
    "tags": []
  },
  {
    "rar": "jipi arí",
    "spa": "hoy en la tarde - enseguida",
    "rarNo": "jipi ari",
    "spaNo": "hoy en la tarde - enseguida",
    "tags": []
  },
  {
    "rar": "arí biché ",
    "spa": "entonces",
    "rarNo": "ari biche ",
    "spaNo": "entonces",
    "tags": []
  },
  {
    "rar": "ariché",
    "spa": "tardar - dilatar",
    "rarNo": "ariche",
    "spaNo": "tardar - dilatar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "arigá",
    "spa": "a pesar de- de todos modos",
    "rarNo": "ariga",
    "spaNo": "a pesar de- de todos modos",
    "tags": []
  },
  {
    "rar": "arihua",
    "spa": "atardecer",
    "rarNo": "arihua",
    "spaNo": "atardecer",
    "tags": []
  },
  {
    "rar": "arihuá",
    "spa": "alma",
    "rarNo": "arihua",
    "spaNo": "alma",
    "tags": []
  },
  {
    "rar": "arihué",
    "spa": "dejar",
    "rarNo": "arihue",
    "spaNo": "dejar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "a' rínamorí",
    "spa": "al poco rato",
    "rarNo": "a' rinamori",
    "spaNo": "al poco rato",
    "tags": []
  },
  {
    "rar": "ariósibá",
    "spa": "adios",
    "rarNo": "ariosiba",
    "spaNo": "adios",
    "tags": []
  },
  {
    "rar": "arirí",
    "spa": "!ay!",
    "rarNo": "ariri",
    "spaNo": "!ay!",
    "tags": []
  },
  {
    "rar": "aró",
    "spa": "marchitarse",
    "rarNo": "aro",
    "spaNo": "marchitarse",
    "tags": []
  },
  {
    "rar": "asahua",
    "spa": "sacudir",
    "rarNo": "asahua",
    "spaNo": "sacudir",
    "tags": []
  },
  {
    "rar": "asé",
    "spa": "montar (un animal)",
    "rarNo": "ase",
    "spaNo": "montar (un animal)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "así",
    "spa": "también",
    "rarNo": "asi",
    "spaNo": "tambien",
    "tags": []
  },
  {
    "rar": "asibá",
    "spa": "siéntate",
    "rarNo": "asiba",
    "spaNo": "sientate",
    "tags": []
  },
  {
    "rar": "asiba",
    "spa": "sentarse",
    "rarNo": "asiba",
    "spaNo": "sentarse",
    "tags": []
  },
  {
    "rar": "asisi",
    "spa": "levantarse",
    "rarNo": "asisi",
    "spaNo": "levantarse",
    "tags": []
  },
  {
    "rar": "atá",
    "spa": "arco",
    "rarNo": "ata",
    "spaNo": "arco",
    "tags": []
  },
  {
    "rar": "atahuépata",
    "spa": "podar",
    "rarNo": "atahuepata",
    "spaNo": "podar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "atí",
    "spa": "estar sentado",
    "rarNo": "ati",
    "spaNo": "estar sentado",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "atisi",
    "spa": "estornudar",
    "rarNo": "atisi",
    "spaNo": "estornudar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "auché",
    "spa": "otro",
    "rarNo": "auche",
    "spaNo": "otro",
    "tags": []
  },
  {
    "rar": "a' yapi",
    "spa": "uno tras otro",
    "rarNo": "a' yapi",
    "spaNo": "uno tras otro",
    "tags": []
  },
  {
    "rar": "auchecho",
    "spa": "otra vez",
    "rarNo": "auchecho",
    "spaNo": "otra vez",
    "tags": []
  },
  {
    "rar": "ayena",
    "spa": "sí",
    "rarNo": "ayena",
    "spaNo": "si",
    "tags": []
  },
  {
    "rar": "ayena cho",
    "spa": "también - aún",
    "rarNo": "ayena cho",
    "spaNo": "tambien - aun",
    "tags": []
  },
  {
    "rar": "ayénasí",
    "spa": "sí también",
    "rarNo": "ayenasi",
    "spaNo": "si tambien",
    "tags": []
  },
  {
    "rar": "ba'arí",
    "spa": "mañana",
    "rarNo": "ba'ari",
    "spaNo": "manana",
    "tags": []
  },
  {
    "rar": "ba'ari piché",
    "spa": "hasta mañana",
    "rarNo": "ba'ari piche",
    "spaNo": "hasta manana",
    "tags": []
  },
  {
    "rar": "ba'arínara",
    "spa": "al siguiente día",
    "rarNo": "ba'arinara",
    "spaNo": "al siguiente dia",
    "tags": []
  },
  {
    "rar": "bacahúa",
    "spa": "hoja de la marzorca",
    "rarNo": "bacahua",
    "spaNo": "hoja de la marzorca",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "bacamú",
    "spa": "infectarse",
    "rarNo": "bacamu",
    "spaNo": "infectarse",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "bacarí",
    "spa": "tener enfermedad venérea",
    "rarNo": "bacari",
    "spaNo": "tener enfermedad venerea",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "bacó",
    "spa": "ponerse amarillo",
    "rarNo": "baco",
    "spaNo": "ponerse amarillo",
    "tags": []
  },
  {
    "rar": "bachochi",
    "spa": "río",
    "rarNo": "bachochi",
    "spaNo": "rio",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "bacúu",
    "spa": "palo",
    "rarNo": "bacuu",
    "spaNo": "palo",
    "tags": []
  },
  {
    "rar": "bachá",
    "spa": "primeramente - adelante - enfrente",
    "rarNo": "bacha",
    "spaNo": "primeramente - adelante - enfrente",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "bachá simí",
    "spa": "avanza ",
    "rarNo": "bacha simi",
    "spaNo": "avanza ",
    "tags": []
  },
  {
    "rar": "bacháami",
    "spa": "ante - delante - enfrente de",
    "rarNo": "bachaami",
    "spaNo": "ante - delante - enfrente de",
    "tags": [
      "preposición"
    ]
  },
  {
    "rar": "bachagochi",
    "spa": "hueso del tobillo",
    "rarNo": "bachagochi",
    "spaNo": "hueso del tobillo",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "bachahuara",
    "spa": "ir adelante",
    "rarNo": "bachahuara",
    "spaNo": "ir adelante",
    "tags": []
  },
  {
    "rar": "bachéi",
    "spa": "tener hermano mayor",
    "rarNo": "bachei",
    "spaNo": "tener hermano mayor",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "bachí",
    "spa": "hermano mayor",
    "rarNo": "bachi",
    "spaNo": "hermano mayor",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "bachí",
    "spa": "calabaza",
    "rarNo": "bachi",
    "spaNo": "calabaza",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "bachima",
    "spa": "rociar",
    "rarNo": "bachima",
    "spaNo": "rociar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ba'hue",
    "spa": "hay agua",
    "rarNo": "ba'hue",
    "spaNo": "hay agua",
    "tags": []
  },
  {
    "rar": "ba'huí",
    "spa": "aguantar",
    "rarNo": "ba'hui",
    "spaNo": "aguantar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ba'huí bají",
    "spa": "toma agua",
    "rarNo": "ba'hui baji",
    "spaNo": "toma agua",
    "tags": []
  },
  {
    "rar": "ba'huira",
    "spa": "jugo - caldo",
    "rarNo": "ba'huira",
    "spaNo": "jugo - caldo",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "baisá",
    "spa": "tercero",
    "rarNo": "baisa",
    "spaNo": "tercero",
    "tags": []
  },
  {
    "rar": "baisá macoy",
    "spa": "treinta",
    "rarNo": "baisa macoy",
    "spaNo": "treinta",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "bajácami",
    "spa": "hinchado",
    "rarNo": "bajacami",
    "spaNo": "hinchado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "baji",
    "spa": "tomar - beber",
    "rarNo": "baji",
    "spaNo": "tomar - beber",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bajíami",
    "spa": "curandero",
    "rarNo": "bajiami",
    "spaNo": "curandero",
    "tags": []
  },
  {
    "rar": "bajíbachami",
    "spa": "hinchado por desnutricion",
    "rarNo": "bajibachami",
    "spaNo": "hinchado por desnutricion",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "bajicháhuari",
    "spa": "norte",
    "rarNo": "bajichahuari",
    "spaNo": "norte",
    "tags": []
  },
  {
    "rar": "bajichi",
    "spa": "pozo",
    "rarNo": "bajichi",
    "spaNo": "pozo",
    "tags": []
  },
  {
    "rar": "bahpuhuami",
    "spa": "potable",
    "rarNo": "bahpuhuami",
    "spaNo": "potable",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "bajina",
    "spa": "hincharse",
    "rarNo": "bajina",
    "spaNo": "hincharse",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "bajuhua",
    "spa": "ir a tomar",
    "rarNo": "bajuhua",
    "spaNo": "ir a tomar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bamíbari",
    "spa": "año",
    "rarNo": "bamibari",
    "spaNo": "ano",
    "tags": []
  },
  {
    "rar": "baná",
    "spa": "mejilla",
    "rarNo": "bana",
    "spaNo": "mejilla",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "banagé",
    "spa": "lama - moho",
    "rarNo": "banage",
    "spaNo": "lama - moho",
    "tags": []
  },
  {
    "rar": "banira",
    "spa": "arrastrar - llevar jalando",
    "rarNo": "banira",
    "spaNo": "arrastrar - llevar jalando",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "baquí",
    "spa": "entrar ",
    "rarNo": "baqui",
    "spaNo": "entrar ",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bará",
    "spa": "tiempo de lluvia",
    "rarNo": "bara",
    "spaNo": "tiempo de lluvia",
    "tags": []
  },
  {
    "rar": "baquirini",
    "spa": "padrino - madrina",
    "rarNo": "baquirini",
    "spaNo": "padrino - madrina",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "baraché",
    "spa": "tener sed",
    "rarNo": "barache",
    "spaNo": "tener sed",
    "tags": []
  },
  {
    "rar": "ba'raguéchuri",
    "spa": "huérfano",
    "rarNo": "ba'raguechuri",
    "spaNo": "huerfano",
    "tags": []
  },
  {
    "rar": "baré",
    "spa": "cura",
    "rarNo": "bare",
    "spaNo": "cura",
    "tags": []
  },
  {
    "rar": "basachí",
    "spa": "coyote",
    "rarNo": "basachi",
    "spaNo": "coyote",
    "tags": []
  },
  {
    "rar": "basi",
    "spa": "taza - vaso",
    "rarNo": "basi",
    "spaNo": "taza - vaso",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "basigó",
    "spa": "lavarse la cara",
    "rarNo": "basigo",
    "spaNo": "lavarse la cara",
    "tags": []
  },
  {
    "rar": "basoná",
    "spa": "pato",
    "rarNo": "basona",
    "spaNo": "pato",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "basoná",
    "spa": "derretir",
    "rarNo": "basona",
    "spaNo": "derretir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "basori",
    "spa": "pozole",
    "rarNo": "basori",
    "spaNo": "pozole",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "basú",
    "spa": "cocer - hervir",
    "rarNo": "basu",
    "spaNo": "cocer - hervir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "batari",
    "spa": "tesguino",
    "rarNo": "batari",
    "spaNo": "tesguino",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "batú",
    "spa": "moler en metate",
    "rarNo": "batu",
    "spaNo": "moler en metate",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "batú",
    "spa": "mapache",
    "rarNo": "batu",
    "spaNo": "mapache",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "batusí",
    "spa": "masa",
    "rarNo": "batusi",
    "spaNo": "masa",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "bayé",
    "spa": "llamar",
    "rarNo": "baye",
    "spaNo": "llamar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bayeba",
    "spa": "guiar - llevar",
    "rarNo": "bayeba",
    "spaNo": "guiar - llevar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bayera",
    "spa": "invitar",
    "rarNo": "bayera",
    "spaNo": "invitar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ba'yó",
    "spa": "estar bonito",
    "rarNo": "ba'yo",
    "spaNo": "estar bonito",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ba'yoami",
    "spa": "bello - hermoso - lindo",
    "rarNo": "ba'yoami",
    "spaNo": "bello - hermoso - lindo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "bicá",
    "spa": "pudrir",
    "rarNo": "bica",
    "spaNo": "pudrir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ba'yori",
    "spa": "gustar",
    "rarNo": "ba'yori",
    "spaNo": "gustar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bicajuca",
    "spa": "oler mal",
    "rarNo": "bicajuca",
    "spaNo": "oler mal",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "bicamú",
    "spa": "salir pus",
    "rarNo": "bicamu",
    "spaNo": "salir pus",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "biché",
    "spa": "entonces",
    "rarNo": "biche",
    "spaNo": "entonces",
    "tags": []
  },
  {
    "rar": "bachihuá",
    "spa": "verdad",
    "rarNo": "bachihua",
    "spaNo": "verdad",
    "tags": []
  },
  {
    "rar": "bichíhuaga",
    "spa": "jurar- prometer",
    "rarNo": "bichihuaga",
    "spaNo": "jurar- prometer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bi'huá",
    "spa": "limpiar",
    "rarNo": "bi'hua",
    "spaNo": "limpiar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bihuárami",
    "spa": "limpiarse",
    "rarNo": "bihuarami",
    "spaNo": "limpiarse",
    "tags": []
  },
  {
    "rar": "bihuara",
    "spa": "hacer duro",
    "rarNo": "bihuara",
    "spaNo": "hacer duro",
    "tags": []
  },
  {
    "rar": "bi'líami",
    "spa": "chueco - torcido",
    "rarNo": "bi'liami",
    "spaNo": "chueco - torcido",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "bimó",
    "spa": "neblina - polvo",
    "rarNo": "bimo",
    "spaNo": "neblina - polvo",
    "tags": []
  },
  {
    "rar": "binéami",
    "spa": "estudiante",
    "rarNo": "bineami",
    "spaNo": "estudiante",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "binéami",
    "spa": "aprender - estudiar",
    "rarNo": "bineami",
    "spaNo": "aprender - estudiar",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "binériami",
    "spa": "maestro",
    "rarNo": "bineriami",
    "spaNo": "maestro",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "bi'néripi",
    "spa": "único",
    "rarNo": "bi'neripi",
    "spaNo": "unico",
    "tags": []
  },
  {
    "rar": "biní",
    "spa": "hermana menor",
    "rarNo": "bini",
    "spaNo": "hermana menor",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "binoy",
    "spa": "el - ella - el mismo",
    "rarNo": "binoy",
    "spaNo": "el - ella - el mismo",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "biquiyá",
    "spa": "tres",
    "rarNo": "biquiya",
    "spaNo": "tres",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "biré",
    "spa": "uno",
    "rarNo": "bire",
    "spaNo": "uno",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "biré ciento",
    "spa": "cien",
    "rarNo": "bire ciento",
    "spaNo": "cien",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "biréana",
    "spa": "en una sola parte",
    "rarNo": "bireana",
    "spaNo": "en una sola parte",
    "tags": []
  },
  {
    "rar": "birina",
    "spa": "pedernal",
    "rarNo": "birina",
    "spaNo": "pedernal",
    "tags": []
  },
  {
    "rar": "bi'rina",
    "spa": "torcer - exprimir",
    "rarNo": "bi'rina",
    "spaNo": "torcer - exprimir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bisiruta",
    "spa": "rasparse",
    "rarNo": "bisiruta",
    "spaNo": "rasparse",
    "tags": []
  },
  {
    "rar": "bisú",
    "spa": "despellejar",
    "rarNo": "bisu",
    "spaNo": "despellejar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bité",
    "spa": "habitar - vivir",
    "rarNo": "bite",
    "spaNo": "habitar - vivir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "¿cumi bité?",
    "spa": "¿dónde vives?",
    "rarNo": "¿cumi bite?",
    "spaNo": "¿donde vives?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "biteba",
    "spa": "pasar la noche",
    "rarNo": "biteba",
    "spaNo": "pasar la noche",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bitechi",
    "spa": "casa",
    "rarNo": "bitechi",
    "spaNo": "casa",
    "tags": []
  },
  {
    "rar": "bití",
    "spa": "estar acostados",
    "rarNo": "biti",
    "spaNo": "estar acostados",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bitichí",
    "spa": "casa - habitación",
    "rarNo": "bitichi",
    "spaNo": "casa - habitacion",
    "tags": []
  },
  {
    "rar": "bitori",
    "spa": "plato - cazuela",
    "rarNo": "bitori",
    "spaNo": "plato - cazuela",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "bi'yá",
    "spa": "temprano",
    "rarNo": "bi'ya",
    "spaNo": "temprano",
    "tags": []
  },
  {
    "rar": "bocuírachi",
    "spa": "cascada",
    "rarNo": "bocuirachi",
    "spaNo": "cascada",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "bo'na",
    "spa": "arrancar hierba",
    "rarNo": "bo'na",
    "spaNo": "arrancar hierba",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "boní",
    "spa": "hermano menor",
    "rarNo": "boni",
    "spaNo": "hermano menor",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "bonorí",
    "spa": "anzuelo",
    "rarNo": "bonori",
    "spaNo": "anzuelo",
    "tags": []
  },
  {
    "rar": "bo'obu",
    "spa": "desplumar",
    "rarNo": "bo'obu",
    "spaNo": "desplumar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "borogá",
    "spa": "amarrado",
    "rarNo": "boroga",
    "spaNo": "amarrado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "bosá",
    "spa": "llenarse comiendo",
    "rarNo": "bosa",
    "spaNo": "llenarse comiendo",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bot'a",
    "spa": "soltarse - desatarse",
    "rarNo": "bot'a",
    "spaNo": "soltarse - desatarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "botobú",
    "spa": "hundir - sumergir",
    "rarNo": "botobu",
    "spaNo": "hundir - sumergir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bucurí",
    "spa": "hace poco",
    "rarNo": "bucuri",
    "spaNo": "hace poco",
    "tags": []
  },
  {
    "rar": "buchí",
    "spa": "contener",
    "rarNo": "buchi",
    "spaNo": "contener",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ocuá litro buchí",
    "spa": "contiene dos litros",
    "rarNo": "ocua litro buchi",
    "spaNo": "contiene dos litros",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "buchíami",
    "spa": "lleno",
    "rarNo": "buchiami",
    "spaNo": "lleno",
    "tags": []
  },
  {
    "rar": "bucuríhuami",
    "spa": "nuevo - fresco",
    "rarNo": "bucurihuami",
    "spaNo": "nuevo - fresco",
    "tags": []
  },
  {
    "rar": "buhué",
    "spa": "camino",
    "rarNo": "buhue",
    "spaNo": "camino",
    "tags": []
  },
  {
    "rar": "bubuigá",
    "spa": "estar esperando",
    "rarNo": "bubuiga",
    "spaNo": "estar esperando",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "bujé",
    "spa": "cobrar - quitar algo",
    "rarNo": "buje",
    "spaNo": "cobrar - quitar algo",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "buná",
    "spa": "agacharse - inclinarse",
    "rarNo": "buna",
    "spaNo": "agacharse - inclinarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "buqúé",
    "spa": "tener - poseer (animal)",
    "rarNo": "buque",
    "spaNo": "tener - poseer (animal)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "buré",
    "spa": "amarrar",
    "rarNo": "bure",
    "spaNo": "amarrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "burito",
    "spa": "burro",
    "rarNo": "burito",
    "spaNo": "burro",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "¿cum burú?",
    "spa": "¿dónde está el camino?",
    "rarNo": "¿cum buru?",
    "spaNo": "¿donde esta el camino?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "busí",
    "spa": "ojo",
    "rarNo": "busi",
    "spaNo": "ojo",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "busugachi",
    "spa": "ciego",
    "rarNo": "busugachi",
    "spaNo": "ciego",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "busurébana",
    "spa": "despertar",
    "rarNo": "busurebana",
    "spaNo": "despertar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "buyana",
    "spa": "enfermar de viruela",
    "rarNo": "buyana",
    "spaNo": "enfermar de viruela",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "ca",
    "spa": "llevar en la mano",
    "rarNo": "ca",
    "spaNo": "llevar en la mano",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cabítana",
    "spa": "rodar - envolver",
    "rarNo": "cabitana",
    "spaNo": "rodar - envolver",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cabóchi",
    "spa": "músuclo de pierna o brazo",
    "rarNo": "cabochi",
    "spaNo": "musuclo de pierna o brazo",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "cabu",
    "spa": "¿cuándo?",
    "rarNo": "cabu",
    "spaNo": "¿cuando?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "cachagá",
    "spa": "cadera",
    "rarNo": "cachaga",
    "spaNo": "cadera",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "cachí",
    "spa": "reirse",
    "rarNo": "cachi",
    "spaNo": "reirse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cachuna",
    "spa": "arrugar",
    "rarNo": "cachuna",
    "spaNo": "arrugar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cahué",
    "spa": "caballo",
    "rarNo": "cahue",
    "spaNo": "caballo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "cahuí",
    "spa": "monte - terreno",
    "rarNo": "cahui",
    "spaNo": "monte - terreno",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "cahuíami",
    "spa": "claro - limpio (cielo)",
    "rarNo": "cahuiami",
    "spaNo": "claro - limpio (cielo)",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "cahuisori",
    "spa": "cobija",
    "rarNo": "cahuisori",
    "spaNo": "cobija",
    "tags": []
  },
  {
    "rar": "cajé",
    "spa": "café",
    "rarNo": "caje",
    "spaNo": "cafe",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "cajuina",
    "spa": "derribar",
    "rarNo": "cajuina",
    "spaNo": "derribar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ca'marota",
    "spa": "ampollarse",
    "rarNo": "ca'marota",
    "spaNo": "ampollarse",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "cameri",
    "spa": "sería bueno",
    "rarNo": "cameri",
    "spaNo": "seria bueno",
    "tags": []
  },
  {
    "rar": "cami",
    "spa": "extraordinario",
    "rarNo": "cami",
    "spaNo": "extraordinario",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ca'mocha",
    "spa": "hincharse la cara",
    "rarNo": "ca'mocha",
    "spaNo": "hincharse la cara",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "banachí ca'móchari",
    "spa": "se le hinzó la mejilla",
    "rarNo": "banachi ca'mochari",
    "spaNo": "se le hinzo la mejilla",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "campori",
    "spa": "tambor",
    "rarNo": "campori",
    "spaNo": "tambor",
    "tags": []
  },
  {
    "rar": "ca'muchí",
    "spa": "maiz para palomitas",
    "rarNo": "ca'muchi",
    "spaNo": "maiz para palomitas",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "canápuromí",
    "spa": "en muchas parte",
    "rarNo": "canapuromi",
    "spaNo": "en muchas parte",
    "tags": []
  },
  {
    "rar": "canira",
    "spa": "alegrarse",
    "rarNo": "canira",
    "spaNo": "alegrarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "caniri",
    "spa": "estar feliz - contento",
    "rarNo": "caniri",
    "spaNo": "estar feliz - contento",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "capaneri",
    "spa": "campana",
    "rarNo": "capaneri",
    "spaNo": "campana",
    "tags": []
  },
  {
    "rar": "capitani",
    "spa": "capitán",
    "rarNo": "capitani",
    "spaNo": "capitan",
    "tags": []
  },
  {
    "rar": "carí",
    "spa": "casa",
    "rarNo": "cari",
    "spaNo": "casa",
    "tags": []
  },
  {
    "rar": "capona",
    "spa": "quebrar",
    "rarNo": "capona",
    "spaNo": "quebrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cárabá",
    "spa": "por nada",
    "rarNo": "caraba",
    "spaNo": "por nada",
    "tags": []
  },
  {
    "rar": "cáraca",
    "spa": "completamente",
    "rarNo": "caraca",
    "spaNo": "completamente",
    "tags": []
  },
  {
    "rar": "caré",
    "spa": "parecerse",
    "rarNo": "care",
    "spaNo": "parecerse",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "caré",
    "spa": "amar - querer",
    "rarNo": "care",
    "spaNo": "amar - querer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "caréami",
    "spa": "amable",
    "rarNo": "careami",
    "spaNo": "amable",
    "tags": []
  },
  {
    "rar": "cari ju",
    "spa": "es todo",
    "rarNo": "cari ju",
    "spaNo": "es todo",
    "tags": []
  },
  {
    "rar": "carichí",
    "spa": "en la casa",
    "rarNo": "carichi",
    "spaNo": "en la casa",
    "tags": []
  },
  {
    "rar": "carihuérami",
    "spa": "listo - arreglado",
    "rarNo": "carihuerami",
    "spaNo": "listo - arreglado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ca'rina",
    "spa": "quebrar",
    "rarNo": "ca'rina",
    "spaNo": "quebrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ca'rígami",
    "spa": "quebrado",
    "rarNo": "ca'rigami",
    "spaNo": "quebrado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "casí",
    "spa": "pierna - muslo",
    "rarNo": "casi",
    "spaNo": "pierna - muslo",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "casibacha",
    "spa": "pantalón - calzón",
    "rarNo": "casibacha",
    "spaNo": "pantalon - calzon",
    "tags": [
      "ropa"
    ]
  },
  {
    "rar": "catehua",
    "spa": "alzar - guardar",
    "rarNo": "catehua",
    "spaNo": "alzar - guardar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cobata",
    "spa": "enchilar a otra persona",
    "rarNo": "cobata",
    "spaNo": "enchilar a otra persona",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cobisi",
    "spa": "pinole",
    "rarNo": "cobisi",
    "spaNo": "pinole",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "coché",
    "spa": "ahogarse",
    "rarNo": "coche",
    "spaNo": "ahogarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "catá",
    "spa": "arco",
    "rarNo": "cata",
    "spaNo": "arco",
    "tags": []
  },
  {
    "rar": "casuna",
    "spa": "bajar del monte",
    "rarNo": "casuna",
    "spaNo": "bajar del monte",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cochí",
    "spa": "perro",
    "rarNo": "cochi",
    "spaNo": "perro",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "cayena",
    "spa": "terminar - levantar",
    "rarNo": "cayena",
    "spaNo": "terminar - levantar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cochí",
    "spa": "hermana mayor",
    "rarNo": "cochi",
    "spaNo": "hermana mayor",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "cochí",
    "spa": "dormir",
    "rarNo": "cochi",
    "spaNo": "dormir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cochi",
    "spa": "marrano",
    "rarNo": "cochi",
    "spaNo": "marrano",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "cochinari",
    "spa": "tener sueño",
    "rarNo": "cochinari",
    "spaNo": "tener sueno",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "Echirigá ju",
    "spa": "así es",
    "rarNo": "Echiriga ju",
    "spaNo": "asi es",
    "tags": []
  },
  {
    "rar": "cóami",
    "spa": "picante",
    "rarNo": "coami",
    "spaNo": "picante",
    "tags": [
      "sabor"
    ]
  },
  {
    "rar": "cochírahua",
    "spa": "ceja",
    "rarNo": "cochirahua",
    "spaNo": "ceja",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "cohua",
    "spa": "dar de comer",
    "rarNo": "cohua",
    "spaNo": "dar de comer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "co'huá",
    "spa": "comer",
    "rarNo": "co'hua",
    "spaNo": "comer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "co'huáami",
    "spa": "alimento - comida",
    "rarNo": "co'huaami",
    "spaNo": "alimento - comida",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "co'ué",
    "spa": "comer mucho",
    "rarNo": "co'ue",
    "spaNo": "comer mucho",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "co'huí",
    "spa": "matar- asesinar",
    "rarNo": "co'hui",
    "spaNo": "matar- asesinar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "comichi",
    "spa": "arroyo",
    "rarNo": "comichi",
    "spaNo": "arroyo",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "comurachi",
    "spa": "cárcel",
    "rarNo": "comurachi",
    "spaNo": "carcel",
    "tags": []
  },
  {
    "rar": "coná",
    "spa": "tostar",
    "rarNo": "cona",
    "spaNo": "tostar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "coná",
    "spa": "sal (condimento)",
    "rarNo": "cona",
    "spaNo": "sal (condimento)",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "cónahua",
    "spa": "donar- regalar",
    "rarNo": "conahua",
    "spaNo": "donar- regalar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "co'nari",
    "spa": "tener hambre",
    "rarNo": "co'nari",
    "spaNo": "tener hambre",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cor",
    "spa": "obsequiar- regalar",
    "rarNo": "cor",
    "spaNo": "obsequiar- regalar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "conomí",
    "spa": "arcoiris",
    "rarNo": "conomi",
    "spaNo": "arcoiris",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "cóo",
    "spa": "dar de comer",
    "rarNo": "coo",
    "spaNo": "dar de comer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cora",
    "spa": "obsequiar- regalar",
    "rarNo": "cora",
    "spaNo": "obsequiar- regalar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "corá",
    "spa": "frente (cabeza)",
    "rarNo": "cora",
    "spaNo": "frente (cabeza)",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "corácami",
    "spa": "amargo",
    "rarNo": "coracami",
    "spaNo": "amargo",
    "tags": [
      "sabor"
    ]
  },
  {
    "rar": "coraca",
    "spa": "picante",
    "rarNo": "coraca",
    "spaNo": "picante",
    "tags": [
      "sabor"
    ]
  },
  {
    "rar": "corachi ",
    "spa": "cuervo",
    "rarNo": "corachi ",
    "spaNo": "cuervo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "corí",
    "spa": "chile",
    "rarNo": "cori",
    "spaNo": "chile",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "córima",
    "spa": "regalar",
    "rarNo": "corima",
    "spaNo": "regalar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "corimena",
    "spa": "miel de abeja",
    "rarNo": "corimena",
    "spaNo": "miel de abeja",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "corochi",
    "spa": "saltamontes",
    "rarNo": "corochi",
    "spaNo": "saltamontes",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "corogá",
    "spa": "collar",
    "rarNo": "coroga",
    "spaNo": "collar",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "ocorú",
    "spa": "codiciar - desear mucho",
    "rarNo": "ocoru",
    "spaNo": "codiciar - desear mucho",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "corúcami",
    "spa": "envidioso - codicioso",
    "rarNo": "corucami",
    "spaNo": "envidioso - codicioso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "cosibera",
    "spa": "banca",
    "rarNo": "cosibera",
    "spaNo": "banca",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "cotúura",
    "spa": "dar comida",
    "rarNo": "cotuura",
    "spaNo": "dar comida",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "co'yacha",
    "spa": "sombrero",
    "rarNo": "co'yacha",
    "spaNo": "sombrero",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "coyera",
    "spa": "paño para cabeza",
    "rarNo": "coyera",
    "spaNo": "pano para cabeza",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "cu",
    "spa": "otra vez",
    "rarNo": "cu",
    "spaNo": "otra vez",
    "tags": []
  },
  {
    "rar": "cu",
    "spa": "leña - madera",
    "rarNo": "cu",
    "spaNo": "lena - madera",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "cúchara",
    "spa": "hijos",
    "rarNo": "cuchara",
    "spaNo": "hijos",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "cúchuhua",
    "spa": "tener hijos",
    "rarNo": "cuchuhua",
    "spaNo": "tener hijos",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cohuana",
    "spa": "tostar",
    "rarNo": "cohuana",
    "spaNo": "tostar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cohuana",
    "spa": "al otro lado - detrás",
    "rarNo": "cohuana",
    "spaNo": "al otro lado - detras",
    "tags": []
  },
  {
    "rar": "cuhué",
    "spa": "tiempo de calor",
    "rarNo": "cuhue",
    "spaNo": "tiempo de calor",
    "tags": []
  },
  {
    "rar": "co'huira",
    "spa": "ayudar - salvar",
    "rarNo": "co'huira",
    "spaNo": "ayudar - salvar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cuira",
    "spa": "hola",
    "rarNo": "cuira",
    "spaNo": "hola",
    "tags": []
  },
  {
    "rar": "cu'lina",
    "spa": "espeso",
    "rarNo": "cu'lina",
    "spaNo": "espeso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "cu0luhua",
    "spa": "derramar - tirar (líquido)",
    "rarNo": "cu0luhua",
    "spaNo": "derramar - tirar (liquido)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cumé",
    "spa": "estorbar - molestar",
    "rarNo": "cume",
    "spaNo": "estorbar - molestar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cumí",
    "spa": "comer",
    "rarNo": "cumi",
    "spaNo": "comer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cumi",
    "spa": "¿Dónde? - ¿A dónde?",
    "rarNo": "cumi",
    "spaNo": "¿Donde? - ¿A donde?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "cumi simí",
    "spa": "¿A dónde vas?",
    "rarNo": "cumi simi",
    "spaNo": "¿A donde vas?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "cumúchari",
    "spa": "tío (hermano mayor del padre)",
    "rarNo": "cumuchari",
    "spaNo": "tio (hermano mayor del padre)",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "cumurachi",
    "spa": "casa de la comunidad",
    "rarNo": "cumurachi",
    "spaNo": "casa de la comunidad",
    "tags": []
  },
  {
    "rar": "cuná",
    "spa": "marido - esposo",
    "rarNo": "cuna",
    "spaNo": "marido - esposo",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "cunama",
    "spa": "enviudar",
    "rarNo": "cunama",
    "spaNo": "enviudar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cunámami",
    "spa": "viuda",
    "rarNo": "cunamami",
    "spaNo": "viuda",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "cusí",
    "spa": "palo",
    "rarNo": "cusi",
    "spaNo": "palo",
    "tags": []
  },
  {
    "rar": "cupá",
    "spa": "cabello",
    "rarNo": "cupa",
    "spaNo": "cabello",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "cupí",
    "spa": "cerrar los ojos",
    "rarNo": "cupi",
    "spaNo": "cerrar los ojos",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cupisi",
    "spa": "luciérnaga",
    "rarNo": "cupisi",
    "spaNo": "luciernaga",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "cupucha",
    "spa": "pestañear",
    "rarNo": "cupucha",
    "spaNo": "pestanear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cusibera",
    "spa": "banca",
    "rarNo": "cusibera",
    "spaNo": "banca",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "cusuchí",
    "spa": "nalga",
    "rarNo": "cusuchi",
    "spaNo": "nalga",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "cutá",
    "spa": "cuello - garganta",
    "rarNo": "cuta",
    "spaNo": "cuello - garganta",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "cutámachi",
    "spa": "nuca",
    "rarNo": "cutamachi",
    "spaNo": "nuca",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "curipi",
    "spa": "hace poco",
    "rarNo": "curipi",
    "spaNo": "hace poco",
    "tags": []
  },
  {
    "rar": "curichi",
    "spa": "tío (hermano mayor de la madre)",
    "rarNo": "curichi",
    "spaNo": "tio (hermano mayor de la madre)",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "cursi",
    "spa": "cruz",
    "rarNo": "cursi",
    "spaNo": "cruz",
    "tags": []
  },
  {
    "rar": "cúruhui",
    "spa": "niños - muchachos",
    "rarNo": "curuhui",
    "spaNo": "ninos - muchachos",
    "tags": []
  },
  {
    "rar": "cuseba",
    "spa": "colgarse - ahogarse",
    "rarNo": "cuseba",
    "spaNo": "colgarse - ahogarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cusébana",
    "spa": "ahorcar - estrangular",
    "rarNo": "cusebana",
    "spaNo": "ahorcar - estrangular",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cusera",
    "spa": "flauta",
    "rarNo": "cusera",
    "spaNo": "flauta",
    "tags": []
  },
  {
    "rar": "chá",
    "spa": "feo",
    "rarNo": "cha",
    "spaNo": "feo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chá",
    "spa": "tener granos o llagas",
    "rarNo": "cha",
    "spaNo": "tener granos o llagas",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "chabé",
    "spa": "antes - hace poco - el otro día",
    "rarNo": "chabe",
    "spaNo": "antes - hace poco - el otro dia",
    "tags": []
  },
  {
    "rar": "chabé choquichí",
    "spa": "al principio",
    "rarNo": "chabe choquichi",
    "spaNo": "al principio",
    "tags": []
  },
  {
    "rar": "chabóa",
    "spa": "barba - bigote",
    "rarNo": "chaboa",
    "spaNo": "barba - bigote",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "chabochi",
    "spa": "mestizo",
    "rarNo": "chabochi",
    "spaNo": "mestizo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chacá",
    "spa": "chanate",
    "rarNo": "chaca",
    "spaNo": "chanate",
    "tags": []
  },
  {
    "rar": "cha'i",
    "spa": "apretarse - atorarse",
    "rarNo": "cha'i",
    "spaNo": "apretarse - atorarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chamarí",
    "spa": "venado",
    "rarNo": "chamari",
    "spaNo": "venado",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "cha'merohua",
    "spa": "lengua",
    "rarNo": "cha'merohua",
    "spaNo": "lengua",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "chané",
    "spa": "sonar mal",
    "rarNo": "chane",
    "spaNo": "sonar mal",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chapí",
    "spa": "agarrar",
    "rarNo": "chapi",
    "spaNo": "agarrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chaquena",
    "spa": "a un lado",
    "rarNo": "chaquena",
    "spaNo": "a un lado",
    "tags": []
  },
  {
    "rar": "charóara",
    "spa": "quijada",
    "rarNo": "charoara",
    "spaNo": "quijada",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "charóarahua",
    "spa": "barba - bigote",
    "rarNo": "charoarahua",
    "spaNo": "barba - bigote",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "chati",
    "spa": "feo - mal",
    "rarNo": "chati",
    "spaNo": "feo - mal",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chérami",
    "spa": "vieja (cosa)",
    "rarNo": "cherami",
    "spaNo": "vieja (cosa)",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chí",
    "spa": "me",
    "rarNo": "chi",
    "spaNo": "me",
    "tags": []
  },
  {
    "rar": "chibá",
    "spa": "chiva",
    "rarNo": "chiba",
    "spaNo": "chiva",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "chibi",
    "spa": "mal",
    "rarNo": "chibi",
    "spaNo": "mal",
    "tags": []
  },
  {
    "rar": "chicónami",
    "spa": "hueco",
    "rarNo": "chiconami",
    "spaNo": "hueco",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chicuri",
    "spa": "ratón",
    "rarNo": "chicuri",
    "spaNo": "raton",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "chi'eé",
    "spa": "cuñado - cuñada",
    "rarNo": "chi'ee",
    "spaNo": "cunado - cunada",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "chigá",
    "spa": "¿quién?",
    "rarNo": "chiga",
    "spaNo": "¿quien?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chigó",
    "spa": "robar",
    "rarNo": "chigo",
    "spaNo": "robar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chigórami",
    "spa": "ladrón",
    "rarNo": "chigorami",
    "spaNo": "ladron",
    "tags": []
  },
  {
    "rar": "chihuá",
    "spa": "pegar",
    "rarNo": "chihua",
    "spaNo": "pegar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chi'hua",
    "spa": "romperse - cortarse",
    "rarNo": "chi'hua",
    "spaNo": "romperse - cortarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chi'huana",
    "spa": "romper - cortar",
    "rarNo": "chi'huana",
    "spaNo": "romper - cortar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chihuí",
    "spa": "guajolote",
    "rarNo": "chihui",
    "spaNo": "guajolote",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "chi'í",
    "spa": "tomar pecho",
    "rarNo": "chi'i",
    "spaNo": "tomar pecho",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chijisó",
    "spa": "picar",
    "rarNo": "chijiso",
    "spaNo": "picar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chijuna",
    "spa": "dar asco - menospreciar",
    "rarNo": "chijuna",
    "spaNo": "dar asco - menospreciar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chimorí",
    "spa": "ardilla",
    "rarNo": "chimori",
    "spaNo": "ardilla",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "chi'múcari",
    "spa": "calabacita",
    "rarNo": "chi'mucari",
    "spaNo": "calabacita",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "chi'mura",
    "spa": "seno",
    "rarNo": "chi'mura",
    "spaNo": "seno",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "chiná",
    "spa": "despeinado",
    "rarNo": "china",
    "spaNo": "despeinado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chinasa",
    "spa": "esconder",
    "rarNo": "chinasa",
    "spaNo": "esconder",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chiní",
    "spa": "manta - ropa",
    "rarNo": "chini",
    "spaNo": "manta - ropa",
    "tags": []
  },
  {
    "rar": "chiquí",
    "spa": "camote",
    "rarNo": "chiqui",
    "spaNo": "camote",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "chipú",
    "spa": "estar amargo",
    "rarNo": "chipu",
    "spaNo": "estar amargo",
    "tags": [
      "sabor"
    ]
  },
  {
    "rar": "chipó",
    "spa": "palpitar",
    "rarNo": "chipo",
    "spaNo": "palpitar",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "chipó",
    "spa": "salpicar - brincar",
    "rarNo": "chipo",
    "spaNo": "salpicar - brincar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chi'rá",
    "spa": "amanecer",
    "rarNo": "chi'ra",
    "spaNo": "amanecer",
    "tags": []
  },
  {
    "rar": "chi'ré",
    "spa": "importar",
    "rarNo": "chi're",
    "spaNo": "importar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "¿chu chiré",
    "spa": "¿Qué importa?",
    "rarNo": "¿chu chire",
    "spaNo": "¿Que importa?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "que chireco",
    "spa": "no importa",
    "rarNo": "que chireco",
    "spaNo": "no importa",
    "tags": []
  },
  {
    "rar": "chi'reba",
    "spa": "pasar la noche",
    "rarNo": "chi'reba",
    "spaNo": "pasar la noche",
    "tags": []
  },
  {
    "rar": "chi'ré",
    "spa": "pasar un tiempo",
    "rarNo": "chi're",
    "spaNo": "pasar un tiempo",
    "tags": []
  },
  {
    "rar": "chirena",
    "spa": "sudar",
    "rarNo": "chirena",
    "spaNo": "sudar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chirí",
    "spa": "queja",
    "rarNo": "chiri",
    "spaNo": "queja",
    "tags": []
  },
  {
    "rar": "chirigá",
    "spa": "de ninguna manera",
    "rarNo": "chiriga",
    "spaNo": "de ninguna manera",
    "tags": []
  },
  {
    "rar": "chirihuperaba",
    "spa": "no hay de que - de nada",
    "rarNo": "chirihuperaba",
    "spaNo": "no hay de que - de nada",
    "tags": []
  },
  {
    "rar": "chi'ró",
    "spa": "aletear",
    "rarNo": "chi'ro",
    "spaNo": "aletear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chirúrami",
    "spa": "círculos",
    "rarNo": "chirurami",
    "spaNo": "circulos",
    "tags": []
  },
  {
    "rar": "chócami",
    "spa": "negro",
    "rarNo": "chocami",
    "spaNo": "negro",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "chocó",
    "spa": "estar agrio",
    "rarNo": "choco",
    "spaNo": "estar agrio",
    "tags": [
      "sabor"
    ]
  },
  {
    "rar": "choba",
    "spa": "quemarse por el sol",
    "rarNo": "choba",
    "spaNo": "quemarse por el sol",
    "tags": []
  },
  {
    "rar": "chocoba",
    "spa": "rodilla -hincarse - ponerse de rodillas",
    "rarNo": "chocoba",
    "spaNo": "rodilla -hincarse - ponerse de rodillas",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "chocoóbara",
    "spa": "madrastra",
    "rarNo": "chocoobara",
    "spaNo": "madrastra",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "chochora",
    "spa": "entumirse (pie o brazo)",
    "rarNo": "chochora",
    "spaNo": "entumirse (pie o brazo)",
    "tags": [
      "verbo",
      "medicina"
    ]
  },
  {
    "rar": "cho'huá",
    "spa": "apagar fuego",
    "rarNo": "cho'hua",
    "spaNo": "apagar fuego",
    "tags": []
  },
  {
    "rar": "cho'má",
    "spa": "resfriarse - moco",
    "rarNo": "cho'ma",
    "spaNo": "resfriarse - moco",
    "tags": [
      "verbo",
      "medicina"
    ]
  },
  {
    "rar": "cho'méami",
    "spa": "mocoso",
    "rarNo": "cho'meami",
    "spaNo": "mocoso",
    "tags": [
      "adjetivo",
      "medicino"
    ]
  },
  {
    "rar": "chomá",
    "spa": "nariz",
    "rarNo": "choma",
    "spaNo": "nariz",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "cho'mabú",
    "spa": "limpiarse la nariz",
    "rarNo": "cho'mabu",
    "spaNo": "limpiarse la nariz",
    "tags": []
  },
  {
    "rar": "cho'márachi",
    "spa": "hoyo de la nariz",
    "rarNo": "cho'marachi",
    "spaNo": "hoyo de la nariz",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "cho'ná",
    "spa": "golpear - pegar",
    "rarNo": "cho'na",
    "spaNo": "golpear - pegar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cho'maná",
    "spa": "tener tos - catarro",
    "rarNo": "cho'mana",
    "spaNo": "tener tos - catarro",
    "tags": [
      "verbo",
      "medicina"
    ]
  },
  {
    "rar": "chonachona",
    "spa": "obscurecer",
    "rarNo": "chonachona",
    "spaNo": "obscurecer",
    "tags": []
  },
  {
    "rar": "chónami",
    "spa": "sucio",
    "rarNo": "chonami",
    "spaNo": "sucio",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "cho'ó",
    "spa": "hocico",
    "rarNo": "cho'o",
    "spaNo": "hocico",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "cho'obáchari",
    "spa": "máscara",
    "rarNo": "cho'obachari",
    "spaNo": "mascara",
    "tags": []
  },
  {
    "rar": "chopé",
    "spa": "ocote",
    "rarNo": "chope",
    "spaNo": "ocote",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "chopi",
    "spa": "solamente - pero - sino",
    "rarNo": "chopi",
    "spaNo": "solamente - pero - sino",
    "tags": []
  },
  {
    "rar": "chu iquí",
    "spa": "¿Qué pasa?",
    "rarNo": "chu iqui",
    "spaNo": "¿Que pasa?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chu quipu",
    "spa": "¿Cuánto? - ¿Qué cantidad?",
    "rarNo": "chu quipu",
    "spaNo": "¿Cuanto? - ¿Que cantidad?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chu yena",
    "spa": "¿a qué hora?",
    "rarNo": "chu yena",
    "spaNo": "¿a que hora?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chu mi iquiri",
    "spa": "¿qué te parece?",
    "rarNo": "chu mi iquiri",
    "spaNo": "¿que te parece?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chu yiri",
    "spa": "¿Qué color?- ¿cuál?",
    "rarNo": "chu yiri",
    "spaNo": "¿Que color?- ¿cual?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "choquéami",
    "spa": "veces",
    "rarNo": "choqueami",
    "spaNo": "veces",
    "tags": []
  },
  {
    "rar": "choquira",
    "spa": "culpable",
    "rarNo": "choquira",
    "spaNo": "culpable",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "choquira",
    "spa": "prinicipio",
    "rarNo": "choquira",
    "spaNo": "prinicipio",
    "tags": []
  },
  {
    "rar": "chóruhua",
    "spa": "mugre - suciedad",
    "rarNo": "choruhua",
    "spaNo": "mugre - suciedad",
    "tags": []
  },
  {
    "rar": "chorohuera",
    "spa": "ensuciarse",
    "rarNo": "chorohuera",
    "spaNo": "ensuciarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "choyá",
    "spa": "encogerse",
    "rarNo": "choya",
    "spaNo": "encogerse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "choquira ju",
    "spa": "tiene la culpa",
    "rarNo": "choquira ju",
    "spaNo": "tiene la culpa",
    "tags": []
  },
  {
    "rar": "choró",
    "spa": "estar pegajoso",
    "rarNo": "choro",
    "spaNo": "estar pegajoso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chúbirigá",
    "spa": "de alguna manera",
    "rarNo": "chubiriga",
    "spaNo": "de alguna manera",
    "tags": []
  },
  {
    "rar": "chuché",
    "spa": "¿qué?",
    "rarNo": "chuche",
    "spaNo": "¿que?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chuhué",
    "spa": "como quiera",
    "rarNo": "chuhue",
    "spaNo": "como quiera",
    "tags": []
  },
  {
    "rar": "chuhué biré",
    "spa": "cualquier",
    "rarNo": "chuhue bire",
    "spaNo": "cualquier",
    "tags": []
  },
  {
    "rar": "chu'huechi",
    "spa": "panteón - tumba",
    "rarNo": "chu'huechi",
    "spaNo": "panteon - tumba",
    "tags": []
  },
  {
    "rar": "chu'huí",
    "spa": "espiritú - fantasma",
    "rarNo": "chu'hui",
    "spaNo": "espiritu - fantasma",
    "tags": []
  },
  {
    "rar": "chu' huiró",
    "spa": "sepultar - enterrar",
    "rarNo": "chu' huiro",
    "spaNo": "sepultar - enterrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chumarí",
    "spa": "venado",
    "rarNo": "chumari",
    "spaNo": "venado",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "chuná",
    "spa": "higuera",
    "rarNo": "chuna",
    "spaNo": "higuera",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "chuná racara",
    "spa": "higos",
    "rarNo": "chuna racara",
    "spaNo": "higos",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "chupará",
    "spa": "sacar punta",
    "rarNo": "chupara",
    "spaNo": "sacar punta",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "chupéami",
    "spa": "agudo - puntiagudo",
    "rarNo": "chupeami",
    "spaNo": "agudo - puntiagudo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "churi",
    "spa": "perrito",
    "rarNo": "churi",
    "spaNo": "perrito",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "churicó",
    "spa": "¿Cuándo? ¿qué día?",
    "rarNo": "churico",
    "spaNo": "¿Cuando? ¿que dia?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "churigá",
    "spa": "¿cómo? ¿de que manera?",
    "rarNo": "churiga",
    "spaNo": "¿como? ¿de que manera?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "churigá mi mayé",
    "spa": "¿qué te parece?",
    "rarNo": "churiga mi maye",
    "spaNo": "¿que te parece?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "churipí",
    "spa": "pollito",
    "rarNo": "churipi",
    "spaNo": "pollito",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "churubi rahué",
    "spa": "todos los días",
    "rarNo": "churubi rahue",
    "spaNo": "todos los dias",
    "tags": []
  },
  {
    "rar": "churuguí",
    "spa": "pájaro",
    "rarNo": "churugui",
    "spaNo": "pajaro",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "chuseá",
    "spa": "¿por qué?",
    "rarNo": "chusea",
    "spaNo": "¿por que?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chuyiripi",
    "spa": "cualquiera",
    "rarNo": "chuyiripi",
    "spaNo": "cualquiera",
    "tags": []
  },
  {
    "rar": "echaní",
    "spa": "así dice - eso dice",
    "rarNo": "echani",
    "spaNo": "asi dice - eso dice",
    "tags": []
  },
  {
    "rar": "echarí",
    "spa": "entonces - más allá",
    "rarNo": "echari",
    "spaNo": "entonces - mas alla",
    "tags": []
  },
  {
    "rar": "echi",
    "spa": "ése - ésa - aquel",
    "rarNo": "echi",
    "spaNo": "ese - esa - aquel",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "echi jaré",
    "spa": "esos - esas",
    "rarNo": "echi jare",
    "spaNo": "esos - esas",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "echijiti",
    "spa": "por causa de - por lo tanto",
    "rarNo": "echijiti",
    "spaNo": "por causa de - por lo tanto",
    "tags": []
  },
  {
    "rar": "echimí",
    "spa": "aquel - aquella",
    "rarNo": "echimi",
    "spaNo": "aquel - aquella",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "echiquí",
    "spa": "esa cantidad",
    "rarNo": "echiqui",
    "spaNo": "esa cantidad",
    "tags": []
  },
  {
    "rar": "echo'ná inaro",
    "spa": "allá viene",
    "rarNo": "echo'na inaro",
    "spaNo": "alla viene",
    "tags": []
  },
  {
    "rar": "garabé",
    "spa": "muy bien - muy bueno - perfecto",
    "rarNo": "garabe",
    "spaNo": "muy bien - muy bueno - perfecto",
    "tags": []
  },
  {
    "rar": "garana",
    "spa": "mejorarse - convertirse",
    "rarNo": "garana",
    "spaNo": "mejorarse - convertirse",
    "tags": []
  },
  {
    "rar": "garani machí",
    "spa": "estoy seguro",
    "rarNo": "garani machi",
    "spaNo": "estoy seguro",
    "tags": []
  },
  {
    "rar": "garara",
    "spa": "componer - mejorar",
    "rarNo": "garara",
    "spaNo": "componer - mejorar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "garé",
    "spa": "amar - querer",
    "rarNo": "gare",
    "spaNo": "amar - querer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "hua",
    "spa": "flecha",
    "rarNo": "hua",
    "spaNo": "flecha",
    "tags": []
  },
  {
    "rar": "hua",
    "spa": "madurarse (fruta o verdura)",
    "rarNo": "hua",
    "spaNo": "madurarse (fruta o verdura)",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "huabé",
    "spa": "muchísimo",
    "rarNo": "huabe",
    "spaNo": "muchisimo",
    "tags": []
  },
  {
    "rar": "gará",
    "spa": "bueno",
    "rarNo": "gara",
    "spaNo": "bueno",
    "tags": []
  },
  {
    "rar": "gará aní",
    "spa": "ponerse de acuerdo",
    "rarNo": "gara ani",
    "spaNo": "ponerse de acuerdo",
    "tags": []
  },
  {
    "rar": "huacasí",
    "spa": "vaca - res",
    "rarNo": "huacasi",
    "spaNo": "vaca - res",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "huacocha",
    "spa": "estar chueco o encorvado",
    "rarNo": "huacocha",
    "spaNo": "estar chueco o encorvado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "hua'ché",
    "spa": "atiestarse de frío",
    "rarNo": "hua'che",
    "spaNo": "atiestarse de frio",
    "tags": []
  },
  {
    "rar": "huachíami",
    "spa": "derecho - recto",
    "rarNo": "huachiami",
    "spaNo": "derecho - recto",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "huachica",
    "spa": "costilla",
    "rarNo": "huachica",
    "spaNo": "costilla",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "huajó",
    "spa": "zancudo",
    "rarNo": "huajo",
    "spaNo": "zancudo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "hua'ícari",
    "spa": "esófago",
    "rarNo": "hua'icari",
    "spaNo": "esofago",
    "tags": [
      "parte del cuerpo",
      "medicina"
    ]
  },
  {
    "rar": "huaminá",
    "spa": "por allá",
    "rarNo": "huamina",
    "spaNo": "por alla",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "huaminá arihué",
    "spa": "abandonar",
    "rarNo": "huamina arihue",
    "spaNo": "abandonar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huaminá 'masa",
    "spa": "escaparse",
    "rarNo": "huamina 'masa",
    "spaNo": "escaparse",
    "tags": []
  },
  {
    "rar": "huaminá pa",
    "spa": "arrojar",
    "rarNo": "huamina pa",
    "spaNo": "arrojar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huaminabi",
    "spa": "mucho más",
    "rarNo": "huaminabi",
    "spaNo": "mucho mas",
    "tags": []
  },
  {
    "rar": "huaminana",
    "spa": "después - más adelante",
    "rarNo": "huaminana",
    "spaNo": "despues - mas adelante",
    "tags": []
  },
  {
    "rar": "huaná",
    "spa": "lejos",
    "rarNo": "huana",
    "spaNo": "lejos",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "huanihuí",
    "spa": "apartarse",
    "rarNo": "huanihui",
    "spaNo": "apartarse",
    "tags": []
  },
  {
    "rar": "huanihuí",
    "spa": "pasado mañana",
    "rarNo": "huanihui",
    "spaNo": "pasado manana",
    "tags": []
  },
  {
    "rar": "huanihuí rocogó",
    "spa": "anteanoche",
    "rarNo": "huanihui rocogo",
    "spaNo": "anteanoche",
    "tags": []
  },
  {
    "rar": "huaqué",
    "spa": "secar",
    "rarNo": "huaque",
    "spaNo": "secar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huaquiché",
    "spa": "secarse",
    "rarNo": "huaquiche",
    "spaNo": "secarse",
    "tags": []
  },
  {
    "rar": "huaquichéami",
    "spa": "seco",
    "rarNo": "huaquicheami",
    "spaNo": "seco",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "quiná",
    "spa": "acá - por acá",
    "rarNo": "quina",
    "spaNo": "aca - por aca",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "huamí",
    "spa": "allá - más",
    "rarNo": "huami",
    "spaNo": "alla - mas",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "huaré",
    "spa": "quizás - tal vez",
    "rarNo": "huare",
    "spaNo": "quizas - tal vez",
    "tags": []
  },
  {
    "rar": "huarina",
    "spa": "veloz",
    "rarNo": "huarina",
    "spaNo": "veloz",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "huarú",
    "spa": "grande - mucho",
    "rarNo": "huaru",
    "spaNo": "grande - mucho",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "huarú ba' huechi",
    "spa": "mar",
    "rarNo": "huaru ba' huechi",
    "spaNo": "mar",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "huarubé",
    "spa": "enorme - gigante - inmenso",
    "rarNo": "huarube",
    "spaNo": "enorme - gigante - inmenso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "huarúrachi",
    "spa": "ciudad",
    "rarNo": "huarurachi",
    "spaNo": "ciudad",
    "tags": []
  },
  {
    "rar": "huasa",
    "spa": "cocinar",
    "rarNo": "huasa",
    "spaNo": "cocinar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huasarara",
    "spa": "azadón",
    "rarNo": "huasarara",
    "spaNo": "azadon",
    "tags": []
  },
  {
    "rar": "huasí",
    "spa": "cola",
    "rarNo": "huasi",
    "spaNo": "cola",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "huasí",
    "spa": "suegra",
    "rarNo": "huasi",
    "spaNo": "suegra",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "huasoná",
    "spa": "pato",
    "rarNo": "huasona",
    "spaNo": "pato",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "huataca",
    "spa": "estar fuerte",
    "rarNo": "huataca",
    "spaNo": "estar fuerte",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huatácammi",
    "spa": "fuerte",
    "rarNo": "huatacammi",
    "spaNo": "fuerte",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "huató",
    "spa": "estirarse",
    "rarNo": "huato",
    "spaNo": "estirarse",
    "tags": []
  },
  {
    "rar": "huatoná",
    "spa": "estirarse",
    "rarNo": "huatona",
    "spaNo": "estirarse",
    "tags": []
  },
  {
    "rar": "huatónari",
    "spa": "atole - pinole",
    "rarNo": "huatonari",
    "spaNo": "atole - pinole",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "huayé",
    "spa": "hermana menor",
    "rarNo": "huaye",
    "spaNo": "hermana menor",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "hie",
    "spa": "muy - mucho",
    "rarNo": "hie",
    "spaNo": "muy - mucho",
    "tags": []
  },
  {
    "rar": "huabé",
    "spa": "muchísimo",
    "rarNo": "huabe",
    "spaNo": "muchisimo",
    "tags": []
  },
  {
    "rar": "huenumí",
    "spa": "dinero",
    "rarNo": "huenumi",
    "spaNo": "dinero",
    "tags": []
  },
  {
    "rar": "huenomí rojuácami",
    "spa": "cambio (dinero)",
    "rarNo": "huenomi rojuacami",
    "spaNo": "cambio (dinero)",
    "tags": []
  },
  {
    "rar": "huepi",
    "spa": "solamente - nada más",
    "rarNo": "huepi",
    "spaNo": "solamente - nada mas",
    "tags": []
  },
  {
    "rar": "huera ",
    "spa": "criar",
    "rarNo": "huera ",
    "spaNo": "criar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huisa",
    "spa": "agarrar - arrebatar",
    "rarNo": "huisa",
    "spaNo": "agarrar - arrebatar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": " huihuachi",
    "spa": "la pizca",
    "rarNo": " huihuachi",
    "spaNo": "la pizca",
    "tags": []
  },
  {
    "rar": "huiba",
    "spa": "bañarse",
    "rarNo": "huiba",
    "spaNo": "banarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huicá",
    "spa": "mucho más",
    "rarNo": "huica",
    "spaNo": "mucho mas",
    "tags": []
  },
  {
    "rar": "huicabé",
    "spa": "muchísimos",
    "rarNo": "huicabe",
    "spaNo": "muchisimos",
    "tags": []
  },
  {
    "rar": "huicahua",
    "spa": "perdonar",
    "rarNo": "huicahua",
    "spaNo": "perdonar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huicáhuaraba",
    "spa": "de nada - por nada",
    "rarNo": "huicahuaraba",
    "spaNo": "de nada - por nada",
    "tags": []
  },
  {
    "rar": "huicáhuari",
    "spa": "perdón",
    "rarNo": "huicahuari",
    "spaNo": "perdon",
    "tags": []
  },
  {
    "rar": "huicaná",
    "spa": "en muchas partes",
    "rarNo": "huicana",
    "spaNo": "en muchas partes",
    "tags": []
  },
  {
    "rar": "huicari",
    "spa": "olvidarse",
    "rarNo": "huicari",
    "spaNo": "olvidarse",
    "tags": []
  },
  {
    "rar": "huicará",
    "spa": "cantar",
    "rarNo": "huicara",
    "spaNo": "cantar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huicó",
    "spa": "abejorro",
    "rarNo": "huico",
    "spaNo": "abejorro",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "huicohuí",
    "spa": "hongo",
    "rarNo": "huicohui",
    "spaNo": "hongo",
    "tags": []
  },
  {
    "rar": "huicheami",
    "spa": "piojoso",
    "rarNo": "huicheami",
    "spaNo": "piojoso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "huichí",
    "spa": "piel - cuero",
    "rarNo": "huichi",
    "spaNo": "piel - cuero",
    "tags": []
  },
  {
    "rar": "huicuhui",
    "spa": "chiflar",
    "rarNo": "huicuhui",
    "spaNo": "chiflar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huichá",
    "spa": "aguja",
    "rarNo": "huicha",
    "spaNo": "aguja",
    "tags": []
  },
  {
    "rar": "simabo",
    "spa": "vamos a pie",
    "rarNo": "simabo",
    "spaNo": "vamos a pie",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "huichí",
    "spa": "suelo",
    "rarNo": "huichi",
    "spaNo": "suelo",
    "tags": []
  },
  {
    "rar": "huichí",
    "spa": "caerse",
    "rarNo": "huichi",
    "spaNo": "caerse",
    "tags": []
  },
  {
    "rar": "huichiba",
    "spa": "caerse",
    "rarNo": "huichiba",
    "spaNo": "caerse",
    "tags": []
  },
  {
    "rar": "huichibebcha",
    "spa": "rasparse",
    "rarNo": "huichibebcha",
    "spaNo": "rasparse",
    "tags": [
      "verbo",
      "medicina"
    ]
  },
  {
    "rar": "huichimoba",
    "spa": "mundo",
    "rarNo": "huichimoba",
    "spaNo": "mundo",
    "tags": []
  },
  {
    "rar": "huichó",
    "spa": "lavar ropa",
    "rarNo": "huicho",
    "spaNo": "lavar ropa",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huichorí",
    "spa": "barro",
    "rarNo": "huichori",
    "spaNo": "barro",
    "tags": []
  },
  {
    "rar": "huigáami",
    "spa": "perdido",
    "rarNo": "huigaami",
    "spaNo": "perdido",
    "tags": []
  },
  {
    "rar": "huíi",
    "spa": "lazar - amarrar (un animal)",
    "rarNo": "huii",
    "spaNo": "lazar - amarrar (un animal)",
    "tags": []
  },
  {
    "rar": "hui'í",
    "spa": "manteca",
    "rarNo": "hui'i",
    "spaNo": "manteca",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "huijáhua",
    "spa": "colgar",
    "rarNo": "huijahua",
    "spaNo": "colgar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huiqué",
    "spa": "deber",
    "rarNo": "huique",
    "spaNo": "deber",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huiquiá",
    "spa": "extraviarse - perderse",
    "rarNo": "huiquia",
    "spaNo": "extraviarse - perderse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "hui'rá",
    "spa": "arete",
    "rarNo": "hui'ra",
    "spaNo": "arete",
    "tags": []
  },
  {
    "rar": "huiputa",
    "spa": "tener demasiada hambre o sed",
    "rarNo": "huiputa",
    "spaNo": "tener demasiada hambre o sed",
    "tags": []
  },
  {
    "rar": "huiquiyá muhué",
    "spa": "multiplicar",
    "rarNo": "huiquiya muhue",
    "spaNo": "multiplicar",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "huirá",
    "spa": "parar",
    "rarNo": "huira",
    "spaNo": "parar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huiráami",
    "spa": "vieja - anciana",
    "rarNo": "huiraami",
    "spaNo": "vieja - anciana",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "huiraba",
    "spa": "detener",
    "rarNo": "huiraba",
    "spaNo": "detener",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "hui'ré",
    "spa": "ancho",
    "rarNo": "hui're",
    "spaNo": "ancho",
    "tags": [
      "adje"
    ]
  },
  {
    "rar": "hui'rí",
    "spa": "estar largo",
    "rarNo": "hui'ri",
    "spaNo": "estar largo",
    "tags": []
  },
  {
    "rar": "hui'ribé ",
    "spa": "muy extenso",
    "rarNo": "hui'ribe ",
    "spaNo": "muy extenso",
    "tags": []
  },
  {
    "rar": "huiriba",
    "spa": "pararse",
    "rarNo": "huiriba",
    "spaNo": "pararse",
    "tags": []
  },
  {
    "rar": "huiríbari",
    "spa": "empezar a llover",
    "rarNo": "huiribari",
    "spaNo": "empezar a llover",
    "tags": []
  },
  {
    "rar": "huiribeco",
    "spa": "después",
    "rarNo": "huiribeco",
    "spaNo": "despues",
    "tags": []
  },
  {
    "rar": "hui'rique",
    "spa": "mucho despé",
    "rarNo": "hui'rique",
    "spaNo": "mucho despe",
    "tags": []
  },
  {
    "rar": "hiuirihuirira",
    "spa": "andar (haciendo algo)",
    "rarNo": "hiuirihuirira",
    "spaNo": "andar (haciendo algo)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huirisa",
    "spa": "levantarse",
    "rarNo": "huirisa",
    "spaNo": "levantarse",
    "tags": []
  },
  {
    "rar": "huisiburi",
    "spa": "paño - trapo",
    "rarNo": "huisiburi",
    "spaNo": "pano - trapo",
    "tags": []
  },
  {
    "rar": "huisogá",
    "spa": "lodo - zoquete",
    "rarNo": "huisoga",
    "spaNo": "lodo - zoquete",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "huisú",
    "spa": "ordeñar",
    "rarNo": "huisu",
    "spaNo": "ordenar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "huiya",
    "spa": "mecate",
    "rarNo": "huiya",
    "spaNo": "mecate",
    "tags": []
  },
  {
    "rar": "huiyé",
    "spa": "madre",
    "rarNo": "huiye",
    "spaNo": "madre",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "hui'ye",
    "spa": "tierra - barro",
    "rarNo": "hui'ye",
    "spaNo": "tierra - barro",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "ibiri - ibíripi",
    "spa": "cada uno - unos a otros",
    "rarNo": "ibiri - ibiripi",
    "spaNo": "cada uno - unos a otros",
    "tags": []
  },
  {
    "rar": "ibócari",
    "spa": "chile (colorado - grande - seco)",
    "rarNo": "ibocari",
    "spaNo": "chile (colorado - grande - seco)",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "icá",
    "spa": "hacer aire",
    "rarNo": "ica",
    "spaNo": "hacer aire",
    "tags": []
  },
  {
    "rar": "icárata",
    "spa": "abanicar",
    "rarNo": "icarata",
    "spaNo": "abanicar",
    "tags": []
  },
  {
    "rar": "icosa",
    "spa": "quemarse por el sol",
    "rarNo": "icosa",
    "spaNo": "quemarse por el sol",
    "tags": []
  },
  {
    "rar": "ichá",
    "spa": "sembrar",
    "rarNo": "icha",
    "spaNo": "sembrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "icháami",
    "spa": "sembrador",
    "rarNo": "ichaami",
    "spaNo": "sembrador",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "iché",
    "spa": "picar - inyectar",
    "rarNo": "iche",
    "spaNo": "picar - inyectar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ichipa",
    "spa": "esconderse",
    "rarNo": "ichipa",
    "spaNo": "esconderse",
    "tags": []
  },
  {
    "rar": "ichuromí",
    "spa": "todo el cuerpo",
    "rarNo": "ichuromi",
    "spaNo": "todo el cuerpo",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "igúsuhuami",
    "spa": "autoridades",
    "rarNo": "igusuhuami",
    "spaNo": "autoridades",
    "tags": []
  },
  {
    "rar": "ihuará",
    "spa": "agujerar - perforar",
    "rarNo": "ihuara",
    "spaNo": "agujerar - perforar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ihué",
    "spa": "muchachas",
    "rarNo": "ihue",
    "spaNo": "muchachas",
    "tags": []
  },
  {
    "rar": "ihué",
    "spa": "tierra",
    "rarNo": "ihue",
    "spaNo": "tierra",
    "tags": []
  },
  {
    "rar": "ihuepa",
    "spa": "tirar (al suelo)",
    "rarNo": "ihuepa",
    "spaNo": "tirar (al suelo)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ihuérami",
    "spa": "fuerte",
    "rarNo": "ihuerami",
    "spaNo": "fuerte",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "i'huita",
    "spa": "enredarse",
    "rarNo": "i'huita",
    "spaNo": "enredarse",
    "tags": []
  },
  {
    "rar": "imá",
    "spa": "hígado",
    "rarNo": "ima",
    "spaNo": "higado",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "ijínari",
    "spa": "éramos - eran",
    "rarNo": "ijinari",
    "spaNo": "eramos - eran",
    "tags": []
  },
  {
    "rar": "imaséhuami",
    "spa": "caerse - tropezar",
    "rarNo": "imasehuami",
    "spaNo": "caerse - tropezar",
    "tags": []
  },
  {
    "rar": "imúami",
    "spa": "voraz",
    "rarNo": "imuami",
    "spaNo": "voraz",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "i'ní",
    "spa": "volar",
    "rarNo": "i'ni",
    "spaNo": "volar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "iqué",
    "spa": "ventilar",
    "rarNo": "ique",
    "spaNo": "ventilar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "iquí",
    "spa": "acontecer - suceder",
    "rarNo": "iqui",
    "spaNo": "acontecer - suceder",
    "tags": []
  },
  {
    "rar": "chu mi iquiri",
    "spa": "¿qué te pasó?",
    "rarNo": "chu mi iquiri",
    "spaNo": "¿que te paso?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "iquí",
    "spa": "picar - morder (animal)",
    "rarNo": "iqui",
    "spaNo": "picar - morder (animal)",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "iquíi ",
    "spa": "saber (lo que pasó)",
    "rarNo": "iquii ",
    "spaNo": "saber (lo que paso)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "irá",
    "spa": "nopal",
    "rarNo": "ira",
    "spaNo": "nopal",
    "tags": [
      "alimentos",
      "planta"
    ]
  },
  {
    "rar": "irapa",
    "spa": "abrir",
    "rarNo": "irapa",
    "spaNo": "abrir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "irápara",
    "spa": "llave",
    "rarNo": "irapara",
    "spaNo": "llave",
    "tags": []
  },
  {
    "rar": "irápata",
    "spa": "abrirse",
    "rarNo": "irapata",
    "spaNo": "abrirse",
    "tags": []
  },
  {
    "rar": "irápatami",
    "spa": "abierto",
    "rarNo": "irapatami",
    "spaNo": "abierto",
    "tags": []
  },
  {
    "rar": "iré ",
    "spa": "estar bueno - servir",
    "rarNo": "ire ",
    "spaNo": "estar bueno - servir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ireta",
    "spa": "explicar bien",
    "rarNo": "ireta",
    "spaNo": "explicar bien",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "irí",
    "spa": "cerco",
    "rarNo": "iri",
    "spaNo": "cerco",
    "tags": []
  },
  {
    "rar": "irura",
    "spa": "ciertamiente",
    "rarNo": "irura",
    "spaNo": "ciertamiente",
    "tags": []
  },
  {
    "rar": "isaba",
    "spa": "descansar",
    "rarNo": "isaba",
    "spaNo": "descansar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "isí",
    "spa": "orinar",
    "rarNo": "isi",
    "spaNo": "orinar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "itiyeri",
    "spa": "jugar",
    "rarNo": "itiyeri",
    "spaNo": "jugar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "iyéata",
    "spa": "estar abierto",
    "rarNo": "iyeata",
    "spaNo": "estar abierto",
    "tags": []
  },
  {
    "rar": "iyénasí",
    "spa": "hasta que",
    "rarNo": "iyenasi",
    "spaNo": "hasta que",
    "tags": []
  },
  {
    "rar": "jaba",
    "spa": "pararse",
    "rarNo": "jaba",
    "spaNo": "pararse",
    "tags": []
  },
  {
    "rar": "jabu",
    "spa": "caballo",
    "rarNo": "jabu",
    "spaNo": "caballo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "jácami",
    "spa": "vivo",
    "rarNo": "jacami",
    "spaNo": "vivo",
    "tags": []
  },
  {
    "rar": "jami",
    "spa": "por aquí - por este lado",
    "rarNo": "jami",
    "spaNo": "por aqui - por este lado",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "janiri",
    "spa": "estar contento",
    "rarNo": "janiri",
    "spaNo": "estar contento",
    "tags": []
  },
  {
    "rar": "jasa",
    "spa": "levantarse",
    "rarNo": "jasa",
    "spaNo": "levantarse",
    "tags": []
  },
  {
    "rar": "jeré",
    "spa": "así es",
    "rarNo": "jere",
    "spaNo": "asi es",
    "tags": []
  },
  {
    "rar": "jícuri",
    "spa": "peyote",
    "rarNo": "jicuri",
    "spaNo": "peyote",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "jiero",
    "spa": "fierro",
    "rarNo": "jiero",
    "spaNo": "fierro",
    "tags": []
  },
  {
    "rar": "jecuá",
    "spa": "aca esta",
    "rarNo": "jecua",
    "spaNo": "aca esta",
    "tags": []
  },
  {
    "rar": "jínohua",
    "spa": "tener hijos",
    "rarNo": "jinohua",
    "spaNo": "tener hijos",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "jipi",
    "spa": "ahora",
    "rarNo": "jipi",
    "spaNo": "ahora",
    "tags": []
  },
  {
    "rar": "mapujiti",
    "spa": "porque",
    "rarNo": "mapujiti",
    "spaNo": "porque",
    "tags": []
  },
  {
    "rar": "jiyá",
    "spa": "apresurarse",
    "rarNo": "jiya",
    "spaNo": "apresurarse",
    "tags": []
  },
  {
    "rar": "jiyata",
    "spa": "apresurarse",
    "rarNo": "jiyata",
    "spaNo": "apresurarse",
    "tags": []
  },
  {
    "rar": "jiyero ",
    "spa": "hierro",
    "rarNo": "jiyero ",
    "spaNo": "hierro",
    "tags": []
  },
  {
    "rar": "jócari",
    "spa": "camaleón",
    "rarNo": "jocari",
    "spaNo": "camaleon",
    "tags": []
  },
  {
    "rar": "jochi",
    "spa": "hoyo de la nariz",
    "rarNo": "jochi",
    "spaNo": "hoyo de la nariz",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "jóhua",
    "spa": "apuntar - señalar",
    "rarNo": "johua",
    "spaNo": "apuntar - senalar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "jonsa",
    "spa": "desde - de ",
    "rarNo": "jonsa",
    "spaNo": "desde - de ",
    "tags": []
  },
  {
    "rar": "jora",
    "spa": "escarbar (hoyo)",
    "rarNo": "jora",
    "spaNo": "escarbar (hoyo)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ju - juco - jupá",
    "spa": "ser - estar",
    "rarNo": "ju - juco - jupa",
    "spaNo": "ser - estar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "jubá",
    "spa": "atrás",
    "rarNo": "juba",
    "spaNo": "atras",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "jubáami",
    "spa": "por atrás",
    "rarNo": "jubaami",
    "spaNo": "por atras",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "jubá ocuá",
    "spa": "hacia atrás",
    "rarNo": "juba ocua",
    "spaNo": "hacia atras",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "cha jubá",
    "spa": "tener mal olor",
    "rarNo": "cha juba",
    "spaNo": "tener mal olor",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "jubáami",
    "spa": "al fin - finalmente",
    "rarNo": "jubaami",
    "spaNo": "al fin - finalmente",
    "tags": []
  },
  {
    "rar": "jubánara",
    "spa": "anterior",
    "rarNo": "jubanara",
    "spaNo": "anterior",
    "tags": []
  },
  {
    "rar": "jubé",
    "spa": "mesa - banca",
    "rarNo": "jube",
    "spaNo": "mesa - banca",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "jubí ",
    "spa": "esposas",
    "rarNo": "jubi ",
    "spaNo": "esposas",
    "tags": []
  },
  {
    "rar": "juca ",
    "spa": "oler",
    "rarNo": "juca ",
    "spaNo": "oler",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "jumsa",
    "spa": "huir",
    "rarNo": "jumsa",
    "spaNo": "huir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "jurá",
    "spa": "enviar - mandar (mensaje)",
    "rarNo": "jura",
    "spaNo": "enviar - mandar (mensaje)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "jurárami",
    "spa": "mandado",
    "rarNo": "jurarami",
    "spaNo": "mandado",
    "tags": []
  },
  {
    "rar": "juri",
    "spa": "si seguro",
    "rarNo": "juri",
    "spaNo": "si seguro",
    "tags": []
  },
  {
    "rar": "juma",
    "spa": "correr",
    "rarNo": "juma",
    "spaNo": "correr",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "la",
    "spa": "sangre",
    "rarNo": "la",
    "spaNo": "sangre",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "nijé lalá",
    "spa": "mi sangre",
    "rarNo": "nije lala",
    "spaNo": "mi sangre",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "lábara",
    "spa": "venado",
    "rarNo": "labara",
    "spaNo": "venado",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "lábari",
    "spa": "nervio",
    "rarNo": "labari",
    "spaNo": "nervio",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "lamú",
    "spa": "adolorido por golpe",
    "rarNo": "lamu",
    "spaNo": "adolorido por golpe",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "lánami",
    "spa": "anaranjado",
    "rarNo": "lanami",
    "spaNo": "anaranjado",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "lasiba",
    "spa": "oxidarse",
    "rarNo": "lasiba",
    "spaNo": "oxidarse",
    "tags": []
  },
  {
    "rar": "lasíbami",
    "spa": "oxidado",
    "rarNo": "lasibami",
    "spaNo": "oxidado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "léami",
    "spa": "sangriento",
    "rarNo": "leami",
    "spaNo": "sangriento",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "lena",
    "spa": "sangrar - desangrar",
    "rarNo": "lena",
    "spaNo": "sangrar - desangrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "limeta",
    "spa": "botella de vidrio",
    "rarNo": "limeta",
    "spaNo": "botella de vidrio",
    "tags": []
  },
  {
    "rar": "loca",
    "spa": "batir - mezclar",
    "rarNo": "loca",
    "spaNo": "batir - mezclar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "lohua - 'loché",
    "spa": "tener hambre",
    "rarNo": "lohua - 'loche",
    "spaNo": "tener hambre",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "lohuari",
    "spa": "hambre",
    "rarNo": "lohuari",
    "spaNo": "hambre",
    "tags": []
  },
  {
    "rar": "lohuera",
    "spa": "abanico",
    "rarNo": "lohuera",
    "spaNo": "abanico",
    "tags": []
  },
  {
    "rar": "luhuíami",
    "spa": "usado - gastado",
    "rarNo": "luhuiami",
    "spaNo": "usado - gastado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ma",
    "spa": "correr",
    "rarNo": "ma",
    "spaNo": "correr",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ma'agá",
    "spa": "ciempiés",
    "rarNo": "ma'aga",
    "spaNo": "ciempies",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "mabá",
    "spa": "vamos",
    "rarNo": "maba",
    "spaNo": "vamos",
    "tags": []
  },
  {
    "rar": "macari",
    "spa": "cuarta (medida)",
    "rarNo": "macari",
    "spaNo": "cuarta (medida)",
    "tags": []
  },
  {
    "rar": "macahui",
    "spa": "paloma",
    "rarNo": "macahui",
    "spaNo": "paloma",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "macoy",
    "spa": "diez",
    "rarNo": "macoy",
    "spaNo": "diez",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "macó",
    "spa": "agarrar",
    "rarNo": "maco",
    "spaNo": "agarrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "macoy miná biquiyá",
    "spa": "trece",
    "rarNo": "macoy mina biquiya",
    "spaNo": "trece",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "macoy miná bire",
    "spa": "once",
    "rarNo": "macoy mina bire",
    "spaNo": "once",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "macoy miná marí",
    "spa": "quince",
    "rarNo": "macoy mina mari",
    "spaNo": "quince",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "macoy miná nahuó",
    "spa": "catorce",
    "rarNo": "macoy mina nahuo",
    "spaNo": "catorce",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "macoy miná ocuá",
    "spa": "doce",
    "rarNo": "macoy mina ocua",
    "spaNo": "doce",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "macúsuhua",
    "spa": "dedo",
    "rarNo": "macusuhua",
    "spaNo": "dedo",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "machá",
    "spa": "garrapata",
    "rarNo": "macha",
    "spaNo": "garrapata",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "machí",
    "spa": "saber - conocer",
    "rarNo": "machi",
    "spaNo": "saber - conocer",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "machí ",
    "spa": "verse bien",
    "rarNo": "machi ",
    "spaNo": "verse bien",
    "tags": []
  },
  {
    "rar": "machíami",
    "spa": "claramente",
    "rarNo": "machiami",
    "spaNo": "claramente",
    "tags": []
  },
  {
    "rar": "machíri",
    "spa": "podria ver",
    "rarNo": "machiri",
    "spaNo": "podria ver",
    "tags": []
  },
  {
    "rar": "machí oserí 'néniya",
    "spa": "saber leer",
    "rarNo": "machi oseri 'neniya",
    "spaNo": "saber leer",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "machibú",
    "spa": "sacar punta",
    "rarNo": "machibu",
    "spaNo": "sacar punta",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "machiná",
    "spa": "afuera",
    "rarNo": "machina",
    "spaNo": "afuera",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "machíi",
    "spa": "ver bien",
    "rarNo": "machii",
    "spaNo": "ver bien",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "machina",
    "spa": "salir",
    "rarNo": "machina",
    "spaNo": "salir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "machira",
    "spa": "descubrir - mostrar",
    "rarNo": "machira",
    "spaNo": "descubrir - mostrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "machiri",
    "spa": "alacran",
    "rarNo": "machiri",
    "spaNo": "alacran",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "machíriami",
    "spa": "que puede ver",
    "rarNo": "machiriami",
    "spaNo": "que puede ver",
    "tags": []
  },
  {
    "rar": "que machíriami",
    "spa": "ciego",
    "rarNo": "que machiriami",
    "spaNo": "ciego",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "mahuiyá",
    "spa": "león - puma",
    "rarNo": "mahuiya",
    "spaNo": "leon - puma",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "majajá",
    "spa": "espantarse",
    "rarNo": "majaja",
    "spaNo": "espantarse",
    "tags": []
  },
  {
    "rar": "majaga",
    "spa": "temer - tener miedo",
    "rarNo": "majaga",
    "spaNo": "temer - tener miedo",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "majáami",
    "spa": "cobarde - miedoso - temeroso",
    "rarNo": "majaami",
    "spaNo": "cobarde - miedoso - temeroso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "majajara - majajárata",
    "spa": "asustar - espantar",
    "rarNo": "majajara - majajarata",
    "spaNo": "asustar - espantar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "majárami",
    "spa": "nervioso",
    "rarNo": "majarami",
    "spaNo": "nervioso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "maní",
    "spa": "contener un líquido",
    "rarNo": "mani",
    "spaNo": "contener un liquido",
    "tags": []
  },
  {
    "rar": "mapari",
    "spa": "cuando",
    "rarNo": "mapari",
    "spaNo": "cuando",
    "tags": []
  },
  {
    "rar": "maparí jonsa",
    "spa": "desde que",
    "rarNo": "mapari jonsa",
    "spaNo": "desde que",
    "tags": []
  },
  {
    "rar": "mapo'na",
    "spa": "dónde",
    "rarNo": "mapo'na",
    "spaNo": "donde",
    "tags": []
  },
  {
    "rar": "mapujiti",
    "spa": "para - que - el cual ",
    "rarNo": "mapujiti",
    "spaNo": "para - que - el cual ",
    "tags": []
  },
  {
    "rar": "mapu iquí",
    "spa": "cuánto",
    "rarNo": "mapu iqui",
    "spaNo": "cuanto",
    "tags": []
  },
  {
    "rar": "mapuyena",
    "spa": "mientras",
    "rarNo": "mapuyena",
    "spaNo": "mientras",
    "tags": []
  },
  {
    "rar": "mapuyénasi",
    "spa": "hasta que",
    "rarNo": "mapuyenasi",
    "spaNo": "hasta que",
    "tags": []
  },
  {
    "rar": "mapuyiri",
    "spa": "semejante",
    "rarNo": "mapuyiri",
    "spaNo": "semejante",
    "tags": []
  },
  {
    "rar": "mapuyíripi",
    "spa": "cualquier",
    "rarNo": "mapuyiripi",
    "spaNo": "cualquier",
    "tags": []
  },
  {
    "rar": "mará",
    "spa": "hija",
    "rarNo": "mara",
    "spaNo": "hija",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "maracá",
    "spa": "paleta",
    "rarNo": "maraca",
    "spaNo": "paleta",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "marachi",
    "spa": "sobaco",
    "rarNo": "marachi",
    "spaNo": "sobaco",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "marí",
    "spa": "cinco",
    "rarNo": "mari",
    "spaNo": "cinco",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "marí",
    "spa": "padre (de la hija)",
    "rarNo": "mari",
    "spaNo": "padre (de la hija)",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "marisa",
    "spa": "quinto",
    "rarNo": "marisa",
    "spaNo": "quinto",
    "tags": []
  },
  {
    "rar": "marisa macoy",
    "spa": "cincuenta",
    "rarNo": "marisa macoy",
    "spaNo": "cincuenta",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "masa ",
    "spa": "huir",
    "rarNo": "masa ",
    "spaNo": "huir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "masó",
    "spa": "amasar",
    "rarNo": "maso",
    "spaNo": "amasar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "matá",
    "spa": "metate",
    "rarNo": "mata",
    "spaNo": "metate",
    "tags": []
  },
  {
    "rar": "mató",
    "spa": "hombro",
    "rarNo": "mato",
    "spaNo": "hombro",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "matora",
    "spa": "llevar - cargar (en la espalda)",
    "rarNo": "matora",
    "spaNo": "llevar - cargar (en la espalda)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "matosá",
    "spa": "canas",
    "rarNo": "matosa",
    "spaNo": "canas",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "matosé",
    "spa": "tener canas",
    "rarNo": "matose",
    "spaNo": "tener canas",
    "tags": [
      "verbo",
      "parte del cuerpo"
    ]
  },
  {
    "rar": "mayé",
    "spa": "creer que sí - pensar - opinar",
    "rarNo": "maye",
    "spaNo": "creer que si - pensar - opinar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mayé",
    "spa": "tener celos",
    "rarNo": "maye",
    "spaNo": "tener celos",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "me",
    "spa": "maguey",
    "rarNo": "me",
    "spaNo": "maguey",
    "tags": []
  },
  {
    "rar": "me ",
    "spa": "traer",
    "rarNo": "me ",
    "spaNo": "traer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "me ",
    "spa": "tanto - mucho",
    "rarNo": "me ",
    "spaNo": "tanto - mucho",
    "tags": []
  },
  {
    "rar": "me ",
    "spa": "ganar sueldo",
    "rarNo": "me ",
    "spaNo": "ganar sueldo",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "me ",
    "spa": "mezcal",
    "rarNo": "me ",
    "spaNo": "mezcal",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "méchuri",
    "spa": "cordero",
    "rarNo": "mechuri",
    "spaNo": "cordero",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "meta",
    "spa": "arrear - llevar (animales)",
    "rarNo": "meta",
    "spaNo": "arrear - llevar (animales)",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "mi",
    "spa": "aquel - aquella",
    "rarNo": "mi",
    "spaNo": "aquel - aquella",
    "tags": []
  },
  {
    "rar": "micá",
    "spa": "lejos",
    "rarNo": "mica",
    "spaNo": "lejos",
    "tags": []
  },
  {
    "rar": "micabé",
    "spa": "muy lejos",
    "rarNo": "micabe",
    "spaNo": "muy lejos",
    "tags": []
  },
  {
    "rar": "micabéana",
    "spa": "alejarse - retirarse",
    "rarNo": "micabeana",
    "spaNo": "alejarse - retirarse",
    "tags": []
  },
  {
    "rar": "michá",
    "spa": "luna - mes",
    "rarNo": "micha",
    "spaNo": "luna - mes",
    "tags": []
  },
  {
    "rar": "michira",
    "spa": "astilla",
    "rarNo": "michira",
    "spaNo": "astilla",
    "tags": []
  },
  {
    "rar": "michira",
    "spa": "alacran",
    "rarNo": "michira",
    "spaNo": "alacran",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "michona",
    "spa": "martillar",
    "rarNo": "michona",
    "spaNo": "martillar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "michora",
    "spa": "marro - mazo",
    "rarNo": "michora",
    "spaNo": "marro - mazo",
    "tags": []
  },
  {
    "rar": "michóntami",
    "spa": "clavado",
    "rarNo": "michontami",
    "spaNo": "clavado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "misi",
    "spa": "gato",
    "rarNo": "misi",
    "spaNo": "gato",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "michú",
    "spa": "abollarse",
    "rarNo": "michu",
    "spaNo": "abollarse",
    "tags": []
  },
  {
    "rar": "michúnari",
    "spa": "aplastar",
    "rarNo": "michunari",
    "spaNo": "aplastar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mijírami",
    "spa": "asado - tatemado",
    "rarNo": "mijirami",
    "spaNo": "asado - tatemado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "sapá mijírami",
    "spa": "barbacoa",
    "rarNo": "sapa mijirami",
    "spaNo": "barbacoa",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "minana",
    "spa": "mas allá - poco después",
    "rarNo": "minana",
    "spaNo": "mas alla - poco despues",
    "tags": []
  },
  {
    "rar": "mi'ró",
    "spa": "desmayarse",
    "rarNo": "mi'ro",
    "spaNo": "desmayarse",
    "tags": []
  },
  {
    "rar": "misucuá",
    "spa": "zarzamora",
    "rarNo": "misucua",
    "spaNo": "zarzamora",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "mitá",
    "spa": "ganar (juego o carrera)",
    "rarNo": "mita",
    "spaNo": "ganar (juego o carrera)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mitáchana",
    "spa": "aplastar",
    "rarNo": "mitachana",
    "spaNo": "aplastar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mitáchami",
    "spa": "aplastado",
    "rarNo": "mitachami",
    "spaNo": "aplastado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "miteba",
    "spa": "tocerse (tobillo)",
    "rarNo": "miteba",
    "spaNo": "tocerse (tobillo)",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "mi'yá",
    "spa": "asesinar - matar",
    "rarNo": "mi'ya",
    "spaNo": "asesinar - matar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "miyérati",
    "spa": "madrastra",
    "rarNo": "miyerati",
    "spaNo": "madrastra",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "mo",
    "spa": "subir",
    "rarNo": "mo",
    "spaNo": "subir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "moba",
    "spa": "sobre - encima",
    "rarNo": "moba",
    "spaNo": "sobre - encima",
    "tags": []
  },
  {
    "rar": "mocuásari",
    "spa": "quelite",
    "rarNo": "mocuasari",
    "spaNo": "quelite",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "mochocuá",
    "spa": "helecho",
    "rarNo": "mochocua",
    "spaNo": "helecho",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "mochogohua",
    "spa": "tener cerebro",
    "rarNo": "mochogohua",
    "spaNo": "tener cerebro",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "mo'huá",
    "spa": "encerrar",
    "rarNo": "mo'hua",
    "spaNo": "encerrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mojuana",
    "spa": "quebrar",
    "rarNo": "mojuana",
    "spaNo": "quebrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mo'né",
    "spa": "yerno",
    "rarNo": "mo'ne",
    "spaNo": "yerno",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "mo'ó",
    "spa": "cabeza",
    "rarNo": "mo'o",
    "spaNo": "cabeza",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "mo'orí",
    "spa": "nuera",
    "rarNo": "mo'ori",
    "spaNo": "nuera",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "morí",
    "spa": "humo",
    "rarNo": "mori",
    "spaNo": "humo",
    "tags": []
  },
  {
    "rar": "morisó",
    "spa": "hollin ",
    "rarNo": "moriso",
    "spaNo": "hollin ",
    "tags": []
  },
  {
    "rar": "morisó",
    "spa": "ahumarse",
    "rarNo": "moriso",
    "spaNo": "ahumarse",
    "tags": []
  },
  {
    "rar": "morisota",
    "spa": "ahumarse",
    "rarNo": "morisota",
    "spaNo": "ahumarse",
    "tags": []
  },
  {
    "rar": "mosí",
    "spa": "desmenuzar",
    "rarNo": "mosi",
    "spaNo": "desmenuzar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "motosá",
    "spa": "canas",
    "rarNo": "motosa",
    "spaNo": "canas",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "mubú",
    "spa": "elevar",
    "rarNo": "mubu",
    "spaNo": "elevar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mucú",
    "spa": "morirse - fallecer",
    "rarNo": "mucu",
    "spaNo": "morirse - fallecer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mucúami",
    "spa": "muerto - difunto",
    "rarNo": "mucuami",
    "spaNo": "muerto - difunto",
    "tags": []
  },
  {
    "rar": "múchari",
    "spa": "nene - criatura",
    "rarNo": "muchari",
    "spaNo": "nene - criatura",
    "tags": []
  },
  {
    "rar": "muchínara",
    "spa": "querer senarse",
    "rarNo": "muchinara",
    "spaNo": "querer senarse",
    "tags": []
  },
  {
    "rar": "muchuhua",
    "spa": "poner",
    "rarNo": "muchuhua",
    "spaNo": "poner",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "muguí",
    "spa": "mujeres",
    "rarNo": "mugui",
    "spaNo": "mujeres",
    "tags": []
  },
  {
    "rar": "mugúsuhuami",
    "spa": "epiléptico",
    "rarNo": "mugusuhuami",
    "spaNo": "epileptico",
    "tags": []
  },
  {
    "rar": "muhuehua",
    "spa": "aumentar",
    "rarNo": "muhuehua",
    "spaNo": "aumentar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mujé",
    "spa": "tu - usted",
    "rarNo": "muje",
    "spaNo": "tu - usted",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "mujeru",
    "spa": "¿y tú?",
    "rarNo": "mujeru",
    "spaNo": "¿y tu?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "mujé binoy",
    "spa": "tú mismo",
    "rarNo": "muje binoy",
    "spaNo": "tu mismo",
    "tags": []
  },
  {
    "rar": "muné ",
    "spa": "sembrar frijol",
    "rarNo": "mune ",
    "spaNo": "sembrar frijol",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "muquira",
    "spa": "hembra",
    "rarNo": "muquira",
    "spaNo": "hembra",
    "tags": []
  },
  {
    "rar": "torí ",
    "spa": "gallina",
    "rarNo": "tori ",
    "spaNo": "gallina",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "muripi",
    "spa": "cerca",
    "rarNo": "muripi",
    "spaNo": "cerca",
    "tags": []
  },
  {
    "rar": "murubé",
    "spa": "muy cerca",
    "rarNo": "murube",
    "spaNo": "muy cerca",
    "tags": []
  },
  {
    "rar": "murubpe bitéami",
    "spa": "vecino",
    "rarNo": "murubpe biteami",
    "spaNo": "vecino",
    "tags": []
  },
  {
    "rar": "murubéana",
    "spa": "acercarse",
    "rarNo": "murubeana",
    "spaNo": "acercarse",
    "tags": []
  },
  {
    "rar": "muté",
    "spa": "aplastarse",
    "rarNo": "mute",
    "spaNo": "aplastarse",
    "tags": []
  },
  {
    "rar": "muteta",
    "spa": "aplastar",
    "rarNo": "muteta",
    "spaNo": "aplastar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "na - nari",
    "spa": "éste - ésta",
    "rarNo": "na - nari",
    "spaNo": "este - esta",
    "tags": []
  },
  {
    "rar": "na'á",
    "spa": "quemar",
    "rarNo": "na'a",
    "spaNo": "quemar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "náapa",
    "spa": "alcanzar",
    "rarNo": "naapa",
    "spaNo": "alcanzar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "na'árami",
    "spa": "quemado",
    "rarNo": "na'arami",
    "spaNo": "quemado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "nabé",
    "spa": "poco más allá",
    "rarNo": "nabe",
    "spaNo": "poco mas alla",
    "tags": []
  },
  {
    "rar": "naca",
    "spa": "de lejos",
    "rarNo": "naca",
    "spaNo": "de lejos",
    "tags": []
  },
  {
    "rar": "nacá",
    "spa": "oreja - oído",
    "rarNo": "naca",
    "spaNo": "oreja - oido",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "nacarópari",
    "spa": "mariposa",
    "rarNo": "nacaropari",
    "spaNo": "mariposa",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "nacátara",
    "spa": "hacer mucho ruido",
    "rarNo": "nacatara",
    "spaNo": "hacer mucho ruido",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cha nacátara",
    "spa": "callate",
    "rarNo": "cha nacatara",
    "spaNo": "callate",
    "tags": []
  },
  {
    "rar": "nacóo ",
    "spa": "pelear",
    "rarNo": "nacoo ",
    "spaNo": "pelear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nacuba",
    "spa": "borrar",
    "rarNo": "nacuba",
    "spaNo": "borrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nacurihua",
    "spa": "cambiar",
    "rarNo": "nacurihua",
    "spaNo": "cambiar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nacuríhua",
    "spa": "transformar",
    "rarNo": "nacurihua",
    "spaNo": "transformar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nachigó",
    "spa": "amarrar - anudar",
    "rarNo": "nachigo",
    "spaNo": "amarrar - anudar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nachibuí",
    "spa": "alcanzar",
    "rarNo": "nachibui",
    "spaNo": "alcanzar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nachupa",
    "spa": "conectar",
    "rarNo": "nachupa",
    "spaNo": "conectar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nachuta",
    "spa": "repartir - distribuir",
    "rarNo": "nachuta",
    "spaNo": "repartir - distribuir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "na'érami",
    "spa": "prendido",
    "rarNo": "na'erami",
    "spaNo": "prendido",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "nahuá",
    "spa": "raíz",
    "rarNo": "nahua",
    "spaNo": "raiz",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "nahuají",
    "spa": "cantar",
    "rarNo": "nahuaji",
    "spaNo": "cantar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nahuará",
    "spa": "enraizar",
    "rarNo": "nahuara",
    "spaNo": "enraizar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nahuara",
    "spa": "dar a luz ",
    "rarNo": "nahuara",
    "spaNo": "dar a luz ",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nahuesa",
    "spa": "avisar - predicar",
    "rarNo": "nahuesa",
    "spaNo": "avisar - predicar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nahuíi",
    "spa": "acercarse",
    "rarNo": "nahuii",
    "spaNo": "acercarse",
    "tags": []
  },
  {
    "rar": "nahuó",
    "spa": "cuatro",
    "rarNo": "nahuo",
    "spaNo": "cuatro",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "na'í",
    "spa": "aquí",
    "rarNo": "na'i",
    "spaNo": "aqui",
    "tags": []
  },
  {
    "rar": "na'í",
    "spa": "lumbre",
    "rarNo": "na'i",
    "spaNo": "lumbre",
    "tags": []
  },
  {
    "rar": "najata",
    "spa": "seguir",
    "rarNo": "najata",
    "spaNo": "seguir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "najirémami",
    "spa": "hermanos",
    "rarNo": "najiremami",
    "spaNo": "hermanos",
    "tags": []
  },
  {
    "rar": "nami",
    "spa": "oír",
    "rarNo": "nami",
    "spaNo": "oir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "namuti",
    "spa": "cosa - animal",
    "rarNo": "namuti",
    "spaNo": "cosa - animal",
    "tags": []
  },
  {
    "rar": "na'oma",
    "spa": "tapar",
    "rarNo": "na'oma",
    "spaNo": "tapar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "napacha",
    "spa": "camisa",
    "rarNo": "napacha",
    "spaNo": "camisa",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "napachota",
    "spa": "pegar - juntar ",
    "rarNo": "napachota",
    "spaNo": "pegar - juntar ",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "napahuí",
    "spa": "juntarse",
    "rarNo": "napahui",
    "spaNo": "juntarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "napé",
    "spa": "juntarse - casarse",
    "rarNo": "nape",
    "spaNo": "juntarse - casarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "napéa",
    "spa": "también - con - juntos",
    "rarNo": "napea",
    "spaNo": "tambien - con - juntos",
    "tags": []
  },
  {
    "rar": "napíhuari",
    "spa": "nixtamal",
    "rarNo": "napihuari",
    "spaNo": "nixtamal",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "napisó",
    "spa": "polvo - ceniza",
    "rarNo": "napiso",
    "spaNo": "polvo - ceniza",
    "tags": []
  },
  {
    "rar": "napó",
    "spa": "tuna",
    "rarNo": "napo",
    "spaNo": "tuna",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "napó",
    "spa": "deshierbar - quitar hierba",
    "rarNo": "napo",
    "spaNo": "deshierbar - quitar hierba",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "napora",
    "spa": "cubrirse la cara",
    "rarNo": "napora",
    "spaNo": "cubrirse la cara",
    "tags": []
  },
  {
    "rar": "napona",
    "spa": "quebrar",
    "rarNo": "napona",
    "spaNo": "quebrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "naquétari",
    "spa": "sordo",
    "rarNo": "naquetari",
    "spaNo": "sordo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "naquí",
    "spa": "querer - desear",
    "rarNo": "naqui",
    "spaNo": "querer - desear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nará",
    "spa": "llorar",
    "rarNo": "nara",
    "spaNo": "llorar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "narácuri",
    "spa": "caracol",
    "rarNo": "naracuri",
    "spaNo": "caracol",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "naraquéami",
    "spa": "llorón",
    "rarNo": "naraqueami",
    "spaNo": "lloron",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "narasi",
    "spa": "naranja",
    "rarNo": "narasi",
    "spaNo": "naranja",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "naré",
    "spa": "recibir - aceptar",
    "rarNo": "nare",
    "spaNo": "recibir - aceptar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "narepa",
    "spa": "saludar",
    "rarNo": "narepa",
    "spaNo": "saludar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nariyochi",
    "spa": "lobo",
    "rarNo": "nariyochi",
    "spaNo": "lobo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "nariyochi",
    "spa": "éste - ésta",
    "rarNo": "nariyochi",
    "spaNo": "este - esta",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "na'rohua",
    "spa": "con - también",
    "rarNo": "na'rohua",
    "spaNo": "con - tambien",
    "tags": []
  },
  {
    "rar": "na'rina",
    "spa": "quebrar",
    "rarNo": "na'rina",
    "spaNo": "quebrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "na´sinami",
    "spa": "perezoso",
    "rarNo": "na´sinami",
    "spaNo": "perezoso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "nasipa",
    "spa": "medio",
    "rarNo": "nasipa",
    "spaNo": "medio",
    "tags": []
  },
  {
    "rar": "nasipa recogó",
    "spa": "medianoche",
    "rarNo": "nasipa recogo",
    "spaNo": "medianoche",
    "tags": []
  },
  {
    "rar": "nasipasí",
    "spa": "mitad",
    "rarNo": "nasipasi",
    "spaNo": "mitad",
    "tags": []
  },
  {
    "rar": "nasípasigó",
    "spa": "miércoles",
    "rarNo": "nasipasigo",
    "spaNo": "miercoles",
    "tags": []
  },
  {
    "rar": "nasinácuri",
    "spa": "tener flojera",
    "rarNo": "nasinacuri",
    "spaNo": "tener flojera",
    "tags": []
  },
  {
    "rar": "narúchari",
    "spa": "araña",
    "rarNo": "naruchari",
    "spaNo": "arana",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "nasó",
    "spa": "guardar - esconder",
    "rarNo": "naso",
    "spaNo": "guardar - esconder",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nasó",
    "spa": "mezclarse - revolver",
    "rarNo": "naso",
    "spaNo": "mezclarse - revolver",
    "tags": []
  },
  {
    "rar": "nasóami",
    "spa": "revuelto",
    "rarNo": "nasoami",
    "spaNo": "revuelto",
    "tags": []
  },
  {
    "rar": "nasohua",
    "spa": "mezclar",
    "rarNo": "nasohua",
    "spaNo": "mezclar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "0nata",
    "spa": "pensar",
    "rarNo": "0nata",
    "spaNo": "pensar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "natabú",
    "spa": "perforar - taladrar",
    "rarNo": "natabu",
    "spaNo": "perforar - taladrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nataguésuri",
    "spa": "tonto",
    "rarNo": "nataguesuri",
    "spaNo": "tonto",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "nátami",
    "spa": "pensador - inteligente",
    "rarNo": "natami",
    "spaNo": "pensador - inteligente",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "nate",
    "spa": "difícil - trabajoso",
    "rarNo": "nate",
    "spaNo": "dificil - trabajoso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "huabé 'nate ju",
    "spa": "está muy difícil",
    "rarNo": "huabe 'nate ju",
    "spaNo": "esta muy dificil",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "natéami",
    "spa": "costoso",
    "rarNo": "nateami",
    "spaNo": "costoso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "natepa",
    "spa": "encontrar",
    "rarNo": "natepa",
    "spaNo": "encontrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "natépari",
    "spa": "liston",
    "rarNo": "natepari",
    "spaNo": "liston",
    "tags": []
  },
  {
    "rar": "nateta",
    "spa": "pagar",
    "rarNo": "nateta",
    "spaNo": "pagar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "natérarabá",
    "spa": "gracias",
    "rarNo": "nateraraba",
    "spaNo": "gracias",
    "tags": []
  },
  {
    "rar": "natétarahua",
    "spa": "pagar",
    "rarNo": "natetarahua",
    "spaNo": "pagar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "natibú",
    "spa": "atajar",
    "rarNo": "natibu",
    "spaNo": "atajar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "natigara",
    "spa": "paga - valor",
    "rarNo": "natigara",
    "spaNo": "paga - valor",
    "tags": []
  },
  {
    "rar": "quipu natiguí",
    "spa": "¿Cuánto vale?",
    "rarNo": "quipu natigui",
    "spaNo": "¿Cuanto vale?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "nayá",
    "spa": "mucho antes",
    "rarNo": "naya",
    "spaNo": "mucho antes",
    "tags": []
  },
  {
    "rar": "nayáhuari",
    "spa": "antepasado",
    "rarNo": "nayahuari",
    "spaNo": "antepasado",
    "tags": []
  },
  {
    "rar": "nayuna",
    "spa": "enfermarse",
    "rarNo": "nayuna",
    "spaNo": "enfermarse",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "nayúami",
    "spa": "enfermo",
    "rarNo": "nayuami",
    "spaNo": "enfermo",
    "tags": [
      "adjetivo",
      "medicina"
    ]
  },
  {
    "rar": "nayurí",
    "spa": "enfermedad",
    "rarNo": "nayuri",
    "spaNo": "enfermedad",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "né",
    "spa": "ver",
    "rarNo": "ne",
    "spaNo": "ver",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ne",
    "spa": "mirar - observar",
    "rarNo": "ne",
    "spaNo": "mirar - observar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ne",
    "spa": "muy - sumamente",
    "rarNo": "ne",
    "spaNo": "muy - sumamente",
    "tags": []
  },
  {
    "rar": "néchigo",
    "spa": "igual",
    "rarNo": "nechigo",
    "spaNo": "igual",
    "tags": []
  },
  {
    "rar": "née",
    "spa": "usar",
    "rarNo": "nee",
    "spaNo": "usar",
    "tags": []
  },
  {
    "rar": "nehuará",
    "spa": "acordarse - recordar",
    "rarNo": "nehuara",
    "spaNo": "acordarse - recordar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "neni",
    "spa": "mirar",
    "rarNo": "neni",
    "spaNo": "mirar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nepi",
    "spa": "muchísimo",
    "rarNo": "nepi",
    "spaNo": "muchisimo",
    "tags": []
  },
  {
    "rar": "nera",
    "spa": "mostrar",
    "rarNo": "nera",
    "spaNo": "mostrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ni biré",
    "spa": "ni uno",
    "rarNo": "ni bire",
    "spaNo": "ni uno",
    "tags": []
  },
  {
    "rar": "nicá ",
    "spa": "ladrar",
    "rarNo": "nica ",
    "spaNo": "ladrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ne'ogá",
    "spa": "voz",
    "rarNo": "ne'oga",
    "spaNo": "voz",
    "tags": []
  },
  {
    "rar": "nicá ",
    "spa": "ladrar",
    "rarNo": "nica ",
    "spaNo": "ladrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nicóami",
    "spa": "asesino",
    "rarNo": "nicoami",
    "spaNo": "asesino",
    "tags": []
  },
  {
    "rar": "nicahuera",
    "spa": "estar orgulloso",
    "rarNo": "nicahuera",
    "spaNo": "estar orgulloso",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nigúurami",
    "spa": "ayudante",
    "rarNo": "niguurami",
    "spaNo": "ayudante",
    "tags": []
  },
  {
    "rar": "nigá",
    "spa": "viéndolo - mirandolo",
    "rarNo": "niga",
    "spaNo": "viendolo - mirandolo",
    "tags": []
  },
  {
    "rar": "nigúura",
    "spa": "ayudar - salvar",
    "rarNo": "niguura",
    "spaNo": "ayudar - salvar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nihúa",
    "spa": "hacer",
    "rarNo": "nihua",
    "spaNo": "hacer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nihua",
    "spa": "tener - poseer ",
    "rarNo": "nihua",
    "spaNo": "tener - poseer ",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "níhuami",
    "spa": "poseedor - rico",
    "rarNo": "nihuami",
    "spaNo": "poseedor - rico",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ni'huá",
    "spa": "relampaguear",
    "rarNo": "ni'hua",
    "spaNo": "relampaguear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nihuícohua",
    "spa": "casarse",
    "rarNo": "nihuicohua",
    "spaNo": "casarse",
    "tags": []
  },
  {
    "rar": "nihuíi",
    "spa": "hacer",
    "rarNo": "nihuii",
    "spaNo": "hacer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nijá",
    "spa": "dar - entregar",
    "rarNo": "nija",
    "spaNo": "dar - entregar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nijehua",
    "spa": "hacer caso - contestar - responder",
    "rarNo": "nijehua",
    "spaNo": "hacer caso - contestar - responder",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nijiyá",
    "spa": "pon atención",
    "rarNo": "nijiya",
    "spaNo": "pon atencion",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "nijí",
    "spa": "dar - entregar - obsequiar",
    "rarNo": "niji",
    "spaNo": "dar - entregar - obsequiar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nijohua",
    "spa": "invitar",
    "rarNo": "nijohua",
    "spaNo": "invitar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ni'mayé",
    "spa": "tener celos",
    "rarNo": "ni'maye",
    "spaNo": "tener celos",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ni'mayéami",
    "spa": "celoso",
    "rarNo": "ni'mayeami",
    "spaNo": "celoso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "nimí",
    "spa": "yo a ti",
    "rarNo": "nimi",
    "spaNo": "yo a ti",
    "tags": []
  },
  {
    "rar": "nimí garé",
    "spa": "yo te amo",
    "rarNo": "nimi gare",
    "spaNo": "yo te amo",
    "tags": []
  },
  {
    "rar": "nimica",
    "spa": "contradecir",
    "rarNo": "nimica",
    "spaNo": "contradecir",
    "tags": []
  },
  {
    "rar": "niná",
    "spa": "ver",
    "rarNo": "nina",
    "spaNo": "ver",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nipá",
    "spa": "cobrar - quitar algo",
    "rarNo": "nipa",
    "spaNo": "cobrar - quitar algo",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nipáami",
    "spa": "cobrador",
    "rarNo": "nipaami",
    "spaNo": "cobrador",
    "tags": []
  },
  {
    "rar": "niquí",
    "spa": "picar",
    "rarNo": "niqui",
    "spaNo": "picar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "níraga",
    "spa": "ser",
    "rarNo": "niraga",
    "spaNo": "ser",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "echirigá níraga",
    "spa": "así sea",
    "rarNo": "echiriga niraga",
    "spaNo": "asi sea",
    "tags": []
  },
  {
    "rar": "nírasi",
    "spa": "sean",
    "rarNo": "nirasi",
    "spaNo": "sean",
    "tags": []
  },
  {
    "rar": "nírata",
    "spa": "animar - dar fe",
    "rarNo": "nirata",
    "spaNo": "animar - dar fe",
    "tags": []
  },
  {
    "rar": "nirú",
    "spa": "hay",
    "rarNo": "niru",
    "spaNo": "hay",
    "tags": []
  },
  {
    "rar": "nisé",
    "spa": "cuidar - pastorear",
    "rarNo": "nise",
    "spaNo": "cuidar - pastorear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nitapa",
    "spa": "aplastar",
    "rarNo": "nitapa",
    "spaNo": "aplastar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ni'yúbana",
    "spa": "soltar",
    "rarNo": "ni'yubana",
    "spaNo": "soltar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ni'yusa",
    "spa": "soltarse -escaparse",
    "rarNo": "ni'yusa",
    "spaNo": "soltarse -escaparse",
    "tags": []
  },
  {
    "rar": "no",
    "spa": "hijo",
    "rarNo": "no",
    "spaNo": "hijo",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "no ",
    "spa": "confiar - admirar",
    "rarNo": "no ",
    "spaNo": "confiar - admirar",
    "tags": []
  },
  {
    "rar": "nicá ",
    "spa": "moverse",
    "rarNo": "nica ",
    "spaNo": "moverse",
    "tags": []
  },
  {
    "rar": "nocuisa",
    "spa": "seguir haciendo",
    "rarNo": "nocuisa",
    "spaNo": "seguir haciendo",
    "tags": []
  },
  {
    "rar": "nochá",
    "spa": "tentar - tocar",
    "rarNo": "nocha",
    "spaNo": "tentar - tocar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nocha",
    "spa": "trabajar",
    "rarNo": "nocha",
    "spaNo": "trabajar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nóchami",
    "spa": "obrero - trabajador",
    "rarNo": "nochami",
    "spaNo": "obrero - trabajador",
    "tags": []
  },
  {
    "rar": "nochárata",
    "spa": "emplear",
    "rarNo": "nocharata",
    "spaNo": "emplear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nóchari",
    "spa": "dificil",
    "rarNo": "nochari",
    "spaNo": "dificil",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "nóchari",
    "spa": "trabajo",
    "rarNo": "nochari",
    "spaNo": "trabajo",
    "tags": []
  },
  {
    "rar": "noguí",
    "spa": "casi",
    "rarNo": "nogui",
    "spaNo": "casi",
    "tags": []
  },
  {
    "rar": "nohua",
    "spa": "tener un hijo",
    "rarNo": "nohua",
    "spaNo": "tener un hijo",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "nóochami",
    "spa": "orgulloso",
    "rarNo": "noochami",
    "spaNo": "orgulloso",
    "tags": []
  },
  {
    "rar": "nóochami",
    "spa": "tener orgullo",
    "rarNo": "noochami",
    "spaNo": "tener orgullo",
    "tags": []
  },
  {
    "rar": "niporí",
    "spa": "inundar",
    "rarNo": "nipori",
    "spaNo": "inundar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "niporíbana",
    "spa": "cubrir con agua",
    "rarNo": "niporibana",
    "spaNo": "cubrir con agua",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "noqué",
    "spa": "moverse",
    "rarNo": "noque",
    "spaNo": "moverse",
    "tags": []
  },
  {
    "rar": "nocuá",
    "spa": "moverse",
    "rarNo": "nocua",
    "spaNo": "moverse",
    "tags": []
  },
  {
    "rar": "noré",
    "spa": "rodear",
    "rarNo": "nore",
    "spaNo": "rodear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "noré",
    "spa": "estar nublado",
    "rarNo": "nore",
    "spaNo": "estar nublado",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "noreba",
    "spa": "nublarse",
    "rarNo": "noreba",
    "spaNo": "nublarse",
    "tags": []
  },
  {
    "rar": "noreba",
    "spa": "dar vuelta",
    "rarNo": "noreba",
    "spaNo": "dar vuelta",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "norí",
    "spa": "nube",
    "rarNo": "nori",
    "spaNo": "nube",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "norigá",
    "spa": "alrededor",
    "rarNo": "noriga",
    "spaNo": "alrededor",
    "tags": []
  },
  {
    "rar": "norina",
    "spa": "volver - venir",
    "rarNo": "norina",
    "spaNo": "volver - venir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "norira",
    "spa": "andar dando vueltas",
    "rarNo": "norira",
    "spaNo": "andar dando vueltas",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "norírahuachi",
    "spa": "semana santa",
    "rarNo": "norirahuachi",
    "spaNo": "semana santa",
    "tags": []
  },
  {
    "rar": "nosobú",
    "spa": "descomponer - echar a perder",
    "rarNo": "nosobu",
    "spaNo": "descomponer - echar a perder",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nosohuí",
    "spa": "descomponerse",
    "rarNo": "nosohui",
    "spaNo": "descomponerse",
    "tags": []
  },
  {
    "rar": "norohuí",
    "spa": "ocultarse",
    "rarNo": "norohui",
    "spaNo": "ocultarse",
    "tags": []
  },
  {
    "rar": "norohuiri",
    "spa": "desaparecerse",
    "rarNo": "norohuiri",
    "spaNo": "desaparecerse",
    "tags": []
  },
  {
    "rar": "nurá",
    "spa": "mandar - ordenar",
    "rarNo": "nura",
    "spaNo": "mandar - ordenar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "riosi nurarira",
    "spa": "los mandamientos de Dios",
    "rarNo": "riosi nurarira",
    "spaNo": "los mandamientos de Dios",
    "tags": []
  },
  {
    "rar": "nuraríhuami",
    "spa": "ley - mandamiento",
    "rarNo": "nurarihuami",
    "spaNo": "ley - mandamiento",
    "tags": []
  },
  {
    "rar": "nuré",
    "spa": "mandar - ordenar",
    "rarNo": "nure",
    "spaNo": "mandar - ordenar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nuté",
    "spa": "guardar - retener",
    "rarNo": "nute",
    "spaNo": "guardar - retener",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nuté",
    "spa": "alzar",
    "rarNo": "nute",
    "spaNo": "alzar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nuté",
    "spa": "tener comiga",
    "rarNo": "nute",
    "spaNo": "tener comiga",
    "tags": []
  },
  {
    "rar": "nutugá",
    "spa": "lonche - merienda",
    "rarNo": "nutuga",
    "spaNo": "lonche - merienda",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "nututa",
    "spa": "hacer merienda",
    "rarNo": "nututa",
    "spaNo": "hacer merienda",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "ocó",
    "spa": "doler",
    "rarNo": "oco",
    "spaNo": "doler",
    "tags": [
      "verbo",
      "medicina"
    ]
  },
  {
    "rar": "ocorá",
    "spa": "tiene dolor",
    "rarNo": "ocora",
    "spaNo": "tiene dolor",
    "tags": [
      "adjetivo",
      "medicina"
    ]
  },
  {
    "rar": "ocó",
    "spa": "pino",
    "rarNo": "oco",
    "spaNo": "pino",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "ocochí",
    "spa": "dormir",
    "rarNo": "ocochi",
    "spaNo": "dormir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ocuá",
    "spa": "dos",
    "rarNo": "ocua",
    "spaNo": "dos",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "ocuá",
    "spa": "de - desde",
    "rarNo": "ocua",
    "spaNo": "de - desde",
    "tags": []
  },
  {
    "rar": "ocuánica",
    "spa": "ambos",
    "rarNo": "ocuanica",
    "spaNo": "ambos",
    "tags": []
  },
  {
    "rar": "ocubá",
    "spa": "estar plano",
    "rarNo": "ocuba",
    "spaNo": "estar plano",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ochébana ",
    "spa": "criar",
    "rarNo": "ochebana ",
    "spaNo": "criar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ochéi",
    "spa": "tener huesos",
    "rarNo": "ochei",
    "spaNo": "tener huesos",
    "tags": [
      "verbo",
      "medicina"
    ]
  },
  {
    "rar": "ochera",
    "spa": "crecer",
    "rarNo": "ochera",
    "spaNo": "crecer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ochera",
    "spa": "envejecer",
    "rarNo": "ochera",
    "spaNo": "envejecer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ochera aní",
    "spa": "tiene hipo",
    "rarNo": "ochera ani",
    "spaNo": "tiene hipo",
    "tags": [
      "verbo",
      "medicina"
    ]
  },
  {
    "rar": "ochérami",
    "spa": "viejos - ancianos",
    "rarNo": "ocherami",
    "spaNo": "viejos - ancianos",
    "tags": []
  },
  {
    "rar": "ochérami",
    "spa": "viejo",
    "rarNo": "ocherami",
    "spaNo": "viejo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ochí",
    "spa": "hueso",
    "rarNo": "ochi",
    "spaNo": "hueso",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "ochícari",
    "spa": "abuelo paterno",
    "rarNo": "ochicari",
    "spaNo": "abuelo paterno",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "ochícari",
    "spa": "nieto",
    "rarNo": "ochicari",
    "spaNo": "nieto",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "ochobé",
    "spa": "chamuscar",
    "rarNo": "ochobe",
    "spaNo": "chamuscar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ochobeta",
    "spa": "quemarse por el sol",
    "rarNo": "ochobeta",
    "spaNo": "quemarse por el sol",
    "tags": []
  },
  {
    "rar": "ochoréami",
    "spa": "mugriento",
    "rarNo": "ochoreami",
    "spaNo": "mugriento",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ochorí",
    "spa": "barro",
    "rarNo": "ochori",
    "spaNo": "barro",
    "tags": []
  },
  {
    "rar": "ohuá",
    "spa": "flecha",
    "rarNo": "ohua",
    "spaNo": "flecha",
    "tags": []
  },
  {
    "rar": "ohua",
    "spa": "curar",
    "rarNo": "ohua",
    "spaNo": "curar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ohuáami",
    "spa": "medicina - remedio",
    "rarNo": "ohuaami",
    "spaNo": "medicina - remedio",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "o'huari",
    "spa": "grande",
    "rarNo": "o'huari",
    "spaNo": "grande",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ohuí",
    "spa": "invitar",
    "rarNo": "ohui",
    "spaNo": "invitar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "o'huibichi",
    "spa": "zurdo",
    "rarNo": "o'huibichi",
    "spaNo": "zurdo",
    "tags": []
  },
  {
    "rar": "o'huicha",
    "spa": "levantarse",
    "rarNo": "o'huicha",
    "spaNo": "levantarse",
    "tags": []
  },
  {
    "rar": "cu o'huína",
    "spa": "resucitar",
    "rarNo": "cu o'huina",
    "spaNo": "resucitar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "o'huina",
    "spa": "comenzar",
    "rarNo": "o'huina",
    "spaNo": "comenzar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "o'huiná",
    "spa": "izquierdo",
    "rarNo": "o'huina",
    "spaNo": "izquierdo",
    "tags": []
  },
  {
    "rar": "o'huiqué",
    "spa": "respetar - obedecer",
    "rarNo": "o'huique",
    "spaNo": "respetar - obedecer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "o'huiqué",
    "spa": "dar comida ",
    "rarNo": "o'huique",
    "spaNo": "dar comida ",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "ojuí",
    "spa": "oso",
    "rarNo": "ojui",
    "spaNo": "oso",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "omá",
    "spa": "también - con - juntos",
    "rarNo": "oma",
    "spaNo": "tambien - con - juntos",
    "tags": []
  },
  {
    "rar": "o'máana",
    "spa": "en todas partes",
    "rarNo": "o'maana",
    "spaNo": "en todas partes",
    "tags": []
  },
  {
    "rar": "omahua",
    "spa": "hacer fiesta",
    "rarNo": "omahua",
    "spaNo": "hacer fiesta",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "omohuárahuachi",
    "spa": "día de fiesta",
    "rarNo": "omohuarahuachi",
    "spaNo": "dia de fiesta",
    "tags": []
  },
  {
    "rar": "omáhuari",
    "spa": "fiesta",
    "rarNo": "omahuari",
    "spaNo": "fiesta",
    "tags": []
  },
  {
    "rar": "oméachi",
    "spa": "domingo",
    "rarNo": "omeachi",
    "spaNo": "domingo",
    "tags": [
      "día de la semana"
    ]
  },
  {
    "rar": "omeba",
    "spa": "vencer",
    "rarNo": "omeba",
    "spaNo": "vencer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "omée",
    "spa": "estar dificil",
    "rarNo": "omee",
    "spaNo": "estar dificil",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "omérahuami",
    "spa": "poder",
    "rarNo": "omerahuami",
    "spaNo": "poder",
    "tags": []
  },
  {
    "rar": "omériami",
    "spa": "poderoso",
    "rarNo": "omeriami",
    "spaNo": "poderoso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "omero ",
    "spa": "poder",
    "rarNo": "omero ",
    "spaNo": "poder",
    "tags": []
  },
  {
    "rar": "o'mona",
    "spa": "estar triste",
    "rarNo": "o'mona",
    "spaNo": "estar triste",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "o0mónami ",
    "spa": "triste",
    "rarNo": "o0monami ",
    "spaNo": "triste",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "o'nami",
    "spa": "doctor - médico",
    "rarNo": "o'nami",
    "spaNo": "doctor - medico",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "oné",
    "spa": "tener padre",
    "rarNo": "one",
    "spaNo": "tener padre",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "onorúami",
    "spa": "padre (de la hija)",
    "rarNo": "onoruami",
    "spaNo": "padre (de la hija)",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "onó",
    "spa": "estar enojado",
    "rarNo": "ono",
    "spaNo": "estar enojado",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "onorúami",
    "spa": "Dios Padre",
    "rarNo": "onoruami",
    "spaNo": "Dios Padre",
    "tags": []
  },
  {
    "rar": "opesi",
    "spa": "vomitar",
    "rarNo": "opesi",
    "spaNo": "vomitar",
    "tags": [
      "verbo",
      "medicina"
    ]
  },
  {
    "rar": "opó",
    "spa": "arrancar - sacar",
    "rarNo": "opo",
    "spaNo": "arrancar - sacar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "opoáami",
    "spa": "hueco",
    "rarNo": "opoaami",
    "spaNo": "hueco",
    "tags": []
  },
  {
    "rar": "opochi",
    "spa": "tía",
    "rarNo": "opochi",
    "spaNo": "tia",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "orá",
    "spa": "hacer - obrar",
    "rarNo": "ora",
    "spaNo": "hacer - obrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "oroyá",
    "spa": "haciéndolo",
    "rarNo": "oroya",
    "spaNo": "haciendolo",
    "tags": []
  },
  {
    "rar": "orá",
    "spa": "tener filo",
    "rarNo": "ora",
    "spaNo": "tener filo",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "oráami",
    "spa": "afilado",
    "rarNo": "oraami",
    "spaNo": "afilado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "orara",
    "spa": "afilar",
    "rarNo": "orara",
    "spaNo": "afilar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "orari ",
    "spa": "quiso (de querer)",
    "rarNo": "orari ",
    "spaNo": "quiso (de querer)",
    "tags": []
  },
  {
    "rar": "oré",
    "spa": "huella",
    "rarNo": "ore",
    "spaNo": "huella",
    "tags": []
  },
  {
    "rar": "o'rí",
    "spa": "español",
    "rarNo": "o'ri",
    "spaNo": "espanol",
    "tags": []
  },
  {
    "rar": "o'rí",
    "spa": "tambalearse",
    "rarNo": "o'ri",
    "spaNo": "tambalearse",
    "tags": []
  },
  {
    "rar": "orí",
    "spa": "hacer así",
    "rarNo": "ori",
    "spaNo": "hacer asi",
    "tags": []
  },
  {
    "rar": "o'rina",
    "spa": "ladear",
    "rarNo": "o'rina",
    "spaNo": "ladear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "o'rina",
    "spa": "quebrar",
    "rarNo": "o'rina",
    "spaNo": "quebrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "osá",
    "spa": "escribir",
    "rarNo": "osa",
    "spaNo": "escribir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "osá",
    "spa": "segundo",
    "rarNo": "osa",
    "spaNo": "segundo",
    "tags": []
  },
  {
    "rar": "osá macoy",
    "spa": "veinte",
    "rarNo": "osa macoy",
    "spaNo": "veinte",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "osá nahuó",
    "spa": "ocho",
    "rarNo": "osa nahuo",
    "spaNo": "ocho",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "osa nahuosa macoy",
    "spa": "ochenta",
    "rarNo": "osa nahuosa macoy",
    "spaNo": "ochenta",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "osé",
    "spa": "escribir",
    "rarNo": "ose",
    "spaNo": "escribir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "oserí",
    "spa": "papel - carta",
    "rarNo": "oseri",
    "spaNo": "papel - carta",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "oserí 'nena",
    "spa": "leer",
    "rarNo": "oseri 'nena",
    "spaNo": "leer",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "oserí osé",
    "spa": "levantar un acta",
    "rarNo": "oseri ose",
    "spaNo": "levantar un acta",
    "tags": []
  },
  {
    "rar": "otérami",
    "spa": "muela",
    "rarNo": "oterami",
    "spaNo": "muela",
    "tags": [
      "parte del cuerpo",
      "medicina"
    ]
  },
  {
    "rar": "otobé",
    "spa": "canasta grande",
    "rarNo": "otobe",
    "spaNo": "canasta grande",
    "tags": []
  },
  {
    "rar": "otohuá",
    "spa": "rama grande",
    "rarNo": "otohua",
    "spaNo": "rama grande",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "otoná",
    "spa": "derecho",
    "rarNo": "otona",
    "spaNo": "derecho",
    "tags": []
  },
  {
    "rar": "óyami",
    "spa": "curandero - médico",
    "rarNo": "oyami",
    "spaNo": "curandero - medico",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "oyera",
    "spa": "regañar",
    "rarNo": "oyera",
    "spaNo": "reganar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "oyera",
    "spa": "dar consejos",
    "rarNo": "oyera",
    "spaNo": "dar consejos",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "oyera",
    "spa": "llamar la atención",
    "rarNo": "oyera",
    "spaNo": "llamar la atencion",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "o'yó",
    "spa": "vomitar ",
    "rarNo": "o'yo",
    "spaNo": "vomitar ",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "o'yona",
    "spa": "tener ganas de vomitar",
    "rarNo": "o'yona",
    "spaNo": "tener ganas de vomitar",
    "tags": []
  },
  {
    "rar": "pe o'yó",
    "spa": "poco a poco",
    "rarNo": "pe o'yo",
    "spaNo": "poco a poco",
    "tags": []
  },
  {
    "rar": "pa",
    "spa": "traer",
    "rarNo": "pa",
    "spaNo": "traer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pa",
    "spa": "tirar - echar",
    "rarNo": "pa",
    "spaNo": "tirar - echar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "paayé",
    "spa": "arriba",
    "rarNo": "paaye",
    "spaNo": "arriba",
    "tags": []
  },
  {
    "rar": "pabaca",
    "spa": "lavar",
    "rarNo": "pabaca",
    "spaNo": "lavar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pabera ",
    "spa": "acarrear en la espalda",
    "rarNo": "pabera ",
    "spaNo": "acarrear en la espalda",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "paca",
    "spa": "colar",
    "rarNo": "paca",
    "spaNo": "colar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pachá",
    "spa": "adentro",
    "rarNo": "pacha",
    "spaNo": "adentro",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "ri're pachá",
    "spa": "debajo",
    "rarNo": "ri're pacha",
    "spaNo": "debajo",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "pachá bachá",
    "spa": "meter",
    "rarNo": "pacha bacha",
    "spaNo": "meter",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pachá bachara encarcelar",
    "spa": "",
    "rarNo": "pacha bachara encarcelar",
    "spaNo": "",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pachí",
    "spa": "elote",
    "rarNo": "pachi",
    "spaNo": "elote",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "pachoca",
    "spa": "remendar",
    "rarNo": "pachoca",
    "spaNo": "remendar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pachú",
    "spa": "gotear",
    "rarNo": "pachu",
    "spaNo": "gotear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pagó",
    "spa": "lavar",
    "rarNo": "pago",
    "spaNo": "lavar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pagó",
    "spa": "bautizar",
    "rarNo": "pago",
    "spaNo": "bautizar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pagóami",
    "spa": "el que bautiza",
    "rarNo": "pagoami",
    "spaNo": "el que bautiza",
    "tags": []
  },
  {
    "rar": "pagónara",
    "spa": "el día anterior",
    "rarNo": "pagonara",
    "spaNo": "el dia anterior",
    "tags": []
  },
  {
    "rar": "pagótami ",
    "spa": "gente",
    "rarNo": "pagotami ",
    "spaNo": "gente",
    "tags": []
  },
  {
    "rar": "pagué",
    "spa": "remojar",
    "rarNo": "pague",
    "spaNo": "remojar",
    "tags": []
  },
  {
    "rar": "pánara ",
    "spa": "querer traer",
    "rarNo": "panara ",
    "spaNo": "querer traer",
    "tags": []
  },
  {
    "rar": "pasá",
    "spa": "echar - tirar",
    "rarNo": "pasa",
    "spaNo": "echar - tirar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pasó",
    "spa": "remojar",
    "rarNo": "paso",
    "spaNo": "remojar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pasochi",
    "spa": "zorrillo",
    "rarNo": "pasochi",
    "spaNo": "zorrillo",
    "tags": []
  },
  {
    "rar": "payéhuachi",
    "spa": "zanja",
    "rarNo": "payehuachi",
    "spaNo": "zanja",
    "tags": []
  },
  {
    "rar": "pe",
    "spa": "poco",
    "rarNo": "pe",
    "spaNo": "poco",
    "tags": []
  },
  {
    "rar": "pe ocuá",
    "spa": "pocos",
    "rarNo": "pe ocua",
    "spaNo": "pocos",
    "tags": []
  },
  {
    "rar": "pebi",
    "spa": "muy poco",
    "rarNo": "pebi",
    "spaNo": "muy poco",
    "tags": []
  },
  {
    "rar": "pe táa",
    "spa": "poquito",
    "rarNo": "pe taa",
    "spaNo": "poquito",
    "tags": []
  },
  {
    "rar": "pe risensi",
    "spa": "por favor",
    "rarNo": "pe risensi",
    "spaNo": "por favor",
    "tags": []
  },
  {
    "rar": "pe téeri",
    "spa": "chaparro",
    "rarNo": "pe teeri",
    "spaNo": "chaparro",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "pe téeri",
    "spa": "un rato",
    "rarNo": "pe teeri",
    "spaNo": "un rato",
    "tags": []
  },
  {
    "rar": "pe téeri ripí",
    "spa": "demora",
    "rarNo": "pe teeri ripi",
    "spaNo": "demora",
    "tags": []
  },
  {
    "rar": "péebi",
    "spa": "poquito",
    "rarNo": "peebi",
    "spaNo": "poquito",
    "tags": []
  },
  {
    "rar": "péebi ratáami ",
    "spa": "tibio",
    "rarNo": "peebi rataami ",
    "spaNo": "tibio",
    "tags": []
  },
  {
    "rar": "pehua",
    "spa": "fiumar",
    "rarNo": "pehua",
    "spaNo": "fiumar",
    "tags": []
  },
  {
    "rar": "péhuari",
    "spa": "cigarro",
    "rarNo": "pehuari",
    "spaNo": "cigarro",
    "tags": []
  },
  {
    "rar": "pénama",
    "spa": "aprenderé",
    "rarNo": "penama",
    "spaNo": "aprendere",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "pénami",
    "spa": "que puede aprender",
    "rarNo": "penami",
    "spaNo": "que puede aprender",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "perí",
    "spa": "petate",
    "rarNo": "peri",
    "spaNo": "petate",
    "tags": []
  },
  {
    "rar": "pericó",
    "spa": "por favor",
    "rarNo": "perico",
    "spaNo": "por favor",
    "tags": []
  },
  {
    "rar": "pibá",
    "spa": "zambullirse",
    "rarNo": "piba",
    "spaNo": "zambullirse",
    "tags": []
  },
  {
    "rar": "pibíiri",
    "spa": "remolino",
    "rarNo": "pibiiri",
    "spaNo": "remolino",
    "tags": []
  },
  {
    "rar": "piché",
    "spa": "hasta",
    "rarNo": "piche",
    "spaNo": "hasta",
    "tags": []
  },
  {
    "rar": "ba'arí piché",
    "spa": "hasta mañana",
    "rarNo": "ba'ari piche",
    "spaNo": "hasta manana",
    "tags": []
  },
  {
    "rar": "pichí",
    "spa": "barrer",
    "rarNo": "pichi",
    "spaNo": "barrer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pichira",
    "spa": "escoba",
    "rarNo": "pichira",
    "spaNo": "escoba",
    "tags": []
  },
  {
    "rar": "pihuácami",
    "spa": "fumador",
    "rarNo": "pihuacami",
    "spaNo": "fumador",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "píhui",
    "spa": "remoler",
    "rarNo": "pihui",
    "spaNo": "remoler",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pioni",
    "spa": "peón",
    "rarNo": "pioni",
    "spaNo": "peon",
    "tags": []
  },
  {
    "rar": "piré",
    "spa": "vivir - habitar",
    "rarNo": "pire",
    "spaNo": "vivir - habitar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "piri",
    "spa": "¿qué?",
    "rarNo": "piri",
    "spaNo": "¿que?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "piri ju",
    "spa": "¿qué es?",
    "rarNo": "piri ju",
    "spaNo": "¿que es?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "pochí",
    "spa": "brincar",
    "rarNo": "pochi",
    "spaNo": "brincar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pora",
    "spa": "cubrir - tapar",
    "rarNo": "pora",
    "spaNo": "cubrir - tapar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "porapa",
    "spa": "destapar",
    "rarNo": "porapa",
    "spaNo": "destapar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "posá",
    "spa": "llenarse comiendo",
    "rarNo": "posa",
    "spaNo": "llenarse comiendo",
    "tags": []
  },
  {
    "rar": "poyaca",
    "spa": "desabrido",
    "rarNo": "poyaca",
    "spaNo": "desabrido",
    "tags": [
      "sabor"
    ]
  },
  {
    "rar": "pu'",
    "spa": "faisán",
    "rarNo": "pu'",
    "spaNo": "faisan",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "pucha",
    "spa": "soplar",
    "rarNo": "pucha",
    "spaNo": "soplar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "pura",
    "spa": "cinturón - faja",
    "rarNo": "pura",
    "spaNo": "cinturon - faja",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "qué",
    "spa": "fue - era - siendo",
    "rarNo": "que",
    "spaNo": "fue - era - siendo",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "que",
    "spa": "hija grande",
    "rarNo": "que",
    "spaNo": "hija grande",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "queba",
    "spa": "retumbar",
    "rarNo": "queba",
    "spaNo": "retumbar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "quecha",
    "spa": "masticar",
    "rarNo": "quecha",
    "spaNo": "masticar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "quemi",
    "spa": "tuyo",
    "rarNo": "quemi",
    "spaNo": "tuyo",
    "tags": [
      "pronombre posesivo"
    ]
  },
  {
    "rar": "queni",
    "spa": "mío - mía - mi - mis",
    "rarNo": "queni",
    "spaNo": "mio - mia - mi - mis",
    "tags": [
      "pronombre posesivo"
    ]
  },
  {
    "rar": "quepu",
    "spa": "su - sus",
    "rarNo": "quepu",
    "spaNo": "su - sus",
    "tags": [
      "pronombre posesivo"
    ]
  },
  {
    "rar": "quere",
    "spa": "quizá - tal vez",
    "rarNo": "quere",
    "spaNo": "quiza - tal vez",
    "tags": []
  },
  {
    "rar": "queta",
    "spa": "nuestro - nuestra",
    "rarNo": "queta",
    "spaNo": "nuestro - nuestra",
    "tags": [
      "pronombre posesivo"
    ]
  },
  {
    "rar": "quétamo",
    "spa": "su - sus",
    "rarNo": "quetamo",
    "spaNo": "su - sus",
    "tags": [
      "pronombre posesivo"
    ]
  },
  {
    "rar": "quetasi",
    "spa": "no",
    "rarNo": "quetasi",
    "spaNo": "no",
    "tags": []
  },
  {
    "rar": "quicháo",
    "spa": "siete",
    "rarNo": "quichao",
    "spaNo": "siete",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "quicháosa",
    "spa": "séptimo",
    "rarNo": "quichaosa",
    "spaNo": "septimo",
    "tags": []
  },
  {
    "rar": "quicháosa macoy",
    "spa": "setenta",
    "rarNo": "quichaosa macoy",
    "spaNo": "setenta",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "quichí",
    "spa": "aborrecer",
    "rarNo": "quichi",
    "spaNo": "aborrecer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "qui'huí",
    "spa": "traer leña",
    "rarNo": "qui'hui",
    "spaNo": "traer lena",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "quimá",
    "spa": "cobija",
    "rarNo": "quima",
    "spaNo": "cobija",
    "tags": []
  },
  {
    "rar": "químacoy",
    "spa": "nueve",
    "rarNo": "quimacoy",
    "spaNo": "nueve",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "quimacoysa",
    "spa": "noveno",
    "rarNo": "quimacoysa",
    "spaNo": "noveno",
    "tags": []
  },
  {
    "rar": "quimacoysa macoy",
    "spa": "noventa",
    "rarNo": "quimacoysa macoy",
    "spaNo": "noventa",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "quimé",
    "spa": "tener cobija",
    "rarNo": "quime",
    "spaNo": "tener cobija",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "quimira",
    "spa": "sábana",
    "rarNo": "quimira",
    "spaNo": "sabana",
    "tags": []
  },
  {
    "rar": "qui'mo",
    "spa": "morder",
    "rarNo": "qui'mo",
    "spaNo": "morder",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "quiná",
    "spa": "acá - por acá",
    "rarNo": "quina",
    "spaNo": "aca - por aca",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "quipá",
    "spa": "nevar",
    "rarNo": "quipa",
    "spaNo": "nevar",
    "tags": [
      "verbo",
      "naturaleza"
    ]
  },
  {
    "rar": "quiparí",
    "spa": "nieve",
    "rarNo": "quipari",
    "spaNo": "nieve",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "quipú",
    "spa": "escuchar",
    "rarNo": "quipu",
    "spaNo": "escuchar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "quipu",
    "spa": "¿Cuánto?",
    "rarNo": "quipu",
    "spaNo": "¿Cuanto?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "quirá",
    "spa": "calmarse",
    "rarNo": "quira",
    "spaNo": "calmarse",
    "tags": []
  },
  {
    "rar": "quirá",
    "spa": "hija",
    "rarNo": "quira",
    "spaNo": "hija",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "qui'raca",
    "spa": "crujir los dientes",
    "rarNo": "qui'raca",
    "spaNo": "crujir los dientes",
    "tags": []
  },
  {
    "rar": "quirí",
    "spa": "quieto - silencio",
    "rarNo": "quiri",
    "spaNo": "quieto - silencio",
    "tags": []
  },
  {
    "rar": "asagá",
    "spa": "cállate",
    "rarNo": "asaga",
    "spaNo": "callate",
    "tags": []
  },
  {
    "rar": "quirí niráa",
    "spa": "poco a poco",
    "rarNo": "quiri niraa",
    "spaNo": "poco a poco",
    "tags": []
  },
  {
    "rar": "rabó",
    "spa": "cerro - cordillera",
    "rarNo": "rabo",
    "spaNo": "cerro - cordillera",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "rabota",
    "spa": "tener calambre",
    "rarNo": "rabota",
    "spaNo": "tener calambre",
    "tags": [
      "verbo",
      "medicina"
    ]
  },
  {
    "rar": "rabótami",
    "spa": "entumido",
    "rarNo": "rabotami",
    "spaNo": "entumido",
    "tags": []
  },
  {
    "rar": "racá",
    "spa": "semilla",
    "rarNo": "raca",
    "spaNo": "semilla",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "rachí",
    "spa": "aplastarse",
    "rarNo": "rachi",
    "spaNo": "aplastarse",
    "tags": []
  },
  {
    "rar": "rachina",
    "spa": "aplastar",
    "rarNo": "rachina",
    "spaNo": "aplastar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ra'e",
    "spa": "conocer (lugar)",
    "rarNo": "ra'e",
    "spaNo": "conocer (lugar)",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rahuá",
    "spa": "ligamento",
    "rarNo": "rahua",
    "spaNo": "ligamento",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "rahué",
    "spa": "día",
    "rarNo": "rahue",
    "spaNo": "dia",
    "tags": []
  },
  {
    "rar": "rahué",
    "spa": "pecho",
    "rarNo": "rahue",
    "spaNo": "pecho",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "rahué",
    "spa": "volver",
    "rarNo": "rahue",
    "spaNo": "volver",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nijé rahuira",
    "spa": "mi pecho",
    "rarNo": "nije rahuira",
    "spaNo": "mi pecho",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "rahuihui",
    "spa": "gavilán",
    "rarNo": "rahuihui",
    "spaNo": "gavilan",
    "tags": []
  },
  {
    "rar": "rahuirí",
    "spa": "mediodía",
    "rarNo": "rahuiri",
    "spaNo": "mediodia",
    "tags": []
  },
  {
    "rar": "ra'íami",
    "spa": "que tiene apetito",
    "rarNo": "ra'iami",
    "spaNo": "que tiene apetito",
    "tags": []
  },
  {
    "rar": "ra'icha",
    "spa": "hablar - platicar",
    "rarNo": "ra'icha",
    "spaNo": "hablar - platicar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ra'ama",
    "spa": "reprender - prohibir",
    "rarNo": "ra'ama",
    "spaNo": "reprender - prohibir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ra'íchami",
    "spa": "hablador",
    "rarNo": "ra'ichami",
    "spaNo": "hablador",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ra'ichárami",
    "spa": "idioma",
    "rarNo": "ra'icharami",
    "spaNo": "idioma",
    "tags": []
  },
  {
    "rar": "ra'íchari",
    "spa": "palabra",
    "rarNo": "ra'ichari",
    "spaNo": "palabra",
    "tags": []
  },
  {
    "rar": "ra'ihuá",
    "spa": "gustar (comida)",
    "rarNo": "ra'ihua",
    "spaNo": "gustar (comida)",
    "tags": [
      "verbo",
      "alimento"
    ]
  },
  {
    "rar": "rajá",
    "spa": "alumbrar - arder - quemar",
    "rarNo": "raja",
    "spaNo": "alumbrar - arder - quemar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rajáami",
    "spa": "ardiente",
    "rarNo": "rajaami",
    "spaNo": "ardiente",
    "tags": []
  },
  {
    "rar": "rajamó",
    "spa": "peñasco",
    "rarNo": "rajamo",
    "spaNo": "penasco",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "rajé",
    "spa": "iluminar",
    "rarNo": "raje",
    "spaNo": "iluminar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rajirí",
    "spa": "vela",
    "rarNo": "rajiri",
    "spaNo": "vela",
    "tags": []
  },
  {
    "rar": "ra'lá",
    "spa": "derramarse",
    "rarNo": "ra'la",
    "spaNo": "derramarse",
    "tags": []
  },
  {
    "rar": "ra'lana",
    "spa": "extender - exparcir",
    "rarNo": "ra'lana",
    "spaNo": "extender - exparcir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ramé",
    "spa": "diente",
    "rarNo": "rame",
    "spaNo": "diente",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "ramé otéramachi jáhuami",
    "spa": "muela",
    "rarNo": "rame oteramachi jahuami",
    "spaNo": "muela",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "ramú",
    "spa": "ponerse negro por un golpe",
    "rarNo": "ramu",
    "spaNo": "ponerse negro por un golpe",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "raná",
    "spa": "parir",
    "rarNo": "rana",
    "spaNo": "parir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "raná",
    "spa": "hijo",
    "rarNo": "rana",
    "spaNo": "hijo",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "ra'náchani",
    "spa": "sonar",
    "rarNo": "ra'nachani",
    "spaNo": "sonar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ran'né",
    "spa": "disparar",
    "rarNo": "ran'ne",
    "spaNo": "disparar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ranné",
    "spa": "tener hijo",
    "rarNo": "ranne",
    "spaNo": "tener hijo",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "tanéami",
    "spa": "que tiene hijos",
    "rarNo": "taneami",
    "spaNo": "que tiene hijos",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "ranícuri",
    "spa": "talón",
    "rarNo": "ranicuri",
    "spaNo": "talon",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "echo'ná ranícuchi",
    "spa": "le duele su talón",
    "rarNo": "echo'na ranicuchi",
    "spaNo": "le duele su talon",
    "tags": [
      "parte del cuerpo",
      "medicina"
    ]
  },
  {
    "rar": "ra'oa",
    "spa": "agacharse",
    "rarNo": "ra'oa",
    "spaNo": "agacharse",
    "tags": []
  },
  {
    "rar": "rapá",
    "spa": "rajarse - partirse",
    "rarNo": "rapa",
    "spaNo": "rajarse - partirse",
    "tags": []
  },
  {
    "rar": "rapana",
    "spa": "rajar - partir",
    "rarNo": "rapana",
    "spaNo": "rajar - partir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "raoaci",
    "spa": "ayer",
    "rarNo": "raoaci",
    "spaNo": "ayer",
    "tags": []
  },
  {
    "rar": "rapárachi",
    "spa": "rendija",
    "rarNo": "raparachi",
    "spaNo": "rendija",
    "tags": []
  },
  {
    "rar": "rapirá",
    "spa": "rebanar",
    "rarNo": "rapira",
    "spaNo": "rebanar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rapirátachi",
    "spa": "patio",
    "rarNo": "rapiratachi",
    "spaNo": "patio",
    "tags": []
  },
  {
    "rar": "raquibú",
    "spa": "empujar",
    "rarNo": "raquibu",
    "spaNo": "empujar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rará",
    "spa": "comprar",
    "rarNo": "rara",
    "spaNo": "comprar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "raráami",
    "spa": "comprador",
    "rarNo": "raraami",
    "spaNo": "comprador",
    "tags": []
  },
  {
    "rar": "rará",
    "spa": "pie",
    "rarNo": "rara",
    "spaNo": "pie",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "ra'rana",
    "spa": "desparramar - extender",
    "rarNo": "ra'rana",
    "spaNo": "desparramar - extender",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "raramú",
    "spa": "caer un rayo",
    "rarNo": "raramu",
    "spaNo": "caer un rayo",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rarámuri",
    "spa": "tarahumara - gente",
    "rarNo": "raramuri",
    "spaNo": "tarahumara - gente",
    "tags": []
  },
  {
    "rar": "rarámuri niráa uchucha",
    "spa": "interpretar - traducir al tarahumara",
    "rarNo": "raramuri niraa uchucha",
    "spaNo": "interpretar - traducir al tarahumara",
    "tags": []
  },
  {
    "rar": "rarámuri ra'ícharara",
    "spa": "idioma tarahumara",
    "rarNo": "raramuri ra'icharara",
    "spaNo": "idioma tarahumara",
    "tags": []
  },
  {
    "rar": "rarinéa",
    "spa": "vender",
    "rarNo": "rarinea",
    "spaNo": "vender",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rasá",
    "spa": "machucarse",
    "rarNo": "rasa",
    "spaNo": "machucarse",
    "tags": []
  },
  {
    "rar": "rasáami",
    "spa": "blando",
    "rarNo": "rasaami",
    "spaNo": "blando",
    "tags": []
  },
  {
    "rar": "rasana",
    "spa": "machucarse",
    "rarNo": "rasana",
    "spaNo": "machucarse",
    "tags": []
  },
  {
    "rar": "rasíami",
    "spa": "desobediente",
    "rarNo": "rasiami",
    "spaNo": "desobediente",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "rasiba",
    "spa": "oxidarse",
    "rarNo": "rasiba",
    "spaNo": "oxidarse",
    "tags": []
  },
  {
    "rar": "rasícari",
    "spa": "ligamentos de la rodilla",
    "rarNo": "rasicari",
    "spaNo": "ligamentos de la rodilla",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "rasó",
    "spa": "desulmbrar",
    "rarNo": "raso",
    "spaNo": "desulmbrar",
    "tags": []
  },
  {
    "rar": "rasuca",
    "spa": "calentarse al sol",
    "rarNo": "rasuca",
    "spaNo": "calentarse al sol",
    "tags": []
  },
  {
    "rar": "ratá",
    "spa": "hacer calor",
    "rarNo": "rata",
    "spaNo": "hacer calor",
    "tags": []
  },
  {
    "rar": "ratá",
    "spa": "disparar con un rifle",
    "rarNo": "rata",
    "spaNo": "disparar con un rifle",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rataba",
    "spa": "relumbrar - brillar mucho",
    "rarNo": "rataba",
    "spaNo": "relumbrar - brillar mucho",
    "tags": []
  },
  {
    "rar": "ratabáachi",
    "spa": "cuando hace calor",
    "rarNo": "ratabaachi",
    "spaNo": "cuando hace calor",
    "tags": []
  },
  {
    "rar": "ratabacha",
    "spa": "calentar",
    "rarNo": "ratabacha",
    "spaNo": "calentar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ratábami",
    "spa": "brillante",
    "rarNo": "ratabami",
    "spaNo": "brillante",
    "tags": []
  },
  {
    "rar": "ratara",
    "spa": "tener calentura - fiebre",
    "rarNo": "ratara",
    "spaNo": "tener calentura - fiebre",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "raté",
    "spa": "tío - tía - primo - prima",
    "rarNo": "rate",
    "spaNo": "tio - tia - primo - prima",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "rayena ",
    "spa": "hacer sol",
    "rarNo": "rayena ",
    "spaNo": "hacer sol",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "rayénari",
    "spa": "el sol",
    "rarNo": "rayenari",
    "spaNo": "el sol",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "ricamuchi",
    "spa": "comadreja",
    "rarNo": "ricamuchi",
    "spaNo": "comadreja",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "ricóchari",
    "spa": "pedernal",
    "rarNo": "ricochari",
    "spaNo": "pedernal",
    "tags": []
  },
  {
    "rar": "ricomarí",
    "spa": "frijol",
    "rarNo": "ricomari",
    "spaNo": "frijol",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "ricú",
    "spa": "emborracharse",
    "rarNo": "ricu",
    "spaNo": "emborracharse",
    "tags": []
  },
  {
    "rar": "ricuchuri",
    "spa": "grillo",
    "rarNo": "ricuchuri",
    "spaNo": "grillo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "ricurí",
    "spa": "borracho",
    "rarNo": "ricuri",
    "spaNo": "borracho",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ri'é",
    "spa": "jugar",
    "rarNo": "ri'e",
    "spaNo": "jugar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ri'echa",
    "spa": "malgastar - jugar",
    "rarNo": "ri'echa",
    "spaNo": "malgastar - jugar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rihuá",
    "spa": "nombre",
    "rarNo": "rihua",
    "spaNo": "nombre",
    "tags": []
  },
  {
    "rar": "rihuá",
    "spa": "ver - hallar",
    "rarNo": "rihua",
    "spaNo": "ver - hallar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ri'huá",
    "spa": "hacerse liso",
    "rarNo": "ri'hua",
    "spaNo": "hacerse liso",
    "tags": []
  },
  {
    "rar": "ri'huana",
    "spa": "alisar - aplanar - cepillar",
    "rarNo": "ri'huana",
    "spaNo": "alisar - aplanar - cepillar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rihuará",
    "spa": "nombrar",
    "rarNo": "rihuara",
    "spaNo": "nombrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rihué",
    "spa": "llamarse - tener nombre",
    "rarNo": "rihue",
    "spaNo": "llamarse - tener nombre",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rihuera",
    "spa": "tener vergüenza",
    "rarNo": "rihuera",
    "spaNo": "tener verguenza",
    "tags": []
  },
  {
    "rar": "rihuérata",
    "spa": "avergonzarse",
    "rarNo": "rihuerata",
    "spaNo": "avergonzarse",
    "tags": []
  },
  {
    "rar": "rihuí",
    "spa": "cuesta arriba",
    "rarNo": "rihui",
    "spaNo": "cuesta arriba",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "rihuí",
    "spa": "mostrarse",
    "rarNo": "rihui",
    "spaNo": "mostrarse",
    "tags": []
  },
  {
    "rar": "rihuinra",
    "spa": "mostrar",
    "rarNo": "rihuinra",
    "spaNo": "mostrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rihuisáa",
    "spa": "viéndolo",
    "rarNo": "rihuisaa",
    "spaNo": "viendolo",
    "tags": []
  },
  {
    "rar": "ri'í",
    "spa": "gemir - lanzar quejas",
    "rarNo": "ri'i",
    "spaNo": "gemir - lanzar quejas",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ri'ícami",
    "spa": "que se queja",
    "rarNo": "ri'icami",
    "spaNo": "que se queja",
    "tags": []
  },
  {
    "rar": "ri'ibú",
    "spa": "limpiar frijol",
    "rarNo": "ri'ibu",
    "spaNo": "limpiar frijol",
    "tags": [
      "verbo",
      "alimento"
    ]
  },
  {
    "rar": "ra'icha",
    "spa": "echarse a perder - desperdiciar",
    "rarNo": "ra'icha",
    "spaNo": "echarse a perder - desperdiciar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ra'íchani",
    "spa": "gemir - lanzar quejas",
    "rarNo": "ra'ichani",
    "spaNo": "gemir - lanzar quejas",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ri'iquéami",
    "spa": "jugador",
    "rarNo": "ri'iqueami",
    "spaNo": "jugador",
    "tags": []
  },
  {
    "rar": "ra'inana",
    "spa": "para arriba",
    "rarNo": "ra'inana",
    "spaNo": "para arriba",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "rijachi",
    "spa": "arroyo",
    "rarNo": "rijachi",
    "spaNo": "arroyo",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "rijata",
    "spa": "desgastarse",
    "rarNo": "rijata",
    "spaNo": "desgastarse",
    "tags": []
  },
  {
    "rar": "rijé",
    "spa": "granizo",
    "rarNo": "rije",
    "spaNo": "granizo",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "rijí",
    "spa": "mentar - poner apellido",
    "rarNo": "riji",
    "spaNo": "mentar - poner apellido",
    "tags": []
  },
  {
    "rar": "rijóara",
    "spa": "vivir allí",
    "rarNo": "rijoara",
    "spaNo": "vivir alli",
    "tags": []
  },
  {
    "rar": "acha rijóara echo'ná",
    "spa": "¿vive alguien allí?",
    "rarNo": "acha rijoara echo'na",
    "spaNo": "¿vive alguien alli?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "rijorá",
    "spa": "aguantar ",
    "rarNo": "rijora",
    "spaNo": "aguantar ",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rijoy",
    "spa": "hombre",
    "rarNo": "rijoy",
    "spaNo": "hombre",
    "tags": []
  },
  {
    "rar": "sihuará",
    "spa": "intestino",
    "rarNo": "sihuara",
    "spaNo": "intestino",
    "tags": [
      "parte del cuerpo",
      "medicina"
    ]
  },
  {
    "rar": "ri'marí",
    "spa": "joven",
    "rarNo": "ri'mari",
    "spaNo": "joven",
    "tags": []
  },
  {
    "rar": "rimé",
    "spa": "tortilla",
    "rarNo": "rime",
    "spaNo": "tortilla",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "rimério",
    "spa": "curandero - crucifijo",
    "rarNo": "rimerio",
    "spaNo": "curandero - crucifijo",
    "tags": []
  },
  {
    "rar": "rimó",
    "spa": "rana",
    "rarNo": "rimo",
    "spaNo": "rana",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rimú",
    "spa": "soñar",
    "rarNo": "rimu",
    "spaNo": "sonar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ri'ná",
    "spa": "nivelar",
    "rarNo": "ri'na",
    "spaNo": "nivelar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ri'ná",
    "spa": "boca arriba",
    "rarNo": "ri'na",
    "spaNo": "boca arriba",
    "tags": []
  },
  {
    "rar": "riná",
    "spa": "abrir la boca",
    "rarNo": "rina",
    "spaNo": "abrir la boca",
    "tags": []
  },
  {
    "rar": "ri'náami",
    "spa": "parejo",
    "rarNo": "ri'naami",
    "spaNo": "parejo",
    "tags": []
  },
  {
    "rar": "ri'nabuca",
    "spa": "al revés",
    "rarNo": "ri'nabuca",
    "spaNo": "al reves",
    "tags": []
  },
  {
    "rar": "ri'nahuí",
    "spa": "caerse",
    "rarNo": "ri'nahui",
    "spaNo": "caerse",
    "tags": []
  },
  {
    "rar": "ri'nará",
    "spa": "emparejar",
    "rarNo": "ri'nara",
    "spaNo": "emparejar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "riní",
    "spa": "boca arriba",
    "rarNo": "rini",
    "spaNo": "boca arriba",
    "tags": []
  },
  {
    "rar": "ri'obá",
    "spa": "iglesia - templo",
    "rarNo": "ri'oba",
    "spaNo": "iglesia - templo",
    "tags": []
  },
  {
    "rar": "riosi",
    "spa": "Dios Padre",
    "rarNo": "riosi",
    "spaNo": "Dios Padre",
    "tags": []
  },
  {
    "rar": "ripá",
    "spa": "arriba",
    "rarNo": "ripa",
    "spaNo": "arriba",
    "tags": []
  },
  {
    "rar": "ripabé",
    "spa": "muy alto o arriba",
    "rarNo": "ripabe",
    "spaNo": "muy alto o arriba",
    "tags": []
  },
  {
    "rar": "ripáami ju ",
    "spa": "está muy alto",
    "rarNo": "ripaami ju ",
    "spaNo": "esta muy alto",
    "tags": []
  },
  {
    "rar": "ripá",
    "spa": "rascar",
    "rarNo": "ripa",
    "spaNo": "rascar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ripá moba",
    "spa": "sobre - encima",
    "rarNo": "ripa moba",
    "spaNo": "sobre - encima",
    "tags": []
  },
  {
    "rar": "ripari",
    "spa": "para arriba",
    "rarNo": "ripari",
    "spaNo": "para arriba",
    "tags": []
  },
  {
    "rar": "ripata rabó",
    "spa": "loma",
    "rarNo": "ripata rabo",
    "spaNo": "loma",
    "tags": []
  },
  {
    "rar": "ripí",
    "spa": "quedar",
    "rarNo": "ripi",
    "spaNo": "quedar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ripiyá",
    "spa": "cuchillo",
    "rarNo": "ripiya",
    "spaNo": "cuchillo",
    "tags": []
  },
  {
    "rar": "ripopa",
    "spa": "espalda",
    "rarNo": "ripopa",
    "spaNo": "espalda",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "ripora",
    "spa": "despedir",
    "rarNo": "ripora",
    "spaNo": "despedir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ripú",
    "spa": "trozarse - cortarse",
    "rarNo": "ripu",
    "spaNo": "trozarse - cortarse",
    "tags": []
  },
  {
    "rar": "ripuca",
    "spa": "basura - abono",
    "rarNo": "ripuca",
    "spaNo": "basura - abono",
    "tags": []
  },
  {
    "rar": "ripuchí",
    "spa": "pulga",
    "rarNo": "ripuchi",
    "spaNo": "pulga",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "ripurá",
    "spa": "hacha",
    "rarNo": "ripura",
    "spaNo": "hacha",
    "tags": []
  },
  {
    "rar": "ripuna simira",
    "spa": "atravesar",
    "rarNo": "ripuna simira",
    "spaNo": "atravesar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "riqué",
    "spa": "pisar",
    "rarNo": "rique",
    "spaNo": "pisar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "riquina",
    "spa": "bajar",
    "rarNo": "riquina",
    "spaNo": "bajar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ri'ré",
    "spa": "abajo",
    "rarNo": "ri're",
    "spaNo": "abajo",
    "tags": []
  },
  {
    "rar": "riré huchí",
    "spa": "suelo",
    "rarNo": "rire huchi",
    "spaNo": "suelo",
    "tags": []
  },
  {
    "rar": "ri'rena",
    "spa": "por abajo",
    "rarNo": "ri'rena",
    "spaNo": "por abajo",
    "tags": []
  },
  {
    "rar": "ri'reque",
    "spa": "sur",
    "rarNo": "ri'reque",
    "spaNo": "sur",
    "tags": []
  },
  {
    "rar": "ri'rohui",
    "spa": "papas",
    "rarNo": "ri'rohui",
    "spaNo": "papas",
    "tags": []
  },
  {
    "rar": "rirú",
    "spa": "eructar",
    "rarNo": "riru",
    "spaNo": "eructar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rirú",
    "spa": "zumbar de un motor",
    "rarNo": "riru",
    "spaNo": "zumbar de un motor",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "risensi",
    "spa": "licencia - permiso",
    "rarNo": "risensi",
    "spaNo": "licencia - permiso",
    "tags": []
  },
  {
    "rar": "pe risénsia",
    "spa": "con permiso",
    "rarNo": "pe risensia",
    "spaNo": "con permiso",
    "tags": []
  },
  {
    "rar": "risénsia 'ya",
    "spa": "conceder - autorizar - permitir",
    "rarNo": "risensia 'ya",
    "spaNo": "conceder - autorizar - permitir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "risí ",
    "spa": "cansarse",
    "rarNo": "risi ",
    "spaNo": "cansarse",
    "tags": []
  },
  {
    "rar": "risira",
    "spa": "cansar",
    "rarNo": "risira",
    "spaNo": "cansar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "risirúami",
    "spa": "miserable - tacaño",
    "rarNo": "risiruami",
    "spaNo": "miserable - tacano",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "risó",
    "spa": "cueva",
    "rarNo": "riso",
    "spaNo": "cueva",
    "tags": []
  },
  {
    "rar": "risúati",
    "spa": "pobre",
    "rarNo": "risuati",
    "spaNo": "pobre",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "risúu",
    "spa": "sufrir",
    "rarNo": "risuu",
    "spaNo": "sufrir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "risúu aní",
    "spa": "quejarse",
    "rarNo": "risuu ani",
    "spaNo": "quejarse",
    "tags": []
  },
  {
    "rar": "rité",
    "spa": "patear",
    "rarNo": "rite",
    "spaNo": "patear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ritéami",
    "spa": "el que ve",
    "rarNo": "riteami",
    "spaNo": "el que ve",
    "tags": []
  },
  {
    "rar": "ritéena",
    "spa": "bostezar",
    "rarNo": "riteena",
    "spaNo": "bostezar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ritehuá",
    "spa": "ver - hallar",
    "rarNo": "ritehua",
    "spaNo": "ver - hallar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ritémahua",
    "spa": "hermanos",
    "rarNo": "ritemahua",
    "spaNo": "hermanos",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "ritú",
    "spa": "helarse",
    "rarNo": "ritu",
    "spaNo": "helarse",
    "tags": []
  },
  {
    "rar": "ritú",
    "spa": "mirar - admirar",
    "rarNo": "ritu",
    "spaNo": "mirar - admirar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "riyahui",
    "spa": "hay hierba",
    "rarNo": "riyahui",
    "spaNo": "hay hierba",
    "tags": []
  },
  {
    "rar": "ri'yónachi",
    "spa": "tronar",
    "rarNo": "ri'yonachi",
    "spaNo": "tronar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rocó",
    "spa": "estar hondo",
    "rarNo": "roco",
    "spaNo": "estar hondo",
    "tags": []
  },
  {
    "rar": "rocóami",
    "spa": "hondo",
    "rarNo": "rocoami",
    "spaNo": "hondo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "rocogó",
    "spa": "noche",
    "rarNo": "rocogo",
    "spaNo": "noche",
    "tags": []
  },
  {
    "rar": "rapaco rocogó",
    "spa": "anoche",
    "rarNo": "rapaco rocogo",
    "spaNo": "anoche",
    "tags": []
  },
  {
    "rar": "rocogó niráa",
    "spa": "de anoche",
    "rarNo": "rocogo niraa",
    "spaNo": "de anoche",
    "tags": []
  },
  {
    "rar": "rocohuárari",
    "spa": "obscuridad",
    "rarNo": "rocohuarari",
    "spaNo": "obscuridad",
    "tags": []
  },
  {
    "rar": "rocomíami",
    "spa": "cóncavo",
    "rarNo": "rocomiami",
    "spaNo": "concavo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "rocuahua",
    "spa": "obscurecerse",
    "rarNo": "rocuahua",
    "spaNo": "obscurecerse",
    "tags": []
  },
  {
    "rar": "rochá",
    "spa": "lagartija",
    "rarNo": "rocha",
    "spaNo": "lagartija",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rochí",
    "spa": "pez - pescado",
    "rarNo": "rochi",
    "spaNo": "pez - pescado",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rochorí",
    "spa": "codorniz",
    "rarNo": "rochori",
    "spaNo": "codorniz",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rohué",
    "spa": "atizar",
    "rarNo": "rohue",
    "spaNo": "atizar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ro'hué",
    "spa": "cultivar maíz",
    "rarNo": "ro'hue",
    "spaNo": "cultivar maiz",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rohuera ",
    "spa": "aro",
    "rarNo": "rohuera ",
    "spaNo": "aro",
    "tags": []
  },
  {
    "rar": "rohuí",
    "spa": "conejo",
    "rarNo": "rohui",
    "spaNo": "conejo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "ro'hupi",
    "spa": "dar vueltas ",
    "rarNo": "ro'hupi",
    "spaNo": "dar vueltas ",
    "tags": []
  },
  {
    "rar": "ro'huí",
    "spa": "arrepentirse",
    "rarNo": "ro'hui",
    "spaNo": "arrepentirse",
    "tags": []
  },
  {
    "rar": "rojácami",
    "spa": "cambio de dinero",
    "rarNo": "rojacami",
    "spaNo": "cambio de dinero",
    "tags": []
  },
  {
    "rar": "rojana",
    "spa": "apartar",
    "rarNo": "rojana",
    "spaNo": "apartar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rojoná",
    "spa": "separar",
    "rarNo": "rojona",
    "spaNo": "separar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rojuí",
    "spa": "bellota",
    "rarNo": "rojui",
    "spaNo": "bellota",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "romíami",
    "spa": "flexible",
    "rarNo": "romiami",
    "spaNo": "flexible",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "romina",
    "spa": "doblar - enrollar",
    "rarNo": "romina",
    "spaNo": "doblar - enrollar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "romírachi",
    "spa": "coyuntura",
    "rarNo": "romirachi",
    "spaNo": "coyuntura",
    "tags": []
  },
  {
    "rar": "romírachi",
    "spa": "tobillo",
    "rarNo": "romirachi",
    "spaNo": "tobillo",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "romó",
    "spa": "invierno",
    "rarNo": "romo",
    "spaNo": "invierno",
    "tags": []
  },
  {
    "rar": "romohua",
    "spa": "lloviznar",
    "rarNo": "romohua",
    "spaNo": "lloviznar",
    "tags": []
  },
  {
    "rar": "roné",
    "spa": "tener pies",
    "rarNo": "rone",
    "spaNo": "tener pies",
    "tags": []
  },
  {
    "rar": "roné",
    "spa": "hervir",
    "rarNo": "rone",
    "spaNo": "hervir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ronena",
    "spa": "hacer espuma",
    "rarNo": "ronena",
    "spaNo": "hacer espuma",
    "tags": []
  },
  {
    "rar": "ronó",
    "spa": "hervirse",
    "rarNo": "rono",
    "spaNo": "hervirse",
    "tags": []
  },
  {
    "rar": "ronó",
    "spa": "pie",
    "rarNo": "rono",
    "spaNo": "pie",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "ropá",
    "spa": "estómago - vientre",
    "rarNo": "ropa",
    "spaNo": "estomago - vientre",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "ropéami",
    "spa": "panzón",
    "rarNo": "ropeami",
    "spaNo": "panzon",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ropéami ju",
    "spa": "está embarazada",
    "rarNo": "ropeami ju",
    "spaNo": "esta embarazada",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "ropochí",
    "spa": "panza",
    "rarNo": "ropochi",
    "spaNo": "panza",
    "tags": []
  },
  {
    "rar": "rorí",
    "spa": "rata",
    "rarNo": "rori",
    "spaNo": "rata",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "roró",
    "spa": "rugir",
    "rarNo": "roro",
    "spaNo": "rugir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "roró",
    "spa": "gruñir",
    "rarNo": "roro",
    "spaNo": "grunir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "roró",
    "spa": "roncar",
    "rarNo": "roro",
    "spaNo": "roncar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rorobá",
    "spa": "enfriar",
    "rarNo": "roroba",
    "spaNo": "enfriar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "roroca",
    "spa": "tráquea",
    "rarNo": "roroca",
    "spaNo": "traquea",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "rorónaché",
    "spa": "zumbar",
    "rarNo": "roronache",
    "spaNo": "zumbar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ro'roché",
    "spa": "congelarse",
    "rarNo": "ro'roche",
    "spaNo": "congelarse",
    "tags": []
  },
  {
    "rar": "ro'rochébana",
    "spa": "congelar",
    "rarNo": "ro'rochebana",
    "spaNo": "congelar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rosácami",
    "spa": "blanco",
    "rarNo": "rosacami",
    "spaNo": "blanco",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "rosábachami",
    "spa": "gris",
    "rarNo": "rosabachami",
    "spaNo": "gris",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "rosana",
    "spa": "blanquearse",
    "rarNo": "rosana",
    "spaNo": "blanquearse",
    "tags": []
  },
  {
    "rar": "rosánahua",
    "spa": "blanquear",
    "rarNo": "rosanahua",
    "spaNo": "blanquear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rosó",
    "spa": "nido",
    "rarNo": "roso",
    "spaNo": "nido",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rosobocha",
    "spa": "despintarse",
    "rarNo": "rosobocha",
    "spaNo": "despintarse",
    "tags": []
  },
  {
    "rar": "rosohua",
    "spa": "toser",
    "rarNo": "rosohua",
    "spaNo": "toser",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rosoná",
    "spa": "pato",
    "rarNo": "rosona",
    "spaNo": "pato",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rosorá",
    "spa": "nido",
    "rarNo": "rosora",
    "spaNo": "nido",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rotebi",
    "spa": "salamandra",
    "rarNo": "rotebi",
    "spaNo": "salamandra",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rotosí",
    "spa": "sauz",
    "rarNo": "rotosi",
    "spaNo": "sauz",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "ru",
    "spa": "avisar",
    "rarNo": "ru",
    "spaNo": "avisar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ru",
    "spa": "testificar ",
    "rarNo": "ru",
    "spaNo": "testificar ",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ru",
    "spa": "descubrir",
    "rarNo": "ru",
    "spaNo": "descubrir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rucuchiri",
    "spa": "grillo",
    "rarNo": "rucuchiri",
    "spaNo": "grillo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rucué",
    "spa": "preguntar",
    "rarNo": "rucue",
    "spaNo": "preguntar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ruchí",
    "spa": "gato montés",
    "rarNo": "ruchi",
    "spaNo": "gato montes",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "ru'náami",
    "spa": "grueso",
    "rarNo": "ru'naami",
    "spaNo": "grueso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ruráami",
    "spa": "frío - fresco",
    "rarNo": "ruraami",
    "spaNo": "frio - fresco",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "rurú",
    "spa": "sonaja",
    "rarNo": "ruru",
    "spaNo": "sonaja",
    "tags": []
  },
  {
    "rar": "rurusí",
    "spa": "tomatillo",
    "rarNo": "rurusi",
    "spaNo": "tomatillo",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "rúsiami",
    "spa": "intérprete",
    "rarNo": "rusiami",
    "spaNo": "interprete",
    "tags": []
  },
  {
    "rar": "rusú",
    "spa": "moler",
    "rarNo": "rusu",
    "spaNo": "moler",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ruyé",
    "spa": "avisar - aconsejar - informar",
    "rarNo": "ruye",
    "spaNo": "avisar - aconsejar - informar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ruhuigá",
    "spa": "avisándole",
    "rarNo": "ruhuiga",
    "spaNo": "avisandole",
    "tags": []
  },
  {
    "rar": "ruyénara júuri",
    "spa": "le manda decir",
    "rarNo": "ruyenara juuri",
    "spaNo": "le manda decir",
    "tags": []
  },
  {
    "rar": "sáa",
    "spa": "oler - olfatear",
    "rarNo": "saa",
    "spaNo": "oler - olfatear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sáata",
    "spa": "hacer brasas",
    "rarNo": "saata",
    "spaNo": "hacer brasas",
    "tags": []
  },
  {
    "rar": "saca",
    "spa": "conseguir",
    "rarNo": "saca",
    "spaNo": "conseguir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sacará",
    "spa": "zacate",
    "rarNo": "sacara",
    "spaNo": "zacate",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "sacuá",
    "spa": "sapo",
    "rarNo": "sacua",
    "spaNo": "sapo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "sahuá",
    "spa": "hoja",
    "rarNo": "sahua",
    "spaNo": "hoja",
    "tags": []
  },
  {
    "rar": "sahua",
    "spa": "quemar",
    "rarNo": "sahua",
    "spaNo": "quemar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sa'huá",
    "spa": "curar - sanar",
    "rarNo": "sa'hua",
    "spaNo": "curar - sanar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sáhuara",
    "spa": "sonaja",
    "rarNo": "sahuara",
    "spaNo": "sonaja",
    "tags": []
  },
  {
    "rar": "sahuarásimí",
    "spa": "retoñar",
    "rarNo": "sahuarasimi",
    "spaNo": "retonar",
    "tags": []
  },
  {
    "rar": "sahuí",
    "spa": "quemarse",
    "rarNo": "sahui",
    "spaNo": "quemarse",
    "tags": []
  },
  {
    "rar": "sa'huí",
    "spa": "quemarse ",
    "rarNo": "sa'hui",
    "spaNo": "quemarse ",
    "tags": []
  },
  {
    "rar": "sa'huí",
    "spa": "aliviarse",
    "rarNo": "sa'hui",
    "spaNo": "aliviarse",
    "tags": []
  },
  {
    "rar": "sahuiri",
    "spa": "brasas - carbón",
    "rarNo": "sahuiri",
    "spaNo": "brasas - carbon",
    "tags": []
  },
  {
    "rar": "sahuiruma",
    "spa": "temblar",
    "rarNo": "sahuiruma",
    "spaNo": "temblar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sái",
    "spa": "oler - olfatear",
    "rarNo": "sai",
    "spaNo": "oler - olfatear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sa'í",
    "spa": "lombriz",
    "rarNo": "sa'i",
    "spaNo": "lombriz",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "sa'mecha",
    "spa": "remojar - mojar",
    "rarNo": "sa'mecha",
    "spaNo": "remojar - mojar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sa'mí",
    "spa": "estar mojado",
    "rarNo": "sa'mi",
    "spaNo": "estar mojado",
    "tags": []
  },
  {
    "rar": "sa'míami",
    "spa": "humedo - mojado",
    "rarNo": "sa'miami",
    "spaNo": "humedo - mojado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "sa'mina",
    "spa": "humedecerse",
    "rarNo": "sa'mina",
    "spaNo": "humedecerse",
    "tags": []
  },
  {
    "rar": "sampá",
    "spa": "mojarse",
    "rarNo": "sampa",
    "spaNo": "mojarse",
    "tags": []
  },
  {
    "rar": "sampacha",
    "spa": "remojar",
    "rarNo": "sampacha",
    "spaNo": "remojar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sapá",
    "spa": "carne",
    "rarNo": "sapa",
    "spaNo": "carne",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "sapará",
    "spa": "engordarse",
    "rarNo": "sapara",
    "spaNo": "engordarse",
    "tags": []
  },
  {
    "rar": "saparábana",
    "spa": "engordar",
    "rarNo": "saparabana",
    "spaNo": "engordar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "saparusa",
    "spa": "enflacar",
    "rarNo": "saparusa",
    "spaNo": "enflacar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sapé",
    "spa": "estar gordo",
    "rarNo": "sape",
    "spaNo": "estar gordo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "machí sapepa",
    "spa": "desnudarse",
    "rarNo": "machi sapepa",
    "spaNo": "desnudarse",
    "tags": []
  },
  {
    "rar": "machí sapéami",
    "spa": "desnudo",
    "rarNo": "machi sapeami",
    "spaNo": "desnudo",
    "tags": []
  },
  {
    "rar": "sapota",
    "spa": "hacer palomitas de maíz",
    "rarNo": "sapota",
    "spaNo": "hacer palomitas de maiz",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sapú",
    "spa": "apurarse",
    "rarNo": "sapu",
    "spaNo": "apurarse",
    "tags": []
  },
  {
    "rar": "sapunú",
    "spa": "apurarse mucho",
    "rarNo": "sapunu",
    "spaNo": "apurarse mucho",
    "tags": []
  },
  {
    "rar": "saquí",
    "spa": "esquite",
    "rarNo": "saqui",
    "spaNo": "esquite",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "saquiri",
    "spa": "comal",
    "rarNo": "saquiri",
    "spaNo": "comal",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "sa'rihuá",
    "spa": "saliva",
    "rarNo": "sa'rihua",
    "spaNo": "saliva",
    "tags": []
  },
  {
    "rar": "saróami",
    "spa": "amarillo - anaranjado",
    "rarNo": "saroami",
    "spaNo": "amarillo - anaranjado",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "sasira",
    "spa": "resbalarse",
    "rarNo": "sasira",
    "spaNo": "resbalarse",
    "tags": []
  },
  {
    "rar": "saté",
    "spa": "arena",
    "rarNo": "sate",
    "spaNo": "arena",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "satibó",
    "spa": "arenal",
    "rarNo": "satibo",
    "spaNo": "arenal",
    "tags": []
  },
  {
    "rar": "satibótami",
    "spa": "arenoso",
    "rarNo": "satibotami",
    "spaNo": "arenoso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "sayahui",
    "spa": "víbora de cascabel",
    "rarNo": "sayahui",
    "spaNo": "vibora de cascabel",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "sayé",
    "spa": "enemigo",
    "rarNo": "saye",
    "spaNo": "enemigo",
    "tags": []
  },
  {
    "rar": "sayiná",
    "spa": "de repente",
    "rarNo": "sayina",
    "spaNo": "de repente",
    "tags": []
  },
  {
    "rar": "seba",
    "spa": "alcanzar - llegar - lograr",
    "rarNo": "seba",
    "spaNo": "alcanzar - llegar - lograr",
    "tags": []
  },
  {
    "rar": "sayiruma",
    "spa": "teblarse",
    "rarNo": "sayiruma",
    "spaNo": "teblarse",
    "tags": []
  },
  {
    "rar": "sebara",
    "spa": "completar - cumplir",
    "rarNo": "sebara",
    "spaNo": "completar - cumplir",
    "tags": []
  },
  {
    "rar": "sébari",
    "spa": "bastante - completo",
    "rarNo": "sebari",
    "spaNo": "bastante - completo",
    "tags": []
  },
  {
    "rar": "sehuá",
    "spa": "florecer",
    "rarNo": "sehua",
    "spaNo": "florecer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "si",
    "spa": "llegan",
    "rarNo": "si",
    "spaNo": "llegan",
    "tags": []
  },
  {
    "rar": "si",
    "spa": "hacer",
    "rarNo": "si",
    "spaNo": "hacer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "si",
    "spa": "dilatarse",
    "rarNo": "si",
    "spaNo": "dilatarse",
    "tags": []
  },
  {
    "rar": "si'á",
    "spa": "suegro",
    "rarNo": "si'a",
    "spaNo": "suegro",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "sibori",
    "spa": "renacuajo",
    "rarNo": "sibori",
    "spaNo": "renacuajo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "sicá",
    "spa": "trasquilar",
    "rarNo": "sica",
    "spaNo": "trasquilar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sicá",
    "spa": "brazo o mano",
    "rarNo": "sica",
    "spaNo": "brazo o mano",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "sicá jiti",
    "spa": "a mano",
    "rarNo": "sica jiti",
    "spaNo": "a mano",
    "tags": []
  },
  {
    "rar": "sicachó",
    "spa": "aplaudir",
    "rarNo": "sicacho",
    "spaNo": "aplaudir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sicahué",
    "spa": "bracear",
    "rarNo": "sicahue",
    "spaNo": "bracear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sicara",
    "spa": "mover los brazos",
    "rarNo": "sicara",
    "spaNo": "mover los brazos",
    "tags": []
  },
  {
    "rar": "sichoochi",
    "spa": "en un rincon",
    "rarNo": "sichoochi",
    "spaNo": "en un rincon",
    "tags": []
  },
  {
    "rar": "sicorí",
    "spa": "olla - jarro",
    "rarNo": "sicori",
    "spaNo": "olla - jarro",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "sicuí",
    "spa": "hormiga",
    "rarNo": "sicui",
    "spaNo": "hormiga",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "sihuá",
    "spa": "intestino",
    "rarNo": "sihua",
    "spaNo": "intestino",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "sihuá",
    "spa": "florecer",
    "rarNo": "sihua",
    "spaNo": "florecer",
    "tags": [
      "verbo",
      "planta"
    ]
  },
  {
    "rar": "sihuáchari",
    "spa": "flor",
    "rarNo": "sihuachari",
    "spaNo": "flor",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "si'huérahua",
    "spa": "pestaña",
    "rarNo": "si'huerahua",
    "spaNo": "pestana",
    "tags": []
  },
  {
    "rar": "si'huina",
    "spa": "en otra parte",
    "rarNo": "si'huina",
    "spaNo": "en otra parte",
    "tags": []
  },
  {
    "rar": "si'huinárigá",
    "spa": "de otra manera - en cambio",
    "rarNo": "si'huinariga",
    "spaNo": "de otra manera - en cambio",
    "tags": []
  },
  {
    "rar": "sijabó",
    "spa": "estar empachado ",
    "rarNo": "sijabo",
    "spaNo": "estar empachado ",
    "tags": []
  },
  {
    "rar": "sijarí",
    "spa": "vejiga",
    "rarNo": "sijari",
    "spaNo": "vejiga",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "sijarí",
    "spa": "ampolla",
    "rarNo": "sijari",
    "spaNo": "ampolla",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "si'luna",
    "spa": "pegar",
    "rarNo": "si'luna",
    "spaNo": "pegar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "si'lúami",
    "spa": "plegado",
    "rarNo": "si'luami",
    "spaNo": "plegado",
    "tags": []
  },
  {
    "rar": "simá",
    "spa": "irse",
    "rarNo": "sima",
    "spaNo": "irse",
    "tags": []
  },
  {
    "rar": "simati",
    "spa": "bonito - hermoso",
    "rarNo": "simati",
    "spaNo": "bonito - hermoso",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "simó",
    "spa": "tocar un instrumento musical",
    "rarNo": "simo",
    "spaNo": "tocar un instrumento musical",
    "tags": []
  },
  {
    "rar": "simera ",
    "spa": "pasar",
    "rarNo": "simera ",
    "spaNo": "pasar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "simí",
    "spa": "irse",
    "rarNo": "simi",
    "spaNo": "irse",
    "tags": []
  },
  {
    "rar": "simí",
    "spa": "caminar",
    "rarNo": "simi",
    "spaNo": "caminar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "simírami",
    "spa": "sobrante",
    "rarNo": "simirami",
    "spaNo": "sobrante",
    "tags": []
  },
  {
    "rar": "simuchí",
    "spa": "colibrí",
    "rarNo": "simuchi",
    "spaNo": "colibri",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "siná",
    "spa": "gritar",
    "rarNo": "sina",
    "spaNo": "gritar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "siné",
    "spa": "vez",
    "rarNo": "sine",
    "spaNo": "vez",
    "tags": []
  },
  {
    "rar": "que sine",
    "spa": "nunca - jamás",
    "rarNo": "que sine",
    "spaNo": "nunca - jamas",
    "tags": []
  },
  {
    "rar": "siné cáachi",
    "spa": "en otra ocasión - tal vez",
    "rarNo": "sine caachi",
    "spaNo": "en otra ocasion - tal vez",
    "tags": []
  },
  {
    "rar": "sinepi",
    "spa": "una vez",
    "rarNo": "sinepi",
    "spaNo": "una vez",
    "tags": []
  },
  {
    "rar": "si'néami",
    "spa": "todo - toda la gente",
    "rarNo": "si'neami",
    "spaNo": "todo - toda la gente",
    "tags": []
  },
  {
    "rar": "sinibí",
    "spa": "siempre",
    "rarNo": "sinibi",
    "spaNo": "siempre",
    "tags": []
  },
  {
    "rar": "sinohui",
    "spa": "culebras - víboras",
    "rarNo": "sinohui",
    "spaNo": "culebras - viboras",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "sinibí rahué",
    "spa": "todos los días",
    "rarNo": "sinibi rahue",
    "spaNo": "todos los dias",
    "tags": []
  },
  {
    "rar": "sinomí",
    "spa": "a veces - de vez en cuando",
    "rarNo": "sinomi",
    "spaNo": "a veces - de vez en cuando",
    "tags": []
  },
  {
    "rar": "si'nú",
    "spa": "distinto - diferente",
    "rarNo": "si'nu",
    "spaNo": "distinto - diferente",
    "tags": []
  },
  {
    "rar": "si'orí",
    "spa": "abeja - mosca",
    "rarNo": "si'ori",
    "spaNo": "abeja - mosca",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "si'núriga",
    "spa": "al contrario",
    "rarNo": "si'nuriga",
    "spaNo": "al contrario",
    "tags": []
  },
  {
    "rar": "sipá",
    "spa": "rascar - lijar - raspar - cepillar",
    "rarNo": "sipa",
    "spaNo": "rascar - lijar - raspar - cepillar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sipáami",
    "spa": "curandero - hechicero",
    "rarNo": "sipaami",
    "spaNo": "curandero - hechicero",
    "tags": []
  },
  {
    "rar": "tabla sipáami",
    "spa": "carpintero",
    "rarNo": "tabla sipaami",
    "spaNo": "carpintero",
    "tags": []
  },
  {
    "rar": "siparí",
    "spa": "ejote",
    "rarNo": "sipari",
    "spaNo": "ejote",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "sipabú",
    "spa": "hechizar",
    "rarNo": "sipabu",
    "spaNo": "hechizar",
    "tags": []
  },
  {
    "rar": "sipée",
    "spa": "espejo",
    "rarNo": "sipee",
    "spaNo": "espejo",
    "tags": []
  },
  {
    "rar": "sipí",
    "spa": "enfirarse",
    "rarNo": "sipi",
    "spaNo": "enfirarse",
    "tags": []
  },
  {
    "rar": "sipirú",
    "spa": "pelar",
    "rarNo": "sipiru",
    "spaNo": "pelar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sipiyoni",
    "spa": "sarampión",
    "rarNo": "sipiyoni",
    "spaNo": "sarampion",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "sipucha",
    "spa": "enaguas",
    "rarNo": "sipucha",
    "spaNo": "enaguas",
    "tags": []
  },
  {
    "rar": "sipurí",
    "spa": "tárantula",
    "rarNo": "sipuri",
    "spaNo": "tarantula",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "siqué ",
    "spa": "tener brazo",
    "rarNo": "sique ",
    "spaNo": "tener brazo",
    "tags": []
  },
  {
    "rar": "siquiré",
    "spa": "cortar con un cuchillo",
    "rarNo": "siquire",
    "spaNo": "cortar con un cuchillo",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "siquirépari",
    "spa": "se cortó",
    "rarNo": "siquirepari",
    "spaNo": "se corto",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "siquiríchi",
    "spa": "gavilán",
    "rarNo": "siquirichi",
    "spaNo": "gavilan",
    "tags": []
  },
  {
    "rar": "sirá",
    "spa": "lanza",
    "rarNo": "sira",
    "spaNo": "lanza",
    "tags": []
  },
  {
    "rar": "sira",
    "spa": "irse",
    "rarNo": "sira",
    "spaNo": "irse",
    "tags": []
  },
  {
    "rar": "si'rí",
    "spa": "ahogarse",
    "rarNo": "si'ri",
    "spaNo": "ahogarse",
    "tags": []
  },
  {
    "rar": "si'rina",
    "spa": "ahogar",
    "rarNo": "si'rina",
    "spaNo": "ahogar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "siri",
    "spa": "tijera",
    "rarNo": "siri",
    "spaNo": "tijera",
    "tags": []
  },
  {
    "rar": "siríami",
    "spa": "gobernador",
    "rarNo": "siriami",
    "spaNo": "gobernador",
    "tags": []
  },
  {
    "rar": "si'rú",
    "spa": "arrugarse",
    "rarNo": "si'ru",
    "spaNo": "arrugarse",
    "tags": []
  },
  {
    "rar": "sirú",
    "spa": "cazar - pescar",
    "rarNo": "siru",
    "spaNo": "cazar - pescar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sirúami",
    "spa": "cazado",
    "rarNo": "siruami",
    "spaNo": "cazado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "si'runá",
    "spa": "aflojar ",
    "rarNo": "si'runa",
    "spaNo": "aflojar ",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "si'runá",
    "spa": "arrugar - plegar",
    "rarNo": "si'runa",
    "spaNo": "arrugar - plegar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sitá",
    "spa": "resbalarse",
    "rarNo": "sita",
    "spaNo": "resbalarse",
    "tags": []
  },
  {
    "rar": "sitácami",
    "spa": "colorado",
    "rarNo": "sitacami",
    "spaNo": "colorado",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "sitá",
    "spa": "tinta",
    "rarNo": "sita",
    "spaNo": "tinta",
    "tags": []
  },
  {
    "rar": "sití",
    "spa": "feo - que no sirve",
    "rarNo": "siti",
    "spaNo": "feo - que no sirve",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "sití oráami",
    "spa": "malvado",
    "rarNo": "siti oraami",
    "spaNo": "malvado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "sitira ané",
    "spa": "criticar - insultar",
    "rarNo": "sitira ane",
    "spaNo": "criticar - insultar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sitó",
    "spa": "esquina",
    "rarNo": "sito",
    "spaNo": "esquina",
    "tags": []
  },
  {
    "rar": "sitóachi",
    "spa": "codorniz",
    "rarNo": "sitoachi",
    "spaNo": "codorniz",
    "tags": []
  },
  {
    "rar": "sitúra",
    "spa": "estar redondo",
    "rarNo": "situra",
    "spaNo": "estar redondo",
    "tags": []
  },
  {
    "rar": "sitúrami",
    "spa": "redondo",
    "rarNo": "siturami",
    "spaNo": "redondo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "si'yá",
    "spa": "suegro",
    "rarNo": "si'ya",
    "spaNo": "suegro",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "siyónami",
    "spa": "verde - azul",
    "rarNo": "siyonami",
    "spaNo": "verde - azul",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "soguí",
    "spa": "casi",
    "rarNo": "sogui",
    "spaNo": "casi",
    "tags": []
  },
  {
    "rar": "so'huá",
    "spa": "espinas",
    "rarNo": "so'hua",
    "spaNo": "espinas",
    "tags": []
  },
  {
    "rar": "so'hué",
    "spa": "golondrina",
    "rarNo": "so'hue",
    "spaNo": "golondrina",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "so'huira",
    "spa": "espinar",
    "rarNo": "so'huira",
    "spaNo": "espinar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "soma",
    "spa": "lavarse la cabeza",
    "rarNo": "soma",
    "spaNo": "lavarse la cabeza",
    "tags": []
  },
  {
    "rar": "sonorá",
    "spa": "los pulmones",
    "rarNo": "sonora",
    "spaNo": "los pulmones",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "sontarsi",
    "spa": "soldado",
    "rarNo": "sontarsi",
    "spaNo": "soldado",
    "tags": []
  },
  {
    "rar": "sopichí",
    "spa": "murcielago",
    "rarNo": "sopichi",
    "spaNo": "murcielago",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "soporí",
    "spa": "estrella",
    "rarNo": "sopori",
    "spaNo": "estrella",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "sopota",
    "spa": "despeinado",
    "rarNo": "sopota",
    "spaNo": "despeinado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "sotóchi",
    "spa": "ratoncito",
    "rarNo": "sotochi",
    "spaNo": "ratoncito",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "sotóchi",
    "spa": "chaparro",
    "rarNo": "sotochi",
    "spaNo": "chaparro",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "su",
    "spa": "coser",
    "rarNo": "su",
    "spaNo": "coser",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "súami",
    "spa": "cocido",
    "rarNo": "suami",
    "spaNo": "cocido",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "sucú",
    "spa": "raspar - rascarse",
    "rarNo": "sucu",
    "spaNo": "raspar - rascarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sucuchí",
    "spa": "en el ombligo",
    "rarNo": "sucuchi",
    "spaNo": "en el ombligo",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "sucuchú",
    "spa": "pellizcar - rasguñar",
    "rarNo": "sucuchu",
    "spaNo": "pellizcar - rasgunar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sucuí",
    "spa": "hormiga",
    "rarNo": "sucui",
    "spaNo": "hormiga",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "sucurú",
    "spa": "hechizar",
    "rarNo": "sucuru",
    "spaNo": "hechizar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sucurúami",
    "spa": "hechicero - brujo",
    "rarNo": "sucuruami",
    "spaNo": "hechicero - brujo",
    "tags": []
  },
  {
    "rar": "suguí",
    "spa": "tesgüino",
    "rarNo": "sugui",
    "spaNo": "tesguino",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "sugúrami",
    "spa": "sucio ",
    "rarNo": "sugurami",
    "spaNo": "sucio ",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "suhuá",
    "spa": "acabar - terminar",
    "rarNo": "suhua",
    "spaNo": "acabar - terminar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "suhuaba",
    "spa": "destruir - acabar",
    "rarNo": "suhuaba",
    "spaNo": "destruir - acabar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "suhuaba",
    "spa": "todo",
    "rarNo": "suhuaba",
    "spaNo": "todo",
    "tags": []
  },
  {
    "rar": "su'hué",
    "spa": "bonito ",
    "rarNo": "su'hue",
    "spaNo": "bonito ",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "su'hueti júcami",
    "spa": "fragante",
    "rarNo": "su'hueti jucami",
    "spaNo": "fragante",
    "tags": []
  },
  {
    "rar": "su'huetari",
    "spa": "bonito",
    "rarNo": "su'huetari",
    "spaNo": "bonito",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "suhuí",
    "spa": "acabarse - morirse",
    "rarNo": "suhui",
    "spaNo": "acabarse - morirse",
    "tags": []
  },
  {
    "rar": "su'hueti juca",
    "spa": "tiene buen olor",
    "rarNo": "su'hueti juca",
    "spaNo": "tiene buen olor",
    "tags": []
  },
  {
    "rar": "suhuíami",
    "spa": "cadáveres",
    "rarNo": "suhuiami",
    "spaNo": "cadaveres",
    "tags": []
  },
  {
    "rar": "suhuirá",
    "spa": "orilla",
    "rarNo": "suhuira",
    "spaNo": "orilla",
    "tags": []
  },
  {
    "rar": "sumá",
    "spa": "sobar",
    "rarNo": "suma",
    "spaNo": "sobar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "suní",
    "spa": "terminar - acabar - cumplir",
    "rarNo": "suni",
    "spaNo": "terminar - acabar - cumplir",
    "tags": []
  },
  {
    "rar": "mani suniri nóchia",
    "spa": "ya terminé de trabajar",
    "rarNo": "mani suniri nochia",
    "spaNo": "ya termine de trabajar",
    "tags": []
  },
  {
    "rar": "suníami",
    "spa": "en todas partes",
    "rarNo": "suniami",
    "spaNo": "en todas partes",
    "tags": []
  },
  {
    "rar": "sunú",
    "spa": "maíz",
    "rarNo": "sunu",
    "spaNo": "maiz",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "sunú o'néami",
    "spa": "mazorca",
    "rarNo": "sunu o'neami",
    "spaNo": "mazorca",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "supuchí",
    "spa": "murciélago",
    "rarNo": "supuchi",
    "spaNo": "murcielago",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "suquí",
    "spa": "ombligo",
    "rarNo": "suqui",
    "spaNo": "ombligo",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "sucuchí",
    "spa": "en el ombligo",
    "rarNo": "sucuchi",
    "spaNo": "en el ombligo",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "su'rá",
    "spa": "aflojarse",
    "rarNo": "su'ra",
    "spaNo": "aflojarse",
    "tags": []
  },
  {
    "rar": "surá",
    "spa": "corazón",
    "rarNo": "sura",
    "spaNo": "corazon",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "suré",
    "spa": "tener corazón",
    "rarNo": "sure",
    "spaNo": "tener corazon",
    "tags": []
  },
  {
    "rar": "surachí ",
    "spa": "en el corazón",
    "rarNo": "surachi ",
    "spaNo": "en el corazon",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "surí",
    "spa": "no querer compartir",
    "rarNo": "suri",
    "spaNo": "no querer compartir",
    "tags": []
  },
  {
    "rar": "su'rina",
    "spa": "soltar",
    "rarNo": "su'rina",
    "spaNo": "soltar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sutú",
    "spa": "uña - pezuña",
    "rarNo": "sutu",
    "spaNo": "una - pezuna",
    "tags": [
      "parte del cuerpo",
      "animal"
    ]
  },
  {
    "rar": "ta ",
    "spa": "pedir",
    "rarNo": "ta ",
    "spaNo": "pedir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "taní",
    "spa": "estar pidiendo",
    "rarNo": "tani",
    "spaNo": "estar pidiendo",
    "tags": []
  },
  {
    "rar": "ta",
    "spa": "chiquito",
    "rarNo": "ta",
    "spaNo": "chiquito",
    "tags": []
  },
  {
    "rar": "tabé",
    "spa": "más chiquito",
    "rarNo": "tabe",
    "spaNo": "mas chiquito",
    "tags": []
  },
  {
    "rar": "táa",
    "spa": "chico - infante - pequeño",
    "rarNo": "taa",
    "spaNo": "chico - infante - pequeno",
    "tags": []
  },
  {
    "rar": "táami",
    "spa": "músico",
    "rarNo": "taami",
    "spaNo": "musico",
    "tags": []
  },
  {
    "rar": "táa nira",
    "spa": "se encoge",
    "rarNo": "taa nira",
    "spaNo": "se encoge",
    "tags": []
  },
  {
    "rar": "taba",
    "spa": "luchar",
    "rarNo": "taba",
    "spaNo": "luchar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tabachi",
    "spa": "calentar",
    "rarNo": "tabachi",
    "spaNo": "calentar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tabachi",
    "spa": "taparrabo",
    "rarNo": "tabachi",
    "spaNo": "taparrabo",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "tábara",
    "spa": "tabla",
    "rarNo": "tabara",
    "spaNo": "tabla",
    "tags": []
  },
  {
    "rar": "tabé",
    "spa": "más chiquito",
    "rarNo": "tabe",
    "spaNo": "mas chiquito",
    "tags": []
  },
  {
    "rar": "tabéara",
    "spa": "menor",
    "rarNo": "tabeara",
    "spaNo": "menor",
    "tags": []
  },
  {
    "rar": "tamí",
    "spa": "a mí",
    "rarNo": "tami",
    "spaNo": "a mi",
    "tags": []
  },
  {
    "rar": "tamujé",
    "spa": "nosotros",
    "rarNo": "tamuje",
    "spaNo": "nosotros",
    "tags": []
  },
  {
    "rar": "tamujé níhuara",
    "spa": "nuestro",
    "rarNo": "tamuje nihuara",
    "spaNo": "nuestro",
    "tags": []
  },
  {
    "rar": "tamuro",
    "spa": "mudo",
    "rarNo": "tamuro",
    "spaNo": "mudo",
    "tags": []
  },
  {
    "rar": "tana",
    "spa": "pedir",
    "rarNo": "tana",
    "spaNo": "pedir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tanehua",
    "spa": "fiar",
    "rarNo": "tanehua",
    "spaNo": "fiar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tanehui",
    "spa": "prestar",
    "rarNo": "tanehui",
    "spaNo": "prestar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tani",
    "spa": "rogar",
    "rarNo": "tani",
    "spaNo": "rogar",
    "tags": []
  },
  {
    "rar": "tani riosi",
    "spa": "pedir a dios",
    "rarNo": "tani riosi",
    "spaNo": "pedir a dios",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tapa",
    "spa": "acarrear - traer en las manos",
    "rarNo": "tapa",
    "spaNo": "acarrear - traer en las manos",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tará",
    "spa": "contar",
    "rarNo": "tara",
    "spaNo": "contar",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "tarárami",
    "spa": "contados",
    "rarNo": "tararami",
    "spaNo": "contados",
    "tags": []
  },
  {
    "rar": "tarapé",
    "spa": "no",
    "rarNo": "tarape",
    "spaNo": "no",
    "tags": []
  },
  {
    "rar": "tarapé te ",
    "spa": "no hay",
    "rarNo": "tarape te ",
    "spaNo": "no hay",
    "tags": []
  },
  {
    "rar": "tarapé machíami",
    "spa": "ignorante",
    "rarNo": "tarape machiami",
    "spaNo": "ignorante",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "tarari",
    "spa": "semana",
    "rarNo": "tarari",
    "spaNo": "semana",
    "tags": []
  },
  {
    "rar": "tarí",
    "spa": "semilla",
    "rarNo": "tari",
    "spaNo": "semilla",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "tarí",
    "spa": "apuesta",
    "rarNo": "tari",
    "spaNo": "apuesta",
    "tags": []
  },
  {
    "rar": "tasi iré",
    "spa": "no sirve",
    "rarNo": "tasi ire",
    "spaNo": "no sirve",
    "tags": []
  },
  {
    "rar": "tasi iré",
    "spa": "no",
    "rarNo": "tasi ire",
    "spaNo": "no",
    "tags": []
  },
  {
    "rar": "tata",
    "spa": "padre",
    "rarNo": "tata",
    "spaNo": "padre",
    "tags": []
  },
  {
    "rar": "te",
    "spa": "tejer",
    "rarNo": "te",
    "spaNo": "tejer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "técuri",
    "spa": "borrachos",
    "rarNo": "tecuri",
    "spaNo": "borrachos",
    "tags": []
  },
  {
    "rar": "téeribi",
    "spa": "poco tiempo",
    "rarNo": "teeribi",
    "spaNo": "poco tiempo",
    "tags": []
  },
  {
    "rar": "témari",
    "spa": "jóvenes",
    "rarNo": "temari",
    "spaNo": "jovenes",
    "tags": []
  },
  {
    "rar": "tera",
    "spa": "telar",
    "rarNo": "tera",
    "spaNo": "telar",
    "tags": []
  },
  {
    "rar": "teri",
    "spa": "corto",
    "rarNo": "teri",
    "spaNo": "corto",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "pe peri",
    "spa": "poco tiempo",
    "rarNo": "pe peri",
    "spaNo": "poco tiempo",
    "tags": []
  },
  {
    "rar": "térico",
    "spa": "al rato - ahorita",
    "rarNo": "terico",
    "spaNo": "al rato - ahorita",
    "tags": []
  },
  {
    "rar": "térico piché",
    "spa": "hasta luego",
    "rarNo": "terico piche",
    "spaNo": "hasta luego",
    "tags": []
  },
  {
    "rar": "tétari ",
    "spa": "la medida - plazo de tiempo",
    "rarNo": "tetari ",
    "spaNo": "la medida - plazo de tiempo",
    "tags": []
  },
  {
    "rar": "tibí",
    "spa": "quedar - sobrar",
    "rarNo": "tibi",
    "spaNo": "quedar - sobrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tibí",
    "spa": "permanecer",
    "rarNo": "tibi",
    "spaNo": "permanecer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tibíami",
    "spa": "restante",
    "rarNo": "tibiami",
    "spaNo": "restante",
    "tags": []
  },
  {
    "rar": "tibú",
    "spa": "cuidar - vigilar",
    "rarNo": "tibu",
    "spaNo": "cuidar - vigilar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tibuta",
    "spa": "guardar - proteger - vigilar",
    "rarNo": "tibuta",
    "spaNo": "guardar - proteger - vigilar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tibútana",
    "spa": "encomendar",
    "rarNo": "tibutana",
    "spaNo": "encomendar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tibútari",
    "spa": "espantapájaros",
    "rarNo": "tibutari",
    "spaNo": "espantapajaros",
    "tags": []
  },
  {
    "rar": "tichí",
    "spa": "peinar",
    "rarNo": "tichi",
    "spaNo": "peinar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tichícari",
    "spa": "peinar",
    "rarNo": "tichicari",
    "spaNo": "peinar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ticó",
    "spa": "cercar",
    "rarNo": "tico",
    "spaNo": "cercar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tigótachi",
    "spa": "cerco de piedra",
    "rarNo": "tigotachi",
    "spaNo": "cerco de piedra",
    "tags": []
  },
  {
    "rar": "tihué",
    "spa": "muchacha",
    "rarNo": "tihue",
    "spaNo": "muchacha",
    "tags": []
  },
  {
    "rar": "tinicha",
    "spa": "repetir - burlar",
    "rarNo": "tinicha",
    "spaNo": "repetir - burlar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tisó",
    "spa": "usar bastón",
    "rarNo": "tiso",
    "spaNo": "usar baston",
    "tags": []
  },
  {
    "rar": "tisora",
    "spa": "bastón",
    "rarNo": "tisora",
    "spaNo": "baston",
    "tags": []
  },
  {
    "rar": "to",
    "spa": "enterrar",
    "rarNo": "to",
    "spaNo": "enterrar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "to",
    "spa": "llevar - tomar",
    "rarNo": "to",
    "spaNo": "llevar - tomar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "tobá",
    "spa": "atascarse",
    "rarNo": "toba",
    "spaNo": "atascarse",
    "tags": []
  },
  {
    "rar": "towi",
    "spa": "muchacho - niño",
    "rarNo": "towi",
    "spaNo": "muchacho - nino",
    "tags": []
  },
  {
    "rar": "toná",
    "spa": "poner parado",
    "rarNo": "tona",
    "spaNo": "poner parado",
    "tags": []
  },
  {
    "rar": "toreta",
    "spa": "cacarear",
    "rarNo": "toreta",
    "spaNo": "cacarear",
    "tags": [
      "verbo",
      "animal"
    ]
  },
  {
    "rar": "toni",
    "spa": "poste",
    "rarNo": "toni",
    "spaNo": "poste",
    "tags": []
  },
  {
    "rar": "torí",
    "spa": "gallina - pollo",
    "rarNo": "tori",
    "spaNo": "gallina - pollo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "tu ",
    "spa": "traer agua - sacar agua",
    "rarNo": "tu ",
    "spaNo": "traer agua - sacar agua",
    "tags": []
  },
  {
    "rar": "túcami",
    "spa": "asado",
    "rarNo": "tucami",
    "spaNo": "asado",
    "tags": []
  },
  {
    "rar": "tucua",
    "spa": "desde abajo",
    "rarNo": "tucua",
    "spaNo": "desde abajo",
    "tags": []
  },
  {
    "rar": "tumujé",
    "spa": "nosotros",
    "rarNo": "tumuje",
    "spaNo": "nosotros",
    "tags": []
  },
  {
    "rar": "turio",
    "spa": "trigo",
    "rarNo": "turio",
    "spaNo": "trigo",
    "tags": [
      "planta",
      "alimento"
    ]
  },
  {
    "rar": "turupa",
    "spa": "tropezar",
    "rarNo": "turupa",
    "spaNo": "tropezar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "uba",
    "spa": "bañarse",
    "rarNo": "uba",
    "spaNo": "banarse",
    "tags": []
  },
  {
    "rar": "úca",
    "spa": "espinazo",
    "rarNo": "uca",
    "spaNo": "espinazo",
    "tags": []
  },
  {
    "rar": "ucú",
    "spa": "llover",
    "rarNo": "ucu",
    "spaNo": "llover",
    "tags": []
  },
  {
    "rar": "ocuá",
    "spa": "lagrima",
    "rarNo": "ocua",
    "spaNo": "lagrima",
    "tags": []
  },
  {
    "rar": "ocuí",
    "spa": "llover",
    "rarNo": "ocui",
    "spaNo": "llover",
    "tags": []
  },
  {
    "rar": "uché",
    "spa": "untar - frotar",
    "rarNo": "uche",
    "spaNo": "untar - frotar",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "uché",
    "spa": "vacunar",
    "rarNo": "uche",
    "spaNo": "vacunar",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "uchíi",
    "spa": "estrecho - angosto",
    "rarNo": "uchii",
    "spaNo": "estrecho - angosto",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "uchú",
    "spa": "besar - chupar",
    "rarNo": "uchu",
    "spaNo": "besar - chupar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "uchú",
    "spa": "picar - picotear",
    "rarNo": "uchu",
    "spaNo": "picar - picotear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "uchucha",
    "spa": "traducir del tarahumara a español",
    "rarNo": "uchucha",
    "spaNo": "traducir del tarahumara a espanol",
    "tags": []
  },
  {
    "rar": "ujuma",
    "spa": "correr",
    "rarNo": "ujuma",
    "spaNo": "correr",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "umí",
    "spa": "cintura",
    "rarNo": "umi",
    "spaNo": "cintura",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "umugusa",
    "spa": "desmayarse",
    "rarNo": "umugusa",
    "spaNo": "desmayarse",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "umpá",
    "spa": "perder en el juego",
    "rarNo": "umpa",
    "spaNo": "perder en el juego",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "umuri",
    "spa": "bisabuelo - bisnieto",
    "rarNo": "umuri",
    "spaNo": "bisabuelo - bisnieto",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "upé",
    "spa": "tener esposa",
    "rarNo": "upe",
    "spaNo": "tener esposa",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "upí",
    "spa": "esposa",
    "rarNo": "upi",
    "spaNo": "esposa",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "upímami",
    "spa": "viudo",
    "rarNo": "upimami",
    "spaNo": "viudo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "urí",
    "spa": "barranca",
    "rarNo": "uri",
    "spaNo": "barranca",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "usani",
    "spa": "seis",
    "rarNo": "usani",
    "spaNo": "seis",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "usansa",
    "spa": "sexto",
    "rarNo": "usansa",
    "spaNo": "sexto",
    "tags": []
  },
  {
    "rar": "usansa macoy",
    "spa": "sesenta",
    "rarNo": "usansa macoy",
    "spaNo": "sesenta",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "usí",
    "spa": "arriba por el arroyo",
    "rarNo": "usi",
    "spaNo": "arriba por el arroyo",
    "tags": []
  },
  {
    "rar": "usú",
    "spa": "abuela - nieta materna",
    "rarNo": "usu",
    "spaNo": "abuela - nieta materna",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "usuta",
    "spa": "zurdo",
    "rarNo": "usuta",
    "spaNo": "zurdo",
    "tags": []
  },
  {
    "rar": "ya",
    "spa": "dar - convidar",
    "rarNo": "ya",
    "spaNo": "dar - convidar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "yáati",
    "spa": "inmediatamente - pronto",
    "rarNo": "yaati",
    "spaNo": "inmediatamente - pronto",
    "tags": []
  },
  {
    "rar": "yé",
    "spa": "quitar",
    "rarNo": "ye",
    "spaNo": "quitar",
    "tags": []
  },
  {
    "rar": "ye",
    "spa": "por alla - alrededor",
    "rarNo": "ye",
    "spaNo": "por alla - alrededor",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "corí yé",
    "spa": "por allá",
    "rarNo": "cori ye",
    "spaNo": "por alla",
    "tags": [
      "indicación"
    ]
  },
  {
    "rar": "yéachi",
    "spa": "abierto",
    "rarNo": "yeachi",
    "spaNo": "abierto",
    "tags": []
  },
  {
    "rar": "yeba",
    "spa": "traer",
    "rarNo": "yeba",
    "spaNo": "traer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "yeca",
    "spa": "engañar - mentir",
    "rarNo": "yeca",
    "spaNo": "enganar - mentir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "yécarami",
    "spa": "engañado",
    "rarNo": "yecarami",
    "spaNo": "enganado",
    "tags": []
  },
  {
    "rar": "yémta",
    "spa": "causar vértigo",
    "rarNo": "yemta",
    "spaNo": "causar vertigo",
    "tags": []
  },
  {
    "rar": "yemi",
    "spa": "ustedes",
    "rarNo": "yemi",
    "spaNo": "ustedes",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "yemi níhuara",
    "spa": "de ustedes",
    "rarNo": "yemi nihuara",
    "spaNo": "de ustedes",
    "tags": [
      "pronombre posesivo"
    ]
  },
  {
    "rar": "yena",
    "spa": "andar",
    "rarNo": "yena",
    "spaNo": "andar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "chu yénasí",
    "spa": "¿hasta cuándo?",
    "rarNo": "chu yenasi",
    "spaNo": "¿hasta cuando?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chu yénaco",
    "spa": "¿qué hora? - ¿Cuándo?",
    "rarNo": "chu yenaco",
    "spaNo": "¿que hora? - ¿Cuando?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "cumi yénari",
    "spa": "¿Dónde andabas?",
    "rarNo": "cumi yenari",
    "spaNo": "¿Donde andabas?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "yepu",
    "spa": "¿quién?",
    "rarNo": "yepu",
    "spaNo": "¿quien?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "yera",
    "spa": "invitar",
    "rarNo": "yera",
    "spaNo": "invitar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "yeri",
    "spa": "conducir",
    "rarNo": "yeri",
    "spaNo": "conducir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "yeta",
    "spa": "cerrado",
    "rarNo": "yeta",
    "spaNo": "cerrado",
    "tags": []
  },
  {
    "rar": "yiri",
    "spa": "clase o color",
    "rarNo": "yiri",
    "spaNo": "clase o color",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "chu yiri",
    "spa": "¿Qué color? - ¿cuál?",
    "rarNo": "chu yiri",
    "spaNo": "¿Que color? - ¿cual?",
    "tags": [
      "pregunta",
      "color"
    ]
  },
  {
    "rar": "yiri",
    "spa": "semejanza",
    "rarNo": "yiri",
    "spaNo": "semejanza",
    "tags": []
  },
  {
    "rar": "onó",
    "spa": "está enojado",
    "rarNo": "ono",
    "spaNo": "esta enojado",
    "tags": []
  },
  {
    "rar": "mapu yíripi",
    "spa": "cualquier",
    "rarNo": "mapu yiripi",
    "spaNo": "cualquier",
    "tags": []
  },
  {
    "rar": "yoca",
    "spa": "teñir",
    "rarNo": "yoca",
    "spaNo": "tenir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "yona ",
    "spa": "regañar",
    "rarNo": "yona ",
    "spaNo": "reganar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "yónarati",
    "spa": "fue regañado",
    "rarNo": "yonarati",
    "spaNo": "fue reganado",
    "tags": []
  },
  {
    "rar": "yora",
    "spa": "enojar",
    "rarNo": "yora",
    "spaNo": "enojar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "yora",
    "spa": "inclinar la cabeza",
    "rarNo": "yora",
    "spaNo": "inclinar la cabeza",
    "tags": []
  },
  {
    "rar": "yura",
    "spa": "guiar",
    "rarNo": "yura",
    "spaNo": "guiar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "yuga",
    "spa": "con",
    "rarNo": "yuga",
    "spaNo": "con",
    "tags": []
  },
  {
    "rar": "ne",
    "spa": "yo",
    "rarNo": "ne",
    "spaNo": "yo",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "mu",
    "spa": "tú",
    "rarNo": "mu",
    "spaNo": "tu",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "échi",
    "spa": "el -ella",
    "rarNo": "echi",
    "spaNo": "el -ella",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "abóe",
    "spa": "ellos",
    "rarNo": "aboe",
    "spaNo": "ellos",
    "tags": [
      "pronombre"
    ]
  },
  {
    "rar": "ta",
    "spa": "chico",
    "rarNo": "ta",
    "spaNo": "chico",
    "tags": []
  },
  {
    "rar": "siriame",
    "spa": "jefe",
    "rarNo": "siriame",
    "spaNo": "jefe",
    "tags": []
  },
  {
    "rar": "se'wa",
    "spa": "mosca",
    "rarNo": "se'wa",
    "spaNo": "mosca",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "nawiki",
    "spa": "homosexual",
    "rarNo": "nawiki",
    "spaNo": "homosexual",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "nasinácuri",
    "spa": "flojo",
    "rarNo": "nasinacuri",
    "spaNo": "flojo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chátiri",
    "spa": "feo",
    "rarNo": "chatiri",
    "spaNo": "feo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ricurí",
    "spa": "borracho",
    "rarNo": "ricuri",
    "spaNo": "borracho",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "semáti",
    "spa": "bonito",
    "rarNo": "semati",
    "spaNo": "bonito",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chátiri",
    "spa": "feo - fea",
    "rarNo": "chatiri",
    "spaNo": "feo - fea",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "weráme",
    "spa": "anciana",
    "rarNo": "werame",
    "spaNo": "anciana",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chabo",
    "spa": "telaraña",
    "rarNo": "chabo",
    "spaNo": "telarana",
    "tags": []
  },
  {
    "rar": "onorúame",
    "spa": "dios",
    "rarNo": "onoruame",
    "spaNo": "dios",
    "tags": []
  },
  {
    "rar": "warú",
    "spa": "grande",
    "rarNo": "waru",
    "spaNo": "grande",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "pébi",
    "spa": "poco tiempo",
    "rarNo": "pebi",
    "spaNo": "poco tiempo",
    "tags": []
  },
  {
    "rar": "píri mu rimúre",
    "spa": "¿qué soñaste?",
    "rarNo": "piri mu rimure",
    "spaNo": "¿que sonaste?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "ojuni",
    "spa": "pedorro",
    "rarNo": "ojuni",
    "spaNo": "pedorro",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ba'óame",
    "spa": "guapo",
    "rarNo": "ba'oame",
    "spaNo": "guapo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "sa'pégame",
    "spa": "gordo - ",
    "rarNo": "sa'pegame",
    "spaNo": "gordo - ",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ta",
    "spa": "chaparro ",
    "rarNo": "ta",
    "spaNo": "chaparro ",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "wenomíweame",
    "spa": "rico - adinerado",
    "rarNo": "wenomiweame",
    "spaNo": "rico - adinerado",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "re'pá-wirí",
    "spa": "alto ",
    "rarNo": "re'pa-wiri",
    "spaNo": "alto ",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "kaními",
    "spa": "alegre",
    "rarNo": "kanimi",
    "spaNo": "alegre",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chérame",
    "spa": "anciano",
    "rarNo": "cherame",
    "spaNo": "anciano",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ga'rabé",
    "spa": "elegante",
    "rarNo": "ga'rabe",
    "spaNo": "elegante",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "ra'ichame",
    "spa": "hablantín",
    "rarNo": "ra'ichame",
    "spaNo": "hablantin",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chigórame",
    "spa": "ladrón",
    "rarNo": "chigorame",
    "spaNo": "ladron",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "aparúame",
    "spa": "valiente",
    "rarNo": "aparuame",
    "spaNo": "valiente",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "níriami",
    "spa": "vanidoso ",
    "rarNo": "niriami",
    "spaNo": "vanidoso ",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "oparú",
    "spa": "enojado ",
    "rarNo": "oparu",
    "spaNo": "enojado ",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "imúami",
    "spa": "voraz - tragón",
    "rarNo": "imuami",
    "spaNo": "voraz - tragon",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "nátame",
    "spa": "inteligente",
    "rarNo": "natame",
    "spaNo": "inteligente",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "kenátame",
    "spa": "tonto - tonta",
    "rarNo": "kenatame",
    "spaNo": "tonto - tonta",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "nótzame",
    "spa": "trabajador",
    "rarNo": "notzame",
    "spaNo": "trabajador",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "kenótzame",
    "spa": "flojo",
    "rarNo": "kenotzame",
    "spaNo": "flojo",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "chókame",
    "spa": "negro",
    "rarNo": "chokame",
    "spaNo": "negro",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "biríngo",
    "spa": "rubio",
    "rarNo": "biringo",
    "spaNo": "rubio",
    "tags": [
      "adjetivo"
    ]
  },
  {
    "rar": "rosákame",
    "spa": "blanco",
    "rarNo": "rosakame",
    "spaNo": "blanco",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "sitákame",
    "spa": "rojo",
    "rarNo": "sitakame",
    "spaNo": "rojo",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "cho'mágame",
    "spa": "marrón",
    "rarNo": "cho'magame",
    "spaNo": "marron",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "chomítuame",
    "spa": "morado",
    "rarNo": "chomituame",
    "spaNo": "morado",
    "tags": [
      "color"
    ]
  },
  {
    "rar": "we gára",
    "spa": "muy bien",
    "rarNo": "we gara",
    "spaNo": "muy bien",
    "tags": []
  },
  {
    "rar": "sápá",
    "spa": "carne",
    "rarNo": "sapa",
    "spaNo": "carne",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "wenomí ",
    "spa": "dinero",
    "rarNo": "wenomi ",
    "spaNo": "dinero",
    "tags": []
  },
  {
    "rar": "ko",
    "spa": "ser",
    "rarNo": "ko",
    "spaNo": "ser",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "warina",
    "spa": "veloz",
    "rarNo": "warina",
    "spaNo": "veloz",
    "tags": []
  },
  {
    "rar": "ayena",
    "spa": "si",
    "rarNo": "ayena",
    "spaNo": "si",
    "tags": []
  },
  {
    "rar": "peware",
    "spa": "cigarro",
    "rarNo": "peware",
    "spaNo": "cigarro",
    "tags": []
  },
  {
    "rar": "chu mu rewé?",
    "spa": "¿cómo te llamas?",
    "rarNo": "chu mu rewe?",
    "spaNo": "¿como te llamas?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "namiuti",
    "spa": "cosa - objeto",
    "rarNo": "namiuti",
    "spaNo": "cosa - objeto",
    "tags": []
  },
  {
    "rar": "chomari",
    "spa": "venado",
    "rarNo": "chomari",
    "spaNo": "venado",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "biré",
    "spa": "uno",
    "rarNo": "bire",
    "spaNo": "uno",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "ocuá",
    "spa": "dos",
    "rarNo": "ocua",
    "spaNo": "dos",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "beikiá",
    "spa": "tres",
    "rarNo": "beikia",
    "spaNo": "tres",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "naó",
    "spa": "cuatro ",
    "rarNo": "nao",
    "spaNo": "cuatro ",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "marí",
    "spa": "cinco",
    "rarNo": "mari",
    "spaNo": "cinco",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "usáni",
    "spa": "seis",
    "rarNo": "usani",
    "spaNo": "seis",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "kitsáo",
    "spa": "siete",
    "rarNo": "kitsao",
    "spaNo": "siete",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "osá naó",
    "spa": "ocho",
    "rarNo": "osa nao",
    "spaNo": "ocho",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "kimacói",
    "spa": "nueve",
    "rarNo": "kimacoi",
    "spaNo": "nueve",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "macói",
    "spa": "diez",
    "rarNo": "macoi",
    "spaNo": "diez",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "macói biré",
    "spa": "once",
    "rarNo": "macoi bire",
    "spaNo": "once",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "macói ocuá",
    "spa": "doce",
    "rarNo": "macoi ocua",
    "spaNo": "doce",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "osá macói",
    "spa": "veinte",
    "rarNo": "osa macoi",
    "spaNo": "veinte",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "osá macoí biré",
    "spa": "veintiuno",
    "rarNo": "osa macoi bire",
    "spaNo": "veintiuno",
    "tags": [
      "número"
    ]
  },
  {
    "rar": "kéne",
    "spa": "mi - mio",
    "rarNo": "kene",
    "spaNo": "mi - mio",
    "tags": [
      "pronombre posesivo"
    ]
  },
  {
    "rar": "eyena",
    "spa": "andar",
    "rarNo": "eyena",
    "spaNo": "andar",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "kemu",
    "spa": "tú - tuyo",
    "rarNo": "kemu",
    "spaNo": "tu - tuyo",
    "tags": [
      "pronombre posesivo"
    ]
  },
  {
    "rar": "kéta",
    "spa": "nuestro",
    "rarNo": "keta",
    "spaNo": "nuestro",
    "tags": [
      "pronombre posesivo"
    ]
  },
  {
    "rar": "jípeco",
    "spa": "hay - haber",
    "rarNo": "jipeco",
    "spaNo": "hay - haber",
    "tags": []
  },
  {
    "rar": "lúnesico",
    "spa": "lunes",
    "rarNo": "lunesico",
    "spaNo": "lunes",
    "tags": [
      "día de la semana"
    ]
  },
  {
    "rar": "mártesico",
    "spa": "martes",
    "rarNo": "martesico",
    "spaNo": "martes",
    "tags": [
      "día de la semana"
    ]
  },
  {
    "rar": "nasipasico",
    "spa": "miércoles",
    "rarNo": "nasipasico",
    "spaNo": "miercoles",
    "tags": [
      "día de la semana"
    ]
  },
  {
    "rar": "juevesico",
    "spa": "jueves",
    "rarNo": "juevesico",
    "spaNo": "jueves",
    "tags": [
      "día de la semana"
    ]
  },
  {
    "rar": "viernesico",
    "spa": "viernes",
    "rarNo": "viernesico",
    "spaNo": "viernes",
    "tags": [
      "día de la semana"
    ]
  },
  {
    "rar": "ketú",
    "spa": "de ustedes",
    "rarNo": "ketu",
    "spaNo": "de ustedes",
    "tags": [
      "pronombre posesivo"
    ]
  },
  {
    "rar": "sápatoco",
    "spa": "sábado",
    "rarNo": "sapatoco",
    "spaNo": "sabado",
    "tags": [
      "día de la semana"
    ]
  },
  {
    "rar": "oméachico",
    "spa": "domingo",
    "rarNo": "omeachico",
    "spaNo": "domingo",
    "tags": [
      "día de la semana"
    ]
  },
  {
    "rar": "seporí",
    "spa": "estrella",
    "rarNo": "sepori",
    "spaNo": "estrella",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "na'í",
    "spa": "fuego",
    "rarNo": "na'i",
    "spaNo": "fuego",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "gawí",
    "spa": "montaña",
    "rarNo": "gawi",
    "spaNo": "montana",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "gawichí",
    "spa": "sierra",
    "rarNo": "gawichi",
    "spaNo": "sierra",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "urí",
    "spa": "barranco",
    "rarNo": "uri",
    "spaNo": "barranco",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "ocó",
    "spa": "pino",
    "rarNo": "oco",
    "spaNo": "pino",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "otowa",
    "spa": "ramo",
    "rarNo": "otowa",
    "spaNo": "ramo",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "barí",
    "spa": "brote",
    "rarNo": "bari",
    "spaNo": "brote",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "nawá",
    "spa": "raíz",
    "rarNo": "nawa",
    "spaNo": "raiz",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "cu",
    "spa": "leña",
    "rarNo": "cu",
    "spaNo": "lena",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "casará",
    "spa": "pasto",
    "rarNo": "casara",
    "spaNo": "pasto",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "wichurí",
    "spa": "cactus",
    "rarNo": "wichuri",
    "spaNo": "cactus",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "sewá",
    "spa": "flor",
    "rarNo": "sewa",
    "spaNo": "flor",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "bachochi",
    "spa": "río",
    "rarNo": "bachochi",
    "spaNo": "rio",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "rité",
    "spa": "piedra",
    "rarNo": "rite",
    "spaNo": "piedra",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "raé",
    "spa": "día",
    "rarNo": "rae",
    "spaNo": "dia",
    "tags": []
  },
  {
    "rar": "rocó",
    "spa": "noche",
    "rarNo": "roco",
    "spaNo": "noche",
    "tags": []
  },
  {
    "rar": "ariwá",
    "spa": "atardecer",
    "rarNo": "ariwa",
    "spaNo": "atardecer",
    "tags": []
  },
  {
    "rar": "choná",
    "spa": "anochecer",
    "rarNo": "chona",
    "spaNo": "anochecer",
    "tags": []
  },
  {
    "rar": "ukí",
    "spa": "lluvia",
    "rarNo": "uki",
    "spaNo": "lluvia",
    "tags": []
  },
  {
    "rar": "ni'wi",
    "spa": "relampago",
    "rarNo": "ni'wi",
    "spaNo": "relampago",
    "tags": []
  },
  {
    "rar": "yepá",
    "spa": "nieve",
    "rarNo": "yepa",
    "spaNo": "nieve",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "rijé",
    "spa": "granizo",
    "rarNo": "rije",
    "spaNo": "granizo",
    "tags": []
  },
  {
    "rar": "icá",
    "spa": "viento",
    "rarNo": "ica",
    "spaNo": "viento",
    "tags": []
  },
  {
    "rar": "norí",
    "spa": "nube",
    "rarNo": "nori",
    "spaNo": "nube",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "corimí",
    "spa": "arcoiris",
    "rarNo": "corimi",
    "spaNo": "arcoiris",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "ba'wi",
    "spa": "agua",
    "rarNo": "ba'wi",
    "spaNo": "agua",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "wisogá",
    "spa": "lodo",
    "rarNo": "wisoga",
    "spaNo": "lodo",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "metsá",
    "spa": "luna",
    "rarNo": "metsa",
    "spaNo": "luna",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "mapugite",
    "spa": "porque ",
    "rarNo": "mapugite",
    "spaNo": "porque ",
    "tags": []
  },
  {
    "rar": "ro'chí",
    "spa": "pez",
    "rarNo": "ro'chi",
    "spaNo": "pez",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "apanérowa",
    "spa": "amigo",
    "rarNo": "apanerowa",
    "spaNo": "amigo",
    "tags": []
  },
  {
    "rar": "chú sía",
    "spa": "¿por qúe?",
    "rarNo": "chu sia",
    "spaNo": "¿por que?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "napatsa",
    "spa": "camisa",
    "rarNo": "napatsa",
    "spaNo": "camisa",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "pura",
    "spa": "cinturón",
    "rarNo": "pura",
    "spaNo": "cinturon",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "tabaáchi",
    "spa": "taparrabo",
    "rarNo": "tabaachi",
    "spaNo": "taparrabo",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "casíbacha",
    "spa": "calzoncillo",
    "rarNo": "casibacha",
    "spaNo": "calzoncillo",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "acá",
    "spa": "calzado",
    "rarNo": "aca",
    "spaNo": "calzado",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "gorogá",
    "spa": "collar",
    "rarNo": "goroga",
    "spaNo": "collar",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "sipútsa",
    "spa": "falda",
    "rarNo": "siputsa",
    "spaNo": "falda",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "siwáwara",
    "spa": "bolsa",
    "rarNo": "siwawara",
    "spaNo": "bolsa",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "beté",
    "spa": "vivir allí",
    "rarNo": "bete",
    "spaNo": "vivir alli",
    "tags": []
  },
  {
    "rar": "betérachi",
    "spa": "casa",
    "rarNo": "beterachi",
    "spaNo": "casa",
    "tags": []
  },
  {
    "rar": "orá",
    "spa": "hacer",
    "rarNo": "ora",
    "spaNo": "hacer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "piyáca",
    "spa": "cuchillo",
    "rarNo": "piyaca",
    "spaNo": "cuchillo",
    "tags": []
  },
  {
    "rar": "kichí",
    "spa": "aborrecer",
    "rarNo": "kichi",
    "spaNo": "aborrecer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "si'runá",
    "spa": "aflojar",
    "rarNo": "si'runa",
    "spaNo": "aflojar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ca'ré",
    "spa": "amar",
    "rarNo": "ca're",
    "spaNo": "amar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cho'ná",
    "spa": "abofetear",
    "rarNo": "cho'na",
    "spaNo": "abofetear",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "co'a",
    "spa": "comer",
    "rarNo": "co'a",
    "spaNo": "comer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "aminá",
    "spa": "arrojar",
    "rarNo": "amina",
    "spaNo": "arrojar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ité",
    "spa": "haber",
    "rarNo": "ite",
    "spaNo": "haber",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "ra'itsa",
    "spa": "hablar",
    "rarNo": "ra'itsa",
    "spaNo": "hablar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "kiná",
    "spa": "desplazarse",
    "rarNo": "kina",
    "spaNo": "desplazarse",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mucú",
    "spa": "morír",
    "rarNo": "mucu",
    "spaNo": "morir",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "na'á",
    "spa": "quemar",
    "rarNo": "na'a",
    "spaNo": "quemar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nakí",
    "spa": "querer",
    "rarNo": "naki",
    "spaNo": "querer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sipá",
    "spa": "rascar",
    "rarNo": "sipa",
    "spaNo": "rascar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "sucuchú",
    "spa": "rasguñar",
    "rarNo": "sucuchu",
    "spaNo": "rasgunar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nótsa",
    "spa": "trabajar",
    "rarNo": "notsa",
    "spaNo": "trabajar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "majáwiwa",
    "spa": "temer",
    "rarNo": "majawiwa",
    "spaNo": "temer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "uché",
    "spa": "untar",
    "rarNo": "uche",
    "spaNo": "untar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "oméba",
    "spa": "vencer",
    "rarNo": "omeba",
    "spaNo": "vencer",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "rarinéa",
    "spa": "vender",
    "rarNo": "rarinea",
    "spaNo": "vender",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "niná",
    "spa": "ver",
    "rarNo": "nina",
    "spaNo": "ver",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "nará",
    "spa": "llorar",
    "rarNo": "nara",
    "spaNo": "llorar",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "mo'ó",
    "spa": "cabeza",
    "rarNo": "mo'o",
    "spaNo": "cabeza",
    "tags": [
      "verbo"
    ]
  },
  {
    "rar": "cupá",
    "spa": "cabello",
    "rarNo": "cupa",
    "spaNo": "cabello",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "cho'ma",
    "spa": "naríz",
    "rarNo": "cho'ma",
    "spaNo": "nariz",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "rení",
    "spa": "boca",
    "rarNo": "reni",
    "spaNo": "boca",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "chumí",
    "spa": "labio",
    "rarNo": "chumi",
    "spaNo": "labio",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "ramé",
    "spa": "diente",
    "rarNo": "rame",
    "spaNo": "diente",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "acábo",
    "spa": "fosa nasal",
    "rarNo": "acabo",
    "spaNo": "fosa nasal",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "cha' merá",
    "spa": "lengua",
    "rarNo": "cha' mera",
    "spaNo": "lengua",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "nacá",
    "spa": "oido",
    "rarNo": "naca",
    "spaNo": "oido",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "charóarawa",
    "spa": "barbilla",
    "rarNo": "charoarawa",
    "spaNo": "barbilla",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "roróga",
    "spa": "cuello",
    "rarNo": "roroga",
    "spaNo": "cuello",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "busí",
    "spa": "ojo",
    "rarNo": "busi",
    "spaNo": "ojo",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "rawé",
    "spa": "pecho",
    "rarNo": "rawe",
    "spaNo": "pecho",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "marachi",
    "spa": "axila",
    "rarNo": "marachi",
    "spaNo": "axila",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "ropá",
    "spa": "vientre",
    "rarNo": "ropa",
    "spaNo": "vientre",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "umí",
    "spa": "cintura",
    "rarNo": "umi",
    "spaNo": "cintura",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "macúsuwa",
    "spa": "dedo",
    "rarNo": "macusuwa",
    "spaNo": "dedo",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "wa'ícari",
    "spa": "esófago",
    "rarNo": "wa'icari",
    "spaNo": "esofago",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "amá",
    "spa": "hígado",
    "rarNo": "ama",
    "spaNo": "higado",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "sicá",
    "spa": "mano",
    "rarNo": "sica",
    "spaNo": "mano",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "sukí",
    "spa": "ombligo",
    "rarNo": "suki",
    "spaNo": "ombligo",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "bisacá",
    "spa": "pene",
    "rarNo": "bisaca",
    "spaNo": "pene",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "vejiba",
    "spa": "sijaré",
    "rarNo": "vejiba",
    "spaNo": "sijare",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "casí",
    "spa": "muslo",
    "rarNo": "casi",
    "spaNo": "muslo",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "sutú",
    "spa": "uña",
    "rarNo": "sutu",
    "spaNo": "una",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "ranícuri",
    "spa": "pie",
    "rarNo": "ranicuri",
    "spaNo": "pie",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "rejoi",
    "spa": "hombre",
    "rarNo": "rejoi",
    "spaNo": "hombre",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "mukí",
    "spa": "mujer",
    "rarNo": "muki",
    "spaNo": "mujer",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "vagina",
    "spa": "muchíca",
    "rarNo": "vagina",
    "spaNo": "muchica",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "umí",
    "spa": "cintura",
    "rarNo": "umi",
    "spaNo": "cintura",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "chi'murí",
    "spa": "senos",
    "rarNo": "chi'muri",
    "spaNo": "senos",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "sijaré",
    "spa": "ampolla",
    "rarNo": "sijare",
    "spaNo": "ampolla",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "su'wí",
    "spa": "cadáver",
    "rarNo": "su'wi",
    "spaNo": "cadaver",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "cusuchí",
    "spa": "nalga",
    "rarNo": "cusuchi",
    "spaNo": "nalga",
    "tags": [
      "parte del cuerpo"
    ]
  },
  {
    "rar": "lábara",
    "spa": "venado",
    "rarNo": "labara",
    "spaNo": "venado",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "lemári",
    "spa": "sangre",
    "rarNo": "lemari",
    "spaNo": "sangre",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "píri",
    "spa": "¿qué?",
    "rarNo": "piri",
    "spaNo": "¿que?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chú kipu",
    "spa": "¿cuánto?",
    "rarNo": "chu kipu",
    "spaNo": "¿cuanto?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chú regá",
    "spa": "¿cómo?",
    "rarNo": "chu rega",
    "spaNo": "¿como?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "chu chigá",
    "spa": "¿quién?",
    "rarNo": "chu chiga",
    "spaNo": "¿quien?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "cumí",
    "spa": "¿dónde?",
    "rarNo": "cumi",
    "spaNo": "¿donde?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "upí",
    "spa": "esposa",
    "rarNo": "upi",
    "spaNo": "esposa",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "eyé",
    "spa": "madre",
    "rarNo": "eye",
    "spaNo": "madre",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "onó",
    "spa": "padre",
    "rarNo": "ono",
    "spaNo": "padre",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "ruyé",
    "spa": "aconsejar",
    "rarNo": "ruye",
    "spaNo": "aconsejar",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "towí",
    "spa": "niño",
    "rarNo": "towi",
    "spaNo": "nino",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "tewe",
    "spa": "niña",
    "rarNo": "tewe",
    "spaNo": "nina",
    "tags": [
      "parentesco"
    ]
  },
  {
    "rar": "machí",
    "spa": "saber",
    "rarNo": "machi",
    "spaNo": "saber",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "newa",
    "spa": "recordar",
    "rarNo": "newa",
    "spaNo": "recordar",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "cusíbera",
    "spa": "banco - asiento",
    "rarNo": "cusibera",
    "spaNo": "banco - asiento",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "yocá",
    "spa": "colorear",
    "rarNo": "yoca",
    "spaNo": "colorear",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "riwí",
    "spa": "enseñar",
    "rarNo": "riwi",
    "spaNo": "ensenar",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "osé",
    "spa": "escribir",
    "rarNo": "ose",
    "spaNo": "escribir",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "ra'itsa",
    "spa": "idioma",
    "rarNo": "ra'itsa",
    "spaNo": "idioma",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "oserí",
    "spa": "libro",
    "rarNo": "oseri",
    "spaNo": "libro",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "biníriame",
    "spa": "profesor",
    "rarNo": "biniriame",
    "spaNo": "profesor",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "nurá",
    "spa": "mandar",
    "rarNo": "nura",
    "spaNo": "mandar",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "oserí",
    "spa": "papel",
    "rarNo": "oseri",
    "spaNo": "papel",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "oserí'nema",
    "spa": "leer",
    "rarNo": "oseri'nema",
    "spaNo": "leer",
    "tags": [
      "verbo",
      "escuela"
    ]
  },
  {
    "rar": "éluká",
    "spa": "¿a quién?",
    "rarNo": "eluka",
    "spaNo": "¿a quien?",
    "tags": [
      "pregunta"
    ]
  },
  {
    "rar": "secorí",
    "spa": "olla",
    "rarNo": "secori",
    "spaNo": "olla",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "pano",
    "spa": "pan",
    "rarNo": "pano",
    "spaNo": "pan",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "bitorí",
    "spa": "plato",
    "rarNo": "bitori",
    "spaNo": "plato",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "rurusí",
    "spa": "tomate",
    "rarNo": "rurusi",
    "spaNo": "tomate",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "goná",
    "spa": "sal",
    "rarNo": "gona",
    "spaNo": "sal",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "remeke",
    "spa": "tortilla",
    "rarNo": "remeke",
    "spaNo": "tortilla",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "chi'wa",
    "spa": "leche",
    "rarNo": "chi'wa",
    "spaNo": "leche",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "bojuí",
    "spa": "bellota",
    "rarNo": "bojui",
    "spaNo": "bellota",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "cajé",
    "spa": "café",
    "rarNo": "caje",
    "spaNo": "cafe",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "sakiré",
    "spa": "comal",
    "rarNo": "sakire",
    "spaNo": "comal",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "sunú",
    "spa": "maíz",
    "rarNo": "sunu",
    "spaNo": "maiz",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "muní",
    "spa": "frijol",
    "rarNo": "muni",
    "spaNo": "frijol",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "wicowí",
    "spa": "champiñón",
    "rarNo": "wicowi",
    "spaNo": "champinon",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "basána",
    "spa": "manzana",
    "rarNo": "basana",
    "spaNo": "manzana",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "cawára",
    "spa": "huevo",
    "rarNo": "cawara",
    "spaNo": "huevo",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "co’áame",
    "spa": "comida",
    "rarNo": "co’aame",
    "spaNo": "comida",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "watónari",
    "spa": "atole",
    "rarNo": "watonari",
    "spaNo": "atole",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "corí",
    "spa": "chile",
    "rarNo": "cori",
    "spaNo": "chile",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "ocó",
    "spa": "árbol",
    "rarNo": "oco",
    "spaNo": "arbol",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "cu'wáme",
    "spa": "arbusto",
    "rarNo": "cu'wame",
    "spaNo": "arbusto",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "bacá",
    "spa": "caña",
    "rarNo": "baca",
    "spaNo": "cana",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "sacará",
    "spa": "césped",
    "rarNo": "sacara",
    "spaNo": "cesped",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "irá",
    "spa": "nopal",
    "rarNo": "ira",
    "spaNo": "nopal",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "jicurí",
    "spa": "peyote",
    "rarNo": "jicuri",
    "spaNo": "peyote",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "kiribá",
    "spa": "quelite",
    "rarNo": "kiriba",
    "spaNo": "quelite",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "rotosí",
    "spa": "sauce",
    "rarNo": "rotosi",
    "spaNo": "sauce",
    "tags": [
      "planta"
    ]
  },
  {
    "rar": "misucúa",
    "spa": "zarzamora",
    "rarNo": "misucua",
    "spaNo": "zarzamora",
    "tags": [
      "alimento",
      "planta"
    ]
  },
  {
    "rar": "mísi",
    "spa": "gato",
    "rarNo": "misi",
    "spaNo": "gato",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "batu",
    "spa": "mapache",
    "rarNo": "batu",
    "spaNo": "mapache",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "ajó",
    "spa": "mosquito",
    "rarNo": "ajo",
    "spaNo": "mosquito",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "wási",
    "spa": "vaca",
    "rarNo": "wasi",
    "spaNo": "vaca",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rorí",
    "spa": "rata",
    "rarNo": "rori",
    "spaNo": "rata",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rowi",
    "spa": "conejo",
    "rarNo": "rowi",
    "spaNo": "conejo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rawigá",
    "spa": "puma",
    "rarNo": "rawiga",
    "spaNo": "puma",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "ojuí",
    "spa": "oso",
    "rarNo": "ojui",
    "spaNo": "oso",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rimó",
    "spa": "rana",
    "rarNo": "rimo",
    "spaNo": "rana",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "nacarópari",
    "spa": "mariposa",
    "rarNo": "nacaropari",
    "spaNo": "mariposa",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "a'wé",
    "spa": "águila",
    "rarNo": "a'we",
    "spaNo": "aguila",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "naparí",
    "spa": "avispa",
    "rarNo": "napari",
    "spaNo": "avispa",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "wicó",
    "spa": "abejorro",
    "rarNo": "wico",
    "spaNo": "abejorro",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "murúchi",
    "spa": "chivo",
    "rarNo": "muruchi",
    "spaNo": "chivo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "narócuri",
    "spa": "caracol",
    "rarNo": "narocuri",
    "spaNo": "caracol",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "chipawí",
    "spa": "ardilla",
    "rarNo": "chipawi",
    "spaNo": "ardilla",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "machíre",
    "spa": "alacran",
    "rarNo": "machire",
    "spaNo": "alacran",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "bo'wá",
    "spa": "borrego",
    "rarNo": "bo'wa",
    "spaNo": "borrego",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "chicuri",
    "spa": "ratón",
    "rarNo": "chicuri",
    "spaNo": "raton",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "kiyóchí",
    "spa": "zorro",
    "rarNo": "kiyochi",
    "spaNo": "zorro",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "burito",
    "spa": "burro",
    "rarNo": "burito",
    "spaNo": "burro",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "jócari",
    "spa": "camaleón",
    "rarNo": "jocari",
    "spaNo": "camaleon",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "basachí",
    "spa": "coyote",
    "rarNo": "basachi",
    "spaNo": "coyote",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "sa'í",
    "spa": "lombriz",
    "rarNo": "sa'i",
    "spaNo": "lombriz",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "coró",
    "spa": "buitre",
    "rarNo": "coro",
    "spaNo": "buitre",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "rucuchúre",
    "spa": "grillo",
    "rarNo": "rucuchure",
    "spaNo": "grillo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "wasona",
    "spa": "pato",
    "rarNo": "wasona",
    "spaNo": "pato",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "totorí",
    "spa": "gallina - pollo",
    "rarNo": "totori",
    "spaNo": "gallina - pollo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "cupá",
    "spa": "caballo",
    "rarNo": "cupa",
    "spaNo": "caballo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "wachó",
    "spa": "garza",
    "rarNo": "wacho",
    "spaNo": "garza",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "cóchi",
    "spa": "cerdo",
    "rarNo": "cochi",
    "spaNo": "cerdo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "ritúcari",
    "spa": "búho",
    "rarNo": "ritucari",
    "spaNo": "buho",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "naríbochi",
    "spa": "lobo",
    "rarNo": "naribochi",
    "spaNo": "lobo",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "sinowí",
    "spa": "serpiente",
    "rarNo": "sinowi",
    "spaNo": "serpiente",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "siorí",
    "spa": "abeja",
    "rarNo": "siori",
    "spaNo": "abeja",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "chichimó",
    "spa": "ardilla",
    "rarNo": "chichimo",
    "spaNo": "ardilla",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "co'chí",
    "spa": "perro",
    "rarNo": "co'chi",
    "spaNo": "perro",
    "tags": [
      "animal"
    ]
  },
  {
    "rar": "co'wá",
    "spa": "mosca",
    "rarNo": "co'wa",
    "spaNo": "mosca",
    "tags": []
  }
]
