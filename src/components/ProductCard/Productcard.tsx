import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import type { RootState } from "../../store"

export default function ProductCart(){
    const { id } = useParams()
    const data = useSelector((state: RootState) => state.product)
    useEffect(()=>{
        console.log(data)
    },[])


    return<div>{id}</div>
}  