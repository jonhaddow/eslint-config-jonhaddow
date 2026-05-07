import { defineConfig } from "eslint/config";
import { base, react } from "./index.js";

export default defineConfig([...base, ...react]);
