#Readme

## Why

There are already plenty of good (and free) icon fonts out there. Why another
one? Because every single one uses a license incompatible with GPL v2. This font
was designed to fill the gap for projects that use the GPL or other similarly
strict FLOSS terms. It uses the GPL-compatible MIT license.

In addition:
- The font is optimized for rendering at 16px (and multiples)
- It is intended to match the font metrics of most screen-optimized sans-serif
  typefaces. This means icons will align well with adjacent text and won’t feel
  out of proportion with the text.

##Contributing

SVG files can be edited with Inkscape or the editor of your choice and a new
version of the font built using IcoMoon, a free web app.

1.  Add or edit svg glyphs in ./src. Add new files with the next lower numeric
    prefix. This is required so the glyphs import in the proper order, which is
    essential.
2.  Optimize the SVG output; for example, https://github.com/svg/svgo
3.  Visit http://icomoon.io/app and import *all* glyphs from ./src
4.  Select all imported glyphs and click "Font →"
5.  In 'Preferences', set the font name to 'druplicons' and the icon prefix to
    'druplicon-'
6.  In 'Font Metrics', choose 'set font metrics manually' and apply the
    following:
    - Em Sqare: 2048
    - Baseline Height: 12.5
    - Whitespace Width: 50
7.  Ensure that the unicode points start from U+e000 and increment without gaps.
8.  Proceed with download
9.  Replace the old font files with the new font files (eot, svg, ttf, woff).
    Discard the dev.svg font file.
10. Manually update the existing CSS using the generated CSS as reference.
    Additions should normally consist of adding on or more rules like the
    following:

    <code>
    .druplicon-new:before {
      content: "\e000"; /* Copy this from the generated CSS */
    }
    </code>

11. Add an example to the index.html for any new glyphs.

## Todo

- Better automation (building the font on the command line)
- Evaluate the slightly non-standard CSS selector pattern for rendering icons.
