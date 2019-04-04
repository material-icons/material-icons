/**
 * Convert SVG to PNG
 *
 * Important: this code uses Iconify Tools that rely on PhantomJS to generate PNG files.
 * Before running this script make sure you have PhantomJS installed.
 *
 * On OSX you can easily install PhantomJS with HomeBrew: brew install phantomjs
 */
"use strict";

const fs = require('fs');
const path = require('path');
const tools = require('@iconify/tools');
const phantom = require('@iconify/tools/src/export/phantomjs');

const root = path.dirname(path.dirname(__filename));
const sourceDir = root + '/svg';
const outputDir = root + '/png';

// Configuration
const colors = ['black', 'white'];
const sizes = [{
    size: 24,
    suffix: ''
}, {
    size: 48,
    suffix: '-2x'
}, {
    size: 96,
    suffix: '-4x'
}];

const queueLimit = colors.length * sizes.length * 5;

// Get data
const data = JSON.parse(fs.readFileSync(root + '/data.json', 'utf8'));

// Create directories
try {
    fs.mkdirSync(outputDir, 0o755);
} catch (err) {
}
colors.forEach(color => {
    try {
        fs.mkdirSync(outputDir + '/' + color, 0o755);
    } catch (err) {
    }
});

// Compose data
let categories = Object.keys(data.categories);

let queue = [];

/**
 * Parse queue
 * @param callback
 */
let parseQueue = callback => {
    phantom(queue).then(() => {
        queue = [];
        callback();
    }).catch(err => {
        throw new Error(err);
    });
};

/**
 * Add item to queue
 *
 * @param item
 * @param callback
 */
let queueItem = (item, callback) => {
    queue.push(item);
    if (queue.length >= queueLimit) {
        parseQueue(callback);
    } else {
        callback();
    }
};

/**
 * Parse next category
 */
let nextCategory = () => {
    let category = categories.shift();
    if (category === void 0) {
        parseQueue(() => {
            console.log('Done.');
        });
        return;
    }

    // Create directories for all colors
    colors.forEach(color => {
        let dir = outputDir + '/' + color + '/' + category;
        try {
            fs.mkdirSync(dir, 0o755);
        } catch (err) {
        }
    });

    // Import all icons in category
    tools.ImportDir(sourceDir + '/' + category, {
        keywordCallback: key => key
    }).then(collection => {

        let keys = collection.keys();

        /**
         * Parse next icon
         */
        let nextIcon = () => {

            let key = keys.shift();
            if (key === void 0) {
                nextCategory();
                return;
            }
            console.log('Exporting', category + '/' + key);

            let svg = collection.items[key];

            // Change palette
            tools.ChangePalette(svg, {
                default: 'currentColor',
                add: 'currentColor'
            }).then(() => {

                let colorsList = colors.slice(0);

                /**
                 * Parse next color
                 */
                let nextColor = () => {
                    let color = colorsList.shift();
                    if (color === void 0) {
                        // Parse queued data
                        nextIcon();
                        return;
                    }

                    let sizeList = sizes.slice(0);

                    /**
                     * Parse next size
                     */
                    let nextSize = () => {
                        let size = sizeList.shift();
                        if (size === void 0) {
                            nextColor();
                            return;
                        }

                        // Export icon
                        let file = color + '/' + category + '/' + key + size.suffix + '.png';
                        tools.ExportPNG(svg, outputDir + '/' + file, {
                            height: size.size,
                            color: color,
                            parse: false
                        }).then(row => {
                            queueItem(row, () => {
                                nextSize();
                            });
                        }).catch(err => {
                            reject(err);
                        })
                    };
                    nextSize();
                };

                nextColor();

            }).catch(err => {
                reject(err);
            });
        };

        nextIcon();

    }).catch(err => {
        throw new Error(err);
    });

};

nextCategory();
