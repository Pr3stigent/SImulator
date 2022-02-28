import { KnitClient as Knit } from "@rbxts/knit"

Knit.AddControllersDeep(script.WaitForChild("Knit").WaitForChild("Controllers"))
Knit.Start()
	.andThen(() => {
		print("Knit is running on Client")
	})
	.catch(error)
