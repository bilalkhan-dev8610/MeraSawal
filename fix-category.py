#!/usr/bin/env python3
# Quick fix script to replace categoryId

import re

# Read the file
with open('/src/app/data/additionalQuestions.ts', 'r') as f:
    content = f.read()

# Replace all occurrences of categoryId: 'quantitative' with categoryId: 'quant-reasoning'
content = content.replace("categoryId: 'quantitative',", "categoryId: 'quant-reasoning',")

# Write back
with open('/src/app/data/additionalQuestions.ts', 'w') as f:
    f.write(content)

print("Fixed 90 occurrences of categoryId from 'quantitative' to 'quant-reasoning'")
