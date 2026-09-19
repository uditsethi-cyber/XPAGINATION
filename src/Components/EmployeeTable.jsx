import { useState, useEffect } from "react";
import DataTable from "./DataTable/DataTable";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [columns, setColumns] = useState([
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "role",
      label: "Role",
    },
  ]);
  const ROWS_PER_PAGE = 10;

  const fetchEmployees = async () => {
    try {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  };
  useEffect(() => {
    (async () => {
      const employeesData = await fetchEmployees();
      setEmployees(employeesData);
    })();
  }, []);
  return (
    <>
      <h4>EmployeeTable</h4>
      <DataTable
        data={employees}
        columns={columns}
        rowsPerPage={ROWS_PER_PAGE}
      />
    </>
  );
};

export default EmployeeTable;
