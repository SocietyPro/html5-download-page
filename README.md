html5-download-page
===================
This repo contains templates for templates, and a grunt script that generates the static content for the download page. 

Usage
-----

    git clone https://github.com/SocietyPro/html5-download-page.git
    cd src
    npm install
    grunt

This will generate the html templates and static content into `dist/`.  
Copy the output into `Cambrian-src/scripts/dist/templates` and Amazon S3 `download.societypro.org` Bucket as appropriate.

Notes
-----

The output templates are used by the Cambrian-src distribution script to regenerate the download page index.

This repo's grunt script assembles the static content for the download page (like angular, fonts, and images) so it can stay out of Cambrian-src.

New releases
--------------------

Instead of a separate server hosting a dynamic file list, we re-render the download page whenever there is a new release.

This rendering process happens from the Cambrian-src repo, in `scripts/dist/Gruntfile.js`.

If you want to change how the download page looks, do it here, not in Cambrian-src. Running `grunt` in `html5-download-page/src` should output the correct templates and/or static S3 content to `html5-download-page/dist/`.