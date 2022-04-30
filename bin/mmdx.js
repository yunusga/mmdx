#!/usr/bin/env node

/**
 * List of commands
 *
 * [ ] init
 * [ ] start
 * [ ] cb
 * [ ] cp
 * [ ] mv
 * [ ] build
 * [ ] lint
 * [ ] pack
 * [ ] config
 */

const { program } = require('commander');
const { name, version, description } = require('../package.json');
const { log } = console;

// Setup additional HELP information
program
    .version(version, '-v, --version')
    .description(description)
    .on('--help', () => {
        log(`\nCommands help:\n  ${name} [command] --help`);
        log(`\nVersion: ${version}`);
        log(`Installation path: ${__filename}`);
    });

// Parse CLI arguments
program.parse(process.argv);

// If no args terminate process and show help information
if (!process.argv.slice(2).length) {
    program.help();
}
