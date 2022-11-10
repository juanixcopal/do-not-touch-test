import { useEffect, useState } from "react";
import { getReportingData } from "../../data/dataReports/get.js";
let refresh = 0;

export const useFetchReportingData = () =>{
    const [ reportsData, setReportsData ] = useState([])
    const refreshReport = () => {
        refresh = refresh+1;
    }
    useEffect(()=>{
        // console.log('refrescando');
        (async()=>{
            await getReportingData()
            .then(({data})=>{
                // console.log('datos  nuevos',data );
                console.log('Gg',data);
                setReportsData(data)
            })
            .catch((error)=>{
                console.log('error', error);
            })
        })()
        // return () => {}
    },[])
    return {reportsData,refreshReport}
}