import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

interface ExpenseItemProps {
    expenseTitle: string,
    expenseAmount: number,
    expenseDate: Date
}

const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
    const {expenseTitle, expenseAmount, expenseDate} = props
    const month = expenseDate.toLocaleString(`en-us`, {month:'long'})
    const day = expenseDate.toLocaleString(`en-us`, {day:'2-digit'})
    const year = expenseDate.getFullYear()
    
    const useStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        'text-align': 'center',
        'margin-bottom': '1rem'
    }

    return(
        <Card variant="outlined" style={useStyle}>
            <Box>
                <Box>
                    <Typography>
                        {month}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        {day}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        {year}
                    </Typography>
                </Box>
            </Box>
            <Typography variant="body1" component="span">
                {expenseTitle}
            </Typography>
            <Typography variant="body1" component="span">
                ${expenseAmount}
            </Typography>
        </Card>
    )
}

export default ExpenseItem