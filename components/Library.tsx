"use client";

import Icon from "@/assets/icons";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";

import MediaItem from "./MediaItem";

interface LibraryProps {
	songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
	const authModal = useAuthModal();
	const uplaodModal = useUploadModal();
	const { user } = useUser();

	const onPlay = useOnPlay(songs);

	const onClick = () => {
		if (!user) {
			return authModal.onOpen();
		}

		// TODO: Check for subscription

		return uplaodModal.onOpen();
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
			<div className="flex flex-col gap-y-2 mt-4 px-3">
				{songs.map((item) => (
					<MediaItem
						key={item.id}
						data={item}
						onClick={(id: string) => onPlay(id)}
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
