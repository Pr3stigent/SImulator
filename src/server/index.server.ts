import { KnitServer as Knit } from "@rbxts/knit"

Knit.AddServicesDeep(script.WaitForChild("Knit")?.WaitForChild("Services"))
Knit.Start()
	.andThen(() => {
		print("Knit is running on Server")
	})
	.catch(error)
