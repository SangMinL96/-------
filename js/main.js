const items = document.querySelectorAll(".digda");
const btn = document.querySelector("#start");
const count = document.querySelector("#count");
const e = document.querySelector("#eyse");
const n = document.querySelector("#nomal");
const h = document.querySelector("#hard");
let currentcount = 1;
let moveSpeed = 1500,
  reMoveSpeed = 2000;
const onRemove = () => {
  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.style.display = "none";
      count.innerText = `${currentcount}마리!!`;
      currentcount += 1;
    });
  });
};

const itemNumber = () => {
  const Num = Math.floor(Math.random() * items.length);
  return Num;
};

const onMove = () => {
  const itemRandom = itemNumber();
  items[itemRandom].style.display = "block";
  const remove = () => {
    items[itemRandom].style.display = "none";
  };
  setTimeout(remove, reMoveSpeed);
};
const start = () => {
  onRemove();
  setInterval(onMove, moveSpeed);
};

const init = () => {
  btn.addEventListener("click", start);
  e.addEventListener("click", () => {
    moveSpeed = 2500;
    reMoveSpeed = 3000;
  });
  n.addEventListener("click", () => {
    moveSpeed = 1500;
    reMoveSpeed = 2000;
  });
  h.addEventListener("click", () => {
    moveSpeed = 500;
    reMoveSpeed = 1000;
  });
};
init();
