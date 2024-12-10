 // id бойынша элементті табу
const topicElement = document.querySelector("#yourTopicId");
// Мазмұнды өзгерту
topicElement.textContent = "HW: Introduction to DOM";
 // id бойынша аты-жөн элементін табу
const nameElement = document.getElementById("yourNameId");
// Мазмұнды аты-жөніңізге өзгерту
nameElement.textContent = "Sizdin aty-jonynyz";
 // Хобби элементтерін табу
const hobbies = document.getElementsByClassName("yourHobbyClass");

// Хобби мазмұнын өзгерту
hobbies[0].innerHTML = "<b>Coding</b>";
hobbies[1].innerHTML = "<b>Teaching</b>";
hobbies[2].innerHTML = "<b>Reading</b>";