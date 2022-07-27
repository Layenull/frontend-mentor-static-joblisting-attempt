let data = [];
const jobList = document.querySelector(".joblist");
function getData() {
  fetch("./assets/js/data.json")
    .then((resp) => {
      // console.log(resp.json());
      return resp.json();
    })
    .then((res) => {
      console.log(res);
      data = res;
      console.log(data);
      data.forEach((item, id) => {
        let languages = item.languages.map((items, id) => {
          return `<button class="tag-units">${items}</button>`;
        });

        console.log(languages);
        let render = "";
        render += ` <div class="joblisitng__card" >
        <article>
          <div class="job_info">
            <div class="company_logo">
              <img src="${item.logo}" alt="" />
            </div>
            <div class="company-info">
              <div class="job-header">
                <div class="company-name">${item.company}</div>
                <div class="New">NEW!</div>
                <div class="Featured">FEATURED</div>
              </div>
              <h3 class="job-position">${item.position}</h3>
              <div class="job-footer">
                <p>${item.postedAt}</p>

                .

                <p>Full Time</p>

                .

                <p>USA only</p>
              </div>
            </div>
          </div>
        </article>
        <div class="tag-list">
          ${languages}
        </div>
      </div>`;
        jobList.innerHTML += render;
      });
    });
}

getData();

console.log(data);

function useData() {}

useData();
