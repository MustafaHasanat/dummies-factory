build:
	npm run build

publish:
	npm publish --access=public

acp:
	git add . && git commit -m "new development release" && git push