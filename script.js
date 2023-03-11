const form = document.querySelector('#combustible-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const distance = parseFloat(document.querySelector('#distance').value.replace(/,/g, ''));
  const price = parseFloat(document.querySelector('#price').value.replace(/,/g, ''));
  const consumption = parseFloat(document.querySelector('#consumption').value.replace(/,/g, ''));
  const cost = (distance / 100) * consumption * price;
  const resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = `Result: The total cost of combustible used for ${distance.toLocaleString()} kilometers is ${cost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} Euros (€).`;
  // Reload the page after 30 seconds
  setTimeout(function() {
    window.location.reload();
  }, 30000);
});


function CalculateNew() {
    // var msg;
    // msg= " Recalculate?";
    // var agree=confirm(msg);
    // if (agree)
    return window.location.reload();
    // else
    // return false;
    }

	const calculateBtn = document.querySelector('#calculateBtn');

	function toggleButtonColor() {
	  const distance = document.querySelector('#distance').value;
	  const price = document.querySelector('#price').value;
	  const consumption = document.querySelector('#consumption').value;
	  
	  if (distance && price && consumption) {
		calculateBtn.style.backgroundColor = '#9966ff';
	  } else {
		calculateBtn.style.backgroundColor = '';
	  }
	}
	
	document.querySelectorAll('input').forEach(input => {
	  input.addEventListener('input', toggleButtonColor);
	});