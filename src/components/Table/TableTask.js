import React from "react";
import { useTable, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/table.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
import ModalEditTask from "../Modals/ModalEditTask.js"


function TableTask({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter } =
    useTable({
      columns,
      data,
    }, useGlobalFilter,
      useSortBy,
      usePagination
    );

  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)

    return (
      <span>
        Cerca:{' '}
        <input className="form-control"
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </span>
    )
  }

  // Render the UI for your table
  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <Table responsive striped bordered hover  {...getTableProps()} border="1">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>

              {headerGroup.headers.map(column => (

                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  { }
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼'
                        : ' ▲'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {

            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>

                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>

      <ButtonGroup className="me-2" size="sm">
        <Button  onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </Button>{' '}
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </Button>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </Button>
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </Button>
      </ButtonGroup>
      <div style={{ float: 'right', color: '#5e5e5e' }}>
        <span>
          Pagina{' '}
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <select className="form-select"
          value={state.pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Mostra {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default TableTask;