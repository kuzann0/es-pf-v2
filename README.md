# Portfolio - Elvis Selisana

A modern, responsive portfolio website with smooth animations, category filtering, and 3D model support.

## Project Structure

```
portfolio-new/
├── index.html           # Main HTML file
├── style/
│   └── style.css       # Main stylesheet with design system
├── js/
│   └── script.js       # JavaScript for interactivity
├── images/             # Images and 3D models
├── init.bat            # Initialization script
└── README.md           # This file
```

## Design System

### CSS Variables (Customizable in `:root`)

**Colors:**

- `--color-primary`: Main text color (#f4f4f9)
- `--color-bg-dark`: Dark background (#0a0a0a)
- `--color-bg-light`: Light background (#161616)
- `--color-border`: Border color
- `--color-text-secondary`: Secondary text color
- `--color-accent`: Accent color

**Typography:**

- `--font-family-primary`: Body font (Inter)
- `--font-family-display`: Display font (Bebas Neue)
- `--font-size-base`: Base font size
- `--font-size-lg`: Large font size

**Spacing:**

- `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`

**Z-index:**

- `--z-vignette`: Vignette layer
- `--z-base`: Base layer
- `--z-navbar`: Navbar layer
- `--z-works`: Works section layer

## Key Features

### 1. Responsive Design

- Desktop (1024px+)
- Tablet (768px)
- Mobile (480px)
- Extra Small (320px)

### 2. Category Filter System

Click category buttons (Images, Videos, 3D, Web, Personal) to filter portfolio items.

**How it works:**

- Add items with class: `category-name-item`
- Filter is handled in `js/script.js`
- Coming Soon placeholders for empty categories

### 3. 3D Model Viewer

- Uses Google's Model Viewer library
- Portrait and landscape orientations supported
- Overlaps outside container for visual interest

**Add new 3D model:**

```html
<div class="category-content three-d-item" data-orientation="portrait">
  <model-viewer
    src="path/to/model.glb"
    auto-rotate
    camera-controls
  ></model-viewer>
</div>
```

### 4. Animations

- Hero section background elements rotate independently
- Smooth scroll behavior
- Hover effects on interactive elements

## Customization

### Change Colors

Edit CSS variables in `style/style.css` `:root` section:

```css
--color-primary: #your-color;
--color-bg-light: #your-color;
```

### Change Fonts

Import new fonts in `index.html` and update variables:

```css
--font-family-primary: "Your Font";
--font-family-display: "Your Display Font";
```

### Adjust Spacing

Modify spacing variables:

```css
--spacing-md: 50px; /* Default 40px */
--spacing-lg: 60px; /* Default 50px */
```

## JavaScript Functions

### `filterByCategory(category)`

Filters portfolio items by category. Called when user clicks category buttons.

Usage: Categories must have class format `{category}-item`

## Performance Tips

1. **Images**: Optimize before uploading to `images/` folder
2. **3D Models**: Use compressed `.glb` format
3. **Animations**: Using CSS animations (not JavaScript) for smooth 60fps

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE11: Limited support

## Development

### Adding New Portfolio Items

**Images:**

```html
<div class="category-content images-item">
  <img src="images/your-image.jpg" alt="description" />
</div>
```

**Videos:**

```html
<div class="category-content videos-item">
  <video src="videos/your-video.mp4" controls></video>
</div>
```

**3D Models:**

```html
<div class="category-content three-d-item" data-orientation="portrait">
  <model-viewer
    src="images/your-model.glb"
    auto-rotate
    camera-controls
  ></model-viewer>
</div>
```

## Maintenance

- **CSS**: All repeated values use variables for easy updates
- **Comments**: Section headers organize large code blocks
- **Mobile**: Update media queries if changing breakpoints
- **Fonts**: Edit Google Fonts import in `index.html` head

## License

© 2026 Elvis Selisana. All rights reserved.
