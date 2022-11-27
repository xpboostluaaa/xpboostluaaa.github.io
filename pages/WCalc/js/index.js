//document.querySelector("#volt");
//document.querySelector("#amper");
//document.querySelector("#watt");
//document.querySelector("#clear");
//document.querySelector("#handle");

document.querySelector("#handle").onclick = handleMessage;

function handleMessage() {
  if (
    !document.querySelector("#watt").value &&
    document.querySelector("#volt").value &&
    document.querySelector("#amper").value
  ) {
    document.querySelector("#watt").value =
      +document.querySelector("#volt").value *
      +document.querySelector("#amper").value;
  } else if (
    document.querySelector("#watt").value &&
    !document.querySelector("#volt").value &&
    document.querySelector("#amper").value
  ) {
    document.querySelector("#volt").value =
      +document.querySelector("#watt").value /
      +document.querySelector("#amper").value;
  } else if (
    document.querySelector("#watt").value &&
    document.querySelector("#volt").value &&
    !document.querySelector("#amper").value
  ) {
    document.querySelector("#amper").value =
      +document.querySelector("#watt").value /
      +document.querySelector("#volt").value;
  } else {
    alert("Wrong params!");
  }
}

document.querySelector("#clear").onclick = clearAll;

function clearAll() {
  document.querySelector("#volt").value = null;
  document.querySelector("#amper").value = null;
  document.querySelector("#watt").value = null;
}
