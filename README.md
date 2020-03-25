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

However, you should avoid using font if you can. Font loads all icons that take a while to load and quite a big stylesheet. Also, fonts render with blurred ugly edges on some operating systems, worst offender is Windows.

Good news, all icons are available as modern JavaScript framework that replaces glyph fonts. See below.

### JavaScript framework

All icons are available with [Iconify JavaScript framework](https://iconify.design/).

#### What is Iconify?

Iconify project makes it easy to add SVG icons to websites and offers over 40,000 icons to choose from.

You can use Iconify not only with this icon set, but also [Templarian's Material Design Icons](https://iconify.design/icon-sets/mdi/), [Material Design Light](https://iconify.design/icon-sets/mdi-light/), [FontAwesome 5](https://iconify.design/icon-sets/fa-regular/) and many other icon sets on the same page without loading massive fonts.

How is it achieved? Iconify project uses a new innovative approach to loading icons. Unlike fonts and SVG frameworks, Iconify only loads icons that are used on the current page instead of loading entire fonts. How is it done? By serving icons dynamically from publicly available JSON API (you can make a copy of script and API if you prefer to keep everything on your servers).

Iconify is designed to be as easy to use as possible. It uses icon placeholder syntax and icons inherit size and colour from the parent element, so they are easy to style with CSS.

#### How to use this icon set with Iconify?

Add this line to your page to load Iconify:

```
<script src="https://code.iconify.design/1/1.0.4/iconify.min.js"></script>
```

you can add it to `<head>` section of the page or before `</body>`.

To add any icon, write something like this:

```
<span class="iconify" data-icon="ic:baseline-access-time" data-inline="false"></span>
```

or this:

```
<iconify-icon data-icon="ic:twotone-account-circle"></iconify-icon>
```

There are 2 small differences in icon names when using Iconify: icons have "ic:" prefix and underscores in icon name have been replaced by the dash.

See [how to use Iconify](https://iconify.design/docs/iconify-in-pages/) tutorial and [browse MDI icons list](https://iconify.design/icon-sets/ic/) to get code for each icon.

### React components

No need to reinvent components. See [Iconify for React](https://github.com/iconify/iconify-react).

How to use it:

```
npm install @iconify/react @iconify/icons-ic
```

```js
import { Icon, InlineIcon } from "@iconify/react";
import face from "@iconify/icons-ic/baseline-face";
import home from "@iconify/icons-ic/twotone-home";
```

```jsx
<Icon icon={home} />
<p>This is some text with <InlineIcon icon={face} /></p>
```

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
