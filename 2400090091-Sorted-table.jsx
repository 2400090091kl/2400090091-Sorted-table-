<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sortable Employee Table</title>
  <style>
    table {
      border-collapse: collapse;
      width: 60%;
      margin: 24px auto;
      font-family: Arial, sans-serif;
    }
    th, td {
      border: 1px solid #555;
      padding: 10px 16px;
      text-align: left;
    }
    th {
      background: #28527a;
      color: white;
      cursor: pointer;
      user-select: none;
      transition: background 0.2s;
    }
    th:hover {
      background: #1985a1;
    }
    tr:nth-child(even) {
      background: #f7f7f7;
    }
    tr:nth-child(odd) {
      background: #edf7fa;
    }
    tr:hover td {
      background: #f9d342;
      color: #222;
      transition: background 0.3s, color 0.3s;
    }
  </style>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const employees = [
      { name: "Alice", department: "Engineering", salary: 70000 },
      { name: "Bob", department: "Marketing", salary: 60000 },
      { name: "Charlie", department: "HR", salary: 50000 },
      { name: "David", department: "Engineering", salary: 80000 },
      { name: "Eve", department: "Finance", salary: 90000 }
    ];

    function SortableTable() {
      const [tableData, setTableData] = React.useState([...employees]);
      const [sortColumn, setSortColumn] = React.useState(null);
      const [sortAsc, setSortAsc] = React.useState(true);

      const handleSort = (column) => {
        let asc = sortColumn === column ? !sortAsc : true;
        const sorted = [...tableData].sort((a, b) => {
          if (a[column] < b[column]) return asc ? -1 : 1;
          if (a[column] > b[column]) return asc ? 1 : -1;
          return 0;
        });
        setSortColumn(column);
        setSortAsc(asc);
        setTableData(sorted);
      };

      return (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>Name {sortColumn === "name" ? (sortAsc ? "▲" : "▼") : ""}</th>
              <th onClick={() => handleSort("department")}>Department {sortColumn === "department" ? (sortAsc ? "▲" : "▼") : ""}</th>
              <th onClick={() => handleSort("salary")}>Salary {sortColumn === "salary" ? (sortAsc ? "▲" : "▼") : ""}</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((emp, idx) => (
              <tr key={idx}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    ReactDOM.render(<SortableTable />, document.getElementById('root'));
  </script>
  <!-- Ensure you include React and ReactDOM in your HTML file -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</body>
</html>
