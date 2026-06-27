function press(val) {
      document.getElementById('display').value += val;
    }
    function calculate() {
      let exp = document.getElementById('display').value;
      document.getElementById('display').value = eval(exp);
    }
    function cleardisplay() {
      document.getElementById('display').value = '';
    }