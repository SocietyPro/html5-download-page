html5-download-page
===================

List the downloads available and their hashes

Usage
-----

    git clone https://github.com/SocietyPro/html5-download-page.git
    npm install
    npm start

grunt-static branch
-------------------

On this branch, there is no dynamic server.
Instead, we will use Grunt to generate static html content.

The Grunt script looks for releases in `dist/releases`. It expects to find pairs of files and metadata, e.g. `binary.file` and `binary.file.json`.

Additionally, the Grunt script looks at `src/current-releases.json` to know which releases should be displayed on the front page under the "Current" category. This is a list of json metadata file paths relative to the releases folder:
```
[
  "societypro-0.1.7.4.exe.json"
]
```

If `current-releases.json` is not found, or contains an empty array, the Grunt script will show all files as Current Releases.