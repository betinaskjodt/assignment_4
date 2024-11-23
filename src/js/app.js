const listButtons = document.querySelectorAll(".components__list-btn");
const componentsContainers = document.querySelectorAll(".components__item");

const updateDisplay = (index) => {
  const displayComponent = componentsContainers[index];

  switch (index) {
    case 0:
      buttonComponent();
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
  });
  updateDisplay();
});

const buttonComponent = () => {
  const states = ["dedault", "hover", "disabled", "active"];

  states.forEach((state) => {
    const stateContainer = document.createElement("div");
    stateContainer.classList.add(`components__${state}-container`);

    const stateTitle = document.createElement("h2");
    stateTitle.classList.add(`components__${state}-title`);
    stateTitle.textContent = `Button displayed in ${state} State`;

    const stateButton = document.createElement("button");
    stateButton.classList.add(`components__${state}-btn`);
    stateButton.textContent = "click!";

    if (state === "disabled") {
      stateButton.disabled = true;
    }

    stateContainer.append(stateTitle, stateButton);
  });
  const buttonsContainer = document.querySelector(".components__buttons");
  buttonsContainer.append(stateContainer);
};

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

// const alertsConatiner = document.querySelector(".components__alerts");
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
