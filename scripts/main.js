(function () {
  function displayButton() {
    let randomButton = document.getElementById("randomButton");
    let mainContent = document.getElementsByTagName("main")[0];

    randomButton.addEventListener("click", function () {
      location.href = "contact.html";
    });

    let mainParagraph = document.createElement("p");
    mainParagraph.setAttribute("id", "MainParagraph");
    mainParagraph.setAttribute("class", "mt-3");

    let firstString =
      " This is a main paragraph that we be added through javascript";

    mainParagraph.textContent = firstString;
    mainContent.appendChild(mainParagraph);
  }

  function Start() {
    console.log("App Started!");

    switch (document.title) {
      case "Home - WEBD6201 Demo": {
        displayButton();
        break;
      }
      case "Projects - WEBD6201 Demo": {
        displayButton();
        break;
      }
    }
  }

  window.addEventListener("load", Start);
})();
