document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // предотвращаем стандартную отправку

    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value
    };

    console.log('Form submitted:', data); // здесь можно отправлять на сервер

    // Сообщение пользователю
    alert('Thank you! Your message has been sent.');

    // Закрыть модальное окно
    const modalEl = document.getElementById('contactModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    // Очистить форму
    form.reset();
  });
});
