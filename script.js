
document.addEventListener("DOMContentLoaded", function () {
    const currentDayElement = document.getElementById("currentDay");
    const timeblocksContainer = document.getElementById("timeblocks");
  
    // Display the current day
    currentDayElement.textContent = dayjs().format("dddd, MMMM D");
  
    // Generate time blocks for standard business hours
    
  let saveBtn= document.querySelectorAll (".saveBtn")
  
      // Attach event listener to save button
    
  
    // Function to determine if a time block is past, present, or future
    function getTimeblockStatus(hour) {
      const currentHour = dayjs().hour();
      return hour < currentHour
        ? "past"
        : hour === currentHour
        ? "present"
        : "future";
    }
  
    // Function to format the hour for display
    function formatHour(hour) {
      return hour >= 12 ? `${hour === 12 ? hour : hour - 12} PM` : `${hour} AM`;
    }
  
    // Function to save event to local storage
    function saveEvent(event) {
      const timeblock = event.target.closest(".time-block");
      const hour = parseInt(timeblock.id.split("-")[1]);
      const description = timeblock.querySelector(".description").value;
      console.log(description) 
      localStorage.setItem(`event-${hour}`, description);
    }
  
    // Function to retrieve saved event from local storage
    function getSavedEvent(hour) {
     localStorage.getItem(`event-${hour}`) || "";
    }
    for(var i=9; i<17;i++){
   $("#hour-"+i+" .description").val(localStorage.getItem(`event-${i}`))
    }
$(".saveBtn").on("click",saveEvent)
  });