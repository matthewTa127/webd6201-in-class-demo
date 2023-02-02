(function () {
  function displayButton() {
    let randomButton = document.getElementById("randomButton");
    let mainContent = document.getElementsByTagName("main")[0];
    mainContent.setAttribute("class", "container");

    randomButton.addEventListener("click", function () {
      location.href = "contact.html";
    });

    let mainParagraph = document.createElement("p");
    mainParagraph.setAttribute("id", "MainParagraph");
    mainParagraph.setAttribute("class", "mt-3");

    let firstString = " This is a ";

    let secondString = `${firstString} main paragraph that we added thought javascript`;
    mainParagraph.textContent = secondString;
    mainContent.appendChild(mainParagraph);

    // let mainParagraph = document.createElement("p");
    // mainParagraph.setAttribute("id", "MainParagraph");
    // mainParagraph.setAttribute("class", "mt-3 container");

    // let firstString = " This is a ";

    // let secondString = `${firstString} main paragraph that we added thought javascript`;
    // mainParagraph.textContent = secondString;
    // mainContent.before(mainParagraph);

    let documentBody = document.body;
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
