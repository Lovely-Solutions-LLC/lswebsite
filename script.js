class Specialheader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="first-navbar">
  <div class="navbar-logo">
    <a class="navbar-brand" width="100%" height="100%" href="/index.html">
      <img src="images/logo.png" alt="Bootstrap" width="100%" height="100%" />
    </a>
  </div>
  <div class="navbar-buttons-home">
    <ul class="nav">
      <li class="nav-item">
        <a class="links" href="/index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="links" href="/products.html">Products</a>
      </li>
      <li class="nav-item">
        <a class="links" href="/more.html">More</a>
      </li>
    </ul>
  </div>
  <div class="navbar-hamburger">
    <div class="hamburger">
      <button class="hamburger-button">
        <img src="images/Menu-open.png" alt="Arrow" class="arrow-image" />
      </button>
    </div>
  </div>
  <div class="side-navbar">
    <div class="side-navbar-heading-div">
      <h1 class="side-navbar-heading">Lovely Solutions.</h1>
      <i class="material-icons" style="color: #6d2e00;">close</i>
    </div>  
    <div class="side-navbar-links">
      <ul class="nav justify-content-start">
        <li class="nav-item">
          <a class="links sidebar" href="/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="links sidebar" href="/products.html">Products</a>
        </li>
        <li class="nav-item">
          <a class="links sidebar" href="/more.html">More</a>
        </li>
      </ul>
      <ul class="nav nav-2 justify-content-start">
        <li class="nav-item">
          <a class="links sidebar" href="https://www.youtube.com/@lovelysolutionsllc">Youtube</a>
        </li>
        <li class="nav-item">
          <a class="links sidebar" href="https://www.linkedin.com/in/liam-bailey-54b082275/">Linkedln</a>
        </li>
        <li class="nav-item">
          <a class="links sidebar" href="https://www.instagram.com/lovelysolutionsllc/">Instagram</a>
        </li>
      </ul>
    </div>
    <div class="side-navbar-para">
      <p>© 2024 Lovely Solutions. All rights reserved.</p>
    </div>
  </div>
</div>
`;
  }
}
class Specialbrand extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="brands-heading-div"><h1 class="brands-heading">Trusted by companies all over the world</h1></div>
      <div class="brands">
        <div class="brand-image-1"><img class="brand-images" src="images/image1.png" alt="" /></div>
        <div class="brand-image-2"><img class="brand-images" src="images/image2.png" alt="" /></div>
        <div class="brand-image-3"><img class="brand-images" src="images/image3.png" alt="" /></div>
        <div class="brand-image-4"><img class="brand-images" src="images/image4.png" alt="" /></div>
        <div class="brand-image-5"><img class="brand-images" src="images/image5.png" alt="" /></div>
      </div>`;
  }
}
class Specialform extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="form">
  <div class="filling-form" id="actual-form">
    <div class="actual-form"">
      <div class="heading-form">
        <h1>Get in <mark class="touch">touch</mark></h1>
      </div>
      <div class="para-form">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
      <div class="input-fields">
        <div>
          <input
            class="contact-name"
            type="text"
            name="contact-name"
            id="contact-name"
            placeholder="Contact name"
            required
          />
          <input
            class="contact-name"
            type="text"
            name="street"
            id="street"
            placeholder="Street"
            required
          />
          <div class="multiple-inputs">
            <input
              class="city"
              type="text"
              name="city"
              id="city"
              placeholder="City"
              required
            />
            <input
              class="postcode"
              type="text"
              name="postcode"
              id="postcode"
              placeholder="Postcode"
              required
            />
          </div>
          <input
            class="contact-name"
            type="text"
            name="contact-phone"
            id="contact-phone"
            placeholder="Contact Phone"
            required
          />
          <input
            class="contact-name"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            class="contact-name"
            type="text"
            name="idea"
            id="idea"
            placeholder="Let's talk about your idea"
            required
          />
          <div class="form-submit-button">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-image">
    <div class="first-form-image">
      <img style="border:none;" src="images/PartnerBadge.png" alt="" />
    </div>
    <div class="first-form-para">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </p>
    </div>
  </div>
</div>
`;
  }
}
class Specialfooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer">
  <div class="footer-image">
    <div class="image-of-footer"></div>
  </div>
  <div class="simple-save-lovely">
    <div class="footer-first-para">
      <p>Simple. Save. Lovely</p>
    </div>
    <div class="footer-first-info">
      <div class="footer-first-info-first-div">
        <p>(123) 456-7892</p>
      </div>
      <div class="footer-first-info-second-div">
        <div class="footer-first-info-second-div-inside-div">
          <p>
            <a href="mailto:contact@lovelysolutions.com">contact@lovelysolutions.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-third-div">
    <div class="footer-first-third-div">
      <div class="footer-sub-first">
        <p><a href="./index.html">Home</a></p>
        <p><a href="./products.html">Products</a></p>
        <p><a href="./more.html">More</a></p>
      </div>
      <div class="footer-sub-second">
        <p><a href="https://www.youtube.com/@lovelysolutionsllc">Youtube</a></p>
        <p><a href=" https://www.linkedin.com/in/liam-bailey-54b082275/">LinkedIn</a></p>
        <p><a href="https://www.instagram.com/lovelysolutionsllc/">Instagram</a></p>
      </div>
    </div>
    <div class="footer-second-third-div">
      <p style="padding-top: 3px; color: #0a142f">
        © 2024 Lovely Solutions. All rights reserved.
      </p>
    </div>
    <div class="footer-second-last-button">
      <div class="footer-second-button">
        <button id="scrollToTopButton1" class="arrow-second-last-button">
          <img src="images/Group.png" alt="Arrow" class="arrow-image" />
        </button>
      </div>
    </div>
  </div>
  <div class="footer-last-button">
    <div class="footer-button">
      <button id="scrollToTopButton2" class="arrow-button">
        <img src="images/Group.png" alt="Arrow" class="arrow-image" />
      </button>
    </div>
  </div>
  <div class="footer-last-third-div">
    <p>© 2024 Lovely Solutions. All rights reserved.</p>
  </div>
</footer>
`;
  }
}
customElements.define("special-header", Specialheader);
customElements.define("special-brand", Specialbrand);
customElements.define("special-form", Specialform);
customElements.define("special-footer", Specialfooter);

document.addEventListener("DOMContentLoaded", function () {
  // Function to set the current page
  function setCurrentPage() {
    // Get the current URL path
    const currentPath = window.location.pathname;
    console.log("Current Path:", currentPath);

    // Normalize the current path
    const normalizedPath =
      currentPath === "/"
        ? "/index.html"
        : currentPath.endsWith("/")
        ? currentPath + "index.html"
        : currentPath;
    console.log("Normalized Path:", normalizedPath);

    // Get all nav items
    const navItems = document.querySelectorAll(
      ".navbar-buttons-home .nav-item"
    );
    console.log("Nav Items:", navItems);

    // Remove current-page class from all items
    navItems.forEach((item) => {
      item.classList.remove("current-page");
    });

    // Add current-page class to the correct nav item
    navItems.forEach((item) => {
      const link = item.querySelector("a");
      if (link) {
        const linkHref = link.getAttribute("href");
        console.log("Link Href:", linkHref);
        if (linkHref === normalizedPath) {
          item.classList.add("current-page");
        }
      }
    });
  }

  // Set the current page
  setCurrentPage();
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton1 = document.getElementById("scrollToTopButton1");
  const scrollToTopButton2 = document.getElementById("scrollToTopButton2");

  if (scrollToTopButton1) {
    scrollToTopButton1.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.error("scrollToTopButton1 not found");
  }

  if (scrollToTopButton2) {
    scrollToTopButton2.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.error("scrollToTopButton2 not found");
  }
});
function scrollToForm() {
  document.getElementById("actual-form").scrollIntoView({ behavior: "smooth" });
}

document.querySelector(".read-more-btn").addEventListener("click", function () {
  const paragraphContainer = document.querySelector(".paragraph-container");

  // Toggle the expanded class
  paragraphContainer.classList.toggle("expanded");

  // Change button text based on the state
  if (paragraphContainer.classList.contains("expanded")) {
    this.textContent = "Show Less";
  } else {
    this.textContent = "Read More";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarButtons = document.querySelector(".navbar-buttons-home"); // Correct class selector
  const currentPage = window.location.pathname;

  if (currentPage.includes("products")) {
    navbarButtons.classList.add("products-page");
    navbarButtons.classList.remove("more-page"); // Ensure the more-page class is removed
  } else if (currentPage.includes("more")) {
    navbarButtons.classList.add("more-page");
    navbarButtons.classList.remove("products-page"); // Ensure the products-page class is removed
  } else {
    navbarButtons.classList.remove("products-page");
    navbarButtons.classList.remove("more-page");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  readMoreButtons.forEach((button) => {
    console.log(button); // Log the button element to ensure it's being selected

    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const paragraphContainer = card.querySelector(".paragraph-container");
      const btnText = button.querySelector(".btn-text");

      console.log(btnText); // Log the btnText to ensure it's being selected

      if (btnText === null) {
        console.error("btnText is null for this button:", button);
        return;
      }

      if (paragraphContainer.classList.contains("expanded")) {
        paragraphContainer.classList.remove("expanded");
        btnText.textContent = "Read More";
      } else {
        paragraphContainer.classList.add("expanded");
        btnText.textContent = "Show Less";
      }
    });
  });
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const sideNavbar = document.querySelector(".side-navbar");
  const closeButton = document.querySelector(
    ".side-navbar-heading-div .material-icons"
  );

  if (hamburgerButton && sideNavbar && closeButton) {
    // Open side-navbar
    hamburgerButton.addEventListener("click", function () {
      sideNavbar.classList.add("active");
    });

    // Close side-navbar
    function closeNavbar() {
      sideNavbar.classList.remove("active");
    }

    // Close when clicking on the close button
    closeButton.addEventListener("click", closeNavbar);
  } else {
    console.error("Could not find required elements:", {
      hamburgerButton: hamburgerButton,
      sideNavbar: sideNavbar,
      closeButton: closeButton,
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Check if there is a selected category in localStorage
  const selectedCategory = localStorage.getItem("selectedCategory");

  // Define colors for category transitions
  const transitionColors = {
    'apps-to-courses': {
      currentPageColor: 'rgba(234, 40, 40, 0.25)', // Background color for current-page class
      secondPageColor: 'rgba(234, 40, 40, 0.25)' // Background color for second-page-current-page class
    },
    'courses-to-others': {
      currentPageColor: 'rgba(255, 0, 199, 0.25)', // Background color for current-page class
      secondPageColor: 'rgba(255, 0, 199, 0.25)' // Background color for second-page-current-page class
    }
  };

  function updateBackgroundColors(categoryTransition) {
    const navbarButtonsHome = document.querySelector(".navbar-buttons-home");
    const currentPageElement = navbarButtonsHome?.querySelector(".current-page");
    const secondPageCurrentPageElements = document.querySelectorAll(".second-page-first-list .second-page-current-page");

    const colors = transitionColors[categoryTransition];

    if (currentPageElement && colors) {
      currentPageElement.style.backgroundColor = colors.currentPageColor;
    }

    secondPageCurrentPageElements.forEach(element => {
      if (colors) {
        element.style.backgroundColor = colors.secondPageColor;
      }
    });
  }

  if (selectedCategory) {
    changeCardImages(selectedCategory);
    setActiveCategory(selectedCategory);
    localStorage.removeItem("selectedCategory");
  } else {
    const defaultCategory = "apps";
    changeCardImages(defaultCategory);
    setActiveCategory(defaultCategory);
  }

  document.getElementById("category-others")?.addEventListener("click", () => changeCategory("others"));
  document.getElementById("category-apps")?.addEventListener("click", () => changeCategory("apps"));
  document.getElementById("category-courses")?.addEventListener("click", () => changeCategory("courses"));
  document.getElementById("category-products")?.addEventListener("click", () => changeCategory("products"));

  function changeCategory(category) {
    // Store the selected category in localStorage
    localStorage.setItem("selectedCategory", category);
    // Reload the page
    location.reload();
  }

  function setActiveCategory(category) {
    document.querySelectorAll(".second-page-first-list li").forEach(function (el) {
      el.classList.remove("second-page-current-page");
    });

    const categoryElement = document.getElementById(`category-${category}`);

    if (categoryElement) {
      categoryElement.classList.add("second-page-current-page");
    } else {
      console.error(`Element with ID 'category-${category}' not found.`);
    }

    // Apply or remove special classes for different categories
    if (category === "courses" || category === "products") {
      applyCoursesOrProductsStyles(category);
      if (category === "courses") {
        updateBackgroundColors('apps-to-courses'); // Update colors when moving from apps to courses
      }
    } else if (category === "others") {
      applyOthersStyles();
      updateBackgroundColors('courses-to-others'); // Update colors when moving from courses to others
    } else {
      removeCoursesOrProductsStyles();
    }
  }

  function changeCardImages(category) {
    const images = {
      apps: ["images/UTLogo1.png", "images/sld.png", "images/fbe.png"],
      courses: ["images/course.png", "images/course.png", "images/course.png"],
      products: ["images/product1.png", "images/product2.png", "images/product3.png"],
      others: ["images/others-card1.jpg", "images/others-card2.jpg", "images/others-card3.jpg"],
    };

    document.querySelectorAll(".card-container .card").forEach((card, index) => {
      const subDiv = card.querySelector(".card-1-sub-div-1");
      subDiv.style.backgroundImage = `url(${images[category][index]})`;
    });
  }

  function applyCoursesOrProductsStyles(category) {
    console.log("Applying styles for category:", category); // Verify function execution
    const rectangle = document.querySelector(".rectangle");
    const navbarButtonsHome = document.querySelector(".navbar-buttons-home");
    const cardContainer = document.querySelector(".card-container");
    const form = document.querySelector(".form"); // Ensure this matches the HTML class

    console.log("Form element:", form); // Verify form selection

    if (rectangle) {
      rectangle.classList.add("courses-rectangle");
    }

    if (navbarButtonsHome) {
      navbarButtonsHome.classList.add("courses-navbar-buttons");
    }

    // Apply the CSS classes for "courses" category
    if (category === "courses" && cardContainer) {
      cardContainer.classList.add("courses-card-container");
      cardContainer.classList.add("hide-third-card");

      // Apply the class for card styling
      document.querySelectorAll(".card-container .card").forEach((card) => {
        card.classList.add("courses-card");
      });
    }

    // Apply the .form-highlight class to form in the courses or products section
    if (form) {
      console.log("Applying form-highlight class"); // Debug statement
      if (category === "courses" || category === "products") {
        form.classList.add("form-highlight");
      }
    }
  }

  function applyOthersStyles() {
    console.log("Applying styles for others category"); // Verify function execution
    const rectangle = document.querySelector(".rectangle");
    const navbarButtonsHome = document.querySelector(".navbar-buttons-home");
    const form = document.querySelector(".form");

    if (rectangle) {
      rectangle.classList.add("more-rectangle");
    }

    if (navbarButtonsHome) {
      navbarButtonsHome.classList.add("more-navbar");
    }

    // Update the form styles for "others" category
    if (form) {
      form.classList.add("more-form-highlight");
    }
  }

  function removeCoursesOrProductsStyles() {
    console.log("Removing styles"); // Verify function execution
    const rectangle = document.querySelector(".rectangle");
    const navbarButtonsHome = document.querySelector(".navbar-buttons-home");
    const cardContainer = document.querySelector(".card-container");
    const form = document.querySelector(".form"); // Select the form element

    if (rectangle) {
      rectangle.classList.remove("courses-rectangle");
      rectangle.classList.remove("more-rectangle"); // Remove more-rectangle class
    }

    if (navbarButtonsHome) {
      navbarButtonsHome.classList.remove("courses-navbar-buttons");
      navbarButtonsHome.classList.remove("more-navbar"); // Remove more-navbar class
    }

    // Remove the classes and reset styles
    if (cardContainer) {
      cardContainer.classList.remove("courses-card-container");
      cardContainer.classList.remove("hide-third-card");

      document.querySelectorAll(".card-container .card").forEach((card) => {
        card.classList.remove("courses-card");
      });

      // Reset to original margin-left value
      // Show the third card
      document.querySelector(".card-container .card:nth-child(3)").style.display = "block";
      // Reset flex properties
      cardContainer.style.display = "";
      cardContainer.style.flexWrap = "";
      // Reset border color and width of all cards
      document.querySelectorAll(".card-container .card").forEach((card) => {
        card.style.borderColor = ""; // Reset to original border color
        card.style.width = ""; // Reset to original width
      });
      // Reset height of .card-1-div for other categories
      document.querySelectorAll(".card-1-div").forEach((cardDiv) => {
        cardDiv.style.height = ""; // Reset to original height
      });
      // Reset width and height of .card-1-sub-div-1 for other categories
      document.querySelectorAll(".card-1-sub-div-1").forEach((subDiv) => {
        subDiv.style.width = ""; // Reset to original width
        subDiv.style.height = ""; // Reset to original height
      });
      // Remove the .form-highlight class from the form for other categories
      if (form) {
        form.classList.remove("form-highlight");
      }
    }
  }
});
