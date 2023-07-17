export  function formatted_number(
  value: string,
  maximumDecimalPlaces?: number
) {
  if (value) {
    const sanitizedValue = value.replace(/[^0-9.]+/g, '');

    const parts = sanitizedValue.split('.');
    const integerPart = parts[0];

    const decimalPart = parts[1] || '';
    const formattedIntegerPart = parseInt(integerPart, 10).toLocaleString();
    const truncatedDecimalPart = decimalPart.slice(
      0,
      maximumDecimalPlaces || 2
    );
    const formattedDecimalPart = truncatedDecimalPart.padEnd(0, '0');


    let formattedValue = '';
    if (formattedDecimalPart) {
      formattedValue = `${formattedIntegerPart}.${formattedDecimalPart}`;
    } else if (sanitizedValue.includes('.')) {
      formattedValue = `${formattedIntegerPart}.`;
    } else {
      formattedValue = formattedIntegerPart;
    }

    const finaldata = isNaN(parseFloat(formattedValue)) ? '' : formattedValue;

    return finaldata;
  } else {
    return '';
  }
}

