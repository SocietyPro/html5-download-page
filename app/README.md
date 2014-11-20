
# Examples

## Curl file upload

# curl -v -F "data=@/path/to/filename"  http://localhost:4567/user/filename
# or just go to http://localhost:4567/user/filename with a browser

cd test
curl -v -F "data=@upload_me.txt"  https://html5-download-page-hirowhite.c9.io/upload/
#http://localhost:4567/user/filename