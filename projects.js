// class ProjectItem extends HTMLElement {
//   constructor() {
//     super();

//     // Create a shadow root
//     const shadow = this.attachShadow({ mode: "open" });

//     // Create elements
//     const container = document.createElement("div");
//     container.setAttribute("class", "project-item");

//     const header = document.createElement("div");
//     header.setAttribute("class", "project-item-header");

//     const titleElement = document.createElement(
//       this.hasAttribute("title-link") ? "a" : "h2"
//     );
//     titleElement.setAttribute("class", "project-title");
//     if (this.hasAttribute("title-link")) {
//       titleElement.setAttribute("href", this.getAttribute("title-link"));
//       titleElement.textContent = this.getAttribute("title");
//     } else {
//       titleElement.textContent = this.getAttribute("title");
//     }

//     const yearElement = document.createElement("p");
//     yearElement.setAttribute("class", "project-year");
//     yearElement.textContent = this.getAttribute("year");

//     header.appendChild(titleElement);
//     header.appendChild(yearElement);

//     if (this.hasAttribute("subtitle")) {
//       const subHeader = document.createElement("div");
//       subHeader.setAttribute("class", "project-item-subheader");

//       const iconLink = document.createElement("a");
//       iconLink.setAttribute("href", this.getAttribute("icon-link"));
//       const icon = document.createElement("img");
//       icon.setAttribute("src", this.getAttribute("icon"));
//       icon.setAttribute("alt", this.getAttribute("title") + " icon");
//       icon.setAttribute("width", "40px");
//       iconLink.appendChild(icon);

//       const subTitleContainer = document.createElement("div");
//       const subTitleLink = document.createElement("a");
//       subTitleLink.setAttribute("href", this.getAttribute("subtitle-link"));
//       const subTitleElement = document.createElement("h3");
//       subTitleElement.setAttribute("class", "project-subtitle");
//       subTitleElement.textContent = this.getAttribute("subtitle");
//       subTitleLink.appendChild(subTitleElement);
//       subTitleContainer.appendChild(subTitleLink);

//       subHeader.appendChild(iconLink);
//       subHeader.appendChild(subTitleContainer);

//       header.insertBefore(subHeader, yearElement);
//     }

//     const descriptionElement = document.createElement("p");
//     descriptionElement.setAttribute("id", "project-description");
//     descriptionElement.innerHTML = this.getAttribute("description");

//     container.appendChild(header);
//     container.appendChild(descriptionElement);

//     // Link external styles
//     const linkElem = document.createElement("link");
//     linkElem.setAttribute("rel", "stylesheet");
//     linkElem.setAttribute("href", "styles.css");

//     // Attach the created elements to the shadow DOM
//     shadow.appendChild(linkElem);
//     shadow.appendChild(container);
//   }
// }

// // Define the new element
// customElements.define("project-item", ProjectItem);
