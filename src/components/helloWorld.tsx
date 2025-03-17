import { Button } from "@/components/ui/button";

export const HelloWorld = () => {
	return (
		<div className="flex flex-col items-center justify-center p-6 max-w-sm mx-auto my-auto bg-white rounded-xl shadow-md space-y-4 min-h-screen">
			<h1 className="text-2xl font-bold font-museo text-center text-gray-900">
				Welcome to Astro
			</h1>
			<p className="text-gray-700 font-noto text-center">
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
