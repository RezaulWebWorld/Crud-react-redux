import Swal from "sweetalert2";
import store from "../Redux/Store/Store";
import {EditITem} from "../Redux/State/Slice";



export  function  ItemUpdateAlert(item, index){
    Swal.fire({
        title: 'Update',
        input:'text',
        inputValue:item,
        inputValidator:(value)=>{
            store.dispatch(EditITem({index: index, EditBook: value})
        )

        }


    })
}