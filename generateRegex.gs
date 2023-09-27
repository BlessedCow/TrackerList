function generateRegex(names) {
  var regexes = [];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var escapedName = escapeSpecialCharacters(name);
    var regex = new RegExp("^(?<name>" + escapedName + ")");
    regexes.push(regex);
  }

  return regexes;
}

function escapeSpecialCharacters(name) {
  return name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function outputRegexToSheet() {
  var names = [
    "Ava Walker",
    "Benjamin Crawford",
    "Daniel Mitchell",
    "Eleanor Mitchell",
    "Isabella Turner",
    "Lucas Harrison",
    "Nathan Peterson",
    "Olivia Anderson",
    "Sophie Reynolds",
    "William Foster"
  ];
  // Add more names as needed
  // "",
 var regexes = generateRegex(names);

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var startRow = 2; // Row 2
  var startColumn = 11; // Column K

  for (var i = 0; i < regexes.length; i++) {
    var regex = regexes[i];
    var output = regex.toString();
    sheet.getRange(startRow + i, startColumn).setValue(output);
  }
}
