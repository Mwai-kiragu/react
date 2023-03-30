import { useState } from "react";
import { ICustomer } from "./Customer.type";
import "./CustomerForm.style.css";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: ICustomer) => void;
};

const AddCustomer = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [town, setTown] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onTownChangeHnd = (e: any) => {
    setTown(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onNumberChangeHnd = (e: any) => {
    setNumber(e.target.value);
  };

  const onTypeChangeHnd = (e: any) => {
    setType(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: ICustomer = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      town: town,
      email: email,
      number: number,
      type: type,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" value={lastName} onChange={onLastNameChangeHnd} />
        </div>
        <div>
          <label>Town : </label>
          <input type="text" value={town} onChange={onTownChangeHnd} />
        </div>
        <div>
          <label>Email : </label>
          <input type="text" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <label>Number : </label>
          <input type="text" value={number} onChange={onNumberChangeHnd} />
        </div>
        <div>
          <label>Type : </label>
          <select onChange={onTypeChangeHnd}> 

            <option value="company" onChange={onTypeChangeHnd}>Company</option>

            <option value="individual" onChange={onTypeChangeHnd} >Individual</option>

          </select>
          {/* <input type="text" value={type} onChange={onTypeChangeHnd} /> */}
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Add Customer" />
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
