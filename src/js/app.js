const listButtons = document.querySelectorAll(".components__list-btn");
const componentsContainers = document.querySelectorAll(
  ".components__container"
);
const alertsComponents = document.querySelectorAll(".components__alert");
const accordionsComponents = document.querySelectorAll(
  ".components__accordion"
);
const toastButtons = document.querySelectorAll(".components__toast-button ");
const toastMessages = document.querySelectorAll(".components__toast-message");

// adding click event to toast message
toastButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const toast = toastMessages[index];

    if (toast.classList.contains("components__toast-message--appearing")) {
      toast.classList.add("components__toast-message--active");
      const closeButton = toast.querySelector(
        ".components__toast-message-close-button"
      );
      closeButton.addEventListener("click", () => {
        toast.classList.remove("components__toast-message--active");
      });
    } else if (toast.classList.contains("components__toast-message--timed")) {
      toast.classList.add("components__toast-message--active");
      setTimeout(() => {
        toast.classList.remove("components__toast-message--active");
      }, 3000);
    } else if (toast.classList.contains("components__toast-message--warning")) {
      toast.classList.add("components__toast-message--active");
    }
  });
});

// adding click event to accordions. when you click on the title it should show the content and roteate the arrow.
accordionsComponents.forEach((accordion) => {
  const title = accordion.querySelector(
    ".components__accordion-title-container"
  );
  const toggleButton = accordion.querySelector(
    ".components__accordion-toggle-button"
  );
  const accordionContent = accordion.querySelector(
    ".components__accordion-content-container"
  );

  title.addEventListener("click", () => {
    title.classList.toggle("components__accordion-title-container--active");
    toggleButton.classList.toggle(
      "components__accordion-toggle-button--active"
    );
    accordionContent.classList.toggle(
      "components__accordion-content-container"
    );
  });
});

// clickevent on the x button for alert message. when clicked setTimeout is run and adds class to the alert componet, making it fade away with css style.
alertsComponents.forEach((alert) => {
  const closebutton = alert.querySelector(".components__alert-button");
  closebutton.addEventListener("click", () => {
    setTimeout(() => {
      alert.classList.add("fade-out");
    }, 200);
  });
});

// displaying the correct compoents when clicked on the listbuttons
listButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    listButtons.forEach((btn) => {
      btn.classList.remove("components__list-btn--active");
    });

    componentsContainers.forEach((container) => {
      container.classList.remove("components__container--active");
    });

    e.target.classList.add("components__list-btn--active");
    componentsContainers[index].classList.add("components__container--active");
  });
});
