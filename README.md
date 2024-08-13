# Google Sheets to Google Forms Creator

This project provides a Google Apps Script that allows users to create a Google Form directly from a Google Sheets spreadsheet. The script interprets questions and their potential answers from the spreadsheet and generates a corresponding form, enabling user interaction and data collection quickly and efficiently.

## Features

- **Dynamic Form Creation**: Automatically converts the contents of a Google Sheets spreadsheet into a Google Form.
- **Question Type Detection**: The script infers the type of question based on the content of the cells:
  - Multiple Choice
  - Checkbox
  - Dropdown List
  - Short Answer
  - Paragraph Text
  - Linear Scale
- **User-Friendly Interface**: Integrates smoothly into Google Sheets with a custom menu for easy access.

## Prerequisites

1. **Google Account**: You need a Google account to use Google Sheets and Google Forms.
2. **Google Apps Script**: Basic understanding of how to work with Google Apps Script.

## Installation

1. Open a Google Sheets spreadsheet where you want to create the form.
2. Click on `Extensions` > `Apps Script`.
3. Delete any default code in the script editor and replace it with the code provided in this repository.
4. Save the project with a meaningful name.
5. Close the Apps Script tab.

## Usage

1. After saving the script, go back to your Google Sheets.
2. Reload the spreadsheet to see the new menu option "Form Creator" in the menu bar.
3. Select `Form Creator > Create Google Form`.
4. Check the logs for the URL of the created Google Form.

## Spreadsheet Format

- The first column (Column A) should contain the question text.
- Subsequent columns (Column B and onward) should contain possible answers (options) for multiple-choice, checkbox, or dropdown questions.
- Each row corresponds to a single question.

### Example

| Question                        | Option 1 | Option 2 | Option 3 |
|---------------------------------|----------|----------|----------|
| What is your favorite color?    | Red      | Blue     | Green    |
| Rate your satisfaction (1-5)    |          |          |          |
| Would you recommend us?         | Yes      | No       |          |

## Contributing

Contributions are welcome! If you have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Google Apps Script Documentation: [Google Apps Script](https://developers.google.com/apps-script)
