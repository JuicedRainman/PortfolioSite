window.addEventListener("load", () => {


    //progresswidth calculating for the progers bar on the skills cards
    // eerste server test
    console.info('testing server');

    fetch("http://localhost:5000/api")
        .then(response => response.json())
        .then(data => {
            document.getElementById("skills").innerText = data.message;
        })
        .catch(error => {
            console.error("Fout bij de eerste connectie:", error);
            document.getElementById("skills").innerText = "Fout bij laden van gegevens.";
        });


    // Test Database skills

    fetch("http://localhost:5000/skills")
        .then(response => response.json())
        .then(data => {
            console.log("Skills retrieved:", data);
            let html = `<div class="skillcontainer">`;
            data.forEach(skill => {
                html += `
                <div class="skillcards">
                    <h3>${skill.name}</h3>
                    <p>Level: ${skill.level}</p>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: ${progressWidth}%;"></div>
                    </div>
                    <p>Category: ${skill.category}</p>
                </div>`;
            });
            document.getElementById("skills").innerHTML = html + `</div>`;
        })
        .catch(error => {
            console.error("Fout bij ophalen van skill data:", error);
            document.getElementById("skills").innerText = "Fout bij laden van skills.";
        });


    // Throw projects into website from collection "projects"
    fetch("http://localhost:5000/projects")
        .then(response => response.json())
        .then(data =>  {
            console.log("Projects retrieved:", data);
            let html = `<div class="projectcontainer">`;
            data.forEach(project => {
                html +=
                `<div class="projectcards">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.repoUrl}" target="_blank"><img src="img/gh-logo.png"></a>
                </div>`;
            });
            document.getElementById("projects").innerHTML = html + `</div>`;
        })
        .catch(error => {
            console.error("Fout bij ophalen van projecten:", error);
            document.getElementById("projects").innerText = "Fout bij laden van projecten";
        });
});