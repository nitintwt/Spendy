import React,{useState} from "react"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useExpense } from "@/context/context"



export function AddExpense() {
  const [amount , setAmount] = useState()
  const [description , setDescription] = useState()
  const {addExpense}= useExpense()

  const add= (e)=>{
    e.preventDefault()

    if(!amount) return

    addExpense({amount , description})

    setAmount("")
    setDescription("")

  }
  
  return (
    <Card className="w-[350px] bg-blue-800 text-white text-2xl font-bold">
  <CardHeader>
    <CardTitle>Add Expense</CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>
    <form onSubmit={add}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Amount</Label>
          <Input id="amount" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Description</Label>
          <Input id="description" placeholder="Description of expense" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <CardFooter className="pt-4">
          <Button className="bg-blue-900 text-white" type="submit">Add</Button>
        </CardFooter>
      </div>
    </form>
  </CardContent>
</Card>






  )
}
