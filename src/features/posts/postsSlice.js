import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'First Post', content: 'Hello world!', user:'0', date:'2022-09-19T16:32:29.354Z'},
    {id: '2', title: 'Second Post', content: 'More and more text', user:'1', date:'2022-09-19T16:33:08.527Z'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date:new Date().toISOString(),
                        title,
                        content,
                        user:userId
                    }
                }
            }

        },
        postUpdated(state, action) {
            const {id, title, content} = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})

export const {postAdded, postUpdated} = postsSlice.actions
export default postsSlice.reducer
