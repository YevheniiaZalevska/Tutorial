// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const randomNumber = (number) => Math.floor(Math.random() * number) + 1;

const userContainer = document.querySelector(".input-wrapper");
const inputEl = document.querySelector(".number-input");
const btnEl = document.querySelector(".number-btn");

const container = document.createElement("div");
container.classList.add("number-container");

btnEl.addEventListener("click", (event) => {
  const blocks = Number(inputEl.value.trim());

  container.innerHTML = "";
  for (let i = 0; i < blocks; i++) {
    const divEl = document.createElement("div");
    divEl.classList.add("number");
    divEl.textContent = randomNumber(blocks);
    if (divEl.textContent % 2 === 0) {
      divEl.classList.add("even");
    } else {
      divEl.classList.add("odd");
    }
    container.appendChild(divEl);
  }
});

// console.log(bodyEl);

// bodyEl.insertAdjacentHTML("beforebegin", container);  Не працює через createEl

// bodyEl.after(container);

// bodyEl.before(container);
// bodyEl.append(container);
// bodyEl.prepend(container)

userContainer.after(container);