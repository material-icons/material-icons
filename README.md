# Material Design Icons

Material Design Icons is the official [icon set](https://www.google.com/design/spec/style/icons.html#icons-system-icons) from Google. The icons are designed under the [material design guidelines](https://material.io/guidelines/).

## Updated set

This is an updated version of icons, which includes all icons available at [material.io](https://material.io/resources/icons/).

You can find an older version of this icon set in [google/material-design-icons](https://github.com/google/material-design-icons) repository.

Because the official repository is no longer maintained, I have decided to make an alternative repository with the latest icons.

## Available icons

Version 3 that is available in the official icons repository only includes 1 variation of each icon.

This repository includes several variations for each icon:

- baseline
- sharp
- outline
- round
- two-tone

This repository includes only icons in SVG format. Other available formats are in different repositories:

- PNG: [material-icons-png](https://github.com/material-icons/material-icons-png)
- Font: [material-icons-font](https://github.com/material-icons/material-icons-font)

If you need another format, please open an issue on this repository and specify what format, size and colour you need.

## Getting started

This readme explains how to use updated icons set in your projects.

This repository does not use the same build process as the official Google MDI repository and has a different folder structure.

### Using SVG

SVG files are available in the directory "svg", followed by icon name. Each directory contains up to 5 SVG files, one for each icon variation.

All icons are 24x24, cleaned up and optimized. If you need a different size, change width and height attributes in the icon. SVG files are scalable, duplicating them for different sizes is pointless.

To get SVG files, you can either [clone GitHub repository](https://github.com/material-icons/material-icons) or install `@material-icons/svg` NPM package.

### Web font

Web font is is available in [material-icons-font](https://github.com/material-icons/material-icons-font) repository.

#### Avoid using web font!

Icon fonts are easy to use, but they are bad, very bad. They were a good idea many years ago when browsers had poor support for SVG, but in modern world avoid icon fonts like a plague. Why?

- Icon fonts are ugly. When browser renders icon font glyph, it uses different algorythm than when rendering images. This results in blurry edges, bad alignment, it is especially bad when using Windows.
- Fonts are for displaying text. If you want to display an image, use image.
- Icon fonts contain lots of icons you do not use. Why load 5000 icons to display 5? It is a waste of bandwidth for visitors. It causes website to load slower, which also affects SEO.

So what is the alternative? Use SVG!

### Iconify

All icons are available with [Iconify](https://iconify.design/).

#### What is Iconify?

Iconify project makes it easy to add SVG icons to websites and offers over 100,000 icons to choose from.

Iconify project uses a new innovative approach to loading icons. Unlike fonts and SVG frameworks, Iconify only loads icons that are used on the current page. That means if you display 20 icons on page, visitor will load data only for those 20 icons, no extra stuff.

You are no longer limited to this icon set, but can choose various icons from other icon sets that follow Material Design guidelines:

- [Templarian's Material Design Icons](https://icon-sets.iconify.design/mdi/)
- [Material Design Light](https://icon-sets.iconify.design/mdi-light/)
- [Unicons](https://icon-sets.iconify.design/uil/)
- [Box Icons](https://icon-sets.iconify.design/bx/)
- [Remix Icons](https://icon-sets.iconify.design/ri/)
- [Jam Icons](https://icon-sets.iconify.design/jam/)

and many other icon sets.

#### How to use this icon set with Iconify?

[Browse this icon set on Iconify website](https://icon-sets.iconify.design/ic/), click any icon (for example, [content-paste](https://icon-sets.iconify.design/ic/baseline-content-paste/)) and scroll down to see code.

Iconify offers multiple ways to use icons:

- Copy raw SVG.
- [SVG Framework](https://docs.iconify.design/icon-components/svg-framework/) - replacement for icon fonts. Very easy to use, but without disadvantages of icon fonts.
- [Various icon components](https://docs.iconify.design/icon-components/components/) for different frameworks.

### Linking to SVG

This repository is available on github.io. You can link to any SVG file like this:

```
https://material-icons.github.io/material-icons/svg/{name}/{family}.svg
```

where {name} is icon name, {family} is icon variation.

## Branches

There are 2 branches of this repository: "original" and "master".

The "original" branch includes only icons from material.io with some bug fixes.

The "master" branch includes few custom icons as well as fixed icons that were slightly modified (such as "outline" icon being changed to have the outline).

## Icon categories/tags

Icon categories, tags and version numbers are available in [data.json](https://material-icons.github.io/material-icons/data.json)

The format is similar to metadata Google provides for the latest icons.

## CLA

If you want to add icons to the master branch, you need to sign Google's Contributor License Agreement. Why Google's CLA? Maybe one day these icons will be merged into the official repository.

See [CONTRIBUTING.md](https://github.com/google/.github/blob/master/CONTRIBUTING.md)

## Custom icons

All contributed icons must be 24x24, must have all 5 variations and must match [material design guidelines](https://material.io/design/).

If a contributed icon does not fit into one of the existing categories, such as "AV", "Editor", a new category will have to be created. For a new category to be added there needs to be large enough number of icons that fit that category.

See https://github.com/material-icons/build

## License

(copied from Google's repository)

We have made these icons available for you to incorporate into your products under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt). Feel free to remix and re-share these icons and documentation in your products.
We'd love attribution in your app's _about_ screen, but it's not required. The only thing we ask is that you not re-sell these icons.
