import axios from "axios";


const TIMEOUT = 5000; // 5 seconds

export const forwardRequest = async (url: string) => {
    try {
        const response = await axios.get(url, {
            timeout: TIMEOUT
        })

        return {
            status: response.status,
            data: response.data
        }
    } catch (error:any) {
        if (error.code === 'ECONNABORTED') {
            throw new Error("Request timeout")
        }
        
        if(error.response) {
            return {
                status: error.response.status,
                data: error.response.data
            }

        }
            throw new Error("SERVICE_UNAVAILABLE");

    }

    };
