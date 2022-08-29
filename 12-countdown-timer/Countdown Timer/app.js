const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')
// gets us all the h4 elements console.log(items);


let tempDate = new Date()
let tempyear = tempDate.getFullYear()
let tempmonth = tempDate.getMonth()
let tempday = tempDate.getDate()
//let futureDate = new Date(2022,7,20,15,0,0);


//first is year,month(from 0-11),day,hour(1-24)
const futureDate = new Date(tempyear,tempmonth,tempday+10,12, 30, 0)
const year = futureDate.getFullYear()
const mins = futureDate.getMinutes()
const hours = futureDate.getHours()

let month = futureDate.getMonth()                                                                                                                                                                                                                                        
month = months[month]
const weekday = weekdays[futureDate.getDay()]
const date = futureDate.getDate()
giveaway.textContent = `give away ends on ${weekday} ${date} ${month} ${year} ${hours}:${mins}pm`
const futureTime = futureDate.getTime();



var getRemainingTime = () => {
  const today = new Date().getTime()
  const  t = futureTime - today

  //1s = 1000ms 1m = 60s 1hr = 60mins 1d = 24hrs

  //values in ms 
  const oneDay = 24*60*60*1000
  const onehr = 60*60*1000
  const onemins = 60*1000
  //calculate all values
  let days = t/oneDay
  days = Math.floor(days)
  let hours = (t % oneDay)/ onehr
  hours = Math.floor(hours)
  let minutes = Math.floor((t % onehr) /onemins )
  let seconds= Math.floor((t % onemins) / 1000 )
  //% represents remainder
 
 const values = [days,hours,minutes,seconds]

 let format =(item) => {
  if (item < 10) {
    return item = `0${item}`
  }
  return item
 }
 items.forEach((item,index) => {
  item.innerHTML = format(values[index])
 });
 if (t<0) {
  clearInterval(countdown)
  deadline.innerHTML = `<h4 class="expired">Sorry this giveaway has expired`
 }

}
//countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime()