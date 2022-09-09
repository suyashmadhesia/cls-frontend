import { toast } from 'react-toastify'
import { 
    SUCCESS_NOTIFICATION,
    ERROR_NOTIFICATION,
    WARNING_NOTIFICATION,
    INFO_NOTIFICATION
} from "./notificationTypes";

export const notify = (message, type, id) => {
    switch (type) {
        case SUCCESS_NOTIFICATION:
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                toastId: id
            })
            break;
        case ERROR_NOTIFICATION:
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                toastId: id
            })
            break;
        case WARNING_NOTIFICATION:
            toast.warn(message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                toastId: id
            })
            break;
        case INFO_NOTIFICATION:
            toast.info(message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                toastId: id
            })
            break;
        default:
            toast(message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                toastId: id
            })
            break;
    }
}