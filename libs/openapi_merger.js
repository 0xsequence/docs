#!/usr/bin/env node

import fs from 'fs';
import yaml from 'js-yaml';
import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'

function loadOpenApiDoc(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    return yaml.load(data);
}

const saveOpenAPIDocument = (filePath, document) => {
    try {
        const yamlStr = yaml.dump(document)
        fs.writeFileSync(filePath, yamlStr, 'utf8')
        console.log('OpenAPI document updated!')
    } catch (error) {
        console.error(`Error saving OpenAPI document to ${filePath}:`, error)
        throw error
    }
}

const result = {
    openapi: "3.0.0",
    info: {
        title: "",
        version: "",
    },
    servers: [],
    components: {
        schemas: {},
        securitySchemes: {},
    },
    paths: {},
    security: []
}

yargs(hideBin(process.argv))
    .command(
        'merge <input...>',
        'merge multiple openapi schema',
        (yargs) => {
            yargs.option('output', {
                alias: 'o',
                type: 'string',
                description: 'Specify output file for merged OpenAPI schema',
                default: 'openapi.gen.yaml',  // default output file name
            });
        },
        (argv) => {
            argv.input.forEach((filePath, index) => {
                const confData = loadOpenApiDoc(filePath);

                // first file take precedence in general info about openapi schema
                if (index === 0) {
                    result["openapi"] = confData.openapi
                    result["info"] = confData.info
                    result["servers"] = confData.servers
                    result["security"] = confData.security
                }

                for (const path in confData.paths) {
                    result["paths"][path] = confData.paths[path]
                }

                if (confData.components) {
                    if (confData.components.securitySchemes) {
                        result["components"]["securitySchemes"] = confData.components.securitySchemes
                    }

                    if (confData.components.schemas) {
                        for (const schema in confData.components.schemas) {
                            result["components"]["schemas"][schema] = confData.components.schemas[schema]
                        }
                    }
                }
            })

            saveOpenAPIDocument(argv.output, result)
        },
    )
    .demandCommand(1)
    .parse()
