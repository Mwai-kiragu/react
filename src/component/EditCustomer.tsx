import { useState } from "react";
import { ICustomer } from "./Customer.type";
import "./CustomerForm.style.css";

type Props = {
  data: ICustomer;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: ICustomer) => void;
};

const EditCustomer = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [town, setTown] = useState(data.town);
  const [email, setEmail] = useState(data.email);
  const [number, setNumber] = useState(data.number);
  const [type, setType] = useState(data.type);

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
    const updatedData: ICustomer = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      town: town,
      email: email,
      number: number,
      type: type,
    };
    onUpdateClickHnd(updatedData);
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
        <div>
          <label>Town : </label>
          <input type="text" value={town} onChange={onTownChangeHnd} />
        </div>
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

            <option value="individual" onChange={onTypeChangeHnd}>Individual</option>

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

export default EditCustomer;
