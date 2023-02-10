
interface BookDetails {
    bookName: string
    publisherName: string
    author: string
    ratings: number
    pricing: number
}

interface FilterProps {
    filter: string
}
interface fieldProps {
    updatedValue: string | undefined
    id: string
    field: string
}

export const addBook = async (params: object): Promise<void> => {
    await fetch("http://localhost:5005/book/create", {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    })
}
export const getBooks = async (): Promise<Array<BookDetails>> => {
    const response = await fetch("http://localhost:5005/book/get")
    const result = await response.json()
    return result
}

export const filterBooks = async (params: FilterProps): Promise<Array<BookDetails>> => {
    console.log(params, 'params')
    const response = await fetch("http://localhost:5005/book/filter", {
        method: 'PUT',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            filter: params.filter,
        }),
    })
    const result = response.json()
    return result
}

export const updateBook = async (params: fieldProps): Promise<Array<fieldProps>> => {
    const response = await fetch(`http://localhost:5005/book/update`, {
        method: 'PUT',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: params.id,
            updatedValue: params.updatedValue,
            field: params.field
        })
    })

    const result = response.json()
    return result

}
export const deleteBooks = async (id: string): Promise<void> => {
    await fetch("http://localhost:5005/book/delete", {
        method: 'DELETE',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    })
}
