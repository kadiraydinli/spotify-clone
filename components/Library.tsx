"use client";

import Icon from "@/assets/icons";

interface LibraryProps {}

const Library: React.FC<LibraryProps> = () => {
	const onClick = () => {
		// Handle upload later
	};

	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between px-5 pt-4">
				<div className="inline-flex items-center gap-x-2">
					<Icon.PlayList className="text-neutral-400" size={26} />
					<p className="text-neutral-400 font-medium text-md">Your Library</p>
				</div>
				<Icon.Add
					className="text-neutral-400 cursor-pointer hover:text-white transition"
					size={26}
					onClick={onClick}
				/>
			</div>
			<div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs!</div>
		</div>
	);
};

export default Library;
