const monthsElement = document.getElementById("month");
const weekElement = document.getElementById("week");
const dateElement = document.getElementById("date");
const yearElement = document.getElementById("year")


const obj=new Date();
const month=obj.getMonth();
monthsElement.innerText=obj.toLocaleString("en",{month:"long"})

weekElement.innerText=obj.toLocaleString("en",{weekday:"long"});
dateElement.innerText=obj.getDate();
yearElement.innerText=obj.getFullYear();