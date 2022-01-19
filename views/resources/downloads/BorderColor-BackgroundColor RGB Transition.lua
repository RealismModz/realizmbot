
-- Border Color

function zigzag(X)return math.acos(math.cos(X*math.pi))/math.pi	end

counter = 0

while wait(0.2) do -- No higher than 1 and no lower than 0
	
	script.Parent.BorderColor3 = Color3.fromHSV(zigzag(counter),1,1)
	
	counter = counter + 0.01
end

-- Or

-- Background Color

function zigzag(X)return math.acos(math.cos(X*math.pi))/math.pi	end

counter = 0

while wait(0.2) do -- No higher than 1 and no lower than 0
	
	script.Parent.BackgroundColor3 = Color3.fromHSV(zigzag(counter),1,1)
	
	counter = counter + 0.01
end