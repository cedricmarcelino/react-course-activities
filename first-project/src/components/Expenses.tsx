import React from 'react'
import {ExpensesTemplate} from '../App'
import Box from '@mui/material/Box';
import ExpenseItem from './ExpenseItem'

interface ExpensesProps {
    expenses: ExpensesTemplate
}

const Expenses: React.FC<ExpensesProps>= (props) => {
    const {expenses} = props

    return (
        <Box>
            {expenses.map( (expense) => (
                <ExpenseItem expenseTitle={expense.title} expenseAmount={expense.amount} expenseDate={expense.date}/>
            ))}
        </Box>
    )
}

export default Expenses