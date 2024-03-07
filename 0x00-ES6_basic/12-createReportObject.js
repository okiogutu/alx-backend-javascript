export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeeLists) {
      return Object.keys(employeeLists).length;
    },
  };
}
