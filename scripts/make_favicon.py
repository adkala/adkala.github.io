#!/usr/bin/env python3
"""Convert PNG to ICO format for favicon"""
from PIL import Image
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Open the source PNG
img = Image.open('images/favicon.png')

# Create ICO with multiple sizes
img.save('images/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])

print("Created images/favicon.ico")
