import React from 'react';
import {Button, Table} from "react-bootstrap";
import { useSelector} from "react-redux";
import {ItemDeleteAlert} from "./AlertDelete";
import {ItemUpdateAlert} from "./AlertUpdate";

const ReadInfo = () => {

    const showInfo=useSelector((state)=>state.bookInformation.value)
    console.log(showInfo)
    return (
        <div>
            <Table striped bordered>
                <thead>
                <tr>
                    <th> Sl Name</th>
                    <th>Book Name</th>
                    <th className="m-2">Action</th>
                </tr>
                </thead>
                <tbody>

                    {showInfo.map((item,index)=>{
                       return <tr>
                            <th> {index+1}</th>
                            <th>{item}</th>
                            <th className="m-2 d-flex justify-content-between">
                                <Button variant="secondary" onClick={(item,index)=>ItemUpdateAlert(item,index)} size="sm"> Update</Button>
                                <Button variant="danger" onClick={(index)=>ItemDeleteAlert(item)} size="sm"> Delete</Button>
                            </th>
                        </tr>

                    })}



                </tbody>

            </Table>
        </div>
    );
};

export default ReadInfo;