const validateEmail = (email) => {
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return re.test(email);
};

const validateEmailPhonenumber = (phone) => {
  var phoneno = /^\d{10}$/;
  if (phone.match(phoneno)) {
    return true;
  } else {
    return false;
  }
};

export default validateFields = (email, phone, password) => {
  if (!email || !validateEmail(email.toString())) {
    return 'Mail format not valid!';
  }
  if (!password || password.length < 6) {
    return 'Password length must be greater than 6 characters';
  }

  if (!phone || !validateEmailPhonenumber(phone)) {
    return 'Mail format not valid!';
  }

  return null;
};

export const validateEmailAndPassword = (email, password) => {
  if (!email || !validateEmail(email.toString())) {
    return 'Mail format not valid!';
  }
  if (!password || password.length < 6) {
    return 'Password length must be greater than 6 characters';
  }

  return null;
};
