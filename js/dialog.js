'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.dialog = {
    userDialog: document.querySelector('.setup')
  };

  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = window.dialog.userDialog.querySelector('.setup-close');
  var userNameInput = window.dialog.userDialog.querySelector('.setup-user-name');
  var dialogHandler = window.dialog.userDialog.querySelector('.upload');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && evt.target !== userNameInput) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.dialog.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.basicX = window.dialog.userDialog.offsetLeft;
    window.basicY = window.dialog.userDialog.offsetTop;
  };

  var closePopup = function () {
    window.dialog.userDialog.classList.add('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.dialog.userDialog.style.left = window.basicX + 'px';
    window.dialog.userDialog.style.top = window.basicY + 'px';
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valuemissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.dialog.userDialog.style.top = (window.dialog.userDialog.offsetTop - shift.y) + 'px';
      window.dialog.userDialog.style.left = (window.dialog.userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();


      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (draggedEvt) {
          draggedEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
