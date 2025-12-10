
  function appendValue(value) {
    document.getElementById('screen').value += value;
  }

  function clearScreen() {
    document.getElementById('screen').value = '';
  }

  function calculate() {
    const screen = document.getElementById('screen');
    try {
      screen.value = eval(screen.value) || "0";
    } catch {
      screen.value = "Error";
    }
  }
