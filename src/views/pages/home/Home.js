import { api, postform } from "../../../service/api";

async function getRandomJoke() {
  const request = await api.get("random");
  const response = request.data;
  return response;
}

let Home = {
  is_private: false,

  render: async () => {
    const jokes = await getRandomJoke();

    let view = /*html*/ `
      <div class="container">
      <header>
          <div class="header_inner">
              <a href="https://github.com/jrsmarcilio/afya-turma2" target="_blank">
                  <div class="logo">
                      <span class="logo_mark">></span>
                      <span class="logo_text">/jrsmarcilio</span>
                      <span class="logo_cursor"></span>
                  </div>
              </a>
              <a href="https://www.linkedin.com/in/jrsmarcilio/" target="_blank">
                <span class="sociais">LinkedIn</span>
              </a>
              <a href="https://github.com/jrsmarcilio/" target="_blank">
                <span class="sociais">Github</span>
              </a>
          </div>
      </header>
      <div class="container-chuck">
          <h1>Chuck Norris ❤</h1>
          <div class="chuck"></div>
          <p>${jokes.value}</p>
      </div>
      <hr />
      <div class="formcontainer">
          <form id="form">
              <input type="text" id="name" placeholder="name" />
              <input type="text" id="email" placeholder="email" />
              <input type="text" id="phone" placeholder="phone" />
              <input type="submit" value="Enviar" />
          </form>
      </div>
    </div>
    `;

    return view;
  },

  after_render: async () => {
    let formcontent = document.getElementById("form");

    formcontent.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let phone = document.querySelector("#phone").value;

      let postData = {
        name,
        email,
        phone,
      };

      postform
        .post("", postData)
        .then((response) => {
          alert("Tudo certo");
        })
        .catch((e) => alert("Algo de errado não está certo"));
    });
  },
};

export default Home;
