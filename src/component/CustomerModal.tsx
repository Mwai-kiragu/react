import { ICustomer } from "./Customer.type";
import "./CustomerModal.style.css";

type Props = {
  onClose: () => void;
  data: ICustomer;
};

const CustomerModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Customer Data</h3>
        <div>
          <div>
            <label>First Name : {data.firstName}</label>
          </div>
          <div>
            <label>Last Name : {data.lastName}</label>
          </div>
          <div>
            <label>Town Add. : {data.town}</label>
          </div>
          <div>
            <label>Email Add. : {data.email}</label>
          </div>
          <div>
            <label>Number Add. : {data.number}</label>
          </div>
          <div>
            <label>Type : {data.type}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerModal;
