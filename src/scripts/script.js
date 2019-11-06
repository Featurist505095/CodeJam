let lang = window.sessionStorage.getItem('keyboardLang');
let letterCase = 0;
if (lang == undefined || lang > 4) {
  window.sessionStorage.setItem('keyboardLang', 1);
  lang = 1;
}

let keys = [
  ['writer', '`', '~', 'ё', 'Ё', 'Backquote'],
  ['writer', '1', '!', '1', '!', 'Digit1'],
  ['writer', '2', '@', '2', '"', 'Digit2'],
  ['writer', '3', '#', '3', '№', 'Digit3'],
  ['writer', '4', '$', '4', ';', 'Digit4'],
  ['writer', '5', '%', '5', '5', 'Digit5'],
  ['writer', '6', '^', '6', ':', 'Digit6'],
  ['writer', '7', '&', '7', '?', 'Digit7'],
  ['writer', '8', '*', '8', '*', 'Digit8'],
  ['writer', '9', '(', '9', '(', 'Digit9'],
  ['writer', '0', ')', '0', ')', 'Digit0'],
  ['writer', '-', '_', '-', '_', 'Minus'],
  ['writer', '=', '+', '=', '+', 'Equal'],
  [
    'textformat backspace',
    'BackSpace',
    'BackSpace',
    'BackSpace',
    'BackSpace',
    'Backspace'
  ],
  ['textformat tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
  ['writer', 'q', 'Q', 'й', 'Й', 'KeyQ'],
  ['writer', 'w', 'W', 'ц', 'Ц', 'KeyW'],
  ['writer', 'e', 'E', 'у', 'У', 'KeyE'],
  ['writer', 'r', 'R', 'к', 'К', 'KeyR'],
  ['writer', 't', 'T', 'е', 'Е', 'KeyT'],
  ['writer', 'y', 'Y', 'н', 'Н', 'KeyY'],
  ['writer', 'u', 'U', 'г', 'Г', 'KeyU'],
  ['writer', 'i', 'I', 'ш', 'Ш', 'KeyI'],
  ['writer', 'o', 'O', 'щ', 'Щ', 'KeyO'],
  ['writer', 'p', 'P', 'з', 'З', 'KeyP'],
  ['writer', '[', '{', 'х', 'Х', 'BracketLeft'],
  ['writer', ']', '}', 'ъ', 'Ъ', 'BracketRight'],
  ['textformat del', 'Del', 'Del', 'Del', 'Del', 'Delete'],
  [
    'control capslock',
    'CapsLock',
    'CapsLock',
    'CapsLock',
    'CapsLock',
    'CapsLock'
  ],
  ['writer', 'a', 'A', 'ф', 'Ф', 'KeyA'],
  ['writer', 's', 'S', 'ы', 'Ы', 'KeyS'],
  ['writer', 'd', 'D', 'в', 'В', 'KeyD'],
  ['writer', 'f', 'F', 'а', 'А', 'KeyF'],
  ['writer', 'g', 'G', 'п', 'П', 'KeyG'],
  ['writer', 'h', 'H', 'р', 'Р', 'KeyH'],
  ['writer', 'j', 'J', 'о', 'О', 'KeyJ'],
  ['writer', 'k', 'K', 'л', 'Л', 'KeyK'],
  ['writer', 'l', 'L', 'д', 'Д', 'KeyL'],
  ['writer', ';', ':', 'ж', 'Ж', 'Semicolon'],
  ['writer', "'", '"', 'э', 'Э', 'Quote'],
  ['writer', '\\', '|', '\\', '/', 'Backslash'],
  ['textformat enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ['control shift', 'Shift', 'Shift', 'Shift', 'Shift', 'ShiftLeft'],
  ['writer', 'z', 'Z', 'я', 'Я', 'KeyZ'],
  ['writer', 'x', 'X', 'ч', 'Ч', 'KeyX'],
  ['writer', 'c', 'C', 'с', 'С', 'KeyC'],
  ['writer', 'v', 'V', 'м', 'М', 'KeyV'],
  ['writer', 'b', 'B', 'и', 'И', 'KeyB'],
  ['writer', 'n', 'N', 'т', 'Т', 'KeyN'],
  ['writer', 'm', 'M', 'ь', 'Ь', 'KeyM'],
  ['writer', ',', '<', 'б', 'Б', 'Comma'],
  ['writer', '.', '>', 'ю', 'Ю', 'Period'],
  ['writer', '/', '?', '.', ',', 'Slash'],
  ['arrowup', '▲', '▲', '▲', '▲', 'ArrowUp'],
  ['control shift', 'Shift', 'Shift', 'Shift', 'Shift', 'ShiftRight'],
  ['control ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ControlLeft'],
  ['control win', 'Win', 'Win', 'Win', 'Win', 'OSLeft'],
  ['control alt', 'Alt', 'Alt', 'Alt', 'Alt', 'AltLeft'],
  ['textformat space writer', ' ', ' ', ' ', ' ', 'Space'],
  ['control alt', 'Alt', 'Alt', 'Alt', 'Alt', 'AltRight'],
  ['arrowleft', '◄', '◄', '◄', '◄', 'ArrowLeft'],
  ['arrowdown', '▼', '▼', '▼', '▼', 'ArrowDown'],
  ['arrowright', '►', '►', '►', '►', 'ArrowRight'],
  ['control ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ControlRight']
];

function createField() {
  let textarea = document.createElement('textarea');
  let keyboard = document.createElement('div');
  textarea.id = 'textarea';
  keyboard.id = 'keyboard';
  document.body.append(textarea);
  document.body.append(keyboard);
}

function createButtons() {
  for (let i = 0; i < keys.length; i++) {
    let button = document.createElement('button');
    button.innerText = keys[i][lang];
    button.className = keys[i][0];
    document.getElementById('keyboard').append(button);
  }
}

createField();
createButtons();

function changeLang() {
  let langButton = document.getElementsByTagName('button');

  for (let i = 0; i < keys.length; i++) {
    langButton[i].innerText = keys[i][lang];
  }

  window.sessionStorage.setItem('keyboardLang', lang);
}

function changeCaseButtons() {
  let caseButton = document.getElementsByClassName('writer');
  if (letterCase == 1) {
    for (let i = 0; i < keys.length; i++) {
      caseButton[i].innerText = caseButton[i].innerText.toUpperCase();
    }
  } else {
    for (let i = 0; i < keys.length; i++) {
      caseButton[i].innerText = caseButton[i].innerText.toLowerCase();
    }
  }
}

function unselectItem() {
  let selected = document.getElementsByClassName('selected');

  for (let i = 0; i < selected.length; i++) {
    if (selected[i].className.indexOf('capslock') >= 0) {
    } else {
      selected[i].className = selected[i].className.substring(
        0,
        selected[i].className.indexOf('selected') - 1
      );
    }
  }

  lang = lang % 2 ? lang : lang - 1;
}

function selectKeyFromMouse(event) {
  let target = event.target;

  if (target.innerHTML == 'CapsLock') {
    if (target.className.indexOf('selected') >= 0) {
      target.className = target.className.substring(
        0,
        target.className.indexOf('selected') - 1
      );
      letterCase = 0;
      changeCaseButtons();
    } else {
      target.className += ' selected';
      letterCase = 1;
      changeCaseButtons();
    }
  } else {
    target.className += ' selected';
  }

  let selected = document.getElementsByClassName('selected');

  if (selected.length == 2) {
    if (
      (selected[0].innerHTML == 'Alt' && selected[1].innerHTML == 'Shift') ||
      (selected[1].innerHTML == 'Alt' && selected[0].innerHTML == 'Shift')
    ) {
      lang = lang == 1 ? 3 : 1;
      changeLang();
    }
  }
  for (let i = 0; i < selected.length; i++) {
    if (
      target.className.indexOf('writer') >= 0 &&
      selected[i].className.indexOf('control') < 0
    ) {
      textarea.value += selected[i].innerHTML;
    }
  }

  setTimeout(unselectItem, 200);
}

function selectKeyFromMouseDown(event) {
  let target = event.target;

  if (target.innerHTML != 'CapsLock') {
    if (target.className.indexOf('selected') >= 0) {
      target.className = target.className.substring(
        0,
        target.className.indexOf('selected') - 1
      );
    } else {
      target.className += ' selected';
    }
    if (target.className.indexOf('backspace') >= 0) {
      textarea.value = textarea.value.slice(0, -1);
    }
    if (target.className.indexOf('enter') >= 0) {
      textarea.value += '\n';
    }
  }

  let selected = document.getElementsByClassName('selected');

  if (selected.length == 2) {
    if (
      (selected[0].innerHTML == 'CapsLock' &&
        selected[1].innerHTML == 'Shift') ||
      (selected[1].innerHTML == 'CapsLock' && selected[0].innerHTML == 'Shift')
    ) {
      changeLang();
      letterCase = 0;
      changeCaseButtons();
    }
  }
}

function selectKeyFromMouseUp() {
  let button = document.getElementsByClassName('capslock');

  if (button[0].className.indexOf('selected') >= 0) {
    letterCase = 1;
    changeCaseButtons();
  }
  setTimeout(unselectItem, 200);
}

function selectKeyFromKeyboardDown(event) {
  let code = event.code;
  let button = document.getElementsByTagName('button');

  if (code == 'ShiftLeft' || code == 'ShiftRight') {
    letterCase = 1;
  }
  for (let i = 0; i < keys.length; i++) {
    let textarea = document.getElementById('textarea');
    if (keys[i][5] == code) {
      if (button[i].className.indexOf('selected') < 0) {
        button[i].className += ' selected';
        if (button[i].innerHTML == 'CapsLock') {
          letterCase = 1;
          changeCaseButtons();
        }
        if (button[i].className.indexOf('backspace') >= 0) {
          textarea.value = textarea.value.slice(0, -1);
        }
        if (button[i].className.indexOf('enter') >= 0) {
          textarea.value += '\n';
        }
      } else {
        if (button[i].innerHTML == 'CapsLock') {
          button[i].className = button[i].className.substring(
            0,
            button[i].className.indexOf('selected') - 1
          );
          letterCase = 0;
          changeCaseButtons();
        }
      }
    }
  }

  for (let i = 0; i < keys.length; i++) {
    if (keys[i][5] === code && keys[i][0].indexOf('writer') >= 0) {
      textarea.value += keys[i][Number(lang) + Number(letterCase)];
    }
  }

  let selected = document.getElementsByClassName('selected');

  if (selected.length == 2) {
    if (
      (selected[0].innerHTML == 'Alt' && selected[1].innerHTML == 'Shift') ||
      (selected[1].innerHTML == 'Alt' && selected[0].innerHTML == 'Shift')
    ) {
      lang = lang == 1 ? 3 : 1;
      changeLang();
    }
  }
}

function selectKeyFromKeyboardUp(event) {
  let code = event.code;
  let button = document.getElementsByTagName('button');

  for (let i = 0; i < keys.length; i++) {
    if (keys[i][5] == code && code != 'CapsLock') {
      button[i].className = button[i].className.substring(
        0,
        button[i].className.indexOf('selected') - 1
      );
    }
  }
  letterCase = 0;
}

let keyboard = document.getElementById('keyboard');

keyboard.addEventListener('click', event => {
  selectKeyFromMouse(event);
});

keyboard.addEventListener('mousedown', event => {
  selectKeyFromMouseDown(event);
});

keyboard.addEventListener('mouseup', () => {
  selectKeyFromMouseUp();
});

document.addEventListener('keydown', event => {
  selectKeyFromKeyboardDown(event);
});

document.addEventListener('keyup', event => {
  selectKeyFromKeyboardUp(event);
});

document.addEventListener('click', () => {
  document.activeElement.blur();
});

document.addEventListener('focus', () => {
  document.activeElement.blur();
});
