# GMT 458 - Web GIS Assignment 1: Personal Web Page

A personal portfolio web page with a pixel-art theme, built with HTML, CSS, JavaScript, Leaflet, and OpenLayers.

## Pages
- `index.html`: Home page (Pixel-art intro animation, About Me, Experiences, Skills, Languages, Contact)
- `projects.html`: Projects showcase table with images, descriptions, and technology stacks
- `maps.html`: Interactive Web GIS interface featuring both Leaflet and OpenLayers centered on Hacettepe University Beytepe Campus ("You can find me here")

## Solved Issues & Features
- **Issue 1 (Zoom Threshold):** Markers only render at zoom level 12 and above to prevent clutter and overlap.
- **Issue 2 (Repeating Earth):** Prevented map replication horizontally using `noWrap: true`, `maxBounds`, and `minZoom: 2` in Leaflet, and `wrapX: false` with view `extent` in OpenLayers.
- **Single Map Experience:** Unified both map engines inside interactive tabs allowing seamless toggling.

## What I Learned from AI
- Diagnosed and resolved the OpenStreetMap 403 Access Blocked / Forbidden tile error (caused by missing `Referer` headers when browsing via local `file:///` scheme; fixed via local server and GitHub Pages hosting).
- Techniques to avoid world repetition across Web GIS libraries (`noWrap`, `maxBounds` in Leaflet; `wrapX: false` and coordinate `extent` in OpenLayers).
- Implementing marker visibility thresholds based on dynamic zoom level listeners (`zoomend` in Leaflet, `minZoom` on OpenLayers vector layers).
- Structuring multi-map tab switching and canvas resizing (`invalidateSize` / `updateSize`).

## Estimated AI Usage
About 1.5 hours

## Sources
- Pixel-art images generated with Gemini
- Typography: Press Start 2P and VT323 (Google Fonts)
- Map Data: OpenStreetMap contributors