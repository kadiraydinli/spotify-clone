"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";

import PlayButton from "./PlayButton";

interface SongItemProps {
	data: Song;
	onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
	const imagePath = useLoadImage(data);

	const handleOnClick = () => {
		onClick(data.id);
	};

	return (
		<div
			onClick={handleOnClick}
			className="
                relative
                group
                flex
                flex-col
                items-center
                justify-center
                rounded-md
                overflow-hidden
                gap-x-4
                bg-neutral-400/5
                cursor-pointer
                hover:bg-neutral-400/10
                transition
                p-3
            "
		>
			<div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
				<Image
					className="object-cover"
					src={imagePath || "/images/liked.png"}
					priority={false}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					fill
					alt="image"
				/>
			</div>
			<div className="flex flex-col items-start w-full p-4 gap-y-1">
				<p className="font-semibold truncate w-full">{data.title}</p>
				<p className="text-neutral-400 text-sm pb-4 w-full truncate">
					By {data.author}
				</p>
			</div>
			<div className="absolute bottom-24 right-4">
				<PlayButton />
			</div>
		</div>
	);
};

export default SongItem;
