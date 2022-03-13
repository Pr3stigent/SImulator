import { CollectionService } from "@rbxts/services"
import { KnitClient as Knit } from "@rbxts/knit"

declare global {
	interface KnitControllers {
		ShopController: typeof ShopController
	}
}

const ShopController = Knit.CreateController({
	Name: "ShopController",

	KnitInit() {},

	KnitStart() {
		for (const shop of CollectionService.GetTagged("Shop") as Part[]) {
			shop.Touched.Connect(() => {
				// FUsion
			})
		}
	},
})

export = ShopController
