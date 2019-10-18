'use strict';

(function () {

  // общие
  var fragment = document.createDocumentFragment();
  var modalUserDialog = window.modal.userDialog;

  // персонаж

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164', 'rgb(241, 43, 107]', 'rgb(146, 100, 161)', 'rgb(56, 159, 117', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizards = [];
  var wizardsQuantity = 4;

  // __персонаж в разметке

  var wizardCoat = modalUserDialog.querySelector('.wizard-coat');
  var wizardCoatInput = modalUserDialog.querySelector('input[name="coat-color"]');
  var wizardEyes = modalUserDialog.querySelector('.wizard-eyes');
  var wizardEyesInput = modalUserDialog.querySelector('input[name="eyes-color"]');
  var fireballColor = modalUserDialog.querySelector('.setup-fireball-wrap');
  var fireballColorInput = modalUserDialog.querySelector('input[name="fireball-color"]');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');


  var getRandomIndex = function (arr) {
    return arr[Math.ceil(Math.random() * (arr.length - 1))];
  };

  // ГЕНЕРАЦИЯ ХАРАКТЕРИСТИК ПЕРСОНАЖА

  document.querySelector('.setup-similar').classList.remove('hidden');


  for (var i = 0; i < wizardsQuantity; i++) {
    wizards[i] = {};
    wizards[i].name = WIZARD_NAMES[Math.floor(Math.random() * (WIZARD_NAMES.length - 1))] + ' ' + WIZARD_SECOND_NAMES[Math.floor(Math.random() * (WIZARD_SECOND_NAMES.length - 1))];
    wizards[i].coatColor = COAT_COLORS[Math.floor(Math.random() * (COAT_COLORS.length - 1))];
    wizards[i].eyesColor = EYES_COLORS[Math.floor(Math.random() * (EYES_COLORS.length - 1))];
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  similarListElement.appendChild(fragment);

  modalUserDialog.querySelector('.setup-similar').classList.remove('hidden');

  // НАСТРОЙКА ЦВЕТОВ ПЕРСОНАЖА

  var changeCoatColor = function () {
    var color = getRandomIndex(COAT_COLORS);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  };

  var changeEyesColor = function () {
    var color = getRandomIndex(EYES_COLORS);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  };

  var changeFireballColor = function () {
    var color = getRandomIndex(FIREBALL_COLORS);
    fireballColor.style.background = color;
    fireballColorInput.value = color;
  };

  wizardCoat.addEventListener('click', function () {
    changeCoatColor();
  });

  wizardEyes.addEventListener('click', function () {
    changeEyesColor();
  });

  fireballColor.addEventListener('click', function () {
    changeFireballColor();
  });

})();
