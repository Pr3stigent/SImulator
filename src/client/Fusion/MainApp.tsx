import { Players } from "@rbxts/services"
import Fusion from "@rbxts/fusion"
import SidePanel from "./Components/SidePanel"

const player = Players.LocalPlayer
const playerGui = player.WaitForChild("PlayerGui")

function MainApp() {
	return <SidePanel></SidePanel>
}

export = {
	Mount: MainApp,
}
