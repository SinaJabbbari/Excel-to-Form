function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('Form Creator') // Creates a new menu
        .addItem('Create Google Form', 'createAndPopulateForm') // Adds a menu item
        .addToUi();
}

function createAndPopulateForm() {
    // Get the active spreadsheet name to use as the form title
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    const formTitle = sheet.getName(); // Get name of the active spreadsheet
    const form = FormApp.create(formTitle); // Set title of the form to the spreadsheet name
    Logger.log('Created Form URL: ' + form.getEditUrl());

    // Read all data starting from the first row (no header row)
    const data = sheet.getDataRange().getValues();

    data.forEach((row) => {
        const questionText = row[0]; // Get question text from column A
        const options = row.slice(1).filter(option => option); // Get options from column B onward

        let inferredType = '';

        // Determine question type based on options
        if (options.length >= 2) {
            // Heuristic to detect a Linear Scale question
            if (questionText.toLowerCase().includes('rate') || questionText.toLowerCase().includes('scale')) {
                inferredType = "Linear Scale"; // Detect if the question is about rating
            } else {
                inferredType = "Multiple Choice"; // Default to multiple choice
            }
        } else if (options.length === 1) {
            inferredType = "Short Answer"; // A single option implies a short answer
        } else {
            inferredType = "Short Answer"; // No options also implies a short answer
        }

        // Adding questions based on inferred type
        switch (inferredType) {
            case "Multiple Choice":
                const mcItem = form.addMultipleChoiceItem();
                mcItem.setTitle(questionText)
                      .setChoiceValues(options);
                break;
            case "Checkbox":
                const checkboxItem = form.addCheckboxItem();
                checkboxItem.setTitle(questionText)
                            .setChoiceValues(options);
                break;
            case "Dropdown":
                const dropdownItem = form.addListItem();
                dropdownItem.setTitle(questionText)
                            .setChoiceValues(options);
                break;
            case "Short Answer":
                form.addTextItem().setTitle(questionText);
                break;
            case "Paragraph":
                form.addParagraphTextItem().setTitle(questionText);
                break;
            case "Linear Scale":
                // Assume options represent points of a scale (e.g., 1, 2, 3, 4, 5)
                const scaleItem = form.addScaleItem();
                scaleItem.setTitle(questionText)
                         .setLabels('Lowest', 'Highest')
                         .setBounds(1, options.length); // Assuming options length defines the scale
                break;
            default:
                Logger.log('No suitable type found for the question: ' + questionText);
        }
    });
}
