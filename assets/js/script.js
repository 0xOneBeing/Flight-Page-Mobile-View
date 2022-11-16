                                // Custom JS

/*  ==================================================================
                            TRAVELLER SELECTOR
    ==================================================================  */


    const rtAdultsCount = document.getElementById('rtAdultsCount');
    const rtChildrenCount = document.getElementById('rtChildrenCount');
    const rtInfantCount = document.getElementById('rtInfantsCount');
    
    const owAdultsCount = document.getElementById('owAdultsCount');
    const owChildrenCount = document.getElementById('owChildrenCount');
    const owInfantCount = document.getElementById('owInfantsCount');
    
    const mcAdultsCount = document.getElementById('mcAdultsCount');
    const mcChildrenCount = document.getElementById('mcChildrenCount');
    const mcInfantCount = document.getElementById('mcInfantsCount');
    
    // RoundTrip: Adult - start
    function rtaAdd() {
      var value = parseInt(rtAdultsCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 9) {
          value++;
          rtAdultsCount.value = value;
          console.log(value);
        }
    }
    
    function rtaSubtract() {
      var value = parseInt(rtAdultsCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 0) {
          value--;
          rtAdultsCount.value = value;
          console.log(value);
        }
    }
    // RoundTrip: Adult - end
    
    // RoundTrip: Children - start
    function rtcAdd() {
      var value = parseInt(rtChildrenCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 9) {
          value++;
          rtChildrenCount.value = value;
          console.log(value);
        }
    }
    
    function rtcSubtract() {
      var value = parseInt(rtChildrenCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 0) {
          value--;
          rtChildrenCount.value = value;
          console.log(value);
        }
    }
    // RoundTrip: Children - end
    
    // RoundTrip: Infants - start
    function rtiAdd() {
      var value = parseInt(rtInfantCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 9) {
          value++;
          rtInfantCount.value = value;
          console.log(value);
        }
    }
    
    function rtiSubtract() {
      var value = parseInt(rtInfantCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 0) {
          value--;
          rtInfantCount.value = value;
          console.log(value);
        }
    }
    // RoundTrip: Infants - end
    
    // RondTrip: Done - start
    function rtDone() {
      var travellers = document.getElementById("rt-travellersInput");
      var totalTravellers = parseInt(rtAdultsCount.value) + parseInt(rtChildrenCount.value) + parseInt(rtInfantCount.value);
      
      const dropdownMenu = document.getElementById("rt-drop");
      dropdownMenu.classList.remove("show");
    
      travellers.value = totalTravellers + " traveller(s) ";
      console.log(travellers.value);
    }
    // RondTrip: Done - end

    // OneWay: Adult - start
    function owaAdd() {
      var value = parseInt(owAdultsCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 9) {
          value++;
          owAdultsCount.value = value;
          console.log(value);
        }
    }
    
    function owaSubtract() {
      var value = parseInt(owAdultsCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 0) {
          value--;
          owAdultsCount.value = value;
          console.log(value);
        }
    }
    // OneWay: Adult - end
    
    // OneWay: Children - start
    function owcAdd() {
      var value = parseInt(owChildrenCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 9) {
          value++;
          owChildrenCount.value = value;
          console.log(value);
        }
    }
    
    function owcSubtract() {
      var value = parseInt(owChildrenCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 0) {
          value--;
          owChildrenCount.value = value;
          console.log(value);
        }
    }
    // OneWay: Children - end
    
    // OneWay: Infants - start
    function owiAdd() {
      var value = parseInt(owInfantCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 9) {
          value++;
          owInfantCount.value = value;
          console.log(value);
        }
    }
    
    function owiSubtract() {
      var value = parseInt(owInfantCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 0) {
          value--;
          owInfantCount.value = value;
          console.log(value);
        }
    }
    // OneWay: Infants - end
    
    // OneWay: Done - start
    function owDone() {
      var travellers = document.getElementById("ow-travellersInput");
      var totalTravellers = parseInt(owAdultsCount.value) + parseInt(owChildrenCount.value) + parseInt(owInfantCount.value);
      
      const dropdownMenu = document.getElementById("ow-drop");
      dropdownMenu.classList.remove("show");
    
      travellers.value = totalTravellers + " traveller(s) ";
      console.log(travellers.value);
    }
    // OneWay: Done - end

    // MultiCity: Adult - start
    function mcaAdd() {
      var value = parseInt(mcAdultsCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 9) {
          value++;
          mcAdultsCount.value = value;
          console.log(value);
        }
    }
    
    function mcaSubtract() {
      var value = parseInt(mcAdultsCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 0) {
          value--;
          mcAdultsCount.value = value;
          console.log(value);
        }
    }
    // MultiCity: Adult - end
    
    // MultiCity: Children - start
    function mccAdd() {
      var value = parseInt(mcChildrenCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 9) {
          value++;
          mcChildrenCount.value = value;
          console.log(value);
        }
    }
    
    function mccSubtract() {
      var value = parseInt(mcChildrenCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 0) {
          value--;
          mcChildrenCount.value = value;
          console.log(value);
        }
    }
    // MultiCity: Children - end
    
    // MultiCity: Infants - start
    function mciAdd() {
      var value = parseInt(mcInfantCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < 9) {
          value++;
          mcInfantCount.value = value;
          console.log(value);
        }
    }
    
    function mciSubtract() {
      var value = parseInt(mcInfantCount.value, 10);
        value = isNaN(value) ? 0 : value;
        if (value > 0) {
          value--;
          mcInfantCount.value = value;
          console.log(value);
        }
    }
    // MultiCity: Infants - end
    
    // MultiCity: Done - start
    function mcDone() {
      var travellers = document.getElementById("mc-travellersInput");
      var totalTravellers = parseInt(mcAdultsCount.value) + parseInt(mcChildrenCount.value) + parseInt(mcInfantCount.value);
      
      const dropdownMenu = document.getElementById("mc-drop");
      dropdownMenu.classList.remove("show");
    
      travellers.value = totalTravellers + " traveller(s) ";
      console.log(travellers.value);
    }
    // MultiCity: Done - end
    


/*  ==================================================================
                        MULTI CITY ADD FLIGHT
    ==================================================================  */

var source = document.getElementById("multiCityOptions");
var destination = document.getElementById("moreFlight");
var addFlight = document.getElementById("addFlight");
var removeFlight = document.getElementById("removeFlight");
var clickCount = 0;

addFlight.onclick = () => {

  
  clickCount++;
  if (clickCount < 3) {
    let moreFlightClone = source.cloneNode(true);
    moreFlightClone.removeAttribute("id");
    moreFlightClone.setAttribute("id", "addedNode");
    destination.appendChild(moreFlightClone);
  } else {
    addFlight.classList.add("hide-btn");
    let moreFlightClone = source.cloneNode(true);
    moreFlightClone.removeAttribute("id");
    moreFlightClone.setAttribute("id", "addedNode");
    destination.appendChild(moreFlightClone);
  }
  document.getElementsByClassName('removeFlight')[1].style.display = "none";
  document.getElementsByClassName("addFlight")[1].style.display = "none";
  document.getElementsByClassName("addFlight")[2].style.display = "none";
  document.getElementsByClassName("removeFlight")[1].style.display = "none";
  document.getElementsByClassName("removeFlight")[2].style.display = "none";
};

removeFlight.onclick =() => {
  let toDelete = document.getElementById("addedNode");
  toDelete.remove();
  addFlight.classList.remove("hide-btn");
  clickCount--;
  console.log(toDelete);
};

// var addBTNToHide = document.getElementsByClassName("addFlight");
// var removeBTNToHide = document.getElementsByClassName("removeFlight");
// for(var i = 1; i < addBTNToHide.length; i++){
//     addBTNToHide[i].style.visibility = "hidden"; // or
//     removeBTNToHide[i].style.display = "none"; // depending on what you're doing
// }


/*  ==================================================================
                                  HOTEL
    ==================================================================  */

// INCREASE AND DECREASE GUEST COUNT - start
const hAdultsCount = document.getElementById('hAdultsCount');
const hChildrenCount = document.getElementById('hChildrenCount');

// Hotel Adult count buttons - start
function haAdd() {
  var value = parseInt(hAdultsCount.value, 10);
    value = isNaN(value) ? 0 : value;
    // if ((value > 0) && (value < 9)) {
    if ((value < 9)) {
      value++;
      hAdultsCount.value = value;
      console.log(value);
    }
}

function haSubtract() {
  var value = parseInt(hAdultsCount.value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      value--;
      hAdultsCount.value = value;
      console.log(value);
    }
}
// Hotel Adult count buttons - end

// Hotel Children count buttons - start
function hcAdd() {
  var value = parseInt(hChildrenCount.value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 9) {
      value++;
      hChildrenCount.value = value;
      console.log(value);
    }
}

function hcSubtract() {
  var value = parseInt(hChildrenCount.value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
      value--;
      hChildrenCount.value = value;
      console.log(value);
    }
}
// Hotel Children count buttons - end

// Hotel done button - start
function hDone() {
  var guests = document.getElementById("guestsInput");
  var totalGuests = parseInt(hAdultsCount.value) + parseInt(hChildrenCount.value);
  
  const dropdownMenu = document.getElementById("h-drop");
  dropdownMenu.classList.remove("show");

  guests.value = totalGuests + " guest(s), " + hCount + " room(s)";
  console.log(guests.value);
}
// Hotel done button - end

// INCREASE AND DECREASE GUEST COUNT - end

// ADD AND REMOVE HOTEL ROOMS - start
var hSource = document.getElementById('defaultRoom');
var hDestination = document.getElementById('moreRoom');
var addRoom = document.getElementById('addRoom');
var removeRoom = document.getElementById('removeRoom');
var roomNumber = document.getElementById('roomNum');

var hCount = 1;
roomNumber.innerHTML = hCount;

// document.getElementsByClassName('roomNum')[0].classList.add("hide");

addRoom.onclick = () => {
  hCount++;
  roomNumber.innerHTML = hCount;

  let moreRoomClone = hSource.cloneNode(true);
  moreRoomClone.removeAttribute("id");
  moreRoomClone.setAttribute("id", "addedRoom" + hCount);
  hDestination.appendChild(moreRoomClone);
};

removeRoom.onclick =() => {
  let deletedRoom = document.getElementById("addedRoom" + hCount);
  deletedRoom.remove();
  console.log(deletedRoom);
  hCount--;
};
// ADD AND REMOVE HOTEL ROOMS - end



// -------------------------------------------------------- //

function flightChangeBG() {
  document.getElementsByClassName("wrapper")[0].style.backgroundImage = "url('./assets/img/Travel-Image8-min.jpg')"; 
}

function hotelChangeBG() {
  document.getElementsByClassName("wrapper")[0].style.backgroundImage = "url('./assets/img/hotel/hotel-bg.jpg')"; 
}
