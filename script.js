// Select items

const alert = document.querySelector(".alert");

const form = document.querySelector(".add-items");

const grocery = document.getElementById("grocery");

const submitBtn = document.querySelector(".submit-btn");

const container = document.querySelector(".grocery-container");

const list = document.querySelector(".grocery-list");

const clearBtn = document.querySelector(".clear-btn");


// for edit optin

let editElement;

let editFlag = false;

let editId = "";

// event Listners
// form submit

form.addEventListener("submit", addItem);

// for clear btn for all items clear
clearBtn.addEventListener("click", clearItems);

// it's tryb to submit your form so amke stop this default thing
// Functions===========>>

// function addItem(e) {
//   e.preventDefault();

//   let value = grocery.value;

//   // for unique value=

//   let id = new Date().getTime().toString();
//   // console.log(id);

//   if (value && !editFlag) {
//     const element = document.createElement("article");
//     element.classList.add("grocery-items");
//     const attr = document.createAttribute("data-id");
//     // attr.value=Math.floor(Math.random()*10+1);
//     attr.value = id;
//     element.setAttributeNode(attr);

//     element.innerHTML = `<p class="title">${value}</p>
//               <div class="btn-container">
//                 <button type="button" class="edit-btn">         
//                  <i class="ri-edit-box-fill"></i>
//                 </button>

//                 <button type="button" class="delete-btn">
//                   <i class="ri-delete-bin-2-line"></i>
//                 </button>   
//             </div>`;


//             const deleteBtn=element.querySelector('.delete-btn');

//             const editBtn=element.querySelector('.edit-btn');

//             deleteBtn.addEventListener('click',deleteBtns)
//             editBtn.addEventListener('click',editBtns)


//     list.appendChild(element);
//     container.classList.add("show-container");

//     displayAlert("Item added", "success");


//     // add to local storage

//     // addToLocalStorage(id,value);

//     // setback to default

//     setBackToDefault();

//   } else if (value && editFlag) {
//     console.log("Edit ");
//   } else {
//     displayAlert("Please enter a value ", "danger");
//   }
// }

// // for alertItems

// function displayAlert(text, action) {
//   alert.textContent = text;
//   alert.classList.add(`alert-${action}`);

//   setTimeout(() => {
//     alert.textContent = "";
//     alert.classList.remove(`alert-${action}`);
//   },1000);
// }

// // to setup local storage

// function addToLocalStorage(id, value) {
//   console.log("ADDED TO LOCAL STORAGE ");
// }

// // Set bacl to default function

// function setBackToDefault() {
//   grocery.value = "";
//   submitBtn.textContent = "Submit";
//   editFlag = false;
//   editId = "";
// }

// // to clear items functions

// function clearItems() {
//   const items = document.querySelectorAll(".grocery-items");
//   // console.log(items);
//   if (items.length > 0) {
//     items.forEach((item) => {
//       list.removeChild(item);
//     });
//   }

//   // clearBtn.style.visibility='hidden'

//   container.classList.remove("show-container");

//   displayAlert("Remove List ", "danger");
//   setBackToDefault();
// }


// // for delete btn function

// function deleteBtns(e){
// // console.log("Delete items");
// // console.log(e.currentTarget.parentElement.parentElement);

// const element=e.currentTarget.parentElement.parentElement;

// const id=element.dataset.id;

// // console.log(id);
// list.removeChild(element);
// if(list.children.length===0){
//   container.classList.remove('show-container')
// };

// displayAlert('Items removed','danger')
// setBackToDefault();

// // remove from local storage 

// removeFromLocalStorage(id)

// }

// // for edit items functions 

// function editBtns(e){

// const element=e.currentTarget.parentElement.parentElement;

// editElement=e.currentTarget.parentElement.previousElementSibling;

// grocery.value=editElement.innerHTML

// editFlag=true;

// editId=element.dataset.id;

// submitBtn.textContent='Edit'


// }




// // remove from local storage functions

// function removeFromLocalStorage(id){

// }



function addItem(e){
  e.preventDefault();
 const value=grocery.value;

const id=new Date().getTime().toString()

// console.log(id);
 if(value !=='' && editFlag === false){

  const element=document.createElement('article');
  element.classList.add('grocery-items');

  const attr=document.createAttribute('data-id');
  attr.value=id;

  element.setAttributeNode(attr);

  element.innerHTML=`
  <p class="title">${value}</p>
               <div class="btn-container">
                 <button type="button" class="edit-btn">         
                  <i class="ri-edit-box-fill"></i>
                 </button>

                 <button type="button" class="delete-btn">
                  <i class="ri-delete-bin-2-line"></i>
                 </button>   
             </div>
  `
  const deletBtn=element.querySelector('.delete-btn');
  const editBtn=element.querySelector('.edit-btn');

  deletBtn.addEventListener('click',deletBtnn);
  editBtn.addEventListener('click',editBtnn);



  list.appendChild(element);

container.classList.add('show-container');
  
alertShow('Item added','success')
setBackEmpty()

  

 }
 else if(value !=='' && editFlag===true){

  editElement.innerHTML=value
  alertShow('Value changed','success');
  // edit local storage 
  setBackEmpty()

 }

 else{
alertShow('Please enter a value','danger')

 }


}



// setBackFunc//// to set the value empty

function setBackEmpty(){
  grocery.value=''
  submitBtn.textContent='Submit';
  editFlag=false;
  editId=''

}

// alert function for show alerting 

function alertShow(text,action ){

  alert.textContent=text

  alert.classList.add(`alert-${action}`);


  setTimeout(() => {

    alert.textContent='';
    alert.classList.remove(`alert-${action}`)
    
  },1000);

}

// for clear button to clear items 

function clearItems(){
const element=document.querySelectorAll('.grocery-items')

element.forEach((item)=>{
  list.removeChild(item);
});

setBackEmpty();
alertShow('Removed items','danger')
container.classList.remove('show-container');

}


// delete btn to delete items 

function deletBtnn(e){

  const element=e.currentTarget.parentElement.parentElement;

  const id=element.dataset.id;
  console.log(id);
  list.removeChild(element);

  if(list.children.length===0){
    container.classList.remove('show-container')
  };

  alertShow('Removed item','danger');
  setBackEmpty();

  // remove from local storage 
  // removeFromLocalStorage
}

// edit btn to the edit the items 

function editBtnn(e){

  const element=e.currentTarget.parentElement.parentElement;

  editElement=e.currentTarget.parentElement.previousElementSibling;

  grocery.value=editElement.innerHTML;  

  editFlag=true;
  editId=element.dataset.id;
  submitBtn.innerHTML='Edit'


}


function removeFromLocalStorage(id){

}