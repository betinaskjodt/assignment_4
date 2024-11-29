// const listButtons = document.querySelectorAll(".components__list-btn");
// const componentsContainers = document.querySelectorAll(
//   ".components__container"
// );
// const alertbutton = document.querySelectorAll(".alert-btn");
// const alertElement = document.querySelectorAll(".component__alert");

// // Handeling click event for list of buttons and display only the one componet at the time
// listButtons.forEach((button, index) => {
//   button.addEventListener("click", (e) => {
//     componentsContainers.forEach((container) => {
//       container.classList.remove("components__container--active");
//     });

//     listButtons.forEach((button) => {
//       button.classList.remove("components__list-btn--active");
//     });

//     e.target.classList.add("components__list-btn--active");
//     componentsContainers[index].classList.add("components__container--active");
//   });
// });

// Handleling click event for alert message, make it disapear when you click on "X"
// vil bare at clicket skal skje på den spesefikke boksen????
// alertbutton.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     alertElement.forEach((element) => {
//       element.classList.add("fade-out");
//       setTimeout(() => element[index].remove(), 1000);
//     });
//   });
// });

// const updateDisplay = (index) => {
//   componentsContainers.forEach((container) => {
//     container.textContent = "";
//   });

//   let displayComponent = componentsContainers[index];

//   if(){

//   }

// switch (index) {
//   case 0:
//     showButtonComponents();
//     break;

//   case 1:
//     showAlertComponents();
//     break;

//   case 2:
//     showToggleSwitchComponents();
//     break;

//   default:
//     console.log("not working");

//     break;
// }
// };

// const showButtonComponents = () => {
//   const states = ["dedault", "hover", "disabled", "active"];

//   states.forEach((state) => {
//     const buttonContainer = document.createElement("div");
//     buttonContainer.classList.add(`components__${state}-container`);

//     const buttonTitle = document.createElement("h2");
//     buttonTitle.classList.add(`components__${state}-title`);
//     buttonTitle.textContent = `Button displayed in ${state} State`;

//     const buttonElements = document.createElement("button");
//     buttonElements.classList.add(`components__${state}-btn`);
//     buttonElements.textContent = "click!";

//     if (state === "disabled") {
//       buttonElements.disabled = true;
//     }

//     buttonContainer.append(buttonTitle, buttonElements);
//     const buttonsContainer = document.querySelector(".components__buttons");
//     buttonsContainer.append(buttonContainer);
//   });
// };

// const showAlertComponents = () => {
//   const states = ["Success", "Warning", "Error", "Info"];

//   states.forEach((state) => {
//     const alertContainer = document.createElement("div");
//     alertContainer.classList.add(
//       `components__${state.toLowerCase()}-container`
//     );

//     const alertTtile = document.createElement("h2");
//     alertTtile.classList.add(`components__${state.toLowerCase()}-title`);
//     alertTtile.textContent = `Alert displayed in ${state} state:`;

//     const alertElement = document.createElement("div");
//     alertElement.classList.add(`components__${state.toLowerCase()}-alert`);
//     const alertMessage = document.createElement("p");
//     alertMessage.textContent = `This is an example of ${state} alert`;
//     const alertCloseButton = document.createElement("span");

//     alertCloseButton.classList.add(`components__alert-close-btn`);

//     alertCloseButton.textContent = "X";

//     alertCloseButton.addEventListener("click", () => {
//       alertElement.classList.add("fade-out");
//       setTimeout(() => alertElement.remove(), 2000);
//     });

//     alertContainer.append(alertTtile, alertElement);
//     alertElement.append(alertMessage, alertCloseButton);

//     const alertsConatiner = document.querySelector(".components__alerts");
//     alertsConatiner.append(alertContainer);

//     if (state === "Success") {
//     }
//   });
// };

// const showToggleSwitchComponents = () => {
//   const states = ["Default", "Disable"];

//   states.forEach((state) => {
//     const toggleContainers = document.createElement("div");
//     toggleContainers.classList.add(
//       `components__toggle-switch-${state}-container`
//     );
//     const toggleTitle = document.createElement("h2");
//     toggleTitle.classList.add(`components__toggle-switch-${state}-title`);

//     const toggleElementContainer = document.createElement("div");
//     toggleElementContainer.classList.add(
//       `components__toggle-switch-${state}-elment-container`
//     );
//     const toggleLabel = document.createElement("label");
//     const toggleInput = document.createElement("input");
//     toggleInput.type = "checkbox";
//     const toggleSwitchButton = document.createElement("span");

//     toggleContainers.append(toggleTitle, toggleElementContainer);
//     toggleElementContainer.append(toggleLabel, toggleInput, toggleSwitchButton);

//     const togglesConatiner = document.querySelector(
//       ".components__toggle-switch"
//     );
//     togglesConatiner.append(toggleContainers);
//   });
// };

// -----------------------------------------------------------------------------------------------------------------------------------------
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
