const constraints = {
  emailAddress: {
    presence: {
      allowEmpty: false,
      message: "^Please enter a valid email address"
    },
    email: {
      message: "^Please enter a valid email address"
    }
  },
  password: {
    length: {
      minimum: 8,
      message: "^Password must be at least 8 characters"
    }
  }
};

export default constraints;
