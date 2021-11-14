import { HeadCard } from "./Head_card";
import { SubCard } from "./Sub_card";
import "./bottom.css"
import sleep from "./sleep.svg"
import glucose from "./glucose.svg"
import pulse from "./pulse.svg"
import spo2 from "./spo2.svg"
import steps from "./stepcount.svg"
import { useEffect, useState } from "react";
import {device_data} from '../Device_connect/data.json'

import Highest from "./Main_tile_logos/high.svg"
import Lowest from "./Main_tile_logos/low.svg"
import Average from "./Main_tile_logos/average.svg"
import CaloriesBurned from "./Main_tile_logos/mini_fire.svg"
import DistanceCovered from "./Main_tile_logos/mini_person.svg"
import Hydration from "./Main_tile_logos/water.svg"
//import {Alcohol}

export function Bottom(){

    const [mini_logos,setMinis] = useState({"Highest":Highest,"Lowest":Lowest,"Average":Average,"CaloriesBurned":CaloriesBurned,
    "DistanceCovered":DistanceCovered,"Hydration":Hydration,"Alcohol":glucose,"Range":Highest,"REM":sleep,"Deep":sleep})
    const [imgs,setImgs] = useState({"sleep":sleep,"glucose":glucose,"pulse":pulse,"spo2":spo2,"steps":steps})    
    const [order,setOrder] =  useState([0,1,2,3,4]);

    const [index,setIndex] = useState(null);
    const [flag,setFlag] = useState(false)

    const handleOnclick = (data,index)=>{
      setFlag(!flag)
      setIndex(index)
    }

    useEffect(()=>{
        const swap = ()=>{
            let temp = order[0];
            order[0] = order[index]
            order[index] = temp;
        }
        if(flag){
            swap(index);
            setFlag(false)
            setOrder(order);
            setIndex(null)
        }

        return ()=>{
        }
        
       
    },[index,order]);

    return<div style={{height:"496px"}}>
        <HeadCard data={device_data} imgs={imgs} logos={mini_logos} order={order[0]} index={"0"}/>
        <SubCard styles={{}} imgs={imgs} data={device_data} order={order[1]} index={"1"} handleOnclick={handleOnclick}/>
        <SubCard styles={{left:"196px"}} imgs={imgs} data={device_data} order={order[2]} index={"2"}
        handleOnclick={handleOnclick}/>
        <SubCard styles={{top: "635px"}} imgs={imgs} data={device_data} order={order[3]} index={"3"} handleOnclick={handleOnclick}/>
        <SubCard styles={{top: "635px",left:"196px"}} imgs={imgs} data={device_data} order={order[4]} index={"4"} handleOnclick={handleOnclick}/>
    </div>
}