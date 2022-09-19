import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import PostAuthor from "./PostAuthor";
import {TimeAgo} from "./TimeAgo";

const SinglePostPage = ({match}) => {
    const {postId} = match.params

    const post = useSelector(state =>
        state?.posts?.find(post => post.id === postId))

    if (!post) {
        return (
            <section>
                <article className={'post'}>
                    <h2>{post.title}</h2>
                    <p className={'post-content'}>{post.content}</p>
                </article>
            </section>
        )
    }
    console.log(post?.date)
    return (
        <section>
            <article className={'post'}>
                <h2>{post.title}</h2>
                <p className={'post-content'}>{post.content}</p>
                <PostAuthor userId={post.user}/>
                <TimeAgo timestamp={post?.date}/>
            </article>
            <Link to={`/editPost/${post?.id}`} className={'button'}>
                Edit Post
            </Link>
        </section>
    )
}

export default SinglePostPage