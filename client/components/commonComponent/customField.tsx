import React, { useRef } from "react";

import {
    Td, Editable,
    EditableInput,
    EditablePreview,
} from '@chakra-ui/react'
import { updateBook } from '../../utils/apiRoutes'

interface CustomFieldsProps {
    value: string
    id: string
    field: string
}

interface fieldProps {
    id: string
    updatedValue: string | undefined
    field: string
}
const CustomField: React.FC<CustomFieldsProps> = (props) => {


    const InputRef = useRef<HTMLInputElement>(null)


    const onChangeHandler = () => {
        const params: fieldProps = {
            id: props.id,
            updatedValue: InputRef.current?.value,
            field: props.field
        }
        updateBook(params)
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
