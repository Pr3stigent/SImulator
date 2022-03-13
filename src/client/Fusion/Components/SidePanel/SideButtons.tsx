import Fusion from "@rbxts/fusion"

interface ButtonProps {
	Name: string
	Image: string
}

function SideButton(props: ButtonProps) {
	return (
		<imagebutton
			Name={props.Name}
			Active={false}
			AutoButtonColor={false}
			BackgroundColor3={Color3.fromRGB(0, 196, 255)}
			BorderSizePixel={0}
			Position={new UDim2(-0.003, 0, -0.005, 0)}
			Selectable={false}
			Size={new UDim2(0.292, 0, 0.449, 0)}
		>
			<uicorner />
			<uigradient
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(255, 255, 255)),
						new ColorSequenceKeypoint(0.6960000000000001, Color3.fromRGB(127, 221, 255)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(26, 194, 255)),
					])
				}
				Rotation={45}
			/>
			<uistroke Color={Color3.fromRGB(0, 151, 216)} Thickness={3.6} />
			<imagelabel
				Name="Frame"
				BackgroundTransparency={1}
				Image={props.Image}
				Position={new UDim2(0.146, 0, 0.153, 0)}
				Size={new UDim2(0.687, 0, 0.687, 0)}
			>
				<uicorner />
				<uistroke Color={Color3.fromRGB(0, 155, 226)} Thickness={2.2} />
			</imagelabel>
		</imagebutton>
	)
}

function SideButtons() {
	return (
		<frame
			Name="Buttons"
			BackgroundTransparency={1}
			Position={new UDim2(0.008, 0, 0.035, 0)}
			Size={new UDim2(0.992, 0, 0.47400000000000003, 0)}
		>
			<uigridlayout
				CellPadding={new UDim2(0, 13, 0, 13)}
				CellSize={new UDim2(0.3, 0, 0.45, 0)}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
			/>
			<SideButton Name="Shop" Image="rbxassetid://7072721954"></SideButton>
			<SideButton Name="Inventory" Image="rbxassetid://7072706351"></SideButton>
			<SideButton Name="Teleport" Image="rbxassetid://4814045731"></SideButton>
			<SideButton Name="Frame" Image="rbxassetid://7072721954"></SideButton>
			<SideButton Name="Trading" Image="rbxassetid://7072721954"></SideButton>
			<SideButton Name="Code" Image="rbxassetid://3391479429"></SideButton>
		</frame>
	)
}

export = SideButtons

/*
<imagebutton
				Name="Shop"
				Active={false}
				AutoButtonColor={false}
				BackgroundColor3={Color3.fromRGB(0, 196, 255)}
				BorderSizePixel={0}
				Position={new UDim2(-0.003, 0, -0.005, 0)}
				Selectable={false}
				Size={new UDim2(0.292, 0, 0.449, 0)}
			>
				<uicorner />
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 255, 255)),
							new ColorSequenceKeypoint(0.6960000000000001, Color3.fromRGB(127, 221, 255)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(26, 194, 255)),
						])
					}
					Rotation={45}
				/>
				<uistroke Color={Color3.fromRGB(0, 151, 216)} Thickness={3.6} />
				<imagelabel
					Name="Frame"
					BackgroundTransparency={1}
					Image="rbxassetid://7072721954"
					Position={new UDim2(0.146, 0, 0.153, 0)}
					Size={new UDim2(0.687, 0, 0.687, 0)}
				>
					<uicorner />
					<uistroke Color={Color3.fromRGB(0, 155, 226)} Thickness={2.2} />
				</imagelabel>
			</imagebutton>
			<imagebutton
				Name="Code"
				Active={false}
				AutoButtonColor={false}
				BackgroundColor3={Color3.fromRGB(0, 196, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.707, 0, 0.545, 0)}
				Selectable={false}
				Size={new UDim2(0.292, 0, 0.449, 0)}
			>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 255, 255)),
							new ColorSequenceKeypoint(0.6960000000000001, Color3.fromRGB(127, 221, 255)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(26, 194, 255)),
						])
					}
					Rotation={45}
				/>
				<uistroke Color={Color3.fromRGB(0, 151, 216)} Thickness={3.6} />
				<uicorner />
				<imagelabel
					Name="Frame"
					BackgroundTransparency={1}
					Image="rbxassetid://3391479429"
					Position={new UDim2(0.146, 0, 0.153, 0)}
					Size={new UDim2(0.687, 0, 0.687, 0)}
				>
					<uicorner />
					<uistroke Color={Color3.fromRGB(0, 155, 226)} Thickness={2.2} />
				</imagelabel>
			</imagebutton>
			<imagebutton
				Name="Inventory"
				Active={false}
				AutoButtonColor={false}
				BackgroundColor3={Color3.fromRGB(0, 196, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.352, 0, -0.005, 0)}
				Selectable={false}
				Size={new UDim2(0.292, 0, 0.449, 0)}
			>
				<uicorner />
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 255, 255)),
							new ColorSequenceKeypoint(0.6960000000000001, Color3.fromRGB(127, 221, 255)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(26, 194, 255)),
						])
					}
					Rotation={45}
				/>
				<uistroke Color={Color3.fromRGB(0, 151, 216)} Thickness={3.6} />
				<imagelabel
					Name="Frame"
					BackgroundTransparency={1}
					Image="rbxassetid://7072706351"
					Position={new UDim2(0.146, 0, 0.153, 0)}
					Size={new UDim2(0.687, 0, 0.687, 0)}
				>
					<uicorner />
					<uistroke Color={Color3.fromRGB(0, 155, 226)} Thickness={2.2} />
				</imagelabel>
			</imagebutton>
			<imagebutton
				Name="Teleport"
				Active={false}
				AutoButtonColor={false}
				BackgroundColor3={Color3.fromRGB(0, 196, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.707, 0, -0.005, 0)}
				Selectable={false}
				Size={new UDim2(0.292, 0, 0.449, 0)}
			>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 255, 255)),
							new ColorSequenceKeypoint(0.6960000000000001, Color3.fromRGB(127, 221, 255)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(26, 194, 255)),
						])
					}
					Rotation={45}
				/>
				<uistroke Color={Color3.fromRGB(0, 151, 216)} Thickness={3.6} />
				<uicorner />
				<imagelabel
					Name="Frame"
					BackgroundTransparency={1}
					Image="rbxassetid://4814045731"
					Position={new UDim2(0.146, 0, 0.153, 0)}
					Size={new UDim2(0.687, 0, 0.687, 0)}
				>
					<uicorner />
					<uistroke Color={Color3.fromRGB(0, 155, 226)} Thickness={2.2} />
				</imagelabel>
			</imagebutton>
			<imagebutton
				Name="Trading"
				Active={false}
				AutoButtonColor={false}
				BackgroundColor3={Color3.fromRGB(0, 196, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.352, 0, 0.545, 0)}
				Selectable={false}
				Size={new UDim2(0.292, 0, 0.449, 0)}
			>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 255, 255)),
							new ColorSequenceKeypoint(0.6960000000000001, Color3.fromRGB(127, 221, 255)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(26, 194, 255)),
						])
					}
					Rotation={45}
				/>
				<uistroke Color={Color3.fromRGB(0, 151, 216)} Thickness={3.6} />
				<uicorner />
				<imagelabel
					Name="Frame"
					BackgroundTransparency={1}
					Image="rbxassetid://7072721954"
					Position={new UDim2(0.146, 0, 0.153, 0)}
					Size={new UDim2(0.687, 0, 0.687, 0)}
				>
					<uicorner />
					<uistroke Color={Color3.fromRGB(0, 155, 226)} Thickness={2.2} />
				</imagelabel>
			</imagebutton>
			<imagebutton
				Name="Frame"
				Active={false}
				AutoButtonColor={false}
				BackgroundColor3={Color3.fromRGB(0, 196, 255)}
				BorderSizePixel={0}
				Position={new UDim2(-0.003, 0, 0.545, 0)}
				Selectable={false}
				Size={new UDim2(0.292, 0, 0.449, 0)}
			>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 255, 255)),
							new ColorSequenceKeypoint(0.6960000000000001, Color3.fromRGB(127, 221, 255)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(26, 194, 255)),
						])
					}
					Rotation={45}
				/>
				<uicorner />
				<uistroke Color={Color3.fromRGB(0, 151, 216)} Thickness={3.6} />
				<imagelabel
					Name="Frame"
					BackgroundTransparency={1}
					Image="rbxassetid://7072721954"
					Position={new UDim2(0.146, 0, 0.153, 0)}
					Size={new UDim2(0.687, 0, 0.687, 0)}
				>
					<uicorner />
					<uistroke Color={Color3.fromRGB(0, 155, 226)} Thickness={2.2} />
				</imagelabel>
			</imagebutton>
*/
