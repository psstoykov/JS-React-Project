import { useEffect, useState } from "react"
import commentsApi from "../api-service/comments-api"

export function useCreateComment() {

    const createHandler = (gameId, comment) => commentsApi.create(gameId, comment)

    return createHandler
}

export function useGetAllComments(gameId) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        (async () => {
            const result = await commentsApi.getAll(gameId)
            console.log(result)
            setComments(result)
        })()
    }, [gameId])
    return [comments, setComments]
}