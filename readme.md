#Readme

This icon font is optimized for 16px and is intended to match the font metrics
of most screen-optimized sans-serif typefaces. This means icons will align well
with adjacent text and fon’t feel out of proportion.

##Contributing

SVG files can be edited with Inkscape and a new version of the font built using
IcoMoon, a free web app.

1.  Add or edit svg glyphs in ./src. Add new files with the next lower numeric
    prefix. This is required so the glyphs import in the proper order, which is
    essential.
2.  Visit http://icomoon.io/app and import all the glyphs
3.  Select all imported glyphs and click "Font →"
4.  In 'Preferences', set the font name to 'druplicons' and the icon prefix to
    'druplicon-'
5.  In 'Font Metrics', choose 'set font metrics manually' and apply the
    following:
    - Em Sqare: 2048
    - Baseline Height: 12.5
    - Whitespace Width: 50
6.  Ensure that the unicode points start from U+e000 and increment without gaps.
7.  Proceed with download
8.  Replace the old font files with the new font files (eot, svg, ttf, woff).
    Discard the dev.svg font file.
9.  Manually update the existing CSS using the generated CSS as reference.
    Additions should normally consist of adding on or more rules like the
    following:

    <code>
    .druplicon-new:before {
      content: "\e000"; /* Copy this from the generated CSS */
    }
    </code>

10. Add an example to the index.html for any new glyphs.
