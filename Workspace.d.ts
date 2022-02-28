interface Workspace extends Model {
	Camera: Camera
	Baseplate: Part & {
		Texture: Texture
	}
	Voxels: Folder
	LayerPoints: Folder & {
		["1"]: Model & {
			Top: Model & {
				["1"]: Part
				["4"]: Part
				["3"]: Part
				["2"]: Part
			}
			Template: Part
			Bottom: Model & {
				["1"]: Part
				["4"]: Part
				["3"]: Part
				["2"]: Part
			}
		}
		["2"]: Model & {
			Top: Model & {
				["1"]: Part
				["4"]: Part
				["3"]: Part
				["2"]: Part
			}
			Template: Part
			Bottom: Model & {
				["1"]: Part
				["4"]: Part
				["3"]: Part
				["2"]: Part
			}
		}
	}
}
