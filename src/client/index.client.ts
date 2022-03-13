import { KnitClient as Knit } from "@rbxts/knit"
import MainApp from "./Fusion/MainApp"

Knit.AddControllersDeep(script.WaitForChild("Knit").WaitForChild("Controllers"))
Knit.Start()
	.andThen(() => {
		print("Knit is running on Client")
	})
	.catch(error)

MainApp.Mount()
