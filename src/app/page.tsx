import TypewriterTitle from "@/components/TypewriterTitle";
import Image from "next/image";
import logo from "./../../public/logo.png";
export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-[calc(100vh-44px)] justify-center bg-gray-100">
			<Image
				src={logo}
				alt="Stamm baum logo"
				width={264} // Specify the width of the image
				height={264} // Specify the height of the image
				className="text-black"
			/>
			<h1 className="text-5xl tracking-tight max-w-3xl font-semibold mb-4 mt-10">
				We&apos;ll be back.
			</h1>
			<p className="ml-4 text-gray-500 text-xl">
				We&apos;re busy updating the{" "}
				<span className=" text-green-600 font-bold">Stamm Baum's </span>
				<span className=" text-grey-600 font-bold">Web Store</span> for You. 
				We will be back <span className=" text-green-600 font-bold">Soon.</span>
			</p>
			<p className="ml-4 text-black-600 font-bold text-xl">
				<TypewriterTitle/>
			</p>
		</div>
	);
}
