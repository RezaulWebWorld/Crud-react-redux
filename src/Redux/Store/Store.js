import {configureStore} from "@reduxjs/toolkit";
import bookInfo from "../State/Slice";

export  default  configureStore(

    {
        reducer:{
            bookInformation: bookInfo
        }
    }
)