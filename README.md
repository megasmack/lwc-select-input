# lwc-select-input
A Lightning Web Component that wraps a native HTML Select.

Does the lightning-combobox got you down? Just wish you could use a native HTML `select`, but have all the conveniences of other lightning inputs? Look no further! The `selectInput` component replicates the features of the lightning-combobox but using HTML selects, there by making use of the browser's native UI for dropdowns. No more dealing with combobox lists getting cut off by unexpected overflow CSS or other z-index issues!

## Usage

```html
<c-select-input
  label="State Selector"
  name="stateSelector"
  value={value}
  placeholder="Choose an Option"
  disabled={fieldDisabled}
  message-when-value-missing={requiredErrorLabel}
  onchange={handleSelectChange}
></c-select-input>
```

## Attributes

| NAME | TYPE | REQUIRED | DEFAULT | DESCRIPTION |
|---|---|---|---|---|
| autocomplete |  |  |  | Controls auto-filling of the field. |
| disabled | boolean | no | false | If present, the input field is disabled and users cannot interact with it. |
| field-level-help | string | no |   | Help text detailing the purpose and function of the input. |
| label | string | yes |   | Text label for the input. |
| message-when-value-missing | string | no | 'Complete this field.' | Error message to be displayed when the value is missing. The valueMissing error can be returned when you specify the required attribute for any input type. |
| placeholder | string | no |  | Text that is displayed when the field is empty, to prompt the user for a valid entry. |
| name | string | no |  | Specifies the name of an input element. |
| required | boolean | no | false | If present, the input field must be filled out before the form is submitted. |
| variant | string | no | 'label-stacked.' | The variant changes the appearance of an input field. Accepted variants include label-hidden and label-stacked. Use label-hidden to hide the label but make it available to assistive technology. Use label-stacked to place the label above the input field. |

## Methods

| NAME | ARGUMENTS | RETURNS | DESCRIPTION |
|---|---|---|---|
| blur |   |  | Removes focus from the select. |
| checkValidity |   | boolean | Checks if the input is valid. |
| focus |   |  | Sets focus on the select. |
| reportValidity |   |  | Displays the error messages and returns false if the input is invalid. If the input is valid, reportValidity() clears displayed error messages and returns true. |

## Events

| NAME | DETAIL | DESCRIPTION |
|---|---|---|
| onblur | Returns input value | Triggers on element blur. |
| onchange | Returns input value | Triggers on element change. |
| onfocus |  | Triggers on element focus. |