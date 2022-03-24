import React, { useState } from 'react';
import TableTask from '../components/Table/TableTask.js'
import { FaTrashAlt } from 'react-icons/fa';
import ModalAdd from "../components/Modals/ModalAdd.js"
import ModalEditTask from "../components/Modals/ModalEditTask.js"
import { Button, Modal,OverlayTrigger,Tooltip } from 'react-bootstrap';

var objdata = [{
  id: 1,
  name: 'Mario',
  task: 'fine fase 1',
  note: 'rivedere logicche fe',
  schedule: new Date().toISOString(),
},
{
  id: 2,
  name: 'Lugi',
  task: 'fine fase 2',
  note: 'rivedere logicche be',
  schedule: new Date().toISOString(),
}
];

const getData = () => {

  return objdata;
};

function TableList() {
  const data = React.useMemo(() => getData(), []);
  const [rows, deleteData] = useState(data);
  const [row, setData] = useState(data);

  const handleRemoveRow = () => {
    objdata = objdata.slice(0, -1);
    deleteData(objdata);
  };
  const handleEdit = () => {
    console.log(row);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Task",
        accessor: "task",
      },
      {
        Header: "Note",
        accessor: "note",
      },
      {
        Header: "Schedule",
        accessor: "schedule",
      },
      {
        Header: '',
        id: 'delete',
        accessor: (str) => 'delete',

        Cell: (tableProps) => (
          <Button size="sm" className='btn btn-danger btn-sm'
            onClick={
              handleRemoveRow
            }>
            <FaTrashAlt>
          </FaTrashAlt>
          </Button>
        ),
      }, {
        Header: '',
        id: 'edit',
        accessor: (str) => 'edit',

        Cell: (tableProps) => (
          <ModalEditTask row={tableProps.cell.row.values}></ModalEditTask>
        ),
      }
    ],
    []
  );



  return (


    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold"></h1>
        </div>
        <ModalAdd></ModalAdd>
        <div className="mt-4">
          <TableTask columns={columns} data={rows} />
        </div>
      </main>
    </div>

  );
}

export default TableList;