$(function() {
    $("#tabs").tabs({
        collapsible: true,
    });

    $("#tabs-in-a-tab").tabs({
        collapsible: true,
    });

    $("#contact-tab").on("click", function() {
        window.location.href = "contact.html";
    });

    function fetchJSONFile(path, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
                var data = JSON.parse(request.responseText);
                if (callback) {
                    callback(data);
                }
            }
        };
        request.open("GET", path);
        request.send();
    }

    fetchJSONFile("events.json", function(data) {
        console.log(data);
        // You can manipulate the DOM or do something with the data here

        const futureEventsArray = data.filter(event => {
            const eventDate = new Date(event.date); // Assuming the date is in a format that can be parsed by the Date constructor
            return eventDate > new Date(); // Filter out past events
        });

        futureEventsArray.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB; // Sort by date in ascending order
        });




        for (var i = 0; i < futureEventsArray.length; i++) {

            var date = new Date(futureEventsArray[i].date); // Assuming the date is in a format that can be parsed by the Date constructor

            if (new Date() > date) {
                continue; // Skip past events
            }

            var tabName = `tabs-${i + 1}`; // Use the index to create unique tab names
            var tabTitle = futureEventsArray[i].title; // Assuming the JSON has a 'title' field for the tab name
            var tabDescription = futureEventsArray[i].description;

            console.log(`Event #${futureEventsArray[i].tab}: ${tabTitle}, ${tabDescription}`);

            

            var contentDiv = $(`<div id="${tabName}"><h2>${tabTitle}</h2><h3>${date.toLocaleDateString("en-US")}</h3><p>${tabDescription}</p></div>`);
            $("#tabs-in-a-tab").append(contentDiv);

            var listItem = $(`<li><a href="#${tabName}">${date.toLocaleDateString("en-US")}</a></li>`);
            $("#tab-in-a-tab").append(listItem);
        }

        // Initialize the tabs after adding the new content
        $("#tabs-in-a-tab").tabs("refresh");
        $("#tabs-in-a-tab").tabs("option", "active", 0); // Activate the first tab by default
    });
});