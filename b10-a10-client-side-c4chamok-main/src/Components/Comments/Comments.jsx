import React, { useState, useEffect, useContext } from "react";
import { MdRefresh } from "react-icons/md";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router";

const Comments = () => {
    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchComments = async () => {
        setLoading(true);
        fetch("https://favflix-server.vercel.app/comments")
            .then(res => res.json())
            .then(data => {
                setComments(data);
                setLoading(false);
            })
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value
        fetch("https://favflix-server.vercel.app/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user.email, comment }),
        })
        .then(res=>res.json())
        .then(data=>{fetchComments();})

        

    };


    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">User Comments</h2>
            {
                user ?
                    <form onSubmit={handleCommentSubmit} className="mb-6">
                        <textarea
                            placeholder="Your Comment"
                            name="comment"
                            className="textarea textarea-bordered w-full mb-4"
                            rows="4"
                        ></textarea>
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Post Comment
                        </button>
                    </form>
                    :
                    <Link
                        to={'/login'}
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Please Login to comment
                    </Link>
            }

            <div className="flex justify-between items-center mt-4 mb-4">
                <h3 className="text-xl font-semibold">Latest Comments</h3>
                <button
                    onClick={fetchComments}
                    className="btn btn-outline btn-secondary flex items-center gap-2"
                >
                    <MdRefresh className="text-lg" /> Refresh
                </button>
            </div>
            <ul className="space-y-4">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    comments.map((c) => (
                        <li
                            key={c._id}
                            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                        >
                            <div className="font-semibold text-lg">{c.email}</div>
                            <p className="text-gray-700">{c.comment}</p>
                            <div className="text-sm text-gray-500">
                                {new Date(c.timestamp).toLocaleString()}
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Comments;
