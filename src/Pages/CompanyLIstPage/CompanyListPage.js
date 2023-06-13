import React, { useEffect, useState } from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";

const CompanyListPage = () => {
  // Fatch Data
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleView = (row) => {
    // Handle View button click here
    console.log("View button clicked for ID:", row);
  };

  const handleEdit = (row) => {
    // Handle Edit button click here
    console.log("Edit button clicked for ID:", row);
  };

  const handleDelete = (id) => {
    // Handle Delete button click here
    console.log("Delete button clicked for ID:", id);
  };

  // Define the columns
  const columns = React.useMemo(
    () => [
      { Header: "#", accessor: "sl" },
      {
        Header: "Company",
        accessor: "company",
        accessor: "email",
        accessor: "img",
        Cell: ({ row }) => (
          <div className="flex">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img
                  src={row.original.img}
                  alt={row.original.company}
                  className="company-image"
                />
              </div>
            </div>
            <div className="company-details">
              <p className="company-name">{row.original.company}</p>
              <p className="company-email">{row.original.email}</p>
            </div>
          </div>
        ),
      },
      { Header: "Projects", accessor: "projects" },
      { Header: "Status", accessor: "status" },
      { Header: "Net Ammount", accessor: "netAmmount" },
      {
        Header: "Actions",
        accessor: "id",
        Cell: ({ value }) => (
          <div className="flex gap-4">
            <button onClick={() => handleView(value)}>View</button>
            <button onClick={() => handleEdit(value)}>Edit</button>
            <button onClick={() => handleDelete(value)}>Delete</button>
          </div>
        ),
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    pageOptions,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }, // Initial pagination settings
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <div className="mx-4">
      <div className="bg-gray-600 flex justify-between">
        <div className="py-4">
          <p className="text-xl px-4 py-2  text-white">Company LIst</p>
        </div>
        <div className="py-4 px-4">
          <button class="bg-[#05A6F6] hover:bg-sky-800 text-white font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
            Add New Company
          </button>
        </div>
      </div>
      <>
        <div className="px-4 py-4 flex justify-between">
          <div className="text-gray-600">
            Go to page :{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: "50px" }}
            />
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="text-gray-600" {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between">
          <div className="my-4 px-4 text-gray-600">
            Showing Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </div>
          <div className="flex gap-4 px-4 text-gray-600">
            <button
              className="hover:text-sky-800 "
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"Home"}
            </button>
            <button
              className="hover:text-sky-800 "
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {"Next"}
            </button>
            <button
              className="hover:text-sky-800 "
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"Previous"}
            </button>
            <button
              className="hover:text-sky-800 "
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {"End"}
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default CompanyListPage;
