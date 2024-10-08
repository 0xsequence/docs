import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function main() {
  // Load the JSON data
  const chainsData = JSON.parse(await fs.readFile(path.join(__dirname, 'chains.json'), 'utf8'))

  // Create the output directory if it doesn't exist
  const outputDir = path.join(__dirname, '..', 'pages', 'solutions', 'chainlist')
  await fs.mkdir(outputDir, { recursive: true })

  function createMdxContent(chain, isIntegrated) {
    const title = `${chain.name} - ${chain.chain} Blockchain Network`
    const description = `Explore ${chain.name}, a blockchain network with chain ID ${chain.chainId}. Learn about its native currency, ${chain.nativeCurrency.name}, and how to interact with the network.`

    let content = `--- 
title: ${title}
description: ${description}
---

# ${chain.name}

${chain.name} is a blockchain network with chain ID ${chain.chainId}.

## Network Details

- **Chain ID**: ${chain.chainId}
- **Chain Name**: ${chain.chain}
- **Short Name**: ${chain.shortName}
- **Network ID**: ${chain.networkId}
- **Currency**: 
  - **Name**: ${chain.nativeCurrency.name}
  - **Symbol**: ${chain.nativeCurrency.symbol}
  - **Decimals**: ${chain.nativeCurrency.decimals}

## RPC URLs

${chain.name} can be accessed through the following RPC endpoints:

${chain.rpc
  .filter((rpc) => !rpc.includes('thirdweb') && !rpc.includes('infura'))
  .map((rpc) => `- ${rpc}`)
  .join('\n')}

## ${chain.name} Block Explorers

${(chain.explorers || []).map((explorer) => `- [${explorer.name}](${explorer.url})`).join('\n')}

## Additional Information

- **Official Website**: ${chain.infoURL || 'Not provided'}

## Sequence Integration Status

${
  isIntegrated
    ? 'All Sequence services including our smart account infrastructure are available on this network.'
    : 'This network does not yet have Sequence support but is available for deployment.'
}
`

    if (chain.testnet) {
      content += `
## ${chain.name} Faucet

When building with Sequence, faucets aren't necessary due to our smart account infrastructure. This allows for a smoother onboarding process for your users and a better developer experience.
`
    }

    return content
  }

  // Generate MDX files for each chain
  for (const chain of chainsData.data) {
    const filename = `${chain.slug}.mdx`
    const integratedFilePath = path.join(outputDir, 'Integrated', filename)
    const isIntegrated = await fs
      .access(integratedFilePath)
      .then(() => true)
      .catch(() => false)

    const content = createMdxContent(chain, isIntegrated)

    if (isIntegrated) {
      await fs.writeFile(integratedFilePath, content)
    } else {
      await fs.writeFile(path.join(`${outputDir}/non-integrated`, filename), content)
    }
  }

  console.log(`Generated ${chainsData.data.length} MDX files in ${outputDir}`)
}

main().catch(console.error)
