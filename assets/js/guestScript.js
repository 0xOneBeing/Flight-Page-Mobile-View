//  GUEST INFORMATION PAGE - start
const gSource = document.getElementsByClassName("guest")[0];
const gDestination = document.getElementById("more-guests");
const addGuests = document.getElementById("addGuests");
const removeGuests = document.getElementById("removeGuests");
const gRoomNumber = document.getElementById("gRoomNumber");

var gCount = 1;
gRoomNumber.innerHTML = gCount;

addGuests.onclick = () => {
//   const dropdownMenu = document.getElementById("h-drop");
//   dropdownMenu.classList.remove("show");

  gCount++;
  gRoomNumber.innerHTML = gCount;

  let moreGuestClone = gSource.cloneNode(true);
  moreGuestClone.removeAttribute("id");
  moreGuestClone.setAttribute("id", "addedGuest" + gCount);
  gDestination.appendChild(moreGuestClone);
};

removeGuests.onclick = () => {
  let deletedGuest = document.getElementById("addedGuest" + gCount);
  deletedGuest.remove();
  console.log(deletedGuest);
  --gCount;
};

// if ()
//  GUEST INFORMATION PAGE - end
