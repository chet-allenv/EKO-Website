
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

            events: [
                {
                    title: "Interest Meeting #1",
                    date: "2025-01-29",
                    start: "2025-01-29T17:30:00",
                    end: "2025-01-29T18:30:00",
                    description: "Join us for our first interest meeting of the semester!",
                    location: "Student Union, 340B",
                },
                {
                    title: "Interest Meeting #2 and Alphabet Workshop",
                    date: "2025-03-12",
                    start: "2025-03-12T17:30:00",
                    end: "2025-03-12T18:30:00",
                    description: "Join us for our second interest meeting of the semester and learning the Greek Alphabet!",
                    location: "Student Union, 266",
                },
                {
                    title: "Greek Independance Day",
                    date: "2025-03-25",
                    description: "Celebrating Greek Independence Day!",
                },
                {
                    title: "Orthodox Easter",
                    date: "2025-04-20",
                    description: "Celebrating Orthodox Easter!",
                },
                {
                    title: "Meeting #3",
                    date: "2025-04-9",
                    start: "2025-04-09T17:30:00",
                    end: "2025-04-09T18:30:00",
                    description: "Join us for our third meeting of the semester!",
                    location: "Student Union, 340B",
                },
                {
                    title: "Meeting #4",
                    date: "2025-04-23",
                    start: "2025-04-23T17:30:00",
                    end: "2025-04-23T18:30:00",
                    description: "Join us for our fourth meeting of the semester!",
                    location: "Student Union, 340B",
                },
                {
                    title: "End of Semester Celebration",
                    date: "2025-04-30",
                    start: "2025-04-30T17:30:00",
                    end: "2025-04-30T18:30:00",
                    description: "Join us for our end of semester celebration!",
                    location: "Student Union, 340B",
                },
                {
                    title: "Good Friday",
                    date: "2025-04-18",
                    description: "Celebrating Good Friday!",
                },
                {
                    title: "Palm Sunday",
                    date: "2025-04-13",
                    description: "Celebrating Palm Sunday!",
                },
                {
                    title: "Great Saturday",
                    date: "2025-04-19",
                    description: "Celebrating Great Saturday!",
                },
                {
                    title: "Protomagia",
                    date: "2025-05-01",
                    description: "Celebrating Protomagia!",
                }
            ],

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
        calendar.render();
    } else {
        console.error("Calendar element not found.");
    }
});
