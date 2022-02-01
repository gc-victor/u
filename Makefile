help: ## Show this help message
	@echo 'usage: make [target] <type> <name>'
	@echo
	@echo 'Targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

bundle : ## Create production bundle
	rm -rf dist || exit $? ; \
	node ./esbuild.js || exit $? ; \

format : ## Enforces a consistent style by parsing your code and re-printing it
	pnpx prettier --write "./src/**/*.js" "./tests/**/*.js" "./examples/**/*.js" ;\

imports-react: ## Build Imports React example
	node -r esm examples/imports/react/esbuild.js || exit $? ;\

imports-react-watch : imports-react ## Execute Imports React on watch mode
	npx chokidar-cli "**/*.jsx" "**/*.js" -c "make imports-react" -i "/app-jsx\.js/" || exit $? ;\

imports-h: ## Build Imports H example
	node -r esm examples/imports/h/esbuild.js || exit $? ;\

imports-h-watch : imports-h ## Execute Imports H on watch mode
	npx chokidar-cli "**/*.jsx" "**/*.js" -c "make imports-h" -i "/app-jsx\.js/" || exit $? ;\

jsx: ## Build JSX example
	node -r esm examples/h/esbuild-jsx.js || exit $? ;\

jsx-watch : jsx ## Execute jsx on watch mode
	npx chokidar-cli "**/*.jsx" "**/*.js" -c "make jsx" -i "/app-jsx\.js/" || exit $? ;\

.PHONY: react
react: ## Build JSX example
	node -r esm examples/react/esbuild-react.js || exit $? ;\

react-watch : react ## Execute jsx on watch mode
	npx chokidar-cli "**/*.jsx" "**/*.js" -c "make react" -i "/app-react\.js/" || exit $? ;\

server : ## Run a dev static server
	pnpm --package=github:gc-victor/d-d dlx d-d

test : ## Execute tests
	TEST=true node -r esm tests/index.js || exit $? ;\

test-ssr : ## Execute SSR tests
	node -r esm tests/index.js || exit $? ;\

test-watch : test ## Execute tests on watch mode
	npx chokidar-cli "**/*.js" -c "make test" || exit $? ;\

# catch anything and do nothing
%:
	@:
