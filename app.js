const dailNumber = document.querySelectorAll(".dail-number");
const copyBtn = document.querySelectorAll(".copy-btn");
const loveBtn = document.querySelectorAll(".love-btn");
const nofificationBoxes = document.getElementById("nofification-boxes");
const remove = document.getElementById("remove");
const coins = document.getElementById("coins");
const callBtn = document.querySelectorAll(".call-btn");
const copyData = document.querySelector("#copyData");
const loveData = document.querySelector("#loveData");

let copyCount = 0;
let loveCount = 0;

// copy functionality handle
// copy count setup
copyBtn.forEach((copy) => {
  copy.addEventListener("click", () => {
    copyBtn.forEach((btn) => btn.classList.remove("bg-gray-500"));
    copy.classList.add("bg-gray-500");
    const card = copy.closest(".card");
    const text = card.querySelector(".dial").innerText;
    window.navigator.clipboard.writeText(text);
    copyCount++;
    copyData.innerText = `${copyCount} copy`;
  });
});

// love button handler
loveBtn.forEach((love) => {
  love.addEventListener("click", () => {
    loveCount += 20;
    loveData.innerText = loveCount;
  });
});

let messages = [];

// notifications for call
callBtn.forEach((call) => {
  call.addEventListener("click", () => {
    const coinsValue = parseInt(coins.innerText);

    const card = call.closest(".card");
    const nofifications = card.querySelector(".nofifications").innerText;
    const dialCode = card.querySelector(".dial").innerText;

    // check value
    if (coinsValue > 20) {
      alert(`📞 Calling ${nofifications} : ${dialCode}`);
    } else {
      alert(
        "❌ You do not have sufficient coin. You need at least 20 coins to make a call"
      );
    }

    const date = {
      dial: dialCode,
      msg: nofifications,
      date: new Date().toLocaleTimeString(),
    };
    messages.push(date);

    const div = document.createElement("div");

    div.innerHTML = `
        <div class="mt-5 flex flex-col gap-3">
                <div class="flex items-center justify-between rounded-lg p-2  bg-slate-200">
                <div>
                    <h3 class="text-sm md:text-md font-semibold">${date.msg}</h3>
                    <p class="text-xs md:text-sm font-normal">${date.dial}</p>
                </div>
                <p class="text-xs md:text-sm font-medium">${date.date}</p>
            </div>
            </div>
        `;
    nofificationBoxes.appendChild(div);
  });
});

// remove notifications
remove.addEventListener("click", () => {
  messages = [];
  nofificationBoxes.innerHTML = "";
});
