// showPopup
function showPopup() {
  const popup = document.getElementById("popup");
  if (popup.style.display == "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
  hideHeader(popup);
}
// changeheader
function hideHeader(popup) {
  const hideHeader1 = document.getElementById("hideHeader1");
  const hideHeader2 = document.getElementById("hideHeader2");
  const hideHeader3 = document.getElementById("hideHeader3");
  const upicon = document.getElementById("up-icon");
  const downicon = document.getElementById("down-icon");
  const closeicon = document.getElementById("close-icon");
  const header = document.getElementById("header");
  if (popup.style.display == "block") {
    hideHeader1.style.display = "none";
    hideHeader2.style.display = "none";
    hideHeader3.style.display = "none";
    upicon.style.display = "block";
    downicon.style.display = "none";
    closeicon.style.display = "inline-block";
    header.style.backgroundColor = "#fff";
  } else {
    hideHeader1.style.display = "flex";
    hideHeader2.style.display = "block";
    hideHeader3.style.display = "block";
    header.style.backgroundColor = "#111111";
    closeicon.style.display = "none";
    upicon.style.display = "none";
    downicon.style.display = "block";
  }
}

// close Popup
function closePopup() {
  const popup = document.getElementById("popup");
  const closeicon = document.getElementById("close-icon");
  const hideHeader1 = document.getElementById("hideHeader1");
  const hideHeader2 = document.getElementById("hideHeader2");
  const hideHeader3 = document.getElementById("hideHeader3");
  const header = document.getElementById("header");
  popup.style.display = "none";
  hideHeader1.style.display = "flex";
  hideHeader2.style.display = "block";
  hideHeader3.style.display = "block";
  header.style.backgroundColor = "#111111";
  closeicon.style.display = "none";
}
