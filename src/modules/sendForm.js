'use strict'
const sendForm = ({
  formID,
}) => {
  const form = document.getElementById(formID);
  const statusBlock = document.createElement('div');
  statusBlock.style.color = '#FF9C00';
  statusBlock.style.fontWeight = '700';
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется.';



  // Проверка инпутов на правильность введённых данных
  const validate = (list) => {

    let success = true;
    list.forEach((item) => {
      if (item.classList.contains('feedback-block__form-input_name')) {
        if (!item.value.match(/^[а-яА-Я\s][а-яА-Я\s]+[а-яА-Я\s]?$/g)) {
          success = false;
          item.classList.add('error');
          setTimeout(() => {
            item.classList.remove('error');
          }, 4000);
        }
      }
      if (item.classList.contains('feedback-block__form-input_phone')) {
        if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
          success = false;
          item.classList.add('error');
          setTimeout(() => {
            item.classList.remove('error');
          }, 4000);
        }
      }
      if (item.classList.contains('feedback__input-input')) {
        if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
          success = false;
          item.classList.add('error');
          setTimeout(() => {
            item.classList.remove('error');
          }, 4000);
        }
      }
    });

    return success;
  };
  // Имитация работы с сервером
  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

    //Если данные не валидны, то надпись "Загрузка" не появляется.
    if (validate(formElements)) {
      form.append(statusBlock)
      statusBlock.textContent = loadText
    } else {
      statusBlock.textContent = "";
    }
    // этим циклом мы перебираем все инпуты, затем если где то есть заполненный инпут, мы помещаем его в объект formBody благодаря конструктору formData. И уже formBody мы отправляем, где ключом(key) является атрибут name Инпута, а значением(value) является value инпутов.
    formData.forEach((value, key) => {
      formBody[key] = value;
    })

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          // После отправки все инпуты перебираются и очищаются, и сообщение об ошибке тоже.
          formElements.forEach(input => {
            // Очищаются все инпуты кроме класса value
            //if (input.classList.contains('value'))
            input.value = '';
            input.classList.remove('error');
          });
          statusBlock.textContent = successText
          // блок с надписями statusBlock исчезает.            
          setTimeout(() => {
            form.removeChild(statusBlock);
          }, 4000);
        })
        .catch(error => {
          statusBlock.textContent = errorText
          setTimeout(() => {
            form.removeChild(statusBlock);
          }, 4000);
        })
    } else {
      alert('Введите пожалуйста своё имя и номер телефона!')
    }

  }

  try {
    if (!form) {
      throw new Error('Верните форму на место, пожааааалуйста!')
    }
    // Отправляет форму при нажатии на кнопку отправить
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      submitForm()
    })
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
