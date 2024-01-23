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


export function AddExpense() {
  const [amount , setAmount] = useState()
  const [description , setDescription] = useState()

  const add= (e)=>{

  }


  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Add Expense</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={add}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Amount</Label>
              <Input id="amount" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Description</Label>
              <Input id="Description" placeholder="Description of expense" value={description} onChange={(e)=> setDescription(e.target.value)}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Add</Button>
      </CardFooter>
    </Card>
  )
}
