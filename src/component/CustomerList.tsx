import { useState } from "react";
import { ICustomer } from "./Customer.type";
import "./CustomerList.style.css";
import CustomerModal from "./CustomerModal";

type Props = {
  list: ICustomer[];
  onDeleteClickHnd: (data: ICustomer) => void;
  onEdit: (data: ICustomer) => void;
};

const CustomerList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as ICustomer | null);

  const viewCustomer = (data: ICustomer) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <article>
        <h3 className="list-header">Customer Data</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Town</th>
          <th>Email</th>
          <th>Number</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
        {list.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.town}</td>
              <td>{employee.email}</td>
              <td>{employee.number}</td>
              <td>{employee.type}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewCustomer(employee)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(employee)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <CustomerModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default CustomerList;
