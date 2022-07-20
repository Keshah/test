//Объявление переменных, считывающихся с полей ввода
const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('mail');
const password = document.getElementById('password');
const password2 = document.getElementById('passwordConfirmation');

//Обработка кнопки, присваивание ей валидирующей функции
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

//Вывод ошибки в поле
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//Валидность поля почты
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Валидатор полей
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if(surnameValue === '') {
        setError(surname, 'Username is required');
    } else {
        setSuccess(surname);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } 
    else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } 
    else if (passwordValue.letters < 1) {
        setError(password, 'Your password must contain at least one letter.');
    } 
    else if (passwordValue.digits < 1) {
        setError(password, "Your password must contain at least one digit."); 
    }
    else {
        setSuccess(password);
    }
    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

}

// ВЗАИМОДЕЙСТВИЕ С АПИ
//обработка пользовательских данных и отправка данных на сервер
/* 

   function serializeForm(formNode) {
    return new FormData(formNode)
  }
  

    function toggleLoader() {
    const loader = document.getElementById('loader')
    loader.classList.toggle('hidden')
 }


    function onSuccess(formNode) {
    alert('Ваша заявка отправлена!')
    formNode.classList.toggle('hidden')
  }
  

    const applicantForm = document.getElementById('form')
    applicantForm.addEventListener('submit', handleFormSubmit)
  

  // ассинхронные функции, 1ая собирает информацию и задерживает ее до отправки и выводит сообщение отправки, 
  // 2ая обращается к имитируемому апи, отправляет данные на сервер и получает обратно сообщение об успешной регистрации
  // Вызовем её вот так:
  
    async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)
  
    toggleLoader()
    const { status } = await sendData(data)
    toggleLoader()
  
    if (status === 200) {
      onSuccess(event.target)
    }
  }
  

  async function sendData(data) {
    return await fetch('server-ok.json', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: data,
    })
    .then((response) => response.json()) //декодирует ответ из формата json(так как файл пустой выведется ошибка - Unexpected end of JSON input)
  .then((data) => {
    console.log(data) 
  })
  }
*/
 

  
  