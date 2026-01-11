// const buttonEl= document.querySelector("h1 span" );
const buttonEl = document.getElementById("byBtn");

// alert message from set attribute

// buttonEl.setAttribute("onclick" , 'alert("task completed by geetha")');

// alert message from onclick event

buttonEl.onclick = function () {
  alert("completed by geetha");
};

//using funtion 



// function handleAlert(){

//   alert("task completed by geetha");

// }

// buttonEl.onclick = handleAlert;

//using event listeners

// buttonEl.addEventListener("click" , function(){
//   alert("task completed by geetha");
// })

//make 2 alert in one function

// function handleAlert(event){
//   alert("task completed by Geetha");
//   console.log(event.target);
//   // alert ("task assigned by Anbu");

// }

//using arrow fun


// const handleAlert =(name) =>{
//   alert(`Completed by  ${name}`);
//   console.log
//   // console.log(event.target);
//   console.log(this);
  
//   buttonEl.removeEventListener("click" , handleAlert);

// }


// buttonEl.addEventListener("click" , () => handleAlert("geetha"));

//remove

// const handleClick = (event) =>{
//   alert("click me");
//   console.log("event");
  
// }

buttonEl.addEventListener("click" , handleClick);

setTimeout(() => {
  buttonEl.removeEventListener("click", handleClick);

}, 5000);


// buttonEl.removeEventListener("contextmenu", () => handleAlert("geetha"));


// buttonEl.addEventListener("click" , handleAlert);



//capturing - bubbling - propagation

const cardEl = document.getElementById("card-div");
const titleEl = document.getElementById("card-title");
const paraEl = document.getElementById("card-para");
const button = document.querySelector("button");  

cardEl.addEventListener("click" , (event) =>{
  alert("card-div");
  // console.log(event.target.tagName);
  console.log(`Target: ${event.target.tagName}, this:${cardEl.tagName}`);


})

titleEl.addEventListener("click", (event) => {
  alert("card-title");

  // event.stopPropagation();
  // event.stopImmediatePropagation();
});

paraEl.addEventListener("click", (event) => {
  alert("card-para");
});

// button.addEventListener("click", (event) => {
//   alert("button");
// });

// stop- propagation - this method prevents the ecent to reach any other objects


//catch event at capture stage
cardEl.addEventListener ("click" , (event) =>
  {
    console.log(`capturing phase: ${cardEl.tagName}`);
  }, true  )



  //Browser events - stops default actions

  const formEl = document.querySelector("form");
  const inputEl = document.querySelector("form input");
  const checkboxEl = document.querySelector("form input[type= 'checkbox']");

  console.log(inputEl);
  //1:type 2: call back 3:options 

  formEl.addEventListener("submit", (event) => {
      event.preventDefault();
       // stop refreshing page/ default actions / restrict the console message to show because of page refresh/ prevent default workd here

      if(!checkboxEl.checked){
        alert("fill required details");
        return;
      }

      console.log("form submitted", inputEl.value, checkboxEl.checked);
      console.log("default prevented", event.defaultPrevented);

      //checkboxEl.value = says on/off
      //checkbox.checked => days true or false wheather you check the box or not
    }
  );

    //passive trure means = ❌ You will NOT call event.preventDefault()
    //used for touch/scroll events to make them faster and smoother