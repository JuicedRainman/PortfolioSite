window.addEventListener("load", () => {

    // eerste server test
    console.info('testing server');

    fetch("http://localhost:5000/api")
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").innerText = data.message;
        })
        .catch(error => {
            console.error("Fout bij de eerste connectie:", error);
            document.getElementById("message").innerText = "Fout bij laden van gegevens.";
        });


    // Test Database skills

    fetch("http://localhost:5000/skills")
        .then(response => response.json())
        .then(data => {
            console.log('dataRetrieved', data);
        })
        .catch(error => {
            console.error("Fout bij ophalen van skil data:", error);
            document.getElementById("message").innerText = "Fout bij laden van gegevens.";
        });
    
        fetch("http://localhost:5000/api")

    fetch("http://localhost:5000/skills")
        .then(response => response.json())
        .then(data => {
            let html = `<ul>`
            for(let i = 0; i < data.length; i++) {
                html += `<li>${data[i].naam} - ${data[i].level} - ${data[i].category}`
            }
            document.getElementById("message").innerHTML = html + `</ul>`;
        })
        .catch(error => {
            console.error("Fout bij ophalen van skill data:", error);
            document.getElementById("message").innerText = "Fout bij het laden van gegevens.";
        });
});

    // Throw projects into website from db "projects"