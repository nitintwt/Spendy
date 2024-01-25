import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function ExpensesTable({ expenses }) {
  return (
    <Table>
      <TableCaption>A list of your recent expenses.</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead className="w-[100px] text-white font-bold">Date</TableHead>
          <TableHead className="text-white font-bold">Description</TableHead>
          <TableHead className="text-right text-white font-bold">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell>{}</TableCell>
            <TableCell>{expense.description}</TableCell>
            <TableCell className="text-right">{expense.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

