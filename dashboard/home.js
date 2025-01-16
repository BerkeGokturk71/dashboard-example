const inputs_value = document.querySelectorAll('.form-control');
let input_value = [];
const login_btn = document.querySelectorAll('.login-button')[0];

const user = { username: 'berke', password: 'Abc123' };

function containsUpperCase(str) {
  const regex = /[A-Z]/; // Büyük harfleri temsil eden regex
  return regex.test(str); // Eğer büyük harf varsa true döner, yoksa false
}

function elements_to_array(inputs_value) {
  inputs_value.forEach((element) => {
    const value = element.value; // textContent yerine value
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

login_btn.addEventListener('click', () => {
  const inputArray = elements_to_array(inputs_value); // Dizi oluşturma
  if (controllerUsername(inputArray) && controllerPassword(inputArray)) {
    if (
      user['username'] == inputArray[0] &&
      user['password'] == inputArray[1]
    ) {
      console.log('yönlendirme yapılıyor....');
      window.open('http://127.0.0.1:5500/dashboard/index.html', '_blank');
      console.log('Başarılı giriş');
      input_value = [];
    }
  } else {
    input_value = [];
    console.log('Başarısız giriş denemesi');
  }
});
