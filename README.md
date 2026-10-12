# GMT 458 - Web GIS Assignment 1: Personal Web Page

A personal web page with a pixel-art theme, built with HTML, CSS, Leaflet, and OpenLayers.

## Pages
- `index.html`: Home page (About Me, Experiences, Skills, Languages, Maps, Contact)
- `projects.html`: Projects showcase table with images and descriptions
- `maps.html`: Interactive web GIS map interface featuring both Leaflet and OpenLayers in a unified tabbed view, focused on Hacettepe University Beytepe Campus with custom pins and popups.

## Features & Assignment Objectives

### 1. HTTP 403 Access Blocked Error Fix
- **Root Cause:** The default `tile.openstreetmap.org` tile server requires a valid HTTP `Referer` header according to the OpenStreetMap Tile Usage Policy. When opening HTML files locally via the `file:///` protocol, browsers do not send a Referer header, causing OSM to return `HTTP 403 Forbidden (Access Blocked)`.
- **Solution:** Switched the tile layers to CARTO Voyager (`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`). It serves open OpenStreetMap data through a global CDN without blocking local `file:///` requests, localhost servers, or GitHub Pages.

### 2. Location & Marker
- Maps are centered on **Hacettepe University Beytepe Campus** (`[39.8655, 32.7338]`).
- Features a custom pixel-styled pin with a floating bubble displaying **"Beni burada bulabilirsiniz"** directly above the marker, along with detailed popups on click.

### 3. Solved Issues
- **Issue 1 (Zoom Threshold / Overlapping Markers):**
  - *Leaflet:* Managed via `L.layerGroup()` and `map.on('zoomend')`. Markers only render when the zoom level is $\ge 12$. A live zoom indicator informs the user of the current zoom and visibility state.
  - *OpenLayers:* Implemented using `minZoom: 12` on `ol.layer.Vector` and synchronized with an overlay display check on `change:resolution`.
- **Issue 2 (Preventing World from Repeating):**
  - *Leaflet:* Configured with `minZoom: 2`, `maxBounds: [[-90, -180], [90, 180]]`, `maxBoundsViscosity: 1.0`, and `noWrap: true` on the tile layer.
  - *OpenLayers:* Configured with `wrapX: false` on the tile source, `minZoom: 2`, and an extent constraint (`extent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34]`) on the view.

## What I Learned from AI
- Diagnosing and resolving the OSM 403 Access Blocked policy issue caused by missing Referer headers on local `file:///` origins.
- How to create a unified tabbed map interface supporting both Leaflet and OpenLayers without tile distortion using `map.invalidateSize()` and `olMap.updateSize()`.
- Managing zoom thresholds dynamically across both Leaflet (`L.layerGroup` add/remove) and OpenLayers (`minZoom` vector layer configuration).
- Implementing bounding constraints (`noWrap`, `maxBounds`, `wrapX: false`, and `extent`) to avoid world replication.

## Estimated AI Usage
About 2 hours

## Sources & Credits
- Pixel-art artwork generated with Gemini
- Fonts: Press Start 2P and VT323 (Google Fonts)
- Map Data: OpenStreetMap contributors & CARTO Basemaps