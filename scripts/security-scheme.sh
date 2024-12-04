#!/bin/bash

# Check if yq is installed
if ! command -v yq &> /dev/null; then
    echo "yq is not installed. Please install yq[https://github.com/mikefarah/yq] to continue."
    exit 1
fi

# Run yq commands
yq -e -i '.security=[{"ApiKeyAuth":[]}]' docs/pages/api/api/api.gen.yaml && echo "updated docs/pages/api/api/api.gen.yaml"
yq -e -i '.security=[{"BearerAuth":[]}]' docs/pages/api/analytics/analytics.gen.yaml && echo "updated docs/pages/api/analytics/analytics.gen.yaml"
yq -e -i '.servers=[{"url":"https://api.sequence.build"}]' docs/pages/api/analytics/analytics.gen.yaml && echo "updated docs/pages/api/analytics/analytics.gen.yaml"
yq -e -i '.security=[{"ApiKeyAuth":[]}]' docs/pages/api/marketplace/marketplace.gen.yaml && echo "updated docs/pages/api/marketplace/marketplace.gen.yaml"
yq -e -i '.security=[{"ApiKeyAuth":[]}, {"BearerAuth":[]}]' docs/pages/api/metadata/metadata.gen.yaml && echo "updated docs/pages/api/metadata/metadata.gen.yaml"
yq -e -i '.security=[{"ApiKeyAuth":[]}, {"BearerAuth":[]}]' docs/pages/api/indexer/indexer.gen.yaml && echo "updated docs/pages/api/indexer/indexer.gen.yaml"
yq -e -i '.security=[{"ApiKeyAuth":[]}]' docs/pages/api/relayer/relayer.gen.yaml && echo "updated docs/pages/api/relayer/relayer.gen.yaml"
yq -e -i '.security=[{"BearerAuth":[]}]' docs/pages/api/builder/builder.gen.yaml && echo "updated docs/pages/api/builder/builder.gen.yaml"
yq -e -i '.components.securitySchemes.BearerAuth = {"type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT Service Token generated from Sequence Builder"}' docs/pages/api/builder/builder.gen.yaml && echo "updated docs/pages/api/builder/builder.gen.yaml"
yq -e -i '.components.securitySchemes.BearerAuth = {"type": "http", "scheme": "bearer", "bearerFormat": "JWT", "description": "JWT Service Token generated from Sequence Builder"}' docs/pages/api/analytics/analytics.gen.yaml && echo "updated docs/pages/api/analytics/analytics.gen.yaml"
