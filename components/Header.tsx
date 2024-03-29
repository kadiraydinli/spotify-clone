"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { toast } from "react-hot-toast";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import Icon from "@/assets/icons";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";

import Button from "./Button";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const player = usePlayer();
	const authModal = useAuthModal();
	const router = useRouter();

	const supabaseClient = useSupabaseClient();
	const { user } = useUser();

	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut();
		player.reset();
		router.refresh();

		if (error) {
			toast.error(error.message);
		} else {
			toast.success("Logged out!");
		}
	};

	const onProfile = () => {
		router.push("/account");
	};

	const onBack = () => {
		router.back();
	};

	const onNext = () => {
		router.forward();
	};

	const onSignUp = () => {
		authModal.onOpen();
	};

	const onLogin = () => {
		authModal.onOpen();
	};

	return (
		<div
			className={twMerge(
				`h-fit bg-gradient-to-b from-emerald-800 p-6`,
				className
			)}
		>
			<div className="w-full mb-4 flex items-center justify-between">
				<div className="hidden md:flex gap-x-2 items-center">
					<button
						onClick={onBack}
						className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition"
					>
						<Icon.Left className="text-white" size={35} />
					</button>
					<button
						onClick={onNext}
						className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition"
					>
						<Icon.Right className="text-white" size={35} />
					</button>
				</div>
				<div className="flex md:hidden gap-x-2 items-center">
					<button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
						<Icon.Home className="text-black" size={20} />
					</button>
					<button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
						<Icon.Search className="text-black" size={20} />
					</button>
				</div>
				<div className="flex justify-between items-center gap-x-4">
					{user ? (
						<div className="flex gap-x-4 items-center">
							<Button onClick={handleLogout} className="bg-white px-6 py-2">
								Logout
							</Button>
							<Button onClick={onProfile} className="bg-white">
								<Icon.User />
							</Button>
						</div>
					) : (
						<>
							<div>
								<Button
									onClick={onSignUp}
									className="bg-transparent text-neutral-300 font-medium"
								>
									Sign Up
								</Button>
							</div>
							<div>
								<Button onClick={onLogin} className="bg-white px-6 py-2">
									Log in
								</Button>
							</div>
						</>
					)}
				</div>
			</div>
			{children}
		</div>
	);
};

export default Header;
