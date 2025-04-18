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

updateOfficer();

$(document).ready(function() {
    $("#button-left").on("click", function() {
        officers.unshift(officers.pop());
        updateOfficer();
    });
    $("#button-right").on("click", function() {
        officers.push(officers.shift());
        updateOfficer();
    })
});

function updateOfficer() {
    $("#officer-name").html("<p>" + officers[0].name + "</p>");
    $("#officer-position").html("<p>" + officers[0].position + "</p>");
    $("#officer-bio").html("<p>" + officers[0].bio + "</p>");
    $("#officer-image").attr("src", officers[0].image);
}
