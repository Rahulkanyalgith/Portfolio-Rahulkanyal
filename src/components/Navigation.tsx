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
		<header className="fixed top-0 z-50 w-full flex h-20 items-center justify-center bg-gradient-to-b from-zinc-900/95 via-zinc-900/80 to-zinc-900/0 border-b border-gradient-to-r border-violet-500/10 backdrop-blur-xl px-4 md:px-8 animate-fade-in shadow-lg shadow-violet-950/20">
			{/* Animated gradient border */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>

			<nav className="relative flex w-full items-center justify-between lg:w-11/12 2xl:w-4/5 gap-8">
				{/* Logo */}
				<Link 
					className="group flex items-center gap-2 text-xl font-bold hover:scale-110 transition-transform duration-300 relative" 
					href="#home"
				>
					<span className="text-2xl drop-shadow-lg animate-bounce-sm group-hover:animate-pulse">👨‍💻</span>
					<span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-violet-600 transition-all duration-500">
						Rahul
					</span>
					{/* Logo glow effect */}
					<div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden gap-2 sm:flex items-center">
					{Links.map((link, key) => (
						<Link
							key={key}
							href={link.href}
							className="relative group px-4 py-2 rounded-lg font-semibold text-sm text-zinc-300 transition-all duration-300 hover:text-white"
						>
							{/* Gradient background on hover */}
							<div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
							
							{/* Link text with gradient on hover */}
							<span className="relative block transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text">
								{link.label}
							</span>

							{/* Animated underline */}
							<div className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
						</Link>
					))}
				</div>

				{/* CTA Button - Desktop */}
				<div className="hidden sm:flex items-center gap-4">
					<a
						href="mailto:contact@rahulkanyal.com"
						className="group relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/40 hover:scale-105 active:scale-95 overflow-hidden"
					>
						<span className="relative z-10">Let's Connect</span>
						<div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex sm:hidden">
					<BurgerButton onClick={handleClick} isOpen={isOpen} />
				</div>
			</nav>

			{/* Mobile Navigation Menu */}
			<div
				className={`fixed right-0 top-20 flex h-screen w-1/2 max-w-xs flex-col gap-4 rounded-bl-3xl bg-gradient-to-b from-zinc-900/98 via-zinc-900/95 to-violet-950/40 backdrop-blur-2xl p-6 py-8 shadow-2xl transition-all duration-300 ease-in-out border-l border-violet-500/20 ${
					isOpen ? "translate-x-0 animate-fade-in-left" : "translate-x-full animate-fade-out"
				}`}
				aria-hidden={!isOpen}
			>
				{/* Animated border gradient */}
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>

				{Links.map((link, key) => (
					<div
						className="animate-fade-in-up [animation-delay:calc(0.1s*var(--index))]"
						key={key}
						onClick={handleClick}
						style={{ "--index": key } as React.CSSProperties}
					>
						<Link
							href={link.href}
							className="group relative block w-full px-4 py-3 rounded-lg text-zinc-300 transition-all duration-300 hover:text-white font-semibold"
						>
							{/* Background gradient on hover */}
							<div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
							
							{/* Text gradient on hover */}
							<span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text">
								{link.label}
							</span>

							{/* Right arrow indicator */}
							<svg
								className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>
				))}

				{/* Mobile CTA */}
				<div className="mt-8 pt-6 border-t border-violet-500/20 animate-fade-in-up [animation-delay:0.4s]">
					<a
						href="mailto:contact@rahulkanyal.com"
						className="group relative block w-full px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/40 hover:scale-105 overflow-hidden"
					>
						<span className="relative z-10">Let's Connect</span>
						<div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
					</a>
				</div>
			</div>
		</header>
	);
}

export default Navigation;
