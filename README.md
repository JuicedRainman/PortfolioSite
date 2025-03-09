# Inleiding
Ik heb 2 collections, db.skills en db.projects. Deze worden beide gevuld met data.

## Hoe het werkt
- De collectie skills wordt eenvoudig gevuld met de naam van de skill, en een getal op 10. Dit is redelijk simpel.

- De collectie projects is even simpel. Deze wordt gevuld met de naam van het project, een github url, en een beschrijving.

# Commando's

## Aanmaken collections

### skills collection
db.createCollection("skills")

### projects collection
db.createCollection("projects")

## Vullen van de collections

### vullen van projects
db.projects.insertMany([
    {
        name: "LLaMA-in-docker",
        repoUrl: "https://github.com/JuicedRainman/LLaMA-in-docker",
        description: "A docker compose which can be used to get LLaMA working in docker with nvidia gpu support, supported by chromaDB for RAG and OpenWebUI for the interface."
    },
    {
        name: "PortfolioSite",
        repoUrl: "https://github.com/JuicedRainman/PortfolioSite",
        description: "The repository for this website, my portfolio. Made with HTML, Javscript and MongoDB."
    },
    {
        name: "contactbook",
        repoUrl: "https://github.com/JuicedRainman/contactbook",
        description: "A contactbook made to see how far along my javascript skills were. Made with HTML + JS."
    },
        {
        name: "debian-essentials",
        repoUrl: "https://github.com/JuicedRainman/debian-essentials",
        description: "A simple script to install the bare essentials i use to get a (development) debian install quickly rolling. made with a Shell script."
    }
]);

### vullen van skills
db.skills.insertMany([
    {
        name: "HTML & CSS",
        level: 8,
        category: "Programming"
    },
    {
        name: "Javascript",
        level: 5,
        category: "Programming"
    },
    {
        name: "Python",
        level: 4,
        category: "Programming"
    },
    {
        name: "Git",
        level: 6,
        category: "Programming"
    },
    {
        name: "VM's",
        level: 7,
        category: "DevOps"
    },
    {
        name: "Docker",
        level: 7,
        category: "DevOps"
    },
    {
        name: "Computer Knowledge",
        level: 8,
        category: "Hardware"
    },
    {
        name: "Linux",
        level: 6,
        category: "Operating Systems"
    },
    {
        name: "Windows",
        level: 7,
        category: "Operating Systems"
    },
    {
        name: "Networking",
        level: 5,
        category: "Hardware"
    }
]);