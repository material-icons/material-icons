# Material design icons, updated set

Material design icons is the official [icon set](https://www.google.com/design/spec/style/icons.html#icons-system-icons) from Google.  The icons are designed under the [material design guidelines](https://material.io/guidelines/).


### Updated set

This is updated version of icons, directly from [material.io](https://material.io/tools/icons/).

You can find older version of this icons set in [google/material-design-icons](https://github.com/google/material-design-icons) repository.

Because official repository is no longer maintained, I have decided to make alternative repository with latest icons.


## Available icons

Version 3 that is available in official icons repository only includes 1 variation of each icon.

This repository includes several variations for each icon:

* baseline
* sharp
* outline
* round
* twotone

Unlike old repository, this repository for now includes only SVG files. If you need PNG files, please open issue on this repository and specify what size/color you need PNG files.

Unfortunately some icons from version 3 are not available in updated version. Those icons are still available if you use this icon set with Iconify, but they are not included in this repository. List of icons that have disappeared:

* system-update-alt


## Getting started

This readme explains how to use updated icons set in your projects.

This repository does not use same build process as official Google MDI repository and has different folder structure.


### Using SVG

SVG are available in directory "svg", followed by icon category. Icon name starts with icon variation, then "-", then icon name.

All icons are 24x24, cleaned up and optimized. If you need different size, change width and height attributes in icon. SVG are scalable, duplicating them for different sizes is pointless.


### Web font

Web font is not available.

Many of new icons are no longer simple shapes, which makes it hard to convert them to font. Twotone icons cannot be implemented as web font. I suspect it might be one of reasons official repository is no longer updated.

Also there are over 5000 icons. Imagine having them all as font - you will be wasting a lot of your visitor's bandwidth and page will load slower. Web font for such big icons set (or any icon set) is not a good idea.

Good news, all icons are available as modern JavaScript framework that replaces glyph fonts. See below.


### JavaScript framework

All icons are available with [Iconify JavaScript framework](https://iconify.design/).

#### What is Iconify?

Iconify project makes it easy to add SVG icons to websites and offers over 40,000 icons to choose from.

You can use Iconify not only with this icon set, but also [Templarian's Material Design Icons](https://iconify.design/icon-sets/mdi/), [Material Design Light](https://iconify.design/icon-sets/mdi-light/), [FontAwesome 5](https://iconify.design/icon-sets/fa-regular/) and many other icon sets on same page without loading massive fonts.

How is it achieved? Iconify project uses new innovative approach to loading icons. Unlike fonts and SVG frameworks, Iconify only loads icons that are used on page instead of loading entire fonts. How is it done? By serving icons dynamically from publicly available JSON API (you can make a copy of script and API if you prefer to keep everything on your servers).

Iconify is designed to be as easy to use as possible. It uses icon placeholder syntax and icons inherit size and color from parent element, so they are easy to style with css.

#### How to use this icons set with Iconify?

Add this line to your page to load Iconify:

```
<script src="https://code.iconify.design/1/1.0.0/iconify.min.js"></script>
```

you can add it to ```<head>``` section of page or before ```</body>```.

To add any icon, write something like this:

```
<span class="iconify" data-icon="ic:baseline-access-time" data-inline="false"></span>
```
or this:
```
<iconify-icon class="iconify" data-icon="ic:twotone-account-circle"></iconify-icon>
```

See [how to use Iconify](https://iconify.design/docs/iconify-in-pages/) tutorial and [browse MDI icons list](https://iconify.design/icon-sets/ic/) to get code for each icon.


### React components

No need to reinvent components. See [Iconify for React](https://github.com/iconify-design/iconify-react).

How to use it:

```
npm install @iconify/react
```

```
import { Icon, InlineIcon } from "@iconify/react";
import face from "@iconify/react/ic/baseline-face";
import home from "@iconify/react/ic/twotone-home";
```

```
<Icon icon={home} />
<p>This is some text with <InlineIcon icon={face} /></p>
```


## Branches

There are 2 branches of this repository: official and master.

Official branch includes only icons from material.io with some bug fixes.

Master branch includes few custom icons as well as fixed icons that were slightly modified (such as "outline" icon being changed to actually have outline).

### CLA

If you want to add icons to master branch, you need to sign Google's Contributor License Agreement. Why Google's CLA? Maybe one day these icons will be merged into official repository.

See [CONTRIBUTING.md](https://github.com/google/.github/blob/master/CONTRIBUTING.md)

### Custom icons

All contributed icons must be 24x24, must have all 5 variations and must match [material design guidelines](https://material.io/design/).

If contributed icon does not fit into existing category, such as "AV", "Editor", new category will have to be created. For new category to be added there needs to be large enough number of icons that cover that category.


## License

We have made these icons available for you to incorporate into your products under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt). Feel free to remix and re-share these icons and documentation in your products.
We'd love attribution in your app's *about* screen, but it's not required. The only thing we ask is that you not re-sell these icons.
