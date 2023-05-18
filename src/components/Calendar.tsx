import { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

export default function Calendar() {
    const initialDays: Date[] = [];
    const [days, setDays] = useState<Date[] | undefined>(initialDays);

    const formatedDays = days?.map((d) => {

        return format(d, "MMM dd EEEEEE '|' yyyy")
    })

    const total = `Total days: ${days?.length}`
    console.log(formatedDays)

    const footer =


        days && days.length > 0 ? (
            formatedDays?.map((dayname) => (<p key={dayname}>{dayname}</p>))

        ) : (
            <p>Please pick one or more days.</p>
        );

    return <>
        <DayPicker
            mode="multiple"
            min={0}
            selected={days}
            onSelect={setDays}
            footer={footer}
        />
        <p>{total}</p>
    </>

        ;
}