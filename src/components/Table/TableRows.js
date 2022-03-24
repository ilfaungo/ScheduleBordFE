function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(
        
        rowsData.map((data, index)=>{
            const {id, name, task, note}= data;
            return(
                <tr key={index}>
                <td>
               <input type="text" value={id} onChange={(evnt)=>(handleChange(index, evnt))} name="id" className="form-control"/>
                </td>
                <td><input type="text" value={name}  onChange={(evnt)=>(handleChange(index, evnt))} name="name" className="form-control"/> </td>
                <td><input type="text" value={task}  onChange={(evnt)=>(handleChange(index, evnt))} name="task" className="form-control" /> </td>
                <td><input type="text" value={note}  onChange={(evnt)=>(handleChange(index, evnt))} name="note" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>
            )
        })
   
    )
    
}
export default TableRows;