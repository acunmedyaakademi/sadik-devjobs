const filePath = "assets/json/app.json";
let jobList = [];

const contents = document.querySelector('.contents');







async function getData() {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("verilere erişilemiyor");
    }

    const data = await response.json();
    jobList = data;

    renderMain();

  } catch (error) {
    console.log(error);
  }
}


function renderMain() {
  contents.innerHTML = "";


  jobList.forEach(job => {
    contents.innerHTML +=
      `
      <a href="#" class="card" data-id="${job.id}">
        <img src="${job.logo}" alt="">
        <div class="timeline">
          <span>${job.postedAt}</span>
          <span>.</span>
          <span>${job.contract}</span>
        </div>
        <h3>${job.position}</h3>
        <p class="card-company">${job.company}</p>
        <p class="card-country">${job.location}</p>
      </a>
    `
  });

  bindElement();
}

function bindElement() {

  const cards = document.querySelectorAll('.card');
  console.log(cards);

  cards.forEach(card => card.addEventListener('click', (e) => {
    e.preventDefault();

    const jobId = e.target.closest('a').dataset.id
    window.location.href = `/detail.html?jobId=${jobId}`;
  }))
}


getData();