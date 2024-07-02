
document.getElementById("addblood").addEventListener("click", donateButtonClicked);
// Function for button click

function donateButtonClicked() {
    alert("Blood Stocks Updated");

    // Retrieve the blood group value from the data attribute
    var bloodGroup = document.getElementById("getblood").getAttribute("data-blood-group");

    // Use the blood group value as needed
    // For example, you can pass it to another function or perform some logic based on the blood group

    // Create a hidden form
    var form = document.createElement("form");
    form.method = "post";
    form.action = "update_donation.php";

    // Create an input field for the blood group value
    var bloodGroupInput = document.createElement("input");
    bloodGroupInput.type = "hidden";
    bloodGroupInput.name = "bloodGroup";
    bloodGroupInput.value = bloodGroup;

    // Add the input field to the form
    form.appendChild(bloodGroupInput);

    // Add the form to the document body
    document.body.appendChild(form);

    // Submit the form
    form.submit();
}
