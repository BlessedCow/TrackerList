#  Google Sheets Formatting Script

These scripts are designed to format a Google Sheets spreadsheet in a specific way. They perform several operations on the data.

# formatSheet.gs
The first script performs the following operations:
   * Formats column E to display dates in the mm/dd/yyyy format.
   * Resets any existing highlighting or background and sorts the sheet by email, name, and date in ascending order.
   * Removes any duplicate rows based on columns 2 (email), 3 (name), and 5 (date).
   * Creates separate arrays for each of five different colors based on the day of the month in column E (date).
   * Sorts each array separately by email, name, and date in ascending order before concatenating them back together in a specific order.
   * Clears the sheet and writes the sorted data back to it. If two consecutive rows have different emails, a new row is inserted before the current one to separate them.
   * Highlights each row based on its day of the month color, using the same colors as before.
## Benefits
This formatting script is useful for organizing and formatting data in a spreadsheet, especially if you want to highlight certain rows based on their content. It saves time by automating many of the tasks required to get the data looking just the way you want it.

# cleanUpSheet.gs
This script 
   * Unfreezes all frozen rows: The script uses sheet.setFrozenRows(0) to unfreeze all frozen rows in the spreadsheet. This allows for easier navigation and scrolling through the sheet.
   * Remove empty rows: The script iterates through the rows in reverse order and checks if a row is empty using data[i].join("").trim() == "". If a row is empty, it is deleted using sheet.deleteRow(i + 1).
   * Clear highlighting colors: The script uses sheet.getRange(1, 1, numRows, sheet.getLastColumn()).setBackground(null) to clear any highlighting colors applied to the cells.
   * Remove the first row: The script deletes the first row of the sheet using sheet.deleteRow(1) essentially deleting the header.
## Benefits
This clean up script is useful for getting the data cleaned up in a specific way asked by my supervisor.

# generateRegex.gs
This script is a little different.
   It generates regular expressions based on a list of names and outputs them to a Google Sheets spreadsheet.
   The regular expressions are constructed using the names as patterns, with whitespace characters escaped.
## Benefits
This is the first part in order to create regular expressions for ```const nameRegex``` for the next part.

# convertShorthandToFull.gs  #WIP
This is the second part which is still being worked on.
   This part, as the name suggests, converts the shorthand - whatever it may be - to "lastName, firstName" format.
   This way, any name that has been submitted as a nickname, shorthand, initials, etc can be recognized as the correct fullname.
   If there are two or more shorthand names that are the same, the code will then look at the column with the Email/ID and depending on what ID is associated with what name, it will assign the correct name.
This part is still a WIP as it's not formatted correctly.
There's also more I want to add.
   
### Notes
*These scripts were written with a specific use in mind, so it doesn't apply to much else on its own.*
*They can, however, be broken down and re-used*

