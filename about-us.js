const officer1 = {
    name: "Brennan Demetris-Gauldin",
    position: "President",
    bio: "Brennan is a senior at UNC Charlotte",
    image: "res/placeholder-profile-picture.jpg"
}

const officer2 = {
    name: "Chet Allen",
    position: "Vice President",
    bio: "Chet is a sophomore at UNC Charlotte",
    image: "res/placeholder-profile-picture.jpg"
}

const officer3 = {
    name: "Nick Pekatos",
    position: "Treasurer",
    bio: "Nick is a freshman at UNC Charlotte",
    image: "res/placeholder-profile-picture.jpg"
}

let officers = [officer1, officer2, officer3];

const leftButton = document.getElementById("button-left");
const rightButton = document.getElementById("button-right");

const officerName = document.getElementById("officer-name");
const officerTitle = document.getElementById("officer-position");
const officerBio = document.getElementById("officer-bio");
const officerImg = document.getElementById("officer-image");

updateOfficer();

leftButton.addEventListener("click", () => {
    officers.unshift(officers.pop());
    updateOfficer();
});

rightButton.addEventListener("click", () => {
    officers.push(officers.shift());
    updateOfficer();
});

function updateOfficer() {
    officerName.innerText = officers[0].name;
    officerTitle.innerText = officers[0].position;
    officerBio.innerText = officers[0].bio;
    officerImg.src = officers[0].image;
}
