"use client";

import Link from "next/link";
import { useState } from "react";
import BurgerButton from "@/components/utils/BurgerButton";

type Links = { label: string; href: string };

function Navigation() {
	const Links: Links[] = [
		{
			label: " 01. About",
			href: "#about",
		},
		{
			label: "02. Skills",
			href: "#skills",
		},
		{
			label: "03. Projects",
			href: "#projects",
		},
		
	];

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="fixed top-0 z-50 w-full flex h-16 items-center justify-center bg-gradient-to-b from-zinc-900/80 via-zinc-900/60 to-transparent border-b border-zinc-800/30 backdrop-blur-xl px-4 md:px-8">
			<nav className="relative flex w-full items-center justify-end lg:w-11/12 2xl:w-4/5">
				<Link className="group absolute left-0 lg:left-4 text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-cyan-400 transition-all duration-300" href="#home">
					<span className="text-xl drop-shadow-lg">👨‍💻</span> Rahul
				</Link>
				<div className="hidden gap-8 sm:flex">
					{Links.map((link, key) => (
						<Link
							key={key}
							href={link.href}
							className="relative block font-semibold text-sm text-zinc-300 w-fit transition-colors hover:text-transparent bg-gradient-to-r hover:from-violet-400 hover:to-cyan-400 hover:bg-clip-text after:absolute after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-violet-400 after:to-cyan-400 after:transition after:duration-300 after:bottom-0 after:content-[''] hover:after:scale-x-100"
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="grid sm:hidden">
					<BurgerButton onClick={handleClick} isOpen={isOpen} />
					<div
						className={`fixed right-0 top-16 flex h-screen w-1/2 max-w-xs flex-col gap-6 rounded-b-3xl bg-gradient-to-b from-zinc-900/95 to-zinc-950/95 backdrop-blur-xl p-6 py-10 shadow-2xl transition-all duration-300 ease-in-out border-b border-zinc-800/50 ${
							isOpen ? "-translate-x-4  md:-translate-x-8" : "translate-x-full"
						}`}
						aria-hidden={!isOpen}
					>
						{Links.map((link, key) => (
							<div
								className="grid justify-center"
								key={key}
								onClick={handleClick}
							>
								<Link
									href={link.href}
									className="relative block w-fit text-zinc-300 transition-colors hover:text-transparent bg-gradient-to-r hover:from-violet-400 hover:to-cyan-400 hover:bg-clip-text after:absolute after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-violet-400 after:to-cyan-400 after:transition after:duration-300 after:bottom-0 after:content-[''] hover:after:scale-x-100 font-semibold"
								>
									{link.label}
								</Link>
							</div>
						))}
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navigation;
