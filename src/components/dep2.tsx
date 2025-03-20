import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
export const Deptest2 = () => {
	return (
		<div className="flex mt-[10px] items-center justify-center px-[9px] py-[6px]">
			<Carousel>
				<CarouselPrevious />
				<CarouselContent className="flex items-center justufy-center">
					<CarouselItem>
						<img src="/mathcom.png" alt="1" className="h-[200px]"></img>
					</CarouselItem>
					<CarouselItem>
						<img src="/note.png" alt="2" className="h-[200px]"></img>
					</CarouselItem>
					<CarouselItem>
						<img src="/note2.2.png" alt="3" className="h-[200px]"></img>
					</CarouselItem>
				</CarouselContent>
				<CarouselNext />
			</Carousel>
		</div>
	);
};
