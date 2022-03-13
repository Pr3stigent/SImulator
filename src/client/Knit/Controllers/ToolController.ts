import { Players, RunService, Workspace } from "@rbxts/services"
import { KnitClient as Knit } from "@rbxts/knit"

declare global {
	interface KnitControllers {
		ToolController: typeof ToolController
	}
}

const player = Players.LocalPlayer
const mouse = player.GetMouse()

const character = player.Character || player.CharacterAdded.Wait()[0]
const humanoid = character.WaitForChild("Humanoid") as Humanoid
const humanoidRootPart = humanoid.RootPart as BasePart

const voxels = Workspace.Voxels

const MAX_DISTANCE = 100

const ToolController = Knit.CreateController({
	Name: "ToolController",
	LastTarget: mouse.Target,
	CurrentTarget: mouse.Target,

	Highlighting: false,

	Hightlight(target?: BasePart) {
		this.StopHighlight("Last")

		if (this.CurrentTarget) {
			const newSelectionBox = new Instance("SelectionBox")
			newSelectionBox.Adornee = this.CurrentTarget
			newSelectionBox.Parent = this.CurrentTarget
		}
	},

	StopHighlight(target: "Current" | "Last") {
		const targetVariable = this[(target + "Target") as keyof typeof this] as BasePart | undefined
		if (targetVariable !== undefined) {
			const oldHSelectionBox = targetVariable.FindFirstChildOfClass("SelectionBox")
			oldHSelectionBox?.Destroy()
		}
	},

	KnitStart() {
		RunService.RenderStepped.Connect(() => {
			if (
				this.CurrentTarget !== mouse.Target &&
				mouse.Target?.Parent?.IsDescendantOf(voxels) &&
				humanoidRootPart.Position.sub(mouse.Target.Position)?.Magnitude <= MAX_DISTANCE
			) {
				this.LastTarget = this.CurrentTarget
				this.CurrentTarget = mouse.Target
				this.Hightlight(mouse.Target)
				this.Highlighting = true
			} else {
				if (this.Highlighting && this.CurrentTarget !== mouse.Target) {
					this.Highlighting = false
					this.StopHighlight("Current")
				}
			}
		})
	},
})

export = ToolController
