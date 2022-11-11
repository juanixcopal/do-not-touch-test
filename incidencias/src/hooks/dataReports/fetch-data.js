import { useEffect, useState } from "react";
import { getReportingData } from "../../data/dataReports/get.js";

export const useFetchReportingData = () =>{
    const [ reportsData, setReportsData ] = useState([])
    useEffect(()=>{
        // console.log('refrescando');
        (async()=>{
            await getReportingData()
            .then(({data})=>{
                // console.log('datos  nuevos',data );
                // console.log('Gg',data);
                setReportsData(data)
            })
            .catch((error)=>{
                console.log('error', error);
            })
        })()
        // return () => {}
    },[])
    return {reportsData}
}