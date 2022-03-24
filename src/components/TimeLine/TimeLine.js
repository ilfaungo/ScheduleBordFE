import React, { useState, useCallback  } from 'react';
import ReactApexChart from "react-apexcharts";
import {parseTimeLineObject} from '../Services/TimeLineObject'
import datiArray from '../../mock.js'
import '../../assets/css/timeline.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, Row , Col, Card, Container } from "react-bootstrap";
import RestClient from "../../components/Services/RestClient.js";

const client = new RestClient();

function Timeline() {
    let dataTimeheet = parseTimeLineObject(datiArray);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleClick = () =>{
        alert('ciao')
       client.getTImeLine();
           
    }
    
    return (
        <>
        <Container>
  <Row>
    <Col>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
<Button size="sm" onClick={handleClick}><i className="fas fa-search"></i></Button>
    </Col>
  </Row>
</Container>

        <div id="chart">
        <ReactApexChart options={dataTimeheet.options} series={dataTimeheet.series} type="rangeBar" height={450} />
      </div>
      </>
    );
  }

  export default Timeline;