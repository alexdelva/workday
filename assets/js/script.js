


$(function () {

  var currentDayEl = $('#currentDay')
  var currentDayTime = dayjs().format('dddd, MMMM D')
  currentDayEl.text(currentDayTime)

  var currentHourEl = $('#currentHour')
  var currentHour = dayjs().hour()


  var military = dayjs().format("HH:mm:00")
  currentHourEl.text(military)

  var saveBtn = $('.saveBtn')


  for (let i = 0; i < 18; i++) {
    var timeBlock = $("#hour-" + i)
    
console.log(timeBlock)
    //set the key from local storage
    var event = localStorage.getItem("hour-" + i)
    console.log(JSON.parse(event))
    timeBlock.val(JSON.parse(event)) 


    if (i === currentHour) {
      timeBlock.addClass('present')
    }
    else if (currentHour > i) {
      timeBlock.addClass('past')
    }
    else {
      timeBlock.addClass('future')
    }
  }


  //Save The data to local storage
  function saveEvent(event) {
    var currentButton = $(event.target)
    var textArea = currentButton.siblings("textarea")
    var parentId = currentButton.parent().attr('id')
    localStorage.setItem(parentId, JSON.stringify(textArea.val()))
  }

  saveBtn.on("click", saveEvent)

});

