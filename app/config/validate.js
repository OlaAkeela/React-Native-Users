const minLengthValidator = (val, minLength) => val.length >= minLength;

// eslint-disable-next-line no-restricted-globals
const numberValidator = val => !isNaN(val);

const notEmptyValidator = val => val.trim() !== '';

const validate = (val, rules) => {
  const errors = [];
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  for (let i = 0; i < rules.length; i += 1) {
    const rule = rules[i];
    switch (rule) {
      case 'minLength':
        if (!minLengthValidator(val, rules[rule])) {
          errors.push(`Should be more than ${val} characters !`);
        }
        break;
      case 'isNum':
        if (!numberValidator(val)) {
          errors.push('Should be number !');
        }
        break;
      case 'notEmpty':
        if (!notEmptyValidator(val)) {
          errors.push('Should not be empty !');
        }
        break;
      case 'email':
        if (emailRegex.test(val) === false) {
          errors.push('Not a valid email address !');
        }
        break;
      default:
    }
  }
  return errors.length ? errors[0] : null;
};

export default validate;
