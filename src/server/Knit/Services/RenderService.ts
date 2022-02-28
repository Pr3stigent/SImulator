import { ServerStorage, Workspace } from "@rbxts/services"
import { KnitServer as Knit } from "@rbxts/knit"

declare global {
	interface KnitServices {
		RenderService: typeof RenderService
	}
}

const AXES_SIZE = 2.5

const RenderService = Knit.CreateService({
	Name: "RenderService",

	BLOCK: new Map<number, Part[]>(),

	Client: {},

	KnitInit() {},

	Render() {
		const Voxels: { [key: number]: { Block: Part; CurrentLayer: number; Layer: number } } = {}
		const Sections: Map<number, { [key: number]: Part[] }> = new Map<number, { [key: number]: Part[] }>()

		let blockId = 0

		const tablePoints = Workspace.LayerPoints.GetChildren() as Model[]
		tablePoints.forEach((sectionModel: Model, sectionId: number) => {
			const section = new Instance("Folder")
			section.Name = tostring(sectionId)
			section.Parent = Workspace.Voxels

			if (Sections.get(sectionId) === undefined) {
				Sections.set(sectionId, [])
			}

			const top = sectionModel.FindFirstChild("Top") as Model
			const bottom = sectionModel.FindFirstChild("Bottom") as Model

			const top1 = top.FindFirstChild("1") as Part
			const top2 = top.FindFirstChild("2") as Part
			const top3 = top.FindFirstChild("3") as Part
			const bottom1 = bottom.FindFirstChild("1") as Part

			const AMOUNT_OF_BLOCKS = {
				X: math.round(top1.Position.sub(top2.Position).Magnitude / AXES_SIZE),
				Y: math.round(top1.Position.sub(bottom1.Position).Magnitude / AXES_SIZE),
				Z: math.round(top2.Position.sub(top3.Position).Magnitude / AXES_SIZE),
			}

			for (let x = 0; x <= AMOUNT_OF_BLOCKS.X; x++) {
				for (let y = 0; y <= AMOUNT_OF_BLOCKS.Y; y++) {
					const layerFolder = section.FindFirstChild(y) || new Instance("Folder")
					layerFolder.Name = tostring(y)
					layerFolder.Parent = section

					const sectionTable = Sections.get(sectionId) as { [key: number]: Part[] }

					if (sectionTable[y] === undefined) {
						sectionTable[y] = []
					}

					for (let z = 0; z <= AMOUNT_OF_BLOCKS.Z; z++) {
						blockId += 1

						const voxel = sectionModel.FindFirstChild("Template")?.Clone() as Part
						voxel.Name = tostring(blockId)
						voxel.Transparency = 0
						voxel.Position = top1.Position.add(new Vector3(x, -y, -z).mul(AXES_SIZE))
						voxel.Parent = y === 0 || y === AMOUNT_OF_BLOCKS.Y ? layerFolder : ServerStorage.StoredVoxels

						Voxels[blockId] = {
							Block: voxel,
							CurrentLayer: y,
							Layer: sectionId,
						}

						sectionTable[y].insert(sectionTable[y].size(), voxel)
					}
				}

				task.wait()
			}
		})

		for (const [_, blockData] of pairs(Voxels)) {
			const section = Sections?.get(blockData.Layer) as { [key: number]: Part[] }
			const upperLayer = section[blockData.CurrentLayer - 1] ? section[blockData.CurrentLayer - 1] : []
			const lowerLayer = section[blockData.CurrentLayer + 1] ? section[blockData.CurrentLayer + 1] : []

			const closest: Part[] = []

			const block = blockData.Block
			const currentLayer = section[blockData.CurrentLayer]

			for (const otherBlocks of upperLayer) {
				if (block.Position.sub(otherBlocks.Position).Magnitude === AXES_SIZE) {
					closest.insert(closest.size(), otherBlocks)
				}
			}

			for (const otherBlocks of currentLayer) {
				if (block.Position.sub(otherBlocks.Position).Magnitude === AXES_SIZE) {
					closest.insert(closest.size(), otherBlocks)
				}
			}

			for (const otherBlocks of lowerLayer) {
				if (block.Position.sub(otherBlocks.Position).Magnitude === AXES_SIZE) {
					closest.insert(closest.size(), otherBlocks)
				}
			}

			this.BLOCK.set(tonumber(block.Name) as number, closest)

			if (this.BLOCK.size() === 2000) {
				return
			}

			task.wait()
		}
	},

	KnitStart() {
		this.Render()
	},
})

export = RenderService
