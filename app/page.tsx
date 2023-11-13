import { Button } from '@/components/ui/button'

export default function Home() {
	return ( 
		<div className="w-screen h-screen p-10">
			<h1 className="text-red-400 font-bold text-5xl">Hello Notion Clone</h1>
			<Button variant="purple" size="default">
				Click me
			</Button>
		</div>
	)
}
