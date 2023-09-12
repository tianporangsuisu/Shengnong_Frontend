import request from "@/axios/axiosInstance";

export default {
    login:(username,password)=>{
        return request({
            url: `/user/login`,
            method: 'POST',
            params: {
                username: username,
                password: password
            }
        });
    },
    getMachineList:()=>{
        return request({
            url: 'device/pageQuery',
            method: 'GET'
        })
    },
    getVideoUrl:(id)=>{
        return request({
            url: `device/${id}/getCapture`,
            method: 'GET'
        })
    },
    closeVideo:(id)=>{
        return request({
            url: `device/${id}/closeCapture`,
            method: 'GET'
        })
    },
    getPictureUrl:(id)=>{
        return request({
            url: `environmentData/queryAllImageByDeviceId/${id}`,
            method: 'POST'
        })
    },
    getVisualization:()=>{
        return request({
            url: `environmentData/all`,
            method: 'GET'
        })
    }
}