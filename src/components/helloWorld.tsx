import { Button } from "@/components/ui/button";

export const HelloWorld = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold font-soloistextra text-center text-gray-900">
				Welcome to Astro
			</h1>
			<p className="text-gray-700 font-poppins text-center">
				Astro is a new kind of static site builder that delivers lightning-fast
				performance with a modern developer experience.
			</p>
			<div className="flex justify-center">
				<Button className="bg-blue-500 text-white px-4 py-2 rounded">
					Get Started
				</Button>
			</div>
		</div>
	);
};
