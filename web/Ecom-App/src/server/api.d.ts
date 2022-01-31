//registration types
export interface RegisterBody {
  email: string;
  name: string;
  password: string;
  userType: UserType;
}
type UserType = "BUSINESS" | "PERSONAL";

//login types
export interface LoginBody {
  email: string;
  password: string;
}

//edit user types
export interface EditUserBody {
  email: string;
  name: string;
  address: {
    state: string;
    area: string;
    pinCode: string;
    addressType: AddressType;
  };
  phonenumber: {
    phonenumber: string;
    numberType: NumberType;
  };
}
type AddressType = "HOME" | "OFFICE" | "BUSINESS";
type NumberType = "HOME" | "WORK";
