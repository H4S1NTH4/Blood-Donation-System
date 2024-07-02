
      window.onload = function() {
        var minusButtons = document.getElementsByClassName('m');
        var plusButtons = document.getElementsByClassName('p');
        
  
        for (var i = 0; i < minusButtons.length; i++) {
          minusButtons[i].addEventListener('click', function() {
            updateIssueCount(this, -1);
          });
        }
  
        for (var i = 0; i < plusButtons.length; i++) {
          plusButtons[i].addEventListener('click', function() {
            updateIssueCount(this, 1);
          });
        }
  
        function updateIssueCount(button, increment) {
          var row = button.parentNode.parentNode;
         
          var issueCountCell = row.cells[4];
          var packetCountCell = row.cells[2];
        
          var currentIssueCount = parseInt(issueCountCell.innerText);
          var currentPacketCount = parseInt(packetCountCell.innerText);
        
          var newIssueCount = currentIssueCount + increment;
          var newPacketCount = currentPacketCount - increment;
          
          issueCountCell.innerText = newIssueCount;
          packetCountCell.innerText = newPacketCount;
         
          var amountCell = row.cells[1];
          var newAmount = newPacketCount * 500;
          amountCell.innerText = newAmount;
         
          
           
          if (newPacketCount == 0) {
            alert('No more packets left!');
            return;
          }
        }
        
      

    // Get the button element by its ID
var issueButton = document.getElementById('issueid');

// Attach an event listener to the button
issueButton.addEventListener('click', updateTable);
    
      // Function to be executed when the button is clicked
function updateTable() {
  // Perform your desired actions here
  
  var form = document.createElement('form');
  form.style.display = 'none';
  form.action = 'blood_update.php'; // Replace with your backend script URL
  form.method = 'POST';

  var table = document.getElementById('idbldmng');
  var rows = table.getElementsByTagName('tr');

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];

    var bloodType = row.cells[0].innerText;
    var amount = row.cells[1].innerText;
    var packets = row.cells[2].innerText;

    var bloodTypeInput = document.createElement('input');
    bloodTypeInput.type = 'hidden';
    bloodTypeInput.name = 'bloodType[]';
    bloodTypeInput.value = bloodType;
    form.appendChild(bloodTypeInput);
    
    var packetsInput = document.createElement('input');
    packetsInput.type = 'hidden';
    packetsInput.name = 'packets[]';
    packetsInput.value = packets;
    form.appendChild(packetsInput);

    var amountInput = document.createElement('input');
    amountInput.type = 'hidden';
    amountInput.name = 'amount[]';
    amountInput.value = amount;
    form.appendChild(amountInput);
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
 

  // Add your desired actions here
  alert('Database Updated!');



  

  



  //console.log('Button clicked!');
  // You can add more code to execute any specific functionality
}


  
};  
