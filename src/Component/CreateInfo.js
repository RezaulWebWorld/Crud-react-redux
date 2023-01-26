import React, {useRef} from 'react';
import {Button, Table} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {SaveItem} from "../Redux/State/Slice";

const CreateInfo = () => {
    const name=useRef()
    const disPatcher=useDispatch()
    return (
        <div>
            <Table  striped bordered>
                <thead>
                <tr>
                    <th><input ref={name} placeholder="Book Name" type="Text" className="form-control"/></th>
                    <th><Button onClick={()=>disPatcher(SaveItem(name.current.value))} variant="primary"  size="sm"> Save</Button></th>
                </tr>

                </thead>

            </Table>
        </div>
    );
};

export default CreateInfo;