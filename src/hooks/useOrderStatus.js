import { useState } from "react"

const useOrderStatus = () => {
    const [orderStatus, setOrderStatus] = useState("pending");
    return {
        orderStatus,
        setOrderStatus
    }
}

export default useOrderStatus;