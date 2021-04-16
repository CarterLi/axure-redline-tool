import PropTypes from 'prop-types';
import React from 'react';

import ColorSwatchComponent from '../ColorSwatchComponent';
import TooltipComponent from '../TooltipComponent';

import CSS_COLORS from '../../utils/cssColors';

import { TOOLTIP_VISIBLE_TIME } from '../../globalConstants';

import './styles.scss';

const colorVars = [
    { hex: '#FFFFFF', var: 'var(--color-neutrals-0)' },
    { hex: '#FAFAFA', var: 'var(--color-neutrals-1)' },
    { hex: '#F0F0F0', var: 'var(--color-neutrals-2)' },
    { hex: '#E6E6E6', var: 'var(--color-neutrals-3)' },
    { hex: '#DBDBDB', var: 'var(--color-neutrals-4)' },
    { hex: '#CCCCCC', var: 'var(--color-neutrals-5)' },
    { hex: '#ADADAD', var: 'var(--color-neutrals-6)' },
    { hex: '#8F8F8F', var: 'var(--color-neutrals-7)' },
    { hex: '#707070', var: 'var(--color-neutrals-8)' },
    { hex: '#525252', var: 'var(--color-neutrals-9)' },
    { hex: '#383838', var: 'var(--color-neutrals-10)' },
    { hex: '#242424', var: 'var(--color-neutrals-11)' },
    { hex: '#000000', var: 'var(--color-neutrals-12)' },
    { hex: '#F5F5F5', var: 'var(--color-neutrals-add-1)' },
    { hex: '#EBEBEB', var: 'var(--color-neutrals-add-2)' },

    { hex: '#555555', var: 'var(--color-neutrals-xxx)' },

    { hex: '#70CF92', var: 'var(--color-success-light)' },
    { hex: '#5FB07C', var: 'var(--color-success-standard)' },
    { hex: '#4E9065', var: 'var(--color-success-dark)' },
    { hex: '#F1D235', var: 'var(--color-caution-light)' },
    { hex: '#CDB22D', var: 'var(--color-caution-standard)' },
    { hex: '#A89225', var: 'var(--color-caution-dark)' },
    { hex: '#E19A4E', var: 'var(--color-warning-light)' },
    { hex: '#BF8342', var: 'var(--color-warning-standard)' },
    { hex: '#9D6B36', var: 'var(--color-warning-dark)' },
    { hex: '#CE5F5F', var: 'var(--color-danger-light)' },
    { hex: '#AF5050', var: 'var(--color-danger-standard)' },
    { hex: '#8F4242', var: 'var(--color-danger-dark)' },
    { hex: '#5CB2D1', var: 'var(--color-ready-light)' },
    { hex: '#4E97B1', var: 'var(--color-ready-standard)' },
    { hex: '#407C91', var: 'var(--color-ready-dark)' },
    { hex: '#BFBCBF', var: 'var(--color-info-light)' },
    { hex: '#A29FA2', var: 'var(--color-info-standard)' },
    { hex: '#858385', var: 'var(--color-info-dark)' },

    { hex: '#82AAB9', var: 'var(--border-color-primary-light)' },
    { hex: '#F8E89A', var: 'var(--border-color-caution-light)' },
    { hex: '#F7C38C', var: 'var(--border-color-highlight-light)' },
    { hex: '#B7E7C8', var: 'var(--border-color-success-light)' },
    { hex: '#F0CCA6', var: 'var(--border-color-warning-light)' },
    { hex: '#E6AFAF', var: 'var(--border-color-danger-light)' },
    { hex: '#DFDDDF', var: 'var(--border-color-info-light)' },
    { hex: '#ADD8E8', var: 'var(--border-color-ready-light)' },

    { hex: '#DF9595', var: 'var(--color-group-1)' },
    { hex: '#D5B28E', var: 'var(--color-group-2)' },
    { hex: '#D5C58E', var: 'var(--color-group-3)' },
    { hex: '#EBD17B', var: 'var(--color-group-4)' },
    { hex: '#DBDC8F', var: 'var(--color-group-5)' },
    { hex: '#BCC896', var: 'var(--color-group-6)' },
    { hex: '#9CC896', var: 'var(--color-group-7)' },
    { hex: '#96C8BC', var: 'var(--color-group-8)' },
    { hex: '#96BFC8', var: 'var(--color-group-9)' },
    { hex: '#96AEC8', var: 'var(--color-group-10)' },
    { hex: '#969FC8', var: 'var(--color-group-11)' },
    { hex: '#B296C8', var: 'var(--color-group-12)' },
    { hex: '#C795D1', var: 'var(--color-group-13)' },
    { hex: '#DC94C8', var: 'var(--color-group-14)' },
    { hex: '#E29CB9', var: 'var(--color-group-15)' },
    { hex: '#EAB9B9', var: 'var(--color-group-1-light)' },
    { hex: '#E3CCB5', var: 'var(--color-group-2-light)' },
    { hex: '#E3D9B5', var: 'var(--color-group-3-light)' },
    { hex: '#F1E1A9', var: 'var(--color-group-4-light)' },
    { hex: '#E7E8B6', var: 'var(--color-group-5-light)' },
    { hex: '#C7DBBA', var: 'var(--color-group-6-light)' },
    { hex: '#BEDBBA', var: 'var(--color-group-7-light)' },
    { hex: '#BADBD3', var: 'var(--color-group-8-light)' },
    { hex: '#BAD5DB', var: 'var(--color-group-9-light)' },
    { hex: '#BACADB', var: 'var(--color-group-10-light)' },
    { hex: '#BAC0DB', var: 'var(--color-group-11-light)' },
    { hex: '#CCBADB', var: 'var(--color-group-12-light)' },
    { hex: '#DAB9E1', var: 'var(--color-group-13-light)' },
    { hex: '#E8B9DB', var: 'var(--color-group-14-light)' },
    { hex: '#ECBED1', var: 'var(--color-group-15-light)' },
    { hex: '#BD7E7E', var: 'var(--color-group-1-dark)' },
    { hex: '#B59778', var: 'var(--color-group-2-dark)' },
    { hex: '#B5A778', var: 'var(--color-group-3-dark)' },
    { hex: '#C7B168', var: 'var(--color-group-4-dark)' },
    { hex: '#BABB79', var: 'var(--color-group-5-dark)' },
    { hex: '#90AA7F', var: 'var(--color-group-6-dark)' },
    { hex: '#84AA7F', var: 'var(--color-group-7-dark)' },
    { hex: '#7FAA9F', var: 'var(--color-group-8-dark)' },
    { hex: '#7FA2AA', var: 'var(--color-group-9-dark)' },
    { hex: '#7F94AA', var: 'var(--color-group-10-dark)' },
    { hex: '#7F87AA', var: 'var(--color-group-11-dark)' },
    { hex: '#977FAA', var: 'var(--color-group-12-dark)' },
    { hex: '#A97EB1', var: 'var(--color-group-13-dark)' },
    { hex: '#BB7DAA', var: 'var(--color-group-14-dark)' },
    { hex: '#C0849D', var: 'var(--color-group-15-dark)' }
];

class InputComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.rgbaRegEx = /rgb(a)?\(\d+,(\s+)?\d+,(\s+)?\d+(,(\s+)?\d(\.\d+)?)?\)/;
        this.hexRegEx = /#([a-fA-F]|\d){6}((\s+)?\d{1,3}%)?/;
        this.varRegEx = /var\(--[\w-]+\)/;
        this.cssColorRegEx = new RegExp(Object.keys(CSS_COLORS).join('|'), 'i');

        this.state = {
            inputValue: '',
            isCopiedTooltipActive: false,
            swatchColor: null
        };
    }

    componentDidMount() {
        const {
            inputValue,
            noFormat
        } = this.props;

        if (noFormat) {
            this.setState({
                inputValue
            });
        } else {
            this.checkColorSwatchRequired();
        }
    }

    componentDidUpdate(prevProps) {
        const {
            inputValue,
            noFormat
        } = this.props;

        const {
            inputValue: prevInputValue
        } = prevProps;

        if (noFormat && inputValue !== prevInputValue) {
            this.setState({
                inputValue
            });
        } else if (inputValue !== prevInputValue) {
            this.checkColorSwatchRequired();
        }
    }

    setSwatchValue = () => {
        const {
            inputValue
        } = this.state;

        const placeholder = '!*!';

        let colorArr;
        let extractedColorString = '';
        let newFormat = '';
        let opacity;
        let valueTemplate = '';

        // Determine if we're looking at a RGB(A) or hex value.
        if ((this.cssColorRegEx).test(inputValue)) {
            [extractedColorString] = inputValue.match(this.cssColorRegEx);
            valueTemplate = inputValue.replace(this.cssColorRegEx, placeholder);
        } else if ((this.rgbaRegEx).test(inputValue)) {
            [extractedColorString] = inputValue.match(this.rgbaRegEx);
            valueTemplate = inputValue.replace(this.rgbaRegEx, placeholder);
        } else if ((this.hexRegEx).test(inputValue)) {
            [extractedColorString] = inputValue.match(this.hexRegEx);
            valueTemplate = inputValue.replace(this.hexRegEx, placeholder);
        } else if ((this.varRegEx).test(inputValue)) {
            [extractedColorString] = inputValue.match(this.varRegEx);
            valueTemplate = inputValue.replace(this.varRegEx, placeholder);
        } else {
            // If we end up not passing a color at all.
            valueTemplate = inputValue;
        }

        if (this.cssColorRegEx.test(extractedColorString)) {
            const obj = Object.entries(CSS_COLORS).find(([color]) => color.toUpperCase() === extractedColorString.toUpperCase())[1];
            newFormat = obj.hex;
        } else if (this.varRegEx.test(extractedColorString)) {
            newFormat = colorVars.find((x) => x.var === extractedColorString).hex;
        } else if (/rgba/.test(extractedColorString)) {
            colorArr = extractedColorString.match(/(\d\.\d+)|\d+/g);
            newFormat = '#';

            for (let i = 0; i < 3; i++) {
                newFormat += (`0${Number(colorArr[i]).toString(16).toUpperCase()}`).slice(-2);
            }

            newFormat += ` ${Number(colorArr[3]) * 100}%`;
        } else if (/%/.test(extractedColorString)) {
            colorArr = extractedColorString.replace('#', '').slice(0, 6).match(/\w{2}/g);
            opacity = Number(extractedColorString.replace(/#\w{6}\s/, '').replace('%', '')) / 100;
            newFormat = `rgba(${parseInt(colorArr[0], 16)}, ${parseInt(colorArr[1], 16)}, ${parseInt(colorArr[2], 16)}, ${opacity})`;
        } else if (/rgb\(/.test(extractedColorString)) {
            colorArr = extractedColorString.replace(',', '').match(/\d+/g);
            newFormat = '#';

            colorArr.forEach((color) => {
                newFormat += (`0${Number(color).toString(16).toUpperCase()}`).slice(-2);
            });
        } else if (/#/.test(extractedColorString)) {
            const colorVar = colorVars.find((x) => x.hex === extractedColorString.toUpperCase());
            if (colorVar) {
                newFormat = colorVar.var;
            } else {
                colorArr = extractedColorString.replace('#', '').match(/\w{2}/g);
                newFormat = `rgb(${parseInt(colorArr[0], 16)}, ${parseInt(colorArr[1], 16)}, ${parseInt(colorArr[2], 16)})`;
            }
        }

        valueTemplate = valueTemplate.replace(placeholder, newFormat);

        this.setState({
            inputValue: valueTemplate
        });
    }

    /**
     * This function handles our mouseup event and selects the
     * field text.
     *
     * @param {mouseup event} event
     */
    handleCopy = (event) => {
        const {
            target: inputField
        } = event;

        inputField.select();
        document.execCommand('Copy');

        this.setState({
            isCopiedTooltipActive: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    isCopiedTooltipActive: false
                });
            }, TOOLTIP_VISIBLE_TIME);
        });
    }

    checkColorSwatchRequired = () => {
        const {
            inputValue
        } = this.props;

        const placeholder = '!*!';

        let swatchOpacity;
        let conditionedInputColorValue;
        let swatchColor;

        if ((this.rgbaRegEx).test(inputValue) && inputValue !== 'transparent') {
            /**
             * If we have RGBA, we round our opacity to two decimals of
             * precision. If the opacity is 1, we'll convert to RGB.
             */
            if ((/rgba/).test(inputValue)) {
                // Extract our RGBA substring.
                const rgbaExtraction = inputValue.match(this.rgbaRegEx)[0].replace(/\s+/g, '');

                swatchOpacity = Math.round(Number(rgbaExtraction.replace(/rgba\(\d+,\d+,\d+,(\d?(\.\d+)?)\)/, '$1')) * 100) / 100;
                swatchColor = rgbaExtraction.replace(/rgba\((\d+),(\d+),(\d+),(\d?(\.\d+)?)\)/, `rgba($1, $2, $3, ${placeholder})`);
                swatchColor = swatchColor.replace(placeholder, swatchOpacity);

                /**
                 * If our RGBA opacity is 1, then let's just convert
                 * things to RGB.
                 */
                if (swatchOpacity === 1) {
                    swatchColor = rgbaExtraction.replace(/rgba\((\d+),(\d+),(\d+),(\d?(\.\d+)?)\)/, 'rgb($1, $2, $3)');
                }

                conditionedInputColorValue = inputValue.replace(this.rgbaRegEx, swatchColor);
            } else {
                [swatchColor] = inputValue.match(this.rgbaRegEx);
            }
        } else {
            const cleanedInputValue = inputValue.trim().toLowerCase();
            const colorsList = Object.keys(CSS_COLORS);

            // See if we have a CSS color name in our input value.
            colorsList.forEach((color) => {
                const colorMatchRegex = new RegExp(`\\b${color.toLowerCase()}\\b`);

                if (colorMatchRegex.test(cleanedInputValue)) {
                    const {
                        [color]: {
                            rgb: rgbColor
                        }
                    } = CSS_COLORS;

                    swatchColor = rgbColor;
                }
            });
        }

        this.setState({
            inputValue: conditionedInputColorValue || inputValue,
            swatchColor
        });
    }

    render() {
        const {
            label
        } = this.props;

        const {
            inputValue,
            isCopiedTooltipActive,
            swatchColor
        } = this.state;

        return (
            <div className={InputComponent.displayName}>
                <label
                    className={`${InputComponent.displayName}__label`}
                >
                    {label}
                </label>
                <input
                    className={`${InputComponent.displayName}__input`}
                    readOnly
                    value={inputValue}
                    onMouseUp={this.handleCopy}
                />
                {
                    swatchColor
                    && (
                        <ColorSwatchComponent
                            className={`${InputComponent.displayName}__color-swatch`}
                            setSwatchValue={this.setSwatchValue}
                            swatchColor={swatchColor}
                        />
                    )
                }
                <TooltipComponent isVisible={isCopiedTooltipActive} />
            </div>
        );
    }
}

InputComponent.displayName = 'InputComponent';

InputComponent.propTypes = {
    inputValue: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    noFormat: PropTypes.bool
};

InputComponent.defaultProps = {
    noFormat: false
};

export default InputComponent;
