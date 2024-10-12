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
    <div class="brands-heading-div"><h1 class="brands-heading">Trusted by organizations across the globe</h1></div>
      <div class="brands">
        <div class="brand-image-1"><img class="brand-images" src="images/image1.png" alt="" /></div>
        <div class="brand-image-2"><img class="brand-images" src="images/image2.png" alt="" /></div>
        <div class="brand-image-3"><img class="brand-images" src="images/image3.png" alt="" /></div>
        <div class="brand-image-4"><img class="brand-images" src="images/image4.png" alt="" /></div>
        <div class="brand-image-5"><img class="brand-images" src="images/image5.png" alt="" /></div>
        <div class="brand-image-6"><img class="brand-images" src="images/image6.png" alt="" /></div>
        
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
          with Lovely Solutions, LLC.
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
            placeholder="Let's talk!"
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
        Have an idea for something in the monday.com realm? <br>
        <br>
        We'll hear anyone out, and give credit where it's due!<br>
        <br>
        Let's talk!
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
 <div class=footer-first-container>
  <div class="footer-image">
    <div class="image-of-footer"></div>
  </div>
  <div class="simple-save-lovely">
    <div class="footer-first-para">
      <p>Simple. Save. Lovely</p>
    </div>
    <div class="footer-first-info">
      <div class="footer-first-info-second-div">
        <div class="footer-first-info-second-div-inside-div">
          <p>
            <a href="mailto:liam@lovelysolutions.co"> liam@lovelysolutions.co</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-third-div">
    <div class="footer-first-third-div">
      <div class="footer-sub-first">
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
      <p style="padding-top: 3px; padding-left: 1rem; color: #0a142f">
        © 2024 Lovely Solutions. All rights reserved.
      </p>
      <div class="footer-second-last-button">
      <div class="footer-second-button">
        <button id="scrollToTopButton1" class="arrow-second-last-button">
          <img src="images/Group.png" alt="Arrow" class="arrow-image" />
        </button>
      </div>
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

        <!-- Card 1 - Ultimate Team Productivity Tool -->
<div class="card card-1" id="card-1-image">
  <div class="card-1-div">
    <div class="card-1-sub-div-1">
      <img src="images/UTPT2.png" alt="Ultimate Team Productivity Tracker Icon" class="card-image" />
    </div>
    <div class="card-1-sub-div-2">
      <button class="card-1-button-1" data-url="https://auth.monday.com/oauth2/authorize?client_id=a3f28ab7dd101622eae66b04167d3bb1&response_type=install">
        Install Now
            <img src="images/Download.png" alt="" />
      </button>
    </div>
  </div>
  <div class="card-1-div-2 paragraph-container">
    <h3 class="card-heading">Ultimate Team Productivity Tool</h3>
    <p>
      Ultimate Team Productivity Tool is THE solution for teams using monday.com to track and optimize their activities across all boards with one simple interface.<br><br>
      Simple & Practical Key Features. No fluff, just pure value🚀 <br><br>
      ✅ Visualize team activity trends throughout the day/week/month.<br>
      -An operations manager uses daily trend charts to keep a pulse on team activity:<br>
      -"We're seeing a big dip in activity on Friday afternoons. Maybe we should start doing Friday half-days."<br>
      -"The team is most active at the start of the week. Let's schedule meetings around those productive times."<br><br>
      ✅ Keep a pulse on team activity with a glance at the hub.<br>
      -Last activity by user: "Everyone has had activity in the last 10 minutes. All hands are on deck!"<br>
      -"How busy are we today? Wow, 50% more activity today than yesterday. Maybe tomorrow is better for that meeting."<br><br>
      ✅ Spot Workload Imbalances & Bottlenecks Instantly.<br>
      -A sales manager sees that one rep has 4x the activity of others: "Are they getting all the leads? Or maybe it's time for a raise?"<br>
      -A project manager sees one project board getting all the attention: "Is that board the priority right now?"<br>
      -"John has been updating the same tasks all day—maybe he needs help."<br><br>
      ✅ Most Common Activities in Your Workflow.<br>
      -"30% of team activity this week is on creating items in the sprint board. Let's try to automate this step." <br>
      -"Updating column values on the Approvals board makes up 45% of our activity. Should we simplify that process?"<br><br>
      ✅ Monitor Task Ownership & Accountability.<br>
      -"I'm seeing that Mark hasn't updated his tasks in 3 days. Let's see if he's stuck."<br>
      -"David is the only one updating campaign tasks. What is the rest of the team working on?"<br><br>
      Get started today with the Ultimate Team Productivity Tracker. No fluff—just the insights you need!
    </p>
  </div>
  <button class="read-more-btn">
    <span class="btn-text">Read More</span>
  </button>
</div>


        <!-- Starting of card 2 - Status Label Descriptions -->
        <div class="card card-2" id="card-2-image">
          <div class="card-1-div">
            <div class="card-1-sub-div-1">
              <img src="images/sld.png" alt="Status Label Descriptions Icon" class="card-image" />
            </div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1" data-url="https://auth.monday.com/oauth2/authorize?client_id=8121f847511946b234f84f1933539685&response_type=install">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <h3 class="card-heading">Status Label Descriptions</h3>
            <p>
              Automatically organize & define status column labels in a list format!<br>
              Status Label Directory is a powerful tool designed to streamline standard operating procedure (SOP) documentation and enhance workflow management within monday.com. Tailored for teams seeking to optimize their processes and improve productivity, SLD offers a centralized hub where users can organize, document, and track SOPs associated with status labels in their monday.com boards.<br><br>
              Features and Benefits:<br>
              ✅ Effortless Organization - Easily list out labels of all status columns in a board in a separate board view, providing a comprehensive overview of workflow statuses and associated procedures.<br>
              ✅ Customizable Notes and Links - Add detailed notes and links to each status label, enabling users to document specific actions, instructions, or references related to individual labels.<br>
              ✅ Training and Onboarding Support - Facilitate training and onboarding processes by providing new team members with quick access to SOP documentation directly within the monday.com platform.<br>
              ✅ Increased Efficiency - Save time and reduce errors by standardizing SOP documentation and providing clear guidance on workflow procedures, ensuring consistency and accuracy across teams.<br>
              ✅ Improved Collaboration - Foster collaboration and knowledge sharing among team members by centralizing SOP documentation and enabling collaborative editing and feedback.<br><br>
              Examples of Use Cases:<br>
              A marketing team uses SLD to document standard procedures for campaign status updates, including specific tasks, timelines, and resource requirements.<br>
              A project management team utilizes SLD to outline SOPs for project milestones, providing detailed instructions and links to relevant project documents and resources.<br>
              A human resources department leverages SLD to enhance onboarding procedures for new employees.
            </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>

        <!-- Starting of card 3 - Update Templates -->
        <div class="card card-3" id="card-3-image">
          <div class="card-1-div">
            <div class="card-1-sub-div-1">
              <img src="images/UTLogo1.png" alt="Update Templates Icon" class="card-image" />
            </div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1" data-url="https://auth.monday.com/oauth2/authorize?client_id=fcd66ce926a909a32e80ba5346fd5b22&response_type=install">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <h3 class="card-heading">Update Templates</h3>
            <p>
              Create and store templates for frequently made updates in a close-by item view!<br><br>
              👥 Users can have their own templates, and also share with a collection available to all board members.<br><br>
              📋 Templates are stored with a "Copy to Clipboard" button right in view, which makes for easy copy and pasting of long, redundant updates.<br><br>
              📝 Instead of typing them out, copy them over from our item view into the updates section instantly!
            </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>

        <!-- Starting of card 4 - Facebook Embedded -->
        <div class="card card-4" id="card-4-image">
          <div class="card-1-div">
            <div class="card-1-sub-div-1">
              <img src="images/fbe.png" alt="Facebook Embedded Icon" class="card-image" />
            </div>
            <div class="card-1-sub-div-2">
              <button class="card-1-button-1" data-url="https://auth.monday.com/oauth2/authorize?client_id=cf3e474d48eee8a16da5552b1837c0c6&response_type=install">
                Install Now
                <img src="images/Download.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <h3 class="card-heading">Facebook Embedded</h3>
            <p>
              Embed Facebook posts seamlessly in monday.com!<br><br>
              Features and Benefits:<br>
              ✅ Streamlined Integration: Seamlessly integrate Facebook posts into your monday.com dashboards or board views with just a few clicks, eliminating the need for manual copying and pasting.<br><br>
              ✅ Real-Time Updates: Keep your team informed and up-to-date with the latest Facebook content, ensuring everyone has access to timely information and insights.<br><br>
              ✅ Customizable Display: Customize the appearance of embedded Facebook posts to match your monday.com workspace, including options for resizing, styling, and placement.<br><br>
              ✅ Enhanced Collaboration: Foster collaboration and engagement among team members by sharing and discussing Facebook posts directly within the context of your monday.com projects and workflows.<br><br>
              ✅ Centralized Workspace: Consolidate all relevant information and communication channels in one centralized workspace, reducing the need to switch between multiple platforms and applications.<br><br>
              Examples of Use Cases:<br>
              A marketing team uses embedded Facebook posts to monitor customer feedback and engagement metrics directly within their campaign management dashboard.<br>
              An event planning team embeds Facebook event pages into their monday.com board view to track RSVPs, event updates, and attendee interactions.<br>
              A sales team leverages embedded Facebook posts to stay informed about industry trends, competitor activities, and customer testimonials, facilitating more informed sales conversations.
            </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>
        
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
              <button class="card-1-button-1" data-url="https://www.udemy.com/course/monday-for-beginners/?referralCode=CA2E871F6E71C8119F1C">
                Enroll on
                                <img src="images/us2.png" alt="" />
              </button>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
          <h3 class-"card-heading">monday.com for Beginners: Taught by a Certified Expert</h3>
            <p> 
            Are you new to Monday and eager to learn how to make the most of this powerful WorkOS platform? Whether you're a solo entrepreneur, a team leader, or someone simply looking to get organized, this course is designed to help you master the basics and beyond.🚀 <br>

<br>
In this comprehensive course, you'll learn how to navigate Monday and understand everything that it has to offer. We'll dive into the essential components like workspaces, boards, groups, items, and subitems, so you can organize your data effectively. You'll also explore the powerful column options, board views, and dashboards that will help you visualize your work and keep your team on track. <br>
<br>
We'll also cover automations and workflows to save you time and reduce manual tasks, ensuring that you and your team can focus on what really matters. <br>
<br>
By the end of this course, you'll have the knowledge and confidence to work, build, and even teach others how to use Monday within your organization. So, if you're ready to get organized and maximize your productivity, join me in this course and let's get started on your journey to mastering Monday!</p>
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
              <button class="card-1-button-1" data-url="https://www.udemy.com/course/monday-sales-crm/?referralCode=9ECA1BC37F26D2093091">
                Enroll on
                  <img src="images/us2.png" alt="" />
              </button>
            </div>
          </div>
          <h3 class-"card-heading">monday Sales CRM for Beginners: Taught by a Certified Expert</h3>
          <div class="card-1-div-2 paragraph-container">
            <p> 
            Are you new to monday CRM and eager to learn how to manage your entire sales cycle using this powerful platform? Whether you're a solo entrepreneur, a sales manager, or part of a growing team, this course is designed to help you master the basics of monday CRM and optimize your sales processes. <br> <br>

In this comprehensive course, you'll learn how to navigate monday CRM and unlock all of its powerful features. We’ll explore how to manage your leads, track your deal flow, and create customizable dashboards that give you real-time visibility into your sales performance. You’ll also learn how to set up automations that keep your sales cycle moving smoothly without manual input, so nothing falls through the cracks. <br> <br>

In addition to the basics, I’ll share some extra features to help you take your CRM to the next level, including email integrations, customized sales stages, and how to create forms to capture leads from your website. <br> <br>

By the end of this course, you'll be able to confidently manage your sales pipeline, optimize your team’s productivity, and harness the full power of monday CRM. Join me, and let's get started on your journey to mastering the sales process with monday CRM! </p>
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
        <!-- Starting of the eBook card for Others section -->
        <div class="card card-1" id="card-1-image">
          <div class="card-1-div">
            <div class="card-1-sub-div-1">
              <img src="images/cover.png" alt="Digital eBook Cover" class="card-image" />
            </div>
            <div class="card-1-sub-div-2">
              <a href="/files/Building_Digital_Workflows.pdf" class="card-1-button-1" download>
                Download
                <img src="images/Download.png" alt="Download Icon" />
              </a>
            </div>
          </div>
          <div class="card-1-div-2 paragraph-container">
            <h3 class="card-heading">Building Digital Workflows</h3>
            <p>
              Get our free guide on essential workflow building principles. Unlock the principles that have helped dozens of companies build in any platform.
            </p>
          </div>
          <button class="read-more-btn">
            <span class="btn-text">Read More</span>
          </button>
        </div>
        <!-- Ending of eBook card for Others section -->
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

  // Scroll to top button 1 functionality
  if (scrollToTopButton1) {
    scrollToTopButton1.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.error("scrollToTopButton1 not found");
  }

  // Scroll to top button 2 functionality
  if (scrollToTopButton2) {
    console.log("scrollToTopButton2 found"); // Debugging: check if the button exists
    scrollToTopButton2.addEventListener("click", function () {
      console.log("scrollToTopButton2 clicked"); // Debugging: check if the button is clicked
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.error("scrollToTopButton2 not found");
  }
});

// Scroll to specific form functionality
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
    button.addEventListener("click", () => {
      const card = button.closest(".card"); // Get the closest card element
      const paragraphContainer = card.querySelector(".paragraph-container"); // Target the correct paragraph container
      const btnText = button.querySelector(".btn-text"); // Get the button text element

      // Ensure elements exist to prevent errors
      if (!btnText || !paragraphContainer) return;

      // Check if the paragraph container is expanded
      if (paragraphContainer.classList.contains("expanded")) {
        // Collapse: Remove expanded class and reset scroll
        paragraphContainer.classList.remove("expanded");
        paragraphContainer.scrollTop = 0; // Reset scroll position
        btnText.textContent = "Read More"; // Change button text

        // Scroll back to the card's top position smoothly
        card.scrollIntoView({ behavior: "smooth" });
      } else {
        // Expand: Add expanded class
        paragraphContainer.classList.add("expanded");
        btnText.textContent = "Show Less"; // Change button text

        // Scroll the card into view (for long content)
        card.scrollIntoView({ behavior: "smooth" });
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
        "images/cover.png",
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

document.addEventListener("DOMContentLoaded", function () {
  const installButtons = document.querySelectorAll(".card-1-button-1");

  installButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const url = button.getAttribute("data-url");
      if (url) {
        window.location.href = url;
      } else {
        console.error("URL not found for this button:", button);
      }
    });
  });
});
