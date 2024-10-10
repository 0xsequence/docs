import * as fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const loadOpenAPIDocument = (filePath) => {
    const file = fs.readFileSync(filePath, 'utf8');
    return yaml.load(file);
};

const saveOpenAPIDocument = (filePath, document) => {
    const yamlStr = yaml.dump(document);
    fs.writeFileSync(filePath, yamlStr, 'utf8');
    console.log('OpenAPI document updated with examples!');
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

    const reqResponseExamples = JSON.parse(fs.readFileSync(examplesPath).toString());

    addExamplesToOpenAPI(openAPIDoc, reqResponseExamples);

    saveOpenAPIDocument(openApiFilepath, openAPIDoc);
};

yargs(hideBin(process.argv))
    .command('merge <input>', 'merge request/response examples with generated openapi document', () => {}, (argv) => {
        merge(argv.input)
    })
    .demandCommand(1)
    .parse()
