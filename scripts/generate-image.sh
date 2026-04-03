#!/bin/bash
# Nano Banana Pro (Gemini 3 Pro Image Preview) 画像生成スクリプト
# Usage: ./scripts/generate-image.sh "prompt text" output_filename [aspect_ratio]
# Example: ./scripts/generate-image.sh "A modern office with teal accents" hero.png 16:9

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Load API key from .env
if [ -f "$PROJECT_DIR/.env" ]; then
  export $(grep -v '^#' "$PROJECT_DIR/.env" | xargs)
fi

if [ -z "${GEMINI_API_KEY:-}" ] || [ "$GEMINI_API_KEY" = "YOUR_KEY_HERE" ]; then
  echo "Error: GEMINI_API_KEY not set. Edit .env file with your API key."
  exit 1
fi

PROMPT="${1:?Usage: $0 \"prompt\" output_filename [aspect_ratio]}"
OUTPUT="${2:?Usage: $0 \"prompt\" output_filename [aspect_ratio]}"
ASPECT_RATIO="${3:-16:9}"
OUTPUT_DIR="$PROJECT_DIR/generated-images"
OUTPUT_PATH="$OUTPUT_DIR/$OUTPUT"

echo "Generating image: $PROMPT"
echo "Aspect ratio: $ASPECT_RATIO"
echo "Output: $OUTPUT_PATH"

RESPONSE=$(curl -s "https://generativelanguage.googleapis.com/v1beta/models/nano-banana-pro-preview:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"contents\": [{
      \"parts\": [{\"text\": \"Generate an image: $PROMPT. Aspect ratio: $ASPECT_RATIO\"}]
    }],
    \"generationConfig\": {
      \"responseModalities\": [\"TEXT\", \"IMAGE\"]
    }
  }")

# Extract base64 image data from response
IMAGE_DATA=$(echo "$RESPONSE" | python3 -c "
import sys, json
data = json.load(sys.stdin)
candidates = data.get('candidates', [])
if candidates:
    parts = candidates[0].get('content', {}).get('parts', [])
    for part in parts:
        if 'inlineData' in part:
            print(part['inlineData']['data'])
            break
        elif 'inline_data' in part:
            print(part['inline_data']['data'])
            break
")

if [ -z "$IMAGE_DATA" ]; then
  echo "Error: No image data in response"
  echo "Response: $RESPONSE" | head -c 500
  exit 1
fi

echo "$IMAGE_DATA" | base64 -d > "$OUTPUT_PATH"
echo "Image saved to: $OUTPUT_PATH"
