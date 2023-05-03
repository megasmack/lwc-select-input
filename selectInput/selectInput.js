import { LightningElement, api, track } from 'lwc';

export default class SelectInput extends LightningElement {
    // --- Private properties ---

    _name = '';
    _value = '';
    rendered = false;
    hasError = false;

    /** @type {Option[]} */
    @track _options = [];

    // --- Public properties ---

    @api autocomplete = '';
    @api label = '';
    @api placeholder = 'Select an Option';
    @api messageWhenValueMissing = 'Complete this field.';
    @api disabled = false;
    @api required = false;
    @api fieldLevelHelp = '';

    /** @type {Variant} */
    @api variant = 'label-stacked';

    @api
    get options() {
        return this._options;
    }

    set options(value) {
        this._options = value.map((option) => ({
            ...option,
            key: option?.value
        }));
    }

    @api
    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    @api get name() {
        return this._name;
    }

    set name(value) {
        this.setAttribute('name', value);
        this._name = value;
    }

    // --- Lifecycle Hooks ---

    renderedCallback() {
        this.rendered = true;
    }

    // --- Public Methods ---

    @api
    focus() {
        if (this.rendered) {
            this.template.querySelector('select').focus();
        }
    }
    @api
    blur() {
        if (this.rendered) {
            this.template.querySelector('select').blur();
        }
    }

    @api
    checkValidity() {
        return this.required ? !!this._value : true;
    }

    @api
    reportValidity() {
        this.hasError = !this.checkValidity();
    }

    // --- Getters ---

    /**
     * Change the option list to select based on value set.
     * @returns {Option[]}
     */
    get mappedOptions() {
        return this._options.map((option) => ({
            ...option,
            selected: option.value === this._value
        }));
    }

    /**
     * If no value is set, set the default option.
     * @returns {boolean}
     */
    get defaultSelection() {
        return !this._value;
    }

    get componentClass() {
        const base = 'slds-form-element';
        const error = this.hasError ? ' slds-has-error' : '';
        const variant = this.variant === 'label-inline' ? ' slds-form-element_horizontal' : '';
        return `${base}${error}${variant}`;
    }

    get labelClass() {
        const base = 'slds-form-element__label';
        const variant = this.variant === 'label-hidden' ? ' slds-assistive-text' : '';
        return `${base}${variant}`;
    }

    get selectClass() {
        const base = 'slds-combobox__input slds-input_faux';
        const variant = this.variant === 'label-inline' ? ' slds-grow' : '';
        const disabled = this.disabled ? ' slds-is-disabled' : '';
        return `${base}${variant}${disabled}`;
    }

    // --- Event Handlers ---

    handleFocus() {
        this.dispatchEvent(new CustomEvent('focus'));
    }

    handleBlur() {
        this.reportValidity();
        this.dispatchEvent(new CustomEvent('blur', { detail: this._value }));
    }

    handleSelect(event) {
        this._value = event.target.value;
        this.dispatchEvent(new CustomEvent('change', { detail: this._value }));
    }
}