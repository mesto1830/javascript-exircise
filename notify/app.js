(async () => {
  const showNotification = () => {
      const notification = new Notification('JavaScript Notification API', {
          body: 'This is a JavaScript Notification API demo',
          icon: './3.png'
      });

      setTimeout(() => {
          notification.close();
      }, 10 * 1000);
      notification.addEventListener('click', () => {
          window.open('https://www.javascripttutorial.net/web-apis/javascript-notification/', '_blank');
      });
  }

  const showError = () => {
      const error = document.querySelector('.error');
      error.style.display = 'block';
      error.textContent = 'You blocked the notifications';
  }

  let granted = false;

  if (Notification.permission === 'granted') {
      granted = true;
  } else if (Notification.permission !== 'denied') {
      let permission = await Notification.requestPermission();
      granted = permission === 'granted' ? true : false;
  }

  granted ? showNotification() : showError();

})();