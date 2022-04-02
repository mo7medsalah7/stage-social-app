import { HomeIcon, AdjustmentsIcon, UserIcon } from "@heroicons/react/solid";

import Link from "next/link";
import { useUser } from "./../../utils/useUser";
import SignOut from "../Account/SignOut";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import SignMePageContext from "./../../context";
function Menu() {
	const user = useUser();
	console.log(user);

	return (
		<aside className="sm:flex flex-col space-y-20 max-w-xs xs:hidden bg-gray-50 h-screen p-10 shadow-sm">
			<header className="flex justify-center items-center flex-col space-y-6">
				<Link href="/">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-red-500 cursor-pointer">
						<span className="italic font-bold">s</span>tage
					</h1>
				</Link>
				<p className="whitespace-nowrap bg-white font-semibold shadow-md px-2 py-1 md:px-4 md:py-2 rounded-md">
					social media for devs
				</p>
			</header>
			<div className="space-y-2">
				<Link href={`/`}>
					<a>
						<MenuItem
							title="Home"
							Icon={HomeIcon}
							className="w-5 h-5 ml-2 "
						/>
					</a>
				</Link>

				<Link href={user ? `/user/${user.username}` : `/user/signin`}>
					<a>
						{!user ? (
							<MenuItem
								title="SignIn"
								Icon={UserIcon}
								className="w-5 h-5 ml-2 "
							/>
						) : (
							<MenuItem
								title="Account"
								Icon={UserIcon}
								className="w-5 h-5 ml-2 "
							/>
						)}
					</a>
				</Link>
				<Link href={`/about`}>
					<a>
						<MenuItem
							title="Learn More"
							Icon={AdjustmentsIcon}
							className="w-5 h-5 ml-2 "
						/>
					</a>
				</Link>
				{user && <SignOut />}
			</div>
		</aside>
	);
}

export default Menu;
