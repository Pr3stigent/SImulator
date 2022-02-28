import { Players } from "@rbxts/services"
import { KnitClient as Knit } from "@rbxts/knit"

declare global {
	interface KnitControllers {
		ToolController: typeof ToolController
	}
}

const player = Players.LocalPlayer
const mouse = player.GetMouse()

const ToolController = Knit.CreateController({
	Name: "ToolController",

	KnitInit() {},

	KnitStart() {},
})

export = ToolController
