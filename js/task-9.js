document.getElementById('myButton').addEventListener('click', function() {
  const popup = document.getElementById('popup');
  const popupText = document.querySelector('#popup').innerText;

  console.log('Текст внутри блока popup: ', popupText);  

  popup.classList.remove('hidden');

  setTimeout(function() {
    popup.classList.add('show');
  }, 10);

  setTimeout(function() {
    popup.classList.remove('show');
    setTimeout(function() {
      popup.classList.add('hidden');
    }, 500);
  }, 3000);
});
 