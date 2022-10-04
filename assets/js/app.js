const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');//le quitamos el gato
const $l = document.querySelector('.location');

function displayUser(username) {
 // $n.textContent = 'cargando...';
  let response = fetch(`${usersEndpoint}/${username}`, {
    method: "GET"
        });
        response.then((res) => {
          res.json().then ((data) =>  {
              $n.innerHTML = `${e.name}`;
              $b.innerHTML = `${e.blog}`;
              $l.innerHTM = `${e.location}`;
          }).catch((error) =>{
            handleError(error);
  });
  }).catch((error) => {
    handleError(error)

 // console.log(data);
 }); 
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `UPSI! Algo salió mal: ${err}`
 };

displayUser('stolinski');