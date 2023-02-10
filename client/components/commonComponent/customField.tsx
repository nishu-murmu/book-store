import React, { useRef } from "react";

import {
    Td, Editable,
    EditableInput,
    EditablePreview,
} from '@chakra-ui/react'


interface CustomFieldsProps {
    value: string 
    id: string
    field: string
}

const CustomField: React.FC<CustomFieldsProps> = (props) => {


    const InputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler = async():Promise<void> => {

        console.log(InputRef.current?.value, "value")
        await fetch(`http://localhost:5005/book/update`, {
            method: 'PUT',
            mode: 'cors',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                id: props.id,
                updatedValue: InputRef.current?.value, 
                field: props.field
            })
        })


    }
    return (
        <Td key={props.id}>
            <Editable textAlign='center' defaultValue={props.value}>
                <EditablePreview />
                <EditableInput ref={InputRef} onBlur={() => onChangeHandler()} />
            </Editable>
        </Td >

    )
}

export default CustomField
