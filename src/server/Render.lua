local ServerStorage = game:GetService("ServerStorage")

local AXES_SIZE = 2.5

local BLOCKS = {}

local Voxels = {}
local Sections = {}


local id = 0

local function combine(a1, a2)
	local new = table.create(#a1 + #a2)
	table.move(a1, 1, #a1, 1, new)
	table.move(a2, 1, #a2, 1, new)
	return new
end

for layer, layerModel in ipairs(workspace.LayerPoints:GetChildren()) do
	local section = Instance.new("Folder")
	section.Name = layer
	section.Parent = workspace.Voxels
	
	if not Sections[layer] then
		Sections[layer] = {}
	end
	
	local AMOUNT_OF_BLOCKS = {
		X = math.round((layerModel.Top[1].Position - layerModel.Top[2].Position).Magnitude / AXES_SIZE),
		Y = math.round((layerModel.Top[1].Position - layerModel.Bottom[1].Position).Magnitude / AXES_SIZE),
		Z = math.round((layerModel.Top[2].Position - layerModel.Top[3].Position).Magnitude / AXES_SIZE)
	}
	
	for x = 0, AMOUNT_OF_BLOCKS.X do
		for y = 0, AMOUNT_OF_BLOCKS.Y do
			local layerFolder = section:FindFirstChild(y) or Instance.new("Folder")
			layerFolder.Name = y
			layerFolder.Parent = section
			
			if not Sections[layer][y] then
				Sections[layer][y] = {}
			end
			
			
			
			for z = 0, AMOUNT_OF_BLOCKS.Z do
				id += 1
				
				local voxel = layerModel.Template:Clone()
				voxel.Name = id
				voxel.Transparency = 0
				voxel.Position = layerModel.Top[1].Position + Vector3.new(x, -y, -z) * AXES_SIZE
				voxel.Parent = if y == 0 or y == AMOUNT_OF_BLOCKS.Y then layerFolder else ServerStorage.StoredVoxels
				
				Voxels[id] = {
					Block = voxel,
					CurrentLayer = y,
					Layer = layer,
				}
				
				table.insert(Sections[layer][y], voxel)
			end
		end
		
		task.wait()
	end
end

for blockId, blockData in ipairs(Voxels) do
	local upperLayer = if Sections[blockData.Layer][blockData.CurrentLayer - 1] then Sections[blockData.Layer][blockData.CurrentLayer - 1] else {}
	local lowerLayer = if Sections[blockData.Layer][blockData.CurrentLayer + 1] then Sections[blockData.Layer][blockData.CurrentLayer + 1] else {}

	local closest = {}
	
	local block = blockData.Block
	local currentLayer = Sections[blockData.Layer][blockData.CurrentLayer]
	
	for _, otherBlocks in ipairs(upperLayer) do
		if (block.Position - otherBlocks.Position).Magnitude == AXES_SIZE then
			table.insert(closest, otherBlocks)
		end
	end
	
	for _, otherBlocks in ipairs(currentLayer) do
		if (block.Position - otherBlocks.Position).Magnitude == AXES_SIZE then
			table.insert(closest, otherBlocks)
		end
	end
	
	for _, otherBlocks in ipairs(lowerLayer) do
		if (block.Position - otherBlocks.Position).Magnitude == AXES_SIZE then
			table.insert(closest, otherBlocks)
		end
	end
	
	BLOCKS[tonumber(block.Name)] = closest
	
	if #BLOCKS == 2000 then
		break
	end
	
	task.wait()
end

Voxels = nil
Sections = nil

local function mine(block)
	if not BLOCKS[block] then
		return
	end
	
	for _, block in ipairs(BLOCKS[block]) do
		block.Parent = workspace.Voxels
	end
end

task.wait(5)

mine(1)

--[[for startPoint = 1, 4 do
	local endPoint = if startPoint == 4 then 1 else startPoint + 1
	local AMOUNT_OF_BLOCKS = math.round((layerModel[startPoint].Position - layerModel[endPoint].Position).Magnitude / AXES_SIZE)

	local increment = 0

	for block = 0, AMOUNT_OF_BLOCKS do
		local voxel = layerModel.Template:Clone()
		voxel.Name = "Voxel"
		voxel.Transparency = 0
		voxel.Position = layerModel[startPoint].Position + CFrame.lookAt(
			layerModel[startPoint].Position,
			layerModel[endPoint].Position
		).LookVector * increment
		voxel.Parent = workspace.Voxels

		increment += AXES_SIZE
	end
end]]