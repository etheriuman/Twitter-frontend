
set -e

# build
npm run build

# navigate into the build output directory
cd dist


git init
git add -A
git commit -m 'deploy'


git push -f https://github.com/etheriuman/twitter-frontend.git master:gh-pages

cd -