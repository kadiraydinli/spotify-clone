"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Icon from "@/assets/icons";

import Button from "./Button";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const router = useRouter();

	const handleLogout = () => {
		// Handle logout in the future
	};

	const onBack = () => {
		router.back();
	};

	const onNext = () => {
		router.forward();
	};

	const onSignUp = () => {};

	const onLogin = () => {};

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
				</div>
			</div>
			{children}
		</div>
	);
};

export default Header;
