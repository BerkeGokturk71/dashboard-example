const inputs_value = document.querySelectorAll('.form-control');
let input_value = [];
const login_btn = document.querySelectorAll('.login-button')[0];
const alert_box = document.querySelector('header');
const user = { username: 'berke', password: 'Abc123' };

function containsUpperCase(str) {
  const regex = /[A-Z]/; // Büyük harfleri temsil eden regex
  return regex.test(str); // Eğer büyük harf varsa true döner, yoksa false
}

function elements_to_array(inputs_value) {
  inputs_value.forEach((element) => {
    const value = element.value;
    input_value.push(value);
  });
  return input_value;
}

function controllerUsername(inputArray) {
  if (inputArray[0].length > 4) {
    console.log('Başarılı: Kullanıcı adı kontrolü geçti', inputArray[0]);
    return true;
  }
  console.log('Hata: Kullanıcı adı en az 5 karakter olmalıdır');
  return false;
}

function controllerPassword(inputArray) {
  if (inputArray[1].length > 4 && containsUpperCase(inputArray[1])) {
    console.log('Başarılı: Şifre kontrolü geçti', inputArray[1]);
    return true;
  }
  console.log('Hata: Şifre 5 karakterden kısa veya büyük harf içermiyor');
  return false;
}
function setLocal(inputArray) {
  const setLocal_variable = localStorage.setItem(
    'user',
    JSON.stringify(inputArray)
  );
  console.log('locale kayıt edildi');
  return setLocal_variable;
}

function getLocal() {
  const getLocal_variable = JSON.parse(localStorage.getItem('user'));
  let sign_button = document.querySelector('#sign-in');
  const username = getLocal_variable[0];
  if (username == '' || username == null) {
    console.log('local boşta');
  }
  sign_button = sign_button.parentNode;
  sign_button.setAttribute('data-bs-target', '');
  sign_button.innerHTML = `Hoşgeldiniz ${username}`;
  console.log(getLocal_variable);
  return getLocal_variable;
}

function alertBox(color, text) {
  let alert = document.createElement('div');
  alert.classList.add(
    'alert',
    `alert-${color}`,
    'alert-dismissible',
    'fade',
    'show'
  );
  alert.innerHTML = `
        <strong>Warning!</strong>${text}!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;

  alert_box.appendChild(alert);
  setTimeout(function () {
    alert.remove();
  }, 2500);
}

login_btn.addEventListener('click', (event) => {
  event.preventDefault();
  const inputArray = elements_to_array(inputs_value);
  if (controllerUsername(inputArray) && controllerPassword(inputArray)) {
    if (
      user['username'] == inputArray[0] &&
      user['password'] == inputArray[1]
    ) {
      const text = 'Giriş Başarılı';
      const color = 'primary';
      console.log('yönlendirme yapılıyor....');
      console.log('Başarılı giriş');
      setLocal(inputArray);
      alertBox(color, text);
      getLocal();
      input_value = [];
    }
  } else {
    const text = 'Giriş Başarısız';
    const color = 'danger';
    input_value = [];
    console.log('Başarısız giriş denemesi');
    alertBox(color, text);
  }
});

getLocal();
