import Skills from "@/components/skill/Skills";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import dbConnect from "@/db";
import SkillModel, { Skill } from "@/model/skill.model";
import Contact from "@/components/Contact";
import { BsDiscord, BsGithub,  BsInstagram,  BsTwitter } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { MantineProvider, createTheme } from "@mantine/core";



export default async function Home() {
	await dbConnect();

	const skillData = await SkillModel.find({}).lean(true);
	const skills: Skill[] = skillData.map((skill) => ({
		name: skill.name,
		logo: skill.logo,
		category: skill.category,
		invert: skill.invert,
	}));

	const categories = Array.from(
		new Set([
			"Frontend",
			"Backend",
			"Others",
			...skills.map((skill) => skill.category),
		]),
	);


	const socialMedia = [
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/rahulkanyal/",
			logo: LiaLinkedinIn,
		},
		{
			name: "GitHub",
			link: "https://github.com/Rahulkanyalgith",
			logo: BsGithub,
		},
		{
			name: "Twitter",
			link: "https://x.com/the_Fitcode",
			logo: BsTwitter,
		},
		{
			name: "Instagram",
			link: "https://www.instagram.com/rahul_kanyal13/",
			logo: BsInstagram ,
		},
		{
			name: "Discord",
			link: "https://discord.gg/qzwtgcQM",
			logo: BsDiscord ,
		},
	];


	const theme = createTheme({
		breakpoints: {
		  xs: "320px",
		  sm: "476px",
		  md: "640px",
		  bs: "768px",
		  lg: "900px",
		  xl: "1024",
		  "2xl": "1280",
		},
	  });

	return (
		<MantineProvider theme={theme}>
       <Hero socialMedia={socialMedia} />
		<About />
		<Skills  />
		<Projects />
		<Contact />
   
</MantineProvider>
	);
}









