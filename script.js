// below is vanilla javascript for doing it the long way, which was my rough draft. all the code is function, though not practical.

//each variable contains the save button for each hour block
// var store9AM = document.querySelector('#btn1')
// var store10AM = document.querySelector('#btn2')
// var store11AM = document.querySelector('#btn3')
// var store12PM = document.querySelector('#btn4')
// var store1PM = document.querySelector('#btn5')
// var store2PM = document.querySelector('#btn6')
// var store3PM = document.querySelector('#btn7')
// var store4PM = document.querySelector('#btn8')
// var store5PM = document.querySelector('#btn9')


// below is the save and render text function for each hour block
// function save9AM() {
//     textArea = document.querySelector('#h9').value;
//     localStorage.setItem("#h9", JSON.stringify(textArea));
// }

// function post9AM() {
//     var savedData = JSON.parse(localStorage.getItem("#h9"));
//     document.querySelector('#h9').value = savedData;
// }
// post9AM();

// function save10AM() {
//     textArea = document.querySelector('#h10').value;
//     localStorage.setItem("#h10", JSON.stringify(textArea));
// }

// function post10AM() {
//     var savedData = JSON.parse(localStorage.getItem("#h10"));
//     document.querySelector('#h10').value = savedData;
// }
// post10AM();

// function save11AM() {
//     textArea = document.querySelector('#h11').value;
//     localStorage.setItem("#h11", JSON.stringify(textArea));
// }
// function post11AM() {
//     var savedData = JSON.parse(localStorage.getItem("#h11"));
//     document.querySelector('#h11').value = savedData;
// }
// post11AM();

// function save12PM() {
//     textArea = document.querySelector('#h12').value;
//     localStorage.setItem("#h12", JSON.stringify(textArea));
// }
// function post12PM() {
//     var savedData = JSON.parse(localStorage.getItem("#h12"));
//     document.querySelector('#h12').value = savedData;
// }
// post12PM();

// function save1PM() {
//     textArea = document.querySelector('#h13').value;
//     localStorage.setItem("#h13", JSON.stringify(textArea));
// }
// function post1PM() {
//     var savedData = JSON.parse(localStorage.getItem("#h13"));
//     document.querySelector('#h13').value = savedData;
// }
// post1PM();

// function save2PM() {
//     textArea = document.querySelector('#h14').value;
//     localStorage.setItem("#h14", JSON.stringify(textArea));
// }
// function post2PM() {
//     var savedData = JSON.parse(localStorage.getItem("#h14"));
//     document.querySelector('#h14').value = savedData;
// }
// post2PM();

// function save3PM() {
//     textArea = document.querySelector('#h15').value;
//     localStorage.setItem("#h15", JSON.stringify(textArea));
// }
// function post3PM() {
//     var savedData = JSON.parse(localStorage.getItem("#h15"));
//     document.querySelector('#h15').value = savedData;
// }
// post3PM();

// function save4PM() {
//     textArea = document.querySelector('#h16').value;
// localStorage.setItem("#h16", JSON.stringify(textArea));
// }
// function post4PM() {
//     var savedData = JSON.parse(localStorage.getItem("#h16"));
//     document.querySelector('#h16').value = savedData;
// }
// post4PM();

// function save5PM() {
//     textArea = document.querySelector('#h17').value;
// localStorage.setItem("#h17", JSON.stringify(textArea));
// }
// function post5PM() {
//     var savedData = JSON.parse(localStorage.getItem("#h17"));
//     document.querySelector('#h17').value = savedData;
// }
// post5PM();

// var currentTime = dayjs().format("HH")

// here is the updated code in jQuery which combines all the functions into 1 function and way less lines of code.
$(function () {
    const currentHour = dayjs().hour();
    console.log(currentHour)
    function timeBlock() {
        const parentId = parseInt($(this).attr('id'));
        postData(parentId)
        if (parentId === currentHour) {
            $(this).addClass('present');
        } else if (parentId < currentHour) {
            $(this).addClass('past');
        } else if (parentId > currentHour) {
            $(this).addClass('future');
        }
    }

    function saveData(event) {
        var textArea = $(event.target).siblings("textarea").val()
        var parentId = $(event.target).parent(".time-block").attr("id")
        if (event.target.matches("i")) {
            textArea = $(event.target).parent("button").siblings("textarea").val()
            parentId = $(event.target).parent("button").parent(".time-block").attr("id")
        }
        localStorage.setItem(parentId, textArea)
        window.location.reload()
    }
    function postData(parentId) {
        var textArea = localStorage.getItem(parentId)
        $("#" + parentId).children("textarea").val(textArea)
    }
    function date() {
        var date = dayjs().format('dddd, MMMM DD');
        $('#currentDay').text(date)
    };


    date();


    $('.saveBtn').on('click', saveData)
    $('.time-block').each(timeBlock)
})



// below is the event listener to add the save function to each button click

// store9AM.addEventListener('click', save9AM)
// store10AM.addEventListener('click', save10AM)
// store11AM.addEventListener('click', save11AM)
// store12PM.addEventListener('click', save12PM)
// store1PM.addEventListener('click', save1PM)
// store2PM.addEventListener('click', save2PM)
// store3PM.addEventListener('click', save3PM)
// store4PM.addEventListener('click', save4PM)
// store5PM.addEventListener('click', save5PM)



//below is the variables for each time block ID
// var firstBlock = document.querySelector("#h9");
// var secondBlock = document.querySelector("#h10");
// var thirdBlock = document.querySelector("#h11");
// var fourthBlock = document.querySelector("#h12");
// var fifthBlock = document.querySelector("#h13");
// var sixthBlock = document.querySelector("#h14");
// var seventhBlock = document.querySelector("#h15");
// var eighthBlock = document.querySelector("#h16");
// var ninthBlock = document.querySelector("#h17");
// var hour9 = 9;
// var hour10 = 10;
// var hour11 = 11;
// var hour12 = 12;
// var hour13 = 13;
// var hour14 = 14
// var hour15 = 15;
// var hour16 = 16;
// var hour17 = 17;



// // below are functions to put the past, present, or future class on each time block individually

// console.log(currentTime);

// function firstHour() {
//     if (currentTime > hour9) {
//         firstBlock.classList.add("past");
//     } else if (currentTime == hour9) {
//         firstBlock.classList.add("present")
//     } else {
//         firstBlock.classList.add("future");
//     }
// }
// function secondHour() {
//     if (currentTime > hour10) {
//         secondBlock.classList.add("past");
//     } else if (currentTime == hour10) {
//         secondBlock.classList.add("present")
//     } else {
//         secondBlock.classList.add("future");
//     }
// }
// function thirdHour() {
//     if (currentTime > hour11) {
//         thirdBlock.classList.add("past");
//     } else if (currentTime == hour11) {
//         thirdBlock.classList.add("present")
//     } else {
//         thirdBlock.classList.add("future");
//     }
// }
// function fourthHour() {
//     if (currentTime > hour12) {
//         fourthBlock.classList.add("past");
//     } else if (currentTime == hour12) {
//         fourthBlock.classList.add("present")
//     } else {
//         fourthBlock.classList.add("future");
//     }
// }
// function fifthHour() {
//     if (currentTime > hour13) {
//         fifthBlock.classList.add("past");
//     } else if (currentTime == hour13) {
//         fifthBlock.classList.add("present")
//     } else {
//         fifthBlock.classList.add("future");
//     }
// }
// function sixthHour() {
//     if (currentTime > hour14) {
//         sixthBlock.classList.add("past");
//     } else if (currentTime == hour14) {
//         sixthBlock.classList.add("present")
//     } else {
//         sixthBlock.classList.add("future");
//     }
// }
// function seventhHour() {
//     if (currentTime > hour15) {
//         seventhBlock.classList.add("past");
//     } else if (currentTime == hour15) {
//         seventhBlock.classList.add("present")
//     } else {
//         seventhBlock.classList.add("future");
//     }
// }
// function eighthHour() {
//     if (currentTime > hour16) {
//         eighthBlock.classList.add("past");
//     } else if (currentTime == hour16) {
//         eighthBlock.classList.add("present")
//     } else {
//         eighthBlock.classList.add("future");
//     }
// }
// function ninthHour() {
//     if (currentTime > hour17) {
//         ninthBlock.classList.add("past");
//     } else if (currentTime == hour17) {
//         ninthBlock.classList.add("present")
//     } else {
//         ninthBlock.classList.add("future");
//     }
// }
// console.log(currentTime)
// console.log()


// below i am calling all functions

// firstHour();
// secondHour();
// thirdHour();
// fourthHour();
// fifthHour()
// sixthHour();
// seventhHour();
// eighthHour();
// ninthHour();
// console.log(typeof hour9)






