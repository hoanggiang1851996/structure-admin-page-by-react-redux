export function validatorUserName(rule, value, callback) {
  const regex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;

  if ( value && value.length < 4) {
    callback('Minimum length 4 char');
  } else if (value && value.length > 16) {
    callback('Maximum length 16 char');
  } else if (value && !regex.test(value)) {
    callback('The input is not valid User Name');
  } else {
    callback();
  }
}

export function validatorPassWord(rule, value, callback) {
  if ( value && value.length < 4) {
    callback('Minimum length 4 char');
  } else if (value && value.length > 16) {
    callback('Maximum length 16 char');
  } else {
    callback();
  }
}

export function validatorConfirmPassword(rule, value, callback, form, fieldName) {
  if (value && value !== form.getFieldValue(fieldName)) {
    callback('Two passwords that you enter is inconsistent!');
  } else {
    callback();
  }
}

export function validatorDate(rule, value, callback) {
  const today = new Date();
  if (value && value > today) {
    callback('Birth date must be a day in the past!');
  } else {
    callback();
  }
}
