function back() {
    window.location.href = "../index.html"
}

const projects = [
    {
        id:1,
        name: "placeholder 1",
        description: "wadhawjwjadhjkawhjdhkawjhdkjhwashduiwhaduaw"
    },
    {
        id:2,
        name: "placeholder 2",
        description: "awdawudhauiwhduiawhuidhuawduiawiudhjiawjdioawiodjhioawhdioawh"
    },
];

function renderProjects() {
    const projectsContainer = document.getElementById("containerArea")

    let projectsHTML = "";
    
    for (let i=0; i < projects.length; i++) {
        const project = projects[i];
        
        projectsHTML += `
        <div class="card" id="card" style="width: 18rem;">
              <img class="card-img-top" src="" alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${project.name}</h5>
                  <p class="card-text">${project.description}</p>
                  <button>Edit</button>
                  <button>Delete</button>
              </div>
            </div>`
    }
    projectsContainer.innerHTML = projectsHTML
}

renderProjects();

const form = document.getElementById("myProjectForm")

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("projectName").value;
    const description = document.getElementById("projectDescription").value;

    const newProject = {
        id: projects.length +1,
        name: name,
        description: description,
    }

    projects.push(newProject);
    renderProjects();
})