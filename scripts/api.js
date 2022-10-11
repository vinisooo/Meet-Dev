function getUsers(){

    fetch("https://randomuser.me/api?results=10")
    .then(user => user.json())
    .then((user) =>{
        createCards(user)
        likeBtn();
    })

}
getUsers();