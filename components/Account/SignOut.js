import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./../../utils/useUser";
import { LogoutIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

const SIGN_OUT_MUTATION = gql`
	mutation {
		endSession
	}
`;

export default function SignOut() {
	const router = useRouter();

	const [signout, { loading }] = useMutation(SIGN_OUT_MUTATION, {
		refetchQueries: [{ query: CURRENT_USER_QUERY }],
	});

	const handleSignOut = async () => {
		await signout();
		router.push("/");
	};

	return (
		<>
			{loading && "Sigining you out"}
			<button type="submit" className="w-full" onClick={handleSignOut}>
				<div className="flex flex-grow mb-2 space-x-5 items-center p-2 transition transform hover:translate-x-2 bg-red-500 text-white group shadow-sm hover:shadow-md rounded-md cursor-pointer">
					<span>
						<LogoutIcon className="w-5 h-5 ml-2 " />
					</span>
					<span className="font-semibold ">Sign Out</span>
				</div>
			</button>
		</>
	);
}
