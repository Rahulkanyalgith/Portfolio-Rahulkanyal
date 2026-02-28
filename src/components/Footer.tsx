
function Footer() {

	return (
		<footer className="w-full bg-gradient-to-t from-zinc-950 to-zinc-900/40 border-t border-zinc-800/30 animate-fade-in">
			<div className="mt-16 mb-8 flex flex-col gap-3 items-center">
				<div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent md-mx:text-2xl animate-fade-in-up">
					Rahul Kanyal
				</div>
				<div className="text-zinc-400 text-lg md-mx:text-base sm-mx:text-sm xs-mx:text-xs xs-mx:flex flex-col items-center text-center animate-fade-in-up [animation-delay:0.1s]">
					Copyright &copy; {new Date().getFullYear()} Rahul Kanyal
					<span className="xs-mx:hidden mx-2">|</span>
					<span>All Rights Reserved</span>
				</div>
			</div>
			<div className="mx-auto flex flex-col items-center justify-between gap-6 py-6 text-zinc-300 md:mx-6 md:flex-row md:gap-0 lg:mx-10 lg:py-8 xl:mx-auto xl:max-w-6xl animate-fade-in-up [animation-delay:0.2s]">
				<p className="flex items-center gap-2 hover:text-white transition-colors duration-300 group">
					Made with <span className="text-red-500 animate-float text-xl group-hover:scale-125">❤️</span> by
					<span className="mx-1 whitespace-nowrap rounded-lg bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 px-3 py-1 border border-violet-500/30 font-semibold text-violet-300 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 group-hover:scale-105">
						Rahul
					</span>
				</p>
				<p className="flex items-center gap-2 hover:text-white transition-colors duration-300 group">
					Built with
					<span className="mx-1 whitespace-nowrap rounded-lg bg-gradient-to-r from-cyan-600/20 to-blue-600/20 px-3 py-1 border border-cyan-500/30 font-semibold text-cyan-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group-hover:scale-105">
						Next.js • TypeScript
					</span>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
