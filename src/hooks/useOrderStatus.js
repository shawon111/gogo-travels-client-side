import { useState } from "react"

const useOrderStatus = () => {
    const [orderStatus, setOrderStatus] = useState(false);
    
    return {
        orderStatus,
        setOrderStatus
    }
}

export default useOrderStatus;