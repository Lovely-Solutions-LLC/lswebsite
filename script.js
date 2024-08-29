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
    this.innerHTML = `<form class="form" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="532365eb-767a-41a5-9e39-f91173489f7d">
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
      <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

</form>
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
        <p><a href="./legal.html">Privacy Policy</a></p>
        <p><a href="./legal.html#terms">Terms of Service</a></p>

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
class SpecialApps extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="card-main-container">
      <div class="card-container">
        <!-- starting of card - 1 of apps section -->
        <div class="card card-1" id="card-1-image">
          <div class="card-1-div">
            <div class="card-1-sub-div-1"></div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <p>
              Status Label Directory (SLD) is a powerful tool designed to
              streamline standard operating procedure (SOP) documentation and
              enhance workflow management within monday.com. Tailored for teams
              seeking to optimize their processes and improve productivity, SLD
              offers a centralized hub where users can organize, document, and
              track SOPs associated with status labels in their monday.com
              boards. Features and Benefits: Effortless Organization
              :white_check_mark: - Easily list out labels of all status columns
              in a board in a separate board view, providing a comprehensive
              overview of workflow statuses and associated procedures.
              Customizable Notes and Links :white_check_mark: - Add detailed
              notes and links to each status label, enabling users to document
              specific actions, instructions, or references related to
              individual labels. Training and Onboarding Support
              :white_check_mark: - Facilitate training and onboarding processes
              by providing new team members with quick access to SOP
              documentation directly within the monday.com platform. Increased
              Efficiency :white_check_mark: - Save time and reduce errors by
              standardizing SOP documentation and providing clear guidance on
              workflow procedures, ensuring consistency and accuracy across
              teams. Improved Collaboration :white_check_mark: - Foster
              collaboration and knowledge sharing among team members by
              centralizing SOP documentation and enabling collaborative editing
              and feedback. Examples of Use Cases: A marketing team uses SLD to
              document standard procedures for campaign status updates,
              including specific tasks, timelines, and resource requirements. A
              project management team utilizes SLD to outline SOPs for project
              milestones, providing detailed instructions and links to relevant
              project documents and resources. A human resources department
              leverages SLD to enhance onboarding procedures for new employees.
              Questions? Book a demo!
            </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>
        <!-- Ending of card - 1 of apps section -->
        <!-- starting of card - 2 of apps section -->
        <div class="card card-1" id="card-1-image">
          <div class="card-1-div">
            <div class="card-1-sub-div-1"></div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <p>
              Status Label Directory (SLD) is a powerful tool designed to
              streamline standard operating procedure (SOP) documentation and
              enhance workflow management within monday.com. Tailored for teams
              seeking to optimize their processes and improve productivity, SLD
              offers a centralized hub where users can organize, document, and
              track SOPs associated with status labels in their monday.com
              boards. Features and Benefits: Effortless Organization
              :white_check_mark: - Easily list out labels of all status columns
              in a board in a separate board view, providing a comprehensive
              overview of workflow statuses and associated procedures.
              Customizable Notes and Links :white_check_mark: - Add detailed
              notes and links to each status label, enabling users to document
              specific actions, instructions, or references related to
              individual labels. Training and Onboarding Support
              :white_check_mark: - Facilitate training and onboarding processes
              by providing new team members with quick access to SOP
              documentation directly within the monday.com platform. Increased
              Efficiency :white_check_mark: - Save time and reduce errors by
              standardizing SOP documentation and providing clear guidance on
              workflow procedures, ensuring consistency and accuracy across
              teams. Improved Collaboration :white_check_mark: - Foster
              collaboration and knowledge sharing among team members by
              centralizing SOP documentation and enabling collaborative editing
              and feedback. Examples of Use Cases: A marketing team uses SLD to
              document standard procedures for campaign status updates,
              including specific tasks, timelines, and resource requirements. A
              project management team utilizes SLD to outline SOPs for project
              milestones, providing detailed instructions and links to relevant
              project documents and resources. A human resources department
              leverages SLD to enhance onboarding procedures for new employees.
              Questions? Book a demo!
            </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>
        <!-- Ending of card - 2 of apps section -->
        <!-- starting of card - 3 of apps section -->
        <div class="card card-2" id="card-2-image">
          <div class="card-1-div">
            <div class="card-1-sub-div-1"></div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <p>
              Status Label Directory (SLD) is a powerful tool designed to
              streamline standard operating procedure (SOP) documentation and
              enhance workflow management within monday.com. Tailored for teams
              seeking to optimize their processes and improve productivity, SLD
              offers a centralized hub where users can organize, document, and
              track SOPs associated with status labels in their monday.com
              boards. Features and Benefits: Effortless Organization
              :white_check_mark: - Easily list out labels of all status columns
              in a board in a separate board view, providing a comprehensive
              overview of workflow statuses and associated procedures.
              Customizable Notes and Links :white_check_mark: - Add detailed
              notes and links to each status label, enabling users to document
              specific actions, instructions, or references related to
              individual labels. Training and Onboarding Support
              :white_check_mark: - Facilitate training and onboarding processes
              by providing new team members with quick access to SOP
              documentation directly within the monday.com platform. Increased
              Efficiency :white_check_mark: - Save time and reduce errors by
              standardizing SOP documentation and providing clear guidance on
              workflow procedures, ensuring consistency and accuracy across
              teams. Improved Collaboration :white_check_mark: - Foster
              collaboration and knowledge sharing among team members by
              centralizing SOP documentation and enabling collaborative editing
              and feedback. Examples of Use Cases: A marketing team uses SLD to
              document standard procedures for campaign status updates,
              including specific tasks, timelines, and resource requirements. A
              project management team utilizes SLD to outline SOPs for project
              milestones, providing detailed instructions and links to relevant
              project documents and resources. A human resources department
              leverages SLD to enhance onboarding procedures for new employees.
              Questions? Book a demo!
            </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>
        <!-- Ending of card - 3 of apps section -->
      </div>
    </div>

`;
  }
}
class SpecialCourses extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="card-main-container-courses">
      <div class="card-container-courses courses-card-container hide-third-card">
        <!-- Card 1 -->
        <div class="card card-1 courses-card" id="card-1-image">
          <div class="card-1-div">
            <div class="courses-1-sub-div-1">
            </div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <p> Status Label Directory (SLD) is a powerful tool designed to
              streamline standard operating procedure (SOP) documentation and
              enhance workflow management within monday.com. Tailored for teams
              seeking to optimize their processes and improve productivity, SLD
              offers a centralized hub where users can organize, document, and
              track SOPs associated with status labels in their monday.com
              boards. Features and Benefits: Effortless Organization
              :white_check_mark: - Easily list out labels of all status columns
              in a board in a separate board view, providing a comprehensive
              overview of workflow statuses and associated procedures.
              Customizable Notes and Links :white_check_mark: - Add detailed
              notes and links to each status label, enabling users to document
              specific actions, instructions, or references related to
              individual labels. Training and Onboarding Support
              :white_check_mark: - Facilitate training and onboarding processes
              by providing new team members with quick access to SOP
              documentation directly within the monday.com platform. Increased
              Efficiency :white_check_mark: - Save time and reduce errors by
              standardizing SOP documentation and providing clear guidance on
              workflow procedures, ensuring consistency and accuracy across
              teams. Improved Collaboration :white_check_mark: - Foster
              collaboration and knowledge sharing among team members by
              centralizing SOP documentation and enabling collaborative editing
              and feedback. Examples of Use Cases: A marketing team uses SLD to
              document standard procedures for campaign status updates,
              including specific tasks, timelines, and resource requirements. A
              project management team utilizes SLD to outline SOPs for project
              milestones, providing detailed instructions and links to relevant
              project documents and resources. A human resources department
              leverages SLD to enhance onboarding procedures for new employees.
              Questions? Book a demo! </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>
        <!-- Card 1 - end -->
        <!-- Card 2 -->
        <div class="card card-2 courses-card" id="card-2-image">
          <div class="card-1-div">
            <div class="courses-1-sub-div-1"></div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <p> Status Label Directory (SLD) is a powerful tool designed to
              streamline standard operating procedure (SOP) documentation and
              enhance workflow management within monday.com. Tailored for teams
              seeking to optimize their processes and improve productivity, SLD
              offers a centralized hub where users can organize, document, and
              track SOPs associated with status labels in their monday.com
              boards. Features and Benefits: Effortless Organization
              :white_check_mark: - Easily list out labels of all status columns
              in a board in a separate board view, providing a comprehensive
              overview of workflow statuses and associated procedures.
              Customizable Notes and Links :white_check_mark: - Add detailed
              notes and links to each status label, enabling users to document
              specific actions, instructions, or references related to
              individual labels. Training and Onboarding Support
              :white_check_mark: - Facilitate training and onboarding processes
              by providing new team members with quick access to SOP
              documentation directly within the monday.com platform. Increased
              Efficiency :white_check_mark: - Save time and reduce errors by
              standardizing SOP documentation and providing clear guidance on
              workflow procedures, ensuring consistency and accuracy across
              teams. Improved Collaboration :white_check_mark: - Foster
              collaboration and knowledge sharing among team members by
              centralizing SOP documentation and enabling collaborative editing
              and feedback. Examples of Use Cases: A marketing team uses SLD to
              document standard procedures for campaign status updates,
              including specific tasks, timelines, and resource requirements. A
              project management team utilizes SLD to outline SOPs for project
              milestones, providing detailed instructions and links to relevant
              project documents and resources. A human resources department
              leverages SLD to enhance onboarding procedures for new employees.
              Questions? Book a demo!</p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>
        <!--card 2 -end -->
      </div>
    </div>
    `;
  }
}

class SpecialOthers extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="card-main-container">
      <div class="card-container">
      <!-- Starting of card - 1 of Others section -->
        <div class="card card-1" id="card-2-image">
          <div class="card-1-div">
            <div class="others-1-sub-div-1"></div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <p>
              Status Label Directory (SLD) is a powerful tool designed to
              streamline standard operating procedure (SOP) documentation and
              enhance workflow management within monday.com. Tailored for teams
              seeking to optimize their processes and improve productivity, SLD
              offers a centralized hub where users can organize, document, and
              track SOPs associated with status labels in their monday.com
              boards. Features and Benefits: Effortless Organization
              :white_check_mark: - Easily list out labels of all status columns
              in a board in a separate board view, providing a comprehensive
              overview of workflow statuses and associated procedures.
              Customizable Notes and Links :white_check_mark: - Add detailed
              notes and links to each status label, enabling users to document
              specific actions, instructions, or references related to
              individual labels. Training and Onboarding Support
              :white_check_mark: - Facilitate training and onboarding processes
              by providing new team members with quick access to SOP
              documentation directly within the monday.com platform. Increased
              Efficiency :white_check_mark: - Save time and reduce errors by
              standardizing SOP documentation and providing clear guidance on
              workflow procedures, ensuring consistency and accuracy across
              teams. Improved Collaboration :white_check_mark: - Foster
              collaboration and knowledge sharing among team members by
              centralizing SOP documentation and enabling collaborative editing
              and feedback. Examples of Use Cases: A marketing team uses SLD to
              document standard procedures for campaign status updates,
              including specific tasks, timelines, and resource requirements. A
              project management team utilizes SLD to outline SOPs for project
              milestones, providing detailed instructions and links to relevant
              project documents and resources. A human resources department
              leverages SLD to enhance onboarding procedures for new employees.
              Questions? Book a demo!
            </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>
        <!-- Ending of card - 1 of Others section -->
        <!-- Starting of card - 2 of Others section -->
        <div class="card card-2" id="card-3-image">
          <div class="card-1-div">
            <div class="others-1-sub-div-1"></div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <p>
              Status Label Directory (SLD) is a powerful tool designed to
              streamline standard operating procedure (SOP) documentation and
              enhance workflow management within monday.com. Tailored for teams
              seeking to optimize their processes and improve productivity, SLD
              offers a centralized hub where users can organize, document, and
              track SOPs associated with status labels in their monday.com
              boards. Features and Benefits: Effortless Organization
              :white_check_mark: - Easily list out labels of all status columns
              in a board in a separate board view, providing a comprehensive
              overview of workflow statuses and associated procedures.
              Customizable Notes and Links :white_check_mark: - Add detailed
              notes and links to each status label, enabling users to document
              specific actions, instructions, or references related to
              individual labels. Training and Onboarding Support
              :white_check_mark: - Facilitate training and onboarding processes
              by providing new team members with quick access to SOP
              documentation directly within the monday.com platform. Increased
              Efficiency :white_check_mark: - Save time and reduce errors by
              standardizing SOP documentation and providing clear guidance on
              workflow procedures, ensuring consistency and accuracy across
              teams. Improved Collaboration :white_check_mark: - Foster
              collaboration and knowledge sharing among team members by
              centralizing SOP documentation and enabling collaborative editing
              and feedback. Examples of Use Cases: A marketing team uses SLD to
              document standard procedures for campaign status updates,
              including specific tasks, timelines, and resource requirements. A
              project management team utilizes SLD to outline SOPs for project
              milestones, providing detailed instructions and links to relevant
              project documents and resources. A human resources department
              leverages SLD to enhance onboarding procedures for new employees.
              Questions? Book a demo!
            </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>
        <!-- Ending of card - 2 of Others section -->
        <!-- Starting of card - 3 of Others section -->
        <div class="card card-3" id="card-3-image">
          <div class="card-1-div">
            <div class="others-1-sub-div-1"></div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <p>
              Status Label Directory (SLD) is a powerful tool designed to
              streamline standard operating procedure (SOP) documentation and
              enhance workflow management within monday.com. Tailored for teams
              seeking to optimize their processes and improve productivity, SLD
              offers a centralized hub where users can organize, document, and
              track SOPs associated with status labels in their monday.com
              boards. Features and Benefits: Effortless Organization
              :white_check_mark: - Easily list out labels of all status columns
              in a board in a separate board view, providing a comprehensive
              overview of workflow statuses and associated procedures.
              Customizable Notes and Links :white_check_mark: - Add detailed
              notes and links to each status label, enabling users to document
              specific actions, instructions, or references related to
              individual labels. Training and Onboarding Support
              :white_check_mark: - Facilitate training and onboarding processes
              by providing new team members with quick access to SOP
              documentation directly within the monday.com platform. Increased
              Efficiency :white_check_mark: - Save time and reduce errors by
              standardizing SOP documentation and providing clear guidance on
              workflow procedures, ensuring consistency and accuracy across
              teams. Improved Collaboration :white_check_mark: - Foster
              collaboration and knowledge sharing among team members by
              centralizing SOP documentation and enabling collaborative editing
              and feedback. Examples of Use Cases: A marketing team uses SLD to
              document standard procedures for campaign status updates,
              including specific tasks, timelines, and resource requirements. A
              project management team utilizes SLD to outline SOPs for project
              milestones, providing detailed instructions and links to relevant
              project documents and resources. A human resources department
              leverages SLD to enhance onboarding procedures for new employees.
              Questions? Book a demo!
            </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>
        <!-- Ending of card - 3 of Oters section -->
      </div>
    </div>

`;
  }
}
customElements.define("special-header", Specialheader);
customElements.define("special-brand", Specialbrand);
customElements.define("special-form", Specialform);
customElements.define("special-footer", Specialfooter);
customElements.define("special-apps", SpecialApps);
customElements.define("special-courses", SpecialCourses);
customElements.define("special-others", SpecialOthers);

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
  const transitionColors = {
    "apps-to-courses": {
      currentPageColor: "rgba(234, 40, 40, 0.25)",
      secondPageColor: "rgba(234, 40, 40, 0.25)",
    },
    "courses-to-others": {
      currentPageColor: "rgba(255, 0, 199, 0.25)",
      secondPageColor: "rgba(255, 0, 199, 0.25)",
    },
  };

  function updateBackgroundColors(categoryTransition) {
    const colors = transitionColors[categoryTransition];
    if (!colors) return;

    document.querySelectorAll(".current-page").forEach((el) => {
      el.style.backgroundColor = colors.currentPageColor;
    });

    document.querySelectorAll(".second-page-current-page").forEach((el) => {
      el.style.backgroundColor = colors.secondPageColor;
    });
  }

  function updateVisibility(category) {
    document
      .querySelectorAll(".special-apps, .special-courses, .special-others")
      .forEach((el) => {
        el.style.display = "none";
      });

    if (category === "apps") {
      document.querySelectorAll(".special-apps").forEach((el) => {
        el.style.display = "block";
      });
    } else if (category === "courses") {
      document.querySelectorAll(".special-courses").forEach((el) => {
        el.style.display = "block";
      });
    } else if (category === "others") {
      document.querySelectorAll(".special-others").forEach((el) => {
        el.style.display = "block";
      });
    }
  }

  function applySectionClasses(section) {
    // Reset all classes
    document
      .querySelector(".navbar-buttons-home")
      ?.classList.remove("more-navbar");
    document.querySelector(".rectangle")?.classList.remove("more-rectangle");
    document.querySelector(".form")?.classList.remove("more-form-highlight");

    if (section === "others") {
      document
        .querySelector(".navbar-buttons-home")
        ?.classList.add("more-navbar");
      document.querySelector(".rectangle")?.classList.add("more-rectangle");
      document.querySelector(".form")?.classList.add("more-form-highlight");
    }
  }

  function changeCardImages(category) {
    const images = {
      apps: [
        "images/UTLogo1.png",
        "images/sld.png",
        "images/fbe.png",
        "images/course-1.png",
      ],
      courses: [
        "images/course-1.png",
        "images/course-2.png",
        "images/course-3.png",
      ],
      others: [
        "images/others-1.png",
        "images/others-2.png",
        "images/others-3.png",
      ],
    };

    let cardSelector;
    let subDivClass;

    if (category === "apps") {
      cardSelector = ".special-apps .card";
      subDivClass = ".card-1-sub-div-1";
    } else if (category === "courses") {
      cardSelector = ".special-courses .card";
      subDivClass = ".courses-1-sub-div-1";
    } else if (category === "others") {
      cardSelector = ".special-others .card";
      subDivClass = ".others-1-sub-div-1";
    }

    document.querySelectorAll(cardSelector).forEach((card, index) => {
      const subDiv = card.querySelector(subDivClass);
      const categoryImages = images[category];

      if (subDiv && categoryImages && categoryImages[index]) {
        subDiv.style.backgroundImage = `url(${categoryImages[index]})`;
        subDiv.style.backgroundSize = "cover";
        subDiv.style.backgroundPosition = "center";
        subDiv.style.display = "block"; // Ensure the image div is displayed
      } else if (subDiv) {
        subDiv.style.backgroundImage = ""; // Clear any background image if no match
      }
    });
  }

  function setActiveCategory(category) {
    document.querySelectorAll(".second-page-first-list li").forEach((el) => {
      el.classList.remove("second-page-current-page");
    });

    const categoryElement = document.getElementById(`category-${category}`);
    if (categoryElement) {
      categoryElement.classList.add("second-page-current-page");
    }

    updateVisibility(category);
    changeCardImages(category);

    if (category === "courses") {
      updateBackgroundColors("apps-to-courses");
    } else if (category === "others") {
      updateBackgroundColors("courses-to-others");
    }

    applySectionClasses(category);
  }

  function changeCategory(category) {
    localStorage.setItem("selectedCategory", category);
    location.reload();
  }

  // Initialize with the selected category
  const selectedCategory = localStorage.getItem("selectedCategory") || "apps";
  setActiveCategory(selectedCategory);
  localStorage.removeItem("selectedCategory");

  document
    .getElementById("category-others")
    ?.addEventListener("click", () => changeCategory("others"));
  document
    .getElementById("category-apps")
    ?.addEventListener("click", () => changeCategory("apps"));
  document
    .getElementById("category-courses")
    ?.addEventListener("click", () => changeCategory("courses"));
});
