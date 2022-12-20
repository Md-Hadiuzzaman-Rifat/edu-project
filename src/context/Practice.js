// async function myFunction(){
//     return "Hello"
// }
// myFunction()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))

// function myFunction(){
//     return Promise.resolve("Hello")
// }
// myFunction()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))

// let person=()=>{
//     return Promise.resolve("Hello World...")
// }
// person()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
// =====================================================
// =====================================================
// =====================================================
// let fetchData = document.getElementById("fetchData");
// let sendData = document.getElementById("sendData");

// function sendRequest(method, url, data) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.responseType = "json";
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(data);

//     xhr.onload = function () {
//       resolve(xhr.response);
//     };

//     xhr.onerror = function () {
//       reject("error occurred");
//     };
//   });
//   return promise;
// }

// const getData = () => {
//   sendRequest("GET", "https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// const giveData = () => {
//   sendRequest(
//     "POST",
//     "https://jsonplaceholder.typicode.com/post",
//     JSON.stringify({
//       name: "Rifat",
//       age: 21,
//       scl: "LFPS",
//     })
//   )
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// fetchData.addEventListener("click", getData);
// sendData.addEventListener("click", giveData);

// ===========================================

const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
  let meetingDetails = {
    name: "Google Meeting",
    schedule: "12pm",
  };

  if (hasMeeting) {
    resolve(meetingDetails);
  } else {
    reject("Meeting already finished");
  }
});

const furtherDetails = (details) => {
  return Promise.resolve("hello " + JSON.stringify(details));
};

async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const result = await furtherDetails(meetingDetails);
    console.log(result);
  } catch {
    console.log("I am a human");
  }
}
myMeeting()
