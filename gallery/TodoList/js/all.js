//const 變數名稱 = document.getElementById('');
//const 變數名稱 = document.getElementsByClassName('renewName')[0];
//get ClassName 的時候比較特別，需要加上陣列編號
//變數名稱.addEventListener('狀態',Function);
//定義一個 function 名稱(){};

const itemsContainerBox = document.getElementById('itemsContainerBox');
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',addTask);
let div = document.createElement('div');
function addTask () {
  // const itemInput = document.getElementById('itemInput');
  // const createItem = itemInput.value;
  // itemsContainerBox.append(createItem);
  itemsContainerBox.append(div);
}