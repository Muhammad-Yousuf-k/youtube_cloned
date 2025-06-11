console.log("code is running");

let burger = document.getElementById("burg");

burger.addEventListener("click", () => {
  let slide = document.getElementById("slider");

  if (slide.style.display === "block") {
    slide.style.display = "none";
  } else {
    slide.style.display = "block";
  }
});



let burger0 = document.getElementById("burg0");

burger0.addEventListener("click", () => {
  let slide = document.getElementById("slider");

  if (slide.style.display === "none") {
    slide.style.display = "block";
    slide.style.width = "100%"
    slide.style.position = "absolute"
    slide.style.backgroundColor = "white"

  } else {
    slide.style.display = "none";
  }
});

// ====================video generate section============================
const container = document.getElementById("video_sect_box");
video.forEach((video) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
                  <div class="video">
                    <a href="#">
                        <img class="thamnail" src="${video.thamnail}" alt="thamnail">
                    </a>
                    <div class="info1">
                        <img class="login-myimg2" src="${video.lgimg}" alt="thamnail">
                        <h1 class="title">${video.title}</h1>
                    </div>
                    <div class="info2">
                        <h1>${video.cName}</h1>
                        <h1>${video.vView}   ${video.vTime}</h1>
                    </div>
                </div>
 `;
  container.appendChild(card);
});

let hoa = ""


if (hoa.length > 10) {
  
}
