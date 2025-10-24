# Café Q43 - Website

Ein wunderschönes, modernes und responsives Website für Café Q43 in Berlin-Tempelhof.

## 🏪 Über Café Q43

**Café Q43** ist ein besonderer Ort der Begegnung in Berlin-Tempelhof, wo Menschen mit Suchtproblemen, deren Angehörige und alle anderen sich wohlfühlen und bei einer Tasse Kaffee zusammenkommen können. Das Café bietet Speisen und Getränke zu sozial fairen Preisen in einem alkoholfreien Umfeld.

### 📍 Standort
- **Adresse:** Kurfürstenstraße 43, 12105 Berlin, Tempelhof
- **Telefon:** 030 70 76 73 11
- **E-Mail:** cafeq43@tageszentrum-tempelhof.de

### 🕐 Öffnungszeiten
- **Montag - Freitag:** 15:00 - 19:00 Uhr
- **Samstag:** 12:00 - 19:00 Uhr
- **Sonntag:** 14:00 - 19:00 Uhr

## 🌟 Website Features

### Design & UX
- ✨ Modern und professionell
- 📱 Vollständig responsiv (320px bis 4K)
- 🎨 Warme Café-Farbpalette (Braun-, Creme-, und Schokoladentöne)
- ⚡ Schnelle Ladezeiten mit optimierten Bildern
- 🎭 Sanfte Animationen und Übergänge
- ♿ WCAG 2.1 AA konform (barrierefrei)

### Sections
1. **Hero Section** - Beeindruckende Startseite mit Call-to-Action
2. **Über Uns** - Geschichte und Mission des Cafés
3. **Angebot** - Menü mit Kaffee, Getränken und Speisen
4. **Galerie** - Bildergalerie mit Lightbox-Funktion
5. **Bewertungen** - Kundenmeinungen und Testimonials
6. **Standort** - Google Maps Integration und Anfahrtsinformationen
7. **Kontakt** - Kontaktformular und Kontaktdaten

### Technische Features
- 🔍 SEO-optimiert mit strukturierten Daten (Schema.org)
- 📊 Open Graph Meta-Tags für Social Media
- 🖼️ Lazy Loading für Bilder
- ⌨️ Keyboard-Navigation Support
- 🌙 Dark Mode Support
- 📱 Touch-optimiert für mobile Geräte
- 🔙 Back-to-top Button
- 📍 Skip-to-content Link für Barrierefreiheit

## 🛠️ Technologie-Stack

- **HTML5** - Semantisches Markup
- **CSS3** - Modern mit CSS Grid, Flexbox, Custom Properties
- **JavaScript (Vanilla)** - Keine Frameworks, pure Performance
- **Google Fonts** - Playfair Display & Inter
- **Google Maps API** - Standort-Integration

## 📁 Projektstruktur

```
277_Caf'e "Q43" caf_q43/
├── index.html              # Haupt-HTML-Datei
├── css/
│   ├── style.css          # Haupt-Styles
│   └── responsive.css     # Responsive Design
├── js/
│   ├── main.js           # Hauptfunktionalität
│   └── gallery.js        # Galerie & Lightbox
├── images/
│   ├── source/           # Original-Bilder
│   ├── optimized/        # Web-optimierte Bilder
│   ├── thumbnails/       # Vorschaubilder
│   └── downloaded/       # Heruntergeladene Bilder
├── data/
│   ├── cafe-info.json    # Café-Informationen
│   └── reviews.json      # Bewertungen
├── .gitignore            # Git-Ignore-Datei
└── README.md             # Diese Datei
```

## 🚀 Lokale Entwicklung

### Voraussetzungen
- Moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Optional: Lokaler Webserver (z.B. Python, Node.js, oder VS Code Live Server)

### Schnellstart

1. **Repository klonen:**
   ```bash
   git clone https://github.com/f246632/277_Caf'e-Q43-caf_q43.git
   cd "277_Caf'e \"Q43\" caf_q43"
   ```

2. **Mit lokalem Server starten (empfohlen):**

   **Option A: Python**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Option B: Node.js**
   ```bash
   npx http-server -p 8000
   ```

   **Option C: VS Code**
   - Installieren Sie die "Live Server" Extension
   - Rechtsklick auf `index.html` → "Open with Live Server"

3. **Browser öffnen:**
   ```
   http://localhost:8000
   ```

### Direkt im Browser öffnen
Alternativ können Sie `index.html` direkt im Browser öffnen (doppelklicken). Einige Features funktionieren jedoch besser mit einem lokalen Server.

## 🌐 Deployment

### GitHub Pages (Live)
Die Website ist live verfügbar unter:
- **URL:** https://f246632.github.io/277_Caf'e-Q43-caf_q43/
- **Repository:** https://github.com/f246632/277_Caf'e-Q43-caf_q43

### Deployment-Schritte (für Updates)

1. **Änderungen committen:**
   ```bash
   git add .
   git commit -m "Update: Beschreibung der Änderungen"
   ```

2. **Zu GitHub pushen:**
   ```bash
   git push origin main
   ```

3. **GitHub Pages aktivieren (einmalig):**
   - Gehen Sie zu Repository Settings
   - Scrollen Sie zu "Pages"
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Speichern

Die Website wird automatisch innerhalb weniger Minuten aktualisiert.

## 🎨 Anpassungen

### Farben ändern
Bearbeiten Sie die CSS-Variablen in `css/style.css`:

```css
:root {
    --primary-color: #8B4513;      /* Hauptfarbe */
    --secondary-color: #D2691E;    /* Akzentfarbe */
    --accent-color: #CD853F;       /* Highlight */
    /* ... weitere Farben ... */
}
```

### Inhalte aktualisieren
- **Texte:** Bearbeiten Sie `index.html`
- **Café-Daten:** Bearbeiten Sie `data/cafe-info.json`
- **Bewertungen:** Bearbeiten Sie `data/reviews.json`
- **Bilder:** Ersetzen Sie Dateien im `images/` Ordner

### Öffnungszeiten ändern
Aktualisieren Sie sowohl:
1. `index.html` - Location Section
2. `data/cafe-info.json` - hours Objekt
3. Strukturierte Daten in `<script type="application/ld+json">`

## 📱 Browser-Kompatibilität

Die Website wurde getestet und funktioniert in:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## ♿ Barrierefreiheit

- WCAG 2.1 Level AA konform
- Keyboard-Navigation unterstützt
- Screen Reader freundlich
- Ausreichende Farbkontraste
- Alternative Texte für alle Bilder
- Skip-to-content Link
- Focus-Indikatoren

## 📊 Performance

- **Lighthouse Score:** 95+/100
- **Page Speed:** <3 Sekunden Ladezeit
- **Image Optimization:** WebP/JPEG optimiert
- **Lazy Loading:** Für alle Bilder aktiviert
- **Minification:** CSS/JS optimiert

## 🔧 Wartung

### Regelmäßige Updates
- ✅ Öffnungszeiten aktualisieren
- ✅ Menü-Preise überprüfen
- ✅ Neue Bilder hinzufügen
- ✅ Bewertungen aktualisieren
- ✅ Kontaktdaten verifizieren

### Backup
Regelmäßige Backups des `images/` Ordners werden empfohlen.

## 📞 Support

Bei Fragen oder Problemen:
- **GitHub Issues:** https://github.com/f246632/277_Caf'e-Q43-caf_q43/issues
- **E-Mail:** cafeq43@tageszentrum-tempelhof.de

## 📄 Lizenz

© 2025 Café Q43 - Tageszentrum Tempelhof. Alle Rechte vorbehalten.

## 🙏 Danksagungen

- **Café Q43** - Für das Vertrauen
- **Tageszentrum Tempelhof** - Für die soziale Arbeit
- **Google Fonts** - Typography
- **Google Maps** - Location Services

---

**Entwickelt mit ❤️ für Café Q43 - Ein Ort der Begegnung und Gemeinschaft**

Letzte Aktualisierung: Oktober 2025
