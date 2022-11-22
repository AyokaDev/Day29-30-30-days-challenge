function change() {
    let input = document.getElementById("input").value;
    let sap = document.getElementById("sap");
    let kgtoPound = input * 2.20462;
    sap.innerHTML = kgtoPound
}