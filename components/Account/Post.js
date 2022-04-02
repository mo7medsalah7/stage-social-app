import gql from "graphql-tag";
import { MicrophoneIcon } from "@heroicons/react/solid";

import { useMutation } from "@apollo/client";
import useForm from "./../../utils/useForm";
import { useUser } from "./../../utils/useUser";
import { USER_POSTS } from "../../utils/useAllPosts";
import { ALL_USERS } from "../../utils/useAllUsers";

const CREATE_POST_MUTATION = gql`
	mutation CREATE_POST_MUTATION($postData: String!, $userId: ID!) {
		createPost(
			data: { postData: $postData, author: { connect: { id: $userId } } }
		) {
			id
			postData
		}
	}
`;

function Post() {
	const me = useUser();
	const { inputs, handleChange, resetForm } = useForm({
		postData: "",
		userId: `${me.id}`,
	});

	const [createPost, { loading, data }] = useMutation(CREATE_POST_MUTATION, {
		variables: inputs,
		refetchQueries: [{ query: USER_POSTS }, { query: ALL_USERS }],
	});

	const handleSubmitPost = async (e) => {
		e.preventDefault();
		const res = await createPost();

		console.log(res);
		resetForm();
	};

	return (
		<>
			{loading ? (
				<p>loading.....</p>
			) : (
				<>
					<form
						className="flex flex-col space-y-4"
						method="POST"
						onSubmit={handleSubmitPost}
					>
						<label className="font-bold italic">
							What's on your mind?{" "}
						</label>
						<textarea
							value={inputs.postData}
							name="postData"
							onChange={handleChange}
							className="resize-none h-40 w-4/6 border rounded-md focus:border-0 focus:shadow-md p-4"
						></textarea>
						<button className="flex w-1/5 mb-2 bg-red-500 text-white space-x-5 items-center  p-2 transition transform hover:translate-x-2  group shadow-sm hover:shadow-md rounded-md cursor-pointer">
							<span className="">
								<MicrophoneIcon className="w-5 h-5 ml-2 " />
							</span>
							<span className="font-semibold">Post</span>
						</button>
						<div>{me.username}</div>
					</form>
				</>
			)}
		</>
	);
}

export default Post;
