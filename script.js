// Function to generate sticker content
function generateStickerContent(productName, mrp, manufactureDate, expiryDate, contact) {
    var stickerContent = "Product Name: " + productName + "<br>";
    stickerContent += "MRP: " + mrp + "<br>";
    stickerContent += "Manufacture Date: " + manufactureDate + "<br>";
    stickerContent += "Expiry Date: " + expiryDate + "<br>";
    stickerContent += "Contact: " + contact;
    return stickerContent;
}

// Function to create a preset item
function createPresetItem(stickerContent) {
    var presetItem = document.createElement('li');
    presetItem.classList.add('preset-item');
    presetItem.innerHTML = stickerContent;

    var printButton = document.createElement('button');
    printButton.innerText = 'Print';
    printButton.onclick = function() {
        printSticker(stickerContent);
    };
    presetItem.appendChild(printButton);

    var editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.onclick = function() {
        editPreset(stickerContent);
    };
    presetItem.appendChild(editButton);

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        deletePreset(presetItem);
    };
    presetItem.appendChild(deleteButton);

    return presetItem;
}

// Function to print a sticker
function printSticker(stickerContent) {
    var win = window.open('', '_blank');
    win.document.write('<html><head><title>Sticker</title></head><body>');
    win.document.write(stickerContent);
    win.document.write('</body></html>');
    win.document.close();
    win.focus();
    win.print();
}

// Function to edit a preset
function editPreset(stickerContent) {
    // To be implemented
    // You can use prompt() or a modal dialog to edit the preset
}

// Function to delete a preset
function deletePreset(presetItem) {
    presetItem.remove();
}

// Event listener for Generate Sticker button
document.getElementById('generate-button').addEventListener('click', function() {
    // Get values from input fields
    var productName = document.getElementById('productName').value;
    var mrp = document.getElementById('mrp').value;
    var manufactureDate = document.getElementById('manufactureDate').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var contact = document.getElementById('contact').value;

    // Generate sticker content
    var stickerContent = generateStickerContent(productName, mrp, manufactureDate, expiryDate, contact);

    // Create a new preset item and append it to the presets list
    var presetsList = document.getElementById('presets-list');
    var presetItem = createPresetItem(stickerContent);
    presetsList.appendChild(presetItem);
});
