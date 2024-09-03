
function Footer() {

	return (
		<footer
			className={"dark:bg-grey-800 w-full bg-zinc-900/60" }
		>
			 <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
      <div className="text-3xl text-violet-800 md-mx:text-2xl text-primaryColor font-semibold">
        Rahul Kanyal
      </div>
     <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">
        Copyright &copy; {new Date().getFullYear()} Rahul kanyal{" "}
        <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span>
      </div>
    </div>
			<div className="mx-auto flex flex-col items-center justify-between gap-4 py-4 tracking-wide md:mx-6 md:flex-row md:gap-0 lg:mx-10 lg:py-6 xl:mx-auto xl:max-w-6xl">
				<p>
					Made by<span className="animate-ping opacity-100"> 🔥 </span>by
					<span className="mx-1 whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-1">
						Rahul
					</span>
				</p>
				<p>
					Made with
					<span className="mx-1 whitespace-nowrap rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-1">
						NEXT.js | TypeScript | Mongoose
					</span>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
