"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@supabase/auth-helpers-react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import Icon from "@/assets/icons";

interface LikeButtonProps {
	songId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ songId }) => {
	const router = useRouter();
	const { supabaseClient } = useSessionContext();

	const authModal = useAuthModal();
	const { user } = useUser();

	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		if (!user?.id) {
			return;
		}

		const fetchData = async () => {
			const { data, error } = await supabaseClient
				.from("liked_songs")
				.select("*")
				.eq("user_id", user.id)
				.eq("song_id", songId)
				.single();

			if (!error && data) {
				setIsLiked(true);
			}
		};

		fetchData();
	}, [user?.id, songId, supabaseClient]);

	const IconHeart = isLiked ? Icon.FillHeart : Icon.OutlineHeart;

	const handleLike = async () => {
		if (!user) {
			return authModal.onOpen();
		}

		if (isLiked) {
			const { error } = await supabaseClient
				.from("liked_songs")
				.delete()
				.eq("user_id", user.id)
				.eq("song_id", songId);

			if (error) {
				return toast.error(error.message);
			}

			setIsLiked(false);
		} else {
			const { error } = await supabaseClient.from("liked_songs").insert({
				song_id: songId,
				user_id: user.id,
			});

			if (error) {
				return toast.error(error.message);
			}

			setIsLiked(true);
			toast.success("Song Liked!");
		}

		router.refresh();
	};

	return (
		<button className="hover:opacity-75 transition" onClick={handleLike}>
			<IconHeart size={25} color={isLiked ? "#22c55e" : "white"} />
		</button>
	);
};

export default LikeButton;
