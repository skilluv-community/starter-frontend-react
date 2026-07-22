.PHONY: dev test lint build fmt preview clean help

help:
	@echo "Targets:"
	@echo "  dev      — Vite dev server"
	@echo "  test     — vitest + playwright"
	@echo "  lint     — eslint + prettier + tsc"
	@echo "  build    — production build"
	@echo "  preview  — serve production build"
	@echo "  fmt      — auto-format"
	@echo "  clean    — remove build artifacts"

dev:
	npm install --no-audit --no-fund
	npm run dev

test:
	npm run test:unit -- --run
	npm run test:e2e

lint:
	npm run lint
	npm run typecheck

build:
	npm run build

preview:
	npm run preview

fmt:
	npm run format

clean:
	rm -rf node_modules dist build .vite
