function validatePhoneNumber(phone_number: string, provider: "ET" | "SAF") {
  try {
    if (provider === "ET") {
      // Ethio Telecom
      return /^(0|\+251|251)(9|7)[0-9]{8}$/.test(phone_number);
    } else if (provider === "SAF") {
      // Safari Com
      return /^(0|\+251|251)(9|7)[0-9]{8}$/.test(phone_number);
    }
  } catch (error) {
    throw new Error(error);
  }
}

export default validatePhoneNumber;
