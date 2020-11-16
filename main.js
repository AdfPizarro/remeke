var search=""
var tags_list=[];


var openFile = function(event) {

      var input = event.target;
      var reader = new FileReader();
      reader.onload = function(){
        var text = reader.result;
        var node = document.getElementById('output');

    lines=text.split("\n");
    while (dictionary.length) {
      dictionary.pop();
    }

    for(x=0;x<lines.length-1;x++){
      tagList=[];
      var rar=lines[x].substring(0,lines[x].indexOf(','));
      lines[x]=lines[x].substring(lines[x].indexOf(',')+1,lines[x].length);

      var spa=lines[x].substring(0,lines[x].indexOf(','));
      lines[x]=lines[x].substring(lines[x].indexOf(',')+1,lines[x].length-2);
      var rarNo=noAccent(rar);
      var spaNo=noAccent(spa);
      //console.log(lines[x])

      tagList=lines[x].split('#');
      tags=[];
      for(y=1;y<tagList.length;y++){
        if (!(tags_list.includes(tagList[y].trim()))){
          tags_list.push(tagList[y].trim());
        }
        tags.push(tagList[y].trim())

      }


      dictionary.push({rar:rar, spa:spa, rarNo:rarNo, spaNo:spaNo, tags:tags});

    }



     console.log(dictionary);

      };
      reader.readAsText(input.files[0]);
};


function noAccent(word){
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function speak(text){
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));

  speechSynthesis.onvoiceschanged = () => {
  const synth = speechSynthesis
  const voices = synth.getVoices()
  console.log(voices)
  const utterThis = new SpeechSynthesisUtterance(text)
  utterThis.voice = voices.find(v => v.name === 'Jorge')
  utterThis.pitch = 1.5
  utterThis.rate = 2
  synth.speak(utterThis)
}
}

$("#input" ).keyup(function() {
 search=$("#input").val().toLowerCase();

 if (search.length == 0) {
   $(".notes").show();
   $("#resultContainer").empty()
 }else{
   $(".notes").hide();
   draw(filter(search));
 }

});

function filter(word){
  filteredResult=[];
  for(x=0;x<dictionary.length;x++){
    if (dictionary[x].rarNo.includes(word)||dictionary[x].spaNo.includes(word)){
      filteredResult.push(dictionary[x])
    }
  }
  return filteredResult
}

function draw(array){
  $("#resultContainer").empty()
  var limit;
  var mediaWidth = window.matchMedia("(max-width: 600px)");

  if (array.length>15){
    limit=15;
  }else{
    limit=array.length;
  }

  if (limit>=7&&mediaWidth.matches) {
     limit=8;
  }

  if (array.length==0){
    var content='<div class="no_info"><h2>No hay informacion</h2>'
    +'</div> ';

    $("#resultContainer").append(content);
  }else{
    for(x=0;x<limit;x++){
      var sizeclass="";
      if (limit==1){
        sizeclass="full";
      }

      var content='<div class="'+sizeclass+'"><div class="card"><div class="card-header"><span class="badge badge-warning">Rarámuri</span>'+
        array[x].rar
      +' </div><div class="card-body"><span class="badge badge-warning">Español</span>'+
        array[x].spa
      +'</div></div></div> ';

      $("#resultContainer").append(content);
    }

  }


}


const dictionary=[
  {
    "rar": "arirí",
    "spa": "!ay!",
    "rarNo": "ariri",
    "spaNo": "!ay!",
    "tags": []
  },
  {
    "rar": "cumi simí",
    "spa": "¿A dónde vas?",
    "rarNo": "cumi simi",
    "spaNo": "¿A donde vas?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chu yena",
    "spa": "¿a qué hora?",
    "rarNo": "chu yena",
    "spaNo": "¿a que hora?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "éluká",
    "spa": "¿a quién?",
    "rarNo": "eluka",
    "spaNo": "¿a quien?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "acha",
    "spa": "¿acaso?",
    "rarNo": "acha",
    "spaNo": "¿acaso?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chu mu rewé?",
    "spa": "¿cómo te llamas?",
    "rarNo": "chu mu rewe?",
    "spaNo": "¿como te llamas?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chú regá",
    "spa": "¿cómo?",
    "rarNo": "chu rega",
    "spaNo": "¿como?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "churigá",
    "spa": "¿cómo? ¿de que manera?",
    "rarNo": "churiga",
    "spaNo": "¿como? ¿de que manera?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "cabu",
    "spa": "¿cuándo?",
    "rarNo": "cabu",
    "spaNo": "¿cuando?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "churicó",
    "spa": "¿Cuándo? ¿qué día?",
    "rarNo": "churico",
    "spaNo": "¿Cuando? ¿que dia?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "quipu natiguí",
    "spa": "¿Cuánto vale?",
    "rarNo": "quipu natigui",
    "spaNo": "¿Cuanto vale?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chú kipu",
    "spa": "¿cuánto?",
    "rarNo": "chu kipu",
    "spaNo": "¿cuanto?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "quipu",
    "spa": "¿Cuánto?",
    "rarNo": "quipu",
    "spaNo": "¿Cuanto?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chu quipu",
    "spa": "¿Cuánto? - ¿Qué cantidad?",
    "rarNo": "chu quipu",
    "spaNo": "¿Cuanto? - ¿Que cantidad?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "cumi yénari",
    "spa": "¿Dónde andabas?",
    "rarNo": "cumi yenari",
    "spaNo": "¿Donde andabas?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "¿cum burú?",
    "spa": "¿dónde está el camino?",
    "rarNo": "¿cum buru?",
    "spaNo": "¿donde esta el camino?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "¿cumi bité?",
    "spa": "¿dónde vives?",
    "rarNo": "¿cumi bite?",
    "spaNo": "¿donde vives?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "cumí",
    "spa": "¿dónde?",
    "rarNo": "cumi",
    "spaNo": "¿donde?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "cumi",
    "spa": "¿Dónde? - ¿A dónde?",
    "rarNo": "cumi",
    "spaNo": "¿Donde? - ¿A donde?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "acha gará ju?",
    "spa": "¿estás bien?",
    "rarNo": "acha gara ju?",
    "spaNo": "¿estas bien?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chu yénasí",
    "spa": "¿hasta cuándo?",
    "rarNo": "chu yenasi",
    "spaNo": "¿hasta cuando?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chuseá",
    "spa": "¿por qué?",
    "rarNo": "chusea",
    "spaNo": "¿por que?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chú sía",
    "spa": "¿por qúe?",
    "rarNo": "chu sia",
    "spaNo": "¿por que?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chu yiri",
    "spa": "¿Qué color? - ¿cuál?",
    "rarNo": "chu yiri",
    "spaNo": "¿Que color? - ¿cual?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "piri ju",
    "spa": "¿qué es?",
    "rarNo": "piri ju",
    "spaNo": "¿que es?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chu yénaco",
    "spa": "¿qué hora? - ¿Cuándo?",
    "rarNo": "chu yenaco",
    "spaNo": "¿que hora? - ¿Cuando?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "¿chu chiré",
    "spa": "¿Qué importa?",
    "rarNo": "¿chu chire",
    "spaNo": "¿Que importa?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chu iquí",
    "spa": "¿Qué pasa?",
    "rarNo": "chu iqui",
    "spaNo": "¿Que pasa?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "píri mu rimúre",
    "spa": "¿qué soñaste?",
    "rarNo": "piri mu rimure",
    "spaNo": "¿que sonaste?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chu mi iquiri",
    "spa": "¿qué te parece?",
    "rarNo": "chu mi iquiri",
    "spaNo": "¿que te parece?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "churigá mi mayé",
    "spa": "¿qué te parece?",
    "rarNo": "churiga mi maye",
    "spaNo": "¿que te parece?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chu mi iquiri",
    "spa": "¿qué te pasó?",
    "rarNo": "chu mi iquiri",
    "spaNo": "¿que te paso?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chuché",
    "spa": "¿qué?",
    "rarNo": "chuche",
    "spaNo": "¿que?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "píri",
    "spa": "¿qué?",
    "rarNo": "piri",
    "spaNo": "¿que?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "chu chigá",
    "spa": "¿quién?",
    "rarNo": "chu chiga",
    "spaNo": "¿quien?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "yepu",
    "spa": "¿quién?",
    "rarNo": "yepu",
    "spaNo": "¿quien?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "acha rijóara echo'ná",
    "spa": "¿vive alguien allí?",
    "rarNo": "acha rijoara echo'na",
    "spaNo": "¿vive alguien alli?",
    "tags": [
      "preguntas"
    ]
  },
  {
    "rar": "mujeru",
    "spa": "¿y tú?",
    "rarNo": "mujeru",
    "spaNo": "¿y tu?",
    "tags": [
      "preguntas"
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
    "rar": "tamí",
    "spa": "a mí",
    "rarNo": "tami",
    "spaNo": "a mi",
    "tags": []
  },
  {
    "rar": "arigá",
    "spa": "a pesar de- de todos modos",
    "rarNo": "ariga",
    "spaNo": "a pesar de- de todos modos",
    "tags": []
  },
  {
    "rar": "chaquena",
    "spa": "a un lado",
    "rarNo": "chaquena",
    "spaNo": "a un lado",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "sinomí",
    "spa": "a veces - de vez en cuando",
    "rarNo": "sinomi",
    "spaNo": "a veces - de vez en cuando",
    "tags": []
  },
  {
    "rar": "ri'ré",
    "spa": "abajo",
    "rarNo": "ri're",
    "spaNo": "abajo",
    "tags": []
  },
  {
    "rar": "huaminá arihué",
    "spa": "abandonar",
    "rarNo": "huamina arihue",
    "spaNo": "abandonar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "icárata",
    "spa": "abanicar",
    "rarNo": "icarata",
    "spaNo": "abanicar",
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
    "rar": "siorí",
    "spa": "abeja",
    "rarNo": "siori",
    "spaNo": "abeja",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "si'orí",
    "spa": "abeja - mosca",
    "rarNo": "si'ori",
    "spaNo": "abeja - mosca",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "huicó",
    "spa": "abejorro",
    "rarNo": "huico",
    "spaNo": "abejorro",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "irápatami",
    "spa": "abierto",
    "rarNo": "irapatami",
    "spaNo": "abierto",
    "tags": []
  },
  {
    "rar": "yéachi",
    "spa": "abierto",
    "rarNo": "yeachi",
    "spaNo": "abierto",
    "tags": []
  },
  {
    "rar": "cho'ná",
    "spa": "abofetear",
    "rarNo": "cho'na",
    "spaNo": "abofetear",
    "tags": [
      "verbos"
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
    "rar": "kichí",
    "spa": "aborrecer",
    "rarNo": "kichi",
    "spaNo": "aborrecer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "irapa",
    "spa": "abrir",
    "rarNo": "irapa",
    "spaNo": "abrir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "riná",
    "spa": "abrir la boca",
    "rarNo": "rina",
    "spaNo": "abrir la boca",
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
    "rar": "usú",
    "spa": "abuela - nieta materna",
    "rarNo": "usu",
    "spaNo": "abuela - nieta materna",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "acáchura",
    "spa": "abuela paterna",
    "rarNo": "acachura",
    "spaNo": "abuela paterna",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "ochícari",
    "spa": "abuelo paterno",
    "rarNo": "ochicari",
    "spaNo": "abuelo paterno",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "quiná",
    "spa": "acá - por acá",
    "rarNo": "quina",
    "spaNo": "aca - por aca",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "jecuá",
    "spa": "aca esta",
    "rarNo": "jecua",
    "spaNo": "aca esta",
    "tags": []
  },
  {
    "rar": "suhuá",
    "spa": "acabar - terminar",
    "rarNo": "suhua",
    "spaNo": "acabar - terminar",
    "tags": [
      "verbos"
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
    "rar": "tapa",
    "spa": "acarrear - traer en las manos",
    "rarNo": "tapa",
    "spaNo": "acarrear - traer en las manos",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pabera ",
    "spa": "acarrear en la espalda",
    "rarNo": "pabera ",
    "spaNo": "acarrear en la espalda",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "murubéana",
    "spa": "acercarse",
    "rarNo": "murubeana",
    "spaNo": "acercarse",
    "tags": []
  },
  {
    "rar": "nahuíi",
    "spa": "acercarse",
    "rarNo": "nahuii",
    "spaNo": "acercarse",
    "tags": []
  },
  {
    "rar": "iquí",
    "spa": "acontecer - suceder",
    "rarNo": "iqui",
    "spaNo": "acontecer - suceder",
    "tags": []
  },
  {
    "rar": "nehuará",
    "spa": "acordarse - recordar",
    "rarNo": "nehuara",
    "spaNo": "acordarse - recordar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pachá",
    "spa": "adentro",
    "rarNo": "pacha",
    "spaNo": "adentro",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "ariósibá",
    "spa": "adios",
    "rarNo": "ariosiba",
    "spaNo": "adios",
    "tags": []
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
    "rar": "oráami",
    "spa": "afilado",
    "rarNo": "oraami",
    "spaNo": "afilado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "orara",
    "spa": "afilar",
    "rarNo": "orara",
    "spaNo": "afilar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "si'runá",
    "spa": "aflojar ",
    "rarNo": "si'runa",
    "spaNo": "aflojar ",
    "tags": [
      "verbos"
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
    "rar": "machiná",
    "spa": "afuera",
    "rarNo": "machina",
    "spaNo": "afuera",
    "tags": [
      "indicaciones"
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
    "rar": "buná",
    "spa": "agacharse - inclinarse",
    "rarNo": "buna",
    "spaNo": "agacharse - inclinarse",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chapí",
    "spa": "agarrar",
    "rarNo": "chapi",
    "spaNo": "agarrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "macó",
    "spa": "agarrar",
    "rarNo": "maco",
    "spaNo": "agarrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huisa",
    "spa": "agarrar - arrebatar",
    "rarNo": "huisa",
    "spaNo": "agarrar - arrebatar",
    "tags": [
      "verbos"
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
    "rar": "anacha",
    "spa": "aguantar",
    "rarNo": "anacha",
    "spaNo": "aguantar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ba'huí",
    "spa": "aguantar",
    "rarNo": "ba'hui",
    "spaNo": "aguantar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rijorá",
    "spa": "aguantar ",
    "rarNo": "rijora",
    "spaNo": "aguantar ",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chupéami",
    "spa": "agudo - puntiagudo",
    "rarNo": "chupeami",
    "spaNo": "agudo - puntiagudo",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "a'hué",
    "spa": "águila",
    "rarNo": "a'hue",
    "spaNo": "aguila",
    "tags": [
      "animales"
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
    "rar": "ihuará",
    "spa": "agujerar - perforar",
    "rarNo": "ihuara",
    "spaNo": "agujerar - perforar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "si'rina",
    "spa": "ahogar",
    "rarNo": "si'rina",
    "spaNo": "ahogar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "coché",
    "spa": "ahogarse",
    "rarNo": "coche",
    "spaNo": "ahogarse",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "si'rí",
    "spa": "ahogarse",
    "rarNo": "si'ri",
    "spaNo": "ahogarse",
    "tags": []
  },
  {
    "rar": "jipi",
    "spa": "ahora",
    "rarNo": "jipi",
    "spaNo": "ahora",
    "tags": []
  },
  {
    "rar": "cusébana",
    "spa": "ahorcar - estrangular",
    "rarNo": "cusebana",
    "spaNo": "ahorcar - estrangular",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "morisó",
    "spa": "ahumarse",
    "rarNo": "moriso",
    "spaNo": "ahumarse",
    "tags": []
  },
  {
    "rar": "si'núriga",
    "spa": "al contrario",
    "rarNo": "si'nuriga",
    "spaNo": "al contrario",
    "tags": []
  },
  {
    "rar": "jubáami",
    "spa": "al fin - finalmente",
    "rarNo": "jubaami",
    "spaNo": "al fin - finalmente",
    "tags": []
  },
  {
    "rar": "a'nahuí",
    "spa": "al mismo tiempo",
    "rarNo": "a'nahui",
    "spaNo": "al mismo tiempo",
    "tags": []
  },
  {
    "rar": "cohuana",
    "spa": "al otro lado - detrás",
    "rarNo": "cohuana",
    "spaNo": "al otro lado - detras",
    "tags": []
  },
  {
    "rar": "a' rínamorí",
    "spa": "al poco rato",
    "rarNo": "a' rinamori",
    "spaNo": "al poco rato",
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
    "rar": "térico",
    "spa": "al rato - ahorita",
    "rarNo": "terico",
    "spaNo": "al rato - ahorita",
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
    "rar": "ba'arínara",
    "spa": "al siguiente día",
    "rarNo": "ba'arinara",
    "spaNo": "al siguiente dia",
    "tags": []
  },
  {
    "rar": "aná",
    "spa": "ala- aleta",
    "rarNo": "ana",
    "spaNo": "ala- aleta",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "machíre",
    "spa": "alacran",
    "rarNo": "machire",
    "spaNo": "alacran",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "náapa",
    "spa": "alcanzar",
    "rarNo": "naapa",
    "spaNo": "alcanzar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nachibuí",
    "spa": "alcanzar",
    "rarNo": "nachibui",
    "spaNo": "alcanzar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "seba",
    "spa": "alcanzar - llegar - lograr",
    "rarNo": "seba",
    "spaNo": "alcanzar - llegar - lograr",
    "tags": []
  },
  {
    "rar": "canira",
    "spa": "alegrarse",
    "rarNo": "canira",
    "spaNo": "alegrarse",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "kaními",
    "spa": "alegre",
    "rarNo": "kanimi",
    "spaNo": "alegre",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "micabéana",
    "spa": "alejarse - retirarse",
    "rarNo": "micabeana",
    "spaNo": "alejarse - retirarse",
    "tags": []
  },
  {
    "rar": "anachapa",
    "spa": "aletear",
    "rarNo": "anachapa",
    "spaNo": "aletear",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chi'ró",
    "spa": "aletear",
    "rarNo": "chi'ro",
    "spaNo": "aletear",
    "tags": [
      "verbos"
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
    "rar": "ri'huana",
    "spa": "alisar - aplanar - cepillar",
    "rarNo": "ri'huana",
    "spaNo": "alisar - aplanar - cepillar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sa'huí",
    "spa": "aliviarse",
    "rarNo": "sa'hui",
    "spaNo": "aliviarse",
    "tags": []
  },
  {
    "rar": "huamí",
    "spa": "allá - más",
    "rarNo": "huami",
    "spaNo": "alla - mas",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "echo'ná inaro",
    "spa": "allá viene",
    "rarNo": "echo'na inaro",
    "spaNo": "alla viene",
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
    "rar": "norigá",
    "spa": "alrededor",
    "rarNo": "noriga",
    "spaNo": "alrededor",
    "tags": []
  },
  {
    "rar": "re'pá-wirí",
    "spa": "alto ",
    "rarNo": "re'pa-wiri",
    "spaNo": "alto ",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "rajá",
    "spa": "alumbrar - arder - quemar",
    "rarNo": "raja",
    "spaNo": "alumbrar - arder - quemar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nuté",
    "spa": "alzar",
    "rarNo": "nute",
    "spaNo": "alzar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "catehua",
    "spa": "alzar - guardar",
    "rarNo": "catehua",
    "spaNo": "alzar - guardar",
    "tags": [
      "verbos"
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
    "rar": "chi'rá",
    "spa": "amanecer",
    "rarNo": "chi'ra",
    "spaNo": "amanecer",
    "tags": []
  },
  {
    "rar": "ca'ré",
    "spa": "amar",
    "rarNo": "ca're",
    "spaNo": "amar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "caré",
    "spa": "amar - querer",
    "rarNo": "care",
    "spaNo": "amar - querer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "corácami",
    "spa": "amargo",
    "rarNo": "coracami",
    "spaNo": "amargo",
    "tags": [
      "sabores"
    ]
  },
  {
    "rar": "saróami",
    "spa": "amarillo - anaranjado",
    "rarNo": "saroami",
    "spaNo": "amarillo - anaranjado",
    "tags": [
      "colores"
    ]
  },
  {
    "rar": "borogá",
    "spa": "amarrado",
    "rarNo": "boroga",
    "spaNo": "amarrado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "buré",
    "spa": "amarrar",
    "rarNo": "bure",
    "spaNo": "amarrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nachigó",
    "spa": "amarrar - anudar",
    "rarNo": "nachigo",
    "spaNo": "amarrar - anudar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "masó",
    "spa": "amasar",
    "rarNo": "maso",
    "spaNo": "amasar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ocuánica",
    "spa": "ambos",
    "rarNo": "ocuanica",
    "spaNo": "ambos",
    "tags": []
  },
  {
    "rar": "apanérowa",
    "spa": "amigo",
    "rarNo": "apanerowa",
    "spaNo": "amigo",
    "tags": []
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
    "rar": "ca'marota",
    "spa": "ampollarse",
    "rarNo": "ca'marota",
    "spaNo": "ampollarse",
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
      "colores"
    ]
  },
  {
    "rar": "hui'ré",
    "spa": "ancho",
    "rarNo": "hui're",
    "spaNo": "ancho",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "weráme",
    "spa": "anciana",
    "rarNo": "werame",
    "spaNo": "anciana",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "chérame",
    "spa": "anciano",
    "rarNo": "cherame",
    "spaNo": "anciano",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "eyena",
    "spa": "andar",
    "rarNo": "eyena",
    "spaNo": "andar",
    "tags": []
  },
  {
    "rar": "hiuirihuirira",
    "spa": "andar (haciendo algo)",
    "rarNo": "hiuirihuirira",
    "spaNo": "andar (haciendo algo)",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "norira",
    "spa": "andar dando vueltas",
    "rarNo": "norira",
    "spaNo": "andar dando vueltas",
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
    "rar": "rapaco rocogó",
    "spa": "anoche",
    "rarNo": "rapaco rocogo",
    "spaNo": "anoche",
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
    "rar": "huanihuí rocogó",
    "spa": "anteanoche",
    "rarNo": "huanihui rocogo",
    "spaNo": "anteanoche",
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
    "rar": "jubánara",
    "spa": "anterior",
    "rarNo": "jubanara",
    "spaNo": "anterior",
    "tags": []
  },
  {
    "rar": "chabé",
    "spa": "antes - hace poco - el otro día",
    "rarNo": "chabe",
    "spaNo": "antes - hace poco - el otro dia",
    "tags": []
  },
  {
    "rar": "bonorí",
    "spa": "anzuelo",
    "rarNo": "bonori",
    "spaNo": "anzuelo",
    "tags": []
  },
  {
    "rar": "bamíbari",
    "spa": "año",
    "rarNo": "bamibari",
    "spaNo": "ano",
    "tags": []
  },
  {
    "rar": "cho'huá",
    "spa": "apagar fuego",
    "rarNo": "cho'hua",
    "spaNo": "apagar fuego",
    "tags": []
  },
  {
    "rar": "rojana",
    "spa": "apartar",
    "rarNo": "rojana",
    "spaNo": "apartar",
    "tags": [
      "verbos"
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
    "rar": "a'huínari",
    "spa": "aparte",
    "rarNo": "a'huinari",
    "spaNo": "aparte",
    "tags": []
  },
  {
    "rar": "mitáchami",
    "spa": "aplastado",
    "rarNo": "mitachami",
    "spaNo": "aplastado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "michúnari",
    "spa": "aplastar",
    "rarNo": "michunari",
    "spaNo": "aplastar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nitapa",
    "spa": "aplastar",
    "rarNo": "nitapa",
    "spaNo": "aplastar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rachina",
    "spa": "aplastar",
    "rarNo": "rachina",
    "spaNo": "aplastar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "muté",
    "spa": "aplastarse",
    "rarNo": "mute",
    "spaNo": "aplastarse",
    "tags": []
  },
  {
    "rar": "rachí",
    "spa": "aplastarse",
    "rarNo": "rachi",
    "spaNo": "aplastarse",
    "tags": []
  },
  {
    "rar": "sicachó",
    "spa": "aplaudir",
    "rarNo": "sicacho",
    "spaNo": "aplaudir",
    "tags": [
      "verbos"
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
    "rar": "pénama",
    "spa": "aprenderé",
    "rarNo": "penama",
    "spaNo": "aprendere",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "jiyá",
    "spa": "apresurarse",
    "rarNo": "jiya",
    "spaNo": "apresurarse",
    "tags": []
  },
  {
    "rar": "cha'i",
    "spa": "apretarse - atorarse",
    "rarNo": "cha'i",
    "spaNo": "apretarse - atorarse",
    "tags": [
      "verbos"
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
    "rar": "jóhua",
    "spa": "apuntar - señalar",
    "rarNo": "johua",
    "spaNo": "apuntar - senalar",
    "tags": [
      "verbos"
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
    "rar": "echimí",
    "spa": "aquel - aquella",
    "rarNo": "echimi",
    "spaNo": "aquel - aquella",
    "tags": [
      "pronombres"
    ]
  },
  {
    "rar": "mi",
    "spa": "aquel - aquella",
    "rarNo": "mi",
    "spaNo": "aquel - aquella",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "na'í",
    "spa": "aquí",
    "rarNo": "na'i",
    "spaNo": "aqui",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "arara",
    "spa": "arado",
    "rarNo": "arara",
    "spaNo": "arado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "narúchari",
    "spa": "araña",
    "rarNo": "naruchari",
    "spaNo": "arana",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ocó",
    "spa": "árbol",
    "rarNo": "oco",
    "spaNo": "arbol",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "cu'wáme",
    "spa": "arbusto",
    "rarNo": "cu'wame",
    "spaNo": "arbusto",
    "tags": [
      "plantas"
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
    "rar": "conomí",
    "spa": "arcoiris",
    "rarNo": "conomi",
    "spaNo": "arcoiris",
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
    "rar": "rajáami",
    "spa": "ardiente",
    "rarNo": "rajaami",
    "spaNo": "ardiente",
    "tags": []
  },
  {
    "rar": "chichimó",
    "spa": "ardilla",
    "rarNo": "chichimo",
    "spaNo": "ardilla",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "chimorí",
    "spa": "ardilla",
    "rarNo": "chimori",
    "spaNo": "ardilla",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "chipawí",
    "spa": "ardilla",
    "rarNo": "chipawi",
    "spaNo": "ardilla",
    "tags": [
      "animales"
    ]
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
      "adjetivos"
    ]
  },
  {
    "rar": "hui'rá",
    "spa": "arete",
    "rarNo": "hui'ra",
    "spaNo": "arete",
    "tags": [
      "vestimenta"
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
    "rar": "opó",
    "spa": "arrancar - sacar",
    "rarNo": "opo",
    "spaNo": "arrancar - sacar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bo'na",
    "spa": "arrancar hierba",
    "rarNo": "bo'na",
    "spaNo": "arrancar hierba",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "banira",
    "spa": "arrastrar - llevar jalando",
    "rarNo": "banira",
    "spaNo": "arrastrar - llevar jalando",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "meta",
    "spa": "arrear - llevar (animales)",
    "rarNo": "meta",
    "spaNo": "arrear - llevar (animales)",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ro'huí",
    "spa": "arrepentirse",
    "rarNo": "ro'hui",
    "spaNo": "arrepentirse",
    "tags": []
  },
  {
    "rar": "paayé",
    "spa": "arriba",
    "rarNo": "paaye",
    "spaNo": "arriba",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "ripá",
    "spa": "arriba",
    "rarNo": "ripa",
    "spaNo": "arriba",
    "tags": [
      "indicaciones"
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
    "rar": "aminá",
    "spa": "arrojar",
    "rarNo": "amina",
    "spaNo": "arrojar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huaminá pa",
    "spa": "arrojar",
    "rarNo": "huamina pa",
    "spaNo": "arrojar",
    "tags": [
      "verbos"
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
    "rar": "rijachi",
    "spa": "arroyo",
    "rarNo": "rijachi",
    "spaNo": "arroyo",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "cachuna",
    "spa": "arrugar",
    "rarNo": "cachuna",
    "spaNo": "arrugar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "si'runá",
    "spa": "arrugar - plegar",
    "rarNo": "si'runa",
    "spaNo": "arrugar - plegar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "si'rú",
    "spa": "arrugarse",
    "rarNo": "si'ru",
    "spaNo": "arrugarse",
    "tags": []
  },
  {
    "rar": "ahuérami",
    "spa": "asado",
    "rarNo": "ahuerami",
    "spaNo": "asado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "túcami",
    "spa": "asado",
    "rarNo": "tucami",
    "spaNo": "asado",
    "tags": []
  },
  {
    "rar": "mijírami",
    "spa": "asado - tatemado",
    "rarNo": "mijirami",
    "spaNo": "asado - tatemado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ahué",
    "spa": "asar",
    "rarNo": "ahue",
    "spaNo": "asar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "mi'yá",
    "spa": "asesinar - matar",
    "rarNo": "mi'ya",
    "spaNo": "asesinar - matar",
    "tags": [
      "verbos"
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
    "rar": "echaní",
    "spa": "así dice - eso dice",
    "rarNo": "echani",
    "spaNo": "asi dice - eso dice",
    "tags": []
  },
  {
    "rar": "Echirigá ju",
    "spa": "así es",
    "rarNo": "Echiriga ju",
    "spaNo": "asi es",
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
    "rar": "echirigá níraga",
    "spa": "así sea",
    "rarNo": "echiriga niraga",
    "spaNo": "asi sea",
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
    "rar": "majajara - majajárata",
    "spa": "asustar - espantar",
    "rarNo": "majajara - majajarata",
    "spaNo": "asustar - espantar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "natibú",
    "spa": "atajar",
    "rarNo": "natibu",
    "spaNo": "atajar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ariwá",
    "spa": "atardecer",
    "rarNo": "ariwa",
    "spaNo": "atardecer",
    "tags": []
  },
  {
    "rar": "tobá",
    "spa": "atascarse",
    "rarNo": "toba",
    "spaNo": "atascarse",
    "tags": []
  },
  {
    "rar": "aché",
    "spa": "atiesarse - morirse de frio",
    "rarNo": "ache",
    "spaNo": "atiesarse - morirse de frio",
    "tags": []
  },
  {
    "rar": "hua'ché",
    "spa": "atiestarse de frío",
    "rarNo": "hua'che",
    "spaNo": "atiestarse de frio",
    "tags": []
  },
  {
    "rar": "rohué",
    "spa": "atizar",
    "rarNo": "rohue",
    "spaNo": "atizar",
    "tags": [
      "verbos"
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
    "rar": "huatónari",
    "spa": "atole - pinole",
    "rarNo": "huatonari",
    "spaNo": "atole - pinole",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "jubá",
    "spa": "atrás",
    "rarNo": "juba",
    "spaNo": "atras",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "ripuna simira",
    "spa": "atravesar",
    "rarNo": "ripuna simira",
    "spaNo": "atravesar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "muhuehua",
    "spa": "aumentar",
    "rarNo": "muhuehua",
    "spaNo": "aumentar",
    "tags": [
      "verbos"
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
    "rar": "bachá simí",
    "spa": "avanza ",
    "rarNo": "bacha simi",
    "spaNo": "avanza ",
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
    "rar": "ruhuigá",
    "spa": "avisándole",
    "rarNo": "ruhuiga",
    "spaNo": "avisandole",
    "tags": []
  },
  {
    "rar": "ru",
    "spa": "avisar",
    "rarNo": "ru",
    "spaNo": "avisar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ruyé",
    "spa": "avisar - aconsejar - informar",
    "rarNo": "ruye",
    "spaNo": "avisar - aconsejar - informar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nahuesa",
    "spa": "avisar - predicar",
    "rarNo": "nahuesa",
    "spaNo": "avisar - predicar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "naparí",
    "spa": "avispa",
    "rarNo": "napari",
    "spaNo": "avispa",
    "tags": [
      "animales"
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
    "rar": "raoaci",
    "spa": "ayer",
    "rarNo": "raoaci",
    "spaNo": "ayer",
    "tags": []
  },
  {
    "rar": "nigúurami",
    "spa": "ayudante",
    "rarNo": "niguurami",
    "spaNo": "ayudante",
    "tags": []
  },
  {
    "rar": "co'huira",
    "spa": "ayudar - salvar",
    "rarNo": "co'huira",
    "spaNo": "ayudar - salvar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nigúura",
    "spa": "ayudar - salvar",
    "rarNo": "niguura",
    "spaNo": "ayudar - salvar",
    "tags": [
      "verbos"
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
    "rar": "ahuí",
    "spa": "bailar",
    "rarNo": "ahui",
    "spaNo": "bailar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "riquina",
    "spa": "bajar",
    "rarNo": "riquina",
    "spaNo": "bajar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "casuna",
    "spa": "bajar del monte",
    "rarNo": "casuna",
    "spaNo": "bajar del monte",
    "tags": [
      "verbos"
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
    "rar": "cusíbera",
    "spa": "banco - asiento",
    "rarNo": "cusibera",
    "spaNo": "banco - asiento",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "huiba",
    "spa": "bañarse",
    "rarNo": "huiba",
    "spaNo": "banarse",
    "tags": [
      "verbos"
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
    "rar": "chabóa",
    "spa": "barba - bigote",
    "rarNo": "chaboa",
    "spaNo": "barba - bigote",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "charóarahua",
    "spa": "barba - bigote",
    "rarNo": "charoarahua",
    "spaNo": "barba - bigote",
    "tags": [
      "partes del cuerpo"
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
    "rar": "charóarawa",
    "spa": "barbilla",
    "rarNo": "charoarawa",
    "spaNo": "barbilla",
    "tags": [
      "partes  del cuerpo"
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
    "rar": "pichí",
    "spa": "barrer",
    "rarNo": "pichi",
    "spaNo": "barrer",
    "tags": [
      "verbos"
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
    "rar": "ochorí",
    "spa": "barro",
    "rarNo": "ochori",
    "spaNo": "barro",
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
    "rar": "tisora",
    "spa": "bastón",
    "rarNo": "tisora",
    "spaNo": "baston",
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
    "rar": "loca",
    "spa": "batir - mezclar",
    "rarNo": "loca",
    "spaNo": "batir - mezclar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pagó",
    "spa": "bautizar",
    "rarNo": "pago",
    "spaNo": "bautizar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ba'yoami",
    "spa": "bello - hermoso - lindo",
    "rarNo": "ba'yoami",
    "spaNo": "bello - hermoso - lindo",
    "tags": [
      "adjetivos"
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
    "rar": "uchú",
    "spa": "besar - chupar",
    "rarNo": "uchu",
    "spaNo": "besar - chupar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "agásane",
    "spa": "bilis",
    "rarNo": "agasane",
    "spaNo": "bilis",
    "tags": []
  },
  {
    "rar": "umuri",
    "spa": "bisabuelo - bisnieto",
    "rarNo": "umuri",
    "spaNo": "bisabuelo - bisnieto",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "rosákame",
    "spa": "blanco",
    "rarNo": "rosakame",
    "spaNo": "blanco",
    "tags": [
      "colores"
    ]
  },
  {
    "rar": "rasáami",
    "spa": "blando",
    "rarNo": "rasaami",
    "spaNo": "blando",
    "tags": []
  },
  {
    "rar": "rosánahua",
    "spa": "blanquear",
    "rarNo": "rosanahua",
    "spaNo": "blanquear",
    "tags": [
      "verbos"
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
    "rar": "rení",
    "spa": "boca",
    "rarNo": "reni",
    "spaNo": "boca",
    "tags": [
      "partes  del cuerpo"
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
    "rar": "ri'ná",
    "spa": "boca arriba",
    "rarNo": "ri'na",
    "spaNo": "boca arriba",
    "tags": []
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
    "rar": "semáti",
    "spa": "bonito",
    "rarNo": "semati",
    "spaNo": "bonito",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "su'huetari",
    "spa": "bonito",
    "rarNo": "su'huetari",
    "spaNo": "bonito",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "su'hué",
    "spa": "bonito ",
    "rarNo": "su'hue",
    "spaNo": "bonito ",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "simati",
    "spa": "bonito - hermoso",
    "rarNo": "simati",
    "spaNo": "bonito - hermoso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ricurí",
    "spa": "borracho",
    "rarNo": "ricuri",
    "spaNo": "borracho",
    "tags": [
      "adjetivos"
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
    "rar": "nacuba",
    "spa": "borrar",
    "rarNo": "nacuba",
    "spaNo": "borrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bo'wá",
    "spa": "borrego",
    "rarNo": "bo'wa",
    "spaNo": "borrego",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ritéena",
    "spa": "bostezar",
    "rarNo": "riteena",
    "spaNo": "bostezar",
    "tags": [
      "verbos"
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
    "rar": "sicahué",
    "spa": "bracear",
    "rarNo": "sicahue",
    "spaNo": "bracear",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sahuiri",
    "spa": "brasas - carbón",
    "rarNo": "sahuiri",
    "spaNo": "brasas - carbon",
    "tags": []
  },
  {
    "rar": "aparúami",
    "spa": "Bravo - cruel - feroz - valiente",
    "rarNo": "aparuami",
    "spaNo": "Bravo - cruel - feroz - valiente",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "sicá",
    "spa": "brazo o mano",
    "rarNo": "sica",
    "spaNo": "brazo o mano",
    "tags": [
      "partes del cuerpo"
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
    "rar": "pochí",
    "spa": "brincar",
    "rarNo": "pochi",
    "spaNo": "brincar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "a'huí",
    "spa": "brotar - germinar (semillas)",
    "rarNo": "a'hui",
    "spaNo": "brotar - germinar (semillas)",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "barí",
    "spa": "brote",
    "rarNo": "bari",
    "spaNo": "brote",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "gará",
    "spa": "bueno",
    "rarNo": "gara",
    "spaNo": "bueno",
    "tags": []
  },
  {
    "rar": "ritúcari",
    "spa": "búho",
    "rarNo": "ritucari",
    "spaNo": "buho",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "coró",
    "spa": "buitre",
    "rarNo": "coro",
    "spaNo": "buitre",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "burito",
    "spa": "burro",
    "rarNo": "burito",
    "spaNo": "burro",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ásiga",
    "spa": "buscándolo",
    "rarNo": "asiga",
    "spaNo": "buscandolo",
    "tags": []
  },
  {
    "rar": "amí",
    "spa": "buscar",
    "rarNo": "ami",
    "spaNo": "buscar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cahué",
    "spa": "caballo",
    "rarNo": "cahue",
    "spaNo": "caballo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "cupá",
    "spa": "caballo",
    "rarNo": "cupa",
    "spaNo": "caballo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "jabu",
    "spa": "caballo",
    "rarNo": "jabu",
    "spaNo": "caballo",
    "tags": [
      "animales"
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
    "rar": "mo'ó",
    "spa": "cabeza",
    "rarNo": "mo'o",
    "spaNo": "cabeza",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "toreta",
    "spa": "cacarear",
    "rarNo": "toreta",
    "spaNo": "cacarear",
    "tags": [
      "verbos",
      "animales"
    ]
  },
  {
    "rar": "wichurí",
    "spa": "cactus",
    "rarNo": "wichuri",
    "spaNo": "cactus",
    "tags": [
      "plantas"
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
    "rar": "su'wí",
    "spa": "cadáver",
    "rarNo": "su'wi",
    "spaNo": "cadaver",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "suhuíami",
    "spa": "cadáveres",
    "rarNo": "suhuiami",
    "spaNo": "cadaveres",
    "tags": []
  },
  {
    "rar": "cachagá",
    "spa": "cadera",
    "rarNo": "cachaga",
    "spaNo": "cadera",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "raramú",
    "spa": "caer un rayo",
    "rarNo": "raramu",
    "spaNo": "caer un rayo",
    "tags": [
      "verbos"
    ]
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
    "rar": "ri'nahuí",
    "spa": "caerse",
    "rarNo": "ri'nahui",
    "spaNo": "caerse",
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
    "rar": "cajé",
    "spa": "café",
    "rarNo": "caje",
    "spaNo": "cafe",
    "tags": [
      "alimento"
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
    "rar": "bachí",
    "spa": "calabaza",
    "rarNo": "bachi",
    "spaNo": "calabaza",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "ratabacha",
    "spa": "calentar",
    "rarNo": "ratabacha",
    "spaNo": "calentar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tabachi",
    "spa": "calentar",
    "rarNo": "tabachi",
    "spaNo": "calentar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rasuca",
    "spa": "calentarse al sol",
    "rarNo": "rasuca",
    "spaNo": "calentarse al sol",
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
    "rar": "quirá",
    "spa": "calmarse",
    "rarNo": "quira",
    "spaNo": "calmarse",
    "tags": []
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
    "rar": "casíbacha",
    "spa": "calzoncillo",
    "rarNo": "casibacha",
    "spaNo": "calzoncillo",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "jócari",
    "spa": "camaleón",
    "rarNo": "jocari",
    "spaNo": "camaleon",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "nacurihua",
    "spa": "cambiar",
    "rarNo": "nacurihua",
    "spaNo": "cambiar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huenomí rojuácami",
    "spa": "cambio (dinero)",
    "rarNo": "huenomi rojuacami",
    "spaNo": "cambio (dinero)",
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
    "rar": "simí",
    "spa": "caminar",
    "rarNo": "simi",
    "spaNo": "caminar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "buhué",
    "spa": "camino",
    "rarNo": "buhue",
    "spaNo": "camino",
    "tags": []
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
    "rar": "chiquí",
    "spa": "camote",
    "rarNo": "chiqui",
    "spaNo": "camote",
    "tags": [
      "alimentos"
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
    "rar": "matosá",
    "spa": "canas",
    "rarNo": "matosa",
    "spaNo": "canas",
    "tags": [
      "partes del cuerpo"
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
    "rar": "risira",
    "spa": "cansar",
    "rarNo": "risira",
    "spaNo": "cansar",
    "tags": [
      "verbos"
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
    "rar": "huicará",
    "spa": "cantar",
    "rarNo": "huicara",
    "spaNo": "cantar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nahuají",
    "spa": "cantar",
    "rarNo": "nahuaji",
    "spaNo": "cantar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bacá",
    "spa": "caña",
    "rarNo": "baca",
    "spaNo": "cana",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "capitani",
    "spa": "capitán",
    "rarNo": "capitani",
    "spaNo": "capitan",
    "tags": []
  },
  {
    "rar": "acá",
    "spa": "cara - nariz",
    "rarNo": "aca",
    "spaNo": "cara - nariz",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "narácuri",
    "spa": "caracol",
    "rarNo": "naracuri",
    "spaNo": "caracol",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "narócuri",
    "spa": "caracol",
    "rarNo": "narocuri",
    "spaNo": "caracol",
    "tags": [
      "animales"
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
    "rar": "sápá",
    "spa": "carne",
    "rarNo": "sapa",
    "spaNo": "carne",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "tabla sipáami",
    "spa": "carpintero",
    "rarNo": "tabla sipaami",
    "spaNo": "carpintero",
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
    "rar": "bitechi",
    "spa": "casa",
    "rarNo": "bitechi",
    "spaNo": "casa",
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
    "rar": "bitichí",
    "spa": "casa - habitación",
    "rarNo": "bitichi",
    "spaNo": "casa - habitacion",
    "tags": []
  },
  {
    "rar": "cumurachi",
    "spa": "casa de la comunidad",
    "rarNo": "cumurachi",
    "spaNo": "casa de la comunidad",
    "tags": []
  },
  {
    "rar": "nihuícohua",
    "spa": "casarse",
    "rarNo": "nihuicohua",
    "spaNo": "casarse",
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
    "rar": "noguí",
    "spa": "casi",
    "rarNo": "nogui",
    "spaNo": "casi",
    "tags": []
  },
  {
    "rar": "soguí",
    "spa": "casi",
    "rarNo": "sogui",
    "spaNo": "casi",
    "tags": []
  },
  {
    "rar": "macoy miná nahuó",
    "spa": "catorce",
    "rarNo": "macoy mina nahuo",
    "spaNo": "catorce",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "yémta",
    "spa": "causar vértigo",
    "rarNo": "yemta",
    "spaNo": "causar vertigo",
    "tags": []
  },
  {
    "rar": "sirúami",
    "spa": "cazado",
    "rarNo": "siruami",
    "spaNo": "cazado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "sirú",
    "spa": "cazar - pescar",
    "rarNo": "siru",
    "spaNo": "cazar - pescar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cochírahua",
    "spa": "ceja",
    "rarNo": "cochirahua",
    "spaNo": "ceja",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "ni'mayéami",
    "spa": "celoso",
    "rarNo": "ni'mayeami",
    "spaNo": "celoso",
    "tags": [
      "adjetivos"
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
    "rar": "ticó",
    "spa": "cercar",
    "rarNo": "tico",
    "spaNo": "cercar",
    "tags": [
      "verbos"
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
    "rar": "tigótachi",
    "spa": "cerco de piedra",
    "rarNo": "tigotachi",
    "spaNo": "cerco de piedra",
    "tags": []
  },
  {
    "rar": "cóchi",
    "spa": "cerdo",
    "rarNo": "cochi",
    "spaNo": "cerdo",
    "tags": [
      "animales"
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
    "rar": "cupí",
    "spa": "cerrar los ojos",
    "rarNo": "cupi",
    "spaNo": "cerrar los ojos",
    "tags": [
      "verbos"
    ]
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
    "rar": "sacará",
    "spa": "césped",
    "rarNo": "sacara",
    "spaNo": "cesped",
    "tags": [
      "plantas"
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
    "rar": "ochobé",
    "spa": "chamuscar",
    "rarNo": "ochobe",
    "spaNo": "chamuscar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chacá",
    "spa": "chanate",
    "rarNo": "chaca",
    "spaNo": "chanate",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "pe téeri",
    "spa": "chaparro",
    "rarNo": "pe teeri",
    "spaNo": "chaparro",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "sotóchi",
    "spa": "chaparro",
    "rarNo": "sotochi",
    "spaNo": "chaparro",
    "tags": [
      "adjetivos,"
    ]
  },
  {
    "rar": "ta",
    "spa": "chaparro ",
    "rarNo": "ta",
    "spaNo": "chaparro ",
    "tags": [
      "adjetivos"
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
    "rar": "táa",
    "spa": "chico - infante - pequeño",
    "rarNo": "taa",
    "spaNo": "chico - infante - pequeno",
    "tags": []
  },
  {
    "rar": "huicuhui",
    "spa": "chiflar",
    "rarNo": "huicuhui",
    "spaNo": "chiflar",
    "tags": [
      "verbos"
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
    "rar": "ibócari",
    "spa": "chile (colorado - grande - seco)",
    "rarNo": "ibocari",
    "spaNo": "chile (colorado - grande - seco)",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "ta",
    "spa": "chiquito",
    "rarNo": "ta",
    "spaNo": "chiquito",
    "tags": []
  },
  {
    "rar": "chibá",
    "spa": "chiva",
    "rarNo": "chiba",
    "spaNo": "chiva",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "murúchi",
    "spa": "chivo",
    "rarNo": "muruchi",
    "spaNo": "chivo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "bi'líami",
    "spa": "chueco - torcido",
    "rarNo": "bi'liami",
    "spaNo": "chueco - torcido",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "busugachi",
    "spa": "ciego",
    "rarNo": "busugachi",
    "spaNo": "ciego",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "que machíriami",
    "spa": "ciego",
    "rarNo": "que machiriami",
    "spaNo": "ciego",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ma'agá",
    "spa": "ciempiés",
    "rarNo": "ma'aga",
    "spaNo": "ciempies",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "biré ciento",
    "spa": "cien",
    "rarNo": "bire ciento",
    "spaNo": "cien",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "irura",
    "spa": "ciertamiente",
    "rarNo": "irura",
    "spaNo": "ciertamiente",
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
    "rar": "marí",
    "spa": "cinco",
    "rarNo": "mari",
    "spaNo": "cinco",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "marisa macoy",
    "spa": "cincuenta",
    "rarNo": "marisa macoy",
    "spaNo": "cincuenta",
    "tags": [
      "números"
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
    "rar": "pura",
    "spa": "cinturón - faja",
    "rarNo": "pura",
    "spaNo": "cinturon - faja",
    "tags": [
      "vestimenta"
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
    "rar": "huarúrachi",
    "spa": "ciudad",
    "rarNo": "huarurachi",
    "spaNo": "ciudad",
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
    "rar": "cahuíami",
    "spa": "claro - limpio (cielo)",
    "rarNo": "cahuiami",
    "spaNo": "claro - limpio (cielo)",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "yiri",
    "spa": "clase o color",
    "rarNo": "yiri",
    "spaNo": "clase o color",
    "tags": [
      "colores"
    ]
  },
  {
    "rar": "michóntami",
    "spa": "clavado",
    "rarNo": "michontami",
    "spaNo": "clavado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "majáami",
    "spa": "cobarde - miedoso - temeroso",
    "rarNo": "majaami",
    "spaNo": "cobarde - miedoso - temeroso",
    "tags": [
      "adjetivos"
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
    "rar": "quimá",
    "spa": "cobija",
    "rarNo": "quima",
    "spaNo": "cobija",
    "tags": []
  },
  {
    "rar": "nipáami",
    "spa": "cobrador",
    "rarNo": "nipaami",
    "spaNo": "cobrador",
    "tags": []
  },
  {
    "rar": "bujé",
    "spa": "cobrar - quitar algo",
    "rarNo": "buje",
    "spaNo": "cobrar - quitar algo",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nipá",
    "spa": "cobrar - quitar algo",
    "rarNo": "nipa",
    "spaNo": "cobrar - quitar algo",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "basú",
    "spa": "cocer - hervir",
    "rarNo": "basu",
    "spaNo": "cocer - hervir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "súami",
    "spa": "cocido",
    "rarNo": "suami",
    "spaNo": "cocido",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "huasa",
    "spa": "cocinar",
    "rarNo": "huasa",
    "spaNo": "cocinar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ocorú",
    "spa": "codiciar - desear mucho",
    "rarNo": "ocoru",
    "spaNo": "codiciar - desear mucho",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rochorí",
    "spa": "codorniz",
    "rarNo": "rochori",
    "spaNo": "codorniz",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "sitóachi",
    "spa": "codorniz",
    "rarNo": "sitoachi",
    "spaNo": "codorniz",
    "tags": []
  },
  {
    "rar": "huasí",
    "spa": "cola",
    "rarNo": "huasi",
    "spaNo": "cola",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "paca",
    "spa": "colar",
    "rarNo": "paca",
    "spaNo": "colar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huijáhua",
    "spa": "colgar",
    "rarNo": "huijahua",
    "spaNo": "colgar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cuseba",
    "spa": "colgarse - ahogarse",
    "rarNo": "cuseba",
    "spaNo": "colgarse - ahogarse",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "simuchí",
    "spa": "colibrí",
    "rarNo": "simuchi",
    "spaNo": "colibri",
    "tags": [
      "animales"
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
    "rar": "sitácami",
    "spa": "colorado",
    "rarNo": "sitacami",
    "spaNo": "colorado",
    "tags": [
      "colores"
    ]
  },
  {
    "rar": "yocá",
    "spa": "colorear",
    "rarNo": "yoca",
    "spaNo": "colorear",
    "tags": [
      "verbos",
      "escuela"
    ]
  },
  {
    "rar": "ricamuchi",
    "spa": "comadreja",
    "rarNo": "ricamuchi",
    "spaNo": "comadreja",
    "tags": [
      "animales"
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
    "rar": "o'huina",
    "spa": "comenzar",
    "rarNo": "o'huina",
    "spaNo": "comenzar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "co'a",
    "spa": "comer",
    "rarNo": "co'a",
    "spaNo": "comer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "co'huá",
    "spa": "comer",
    "rarNo": "co'hua",
    "spaNo": "comer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cumí",
    "spa": "comer",
    "rarNo": "cumi",
    "spaNo": "comer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "co'ué",
    "spa": "comer mucho",
    "rarNo": "co'ue",
    "spaNo": "comer mucho",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "achíptiami",
    "spa": "cómico",
    "rarNo": "achiptiami",
    "spaNo": "comico",
    "tags": []
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
    "rar": "chuhué",
    "spa": "como quiera",
    "rarNo": "chuhue",
    "spaNo": "como quiera",
    "tags": []
  },
  {
    "rar": "apanérohua",
    "spa": "compañero",
    "rarNo": "apanerohua",
    "spaNo": "companero",
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
    "rar": "sebara",
    "spa": "completar - cumplir",
    "rarNo": "sebara",
    "spaNo": "completar - cumplir",
    "tags": []
  },
  {
    "rar": "garara",
    "spa": "componer - mejorar",
    "rarNo": "garara",
    "spaNo": "componer - mejorar",
    "tags": [
      "verbos"
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
    "spa": "comprar",
    "rarNo": "rara",
    "spaNo": "comprar",
    "tags": [
      "verbos"
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
    "rar": "na'rohua",
    "spa": "con - también",
    "rarNo": "na'rohua",
    "spaNo": "con - tambien",
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
    "rar": "rocomíami",
    "spa": "cóncavo",
    "rarNo": "rocomiami",
    "spaNo": "concavo",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "risénsia 'ya",
    "spa": "conceder - autorizar - permitir",
    "rarNo": "risensia 'ya",
    "spaNo": "conceder - autorizar - permitir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "yeri",
    "spa": "conducir",
    "rarNo": "yeri",
    "spaNo": "conducir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nachupa",
    "spa": "conectar",
    "rarNo": "nachupa",
    "spaNo": "conectar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rowi",
    "spa": "conejo",
    "rarNo": "rowi",
    "spaNo": "conejo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "no ",
    "spa": "confiar - admirar",
    "rarNo": "no ",
    "spaNo": "confiar - admirar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ro'rochébana",
    "spa": "congelar",
    "rarNo": "ro'rochebana",
    "spaNo": "congelar",
    "tags": [
      "verbos"
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
    "rar": "ra'e",
    "spa": "conocer (lugar)",
    "rarNo": "ra'e",
    "spaNo": "conocer (lugar)",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "saca",
    "spa": "conseguir",
    "rarNo": "saca",
    "spaNo": "conseguir",
    "tags": [
      "verbos"
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
    "rar": "tará",
    "spa": "contar",
    "rarNo": "tara",
    "spaNo": "contar",
    "tags": [
      "verbos",
      "escuela"
    ]
  },
  {
    "rar": "buchí",
    "spa": "contener",
    "rarNo": "buchi",
    "spaNo": "contener",
    "tags": [
      "verbos"
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
    "rar": "ocuá litro buchí",
    "spa": "contiene dos litros",
    "rarNo": "ocua litro buchi",
    "spaNo": "contiene dos litros",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "nimica",
    "spa": "contradecir",
    "rarNo": "nimica",
    "spaNo": "contradecir",
    "tags": []
  },
  {
    "rar": "surá",
    "spa": "corazón",
    "rarNo": "sura",
    "spaNo": "corazon",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "méchuri",
    "spa": "cordero",
    "rarNo": "mechuri",
    "spaNo": "cordero",
    "tags": [
      "animales"
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
    "rar": "ujuma",
    "spa": "correr",
    "rarNo": "ujuma",
    "spaNo": "correr",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "siquiré",
    "spa": "cortar con un cuchillo",
    "rarNo": "siquire",
    "spaNo": "cortar con un cuchillo",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "teri",
    "spa": "corto",
    "rarNo": "teri",
    "spaNo": "corto",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "namuti",
    "spa": "cosa - animal",
    "rarNo": "namuti",
    "spaNo": "cosa - animal",
    "tags": [
      "animales"
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
    "rar": "su",
    "spa": "coser",
    "rarNo": "su",
    "spaNo": "coser",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huachica",
    "spa": "costilla",
    "rarNo": "huachica",
    "spaNo": "costilla",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "natéami",
    "spa": "costoso",
    "rarNo": "nateami",
    "spaNo": "costoso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "basachí",
    "spa": "coyote",
    "rarNo": "basachi",
    "spaNo": "coyote",
    "tags": [
      "animales"
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
    "rar": "ochera",
    "spa": "crecer",
    "rarNo": "ochera",
    "spaNo": "crecer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "mayé",
    "spa": "creer que sí - pensar - opinar",
    "rarNo": "maye",
    "spaNo": "creer que si - pensar - opinar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huera ",
    "spa": "criar",
    "rarNo": "huera ",
    "spaNo": "criar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ochébana ",
    "spa": "criar",
    "rarNo": "ochebana ",
    "spaNo": "criar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sitira ané",
    "spa": "criticar - insultar",
    "rarNo": "sitira ane",
    "spaNo": "criticar - insultar",
    "tags": [
      "verbos"
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
    "rar": "cursi",
    "spa": "cruz",
    "rarNo": "cursi",
    "spaNo": "cruz",
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
    "rar": "mapu yíripi",
    "spa": "cualquier",
    "rarNo": "mapu yiripi",
    "spaNo": "cualquier",
    "tags": []
  },
  {
    "rar": "chuyiripi",
    "spa": "cualquiera",
    "rarNo": "chuyiripi",
    "spaNo": "cualquiera",
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
    "rar": "ratabáachi",
    "spa": "cuando hace calor",
    "rarNo": "ratabaachi",
    "spaNo": "cuando hace calor",
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
    "rar": "macari",
    "spa": "cuarta (medida)",
    "rarNo": "macari",
    "spaNo": "cuarta (medida)",
    "tags": []
  },
  {
    "rar": "nahuó",
    "spa": "cuatro",
    "rarNo": "nahuo",
    "spaNo": "cuatro",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "naó",
    "spa": "cuatro ",
    "rarNo": "nao",
    "spaNo": "cuatro ",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "pora",
    "spa": "cubrir - tapar",
    "rarNo": "pora",
    "spaNo": "cubrir - tapar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "niporíbana",
    "spa": "cubrir con agua",
    "rarNo": "niporibana",
    "spaNo": "cubrir con agua",
    "tags": [
      "verbos"
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
    "rar": "piyáca",
    "spa": "cuchillo",
    "rarNo": "piyaca",
    "spaNo": "cuchillo",
    "tags": []
  },
  {
    "rar": "ripiyá",
    "spa": "cuchillo",
    "rarNo": "ripiya",
    "spaNo": "cuchillo",
    "tags": []
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
    "rar": "cutá",
    "spa": "cuello - garganta",
    "rarNo": "cuta",
    "spaNo": "cuello - garganta",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "ahuá",
    "spa": "cuerno",
    "rarNo": "ahua",
    "spaNo": "cuerno",
    "tags": []
  },
  {
    "rar": "corachi ",
    "spa": "cuervo",
    "rarNo": "corachi ",
    "spaNo": "cuervo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "rihuí",
    "spa": "cuesta arriba",
    "rarNo": "rihui",
    "spaNo": "cuesta arriba",
    "tags": [
      "indicaciones"
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
    "rar": "nisé",
    "spa": "cuidar - pastorear",
    "rarNo": "nise",
    "spaNo": "cuidar - pastorear",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tibú",
    "spa": "cuidar - vigilar",
    "rarNo": "tibu",
    "spaNo": "cuidar - vigilar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sinohui",
    "spa": "culebras - víboras",
    "rarNo": "sinohui",
    "spaNo": "culebras - viboras",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "choquira",
    "spa": "culpable",
    "rarNo": "choquira",
    "spaNo": "culpable",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ro'hué",
    "spa": "cultivar maíz",
    "rarNo": "ro'hue",
    "spaNo": "cultivar maiz",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chi'eé",
    "spa": "cuñado - cuñada",
    "rarNo": "chi'ee",
    "spaNo": "cunado - cunada",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "baré",
    "spa": "cura",
    "rarNo": "bare",
    "spaNo": "cura",
    "tags": []
  },
  {
    "rar": "bajíami",
    "spa": "curandero",
    "rarNo": "bajiami",
    "spaNo": "curandero",
    "tags": []
  },
  {
    "rar": "rimério",
    "spa": "curandero - crucifijo",
    "rarNo": "rimerio",
    "spaNo": "curandero - crucifijo",
    "tags": []
  },
  {
    "rar": "sipáami",
    "spa": "curandero - hechicero",
    "rarNo": "sipaami",
    "spaNo": "curandero - hechicero",
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
    "rar": "ohua",
    "spa": "curar",
    "rarNo": "ohua",
    "spaNo": "curar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sa'huá",
    "spa": "curar - sanar",
    "rarNo": "sa'hua",
    "spaNo": "curar - sanar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "agá",
    "spa": "dándole",
    "rarNo": "aga",
    "spaNo": "dandole",
    "tags": []
  },
  {
    "rar": "ya",
    "spa": "dar - convidar",
    "rarNo": "ya",
    "spaNo": "dar - convidar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nijá",
    "spa": "dar - entregar",
    "rarNo": "nija",
    "spaNo": "dar - entregar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nijí",
    "spa": "dar - entregar - obsequiar",
    "rarNo": "niji",
    "spaNo": "dar - entregar - obsequiar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nahuara",
    "spa": "dar a luz ",
    "rarNo": "nahuara",
    "spaNo": "dar a luz ",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chijuna",
    "spa": "dar asco - menospreciar",
    "rarNo": "chijuna",
    "spaNo": "dar asco - menospreciar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cotúura",
    "spa": "dar comida",
    "rarNo": "cotuura",
    "spaNo": "dar comida",
    "tags": [
      "verbos"
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
    "rar": "oyera",
    "spa": "dar consejos",
    "rarNo": "oyera",
    "spaNo": "dar consejos",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cohua",
    "spa": "dar de comer",
    "rarNo": "cohua",
    "spaNo": "dar de comer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cóo",
    "spa": "dar de comer",
    "rarNo": "coo",
    "spaNo": "dar de comer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "noreba",
    "spa": "dar vuelta",
    "rarNo": "noreba",
    "spaNo": "dar vuelta",
    "tags": [
      "indicaciones"
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
    "rar": "ocuá",
    "spa": "de - desde",
    "rarNo": "ocua",
    "spaNo": "de - desde",
    "tags": []
  },
  {
    "rar": "chúbirigá",
    "spa": "de alguna manera",
    "rarNo": "chubiriga",
    "spaNo": "de alguna manera",
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
    "rar": "achigórigá",
    "spa": "de la misma manera",
    "rarNo": "achigoriga",
    "spaNo": "de la misma manera",
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
    "rar": "huicáhuaraba",
    "spa": "de nada - por nada",
    "rarNo": "huicahuaraba",
    "spaNo": "de nada - por nada",
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
    "rar": "si'huinárigá",
    "spa": "de otra manera - en cambio",
    "rarNo": "si'huinariga",
    "spaNo": "de otra manera - en cambio",
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
    "rar": "sayiná",
    "spa": "de repente",
    "rarNo": "sayina",
    "spaNo": "de repente",
    "tags": []
  },
  {
    "rar": "ketú",
    "spa": "de ustedes",
    "rarNo": "ketu",
    "spaNo": "de ustedes",
    "tags": [
      "pronombres posesivos"
    ]
  },
  {
    "rar": "yemi níhuara",
    "spa": "de ustedes",
    "rarNo": "yemi nihuara",
    "spaNo": "de ustedes",
    "tags": [
      "pronombres posesivos"
    ]
  },
  {
    "rar": "ri're pachá",
    "spa": "debajo",
    "rarNo": "ri're pacha",
    "spaNo": "debajo",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "huiqué",
    "spa": "deber",
    "rarNo": "huique",
    "spaNo": "deber",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ané",
    "spa": "decir",
    "rarNo": "ane",
    "spaNo": "decir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "aní",
    "spa": "decir",
    "rarNo": "ani",
    "spaNo": "decir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "anirá",
    "spa": "decir (futuro)",
    "rarNo": "anira",
    "spaNo": "decir (futuro)",
    "tags": [
      "verbos"
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
    "rar": "arihué",
    "spa": "dejar",
    "rarNo": "arihue",
    "spaNo": "dejar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pe téeri ripí",
    "spa": "demora",
    "rarNo": "pe teeri ripi",
    "spaNo": "demora",
    "tags": []
  },
  {
    "rar": "otoná",
    "spa": "derecho",
    "rarNo": "otona",
    "spaNo": "derecho",
    "tags": []
  },
  {
    "rar": "huachíami",
    "spa": "derecho - recto",
    "rarNo": "huachiami",
    "spaNo": "derecho - recto",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "cu0luhua",
    "spa": "derramar - tirar (líquido)",
    "rarNo": "cu0luhua",
    "spaNo": "derramar - tirar (liquido)",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ra'lá",
    "spa": "derramarse",
    "rarNo": "ra'la",
    "spaNo": "derramarse",
    "tags": []
  },
  {
    "rar": "basoná",
    "spa": "derretir",
    "rarNo": "basona",
    "spaNo": "derretir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cajuina",
    "spa": "derribar",
    "rarNo": "cajuina",
    "spaNo": "derribar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "poyaca",
    "spa": "desabrido",
    "rarNo": "poyaca",
    "spaNo": "desabrido",
    "tags": [
      "sabores"
    ]
  },
  {
    "rar": "aquibi",
    "spa": "desaparecer",
    "rarNo": "aquibi",
    "spaNo": "desaparecer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "norohuiri",
    "spa": "desaparecerse",
    "rarNo": "norohuiri",
    "spaNo": "desaparecerse",
    "tags": []
  },
  {
    "rar": "isaba",
    "spa": "descansar",
    "rarNo": "isaba",
    "spaNo": "descansar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nosobú",
    "spa": "descomponer - echar a perder",
    "rarNo": "nosobu",
    "spaNo": "descomponer - echar a perder",
    "tags": [
      "verbos"
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
    "rar": "ru",
    "spa": "descubrir",
    "rarNo": "ru",
    "spaNo": "descubrir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "machira",
    "spa": "descubrir - mostrar",
    "rarNo": "machira",
    "spaNo": "descubrir - mostrar",
    "tags": [
      "verbos"
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
    "rar": "tucua",
    "spa": "desde abajo",
    "rarNo": "tucua",
    "spaNo": "desde abajo",
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
    "rar": "rijata",
    "spa": "desgastarse",
    "rarNo": "rijata",
    "spaNo": "desgastarse",
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
    "rar": "napó",
    "spa": "deshierbar - quitar hierba",
    "rarNo": "napo",
    "spaNo": "deshierbar - quitar hierba",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "mi'ró",
    "spa": "desmayarse",
    "rarNo": "mi'ro",
    "spaNo": "desmayarse",
    "tags": [
      "medicina"
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
    "rar": "mosí",
    "spa": "desmenuzar",
    "rarNo": "mosi",
    "spaNo": "desmenuzar",
    "tags": [
      "verbos"
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
    "rar": "rasíami",
    "spa": "desobediente",
    "rarNo": "rasiami",
    "spaNo": "desobediente",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ra'rana",
    "spa": "desparramar - extender",
    "rarNo": "ra'rana",
    "spaNo": "desparramar - extender",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ripora",
    "spa": "despedir",
    "rarNo": "ripora",
    "spaNo": "despedir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chiná",
    "spa": "despeinado",
    "rarNo": "china",
    "spaNo": "despeinado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "sopota",
    "spa": "despeinado",
    "rarNo": "sopota",
    "spaNo": "despeinado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "bisú",
    "spa": "despellejar",
    "rarNo": "bisu",
    "spaNo": "despellejar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "busurébana",
    "spa": "despertar",
    "rarNo": "busurebana",
    "spaNo": "despertar",
    "tags": [
      "verbos"
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
    "rar": "kiná",
    "spa": "desplazarse",
    "rarNo": "kina",
    "spaNo": "desplazarse",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bo'obu",
    "spa": "desplumar",
    "rarNo": "bo'obu",
    "spaNo": "desplumar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huiribeco",
    "spa": "después",
    "rarNo": "huiribeco",
    "spaNo": "despues",
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
    "rar": "porapa",
    "spa": "destapar",
    "rarNo": "porapa",
    "spaNo": "destapar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "suhuaba",
    "spa": "destruir - acabar",
    "rarNo": "suhuaba",
    "spaNo": "destruir - acabar",
    "tags": [
      "verbos"
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
    "rar": "huiraba",
    "spa": "detener",
    "rarNo": "huiraba",
    "spaNo": "detener",
    "tags": [
      "verbos"
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
    "rar": "rahué",
    "spa": "día",
    "rarNo": "rahue",
    "spaNo": "dia",
    "tags": []
  },
  {
    "rar": "omohuárahuachi",
    "spa": "día de fiesta",
    "rarNo": "omohuarahuachi",
    "spaNo": "dia de fiesta",
    "tags": []
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
    "rar": "macoy",
    "spa": "diez",
    "rarNo": "macoy",
    "spaNo": "diez",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "nóchari",
    "spa": "dificil",
    "rarNo": "nochari",
    "spaNo": "dificil",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "nate",
    "spa": "difícil - trabajoso",
    "rarNo": "nate",
    "spaNo": "dificil - trabajoso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "si",
    "spa": "dilatarse",
    "rarNo": "si",
    "spaNo": "dilatarse",
    "tags": [
      "medicina"
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
    "rar": "onorúame",
    "spa": "dios",
    "rarNo": "onoruame",
    "spaNo": "dios",
    "tags": []
  },
  {
    "rar": "onorúami",
    "spa": "Dios Padre",
    "rarNo": "onoruami",
    "spaNo": "Dios Padre",
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
    "rar": "ran'né",
    "spa": "disparar",
    "rarNo": "ran'ne",
    "spaNo": "disparar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ratá",
    "spa": "disparar con un rifle",
    "rarNo": "rata",
    "spaNo": "disparar con un rifle",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "si'nú",
    "spa": "distinto - diferente",
    "rarNo": "si'nu",
    "spaNo": "distinto - diferente",
    "tags": []
  },
  {
    "rar": "romina",
    "spa": "doblar - enrollar",
    "rarNo": "romina",
    "spaNo": "doblar - enrollar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "macói ocuá",
    "spa": "doce",
    "rarNo": "macoi ocua",
    "spaNo": "doce",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "macoy miná ocuá",
    "spa": "doce",
    "rarNo": "macoy mina ocua",
    "spaNo": "doce",
    "tags": [
      "números"
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
    "rar": "ocó",
    "spa": "doler",
    "rarNo": "oco",
    "spaNo": "doler",
    "tags": [
      "verbos",
      "medicina"
    ]
  },
  {
    "rar": "oméachico",
    "spa": "domingo",
    "rarNo": "omeachico",
    "spaNo": "domingo",
    "tags": [
      "días de la semana"
    ]
  },
  {
    "rar": "cónahua",
    "spa": "donar- regalar",
    "rarNo": "conahua",
    "spaNo": "donar- regalar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "mapo'na",
    "spa": "dónde",
    "rarNo": "mapo'na",
    "spaNo": "donde",
    "tags": []
  },
  {
    "rar": "cochí",
    "spa": "dormir",
    "rarNo": "cochi",
    "spaNo": "dormir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ocochí",
    "spa": "dormir",
    "rarNo": "ocochi",
    "spaNo": "dormir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ocuá",
    "spa": "dos",
    "rarNo": "ocua",
    "spaNo": "dos",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "pasá",
    "spa": "echar - tirar",
    "rarNo": "pasa",
    "spaNo": "echar - tirar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "apé",
    "spa": "echar a la espalda",
    "rarNo": "ape",
    "spaNo": "echar a la espalda",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ra'icha",
    "spa": "echarse a perder - desperdiciar",
    "rarNo": "ra'icha",
    "spaNo": "echarse a perder - desperdiciar",
    "tags": [
      "verbos"
    ]
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
    "rar": "binoy",
    "spa": "el - ella - el mismo",
    "rarNo": "binoy",
    "spaNo": "el - ella - el mismo",
    "tags": [
      "pronombres"
    ]
  },
  {
    "rar": "pagónara",
    "spa": "el día anterior",
    "rarNo": "pagonara",
    "spaNo": "el dia anterior",
    "tags": []
  },
  {
    "rar": "échi",
    "spa": "el -ella",
    "rarNo": "echi",
    "spaNo": "el -ella",
    "tags": [
      "pronombres"
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
    "rar": "ritéami",
    "spa": "el que ve",
    "rarNo": "riteami",
    "spaNo": "el que ve",
    "tags": []
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
    "rar": "ga'rabé",
    "spa": "elegante",
    "rarNo": "ga'rabe",
    "spaNo": "elegante",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "mubú",
    "spa": "elevar",
    "rarNo": "mubu",
    "spaNo": "elevar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "abóe",
    "spa": "ellos",
    "rarNo": "aboe",
    "spaNo": "ellos",
    "tags": [
      "pronombres"
    ]
  },
  {
    "rar": "aboni",
    "spa": "ellos - ellas",
    "rarNo": "aboni",
    "spaNo": "ellos - ellas",
    "tags": [
      "pronombres"
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
    "rar": "ricú",
    "spa": "emborracharse",
    "rarNo": "ricu",
    "spaNo": "emborracharse",
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
    "rar": "ri'nará",
    "spa": "emparejar",
    "rarNo": "ri'nara",
    "spaNo": "emparejar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huiríbari",
    "spa": "empezar a llover",
    "rarNo": "huiribari",
    "spaNo": "empezar a llover",
    "tags": []
  },
  {
    "rar": "nochárata",
    "spa": "emplear",
    "rarNo": "nocharata",
    "spaNo": "emplear",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "raquibú",
    "spa": "empujar",
    "rarNo": "raquibu",
    "spaNo": "empujar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "surachí ",
    "spa": "en el corazón",
    "rarNo": "surachi ",
    "spaNo": "en el corazon",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "sucuchí",
    "spa": "en el ombligo",
    "rarNo": "sucuchi",
    "spaNo": "en el ombligo",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "carichí",
    "spa": "en la casa",
    "rarNo": "carichi",
    "spaNo": "en la casa",
    "tags": []
  },
  {
    "rar": "canápuromí",
    "spa": "en muchas parte",
    "rarNo": "canapuromi",
    "spaNo": "en muchas parte",
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
    "rar": "siné cáachi",
    "spa": "en otra ocasión - tal vez",
    "rarNo": "sine caachi",
    "spaNo": "en otra ocasion - tal vez",
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
    "rar": "binoy acárachi",
    "spa": "en su cara",
    "rarNo": "binoy acarachi",
    "spaNo": "en su cara",
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
    "rar": "suníami",
    "spa": "en todas partes",
    "rarNo": "suniami",
    "spaNo": "en todas partes",
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
    "rar": "biréana",
    "spa": "en una sola parte",
    "rarNo": "bireana",
    "spaNo": "en una sola parte",
    "tags": []
  },
  {
    "rar": "sipucha",
    "spa": "enaguas",
    "rarNo": "sipucha",
    "spaNo": "enaguas",
    "tags": []
  },
  {
    "rar": "mo'huá",
    "spa": "encerrar",
    "rarNo": "mo'hua",
    "spaNo": "encerrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cobata",
    "spa": "enchilar a otra persona",
    "rarNo": "cobata",
    "spaNo": "enchilar a otra persona",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "choyá",
    "spa": "encogerse",
    "rarNo": "choya",
    "spaNo": "encogerse",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tibútana",
    "spa": "encomendar",
    "rarNo": "tibutana",
    "spaNo": "encomendar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "natepa",
    "spa": "encontrar",
    "rarNo": "natepa",
    "spaNo": "encontrar",
    "tags": [
      "verbos"
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
    "rar": "buyana",
    "spa": "enfermar de viruela",
    "rarNo": "buyana",
    "spaNo": "enfermar de viruela",
    "tags": [
      "medicina"
    ]
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
    "rar": "nayurí",
    "spa": "enfermedad",
    "rarNo": "nayuri",
    "spaNo": "enfermedad",
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
      "adjetivos",
      "medicina"
    ]
  },
  {
    "rar": "sipí",
    "spa": "enfirarse",
    "rarNo": "sipi",
    "spaNo": "enfirarse",
    "tags": []
  },
  {
    "rar": "saparusa",
    "spa": "enflacar",
    "rarNo": "saparusa",
    "spaNo": "enflacar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rorobá",
    "spa": "enfriar",
    "rarNo": "roroba",
    "spaNo": "enfriar",
    "tags": [
      "verbos"
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
    "rar": "yeca",
    "spa": "engañar - mentir",
    "rarNo": "yeca",
    "spaNo": "enganar - mentir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "saparábana",
    "spa": "engordar",
    "rarNo": "saparabana",
    "spaNo": "engordar",
    "tags": [
      "verbos"
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
    "rar": "oparú",
    "spa": "enojado ",
    "rarNo": "oparu",
    "spaNo": "enojado ",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "yora",
    "spa": "enojar",
    "rarNo": "yora",
    "spaNo": "enojar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huarubé",
    "spa": "enorme - gigante - inmenso",
    "rarNo": "huarube",
    "spaNo": "enorme - gigante - inmenso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "nahuará",
    "spa": "enraizar",
    "rarNo": "nahuara",
    "spaNo": "enraizar",
    "tags": [
      "verbos"
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
    "rar": "riwí",
    "spa": "enseñar",
    "rarNo": "riwi",
    "spaNo": "ensenar",
    "tags": [
      "verbos",
      "escuela"
    ]
  },
  {
    "rar": "chorohuera",
    "spa": "ensuciarse",
    "rarNo": "chorohuera",
    "spaNo": "ensuciarse",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "to",
    "spa": "enterrar",
    "rarNo": "to",
    "spaNo": "enterrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "arí biché ",
    "spa": "entonces",
    "rarNo": "ari biche ",
    "spaNo": "entonces",
    "tags": []
  },
  {
    "rar": "biché",
    "spa": "entonces",
    "rarNo": "biche",
    "spaNo": "entonces",
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
    "rar": "baquí",
    "spa": "entrar ",
    "rarNo": "baqui",
    "spaNo": "entrar ",
    "tags": [
      "verbos"
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
    "rar": "chochora",
    "spa": "entumirse (pie o brazo)",
    "rarNo": "chochora",
    "spaNo": "entumirse (pie o brazo)",
    "tags": [
      "verbos",
      "medicina"
    ]
  },
  {
    "rar": "ochera",
    "spa": "envejecer",
    "rarNo": "ochera",
    "spaNo": "envejecer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "jurá",
    "spa": "enviar - mandar (mensaje)",
    "rarNo": "jura",
    "spaNo": "enviar - mandar (mensaje)",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "corúcami",
    "spa": "envidioso - codicioso",
    "rarNo": "corucami",
    "spaNo": "envidioso - codicioso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "cunama",
    "spa": "enviudar",
    "rarNo": "cunama",
    "spaNo": "enviudar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "mugúsuhuami",
    "spa": "epiléptico",
    "rarNo": "mugusuhuami",
    "spaNo": "epileptico",
    "tags": [
      "medicina"
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
    "rar": "rirú",
    "spa": "eructar",
    "rarNo": "riru",
    "spaNo": "eructar",
    "tags": [
      "verbos"
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
    "rar": "cari ju",
    "spa": "es todo",
    "rarNo": "cari ju",
    "spaNo": "es todo",
    "tags": []
  },
  {
    "rar": "echiquí",
    "spa": "esa cantidad",
    "rarNo": "echiqui",
    "spaNo": "esa cantidad",
    "tags": []
  },
  {
    "rar": "huaminá 'masa",
    "spa": "escaparse",
    "rarNo": "huamina 'masa",
    "spaNo": "escaparse",
    "tags": []
  },
  {
    "rar": "jora",
    "spa": "escarbar (hoyo)",
    "rarNo": "jora",
    "spaNo": "escarbar (hoyo)",
    "tags": [
      "verbos"
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
    "rar": "chinasa",
    "spa": "esconder",
    "rarNo": "chinasa",
    "spaNo": "esconder",
    "tags": [
      "verbos"
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
    "rar": "osá",
    "spa": "escribir",
    "rarNo": "osa",
    "spaNo": "escribir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "osé",
    "spa": "escribir",
    "rarNo": "ose",
    "spaNo": "escribir",
    "tags": [
      "verbos",
      "escuela"
    ]
  },
  {
    "rar": "quipú",
    "spa": "escuchar",
    "rarNo": "quipu",
    "spaNo": "escuchar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "echi",
    "spa": "ése - ésa - aquel",
    "rarNo": "echi",
    "spaNo": "ese - esa - aquel",
    "tags": [
      "pronombres"
    ]
  },
  {
    "rar": "wa'ícari",
    "spa": "esófago",
    "rarNo": "wa'icari",
    "spaNo": "esofago",
    "tags": [
      "partes  del cuerpo",
      "medicina"
    ]
  },
  {
    "rar": "echi jaré",
    "spa": "esos - esas",
    "rarNo": "echi jare",
    "spaNo": "esos - esas",
    "tags": [
      "pronombres"
    ]
  },
  {
    "rar": "ripopa",
    "spa": "espalda",
    "rarNo": "ripopa",
    "spaNo": "espalda",
    "tags": [
      "partes del cuerpo"
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
    "rar": "majajá",
    "spa": "espantarse",
    "rarNo": "majaja",
    "spaNo": "espantarse",
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
    "rar": "sipée",
    "spa": "espejo",
    "rarNo": "sipee",
    "spaNo": "espejo",
    "tags": []
  },
  {
    "rar": "cu'lina",
    "spa": "espeso",
    "rarNo": "cu'lina",
    "spaNo": "espeso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "so'huira",
    "spa": "espinar",
    "rarNo": "so'huira",
    "spaNo": "espinar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "so'huá",
    "spa": "espinas",
    "rarNo": "so'hua",
    "spaNo": "espinas",
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
    "rar": "chu'huí",
    "spa": "espiritú - fantasma",
    "rarNo": "chu'hui",
    "spaNo": "espiritu - fantasma",
    "tags": []
  },
  {
    "rar": "upí",
    "spa": "esposa",
    "rarNo": "upi",
    "spaNo": "esposa",
    "tags": [
      "parentescos"
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
    "rar": "sitó",
    "spa": "esquina",
    "rarNo": "sito",
    "spaNo": "esquina",
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
    "rar": "ropéami ju",
    "spa": "está embarazada",
    "rarNo": "ropeami ju",
    "spaNo": "esta embarazada",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "ripáami ju ",
    "spa": "está muy alto",
    "rarNo": "ripaami ju ",
    "spaNo": "esta muy alto",
    "tags": []
  },
  {
    "rar": "huabé 'nate ju",
    "spa": "está muy difícil",
    "rarNo": "huabe 'nate ju",
    "spaNo": "esta muy dificil",
    "tags": [
      "adjetivos"
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
    "rar": "bití",
    "spa": "estar acostados",
    "rarNo": "biti",
    "spaNo": "estar acostados",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chocó",
    "spa": "estar agrio",
    "rarNo": "choco",
    "spaNo": "estar agrio",
    "tags": [
      "sabores"
    ]
  },
  {
    "rar": "chipú",
    "spa": "estar amargo",
    "rarNo": "chipu",
    "spaNo": "estar amargo",
    "tags": [
      "sabores"
    ]
  },
  {
    "rar": "ba'yó",
    "spa": "estar bonito",
    "rarNo": "ba'yo",
    "spaNo": "estar bonito",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "iré ",
    "spa": "estar bueno - servir",
    "rarNo": "ire ",
    "spaNo": "estar bueno - servir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huacocha",
    "spa": "estar chueco o encorvado",
    "rarNo": "huacocha",
    "spaNo": "estar chueco o encorvado",
    "tags": [
      "adjetivos"
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
    "rar": "omée",
    "spa": "estar dificil",
    "rarNo": "omee",
    "spaNo": "estar dificil",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sijabó",
    "spa": "estar empachado ",
    "rarNo": "sijabo",
    "spaNo": "estar empachado ",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "onó",
    "spa": "estar enojado",
    "rarNo": "ono",
    "spaNo": "estar enojado",
    "tags": []
  },
  {
    "rar": "amarú",
    "spa": "estar entero",
    "rarNo": "amaru",
    "spaNo": "estar entero",
    "tags": []
  },
  {
    "rar": "bubuigá",
    "spa": "estar esperando",
    "rarNo": "bubuiga",
    "spaNo": "estar esperando",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "caniri",
    "spa": "estar feliz - contento",
    "rarNo": "caniri",
    "spaNo": "estar feliz - contento",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huataca",
    "spa": "estar fuerte",
    "rarNo": "huataca",
    "spaNo": "estar fuerte",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sapé",
    "spa": "estar gordo",
    "rarNo": "sape",
    "spaNo": "estar gordo",
    "tags": [
      "adjetivos"
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
    "rar": "hui'rí",
    "spa": "estar largo",
    "rarNo": "hui'ri",
    "spaNo": "estar largo",
    "tags": []
  },
  {
    "rar": "sa'mí",
    "spa": "estar mojado",
    "rarNo": "sa'mi",
    "spaNo": "estar mojado",
    "tags": []
  },
  {
    "rar": "noré",
    "spa": "estar nublado",
    "rarNo": "nore",
    "spaNo": "estar nublado",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nicahuera",
    "spa": "estar orgulloso",
    "rarNo": "nicahuera",
    "spaNo": "estar orgulloso",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "choró",
    "spa": "estar pegajoso",
    "rarNo": "choro",
    "spaNo": "estar pegajoso",
    "tags": [
      "adjetivos"
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
    "rar": "ocubá",
    "spa": "estar plano",
    "rarNo": "ocuba",
    "spaNo": "estar plano",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sitúra",
    "spa": "estar redondo",
    "rarNo": "situra",
    "spaNo": "estar redondo",
    "tags": []
  },
  {
    "rar": "atí",
    "spa": "estar sentado",
    "rarNo": "ati",
    "spaNo": "estar sentado",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "o'mona",
    "spa": "estar triste",
    "rarNo": "o'mona",
    "spaNo": "estar triste",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "acami",
    "spa": "estar vivo",
    "rarNo": "acami",
    "spaNo": "estar vivo",
    "tags": [
      "verbos"
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
    "rar": "nariyochi",
    "spa": "éste - ésta",
    "rarNo": "nariyochi",
    "spaNo": "este - esta",
    "tags": [
      "pronombres"
    ]
  },
  {
    "rar": "huatoná",
    "spa": "estirarse",
    "rarNo": "huatona",
    "spaNo": "estirarse",
    "tags": []
  },
  {
    "rar": "ropá",
    "spa": "estómago - vientre",
    "rarNo": "ropa",
    "spaNo": "estomago - vientre",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "cumé",
    "spa": "estorbar - molestar",
    "rarNo": "cume",
    "spaNo": "estorbar - molestar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "atisi",
    "spa": "estornudar",
    "rarNo": "atisi",
    "spaNo": "estornudar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "garani machí",
    "spa": "estoy seguro",
    "rarNo": "garani machi",
    "spaNo": "estoy seguro",
    "tags": []
  },
  {
    "rar": "uchíi",
    "spa": "estrecho - angosto",
    "rarNo": "uchii",
    "spaNo": "estrecho - angosto",
    "tags": [
      "adjetivos"
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
    "rar": "binéami",
    "spa": "estudiante",
    "rarNo": "bineami",
    "spaNo": "estudiante",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "ireta",
    "spa": "explicar bien",
    "rarNo": "ireta",
    "spaNo": "explicar bien",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ra'lana",
    "spa": "extender - exparcir",
    "rarNo": "ra'lana",
    "spaNo": "extender - exparcir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cami",
    "spa": "extraordinario",
    "rarNo": "cami",
    "spaNo": "extraordinario",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "huiquiá",
    "spa": "extraviarse - perderse",
    "rarNo": "huiquia",
    "spaNo": "extraviarse - perderse",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pu'",
    "spa": "faisán",
    "rarNo": "pu'",
    "spaNo": "faisan",
    "tags": [
      "animales"
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
    "rar": "chá",
    "spa": "feo",
    "rarNo": "cha",
    "spaNo": "feo",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "chátiri",
    "spa": "feo - fea",
    "rarNo": "chatiri",
    "spaNo": "feo - fea",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "chati",
    "spa": "feo - mal",
    "rarNo": "chati",
    "spaNo": "feo - mal",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "sití",
    "spa": "feo - que no sirve",
    "rarNo": "siti",
    "spaNo": "feo - que no sirve",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "tanehua",
    "spa": "fiar",
    "rarNo": "tanehua",
    "spaNo": "fiar",
    "tags": [
      "verbos"
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
    "rar": "omáhuari",
    "spa": "fiesta",
    "rarNo": "omahuari",
    "spaNo": "fiesta",
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
    "rar": "cusera",
    "spa": "flauta",
    "rarNo": "cusera",
    "spaNo": "flauta",
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
    "rar": "romíami",
    "spa": "flexible",
    "rarNo": "romiami",
    "spaNo": "flexible",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "kenótzame",
    "spa": "flojo",
    "rarNo": "kenotzame",
    "spaNo": "flojo",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "nasinácuri",
    "spa": "flojo",
    "rarNo": "nasinacuri",
    "spaNo": "flojo",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "sewá",
    "spa": "flor",
    "rarNo": "sewa",
    "spaNo": "flor",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "sihuáchari",
    "spa": "flor",
    "rarNo": "sihuachari",
    "spaNo": "flor",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "sehuá",
    "spa": "florecer",
    "rarNo": "sehua",
    "spaNo": "florecer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sihuá",
    "spa": "florecer",
    "rarNo": "sihua",
    "spaNo": "florecer",
    "tags": [
      "verbos",
      "plantas"
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
    "rar": "su'hueti júcami",
    "spa": "fragante",
    "rarNo": "su'hueti jucami",
    "spaNo": "fragante",
    "tags": []
  },
  {
    "rar": "corá",
    "spa": "frente (cabeza)",
    "rarNo": "cora",
    "spaNo": "frente (cabeza)",
    "tags": [
      "partes del cuerpo"
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
    "rar": "ricomarí",
    "spa": "frijol",
    "rarNo": "ricomari",
    "spaNo": "frijol",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "ruráami",
    "spa": "frío - fresco",
    "rarNo": "ruraami",
    "spaNo": "frio - fresco",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "qué",
    "spa": "fue - era - siendo",
    "rarNo": "que",
    "spaNo": "fue - era - siendo",
    "tags": [
      "verbos"
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
    "rar": "na'í",
    "spa": "fuego",
    "rarNo": "na'i",
    "spaNo": "fuego",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "huatácammi",
    "spa": "fuerte",
    "rarNo": "huatacammi",
    "spaNo": "fuerte",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ihuérami",
    "spa": "fuerte",
    "rarNo": "ihuerami",
    "spaNo": "fuerte",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "pihuácami",
    "spa": "fumador",
    "rarNo": "pihuacami",
    "spaNo": "fumador",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "torí ",
    "spa": "gallina",
    "rarNo": "tori ",
    "spaNo": "gallina",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "torí",
    "spa": "gallina - pollo",
    "rarNo": "tori",
    "spaNo": "gallina - pollo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "totorí",
    "spa": "gallina - pollo",
    "rarNo": "totori",
    "spaNo": "gallina - pollo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "mitá",
    "spa": "ganar (juego o carrera)",
    "rarNo": "mita",
    "spaNo": "ganar (juego o carrera)",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "me ",
    "spa": "ganar sueldo",
    "rarNo": "me ",
    "spaNo": "ganar sueldo",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "machá",
    "spa": "garrapata",
    "rarNo": "macha",
    "spaNo": "garrapata",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "wachó",
    "spa": "garza",
    "rarNo": "wacho",
    "spaNo": "garza",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "mísi",
    "spa": "gato",
    "rarNo": "misi",
    "spaNo": "gato",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ruchí",
    "spa": "gato montés",
    "rarNo": "ruchi",
    "spaNo": "gato montes",
    "tags": [
      "animales"
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
    "rar": "siquiríchi",
    "spa": "gavilán",
    "rarNo": "siquirichi",
    "spaNo": "gavilan",
    "tags": []
  },
  {
    "rar": "ra'íchani",
    "spa": "gemir - lanzar quejas",
    "rarNo": "ra'ichani",
    "spaNo": "gemir - lanzar quejas",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ri'í",
    "spa": "gemir - lanzar quejas",
    "rarNo": "ri'i",
    "spaNo": "gemir - lanzar quejas",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pagótami ",
    "spa": "gente",
    "rarNo": "pagotami ",
    "spaNo": "gente",
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
    "rar": "so'hué",
    "spa": "golondrina",
    "rarNo": "so'hue",
    "spaNo": "golondrina",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "cho'ná",
    "spa": "golpear - pegar",
    "rarNo": "cho'na",
    "spaNo": "golpear - pegar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sa'pégame",
    "spa": "gordo - ",
    "rarNo": "sa'pegame",
    "spaNo": "gordo - ",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "pachú",
    "spa": "gotear",
    "rarNo": "pachu",
    "spaNo": "gotear",
    "tags": [
      "verbos"
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
    "rar": "o'huari",
    "spa": "grande",
    "rarNo": "o'huari",
    "spaNo": "grande",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "warú",
    "spa": "grande",
    "rarNo": "waru",
    "spaNo": "grande",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "huarú",
    "spa": "grande - mucho",
    "rarNo": "huaru",
    "spaNo": "grande - mucho",
    "tags": [
      "adjetivos"
    ]
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
    "rar": "ricuchuri",
    "spa": "grillo",
    "rarNo": "ricuchuri",
    "spaNo": "grillo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "rosábachami",
    "spa": "gris",
    "rarNo": "rosabachami",
    "spaNo": "gris",
    "tags": [
      "colores"
    ]
  },
  {
    "rar": "siná",
    "spa": "gritar",
    "rarNo": "sina",
    "spaNo": "gritar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ru'náami",
    "spa": "grueso",
    "rarNo": "ru'naami",
    "spaNo": "grueso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "roró",
    "spa": "gruñir",
    "rarNo": "roro",
    "spaNo": "grunir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chihuí",
    "spa": "guajolote",
    "rarNo": "chihui",
    "spaNo": "guajolote",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ba'óame",
    "spa": "guapo",
    "rarNo": "ba'oame",
    "spaNo": "guapo",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "nasó",
    "spa": "guardar - esconder",
    "rarNo": "naso",
    "spaNo": "guardar - esconder",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tibuta",
    "spa": "guardar - proteger - vigilar",
    "rarNo": "tibuta",
    "spaNo": "guardar - proteger - vigilar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nuté",
    "spa": "guardar - retener",
    "rarNo": "nute",
    "spaNo": "guardar - retener",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "yura",
    "spa": "guiar",
    "rarNo": "yura",
    "spaNo": "guiar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bayeba",
    "spa": "guiar - llevar",
    "rarNo": "bayeba",
    "spaNo": "guiar - llevar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ba'yori",
    "spa": "gustar",
    "rarNo": "ba'yori",
    "spaNo": "gustar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ra'ihuá",
    "spa": "gustar (comida)",
    "rarNo": "ra'ihua",
    "spaNo": "gustar (comida)",
    "tags": [
      "verbos",
      "alimento"
    ]
  },
  {
    "rar": "ité",
    "spa": "haber",
    "rarNo": "ite",
    "spaNo": "haber",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bité",
    "spa": "habitar - vivir",
    "rarNo": "bite",
    "spaNo": "habitar - vivir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ra'íchami",
    "spa": "hablador",
    "rarNo": "ra'ichami",
    "spaNo": "hablador",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ra'ichame",
    "spa": "hablantín",
    "rarNo": "ra'ichame",
    "spaNo": "hablantin",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ra'itsa",
    "spa": "hablar",
    "rarNo": "ra'itsa",
    "spaNo": "hablar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ra'icha",
    "spa": "hablar - platicar",
    "rarNo": "ra'icha",
    "spaNo": "hablar - platicar",
    "tags": [
      "verbos"
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
    "rar": "curipi",
    "spa": "hace poco",
    "rarNo": "curipi",
    "spaNo": "hace poco",
    "tags": []
  },
  {
    "rar": "nihúa",
    "spa": "hacer",
    "rarNo": "nihua",
    "spaNo": "hacer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nihuíi",
    "spa": "hacer",
    "rarNo": "nihuii",
    "spaNo": "hacer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "si",
    "spa": "hacer",
    "rarNo": "si",
    "spaNo": "hacer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "orá",
    "spa": "hacer - obrar",
    "rarNo": "ora",
    "spaNo": "hacer - obrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "icá",
    "spa": "hacer aire ",
    "rarNo": "ica",
    "spaNo": "hacer aire ",
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
    "rar": "sáata",
    "spa": "hacer brasas",
    "rarNo": "saata",
    "spaNo": "hacer brasas",
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
    "rar": "nijehua",
    "spa": "hacer caso - contestar - responder",
    "rarNo": "nijehua",
    "spaNo": "hacer caso - contestar - responder",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bihuara",
    "spa": "hacer duro",
    "rarNo": "bihuara",
    "spaNo": "hacer duro",
    "tags": []
  },
  {
    "rar": "ronena",
    "spa": "hacer espuma",
    "rarNo": "ronena",
    "spaNo": "hacer espuma",
    "tags": []
  },
  {
    "rar": "omahua",
    "spa": "hacer fiesta",
    "rarNo": "omahua",
    "spaNo": "hacer fiesta",
    "tags": [
      "verbos"
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
    "rar": "nacátara",
    "spa": "hacer mucho ruido",
    "rarNo": "nacatara",
    "spaNo": "hacer mucho ruido",
    "tags": [
      "verbos"
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
    "rar": "sapota",
    "spa": "hacer palomitas de maíz",
    "rarNo": "sapota",
    "spaNo": "hacer palomitas de maiz",
    "tags": [
      "verbos"
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
    "rar": "ri'huá",
    "spa": "hacerse liso",
    "rarNo": "ri'hua",
    "spaNo": "hacerse liso",
    "tags": []
  },
  {
    "rar": "ripurá",
    "spa": "hacha",
    "rarNo": "ripura",
    "spaNo": "hacha",
    "tags": []
  },
  {
    "rar": "jubá ocuá",
    "spa": "hacia atrás",
    "rarNo": "juba ocua",
    "spaNo": "hacia atras",
    "tags": [
      "indicaciones"
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
    "rar": "lohuari",
    "spa": "hambre",
    "rarNo": "lohuari",
    "spaNo": "hambre",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "piché",
    "spa": "hasta",
    "rarNo": "piche",
    "spaNo": "hasta",
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
    "rar": "ba'arí piché",
    "spa": "hasta mañana",
    "rarNo": "ba'ari piche",
    "spaNo": "hasta manana",
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
    "rar": "nirú",
    "spa": "hay",
    "rarNo": "niru",
    "spaNo": "hay",
    "tags": []
  },
  {
    "rar": "jípeco",
    "spa": "hay - haber",
    "rarNo": "jipeco",
    "spaNo": "hay - haber",
    "tags": []
  },
  {
    "rar": "ba'hue",
    "spa": "hay agua",
    "rarNo": "ba'hue",
    "spaNo": "hay agua",
    "tags": []
  },
  {
    "rar": "riyahui",
    "spa": "hay hierba",
    "rarNo": "riyahui",
    "spaNo": "hay hierba",
    "tags": []
  },
  {
    "rar": "sucurúami",
    "spa": "hechicero - brujo",
    "rarNo": "sucuruami",
    "spaNo": "hechicero - brujo",
    "tags": []
  },
  {
    "rar": "sipabú",
    "spa": "hechizar",
    "rarNo": "sipabu",
    "spaNo": "hechizar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sucurú",
    "spa": "hechizar",
    "rarNo": "sucuru",
    "spaNo": "hechizar",
    "tags": [
      "verbos"
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
    "rar": "mochocuá",
    "spa": "helecho",
    "rarNo": "mochocua",
    "spaNo": "helecho",
    "tags": [
      "plantas"
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
    "rar": "cochí",
    "spa": "hermana mayor",
    "rarNo": "cochi",
    "spaNo": "hermana mayor",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "biní",
    "spa": "hermana menor",
    "rarNo": "bini",
    "spaNo": "hermana menor",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "huayé",
    "spa": "hermana menor",
    "rarNo": "huaye",
    "spaNo": "hermana menor",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "bachí",
    "spa": "hermano mayor",
    "rarNo": "bachi",
    "spaNo": "hermano mayor",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "boní",
    "spa": "hermano menor",
    "rarNo": "boni",
    "spaNo": "hermano menor",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "najirémami",
    "spa": "hermanos",
    "rarNo": "najiremami",
    "spaNo": "hermanos",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "ritémahua",
    "spa": "hermanos",
    "rarNo": "ritemahua",
    "spaNo": "hermanos",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "acará",
    "spa": "herrar - rostro",
    "rarNo": "acara",
    "spaNo": "herrar - rostro",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "roné",
    "spa": "hervir",
    "rarNo": "rone",
    "spaNo": "hervir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ronó",
    "spa": "hervirse",
    "rarNo": "rono",
    "spaNo": "hervirse",
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
    "rar": "amá",
    "spa": "hígado",
    "rarNo": "ama",
    "spaNo": "higado",
    "tags": [
      "partes  del cuerpo"
    ]
  },
  {
    "rar": "huáasi amará",
    "spa": "hígado de vaca",
    "rarNo": "huaasi amara",
    "spaNo": "higado de vaca",
    "tags": [
      "animales"
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
    "rar": "chuná",
    "spa": "higuera",
    "rarNo": "chuna",
    "spaNo": "higuera",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "mará",
    "spa": "hija",
    "rarNo": "mara",
    "spaNo": "hija",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "quirá",
    "spa": "hija",
    "rarNo": "quira",
    "spaNo": "hija",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "que",
    "spa": "hija grande",
    "rarNo": "que",
    "spaNo": "hija grande",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "no",
    "spa": "hijo",
    "rarNo": "no",
    "spaNo": "hijo",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "raná",
    "spa": "hijo",
    "rarNo": "rana",
    "spaNo": "hijo",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "cúchara",
    "spa": "hijos",
    "rarNo": "cuchara",
    "spaNo": "hijos",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "bajácami",
    "spa": "hinchado",
    "rarNo": "bajacami",
    "spaNo": "hinchado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "bajíbachami",
    "spa": "hinchado por desnutricion",
    "rarNo": "bajibachami",
    "spaNo": "hinchado por desnutricion",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "bajina",
    "spa": "hincharse",
    "rarNo": "bajina",
    "spaNo": "hincharse",
    "tags": [
      "adjetivos"
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
    "rar": "cho'ó",
    "spa": "hocico",
    "rarNo": "cho'o",
    "spaNo": "hocico",
    "tags": []
  },
  {
    "rar": "sahuá",
    "spa": "hoja",
    "rarNo": "sahua",
    "spaNo": "hoja",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "bacahúa",
    "spa": "hoja de la marzorca",
    "rarNo": "bacahua",
    "spaNo": "hoja de la marzorca",
    "tags": [
      "plantas"
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
    "rar": "morisó",
    "spa": "hollin ",
    "rarNo": "moriso",
    "spaNo": "hollin ",
    "tags": []
  },
  {
    "rar": "rejoi",
    "spa": "hombre",
    "rarNo": "rejoi",
    "spaNo": "hombre",
    "tags": []
  },
  {
    "rar": "mató",
    "spa": "hombro",
    "rarNo": "mato",
    "spaNo": "hombro",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "nawiki",
    "spa": "homosexual",
    "rarNo": "nawiki",
    "spaNo": "homosexual",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "rocóami",
    "spa": "hondo",
    "rarNo": "rocoami",
    "spaNo": "hondo",
    "tags": [
      "adjetivos"
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
    "rar": "sucuí",
    "spa": "hormiga",
    "rarNo": "sucui",
    "spaNo": "hormiga",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "abé",
    "spa": "hoy",
    "rarNo": "abe",
    "spaNo": "hoy",
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
    "rar": "abé huauú ucuri",
    "spa": "hoy llovió mucho",
    "rarNo": "abe huauu ucuri",
    "spaNo": "hoy llovio mucho",
    "tags": []
  },
  {
    "rar": "acabó",
    "spa": "hoyo de la nariz",
    "rarNo": "acabo",
    "spaNo": "hoyo de la nariz",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "cho'márachi",
    "spa": "hoyo de la nariz",
    "rarNo": "cho'marachi",
    "spaNo": "hoyo de la nariz",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "jochi",
    "spa": "hoyo de la nariz",
    "rarNo": "jochi",
    "spaNo": "hoyo de la nariz",
    "tags": [
      "partes del cuerpo"
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
    "rar": "chicónami",
    "spa": "hueco",
    "rarNo": "chiconami",
    "spaNo": "hueco",
    "tags": [
      "adjetivos"
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
    "rar": "oré",
    "spa": "huella",
    "rarNo": "ore",
    "spaNo": "huella",
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
    "rar": "ochí",
    "spa": "hueso",
    "rarNo": "ochi",
    "spaNo": "hueso",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "bachagochi",
    "spa": "hueso del tobillo",
    "rarNo": "bachagochi",
    "spaNo": "hueso del tobillo",
    "tags": [
      "partes del cuerpo"
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
    "rar": "jumsa",
    "spa": "huir",
    "rarNo": "jumsa",
    "spaNo": "huir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "masa ",
    "spa": "huir",
    "rarNo": "masa ",
    "spaNo": "huir",
    "tags": [
      "verbos"
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
    "rar": "sa'míami",
    "spa": "humedo - mojado",
    "rarNo": "sa'miami",
    "spaNo": "humedo - mojado",
    "tags": [
      "adjetivos"
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
    "rar": "botobú",
    "spa": "hundir - sumergir",
    "rarNo": "botobu",
    "spaNo": "hundir - sumergir",
    "tags": [
      "verbos"
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
    "rar": "ra'itsa",
    "spa": "idioma",
    "rarNo": "ra'itsa",
    "spaNo": "idioma",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "rarámuri ra'ícharara",
    "spa": "idioma tarahumara",
    "rarNo": "raramuri ra'icharara",
    "spaNo": "idioma tarahumara",
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
    "rar": "tarapé machíami",
    "spa": "ignorante",
    "rarNo": "tarape machiami",
    "spaNo": "ignorante",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "néchigo",
    "spa": "igual",
    "rarNo": "nechigo",
    "spaNo": "igual",
    "tags": []
  },
  {
    "rar": "anara",
    "spa": "igualar",
    "rarNo": "anara",
    "spaNo": "igualar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "achó",
    "spa": "iguales",
    "rarNo": "acho",
    "spaNo": "iguales",
    "tags": []
  },
  {
    "rar": "rajé",
    "spa": "iluminar",
    "rarNo": "raje",
    "spaNo": "iluminar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chi'ré",
    "spa": "importar",
    "rarNo": "chi're",
    "spaNo": "importar",
    "tags": [
      "verbos"
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
    "rar": "bacamú",
    "spa": "infectarse",
    "rarNo": "bacamu",
    "spaNo": "infectarse",
    "tags": [
      "medicina"
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
    "rar": "nátame",
    "spa": "inteligente",
    "rarNo": "natame",
    "spaNo": "inteligente",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "rarámuri niráa uchucha",
    "spa": "interpretar - traducir al tarahumara",
    "rarNo": "raramuri niraa uchucha",
    "spaNo": "interpretar - traducir al tarahumara",
    "tags": []
  },
  {
    "rar": "rúsiami",
    "spa": "intérprete",
    "rarNo": "rusiami",
    "spaNo": "interprete",
    "tags": []
  },
  {
    "rar": "sihuá",
    "spa": "intestino",
    "rarNo": "sihua",
    "spaNo": "intestino",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "niporí",
    "spa": "inundar",
    "rarNo": "nipori",
    "spaNo": "inundar",
    "tags": [
      "verbos"
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
    "rar": "bayera",
    "spa": "invitar",
    "rarNo": "bayera",
    "spaNo": "invitar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nijohua",
    "spa": "invitar",
    "rarNo": "nijohua",
    "spaNo": "invitar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ohuí",
    "spa": "invitar",
    "rarNo": "ohui",
    "spaNo": "invitar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bajuhua",
    "spa": "ir a tomar",
    "rarNo": "bajuhua",
    "spaNo": "ir a tomar",
    "tags": [
      "verbos"
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
    "rar": "simá",
    "spa": "irse",
    "rarNo": "sima",
    "spaNo": "irse",
    "tags": []
  },
  {
    "rar": "simí",
    "spa": "irse",
    "rarNo": "simi",
    "spaNo": "irse",
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
    "rar": "o'huiná",
    "spa": "izquierdo",
    "rarNo": "o'huina",
    "spaNo": "izquierdo",
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
    "rar": "ri'marí",
    "spa": "joven",
    "rarNo": "ri'mari",
    "spaNo": "joven",
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
    "rar": "juevesico",
    "spa": "jueves",
    "rarNo": "juevesico",
    "spaNo": "jueves",
    "tags": [
      "días de la semana"
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
    "rar": "itiyeri",
    "spa": "jugar",
    "rarNo": "itiyeri",
    "spaNo": "jugar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ri'é",
    "spa": "jugar",
    "rarNo": "ri'e",
    "spaNo": "jugar",
    "tags": [
      "verbos"
    ]
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
    "rar": "a'nabáa",
    "spa": "juntarse",
    "rarNo": "a'nabaa",
    "spaNo": "juntarse",
    "tags": []
  },
  {
    "rar": "napahuí",
    "spa": "juntarse",
    "rarNo": "napahui",
    "spaNo": "juntarse",
    "tags": []
  },
  {
    "rar": "napé",
    "spa": "juntarse - casarse",
    "rarNo": "nape",
    "spaNo": "juntarse - casarse",
    "tags": []
  },
  {
    "rar": "bichíhuaga",
    "spa": "jurar- prometer",
    "rarNo": "bichihuaga",
    "spaNo": "jurar- prometer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tétari ",
    "spa": "la medida - plazo de tiempo",
    "rarNo": "tetari ",
    "spaNo": "la medida - plazo de tiempo",
    "tags": []
  },
  {
    "rar": " huihuachi",
    "spa": "la pizca",
    "rarNo": " huihuachi",
    "spaNo": "la pizca",
    "tags": []
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
    "rar": "o'rina",
    "spa": "ladear",
    "rarNo": "o'rina",
    "spaNo": "ladear",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nicá ",
    "spa": "ladrar",
    "rarNo": "nica ",
    "spaNo": "ladrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chigórame",
    "spa": "ladrón",
    "rarNo": "chigorame",
    "spaNo": "ladron",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "rochá",
    "spa": "lagartija",
    "rarNo": "rocha",
    "spaNo": "lagartija",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ocuá",
    "spa": "lagrima",
    "rarNo": "ocua",
    "spaNo": "lagrima",
    "tags": []
  },
  {
    "rar": "banagé",
    "spa": "lama - moho",
    "rarNo": "banage",
    "spaNo": "lama - moho",
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
    "rar": "pabaca",
    "spa": "lavar",
    "rarNo": "pabaca",
    "spaNo": "lavar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pagó",
    "spa": "lavar",
    "rarNo": "pago",
    "spaNo": "lavar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huichó",
    "spa": "lavar ropa",
    "rarNo": "huicho",
    "spaNo": "lavar ropa",
    "tags": [
      "verbos"
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
    "rar": "basigó",
    "spa": "lavarse la cara",
    "rarNo": "basigo",
    "spaNo": "lavarse la cara",
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
    "rar": "echo'ná ranícuchi",
    "spa": "le duele su talón",
    "rarNo": "echo'na ranicuchi",
    "spaNo": "le duele su talon",
    "tags": [
      "partes del cuerpo",
      "medicina"
    ]
  },
  {
    "rar": "anemi",
    "spa": "le hubiera dicho",
    "rarNo": "anemi",
    "spaNo": "le hubiera dicho",
    "tags": []
  },
  {
    "rar": "anebi",
    "spa": "le hubiéramos dicho",
    "rarNo": "anebi",
    "spaNo": "le hubieramos dicho",
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
    "rar": "chi'wa",
    "spa": "leche",
    "rarNo": "chi'wa",
    "spaNo": "leche",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "oserí'nema",
    "spa": "leer",
    "rarNo": "oseri'nema",
    "spaNo": "leer",
    "tags": [
      "verbos",
      "escuela"
    ]
  },
  {
    "rar": "huaná",
    "spa": "lejos",
    "rarNo": "huana",
    "spaNo": "lejos",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "micá",
    "spa": "lejos",
    "rarNo": "mica",
    "spaNo": "lejos",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "cha'merohua",
    "spa": "lengua",
    "rarNo": "cha'merohua",
    "spaNo": "lengua",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "cu",
    "spa": "leña - madera",
    "rarNo": "cu",
    "spaNo": "lena - madera",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "mahuiyá",
    "spa": "león - puma",
    "rarNo": "mahuiya",
    "spaNo": "leon - puma",
    "tags": [
      "animales"
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
    "rar": "asisi",
    "spa": "levantarse",
    "rarNo": "asisi",
    "spaNo": "levantarse",
    "tags": []
  },
  {
    "rar": "huirisa",
    "spa": "levantarse",
    "rarNo": "huirisa",
    "spaNo": "levantarse",
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
    "rar": "o'huicha",
    "spa": "levantarse",
    "rarNo": "o'huicha",
    "spaNo": "levantarse",
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
    "rar": "oserí",
    "spa": "libro",
    "rarNo": "oseri",
    "spaNo": "libro",
    "tags": [
      "escuela"
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
    "rar": "rahuá",
    "spa": "ligamento",
    "rarNo": "rahua",
    "spaNo": "ligamento",
    "tags": [
      "medicina"
    ]
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
    "rar": "a'huánami",
    "spa": "ligeros",
    "rarNo": "a'huanami",
    "spaNo": "ligeros",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "bi'huá",
    "spa": "limpiar",
    "rarNo": "bi'hua",
    "spaNo": "limpiar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ri'ibú",
    "spa": "limpiar frijol",
    "rarNo": "ri'ibu",
    "spaNo": "limpiar frijol",
    "tags": [
      "verbos",
      "alimento"
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
    "rar": "cho'mabú",
    "spa": "limpiarse la nariz",
    "rarNo": "cho'mabu",
    "spaNo": "limpiarse la nariz",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "carihuérami",
    "spa": "listo - arreglado",
    "rarNo": "carihuerami",
    "spaNo": "listo - arreglado",
    "tags": [
      "adjetivos"
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
    "rar": "bayé",
    "spa": "llamar",
    "rarNo": "baye",
    "spaNo": "llamar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "oyera",
    "spa": "llamar la atención",
    "rarNo": "oyera",
    "spaNo": "llamar la atencion",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rihué",
    "spa": "llamarse - tener nombre",
    "rarNo": "rihue",
    "spaNo": "llamarse - tener nombre",
    "tags": [
      "verbos"
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
    "rar": "si",
    "spa": "llegan",
    "rarNo": "si",
    "spaNo": "llegan",
    "tags": []
  },
  {
    "rar": "bosá",
    "spa": "llenarse comiendo",
    "rarNo": "bosa",
    "spaNo": "llenarse comiendo",
    "tags": []
  },
  {
    "rar": "buchíami",
    "spa": "lleno",
    "rarNo": "buchiami",
    "spaNo": "lleno",
    "tags": []
  },
  {
    "rar": "matora",
    "spa": "llevar - cargar (en la espalda)",
    "rarNo": "matora",
    "spaNo": "llevar - cargar (en la espalda)",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "to",
    "spa": "llevar - tomar",
    "rarNo": "to",
    "spaNo": "llevar - tomar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ca",
    "spa": "llevar en la mano",
    "rarNo": "ca",
    "spaNo": "llevar en la mano",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nará",
    "spa": "llorar",
    "rarNo": "nara",
    "spaNo": "llorar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "naraquéami",
    "spa": "llorón",
    "rarNo": "naraqueami",
    "spaNo": "lloron",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ocuí",
    "spa": "llover",
    "rarNo": "ocui",
    "spaNo": "llover",
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
    "rar": "ukí",
    "spa": "lluvia",
    "rarNo": "uki",
    "spaNo": "lluvia",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "ay",
    "spa": "lo buscaba",
    "rarNo": "ay",
    "spaNo": "lo buscaba",
    "tags": []
  },
  {
    "rar": "naríbochi",
    "spa": "lobo",
    "rarNo": "naribochi",
    "spaNo": "lobo",
    "tags": [
      "animales"
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
    "rar": "huisogá",
    "spa": "lodo - zoquete",
    "rarNo": "huisoga",
    "spaNo": "lodo - zoquete",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "ripata rabó",
    "spa": "loma",
    "rarNo": "ripata rabo",
    "spaNo": "loma",
    "tags": []
  },
  {
    "rar": "sa'í",
    "spa": "lombriz",
    "rarNo": "sa'i",
    "spaNo": "lombriz",
    "tags": [
      "animales"
    ]
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
    "rar": "riosi nurarira",
    "spa": "los mandamientos de Dios",
    "rarNo": "riosi nurarira",
    "spaNo": "los mandamientos de Dios",
    "tags": []
  },
  {
    "rar": "sonorá",
    "spa": "los pulmones",
    "rarNo": "sonora",
    "spaNo": "los pulmones",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "taba",
    "spa": "luchar",
    "rarNo": "taba",
    "spaNo": "luchar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cupisi",
    "spa": "luciérnaga",
    "rarNo": "cupisi",
    "spaNo": "luciernaga",
    "tags": [
      "animales"
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
    "rar": "michá",
    "spa": "luna - mes",
    "rarNo": "micha",
    "spaNo": "luna - mes",
    "tags": []
  },
  {
    "rar": "lúnesico",
    "spa": "lunes",
    "rarNo": "lunesico",
    "spaNo": "lunes",
    "tags": [
      "días de la semana"
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
    "rar": "chocoóbara",
    "spa": "madrastra",
    "rarNo": "chocoobara",
    "spaNo": "madrastra",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "miyérati",
    "spa": "madrastra",
    "rarNo": "miyerati",
    "spaNo": "madrastra",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "eyé",
    "spa": "madre",
    "rarNo": "eye",
    "spaNo": "madre",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "huiyé",
    "spa": "madre",
    "rarNo": "huiye",
    "spaNo": "madre",
    "tags": [
      "parentescos"
    ]
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
    "rar": "binériami",
    "spa": "maestro",
    "rarNo": "bineriami",
    "spaNo": "maestro",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "me",
    "spa": "maguey",
    "rarNo": "me",
    "spaNo": "maguey",
    "tags": [
      "plantas"
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
    "rar": "ca'muchí",
    "spa": "maiz para palomitas",
    "rarNo": "ca'muchi",
    "spaNo": "maiz para palomitas",
    "tags": [
      "alimentos"
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
    "rar": "ri'echa",
    "spa": "malgastar - jugar",
    "rarNo": "ri'echa",
    "spaNo": "malgastar - jugar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sití oráami",
    "spa": "malvado",
    "rarNo": "siti oraami",
    "spaNo": "malvado",
    "tags": [
      "adjetivos"
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
    "rar": "nuré",
    "spa": "mandar - ordenar",
    "rarNo": "nure",
    "spaNo": "mandar - ordenar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chiní",
    "spa": "manta - ropa",
    "rarNo": "chini",
    "spaNo": "manta - ropa",
    "tags": [
      "vestimenta"
    ]
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
    "rar": "basána",
    "spa": "manzana",
    "rarNo": "basana",
    "spaNo": "manzana",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "ba'arí",
    "spa": "mañana",
    "rarNo": "ba'ari",
    "spaNo": "manana",
    "tags": []
  },
  {
    "rar": "batu",
    "spa": "mapache",
    "rarNo": "batu",
    "spaNo": "mapache",
    "tags": [
      "animales"
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
    "rar": "aró",
    "spa": "marchitarse",
    "rarNo": "aro",
    "spaNo": "marchitarse",
    "tags": []
  },
  {
    "rar": "cuná",
    "spa": "marido - esposo",
    "rarNo": "cuna",
    "spaNo": "marido - esposo",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "nacarópari",
    "spa": "mariposa",
    "rarNo": "nacaropari",
    "spaNo": "mariposa",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "cochi",
    "spa": "marrano",
    "rarNo": "cochi",
    "spaNo": "marrano",
    "tags": [
      "animales"
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
    "rar": "cho'mágame",
    "spa": "marrón",
    "rarNo": "cho'magame",
    "spaNo": "marron",
    "tags": [
      "colores"
    ]
  },
  {
    "rar": "mártesico",
    "spa": "martes",
    "rarNo": "martesico",
    "spaNo": "martes",
    "tags": [
      "días de la semana"
    ]
  },
  {
    "rar": "michona",
    "spa": "martillar",
    "rarNo": "michona",
    "spaNo": "martillar",
    "tags": [
      "verbos"
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
    "rar": "tabé",
    "spa": "más chiquito",
    "rarNo": "tabe",
    "spaNo": "mas chiquito",
    "tags": []
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
    "rar": "cho'obáchari",
    "spa": "máscara",
    "rarNo": "cho'obachari",
    "spaNo": "mascara",
    "tags": []
  },
  {
    "rar": "quecha",
    "spa": "masticar",
    "rarNo": "quecha",
    "spaNo": "masticar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "achagó",
    "spa": "mata espinosa",
    "rarNo": "achago",
    "spaNo": "mata espinosa",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "co'huí",
    "spa": "matar- asesinar",
    "rarNo": "co'hui",
    "spaNo": "matar- asesinar",
    "tags": [
      "verbos"
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
    "rar": "chí",
    "spa": "me",
    "rarNo": "chi",
    "spaNo": "me",
    "tags": []
  },
  {
    "rar": "huiya",
    "spa": "mecate",
    "rarNo": "huiya",
    "spaNo": "mecate",
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
    "rar": "ohuáami",
    "spa": "medicina - remedio",
    "rarNo": "ohuaami",
    "spaNo": "medicina - remedio",
    "tags": [
      "medicina"
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
    "rar": "rahuirí",
    "spa": "mediodía",
    "rarNo": "rahuiri",
    "spaNo": "mediodia",
    "tags": []
  },
  {
    "rar": "anahui",
    "spa": "medir - pesar",
    "rarNo": "anahui",
    "spaNo": "medir - pesar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "baná",
    "spa": "mejilla",
    "rarNo": "bana",
    "spaNo": "mejilla",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "garana",
    "spa": "mejorarse - convertirse",
    "rarNo": "garana",
    "spaNo": "mejorarse - convertirse",
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
    "rar": "rijí",
    "spa": "mentar - poner apellido",
    "rarNo": "riji",
    "spaNo": "mentar - poner apellido",
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
    "rar": "chabochi",
    "spa": "mestizo",
    "rarNo": "chabochi",
    "spaNo": "mestizo",
    "tags": [
      "adjetivos"
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
    "rar": "pachá bachá",
    "spa": "meter",
    "rarNo": "pacha bacha",
    "spaNo": "meter",
    "tags": [
      "verbos"
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
    "rar": "nasohua",
    "spa": "mezclar",
    "rarNo": "nasohua",
    "spaNo": "mezclar",
    "tags": [
      "verbos"
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
    "rar": "kéne",
    "spa": "mi - mio",
    "rarNo": "kene",
    "spaNo": "mi - mio",
    "tags": [
      "pronombres posesivos"
    ]
  },
  {
    "rar": "nijé rahuira",
    "spa": "mi pecho",
    "rarNo": "nije rahuira",
    "spaNo": "mi pecho",
    "tags": [
      "partes del cuerpo"
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
    "rar": "corimena",
    "spa": "miel de abeja",
    "rarNo": "corimena",
    "spaNo": "miel de abeja",
    "tags": [
      "alimentos"
    ]
  },
  {
    "rar": "mapuyena",
    "spa": "mientras",
    "rarNo": "mapuyena",
    "spaNo": "mientras",
    "tags": []
  },
  {
    "rar": "nasipasico",
    "spa": "miércoles",
    "rarNo": "nasipasico",
    "spaNo": "miercoles",
    "tags": [
      "días de la semana"
    ]
  },
  {
    "rar": "queni",
    "spa": "mío - mía - mi - mis",
    "rarNo": "queni",
    "spaNo": "mio - mia - mi - mis",
    "tags": [
      "pronombres posesivos"
    ]
  },
  {
    "rar": "neni",
    "spa": "mirar",
    "rarNo": "neni",
    "spaNo": "mirar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ritú",
    "spa": "mirar - admirar",
    "rarNo": "ritu",
    "spaNo": "mirar - admirar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ne",
    "spa": "mirar - observar",
    "rarNo": "ne",
    "spaNo": "mirar - observar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "risirúami",
    "spa": "miserable - tacaño",
    "rarNo": "risiruami",
    "spaNo": "miserable - tacano",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "nasipasí",
    "spa": "mitad",
    "rarNo": "nasipasi",
    "spaNo": "mitad",
    "tags": []
  },
  {
    "rar": "cho'méami",
    "spa": "mocoso",
    "rarNo": "cho'meami",
    "spaNo": "mocoso",
    "tags": [
      "adjetivos",
      "medicina"
    ]
  },
  {
    "rar": "sampá",
    "spa": "mojarse",
    "rarNo": "sampa",
    "spaNo": "mojarse",
    "tags": []
  },
  {
    "rar": "rusú",
    "spa": "moler",
    "rarNo": "rusu",
    "spaNo": "moler",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "batú",
    "spa": "moler en metate",
    "rarNo": "batu",
    "spaNo": "moler en metate",
    "tags": [
      "verbos"
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
    "rar": "asé",
    "spa": "montar (un animal)",
    "rarNo": "ase",
    "spaNo": "montar (un animal)",
    "tags": [
      "verbos"
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
    "rar": "chomítuame",
    "spa": "morado",
    "rarNo": "chomituame",
    "spaNo": "morado",
    "tags": [
      "colores"
    ]
  },
  {
    "rar": "qui'mo",
    "spa": "morder",
    "rarNo": "qui'mo",
    "spaNo": "morder",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "mucú",
    "spa": "morir - fallecer",
    "rarNo": "mucu",
    "spaNo": "morir - fallecer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "co'wá",
    "spa": "mosca",
    "rarNo": "co'wa",
    "spaNo": "mosca",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "se'wa",
    "spa": "mosca",
    "rarNo": "se'wa",
    "spaNo": "mosca",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ajó",
    "spa": "mosquito",
    "rarNo": "ajo",
    "spaNo": "mosquito",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ajo",
    "spa": "mosquito - zancudo",
    "rarNo": "ajo",
    "spaNo": "mosquito - zancudo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "nera",
    "spa": "mostrar",
    "rarNo": "nera",
    "spaNo": "mostrar",
    "tags": [
      "verbos"
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
    "rar": "sicara",
    "spa": "mover los brazos",
    "rarNo": "sicara",
    "spaNo": "mover los brazos",
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
    "rar": "nocuá",
    "spa": "moverse",
    "rarNo": "nocua",
    "spaNo": "moverse",
    "tags": []
  },
  {
    "rar": "noqué",
    "spa": "moverse",
    "rarNo": "noque",
    "spaNo": "moverse",
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
    "rar": "ihué",
    "spa": "muchachas",
    "rarNo": "ihue",
    "spaNo": "muchachas",
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
    "rar": "vagina",
    "spa": "muchíca",
    "rarNo": "vagina",
    "spaNo": "muchica",
    "tags": [
      "partes  del cuerpo"
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
    "rar": "nepi",
    "spa": "muchísimo",
    "rarNo": "nepi",
    "spaNo": "muchisimo",
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
    "rar": "nayá",
    "spa": "mucho antes",
    "rarNo": "naya",
    "spaNo": "mucho antes",
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
    "rar": "huaminabi",
    "spa": "mucho más",
    "rarNo": "huaminabi",
    "spaNo": "mucho mas",
    "tags": []
  },
  {
    "rar": "huicá",
    "spa": "mucho más",
    "rarNo": "huica",
    "spaNo": "mucho mas",
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
    "rar": "otérami",
    "spa": "muela",
    "rarNo": "oterami",
    "spaNo": "muela",
    "tags": [
      "partes del cuerpo",
      "medicina"
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
    "rar": "chóruhua",
    "spa": "mugre - suciedad",
    "rarNo": "choruhua",
    "spaNo": "mugre - suciedad",
    "tags": []
  },
  {
    "rar": "ochoréami",
    "spa": "mugriento",
    "rarNo": "ochoreami",
    "spaNo": "mugriento",
    "tags": [
      "adjetivos"
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
    "rar": "muguí",
    "spa": "mujeres",
    "rarNo": "mugui",
    "spaNo": "mujeres",
    "tags": []
  },
  {
    "rar": "huiquiyá muhué",
    "spa": "multiplicar",
    "rarNo": "huiquiya muhue",
    "spaNo": "multiplicar",
    "tags": [
      "verbos",
      "escuela"
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
    "rar": "sopichí",
    "spa": "murcielago",
    "rarNo": "sopichi",
    "spaNo": "murcielago",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "supuchí",
    "spa": "murciélago",
    "rarNo": "supuchi",
    "spaNo": "murcielago",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "táami",
    "spa": "músico",
    "rarNo": "taami",
    "spaNo": "musico",
    "tags": []
  },
  {
    "rar": "cabóchi",
    "spa": "músuclo de pierna o brazo",
    "rarNo": "cabochi",
    "spaNo": "musuclo de pierna o brazo",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "a'nagupi",
    "spa": "mutuamente - unos a otros",
    "rarNo": "a'nagupi",
    "spaNo": "mutuamente - unos a otros",
    "tags": []
  },
  {
    "rar": "hie",
    "spa": "muy - mucho",
    "rarNo": "hie",
    "spaNo": "muy - mucho",
    "tags": []
  },
  {
    "rar": "ne",
    "spa": "muy - sumamente",
    "rarNo": "ne",
    "spaNo": "muy - sumamente",
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
    "rar": "we gára",
    "spa": "muy bien",
    "rarNo": "we gara",
    "spaNo": "muy bien",
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
    "rar": "murubé",
    "spa": "muy cerca",
    "rarNo": "murube",
    "spaNo": "muy cerca",
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
    "rar": "micabé",
    "spa": "muy lejos",
    "rarNo": "micabe",
    "spaNo": "muy lejos",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "pebi",
    "spa": "muy poco",
    "rarNo": "pebi",
    "spaNo": "muy poco",
    "tags": []
  },
  {
    "rar": "aqué",
    "spa": "nadar",
    "rarNo": "aque",
    "spaNo": "nadar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cusuchí",
    "spa": "nalga",
    "rarNo": "cusuchi",
    "spaNo": "nalga",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "narasi",
    "spa": "naranja",
    "rarNo": "narasi",
    "spaNo": "naranja",
    "tags": [
      "colores"
    ]
  },
  {
    "rar": "chomá",
    "spa": "nariz",
    "rarNo": "choma",
    "spaNo": "nariz",
    "tags": [
      "partes del cuerpo"
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
    "rar": "bimó",
    "spa": "neblina - polvo",
    "rarNo": "bimo",
    "spaNo": "neblina - polvo",
    "tags": []
  },
  {
    "rar": "chókame",
    "spa": "negro",
    "rarNo": "chokame",
    "spaNo": "negro",
    "tags": [
      "colores"
    ]
  },
  {
    "rar": "múchari",
    "spa": "nene - criatura",
    "rarNo": "muchari",
    "spaNo": "nene - criatura",
    "tags": []
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
    "rar": "majárami",
    "spa": "nervioso",
    "rarNo": "majarami",
    "spaNo": "nervioso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "quipá",
    "spa": "nevar",
    "rarNo": "quipa",
    "spaNo": "nevar",
    "tags": [
      "verbos",
      "naturaleza"
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
    "rar": "rosorá",
    "spa": "nido",
    "rarNo": "rosora",
    "spaNo": "nido",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ochícari",
    "spa": "nieto",
    "rarNo": "ochicari",
    "spaNo": "nieto",
    "tags": [
      "parentescos"
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
    "rar": "yepá",
    "spa": "nieve",
    "rarNo": "yepa",
    "spaNo": "nieve",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "tewe",
    "spa": "niña",
    "rarNo": "tewe",
    "spaNo": "nina",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "towí",
    "spa": "niño",
    "rarNo": "towi",
    "spaNo": "nino",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "cúruhui",
    "spa": "niños - muchachos",
    "rarNo": "curuhui",
    "spaNo": "ninos - muchachos",
    "tags": []
  },
  {
    "rar": "ri'ná",
    "spa": "nivelar",
    "rarNo": "ri'na",
    "spaNo": "nivelar",
    "tags": [
      "verbos"
    ]
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
    "rar": "quetasi",
    "spa": "no",
    "rarNo": "quetasi",
    "spaNo": "no",
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
    "rar": "tasi iré",
    "spa": "no",
    "rarNo": "tasi ire",
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
    "rar": "chirihuperaba",
    "spa": "no hay de que - de nada",
    "rarNo": "chirihuperaba",
    "spaNo": "no hay de que - de nada",
    "tags": []
  },
  {
    "rar": "que chireco",
    "spa": "no importa",
    "rarNo": "que chireco",
    "spaNo": "no importa",
    "tags": []
  },
  {
    "rar": "surí",
    "spa": "no querer compartir",
    "rarNo": "suri",
    "spaNo": "no querer compartir",
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
    "rar": "rocogó",
    "spa": "noche",
    "rarNo": "rocogo",
    "spaNo": "noche",
    "tags": []
  },
  {
    "rar": "aniríhuami",
    "spa": "nombrado",
    "rarNo": "anirihuami",
    "spaNo": "nombrado",
    "tags": []
  },
  {
    "rar": "rihuará",
    "spa": "nombrar",
    "rarNo": "rihuara",
    "spaNo": "nombrar",
    "tags": [
      "verbos"
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
    "rar": "irá",
    "spa": "nopal",
    "rarNo": "ira",
    "spaNo": "nopal",
    "tags": [
      "alimentos",
      "plantas"
    ]
  },
  {
    "rar": "bajicháhuari",
    "spa": "norte",
    "rarNo": "bajichahuari",
    "spaNo": "norte",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "tumujé",
    "spa": "nosotros",
    "rarNo": "tumuje",
    "spaNo": "nosotros",
    "tags": []
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
      "números"
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
    "rar": "noreba",
    "spa": "nublarse",
    "rarNo": "noreba",
    "spaNo": "nublarse",
    "tags": []
  },
  {
    "rar": "cutámachi",
    "spa": "nuca",
    "rarNo": "cutamachi",
    "spaNo": "nuca",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "mo'orí",
    "spa": "nuera",
    "rarNo": "mo'ori",
    "spaNo": "nuera",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "kéta",
    "spa": "nuestro",
    "rarNo": "keta",
    "spaNo": "nuestro",
    "tags": [
      "pronombres posesivos"
    ]
  },
  {
    "rar": "tamujé níhuara",
    "spa": "nuestro",
    "rarNo": "tamuje nihuara",
    "spaNo": "nuestro",
    "tags": []
  },
  {
    "rar": "queta",
    "spa": "nuestro - nuestra",
    "rarNo": "queta",
    "spaNo": "nuestro - nuestra",
    "tags": [
      "pronombres posesivos"
    ]
  },
  {
    "rar": "kimacói",
    "spa": "nueve",
    "rarNo": "kimacoi",
    "spaNo": "nueve",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "bucuríhuami",
    "spa": "nuevo - fresco",
    "rarNo": "bucurihuami",
    "spaNo": "nuevo - fresco",
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
    "rar": "nóchami",
    "spa": "obrero - trabajador",
    "rarNo": "nochami",
    "spaNo": "obrero - trabajador",
    "tags": []
  },
  {
    "rar": "chonachona",
    "spa": "obscurecer",
    "rarNo": "chonachona",
    "spaNo": "obscurecer",
    "tags": []
  },
  {
    "rar": "rocuahua",
    "spa": "obscurecerse",
    "rarNo": "rocuahua",
    "spaNo": "obscurecerse",
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
    "rar": "cora",
    "spa": "obsequiar- regalar",
    "rarNo": "cora",
    "spaNo": "obsequiar- regalar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "osa nahuosa macoy",
    "spa": "ochenta",
    "rarNo": "osa nahuosa macoy",
    "spaNo": "ochenta",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "osá naó",
    "spa": "ocho",
    "rarNo": "osa nao",
    "spaNo": "ocho",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "chopé",
    "spa": "ocote",
    "rarNo": "chope",
    "spaNo": "ocote",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "norohuí",
    "spa": "ocultarse",
    "rarNo": "norohui",
    "spaNo": "ocultarse",
    "tags": []
  },
  {
    "rar": "nami",
    "spa": "oír",
    "rarNo": "nami",
    "spaNo": "oir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "busí",
    "spa": "ojo",
    "rarNo": "busi",
    "spaNo": "ojo",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "juca ",
    "spa": "oler",
    "rarNo": "juca ",
    "spaNo": "oler",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sáa",
    "spa": "oler - olfatear",
    "rarNo": "saa",
    "spaNo": "oler - olfatear",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bicajuca",
    "spa": "oler mal",
    "rarNo": "bicajuca",
    "spaNo": "oler mal",
    "tags": [
      "adjetivos"
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
    "rar": "sicorí",
    "spa": "olla - jarro",
    "rarNo": "sicori",
    "spaNo": "olla - jarro",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "huicari",
    "spa": "olvidarse",
    "rarNo": "huicari",
    "spaNo": "olvidarse",
    "tags": []
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
    "rar": "macói biré",
    "spa": "once",
    "rarNo": "macoi bire",
    "spaNo": "once",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "huisú",
    "spa": "ordeñar",
    "rarNo": "huisu",
    "spaNo": "ordenar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nacá",
    "spa": "oreja - oído",
    "rarNo": "naca",
    "spaNo": "oreja - oido",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "nóochami",
    "spa": "orgulloso",
    "rarNo": "noochami",
    "spaNo": "orgulloso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "suhuirá",
    "spa": "orilla",
    "rarNo": "suhuira",
    "spaNo": "orilla",
    "tags": []
  },
  {
    "rar": "isí",
    "spa": "orinar",
    "rarNo": "isi",
    "spaNo": "orinar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ojuí",
    "spa": "oso",
    "rarNo": "ojui",
    "spaNo": "oso",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "auchecho",
    "spa": "otra vez",
    "rarNo": "auchecho",
    "spaNo": "otra vez",
    "tags": []
  },
  {
    "rar": "cu",
    "spa": "otra vez",
    "rarNo": "cu",
    "spaNo": "otra vez",
    "tags": []
  },
  {
    "rar": "auché",
    "spa": "otro",
    "rarNo": "auche",
    "spaNo": "otro",
    "tags": []
  },
  {
    "rar": "lasíbami",
    "spa": "oxidado",
    "rarNo": "lasibami",
    "spaNo": "oxidado",
    "tags": [
      "adjetivos"
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
    "rar": "onó",
    "spa": "padre",
    "rarNo": "ono",
    "spaNo": "padre",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "tata",
    "spa": "padre",
    "rarNo": "tata",
    "spaNo": "padre",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "marí",
    "spa": "padre (de la hija)",
    "rarNo": "mari",
    "spaNo": "padre (de la hija)",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "onorúami",
    "spa": "padre (de la hija)",
    "rarNo": "onoruami",
    "spaNo": "padre (de la hija)",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "baquirini",
    "spa": "padrino - madrina",
    "rarNo": "baquirini",
    "spaNo": "padrino - madrina",
    "tags": [
      "parentescos"
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
    "rar": "nateta",
    "spa": "pagar",
    "rarNo": "nateta",
    "spaNo": "pagar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "natétarahua",
    "spa": "pagar",
    "rarNo": "natetarahua",
    "spaNo": "pagar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "churuguí",
    "spa": "pájaro",
    "rarNo": "churugui",
    "spaNo": "pajaro",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ra'íchari",
    "spa": "palabra",
    "rarNo": "ra'ichari",
    "spaNo": "palabra",
    "tags": []
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
    "rar": "bacúu",
    "spa": "palo",
    "rarNo": "bacuu",
    "spaNo": "palo",
    "tags": []
  },
  {
    "rar": "cusí",
    "spa": "palo",
    "rarNo": "cusi",
    "spaNo": "palo",
    "tags": []
  },
  {
    "rar": "macahui",
    "spa": "paloma",
    "rarNo": "macahui",
    "spaNo": "paloma",
    "tags": [
      "animales"
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
    "rar": "pano",
    "spa": "pan",
    "rarNo": "pano",
    "spaNo": "pan",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "casibacha",
    "spa": "pantalón - calzón",
    "rarNo": "casibacha",
    "spaNo": "pantalon - calzon",
    "tags": [
      "vestimenta"
    ]
  },
  {
    "rar": "chu'huechi",
    "spa": "panteón - tumba",
    "rarNo": "chu'huechi",
    "spaNo": "panteon - tumba",
    "tags": []
  },
  {
    "rar": "ropochí",
    "spa": "panza",
    "rarNo": "ropochi",
    "spaNo": "panza",
    "tags": []
  },
  {
    "rar": "ropéami",
    "spa": "panzón",
    "rarNo": "ropeami",
    "spaNo": "panzon",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "huisiburi",
    "spa": "paño - trapo",
    "rarNo": "huisiburi",
    "spaNo": "pano - trapo",
    "tags": []
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
    "rar": "ri'rohui",
    "spa": "papas",
    "rarNo": "ri'rohui",
    "spaNo": "papas",
    "tags": []
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
    "rar": "mapujiti",
    "spa": "para - que - el cual ",
    "rarNo": "mapujiti",
    "spaNo": "para - que - el cual ",
    "tags": []
  },
  {
    "rar": "ra'inana",
    "spa": "para arriba",
    "rarNo": "ra'inana",
    "spaNo": "para arriba",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "ripari",
    "spa": "para arriba",
    "rarNo": "ripari",
    "spaNo": "para arriba",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "huirá",
    "spa": "parar",
    "rarNo": "huira",
    "spaNo": "parar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huiriba",
    "spa": "pararse",
    "rarNo": "huiriba",
    "spaNo": "pararse",
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
    "rar": "caré",
    "spa": "parecerse",
    "rarNo": "care",
    "spaNo": "parecerse",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ri'náami",
    "spa": "parejo",
    "rarNo": "ri'naami",
    "spaNo": "parejo",
    "tags": []
  },
  {
    "rar": "raná",
    "spa": "parir",
    "rarNo": "rana",
    "spaNo": "parir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huanihuí",
    "spa": "pasado mañana",
    "rarNo": "huanihui",
    "spaNo": "pasado manana",
    "tags": []
  },
  {
    "rar": "simera ",
    "spa": "pasar",
    "rarNo": "simera ",
    "spaNo": "pasar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "biteba",
    "spa": "pasar la noche",
    "rarNo": "biteba",
    "spaNo": "pasar la noche",
    "tags": [
      "verbos"
    ]
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
    "rar": "casará",
    "spa": "pasto",
    "rarNo": "casara",
    "spaNo": "pasto",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "rité",
    "spa": "patear",
    "rarNo": "rite",
    "spaNo": "patear",
    "tags": [
      "verbos"
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
    "rar": "rosoná",
    "spa": "pato",
    "rarNo": "rosona",
    "spaNo": "pato",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "rawé",
    "spa": "pecho",
    "rarNo": "rawe",
    "spaNo": "pecho",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "birina",
    "spa": "pedernal",
    "rarNo": "birina",
    "spaNo": "pedernal",
    "tags": []
  },
  {
    "rar": "ricóchari",
    "spa": "pedernal",
    "rarNo": "ricochari",
    "spaNo": "pedernal",
    "tags": []
  },
  {
    "rar": "tana",
    "spa": "pedir",
    "rarNo": "tana",
    "spaNo": "pedir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tani riosi",
    "spa": "pedir a dios",
    "rarNo": "tani riosi",
    "spaNo": "pedir a dios",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ojuni",
    "spa": "pedorro",
    "rarNo": "ojuni",
    "spaNo": "pedorro",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "chihuá",
    "spa": "pegar",
    "rarNo": "chihua",
    "spaNo": "pegar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "si'luna",
    "spa": "pegar",
    "rarNo": "si'luna",
    "spaNo": "pegar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "napachota",
    "spa": "pegar - juntar ",
    "rarNo": "napachota",
    "spaNo": "pegar - juntar ",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tichícari",
    "spa": "peinar",
    "rarNo": "tichicari",
    "spaNo": "peinar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sipirú",
    "spa": "pelar",
    "rarNo": "sipiru",
    "spaNo": "pelar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nacóo ",
    "spa": "pelear",
    "rarNo": "nacoo ",
    "spaNo": "pelear",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sucuchú",
    "spa": "pellizcar - rasguñar",
    "rarNo": "sucuchu",
    "spaNo": "pellizcar - rasgunar",
    "tags": [
      "verbos"
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
    "rar": "nátami",
    "spa": "pensador - inteligente",
    "rarNo": "natami",
    "spaNo": "pensador - inteligente",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "onata",
    "spa": "pensar",
    "rarNo": "onata",
    "spaNo": "pensar",
    "tags": [
      "verbos"
    ]
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
    "rar": "pioni",
    "spa": "peón",
    "rarNo": "pioni",
    "spaNo": "peon",
    "tags": []
  },
  {
    "rar": "umpá",
    "spa": "perder en el juego",
    "rarNo": "umpa",
    "spaNo": "perder en el juego",
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
    "rar": "huicáhuari",
    "spa": "perdón",
    "rarNo": "huicahuari",
    "spaNo": "perdon",
    "tags": []
  },
  {
    "rar": "huicahua",
    "spa": "perdonar",
    "rarNo": "huicahua",
    "spaNo": "perdonar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "na´sinami",
    "spa": "perezoso",
    "rarNo": "na´sinami",
    "spaNo": "perezoso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "natabú",
    "spa": "perforar - taladrar",
    "rarNo": "natabu",
    "spaNo": "perforar - taladrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tibí",
    "spa": "permanecer",
    "rarNo": "tibi",
    "spaNo": "permanecer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "churi",
    "spa": "perrito",
    "rarNo": "churi",
    "spaNo": "perrito",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "cochí",
    "spa": "perro",
    "rarNo": "cochi",
    "spaNo": "perro",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "a'najata",
    "spa": "perseguir",
    "rarNo": "a'najata",
    "spaNo": "perseguir",
    "tags": [
      "verbos"
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
    "rar": "cupucha",
    "spa": "pestañear",
    "rarNo": "cupucha",
    "spaNo": "pestanear",
    "tags": [
      "verbos"
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
    "rar": "jicurí",
    "spa": "peyote",
    "rarNo": "jicuri",
    "spaNo": "peyote",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "ro'chí",
    "spa": "pez",
    "rarNo": "ro'chi",
    "spaNo": "pez",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "rochí",
    "spa": "pez - pescado",
    "rarNo": "rochi",
    "spaNo": "pez - pescado",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "cóami",
    "spa": "picante",
    "rarNo": "coami",
    "spaNo": "picante",
    "tags": [
      "sabores"
    ]
  },
  {
    "rar": "coraca",
    "spa": "picante",
    "rarNo": "coraca",
    "spaNo": "picante",
    "tags": [
      "sabores"
    ]
  },
  {
    "rar": "chijisó",
    "spa": "picar",
    "rarNo": "chijiso",
    "spaNo": "picar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "niquí",
    "spa": "picar",
    "rarNo": "niqui",
    "spaNo": "picar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "iché",
    "spa": "picar - inyectar",
    "rarNo": "iche",
    "spaNo": "picar - inyectar",
    "tags": [
      "verbos"
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
    "rar": "uchú",
    "spa": "picar - picotear",
    "rarNo": "uchu",
    "spaNo": "picar - picotear",
    "tags": [
      "verbos"
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
    "rar": "rará",
    "spa": "pie",
    "rarNo": "rara",
    "spaNo": "pie",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "ronó",
    "spa": "pie",
    "rarNo": "rono",
    "spaNo": "pie",
    "tags": [
      "partes del cuerpo"
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
    "rar": "huichí",
    "spa": "piel - cuero",
    "rarNo": "huichi",
    "spaNo": "piel - cuero",
    "tags": []
  },
  {
    "rar": "casí",
    "spa": "pierna - muslo",
    "rarNo": "casi",
    "spaNo": "pierna - muslo",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "ocó",
    "spa": "pino",
    "rarNo": "oco",
    "spaNo": "pino",
    "tags": [
      "plantas"
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
    "rar": "huicheami",
    "spa": "piojoso",
    "rarNo": "huicheami",
    "spaNo": "piojoso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "riqué",
    "spa": "pisar",
    "rarNo": "rique",
    "spaNo": "pisar",
    "tags": [
      "verbos"
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
    "rar": "bitori",
    "spa": "plato - cazuela",
    "rarNo": "bitori",
    "spaNo": "plato - cazuela",
    "tags": [
      "alimentos"
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
    "rar": "risúati",
    "spa": "pobre",
    "rarNo": "risuati",
    "spaNo": "pobre",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "pe",
    "spa": "poco",
    "rarNo": "pe",
    "spaNo": "poco",
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
    "rar": "nabé",
    "spa": "poco más allá",
    "rarNo": "nabe",
    "spaNo": "poco mas alla",
    "tags": [
      "indicaciones"
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
    "rar": "pébi",
    "spa": "poco tiempo",
    "rarNo": "pebi",
    "spaNo": "poco tiempo",
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
    "rar": "pe ocuá",
    "spa": "pocos",
    "rarNo": "pe ocua",
    "spaNo": "pocos",
    "tags": []
  },
  {
    "rar": "atahuépata",
    "spa": "podar",
    "rarNo": "atahuepata",
    "spaNo": "podar",
    "tags": [
      "verbos"
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
    "rar": "omero ",
    "spa": "poder",
    "rarNo": "omero ",
    "spaNo": "poder",
    "tags": []
  },
  {
    "rar": "omériami",
    "spa": "poderoso",
    "rarNo": "omeriami",
    "spaNo": "poderoso",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "machíri",
    "spa": "podria ver",
    "rarNo": "machiri",
    "spaNo": "podria ver",
    "tags": []
  },
  {
    "rar": "churipí",
    "spa": "pollito",
    "rarNo": "churipi",
    "spaNo": "pollito",
    "tags": [
      "animales"
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
    "rar": "nijiyá",
    "spa": "pon atención",
    "rarNo": "nijiya",
    "spaNo": "pon atencion",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "achá",
    "spa": "poner",
    "rarNo": "acha",
    "spaNo": "poner",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "muchuhua",
    "spa": "poner",
    "rarNo": "muchuhua",
    "spaNo": "poner",
    "tags": [
      "verbos"
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
    "rar": "toná",
    "spa": "poner parado",
    "rarNo": "tona",
    "spaNo": "poner parado",
    "tags": []
  },
  {
    "rar": "bacó",
    "spa": "ponerse amarillo",
    "rarNo": "baco",
    "spaNo": "ponerse amarillo",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "gará aní",
    "spa": "ponerse de acuerdo",
    "rarNo": "gara ani",
    "spaNo": "ponerse de acuerdo",
    "tags": []
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
    "rar": "pe táa",
    "spa": "poquito",
    "rarNo": "pe taa",
    "spaNo": "poquito",
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
    "rar": "ri'rena",
    "spa": "por abajo",
    "rarNo": "ri'rena",
    "spaNo": "por abajo",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "corí yé",
    "spa": "por allá",
    "rarNo": "cori ye",
    "spaNo": "por alla",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "huaminá",
    "spa": "por allá",
    "rarNo": "huamina",
    "spaNo": "por alla",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "ye",
    "spa": "por alla - alrededor",
    "rarNo": "ye",
    "spaNo": "por alla - alrededor",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "jami",
    "spa": "por aquí - por este lado",
    "rarNo": "jami",
    "spaNo": "por aqui - por este lado",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "jubáami",
    "spa": "por atrás",
    "rarNo": "jubaami",
    "spaNo": "por atras",
    "tags": [
      "indicaciones"
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
    "rar": "pe risensi",
    "spa": "por favor",
    "rarNo": "pe risensi",
    "spaNo": "por favor",
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
    "rar": "a'nagú",
    "spa": "por los dos lados",
    "rarNo": "a'nagu",
    "spaNo": "por los dos lados",
    "tags": []
  },
  {
    "rar": "cárabá",
    "spa": "por nada",
    "rarNo": "caraba",
    "spaNo": "por nada",
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
    "rar": "mapugite",
    "spa": "porque ",
    "rarNo": "mapugite",
    "spaNo": "porque ",
    "tags": []
  },
  {
    "rar": "níhuami",
    "spa": "poseedor - rico",
    "rarNo": "nihuami",
    "spaNo": "poseedor - rico",
    "tags": [
      "adjetivos"
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
    "rar": "bahpuhuami",
    "spa": "potable",
    "rarNo": "bahpuhuami",
    "spaNo": "potable",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "bajichi",
    "spa": "pozo",
    "rarNo": "bajichi",
    "spaNo": "pozo",
    "tags": []
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
    "rar": "rucué",
    "spa": "preguntar",
    "rarNo": "rucue",
    "spaNo": "preguntar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "na'érami",
    "spa": "prendido",
    "rarNo": "na'erami",
    "spaNo": "prendido",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "tanehui",
    "spa": "prestar",
    "rarNo": "tanehui",
    "spaNo": "prestar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bachá",
    "spa": "primeramente - adelante - enfrente",
    "rarNo": "bacha",
    "spaNo": "primeramente - adelante - enfrente",
    "tags": [
      "indicaciones"
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
    "rar": "biníriame",
    "spa": "profesor",
    "rarNo": "biniriame",
    "spaNo": "profesor",
    "tags": [
      "escuela"
    ]
  },
  {
    "rar": "bicá",
    "spa": "pudrir",
    "rarNo": "bica",
    "spaNo": "pudrir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ripuchí",
    "spa": "pulga",
    "rarNo": "ripuchi",
    "spaNo": "pulga",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "rawigá",
    "spa": "puma",
    "rarNo": "rawiga",
    "spaNo": "puma",
    "tags": [
      "animales"
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
    "rar": "machíriami",
    "spa": "que puede ver",
    "rarNo": "machiriami",
    "spaNo": "que puede ver",
    "tags": []
  },
  {
    "rar": "ri'ícami",
    "spa": "que se queja",
    "rarNo": "ri'icami",
    "spaNo": "que se queja",
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
    "rar": "tanéami",
    "spa": "que tiene hijos",
    "rarNo": "taneami",
    "spaNo": "que tiene hijos",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "ca'rígami",
    "spa": "quebrado",
    "rarNo": "ca'rigami",
    "spaNo": "quebrado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "capona",
    "spa": "quebrar",
    "rarNo": "capona",
    "spaNo": "quebrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "mojuana",
    "spa": "quebrar",
    "rarNo": "mojuana",
    "spaNo": "quebrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "napona",
    "spa": "quebrar",
    "rarNo": "napona",
    "spaNo": "quebrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "na'rina",
    "spa": "quebrar",
    "rarNo": "na'rina",
    "spaNo": "quebrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ripí",
    "spa": "quedar",
    "rarNo": "ripi",
    "spaNo": "quedar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tibí",
    "spa": "quedar - sobrar",
    "rarNo": "tibi",
    "spaNo": "quedar - sobrar",
    "tags": [
      "verbos"
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
    "rar": "risúu aní",
    "spa": "quejarse",
    "rarNo": "risuu ani",
    "spaNo": "quejarse",
    "tags": []
  },
  {
    "rar": "kiribá",
    "spa": "quelite",
    "rarNo": "kiriba",
    "spaNo": "quelite",
    "tags": [
      "plantas"
    ]
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
    "rar": "na'árami",
    "spa": "quemado",
    "rarNo": "na'arami",
    "spaNo": "quemado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "na'á",
    "spa": "quemar",
    "rarNo": "na'a",
    "spaNo": "quemar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sahua",
    "spa": "quemar",
    "rarNo": "sahua",
    "spaNo": "quemar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sa'huí",
    "spa": "quemarse ",
    "rarNo": "sa'hui",
    "spaNo": "quemarse ",
    "tags": []
  },
  {
    "rar": "choba",
    "spa": "quemarse por el sol",
    "rarNo": "choba",
    "spaNo": "quemarse por el sol",
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
    "rar": "ochobeta",
    "spa": "quemarse por el sol",
    "rarNo": "ochobeta",
    "spaNo": "quemarse por el sol",
    "tags": []
  },
  {
    "rar": "nakí",
    "spa": "querer",
    "rarNo": "naki",
    "spaNo": "querer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "naquí",
    "spa": "querer - desear",
    "rarNo": "naqui",
    "spaNo": "querer - desear",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "anihuáami",
    "spa": "querer decir",
    "rarNo": "anihuaami",
    "spaNo": "querer decir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "muchínara",
    "spa": "querer senarse",
    "rarNo": "muchinara",
    "spaNo": "querer senarse",
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
    "rar": "quirí",
    "spa": "quieto - silencio",
    "rarNo": "quiri",
    "spaNo": "quieto - silencio",
    "tags": []
  },
  {
    "rar": "charóara",
    "spa": "quijada",
    "rarNo": "charoara",
    "spaNo": "quijada",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "macoy miná marí",
    "spa": "quince",
    "rarNo": "macoy mina mari",
    "spaNo": "quince",
    "tags": [
      "números"
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
    "rar": "orari ",
    "spa": "quiso (de querer)",
    "rarNo": "orari ",
    "spaNo": "quiso (de querer)",
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
    "rar": "acarapta",
    "spa": "quitar huaraches",
    "rarNo": "acarapta",
    "spaNo": "quitar huaraches",
    "tags": []
  },
  {
    "rar": "quere",
    "spa": "quizá - tal vez",
    "rarNo": "quere",
    "spaNo": "quiza - tal vez",
    "tags": []
  },
  {
    "rar": "huaré",
    "spa": "quizás - tal vez",
    "rarNo": "huare",
    "spaNo": "quizas - tal vez",
    "tags": []
  },
  {
    "rar": "nawá",
    "spa": "raíz",
    "rarNo": "nawa",
    "spaNo": "raiz",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "rapana",
    "spa": "rajar - partir",
    "rarNo": "rapana",
    "spaNo": "rajar - partir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rapá",
    "spa": "rajarse - partirse",
    "rarNo": "rapa",
    "spaNo": "rajarse - partirse",
    "tags": []
  },
  {
    "rar": "otohuá",
    "spa": "rama grande",
    "rarNo": "otohua",
    "spaNo": "rama grande",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "otowa",
    "spa": "ramo",
    "rarNo": "otowa",
    "spaNo": "ramo",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "rimó",
    "spa": "rana",
    "rarNo": "rimo",
    "spaNo": "rana",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ripá",
    "spa": "rascar",
    "rarNo": "ripa",
    "spaNo": "rascar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sipá",
    "spa": "rascar - lijar - raspar - cepillar",
    "rarNo": "sipa",
    "spaNo": "rascar - lijar - raspar - cepillar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sucú",
    "spa": "raspar - rascarse",
    "rarNo": "sucu",
    "spaNo": "raspar - rascarse",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bisiruta",
    "spa": "rasparse",
    "rarNo": "bisiruta",
    "spaNo": "rasparse",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "huichibebcha",
    "spa": "rasparse",
    "rarNo": "huichibebcha",
    "spaNo": "rasparse",
    "tags": [
      "verbos",
      "medicina"
    ]
  },
  {
    "rar": "rorí",
    "spa": "rata",
    "rarNo": "rori",
    "spaNo": "rata",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "chicuri",
    "spa": "ratón",
    "rarNo": "chicuri",
    "spaNo": "raton",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "sotóchi",
    "spa": "ratoncito",
    "rarNo": "sotochi",
    "spaNo": "ratoncito",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "rapirá",
    "spa": "rebanar",
    "rarNo": "rapira",
    "spaNo": "rebanar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "naré",
    "spa": "recibir - aceptar",
    "rarNo": "nare",
    "spaNo": "recibir - aceptar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "newa",
    "spa": "recordar",
    "rarNo": "newa",
    "spaNo": "recordar",
    "tags": [
      "verbos",
      "escuela"
    ]
  },
  {
    "rar": "sitúrami",
    "spa": "redondo",
    "rarNo": "siturami",
    "spaNo": "redondo",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "córima",
    "spa": "regalar",
    "rarNo": "corima",
    "spaNo": "regalar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "oyera",
    "spa": "regañar",
    "rarNo": "oyera",
    "spaNo": "reganar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "yona ",
    "spa": "regañar",
    "rarNo": "yona ",
    "spaNo": "reganar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "achí",
    "spa": "reir - sonreir",
    "rarNo": "achi",
    "spaNo": "reir - sonreir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cachí",
    "spa": "reirse",
    "rarNo": "cachi",
    "spaNo": "reirse",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ni'wi",
    "spa": "relampago",
    "rarNo": "ni'wi",
    "spaNo": "relampago",
    "tags": []
  },
  {
    "rar": "ni'huá",
    "spa": "relampaguear",
    "rarNo": "ni'hua",
    "spaNo": "relampaguear",
    "tags": []
  },
  {
    "rar": "rataba",
    "spa": "relumbrar - brillar mucho",
    "rarNo": "rataba",
    "spaNo": "relumbrar - brillar mucho",
    "tags": []
  },
  {
    "rar": "pachoca",
    "spa": "remendar",
    "rarNo": "pachoca",
    "spaNo": "remendar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pagué",
    "spa": "remojar",
    "rarNo": "pague",
    "spaNo": "remojar",
    "tags": []
  },
  {
    "rar": "pasó",
    "spa": "remojar",
    "rarNo": "paso",
    "spaNo": "remojar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sampacha",
    "spa": "remojar",
    "rarNo": "sampacha",
    "spaNo": "remojar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sa'mecha",
    "spa": "remojar - mojar",
    "rarNo": "sa'mecha",
    "spaNo": "remojar - mojar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "píhui",
    "spa": "remoler",
    "rarNo": "pihui",
    "spaNo": "remoler",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pibíiri",
    "spa": "remolino",
    "rarNo": "pibiiri",
    "spaNo": "remolino",
    "tags": []
  },
  {
    "rar": "sibori",
    "spa": "renacuajo",
    "rarNo": "sibori",
    "spaNo": "renacuajo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "rapárachi",
    "spa": "rendija",
    "rarNo": "raparachi",
    "spaNo": "rendija",
    "tags": []
  },
  {
    "rar": "nachuta",
    "spa": "repartir - distribuir",
    "rarNo": "nachuta",
    "spaNo": "repartir - distribuir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tinicha",
    "spa": "repetir - burlar",
    "rarNo": "tinicha",
    "spaNo": "repetir - burlar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ra'ama",
    "spa": "reprender - prohibir",
    "rarNo": "ra'ama",
    "spaNo": "reprender - prohibir",
    "tags": [
      "verbos"
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
    "rar": "sitá",
    "spa": "resbalarse",
    "rarNo": "sita",
    "spaNo": "resbalarse",
    "tags": []
  },
  {
    "rar": "cho'má",
    "spa": "resfriarse - moco",
    "rarNo": "cho'ma",
    "spaNo": "resfriarse - moco",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "o'huiqué",
    "spa": "respetar - obedecer",
    "rarNo": "o'huique",
    "spaNo": "respetar - obedecer",
    "tags": [
      "verbos"
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
    "rar": "cu o'huína",
    "spa": "resucitar",
    "rarNo": "cu o'huina",
    "spaNo": "resucitar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sahuarásimí",
    "spa": "retoñar",
    "rarNo": "sahuarasimi",
    "spaNo": "retonar",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "queba",
    "spa": "retumbar",
    "rarNo": "queba",
    "spaNo": "retumbar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nasóami",
    "spa": "revuelto",
    "rarNo": "nasoami",
    "spaNo": "revuelto",
    "tags": []
  },
  {
    "rar": "amachí",
    "spa": "rezar",
    "rarNo": "amachi",
    "spaNo": "rezar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "wenomíweame",
    "spa": "rico - adinerado",
    "rarNo": "wenomiweame",
    "spaNo": "rico - adinerado",
    "tags": [
      "adjetivos"
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
    "rar": "achíami",
    "spa": "risueño",
    "rarNo": "achiami",
    "spaNo": "risueno",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "chigó",
    "spa": "robar",
    "rarNo": "chigo",
    "spaNo": "robar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bachima",
    "spa": "rociar",
    "rarNo": "bachima",
    "spaNo": "rociar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cabítana",
    "spa": "rodar - envolver",
    "rarNo": "cabitana",
    "spaNo": "rodar - envolver",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "noré",
    "spa": "rodear",
    "rarNo": "nore",
    "spaNo": "rodear",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chocoba",
    "spa": "rodilla -hincarse - ponerse de rodillas",
    "rarNo": "chocoba",
    "spaNo": "rodilla -hincarse - ponerse de rodillas",
    "tags": [
      "partes del cuerpo"
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
    "rar": "sitákame",
    "spa": "rojo",
    "rarNo": "sitakame",
    "spaNo": "rojo",
    "tags": [
      "colores"
    ]
  },
  {
    "rar": "chi'huana",
    "spa": "romper - cortar",
    "rarNo": "chi'huana",
    "spaNo": "romper - cortar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chi'hua",
    "spa": "romperse - cortarse",
    "rarNo": "chi'hua",
    "spaNo": "romperse - cortarse",
    "tags": []
  },
  {
    "rar": "roró",
    "spa": "roncar",
    "rarNo": "roro",
    "spaNo": "roncar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "biríngo",
    "spa": "rubio",
    "rarNo": "biringo",
    "spaNo": "rubio",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "roró",
    "spa": "rugir",
    "rarNo": "roro",
    "spaNo": "rugir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "sápatoco",
    "spa": "sábado",
    "rarNo": "sapatoco",
    "spaNo": "sabado",
    "tags": [
      "días de la semana"
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
    "rar": "machí",
    "spa": "saber - conocer",
    "rarNo": "machi",
    "spaNo": "saber - conocer",
    "tags": [
      "verbos",
      "escuela"
    ]
  },
  {
    "rar": "iquíi ",
    "spa": "saber (lo que pasó)",
    "rarNo": "iquii ",
    "spaNo": "saber (lo que paso)",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "machí oserí 'néniya",
    "spa": "saber leer",
    "rarNo": "machi oseri 'neniya",
    "spaNo": "saber leer",
    "tags": [
      "verbos",
      "escuela"
    ]
  },
  {
    "rar": "chupará",
    "spa": "sacar punta",
    "rarNo": "chupara",
    "spaNo": "sacar punta",
    "tags": [
      "verbos",
      "escuela"
    ]
  },
  {
    "rar": "machibú",
    "spa": "sacar punta",
    "rarNo": "machibu",
    "spaNo": "sacar punta",
    "tags": [
      "verbos",
      "escuela"
    ]
  },
  {
    "rar": "asahua",
    "spa": "sacudir",
    "rarNo": "asahua",
    "spaNo": "sacudir",
    "tags": []
  },
  {
    "rar": "goná",
    "spa": "sal",
    "rarNo": "gona",
    "spaNo": "sal",
    "tags": [
      "alimentos"
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
    "rar": "acáami",
    "spa": "salado - dulce",
    "rarNo": "acaami",
    "spaNo": "salado - dulce",
    "tags": [
      "sabores"
    ]
  },
  {
    "rar": "rotebi",
    "spa": "salamandra",
    "rarNo": "rotebi",
    "spaNo": "salamandra",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "machina",
    "spa": "salir",
    "rarNo": "machina",
    "spaNo": "salir",
    "tags": [
      "verbos"
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
    "rar": "sa'rihuá",
    "spa": "saliva",
    "rarNo": "sa'rihua",
    "spaNo": "saliva",
    "tags": []
  },
  {
    "rar": "chipó",
    "spa": "salpicar - brincar",
    "rarNo": "chipo",
    "spaNo": "salpicar - brincar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "corochi",
    "spa": "saltamontes",
    "rarNo": "corochi",
    "spaNo": "saltamontes",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "narepa",
    "spa": "saludar",
    "rarNo": "narepa",
    "spaNo": "saludar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "lena",
    "spa": "sangrar - desangrar",
    "rarNo": "lena",
    "spaNo": "sangrar - desangrar",
    "tags": [
      "verbos"
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
    "rar": "léami",
    "spa": "sangriento",
    "rarNo": "leami",
    "spaNo": "sangriento",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "acáanami",
    "spa": "Sano de pie o de brazo",
    "rarNo": "acaanami",
    "spaNo": "Sano de pie o de brazo",
    "tags": []
  },
  {
    "rar": "sacuá",
    "spa": "sapo",
    "rarNo": "sacua",
    "spaNo": "sapo",
    "tags": [
      "animales"
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
    "rar": "rotosí",
    "spa": "sauz",
    "rarNo": "rotosi",
    "spaNo": "sauz",
    "tags": [
      "plantas"
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
    "rar": "táa nira",
    "spa": "se encoge",
    "rarNo": "taa nira",
    "spaNo": "se encoge",
    "tags": []
  },
  {
    "rar": "banachí ca'móchari",
    "spa": "se le hinchó la mejilla",
    "rarNo": "banachi ca'mochari",
    "spaNo": "se le hincho la mejilla",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "nírasi",
    "spa": "sean",
    "rarNo": "nirasi",
    "spaNo": "sean",
    "tags": []
  },
  {
    "rar": "huaqué",
    "spa": "secar",
    "rarNo": "huaque",
    "spaNo": "secar",
    "tags": [
      "verbos"
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
      "adjetivos"
    ]
  },
  {
    "rar": "najata",
    "spa": "seguir",
    "rarNo": "najata",
    "spaNo": "seguir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nocuisa",
    "spa": "seguir haciendo",
    "rarNo": "nocuisa",
    "spaNo": "seguir haciendo",
    "tags": []
  },
  {
    "rar": "osá",
    "spa": "segundo",
    "rarNo": "osa",
    "spaNo": "segundo",
    "tags": []
  },
  {
    "rar": "usáni",
    "spa": "seis",
    "rarNo": "usani",
    "spaNo": "seis",
    "tags": [
      "números"
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
    "rar": "norírahuachi",
    "spa": "semana santa",
    "rarNo": "norirahuachi",
    "spaNo": "semana santa",
    "tags": []
  },
  {
    "rar": "icháami",
    "spa": "sembrador",
    "rarNo": "ichaami",
    "spaNo": "sembrador",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ichá",
    "spa": "sembrar",
    "rarNo": "icha",
    "spaNo": "sembrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "muné ",
    "spa": "sembrar frijol",
    "rarNo": "mune ",
    "spaNo": "sembrar frijol",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "mapuyiri",
    "spa": "semejante",
    "rarNo": "mapuyiri",
    "spaNo": "semejante",
    "tags": []
  },
  {
    "rar": "yiri",
    "spa": "semejanza",
    "rarNo": "yiri",
    "spaNo": "semejanza",
    "tags": []
  },
  {
    "rar": "racá",
    "spa": "semilla",
    "rarNo": "raca",
    "spaNo": "semilla",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "tarí",
    "spa": "semilla",
    "rarNo": "tari",
    "spaNo": "semilla",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "chi'mura",
    "spa": "seno",
    "rarNo": "chi'mura",
    "spaNo": "seno",
    "tags": [
      "partes del cuerpo"
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
    "rar": "asiba",
    "spa": "sentarse",
    "rarNo": "asiba",
    "spaNo": "sentarse",
    "tags": []
  },
  {
    "rar": "rojoná",
    "spa": "separar",
    "rarNo": "rojona",
    "spaNo": "separar",
    "tags": [
      "verbos"
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
    "rar": "chu' huiró",
    "spa": "sepultar - enterrar",
    "rarNo": "chu' huiro",
    "spaNo": "sepultar - enterrar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ko",
    "spa": "ser",
    "rarNo": "ko",
    "spaNo": "ser",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "níraga",
    "spa": "ser",
    "rarNo": "niraga",
    "spaNo": "ser",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ju - juco - jupá",
    "spa": "ser - estar",
    "rarNo": "ju - juco - jupa",
    "spaNo": "ser - estar",
    "tags": [
      "verbos"
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
    "rar": "sinowí",
    "spa": "serpiente",
    "rarNo": "sinowi",
    "spaNo": "serpiente",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "usansa macoy",
    "spa": "sesenta",
    "rarNo": "usansa macoy",
    "spaNo": "sesenta",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "quicháosa macoy",
    "spa": "setenta",
    "rarNo": "quichaosa macoy",
    "spaNo": "setenta",
    "tags": [
      "números"
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
    "rar": "ayena",
    "spa": "sí",
    "rarNo": "ayena",
    "spaNo": "si",
    "tags": []
  },
  {
    "rar": "ásaga",
    "spa": "si lo busca",
    "rarNo": "asaga",
    "spaNo": "si lo busca",
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
    "rar": "juri",
    "spa": "\"si",
    "rarNo": "juri",
    "spaNo": "\"si",
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
    "rar": "asibá",
    "spa": "siéntate",
    "rarNo": "asiba",
    "spaNo": "sientate",
    "tags": []
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
    "rar": "kitsáo",
    "spa": "siete",
    "rarNo": "kitsao",
    "spaNo": "siete",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "marachi",
    "spa": "sobaco",
    "rarNo": "marachi",
    "spaNo": "sobaco",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "sumá",
    "spa": "sobar",
    "rarNo": "suma",
    "spaNo": "sobar",
    "tags": [
      "verbos"
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
    "rar": "moba",
    "spa": "sobre - encima",
    "rarNo": "moba",
    "spaNo": "sobre - encima",
    "tags": []
  },
  {
    "rar": "ripá moba",
    "spa": "sobre - encima",
    "rarNo": "ripa moba",
    "spaNo": "sobre - encima",
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
    "rar": "chopi",
    "spa": "solamente - pero - sino",
    "rarNo": "chopi",
    "spaNo": "solamente - pero - sino",
    "tags": []
  },
  {
    "rar": "sontarsi",
    "spa": "soldado",
    "rarNo": "sontarsi",
    "spaNo": "soldado",
    "tags": []
  },
  {
    "rar": "ahuínari",
    "spa": "solos",
    "rarNo": "ahuinari",
    "spaNo": "solos",
    "tags": []
  },
  {
    "rar": "ni'yúbana",
    "spa": "soltar",
    "rarNo": "ni'yubana",
    "spaNo": "soltar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "su'rina",
    "spa": "soltar",
    "rarNo": "su'rina",
    "spaNo": "soltar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bot'a",
    "spa": "soltarse - desatarse",
    "rarNo": "bot'a",
    "spaNo": "soltarse - desatarse",
    "tags": [
      "verbos"
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
    "rar": "co'yacha",
    "spa": "sombrero",
    "rarNo": "co'yacha",
    "spaNo": "sombrero",
    "tags": [
      "vestimenta"
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
    "rar": "sáhuara",
    "spa": "sonaja",
    "rarNo": "sahuara",
    "spaNo": "sonaja",
    "tags": []
  },
  {
    "rar": "ra'náchani",
    "spa": "sonar",
    "rarNo": "ra'nachani",
    "spaNo": "sonar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chané",
    "spa": "sonar mal",
    "rarNo": "chane",
    "spaNo": "sonar mal",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rimú",
    "spa": "soñar",
    "rarNo": "rimu",
    "spaNo": "sonar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pucha",
    "spa": "soplar",
    "rarNo": "pucha",
    "spaNo": "soplar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "naquétari",
    "spa": "sordo",
    "rarNo": "naquetari",
    "spaNo": "sordo",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "quepu",
    "spa": "su - sus",
    "rarNo": "quepu",
    "spaNo": "su - sus",
    "tags": [
      "pronombres posesivos"
    ]
  },
  {
    "rar": "quétamo",
    "spa": "su - sus",
    "rarNo": "quetamo",
    "spaNo": "su - sus",
    "tags": [
      "pronombres posesivos"
    ]
  },
  {
    "rar": "binoy acara",
    "spa": "su cara",
    "rarNo": "binoy acara",
    "spaNo": "su cara",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "mo",
    "spa": "subir",
    "rarNo": "mo",
    "spaNo": "subir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chónami",
    "spa": "sucio",
    "rarNo": "chonami",
    "spaNo": "sucio",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "sugúrami",
    "spa": "sucio ",
    "rarNo": "sugurami",
    "spaNo": "sucio ",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "chirena",
    "spa": "sudar",
    "rarNo": "chirena",
    "spaNo": "sudar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "huasí",
    "spa": "suegra",
    "rarNo": "huasi",
    "spaNo": "suegra",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "si'yá",
    "spa": "suegro",
    "rarNo": "si'ya",
    "spaNo": "suegro",
    "tags": [
      "parentescos"
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
    "rar": "risúu",
    "spa": "sufrir",
    "rarNo": "risuu",
    "spaNo": "sufrir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ri'reque",
    "spa": "sur",
    "rarNo": "ri'reque",
    "spaNo": "sur",
    "tags": [
      "indicaciones"
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
    "rar": "ranícuri",
    "spa": "talón",
    "rarNo": "ranicuri",
    "spaNo": "talon",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "o'rí",
    "spa": "tambalearse",
    "rarNo": "o'ri",
    "spaNo": "tambalearse",
    "tags": []
  },
  {
    "rar": "así",
    "spa": "también",
    "rarNo": "asi",
    "spaNo": "tambien",
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
    "rar": "napéa",
    "spa": "también - con - juntos",
    "rarNo": "napea",
    "spaNo": "tambien - con - juntos",
    "tags": []
  },
  {
    "rar": "omá",
    "spa": "también - con - juntos",
    "rarNo": "oma",
    "spaNo": "tambien - con - juntos",
    "tags": []
  },
  {
    "rar": "campori",
    "spa": "tambor",
    "rarNo": "campori",
    "spaNo": "tambor",
    "tags": []
  },
  {
    "rar": "me ",
    "spa": "tanto - mucho",
    "rarNo": "me ",
    "spaNo": "tanto - mucho",
    "tags": []
  },
  {
    "rar": "na'oma",
    "spa": "tapar",
    "rarNo": "na'oma",
    "spaNo": "tapar",
    "tags": [
      "verbos"
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
    "rar": "rarámuri",
    "spa": "tarahumara - gente",
    "rarNo": "raramuri",
    "spaNo": "tarahumara - gente",
    "tags": []
  },
  {
    "rar": "sipurí",
    "spa": "tárantula",
    "rarNo": "sipuri",
    "spaNo": "tarantula",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "ariché",
    "spa": "tardar - dilatar",
    "rarNo": "ariche",
    "spaNo": "tardar - dilatar",
    "tags": [
      "verbos"
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
    "rar": "aorí",
    "spa": "táscate",
    "rarNo": "aori",
    "spaNo": "tascate",
    "tags": [
      "plantas"
    ]
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
    "rar": "sayiruma",
    "spa": "teblarse",
    "rarNo": "sayiruma",
    "spaNo": "teblarse",
    "tags": []
  },
  {
    "rar": "te",
    "spa": "tejer",
    "rarNo": "te",
    "spaNo": "tejer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "tera",
    "spa": "telar",
    "rarNo": "tera",
    "spaNo": "telar",
    "tags": []
  },
  {
    "rar": "chabo",
    "spa": "telaraña",
    "rarNo": "chabo",
    "spaNo": "telarana",
    "tags": []
  },
  {
    "rar": "sahuiruma",
    "spa": "temblar",
    "rarNo": "sahuiruma",
    "spaNo": "temblar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "majáwiwa",
    "spa": "temer",
    "rarNo": "majawiwa",
    "spaNo": "temer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "majaga",
    "spa": "temer - tener miedo",
    "rarNo": "majaga",
    "spaNo": "temer - tener miedo",
    "tags": [
      "verbos"
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
    "rar": "nihua",
    "spa": "tener - poseer ",
    "rarNo": "nihua",
    "spaNo": "tener - poseer ",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "buqúé",
    "spa": "tener - poseer (animal)",
    "rarNo": "buque",
    "spaNo": "tener - poseer (animal)",
    "tags": [
      "verbos"
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
    "rar": "rabota",
    "spa": "tener calambre",
    "rarNo": "rabota",
    "spaNo": "tener calambre",
    "tags": [
      "medicina"
    ]
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
    "rar": "matosé",
    "spa": "tener canas",
    "rarNo": "matose",
    "spaNo": "tener canas",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "mayé",
    "spa": "tener celos",
    "rarNo": "maye",
    "spaNo": "tener celos",
    "tags": []
  },
  {
    "rar": "ni'mayé",
    "spa": "tener celos",
    "rarNo": "ni'maye",
    "spaNo": "tener celos",
    "tags": []
  },
  {
    "rar": "mochogohua",
    "spa": "tener cerebro",
    "rarNo": "mochogohua",
    "spaNo": "tener cerebro",
    "tags": []
  },
  {
    "rar": "quimé",
    "spa": "tener cobija",
    "rarNo": "quime",
    "spaNo": "tener cobija",
    "tags": []
  },
  {
    "rar": "suré",
    "spa": "tener corazón",
    "rarNo": "sure",
    "spaNo": "tener corazon",
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
    "rar": "bacarí",
    "spa": "tener enfermedad venérea",
    "rarNo": "bacari",
    "spaNo": "tener enfermedad venerea",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "upé",
    "spa": "tener esposa",
    "rarNo": "upe",
    "spaNo": "tener esposa",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "orá",
    "spa": "tener filo",
    "rarNo": "ora",
    "spaNo": "tener filo",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nasinácuri",
    "spa": "tener flojera",
    "rarNo": "nasinacuri",
    "spaNo": "tener flojera",
    "tags": []
  },
  {
    "rar": "o'yona",
    "spa": "tener ganas de vomitar",
    "rarNo": "o'yona",
    "spaNo": "tener ganas de vomitar",
    "tags": []
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
    "rar": "co'nari",
    "spa": "tener hambre",
    "rarNo": "co'nari",
    "spaNo": "tener hambre",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "lohua - 'loché",
    "spa": "tener hambre",
    "rarNo": "lohua - 'loche",
    "spaNo": "tener hambre",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "bachéi",
    "spa": "tener hermano mayor",
    "rarNo": "bachei",
    "spaNo": "tener hermano mayor",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "ranné",
    "spa": "tener hijo",
    "rarNo": "ranne",
    "spaNo": "tener hijo",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "cúchuhua",
    "spa": "tener hijos",
    "rarNo": "cuchuhua",
    "spaNo": "tener hijos",
    "tags": []
  },
  {
    "rar": "jínohua",
    "spa": "tener hijos",
    "rarNo": "jinohua",
    "spaNo": "tener hijos",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "ochéi",
    "spa": "tener huesos",
    "rarNo": "ochei",
    "spaNo": "tener huesos",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "cha jubá",
    "spa": "tener mal olor",
    "rarNo": "cha juba",
    "spaNo": "tener mal olor",
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
    "rar": "oné",
    "spa": "tener padre",
    "rarNo": "one",
    "spaNo": "tener padre",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "roné",
    "spa": "tener pies",
    "rarNo": "rone",
    "spaNo": "tener pies",
    "tags": []
  },
  {
    "rar": "acá vi",
    "spa": "tener sal - está dulce o sabroso",
    "rarNo": "aca vi",
    "spaNo": "tener sal - esta dulce o sabroso",
    "tags": [
      "sabores"
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
    "rar": "cochinari",
    "spa": "tener sueño",
    "rarNo": "cochinari",
    "spaNo": "tener sueno",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cho'maná",
    "spa": "tener tos - catarro",
    "rarNo": "cho'mana",
    "spaNo": "tener tos - catarro",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "nohua",
    "spa": "tener un hijo",
    "rarNo": "nohua",
    "spaNo": "tener un hijo",
    "tags": []
  },
  {
    "rar": "rihuera",
    "spa": "tener vergüenza",
    "rarNo": "rihuera",
    "spaNo": "tener verguenza",
    "tags": []
  },
  {
    "rar": "nochá",
    "spa": "tentar - tocar",
    "rarNo": "nocha",
    "spaNo": "tentar - tocar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "yoca",
    "spa": "teñir",
    "rarNo": "yoca",
    "spaNo": "tenir",
    "tags": [
      "verbos"
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
    "rar": "suní",
    "spa": "terminar - acabar - cumplir",
    "rarNo": "suni",
    "spaNo": "terminar - acabar - cumplir",
    "tags": []
  },
  {
    "rar": "cayena",
    "spa": "terminar - levantar",
    "rarNo": "cayena",
    "spaNo": "terminar - levantar",
    "tags": [
      "verbos"
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
    "rar": "suguí",
    "spa": "tesgüino",
    "rarNo": "sugui",
    "spaNo": "tesguino",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "ru",
    "spa": "testificar ",
    "rarNo": "ru",
    "spaNo": "testificar ",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "opochi",
    "spa": "tía",
    "rarNo": "opochi",
    "spaNo": "tia",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "péebi ratáami ",
    "spa": "tibio",
    "rarNo": "peebi rataami ",
    "spaNo": "tibio",
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
    "rar": "bará",
    "spa": "tiempo de lluvia",
    "rarNo": "bara",
    "spaNo": "tiempo de lluvia",
    "tags": [
      "naturaleza"
    ]
  },
  {
    "rar": "su'hueti juca",
    "spa": "tiene buen olor",
    "rarNo": "su'hueti juca",
    "spaNo": "tiene buen olor",
    "tags": []
  },
  {
    "rar": "ocorá",
    "spa": "tiene dolor",
    "rarNo": "ocora",
    "spaNo": "tiene dolor",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "ochera aní",
    "spa": "tiene hipo",
    "rarNo": "ochera ani",
    "spaNo": "tiene hipo",
    "tags": [
      "medicina"
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
    "rar": "hui'ye",
    "spa": "tierra - barro",
    "rarNo": "hui'ye",
    "spaNo": "tierra - barro",
    "tags": [
      "naturaleza"
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
    "rar": "sitá",
    "spa": "tinta",
    "rarNo": "sita",
    "spaNo": "tinta",
    "tags": []
  },
  {
    "rar": "raté",
    "spa": "tío - tía - primo - prima",
    "rarNo": "rate",
    "spaNo": "tio - tia - primo - prima",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "curichi",
    "spa": "tío (hermano mayor de la madre)",
    "rarNo": "curichi",
    "spaNo": "tio (hermano mayor de la madre)",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "cumúchari",
    "spa": "tío (hermano mayor del padre)",
    "rarNo": "cumuchari",
    "spaNo": "tio (hermano mayor del padre)",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "pa",
    "spa": "tirar - echar",
    "rarNo": "pa",
    "spaNo": "tirar - echar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "ihuepa",
    "spa": "tirar (al suelo)",
    "rarNo": "ihuepa",
    "spaNo": "tirar (al suelo)",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "romírachi",
    "spa": "tobillo",
    "rarNo": "romirachi",
    "spaNo": "tobillo",
    "tags": [
      "partes del cuerpo"
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
    "rar": "miteba",
    "spa": "torcerse (tobillo)",
    "rarNo": "miteba",
    "spaNo": "torcerse (tobillo)",
    "tags": [
      "medicina"
    ]
  },
  {
    "rar": "abijí",
    "spa": "todavía - aún",
    "rarNo": "abiji",
    "spaNo": "todavia - aun",
    "tags": []
  },
  {
    "rar": "suhuaba",
    "spa": "todo",
    "rarNo": "suhuaba",
    "spaNo": "todo",
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
    "rar": "ichuromí",
    "spa": "todo el cuerpo",
    "rarNo": "ichuromi",
    "spaNo": "todo el cuerpo",
    "tags": [
      "partes del cuerpo"
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
    "rar": "sinibí rahué",
    "spa": "todos los días",
    "rarNo": "sinibi rahue",
    "spaNo": "todos los dias",
    "tags": []
  },
  {
    "rar": "ba'huí bají",
    "spa": "toma agua",
    "rarNo": "ba'hui baji",
    "spaNo": "toma agua",
    "tags": []
  },
  {
    "rar": "baji",
    "spa": "tomar - beber",
    "rarNo": "baji",
    "spaNo": "tomar - beber",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "chi'í",
    "spa": "tomar pecho",
    "rarNo": "chi'i",
    "spaNo": "tomar pecho",
    "tags": [
      "verbos"
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
    "rar": "rurusí",
    "spa": "tomatillo",
    "rarNo": "rurusi",
    "spaNo": "tomatillo",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "nataguésuri",
    "spa": "tonto",
    "rarNo": "nataguesuri",
    "spaNo": "tonto",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "kenátame",
    "spa": "tonto - tonta",
    "rarNo": "kenatame",
    "spaNo": "tonto - tonta",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "bi'rina",
    "spa": "torcer - exprimir",
    "rarNo": "bi'rina",
    "spaNo": "torcer - exprimir",
    "tags": [
      "verbos"
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
    "rar": "rimé",
    "spa": "tortilla",
    "rarNo": "rime",
    "spaNo": "tortilla",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "rosohua",
    "spa": "toser",
    "rarNo": "rosohua",
    "spaNo": "toser",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "cohuana",
    "spa": "tostar",
    "rarNo": "cohuana",
    "spaNo": "tostar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "coná",
    "spa": "tostar",
    "rarNo": "cona",
    "spaNo": "tostar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nótzame",
    "spa": "trabajador",
    "rarNo": "notzame",
    "spaNo": "trabajador",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "nocha",
    "spa": "trabajar",
    "rarNo": "nocha",
    "spaNo": "trabajar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nótsa",
    "spa": "trabajar",
    "rarNo": "notsa",
    "spaNo": "trabajar",
    "tags": [
      "verbos"
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
    "rar": "uchucha",
    "spa": "traducir del tarahumara a español",
    "rarNo": "uchucha",
    "spaNo": "traducir del tarahumara a espanol",
    "tags": []
  },
  {
    "rar": "me ",
    "spa": "traer",
    "rarNo": "me ",
    "spaNo": "traer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "pa",
    "spa": "traer",
    "rarNo": "pa",
    "spaNo": "traer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "yeba",
    "spa": "traer",
    "rarNo": "yeba",
    "spaNo": "traer",
    "tags": [
      "verbos"
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
    "rar": "qui'huí",
    "spa": "traer leña",
    "rarNo": "qui'hui",
    "spaNo": "traer lena",
    "tags": []
  },
  {
    "rar": "a'huá",
    "spa": "tragar",
    "rarNo": "a'hua",
    "spaNo": "tragar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "nacuríhua",
    "spa": "transformar",
    "rarNo": "nacurihua",
    "spaNo": "transformar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "roroca",
    "spa": "tráquea",
    "rarNo": "roroca",
    "spaNo": "traquea",
    "tags": [
      "partes del cuerpo"
    ]
  },
  {
    "rar": "sicá",
    "spa": "trasquilar",
    "rarNo": "sica",
    "spaNo": "trasquilar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "macoy miná biquiyá",
    "spa": "trece",
    "rarNo": "macoy mina biquiya",
    "spaNo": "trece",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "baisá macoy",
    "spa": "treinta",
    "rarNo": "baisa macoy",
    "spaNo": "treinta",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "beikiá",
    "spa": "tres",
    "rarNo": "beikia",
    "spaNo": "tres",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "biquiyá",
    "spa": "tres",
    "rarNo": "biquiya",
    "spaNo": "tres",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "turio",
    "spa": "trigo",
    "rarNo": "turio",
    "spaNo": "trigo",
    "tags": [
      "plantas",
      "alimento"
    ]
  },
  {
    "rar": "o0mónami ",
    "spa": "triste",
    "rarNo": "o0monami ",
    "spaNo": "triste",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ri'yónachi",
    "spa": "tronar",
    "rarNo": "ri'yonachi",
    "spaNo": "tronar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "turupa",
    "spa": "tropezar",
    "rarNo": "turupa",
    "spaNo": "tropezar",
    "tags": [
      "verbos"
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
    "rar": "mu",
    "spa": "tú",
    "rarNo": "mu",
    "spaNo": "tu",
    "tags": [
      "pronombres"
    ]
  },
  {
    "rar": "kemu",
    "spa": "tú - tuyo",
    "rarNo": "kemu",
    "spaNo": "tu - tuyo",
    "tags": [
      "pronombres posesivos"
    ]
  },
  {
    "rar": "mujé",
    "spa": "tu - usted",
    "rarNo": "muje",
    "spaNo": "tu - usted",
    "tags": [
      "pronombres"
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
    "rar": "napó",
    "spa": "tuna",
    "rarNo": "napo",
    "spaNo": "tuna",
    "tags": [
      "alimento"
    ]
  },
  {
    "rar": "quemi",
    "spa": "tuyo",
    "rarNo": "quemi",
    "spaNo": "tuyo",
    "tags": [
      "pronombres posesivos"
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
    "rar": "sinepi",
    "spa": "una vez",
    "rarNo": "sinepi",
    "spaNo": "una vez",
    "tags": []
  },
  {
    "rar": "bi'néripi",
    "spa": "único",
    "rarNo": "bi'neripi",
    "spaNo": "unico",
    "tags": []
  },
  {
    "rar": "biré",
    "spa": "uno",
    "rarNo": "bire",
    "spaNo": "uno",
    "tags": [
      "números"
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
    "rar": "a' yapi",
    "spa": "uno tras otro",
    "rarNo": "a' yapi",
    "spaNo": "uno tras otro",
    "tags": []
  },
  {
    "rar": "uché",
    "spa": "untar - frotar",
    "rarNo": "uche",
    "spaNo": "untar - frotar",
    "tags": [
      "verbos",
      "medicina"
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
    "rar": "luhuíami",
    "spa": "usado - gastado",
    "rarNo": "luhuiami",
    "spaNo": "usado - gastado",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "née",
    "spa": "usar",
    "rarNo": "nee",
    "spaNo": "usar",
    "tags": []
  },
  {
    "rar": "tisó",
    "spa": "usar bastón",
    "rarNo": "tiso",
    "spaNo": "usar baston",
    "tags": []
  },
  {
    "rar": "yemi",
    "spa": "ustedes",
    "rarNo": "yemi",
    "spaNo": "ustedes",
    "tags": [
      "pronombres"
    ]
  },
  {
    "rar": "wási",
    "spa": "vaca",
    "rarNo": "wasi",
    "spaNo": "vaca",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "huacasí",
    "spa": "vaca - res",
    "rarNo": "huacasi",
    "spaNo": "vaca - res",
    "tags": [
      "animales"
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
    "rar": "aparúame",
    "spa": "valiente",
    "rarNo": "aparuame",
    "spaNo": "valiente",
    "tags": [
      "adjetivos"
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
    "rar": "simabo",
    "spa": "vamos a pie",
    "rarNo": "simabo",
    "spaNo": "vamos a pie",
    "tags": [
      "indicaciones"
    ]
  },
  {
    "rar": "níriami",
    "spa": "vanidoso ",
    "rarNo": "niriami",
    "spaNo": "vanidoso ",
    "tags": [
      "adjetivos"
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
    "rar": "murubpe bitéami",
    "spa": "vecino",
    "rarNo": "murubpe biteami",
    "spaNo": "vecino",
    "tags": []
  },
  {
    "rar": "osá macói",
    "spa": "veinte",
    "rarNo": "osa macoi",
    "spaNo": "veinte",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "osá macoí biré",
    "spa": "veintiuno",
    "rarNo": "osa macoi bire",
    "spaNo": "veintiuno",
    "tags": [
      "números"
    ]
  },
  {
    "rar": "sijarí",
    "spa": "vejiga",
    "rarNo": "sijari",
    "spaNo": "vejiga",
    "tags": [
      "partes del cuerpo"
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
    "rar": "huarina",
    "spa": "veloz",
    "rarNo": "huarina",
    "spaNo": "veloz",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "chomari",
    "spa": "venado",
    "rarNo": "chomari",
    "spaNo": "venado",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "lábara",
    "spa": "venado",
    "rarNo": "labara",
    "spaNo": "venado",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "omeba",
    "spa": "vencer",
    "rarNo": "omeba",
    "spaNo": "vencer",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rarinéa",
    "spa": "vender",
    "rarNo": "rarinea",
    "spaNo": "vender",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "iqué",
    "spa": "ventilar",
    "rarNo": "ique",
    "spaNo": "ventilar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "né",
    "spa": "ver",
    "rarNo": "ne",
    "spaNo": "ver",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "niná",
    "spa": "ver",
    "rarNo": "nina",
    "spaNo": "ver",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rihuá",
    "spa": "ver - hallar",
    "rarNo": "rihua",
    "spaNo": "ver - hallar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "machíi",
    "spa": "ver bien",
    "rarNo": "machii",
    "spaNo": "ver bien",
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
    "rar": "siyónami",
    "spa": "verde - azul",
    "rarNo": "siyonami",
    "spaNo": "verde - azul",
    "tags": [
      "colores"
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
    "rar": "siné",
    "spa": "vez",
    "rarNo": "sine",
    "spaNo": "vez",
    "tags": []
  },
  {
    "rar": "sayahui",
    "spa": "víbora de cascabel",
    "rarNo": "sayahui",
    "spaNo": "vibora de cascabel",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "huiráami",
    "spa": "vieja - anciana",
    "rarNo": "huiraami",
    "spaNo": "vieja - anciana",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "chérami",
    "spa": "vieja (cosa)",
    "rarNo": "cherami",
    "spaNo": "vieja (cosa)",
    "tags": [
      "adjetivos"
    ]
  },
  {
    "rar": "ochérami",
    "spa": "viejo - anciano",
    "rarNo": "ocherami",
    "spaNo": "viejo - anciano",
    "tags": [
      "adjetivo"
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
    "rar": "nigá",
    "spa": "viéndolo - mirandolo",
    "rarNo": "niga",
    "spaNo": "viendolo - mirandolo",
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
    "rar": "viernesico",
    "spa": "viernes",
    "rarNo": "viernesico",
    "spaNo": "viernes",
    "tags": [
      "días de la semana"
    ]
  },
  {
    "rar": "cunámami",
    "spa": "viuda",
    "rarNo": "cunamami",
    "spaNo": "viuda",
    "tags": []
  },
  {
    "rar": "upímami",
    "spa": "viudo",
    "rarNo": "upimami",
    "spaNo": "viudo",
    "tags": []
  },
  {
    "rar": "piré",
    "spa": "vivir - habitar",
    "rarNo": "pire",
    "spaNo": "vivir - habitar",
    "tags": [
      "verbos"
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
    "rar": "rijóara",
    "spa": "vivir allí",
    "rarNo": "rijoara",
    "spaNo": "vivir alli",
    "tags": []
  },
  {
    "rar": "jácami",
    "spa": "vivo",
    "rarNo": "jacami",
    "spaNo": "vivo",
    "tags": []
  },
  {
    "rar": "i'ní",
    "spa": "volar",
    "rarNo": "i'ni",
    "spaNo": "volar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rahué",
    "spa": "volver",
    "rarNo": "rahue",
    "spaNo": "volver",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "norina",
    "spa": "volver - venir",
    "rarNo": "norina",
    "spaNo": "volver - venir",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "opesi",
    "spa": "vomitar",
    "rarNo": "opesi",
    "spaNo": "vomitar",
    "tags": [
      "verbos",
      "medicina"
    ]
  },
  {
    "rar": "o'yó",
    "spa": "vomitar ",
    "rarNo": "o'yo",
    "spaNo": "vomitar ",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "imúami",
    "spa": "voraz - tragón",
    "rarNo": "imuami",
    "spaNo": "voraz - tragon",
    "tags": [
      "adjetivos"
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
    "rar": "mani suniri nóchia",
    "spa": "ya terminé de trabajar",
    "rarNo": "mani suniri nochia",
    "spaNo": "ya termine de trabajar",
    "tags": []
  },
  {
    "rar": "mo'né",
    "spa": "yerno",
    "rarNo": "mo'ne",
    "spaNo": "yerno",
    "tags": [
      "parentescos"
    ]
  },
  {
    "rar": "ne",
    "spa": "yo",
    "rarNo": "ne",
    "spaNo": "yo",
    "tags": [
      "pronombres"
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
    "rar": "sacará",
    "spa": "zacate",
    "rarNo": "sacara",
    "spaNo": "zacate",
    "tags": [
      "plantas"
    ]
  },
  {
    "rar": "pibá",
    "spa": "zambullirse",
    "rarNo": "piba",
    "spaNo": "zambullirse",
    "tags": []
  },
  {
    "rar": "huajó",
    "spa": "zancudo",
    "rarNo": "huajo",
    "spaNo": "zancudo",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "payéhuachi",
    "spa": "zanja",
    "rarNo": "payehuachi",
    "spaNo": "zanja",
    "tags": []
  },
  {
    "rar": "misucúa",
    "spa": "zarzamora",
    "rarNo": "misucua",
    "spaNo": "zarzamora",
    "tags": [
      "alimento",
      "plantas"
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
    "rar": "kiyóchí",
    "spa": "zorro",
    "rarNo": "kiyochi",
    "spaNo": "zorro",
    "tags": [
      "animales"
    ]
  },
  {
    "rar": "rorónaché",
    "spa": "zumbar",
    "rarNo": "roronache",
    "spaNo": "zumbar",
    "tags": [
      "verbos"
    ]
  },
  {
    "rar": "rirú",
    "spa": "zumbar de un motor",
    "rarNo": "riru",
    "spaNo": "zumbar de un motor",
    "tags": [
      "verbos"
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
    "rar": "usuta",
    "spa": "zurdo",
    "rarNo": "usuta",
    "spaNo": "zurdo",
    "tags": []
  },
  {
    "rar": "pachá bachara ",
    "spa": "encarcelar",
    "rarNo": "pacha bachara ",
    "spaNo": "encarcelar",
    "tags": [
      "verbos"
    ]
  }
]
