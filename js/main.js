const items = document.querySelectorAll(".digda");
const btn = document.querySelector("#start");
const count = document.querySelector("#count");
let currentcount = 1;
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
console.log(itemNumber());
const onMove = () => {
  const itemRandom = itemNumber();
  items[itemRandom].style.display = "block";
  const remove = () => {
    items[itemRandom].style.display = "none";
  };
  setTimeout(remove, 2000);
};
const start = () => {
  onRemove();
  setInterval(onMove, 1500);
};

const init = () => {
  btn.addEventListener("click", start);
};
init();
