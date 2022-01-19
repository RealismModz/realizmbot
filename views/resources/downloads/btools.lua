local Button = script.Parent

--Don't touch any of this, put this script right into your TextButton or ImageButton
Button.MouseButton1Click:Connect(function()
	local a = Instance.new("HopperBin", game.Players.LocalPlayer.Backpack)
	a.BinType = 2
	local b = Instance.new("HopperBin", game.Players.LocalPlayer.Backpack)
	b.BinType = 3
	local c = Instance.new("HopperBin", game.Players.LocalPlayer.Backpack)
	c.BinType = 4
end)