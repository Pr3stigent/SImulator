import Fusion from "@rbxts/fusion"
import SideButtons from "./SideButtons"

export = function () {
	return (
		<frame BackgroundTransparency={1} Position={new UDim2(0.007, 0, 0.276, 0)} Size={new UDim2(0.167, 0, 0.405, 0)}>
			<SideButtons></SideButtons>
		</frame>
	)
}
