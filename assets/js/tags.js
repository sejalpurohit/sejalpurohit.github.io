const colorSchemes = {
  // terminologies & concepts
  rest: { color: "#000", bgColor: "#f89820" },
  serverless: { color: "#fff", bgColor: "#f89820" },
  static_site_generator: { color: "#fff", bgColor: "#f89820" },
  web_components: { color: "#fff", bgColor: "#f89820" },
  // languages
  html: { color: "#fff", bgColor: "#f16529" },
  css: { color: "#fff", bgColor: "#2965f1" },
  javascript: { color: "#f0db4f", bgColor: "#f7df1e" },
  js: { color: "#000", bgColor: "#f7df1e" },
  python: { color: "#000", bgColor: "#ffe873" },
  java: { color: "#000", bgColor: "#f89820" },
  cpp: { color: "#00599c", bgColor: "#00599c" },
  c: { color: "#00599c", bgColor: "#00599c" },
  dart: { color: "#02569b", bgColor: "#02569b" },
  php: { color: "#000", bgColor: "#8993be" },
  //   stacks
  mevn: { color: "#fff", bgColor: "#00d1b2" },
  mern: { color: "#fff", bgColor: "#00d1b2" },
  mean: { color: "#fff", bgColor: "#00d1b2" },
  // web dev
  pwa: { color: "#000", bgColor: "#5ebeff" },
  react: { color: "#000", bgColor: "#00d8ff" },
  nodejs: { color: "#fff", bgColor: "#026e00" },
  express: { color: "#000", bgColor: "#fff" },
  django: { color: "#0c4b33", bgColor: "#0c4b33" },
  flask: { color: "#fff", bgColor: "#000" },
  svelte: { color: "#fff", bgColor: "#ff3e00" },
  web_extensions: { color: "#000", bgColor: "lawngreen" },
  bootstrap: { color: "#fff", bgColor: "#7952b3" },
  bulma: { color: "#fff", bgColor: "#00d1b2" },
  jquery: { color: "#fff", bgColor: "#0769ad" },
  particlesjs: { color: "#333", bgColor: "#ccc" },
  swiffy_slider: { color: "#fff", bgColor: "#000" },
  wordpress: { color: "#fff", bgColor: "#21759b" },
  jekyll: { color: "#fff", bgColor: "#cc0000" },
  // mobile dev
  flutter: { color: "#fff", bgColor: "#027cff" },
  dart: { color: "#fff", bgColor: "#027cff" },
  // pc frameworks
  electron: { color: "#fff", bgColor: "#47848f" },
  swing: { color: "#fff", bgColor: "#47848f" },
  //   automation frameworks
  selenium: { color: "#fff", bgColor: "#47848f" },
  puppeteer: { color: "#fff", bgColor: "#47848f" },
  // cloud
  aws: { color: "#ff9900", bgColor: "#ff9900" },
  amazon_web_services: { color: "#ff9900", bgColor: "#ff9900" },
  gcp: { color: "#fff", bgColor: "#4285f4" },
  google_cloud: { color: "#fff", bgColor: "#4285f4" },
  azure: { color: "#0089d6", bgColor: "#0089d6" },
  heroku: { color: "#fff", bgColor: "#430098" },
  render: { color: "#fff", bgColor: "#f24c4e" },
  netlify: { color: "#fff", bgColor: "#00c7b7" },
  vercel: { color: "#fff", bgColor: "#000000" },
  github_pages: { color: "#fff", bgColor: "#4078c0" },
  // tools & clis
  pypi: { color: "#fff", bgColor: "#3775a9" },
  git: { color: "#f34f29", bgColor: "#f34f29" },
  github: { color: "#4078c0", bgColor: "#4078c0" },
  // devops
  docker: { color: "#fff", bgColor: "#0db7ed" },
  kubernetes: { color: "#fff", bgColor: "#326ce5" },
  github_actions: { color: "#fff", bgColor: "#2088ff" },
  // data science
  tensorflow: { color: "#ffffff", bgColor: "#ff6f00" },
  pytorch: { color: "#ffffff", bgColor: "#ee4c2c" },
  scikit_learn: { color: "#ffffff", bgColor: "#f7931e" },
  keras: { color: "#ffffff", bgColor: "#d00000" },
  pandas: { color: "#ffffff", bgColor: "#150458" },
  numpy: { color: "#ffffff", bgColor: "#013243" },
  nltk: { color: "#ffffff", bgColor: "#4bae8c" },
  opencv: { color: "#ffffff", bgColor: "#5c3ee8" },
  textblob: { color: "#000", bgColor: "#ffce00" },
  //   data visualization softwares
  tableau: { color: "#ffffff", bgColor: "#e97627" },
  powerbi: { color: "#ffffff", bgColor: "#f2c811" },
  // databases
  mongodb: { color: "#fff", bgColor: "#13aa52" },
  firebase: { color: "#f5820b", bgColor: "#f5820b" },
  mysql: { color: "#fff", bgColor: "#00758f" },
  postgresql: { color: "#fff", bgColor: "#336791" },
  sqlite: { color: "#fff", bgColor: "#003b57" },
  indexeddb: { color: "#fff", bgColor: "#003b57" },
  // os
  linux: { color: "#000", bgColor: "#f1bf00" },
  windows: { color: "#fff", bgColor: "#0078d6" },
  macos: { color: "#fff", bgColor: "#000000" },
  // rest apis
  github_rest_api: { color: "#fff", bgColor: "#4078c0" },
};

function generateTagColors() {
  const tags = document.querySelectorAll(".tag");
  tags.forEach((tag) => {
    let tagText = tag.innerText.toLowerCase();
    if (tagText.includes(" ")) {
      // replace spaces with empty string
      tagText = tagText.replace(/\s/g, "_");
    }
    const tagColor = colorSchemes[tagText];
    if (tagColor) {
      tag.style.color = tagColor.color;
      tag.style.backgroundColor = tagColor.bgColor;
    }
  });
}

generateTagColors();

// add .tags tp #tags

const tags = document.querySelectorAll(".tag");
const tagsContainer = document.querySelector("#tags");
tags.forEach((tag) => {
  //   only add tags if they are not already present
  if (!tagsContainer.innerHTML.includes(tag.innerHTML)) {
    tagsContainer.innerHTML += tag.outerHTML;
  }
});

// sort tags alphabetically in #tags

const tagsInTagsContainer = document.querySelectorAll("#tags .tag");
const tagsInTagsContainerArray = Array.from(tagsInTagsContainer);
tagsInTagsContainerArray.sort((a, b) => {
  if (a.innerText.toLowerCase() < b.innerText.toLowerCase()) {
    return -1;
  }
  if (a.innerText.toLowerCase() > b.innerText.toLowerCase()) {
    return 1;
  }
  return 0;
});

tagsContainer.innerHTML = "";
tagsInTagsContainerArray.forEach((tag) => {
  tagsContainer.innerHTML += tag.outerHTML;
});

// add ability to filter projects by tags

const tagsInTagsContainer2 = document.querySelectorAll("#tags .tag");
tagsInTagsContainer2.forEach((tag) => {
  tag.addEventListener("click", () => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      if (project.innerHTML.includes(tag.innerHTML)) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    });
    countProjects();
    toast(`Filtered by: ${tag.innerText}`, "success");
  });
});

// add a clear button to clear the filter

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.style.display = "flex";
  });
  countProjects();
  toast("Filter cleared", "success");
});

// utility function to count projects

function countProjects() {
  // only count projects that are visible
  const projects = document.querySelectorAll(
    ".project-list .project:not([style*='display: none'])"
  );
  const projectsCount = projects.length;
  const projectsCountText = document.querySelector("#projects-count");
  projectsCountText.innerText = `(${projectsCount})`;
}

countProjects();

// notifcation

function toast(message, type = "info") {
  const toast = document.createElement("div");
  switch (type) {
    case "success":
      toast.style.backgroundColor = "#4caf50";
      toast.style.color = "#fff";
      break;
    case "error":
      toast.style.backgroundColor = "#f44336";
      toast.style.color = "#fff";
      break;
    case "info":
      toast.style.backgroundColor = "#2196f3";
      toast.style.color = "#fff";
    default:
      break;
  }
  toast.classList.add("toast");
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 1000);
}
