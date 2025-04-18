class GalleryImage {
    constructor(src, alt, caption) {
        this.src = src;
        this.alt = alt;
        this.caption = caption;
    }

    getSrc() {
        return this.src;
    }

    getAlt() {
        return this.alt;
    }

    getCaption() {
        return this.caption;
    }

    setSrc(src) {
        this.src = src;
    }

    setAlt(alt) {
        this.alt = alt;
    }

    setCaption(caption) {
        this.caption = caption;
    }
}

const image1 = new GalleryImage("res/interesting_meeting_1_poster.png", "First Interest Meeting Poster", "Interest Meeting 1 Poster!");
const image2 = new GalleryImage("res/interesting_meeting_2_poster.png", "Second Interest Meeting Poster", "Interest Meeting 2 Poster!");
const image3 = new GalleryImage("res/eko_table.jpg", "EKO Table", "EKO Table at the Student Org Showcase, featuring VP Chet and Treasurer Nick!");
const image4 = new GalleryImage("res/chet_presentation.jpg", "Chet Presentation", "VP Chet presenting at the Second Interest Meeting!");
const image5 = new GalleryImage("res/tyropita.jpg", "Tyropita", "Tyropita made for our first interest meeting!");

let images = [image1, image2, image3, image4, image5];

const leftButton = document.getElementById("button-left");
const rightButton = document.getElementById("button-right");

const image = document.getElementById("gallery-image");
const imageCaption = document.getElementById("gallery-caption");

$(document).ready(function() {
    $("#button-left").on("click", function() {
        images.unshift(images.pop());
        updateImage();
    });
    $("#button-right").on("click", function() {
        images.push(images.shift());
        updateImage();
    })
});

updateImage();

function updateImage() {
    $("#gallery-image").attr("src", images[0].getSrc());
    $("#gallery-image").attr("alt", images[0].getAlt());
    $("#gallery-caption").html(images[0].getCaption());
    /*
    image.src = images[0].getSrc();
    image.alt = images[0].getAlt();
    imageCaption.innerText = images[0].getCaption();
    */
}
