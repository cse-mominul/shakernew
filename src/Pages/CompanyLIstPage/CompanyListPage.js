import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
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
    // Find the index of the row with the provided id
    const index = data.findIndex((row) => row.id === id);

    console.log("deleted button clicked for ID:", id);

    if (index !== -1) {
      // Remove the row from the data state
      const updatedData = [...data];
      updatedData.splice(index, 1);
      setData(updatedData);
    }
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
            <AiFillDelete
              className="text-xl text-rose-500"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Delete
            </AiFillDelete>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_1" className="modal">
              <form method="dialog" className="modal-box">
                <AiFillDelete className="text-5xl text-rose-500"></AiFillDelete>
                <p className="py-4">
                  Are you sure you want to delete this item?
                </p>
                <div className="modal-action">
                  <button className="btn">Close</button>
                  <button onClick={() => handleDelete(value)} className="btn">
                    Ok
                  </button>
                </div>
              </form>
            </dialog>
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
    <div className="mx-12 my-6 rounded bg-[#F8FAFC] ">
      <div className="flex justify-between">
        <div className="py-4">
          <p className="px-4 text-red-500 text-3xl">#Company List</p>
        </div>
        <div className="py-4 px-4">
          <Link
            to="/projects"
            className="bg-rose-500 text-white active:bg-rose-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Add New Company
          </Link>
        </div>
      </div>
      <>
        <div className="px-4 py-4 flex justify-between">
          <div className="text-gray-600">
            Go to page :{" "}
            <input
              className="mx-4 text-center"
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
                <option className="bg-white" key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div className="relative flex w-full sm:w-7/12 md:w-3/12 px-2 flex-wrap items-stretch lg:ml-auto">
            <div className="flex">
              <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-rose-600 rounded-full text-sm  items-center rounded-r-none pl-2 py-1 text-pink-800 border-r-0 placeholder-pink-300">
                <FaSearch></FaSearch>
              </span>
            </div>
            <input
              type="text"
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search..."
              class="px-2 py-1 h-8 border border-solid  border-pink-600 rounded-full text-sm leading-snug text-pink-700 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-pink-300"
            />
          </div>
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
              className="hover:text-red-500 "
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"Home"}
            </button>
            <button
              className="hover:text-red-500 "
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {"Next"}
            </button>
            <button
              className="hover:text-red-500 "
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"Previous"}
            </button>
            <button
              className="hover:text-red-500 "
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
