"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Icon from "@/assets/icons";
import { RouteType, Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
	children: React.ReactNode;
	songs: Song[];
}

const Sidebar: React.FC<SidebarProps> = ({ children, songs }) => {
	const pathname = usePathname();
	const player = usePlayer();

	const routes: RouteType[] = useMemo(
		() => [
			{
				icon: Icon.Home,
				label: "Home",
				active: pathname !== "/search",
				href: "/",
			},
			{
				icon: Icon.Search,
				label: "Search",
				active: pathname === "/search",
				href: "/search",
			},
		],
		[pathname]
	);

	return (
		<div
			className={twMerge(
				`flex h-full`,
				player.activeId && "h-[calc(100%-80px)]"
			)}
		>
			<div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
				<Box className="flex flex-col gap-y-4 px-5 py-4">
					{routes.map((item) => (
						<SidebarItem key={item.label} {...item} />
					))}
				</Box>
				<Box className="overflow-y-auto h-full">
					<Library songs={songs} />
				</Box>
			</div>
			<main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
		</div>
	);
};

export default Sidebar;
