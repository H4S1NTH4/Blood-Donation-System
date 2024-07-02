<script>
      window.onload = function() {
        var minusButtons = document.getElementsByClassName('m');
        var plusButtons = document.getElementsByClassName('p');
        var issueButton = document.getElementById('idissue');
        var form = document.getElementById('bloodform');
  
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
  
        issueButton.addEventListener('click', function() {
          form.submit();
          alert('Issued');
        });
  
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
          amountCell.innerText = newPacketCount * 500;
         
          if (newPacketCount == 0) {
            alert('No more packets left!');
            return;
          }
        }
      };
    </script>