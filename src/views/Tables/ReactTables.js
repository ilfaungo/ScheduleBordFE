import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import ModalEditTask from "../../components/Modals/ModalEditTask"

// core components
import ReactTable from "components/ReactTable/ReactTable.js";

const dataTable = [{
  id:1,
  name:'Mario',
  task:'fine fase 1',
  note:'rivedere logicche fe',
  schedule: new Date().toISOString(),
  },
  {
    id:2,
    name:'Lugi',
    task:'fine fase 2',
    note:'rivedere logicche be',
    schedule: new Date().toISOString(),
    }
];

function ReactTables() {
  const [data, setData] = React.useState(
    dataTable.map((prop, key) => {
      return {
        id: key,
        name: prop.name,
        task: prop.task,
        note: prop.note,
        schedule: prop.schedule,
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <ModalEditTask row={prop}></ModalEditTask>
              
            
          
            {/* use this button to remove the data row */}
            <Button
              onClick={() => {
                var newData = data;
                newData.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    newData.splice(i, 1);
                    return true;
                  }
                  return false;
                });
                setData([...newData]);
              }}
              variant="danger"
              size="sm"
              className="btn-link remove text-danger"
            >
              <i className="fa fa-times" />
            </Button>{" "}
          </div>
        ),
      };
    })
  );
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <h4 className="title">Task</h4>
           
            <Card>
              <Card.Body>
                <ReactTable
                  data={data}
                  columns={[
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
                      Header: "Actions",
                      accessor: "actions",
                      sortable: false,
                      filterable: false,
                    },
                  ]}
                 
                  className="-striped -highlight primary-pagination"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ReactTables;
