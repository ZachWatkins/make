#! /usr/bin/env node
/**
 * Command line application to generate commonly needed files for my projects.
 * @author    Zachary K. Watkins <zwatkins.it@gmail.com>
 * @version   1.0.0
 * @copyright 2023 Zachary K. Watkins
 */

import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "package.json"), "utf8"),
);

const VERSION = pkg.version;
const HELP = `A tool for generating commonly needed files.
  Usage: npx zmake [options]

  Options:
    -h, --help      Display this help message.
    -v, --version   Display the current version.
    --readme        Generate a README.md file.
    --gitattributes Generate a .gitattributes file.
    --php           Generate files for a PHP project.
    --wp            Generate files for a WordPress project.
    --laravel       Generate files for a Laravel project.
    --react         Generate files for a React project.
`;

if (
  process.argv.length === 2 ||
  process.argv.includes("-h") ||
  process.argv.includes("--help")
) {
  console.log(HELP);
  process.exit(0);
}

if (process.argv.includes("-v") || process.argv.includes("--version")) {
  console.log(VERSION);
  process.exit(0);
}
