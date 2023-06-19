#  Google Sheets Formatting Script

This script is designed to format a Google Sheets spreadsheet in a specific way. It performs several operations on the data in order to sort it, remove duplicates, and highlight rows based on certain criteria.
Usage

To use this script, simply copy and paste the code into the appropriate location in your Google Sheets document. The script can be run by clicking on the "Run" button or by assigning it a trigger to run automatically.
Operations

## The script performs the following operations:

    ⋅* Formats column E to display dates in the mm/dd/yyyy format.
    ⋅* Resets any existing highlighting or background and sorts the sheet by email, name, and date in ascending order.
    ⋅* Removes any duplicate rows based on columns 2 (email), 3 (name), and 5 (date).
    ⋅* Creates separate arrays for each of five different colors based on the day of the month in column E (date).
    ⋅* Sorts each array separately by email, name, and date in ascending order before concatenating them back together in a specific order.
    ⋅* Clears the sheet and writes the sorted data back to it. If two consecutive rows have different emails, a new row is inserted before the current one to separate them.
    ⋅* Highlights each row based on its day of the month color, using the same colors as before.

## Benefits

This formatting script is useful for organizing and formatting data in a spreadsheet, especially if you want to highlight certain rows based on their content. It saves time by automating many of the tasks required to get the data looking just the way you want it.
Conclusion

### Notes

*This script was written with a specific use in mind, so it doesn't apply to much else on its own.*
*It can, however, be broken down and re-used*

