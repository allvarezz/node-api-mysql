import {pool} from '../db.js'
import express, { json } from 'express'

export const getindex =async (req,res)=>{
    const resl= await pool.query('select 1 + 1 as resul')
    res.json(resl)
    console.log(resl[0])

}