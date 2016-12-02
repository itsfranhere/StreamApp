function makeListItemHTML (data, index) 
{
  /*
    This function creates some nice HTML around data for the #home section

    Return something like this:

    <li>
        <img src="https://ma.tteo.me/assets/surprise.png">
        <h2>Matteo</h2>
    </li>
  */ 

  // li = List Item
  var li  = '<li id="' + index + '">'
  + '<img style="min-width:100%" src="' + data.filmImage + '">' 
  + '<div class="filmdata-container">'
  + '<h2>' + data.filmName + '</h2>' 
  + '<br>'
  + '<h2 class="show-more">' + "See more" + '</h2>'
  + '</div>'
  + '</li>'

  return li;       
}

function makeDetailsHTML (data) 
{
  /*
    This function creates some nice HTML around data for the #details section

    Return something like this:

    <h2>Matteo</h2>
    <img src="https://ma.tteo.me/assets/surprise.png">
    <p>I teach people aged 6 to 60+ how to be creative with code.
    </p>
    <a class="contact button">Contact Matteo</a>
  */


  var html = '<div class="film-image"><img style="width:100%;" src="' + data.filmImage + '"></div>' 
  + '<div>'
  + '<h2 class="film-title">' + data.filmName + '</h2>' 
  + '<h2 class="trailer-warning">TRAILER</h2>' 
  + '</div>'
  + '<p class="film-rating">' + data.filmRating + '</p>'
  + '<p class="film-duration">' + data.filmDuration + '</p>'
  + '<p class="separator">|</p>' 
  + '<p class="film-year">' + data.filmYear + '</p>'
  + '<p>' + data.filmDescription + '</p>'
  + '<p class="subtitles">Subtitles: ' + data.filmSubtitles + '</p>'
  + '<p class="separator">|</p>' 
  + '<p class="audio">Audio: ' + data.filmAudio + '</p>'
  + '<div class="main-buttons">'
  + '<a class="play-trailer" data-toggle="modal" data-target="#myModal">Play</a>'
  + '<a class="buy-tickets" data-toggle="modal" data-target="#myModal2">Buy tickets</a>'
  + '<a class="get-social">Create list</a>'
  + '</div>'
  
  
  // Modal 
    
  var modal = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
    + '<h4 class="modal-title">' + data.filmName + '</h4></div>'
    + '<div class="modal-body">'
    + '<code>' + data.filmTrailer +'</code>'
    + '</div></div></div></div>'
  html += modal

    var modal2 = '<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
    + '<h4 class="modal-title">' + data.filmName + '</h4></div>'
    + '<div class="modal-body">'
    + '<div class="selectpicker select-icon-select"><select id="your-cinema" data-size="10" name ="siteId"><option value="0">Select a cinema</option><option value="181">Andover</option><option value="61">Aylesbury</option><option value="62">Ayr</option><option value="63">Banbury</option><option value="149">Basingstoke</option><option value="65">Bath</option><option value="66">Beckenham</option><option value="170">Belfast</option><option value="211">BFI IMAX</option><option value="212">Birmingham Broadway Plaza</option><option value="67">Birmingham New Street</option><option value="68">Blackpool</option><option value="58">Bournemouth (ABC)</option><option value="69">Bournemouth (ODEON)</option><option value="2">Bracknell</option><option value="154">Braehead</option><option value="70">Bridgend</option><option value="71">Brighton</option><option value="72">Bristol</option><option value="73">Bromborough</option><option value="75">Camden</option><option value="76">Canterbury</option><option value="3">Cardiff</option><option value="151">Chatham</option><option value="77">Chelmsford</option><option value="80">Colchester</option><option value="82">Coventry</option><option value="182">Crewe</option><option value="83">Darlington</option><option value="32">Derby</option><option value="214">Dorchester</option><option value="37">Dudley (Merry Hill)</option><option value="85">Dumfries</option><option value="86">Dundee</option><option value="87">Dunfermline</option><option value="33">East Kilbride</option><option value="219">Edinburgh Fort Kinnaird</option><option value="108">Edinburgh Lothian Road</option><option value="140">Edinburgh Wester Hailes</option><option value="88">Epsom</option><option value="90">Exeter</option><option value="120">Glasgow Quay</option><option value="6">Greenwich</option><option value="92">Guildford</option><option value="93">Harrogate</option><option value="94">Hastings</option><option value="7">Hatfield</option><option value="217">Hereford</option><option value="97">Holloway</option><option value="8">Huddersfield</option><option value="98">Hull</option><option value="100">Kettering</option><option value="101">Kilmarnock</option><option value="102">Kingston</option><option value="9">Lee Valley</option><option value="103">Leeds-Bradford</option><option value="104">Leicester</option><option value="106">Lincoln</option><option value="171">Liverpool ONE</option><option value="133">Liverpool Switch Island</option><option value="213">Llanelli</option><option value="81">London Covent Garden</option><option value="105">London Leicester Square</option><option value="111">London Marble Arch - Now closed</option><option value="117">London Panton Street</option><option value="135">London Tottenham Court Road</option><option value="183">Loughborough</option><option value="10">Maidenhead</option><option value="109">Maidstone</option><option value="11">Manchester Printworks</option><option value="20">Manchester Trafford Centre</option><option value="110">Mansfield</option><option value="174">Metrocentre</option><option value="218">Milton Keynes Stadium</option><option value="184">Newark</option><option value="223">Northwich Barons Quay</option><option value="13">Norwich</option><option value="114">Nuneaton</option><option value="222">Oldham</option><option value="221">Orpington</option><option value="115">Oxford George St</option><option value="116">Oxford Magdalen St</option><option value="15">Port Solent</option><option value="28">Preston</option><option value="119">Putney</option><option value="121">Richmond</option><option value="123">Rochdale</option><option value="124">Salisbury</option><option value="125">Sheffield</option><option value="17">Silverlink</option><option value="126">South Woodford</option><option value="127">Southampton</option><option value="128">Southend</option><option value="129">Stoke</option><option value="130">Streatham</option><option value="18">Surrey Quays</option><option value="185">Swadlincote</option><option value="19">Swansea</option><option value="132">Swiss Cottage</option><option value="30">Tamworth</option><option value="134">Taunton</option><option value="27">Telford</option><option value="216">Trowbridge</option><option value="136">Tunbridge Wells</option><option value="137">Uxbridge</option><option value="29">Warrington</option><option value="215">West Bromwich</option><option value="141">Weston super Mare</option><option value="21">Whiteleys</option><option value="208">Whiteleys - The Lounge</option><option value="142">Wimbledon</option><option value="143">Worcester</option><option value="173">Wrexham Eagles Meadow</option></select></div>'
    + '</div></div></div></div>'
  html += modal2

    var modal3 = '<div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
    + '<h4 class="modal-title">' + data.filmName + '</h4></div>'
    + '<div class="modal-body">'
    + '<div>See what people are saying on social media..</div>'
    + '</div></div></div></div>'
  html += modal3

  return html;        
}


function showList (dataList, interfaceList) 
{
    // update the ul content with the result of makeListHTML(list)
    // .html() is a jQuery function
    interfaceList.html( makeListHTML(dataList) ); 
}

function showDetails (data, interfaceElement) 
{
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}

function makeListHTML (list) 
{
  var html = ''; // empty for now, we'll add HTML as we loop through the list 
  var total = list.length;

  // loop through list
  var counter = 0;
  while (counter < total) 
  {
    var data = list[counter];
    var li = makeListItemHTML(data, counter);
    
    // add the list item to the html
    html += li;
    
    // update the counter, to avoid infinite loops!
    counter = counter + 1;
  }
  return html;
}

// Convert number into stars

/*function changeNumber(data)
{
    var element = filmRating(data);
    var text = element.innerHTML; 
    var x = text.replace('1','*');
    element.innerHTML=x;
} */

// Convert numbers to stars
/*var jackreacher = firebase.database().ref("films/-KWtg6EtH2a5RRfwn8ky");

jackreacher.update({
   "filmRating": "****"
});

var limitless = firebase.database().ref("films/-KWtkQunZUMNsI5nMjYA");

limitless.update({
   "filmRating": "****"
});

var guvnors = firebase.database().ref("films/-KWtl3Sfg40QpbaDtmNu");

guvnors.update({
   "filmRating": "***"
});

var letsbecops = firebase.database().ref("films/-KWtw6P_HWUn9YEPW9OD");

letsbecops.update({
   "filmRating": "***"
});

var purge = firebase.database().ref("films/-KWtwZ6_l_aIW3-AKxBM");

purge.update({
   "filmRating": "****"
});

var hush = firebase.database().ref("films/-KWtxW9TPkR8-mOLd5Mc");

hush.update({
   "filmRating": "****"
});

var dracula = firebase.database().ref("films/-KWtyBAJmY1Qh055CgbW");

dracula.update({
   "filmRating": "*"
});

var wouldyourather = firebase.database().ref("films/-KWtzC6h6-_IWilz6Vhn");

wouldyourather.update({
   "filmRating": "***"
});

var grease = firebase.database().ref("films/-KWtzeFxClRTVCCgC6oQ");

grease.update({
   "filmRating": "****"
});

var pineappleexpress = firebase.database().ref("films/-KWu-BQb3xqcU9eqpevv");

pineappleexpress.update({
   "filmRating": "***"
});

var rounders = firebase.database().ref("films/-KWu4sjp7wkUWhMr_dfu");

rounders.update({
   "filmRating": "****"
});

var milliondollar = firebase.database().ref("films/-KXCc3qtEjU4Yh1DW2_3");

milliondollar.update({
   "filmRating": "****"
});

var rookie = firebase.database().ref("films/-KXCe92yHDQQYJwDZmrv");

rookie.update({
   "filmRating": "***"
});

var gladiator = firebase.database().ref("films/-KXCf2JtFA38yKpPbIlR");

gladiator.update({
   "filmRating": "***"
});

var creed = firebase.database().ref("films/-KXCgOCgkrz7jcUhQ3xQ");

creed.update({
   "filmRating": "****"
});

var dirtygrandpa = firebase.database().ref("films/-KXChYjFs58B5H6fNIcV");

dirtygrandpa.update({
   "filmRating": "****"
});

var caring = firebase.database().ref("films/-KXCj34nWAhLSzGvwRx1");

caring.update({
   "filmRating": "*****"
});

var whatsyournumber = firebase.database().ref("films/-KXMUC5Li5w-2fbLXbAK");

whatsyournumber.update({
   "filmRating": "****"
});

var blinddate = firebase.database().ref("films/-KXMl8PBkBMjwh7Z2n6t");

films.update({
   "filmRating": "****"
});

var thewayhelooks = firebase.database().ref("films/-KXMtUr1yFuMKRs9QJer");

thewayhelooks.update({
   "filmRating": "*****"
});*/
