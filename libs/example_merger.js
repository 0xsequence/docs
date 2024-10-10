import * as fs from 'fs';
import * as yaml from 'js-yaml';

// Load OpenAPI Document
const loadOpenAPIDocument = (filePath) => {
    const file = fs.readFileSync(filePath, 'utf8');
    return yaml.load(file);
};

// Save OpenAPI Document
const saveOpenAPIDocument = (filePath, document) => {
    const yamlStr = yaml.dump(document);
    fs.writeFileSync(filePath, yamlStr, 'utf8');
    console.log('OpenAPI document updated with examples!');
};

// Add Examples to the Document
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

export const merge = () => {
    // Load the OpenAPI document
    let openAPIDoc = loadOpenAPIDocument('/home/lj/Projects/Sequence/docs/docs/pages/api/marketplace/marketplace.gen.yaml');

    const examples = JSON.parse(fs.readFileSync('/home/lj/Projects/Sequence/docs/docs/pages/api/marketplace/examples.json').toString());

    // Modify the document to add examples
    addExamplesToOpenAPI(openAPIDoc, examples);

    // Save the modified document
    saveOpenAPIDocument('/home/lj/Projects/Sequence/docs/docs/pages/api/marketplace/marketplace.gen.yaml', openAPIDoc);
};


merge()