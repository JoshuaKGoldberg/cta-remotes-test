import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
	{ ignores: ["lib", "node_modules", "pnpm-lock.yaml"] },
	{ linterOptions: { reportUnusedDisableDirectives: "error" } },
	{
		extends: [
			eslint.configs.recommended,
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
		],
		files: ["**/*.{js,ts}"],
		languageOptions: {
			parserOptions: {
				projectService: { allowDefaultProject: ["*.config.*s"] },
			},
		},
	},
);
