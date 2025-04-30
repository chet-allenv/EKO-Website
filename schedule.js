
$(document).ready(function() {
    let calendarElement = document.getElementById("calendar");
    
    if (calendarElement) {

        const { Calendar } = window.FullCalendar;

        let calendar = new Calendar(calendarElement, {
            initialView: "dayGridMonth",
            headerToolbar: {
                left: "prev",
                center: "title",
                right: "next",
            },
            
            titleFormat: {
                month: "long",
                year: "numeric",
            },

            eventClick: function(info) {
                let event = info.event;
                let description = event.extendedProps.description !== null ? event.extendedProps.description : "No description available.";
                let location = event.extendedProps.location !== null ? event.extendedProps.location : "No location specified.";
                let startTime = event.start !== null ? event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "No start time specified.";
                let endTime = event.end !== null ? event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "No end time specified.";
                
                let timeString = " " + startTime;

                if (event.end) {
                    timeString += " - " + endTime;
                }

                
                $('#information_text').html(
                    "<h2>" + event.title + "</h2>" +
                    "<p><strong>Description:</strong> " + description + "</p>" +
                    "<p><strong>Location:</strong> " + location + "</p>" +
                    "<p>" + event.start.toLocaleDateString() + "<strong> @</strong> " + timeString + "</p>"
                );
            },
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
    
            for (var i = 0; i < data.length; i++) {
                var tabTitle = data[i].title; // Assuming the JSON has a 'title' field for the tab name
                var tabDescription = data[i].description;

    
                console.log(`Event #${data[i].tab}: ${tabTitle}, ${tabDescription}`);
                let eventDetails = {
                    title: tabTitle,
                    date: data[i].date,
                    description: tabDescription,
                };

                if (data[i].start) {
                    eventDetails.start = data[i].start;
                }
                if (data[i].end) {
                    eventDetails.end = data[i].end;
                }
                if (data[i].location) {
                    eventDetails.location = data[i].location;
                }

                calendar.addEvent(eventDetails);
            }
        });
        calendar.render();
    } else {
        console.error("Calendar element not found.");
    }
});
