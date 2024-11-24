const listButtons = document.querySelectorAll(".components__list-btn");
const componentsContainers = document.querySelectorAll(".components__item");

const buttonComponent = () => {
  const states = ["dedault", "hover", "disabled", "active"];

  states.forEach((state) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add(`components__${state}-container`);

    const buttonTitle = document.createElement("h2");
    buttonTitle.classList.add(`components__${state}-title`);
    buttonTitle.textContent = `Button displayed in ${state} State`;

    const buttonElements = document.createElement("button");
    buttonElements.classList.add(`components__${state}-btn`);
    buttonElements.textContent = "click!";

    if (state === "disabled") {
      buttonElements.disabled = true;
    }

    buttonContainer.append(buttonTitle, buttonElements);
    const buttonsContainer = document.querySelector(".components__buttons");
    buttonsContainer.append(buttonContainer);
  });
};

const allertComponent = () => {
  const states = ["Success", "Warning", "Error", "Info"];

  states.forEach((state) => {
    const alertContainer = document.createElement("div");
    alertContainer.classList.add(`components__${state}-container`);

    const alertTtile = document.createElement("h2");
    alertTtile.classList.add(`components__${state}-title`);
    alertTtile.textContent = `Alert displayed in ${state} state:`;

    const alertElement = document.createElement("div");
    alertElement.classList.add(`components__${state}-alert`);
    const alertMessage = document.createElement("p");
    alertMessage.textContent = `this is an example of ${state} alert`;

    alertContainer.append(alertTtile, alertElement);
    alertElement.appendChild(alertMessage);

    const alertsConatiner = document.querySelector(".components__alerts");
    alertsConatiner.append(alertContainer);
    // const alertCloseButton = document.createElement("span");
    // alertElement.appendChild(alertCloseButton);
  });
};

const updateDisplay = (index) => {
  componentsContainers.forEach((container) => {
    container.textContent = "";
  });

  let displayComponent = componentsContainers[index];

  switch (index) {
    case 0:
      buttonComponent();
      break;

    case 1:
      allertComponent();
      break;

    default:
      console.log("not working");

      break;
  }
};

listButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    componentsContainers.forEach((container) => {
      container.classList.remove("components__item--active");
    });

    listButtons.forEach((button) => {
      button.classList.remove("components__list-btn--active");
    });

    e.target.classList.add("components__list-btn--active");
    componentsContainers[index].classList.add("components__item--active");

    updateDisplay(index);
  });
});

// const showButtonComponents = () => {
//

//   const deafultButtonContainer = document.createElement("div");
//   deafultButtonContainer.classList.add("components__deafault-container");
//   const defaultTitle = document.createElement("h2");
//   defaultTitle.classList.add("components__deafault-title");
//   const defaultButton = document.createElement("button");
//   defaultButton.classList.add("components__deafault-btn");
//   deafultButtonContainer.append(defaultTitle, defaultButton);

//   const hoverButtonContainer = document.createElement("div");
//   hoverButtonContainer.classList.add("components__hover-container");
//   const hoverTitle = document.createElement("h2");
//   hoverTitle.classList.add("components__hover-title");
//   const hoverButton = document.createElement("button");
//   hoverButton.classList.add("components__hover-button");
//   hoverButtonContainer.append(hoverTitle, hoverButton);

//   const disableButtonContainer = document.createElement("div");
//   disableButtonContainer.classList.add("components__disable-container");
//   const disableTitle = document.createElement("h2");
//   disableTitle.classList.add("components__disable-title");
//   const disableButton = document.createElement("button");
//   disableButton.classList.add("components__disable-button");
//   disableButtonContainer.append(disableTitle, disableButton);

//   buttonsContainer.append(
//     deafultButtonContainer,
//     hoverButtonContainer,
//     disableButtonContainer
//   );
// };

//
// const togglesConatiner = document.querySelector(".components__toggle-switch");
// const tooltipsContainer = document.querySelector(".components__tooltips");
// const cardsContainer = document.querySelector(".components__cards");
// const accordionsContainer = document.querySelector(".components__accordions");
// const toastsContainer = document.querySelector(".components__toast");
// const badgerContainer = document.querySelector(".components__badger");

// tanke greier funker ikke !!!!
// switch (button === "click") {
//   case container.classList.contains("components__buttons"):
//     showButtonComponents();
//     break;
//   case container.classList.contains("components__alerts"):
//     showAlertsComponents();
//     break;
//   case container.classList.contains("components__toggle-switch"):
//     showToggleSwitchComponents();
//     break;
//   case container.classList.contains("components__tooltips"):
//     showTooltipsComponents();
//     break;
//   case container.classList.contains("components__cards"):
//     showCardComponents();
//     break;
//   case container.classList.contains("components__accordions"):
//     showAccordionComponents();
//     break;
//   case container.classList.contains("components__toast"):
//     showToastComponers();
//     break;
//   case container.classList.contains("components__badger"):
//     showBadgerComponents();
//     break;
//   default:
//     console.log("not working");
//     break;
// }
