import React from 'react';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

export default function ShowToast(props) {


    return <Toast isOpen={true} className={"toast-my"}>
        <ToastBody>
            {props.text}
        </ToastBody>
    </Toast>
}