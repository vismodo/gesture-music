import sys
import pyautogui

x = int(float(sys.argv[1])*1000)
y = int(float(sys.argv[2])*1000)

print([x, y])

pyautogui.moveTo(x,y)