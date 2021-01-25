// подставляем нули если число меньше 10
function pad(n) {
if (n < 10) return "0" + n;
return n;
}
// установка даты таймера
var countDownDate = new Date("Jan 26, 2021 23:59:00").getTime();
// ежесекундное обновление
var x = setInterval(function() {
// сегодняшние дата и время
var now = new Date().getTime();
// разность между таймером и текущим временем
var distance = countDownDate - now;
// подсчёт calculations for days, hours, minutes and seconds
var days = distance * 24;
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// вывод результатов с подставлением нулей
//document.getElementById("days").innerHTML = pad(days);
document.getElementById("hours").innerHTML = pad(hours);
document.getElementById("min").innerHTML = pad(minutes);
document.getElementById("sec").innerHTML = pad(seconds);
}, 1000);
