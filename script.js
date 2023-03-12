"strict mode";

// Categories
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Initial Facts
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 4,
    text: "Abuja is the capital of Nigeria",
    source: "https://en.wikipedia.org/wiki/Nigeria",
    category: "news",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Selecting DOM Elements
const btn = document.querySelector(".btn-large");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".facts-list");

// Load data from SUPABASE
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://fyrovfchlncqoexhmrjy.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5cm92ZmNobG5jcW9leGhtcmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1OTg5OTQsImV4cCI6MTk5NDE3NDk5NH0._BEf9f4nIukGyPKAJUzFfxYXKskrDSrr3jYPDR-NDm8",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5cm92ZmNobG5jcW9leGhtcmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1OTg5OTQsImV4cCI6MTk5NDE3NDk5NH0._BEf9f4nIukGyPKAJUzFfxYXKskrDSrr3jYPDR-NDm8",
      },
    }
  );
  const data = await res.json();
  console.log(data);

  createDactsList(data);
}

// Render facts in lists
factList.innerHTML = "";

function createDactsList(dataArray) {
  const htmlArr = dataArray.map(function (fact) {
    return `
    <li class="fact">
      <p>
        ${fact.text}
        <a
              class="source"
                href="${fact.source}" target="_blank">
              (Source)
            </a>
        </p>

        <span class="tag" style="background-color: ${
          CATEGORIES.find((cat) => cat.name === fact.category).color
        }">
          ${fact.category}
        </span>

        <div class="vote-buttons">
          <button>👍 ${fact.votesInteresting}</button>
          <button>🤯 ${fact.votesMindblowing}</button>
          <button>⛔ ${fact.votesFalse}</button>
          </div>
    </li>
          `;
  });
  const html = htmlArr.join("");
  factList.insertAdjacentHTML("afterbegin", html);
}

//  Toggle form visibility
btn.addEventListener("click", function (e) {
  form.classList.toggle("hidden");

  form.classList.contains("hidden")
    ? (btn.textContent = "share a fact")
    : (btn.textContent = "close");
});
