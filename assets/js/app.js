const dialog = document.querySelector('.mabile-dialog');

const filterDialog = document.querySelector('.fa-filter');

filterDialog.addEventListener('click', (e) => {

  dialog.showModal();

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
      console.log(true);
    }
  })



});
