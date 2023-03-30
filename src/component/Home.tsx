import { useEffect, useState } from "react";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import { ICustomer, PageEnum } from "./Customer.type";
import CustomerList from "./CustomerList";
import "./Home.style.css";

const Home = () => {
  const [customerList, setCustomerList] = useState([] as ICustomer[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as ICustomer);

  useEffect(() => {
    const listInString = window.localStorage.getItem("CustomerList");
    if (listInString) {
      _setCustomerList(JSON.parse(listInString));
    }
  }, []);

  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setCustomerList = (list: ICustomer[]) => {
    setCustomerList(list);
    window.localStorage.setItem("CustomerList", JSON.stringify(list));
  };

  const addCustomer = (data: ICustomer) => {
    _setCustomerList([...customerList, data]);
  };

  const deleteCustomer = (data: ICustomer) => {
    // To Index from array i,e employeeList
    // Splice that
    // Update new record

    const indexToDelete = customerList.indexOf(data);
    const tempList = [...customerList];

    tempList.splice(indexToDelete, 1);
    _setCustomerList(tempList);
  };

  const editEmployeeData = (data: ICustomer) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: ICustomer) => {
    const filteredData = customerList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = customerList.indexOf(filteredData);
    const tempData = [...customerList];
    tempData[indexOfRecord] = data;
    _setCustomerList(tempData);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>React: CRUD Application</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Customer"
              onClick={onAddEmployeeClickHnd}
              className="add-employee-btn"
            />
            <CustomerList
              list={customerList}
              onDeleteClickHnd={deleteCustomer}
              onEdit={editEmployeeData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddCustomer
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addCustomer}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditCustomer
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
