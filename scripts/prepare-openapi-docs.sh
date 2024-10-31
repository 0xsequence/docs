#!/bin/bash

node libs/openapi_merger.js merge -o docs/pages/api/analytics/analytics.gen.yaml docs/pages/api/analytics/rpc.gen.yaml
node libs/openapi_merger.js merge -o docs/pages/api/api/api.gen.yaml docs/pages/api/api/rpc.gen.yaml
node libs/openapi_merger.js merge -o docs/pages/api/indexer/indexer.gen.yaml docs/pages/api/indexer/rpc.gen.yaml
node libs/openapi_merger.js merge -o docs/pages/api/marketplace/marketplace.gen.yaml docs/pages/api/marketplace/rpc.gen.yaml
node libs/openapi_merger.js merge -o docs/pages/api/metadata/metadata.gen.yaml docs/pages/api/metadata/rpc.gen.yaml docs/pages/api/metadata/rest.gen.yaml
node libs/openapi_merger.js merge -o docs/pages/api/relayer/relayer.gen.yaml docs/pages/api/relayer/rpc.gen.yaml

node libs/example_merger.js merge \
  docs/pages/api/analytics/analytics.gen.yaml  \
  docs/pages/api/api/api.gen.yaml  \
  docs/pages/api/indexer/indexer.gen.yaml \
  docs/pages/api/marketplace/marketplace.gen.yaml \
  docs/pages/api/metadata/metadata.gen.yaml \
  docs/pages/api/relayer/relayer.gen.yaml


