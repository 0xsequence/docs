import * as fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const loadOpenAPIDocument = (filePath) => {
    try {
        const file = fs.readFileSync(filePath, 'utf8');
        return yaml.load(file);
    } catch (error) {
        console.error(`Error loading OpenAPI document from ${filePath}:`, error);
        throw error;
    }
};

const saveOpenAPIDocument = (filePath, document) => {
    try {
        const yamlStr = yaml.dump(document);
        fs.writeFileSync(filePath, yamlStr, 'utf8');
        console.log('OpenAPI document updated with examples!');
    } catch (error) {
        console.error(`Error saving OpenAPI document to ${filePath}:`, error);
        throw error;
    }
};

const addExamplesToOpenAPI = (doc, examples) => {
    for (let [endpoint, value] of Object.entries(examples)) {
        const path = doc.paths[endpoint];

        if (path) {
            if (value["request"] && Object.keys(value["request"]).length > 0) {
                const response = path.post.requestBody;
                response.content['application/json']['example'] = value["request"];
            }

            if (value["response"] && Object.keys(value["response"]).length > 0) {
                const response = path.post.responses['200'];
                response.content['application/json']['example'] = value["response"];
            }
        } else {
            console.error("non existent endpoint", endpoint)
        }
    }
};

export const merge = (openApiFilepath) => {
    // /docs/pages/api/marketplace/marketplace.gen.yaml
    let openAPIDoc = loadOpenAPIDocument(openApiFilepath);

    const dir = path.dirname(openApiFilepath);

    // expect to live inside same directory as generated openapi
    // /docs/pages/api/marketplace/examples.json
    const examplesPath = path.join(dir, 'examples.json');

    // do nothing if examples.json file does not exist
    if (fs.existsSync(examplesPath)) {
        const reqResponseExamples = JSON.parse(fs.readFileSync(examplesPath).toString());

        addExamplesToOpenAPI(openAPIDoc, reqResponseExamples);

        saveOpenAPIDocument(openApiFilepath, openAPIDoc);
    } else {
        console.log(examplesPath, "does not exist")
    }
};

yargs(hideBin(process.argv))
    .command('merge <input...>', 'merge request/response examples with generated openapi document', () => {}, (argv) => {
        argv.input.forEach((filePath) => {
            merge(filePath)
            console.log(filePath, "updated")
        })
    })
    .demandCommand(1)
    .parse()
