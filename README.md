html5-download-page
===================
Generate the S3 download page

This repo is only used to create snapshots of files that need to go in S3 Buckets.

It does NOT involve updating the download page when there is something new to download.

The generated index.html that this repo creates is used as a template in the main Cambrian-src. Specifically, the Gruntfile located at `Cambrian-src/scripts/dist/Gruntfile.js` chooses what files to list on the download page, and generates a new `index.html` based on the templates in `Cambrian-src/scripts/dist/templates`.

To change the appearance of the download page, you should make changes in this repo, and then copy the rendered output to the Cambrian-src templates.

Usage
-----

    git clone https://github.com/SocietyPro/html5-download-page.git
    cd src
    npm install
    grunt