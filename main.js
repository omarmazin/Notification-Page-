

const accordionHeaders = document.querySelectorAll('.accordion-head');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // toggle the active class on the clicked header
    header.classList.toggle('active');

    // get the next sibling element of the clicked header, which is the content element
    const content = header.nextElementSibling;

    // if the content element is hidden, show it, otherwise hide it
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
