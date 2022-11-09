import { useEffect, useState } from "react";
import { getReportingData } from "../../data/dataReports/get.js";

export const useFetchReportingData = () =>{
    const [ reportsData, setReportsData ] = useState([])

    useEffect(()=>{
        (async()=>{
            await getReportingData()
            .then(({data})=>{
                // console.log(data);
                setReportsData(data)
            })
            .catch((error)=>{
                console.log('error', error);
            })
        })()
    },[])
    return {reportsData}
}