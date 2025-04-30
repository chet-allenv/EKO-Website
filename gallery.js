// HOLDS JQUERY PLUGIN IMPLEMENTATION
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

createAndInsertImagesHTML();


$(document).ready(function() {
    

    $(".photo-carousel").slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })

   $(".gallery-caption").html(`<h3>${images[0].getCaption()}</h3>`);

    $(".photo-carousel").on("afterChange", function(event, slick, currentSlide) {
        // Update the caption based on the current slide
        const currentImage = images[currentSlide];
        $(".gallery-caption").html(`<h3>${currentImage.getCaption()}</h3>`);
    });
});

function createAndInsertImagesHTML() {
    let html = "";
    let count = 0;
    images.forEach((image) => {
        html += `<div id="image-${count}"><img src="${image.getSrc()}" alt="${image.getAlt()}" title="${image.getCaption()}"></div>`;
        count++;
    });
    $(".photo-carousel").html(html);
}
