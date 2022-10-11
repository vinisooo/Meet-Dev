function createCards(array){

    const usersList = document.getElementById("users-list");

    usersList.innerHTML = "";


    const usersResults = array.results;

    usersResults.forEach((user)=>{

        const newCard = document.createElement("li");

        const entireName = `${user.name.title} ${user.name.first} ${user.name.last}`

        newCard.innerHTML=
        `
        <li class="flex column justify-between user-card">
        <figure class="user-pic">
          <img src="${user.picture.large}" alt="">
          <button class="favorite-user-btn flex align-center justify-center" id="favorite-user-btn">
            <img src="/assets/heart.svg" alt="">
          </button>
        </figure>

        <div class="flex about-user column justify-between">
          <h3>${entireName}</h3>
          <span>${user.location.street.number} ${user.location.street.name}</span>
          <span>${user.dob.age} anos</span>

          <div class="flex contact-user">
            <button>
              <img src="/assets/envelope.svg" alt="">
            </button>
            <button>
              <img src="/assets/phone.svg" alt="">
            </button>
          </div>
        </div>
      </li>

        `

        usersList.append(newCard);
    })
    usersList.insertAdjacentHTML("beforeend",
    `<div class="fade-out"></div>`
    )

}


function likeBtn (){
  const likeBtns = [...document.getElementsByClassName("favorite-user-btn")];

  likeBtns.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
      event.target.classList.toggle("liked");
    })
  })

}
