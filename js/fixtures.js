const fixtureTime = document.getElementById("fixtureTime");
const currentMatch = document.getElementById("currentMatch");
const root = document.getElementById("root");
const firstLeg = document.getElementById("firstLeg");
const secondLeg = document.getElementById("secondLeg");

setInterval(() => {
  var fixTime = new Date();
  fixtureTime.textContent = String(fixTime).slice(0, -30);
}, 1000);

// currentMatch.scrollIntoView(true);

const firstFixtures = `
<div class="animate__animated animate__fadeInLeft mt-2 mb-8 flex flex-col gap-y-2">
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>21</span><span>July</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./argentina.html">🇦🇷Argentina</a></span><span><a href="./portugal.html">🇵🇹Portugal</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>3</span><span>1</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>22</span><span>July</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./japan.html">🇯🇵Japan</a></span><span><a href="./senegal.html">🇸🇳Senegal</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>2</span><span>1</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>25</span><span>July</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./france.html">🇫🇷France</a></span><span><a href="./brazil.html">🇧🇷Brazil</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>1</span><span>3</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>26</span><span>July</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./senegal.html">🇸🇳Senegal</a></span><span><a href="./argentina.html">🇦🇷Argentina</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>0</span><span>3</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>27</span><span>July</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./portugal.html">🇵🇹Portugal</a></span><span><a href="./france.html">🇫🇷France</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>1</span><span>0</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>28</span><span>July</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./brazil.html">🇧🇷Brazil</a></span><span><a href="./japan.html">🇯🇵Japan</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>3</span><span>1</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>1</span><span>Aug.</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./senegal.html">🇸🇳Senegal</a></span><span><a href="./portugal.html">🇵🇹Portugal</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>0</span><span>3</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>2</span><span>Aug.</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./argentina.html">🇦🇷Argentina</a></span><span><a href="./brazil.html">🇧🇷Brazil</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>0</span><span>3</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>3</span><span>Aug.</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./japan.html">🇯🇵Japan</a></span><span><a href="./france.html">🇫🇷France</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>4</span><span>1</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>4</span><span>Aug.</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./brazil.html">🇧🇷Brazil</a></span><span><a href="./senegal.html">🇸🇳Senegal</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>11</span><span>0</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>9</span><span>Aug.</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./portugal.html">🇵🇹Portugal</a></span><span><a href="./japan.html">🇯🇵Japan</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>1</span><span>0</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>10</span><span>Aug.</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./france.html">🇫🇷France</a></span><span><a href="./argentina.html">🇦🇷Argentina</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>7</span><span>3</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
    <span>12</span><span>Aug.</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./brazil.html">🇧🇷Brazil</a></span><span><a href="./portugal.html">🇵🇹Portugal</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>0</span><span>1</span>
  </div>
  </div>
  <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-xs text-gray-500 w-2/12">
    <span>16</span><span>Aug.</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./senegal.html">🇸🇳Senegal</a></span><span><a href="./france.html">🇫🇷France</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>0</span><span>4</span>
  </div>
  </div>
  <div id="currentMatch" class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
  <div class="gap-y-0.5 flex flex-col items-center justify-center text-xs text-gray-500 w-2/12">
    <span>18</span><span>Aug.</span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
    <span><a href="./japan.html">🇯🇵Japan</a></span><span><a href="./argentina.html">🇦🇷Argentina</a></span>
  </div>
  <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
    <span>1</span><span>2</span>
  </div>
  </div>
</div>
`;

const secondFixtures = `
  <div class="animate__animated animate__fadeInRight mt-2 mb-8 flex flex-col gap-y-2">
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-gray-500 text-xs w-2/12">
        <span>30</span><span>Aug.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./argentina.html">🇦🇷Argentina</a></span><span><a href="./japan.html">🇯🇵Japan</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>4</span><span>1</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>31</span><span>Aug.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./france.html">🇫🇷France</a></span><span><a href="./senegal.html">🇸🇳Senegal</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>1</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./portugal.html">🇵🇹Portugal</a></span><span><a href="./brazil.html">🇧🇷Brazil</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>5</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./argentina.html">🇦🇷Argentina</a></span><span><a href="./france.html">🇫🇷France</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>6</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./japan.html">🇯🇵Japan</a></span><span><a href="./portugal.html">🇵🇹Portugal</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>7</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./senegal.html">🇸🇳Senegal</a></span><span><a href="./brazil.html">🇧🇷Brazil</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>5</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./argentina.html">🇦🇷Argentina</a></span><span><a href="./france.html">🇫🇷France</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>9</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./france.html">🇫🇷France</a></span><span><a href="./japan.html">🇯🇵Japan</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>13</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./brazil.html">🇧🇷Brazil</a></span><span><a href="./argentina.html">🇦🇷Argentina</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>14</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./portugal.html">🇵🇹Portugal</a></span><span><a href="./senegal.html">🇸🇳Senegal</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>16</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./japan.html">🇯🇵Japan</a></span><span><a href="./brazil.html">🇧🇷Brazil</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>19</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./france.html">🇫🇷France</a></span><span><a href="./portugal.html">🇵🇹Portugal</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>20</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./argentina.html">🇦🇷Argentina</a></span><span><a href="./senegal.html">🇸🇳Senegal</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>22</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./brazil.html">🇧🇷Brazil</a></span><span><a href="./france.html">🇫🇷France</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>23</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./senegal.html">🇸🇳Senegal</a></span><span><a href="./japan.html">🇯🇵Japan</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
    <div class="flex items-center justify-between bg-gray-800 py-2 rounded-lg">
      <div class="gap-y-0.5 flex flex-col items-center justify-center text-white text-xs w-2/12">
        <span>27</span><span>Sept.</span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-semibold items-start justify-center text-sm w-8/12">
        <span><a href="./portugal.html">🇵🇹Portugal</a></span><span><a href="./argentina.html">🇦🇷Argentina</a></span>
      </div>
      <div class="gap-y-0.5 flex flex-col font-bold items-center justify-center text-xs w-2/12">
        <span>-</span><span>-</span>
      </div>
    </div>
  </div>
`;

function first() {
  root.innerHTML = firstFixtures;
  firstLeg.classList.remove("bg-gray-500");
  firstLeg.classList.add("bg-white");
  secondLeg.classList.add("bg-gray-500");
  secondLeg.classList.remove("bg-white");
}

function second() {
  root.innerHTML = secondFixtures;
  firstLeg.classList.remove("bg-white");
  firstLeg.classList.add("bg-gray-500");
  secondLeg.classList.add("bg-white");
  secondLeg.classList.remove("bg-gray-500");
}

if (
  localStorage.getItem("legState") === null ||
  localStorage.getItem("legState") == "firstLeg"
) {
  first();
} else if (localStorage.getItem("legState") == "secondLeg") {
  second();
}

firstLeg.addEventListener("click", () => {
  localStorage.setItem("legState", "firstLeg");
  first();
});

secondLeg.addEventListener("click", () => {
  localStorage.setItem("legState", "secondLeg");
  second();
});
