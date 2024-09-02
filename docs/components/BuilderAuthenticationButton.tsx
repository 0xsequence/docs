import type { ReactElement } from 'react'
import { sequence } from '0xsequence'

const builderURL = 'http://localhost:8080/https://dev-api.sequence.build'

const BuilderAuthenticationButton = (): ReactElement => {
  return (
    <button
      className="hover-fade font-bold text-white max-w-max h-min text-center rounded-full bg-gradient-to-r from-[#4411E1] to-[#7537F9] px-[16px] py-[8px] text-[14px] leading-[20px] ml-[8px] top-nav-button_position"
      onClick={() => {
        connect('Sequence Docs')
      }}
    >
      Start building
    </button>
  )
}

export const connect = async (appName: string) => {
  let isConnected = false
  // dev
  const projectAccessKey = 'AQAAAAAAAAPVHubZNR7qmEKAb97mjypt5SM'
  // prod
  // const projectAccessKey = "AQAAAAAAABL7m8Y6sdKRhOU2etUqkwJ3uHE"

  const wallet = sequence.initWallet(projectAccessKey, { defaultNetwork: 137 })

  try {
    const connectDetails = await wallet.connect({
      app: appName,
      authorize: true,
      askForEmail: true,
    })

    if (!connectDetails.proof) {
      // logout()
      wallet.disconnect()
      window.location.href = '/'
      throw new Error('No proof')
    }

    const userEmail = connectDetails.email || undefined

    console.log(userEmail)

    const jwtToken = await authenticate(connectDetails.proof.proofString, userEmail)

    const walletAddress = wallet.getAddress()

    console.log(jwtToken)
    console.log(walletAddress)

    const projectsResponse = await listProjects()
    const firstProjectId = projectsResponse.projects[0].id

    const projectAccessKey = await getDefaultAccessKey(firstProjectId)

    localStorage.setItem('sequenceProjectAccessKey', projectAccessKey.accessKey.accessKey)

    console.log(projectAccessKey.accessKey.accessKey)

    isConnected = true
    window.location.reload()
  } catch (err) {
    // TODO: handle errors
    console.error(err)
  }

  return isConnected
}

export async function authenticate(proof: any, email: any) {
  const url = `${builderURL}/rpc/Builder/GetAuthToken`

  const headers = {
    accept: '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/json',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
  }

  const body = {
    ethauthProof: proof,
    email: email,
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const { auth } = await response.json()
    const { jwtToken } = auth

    // Store the JWT in local storage
    localStorage.setItem('sequenceJWT', jwtToken)

    return jwtToken
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
    throw error
  }
}

export const listProjects = async () => {
  const url = `${builderURL}/rpc/Builder/ListProjects`

  // Retrieve the Bearer token from local storage
  const token = localStorage.getItem('sequenceJWT')

  const headers = {
    accept: '*/*',
    'accept-language': 'en-US,en;q=0.9',
    authorization: `BEARER ${token}`, // Use the token from local storage
    'content-type': 'application/json',
    priority: 'u=1, i',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-site': 'same-site',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
  }

  const body = JSON.stringify({
    page: {
      column: '+projects.id',
    },
    includeExternal: true,
  })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('There was an error!', error)
  }
}

export const getDefaultAccessKey = async (projectId: any) => {
  const url = `${builderURL}/rpc/QuotaControl/GetDefaultAccessKey`

  // Retrieve the Bearer token from local storage
  const token = localStorage.getItem('sequenceJWT')

  const headers = {
    accept: '*/*',
    'accept-language': 'en-US,en;q=0.9',
    authorization: `BEARER ${token}`, // Use the token from local storage
    'content-type': 'application/json',
    priority: 'u=1, i',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
  }

  const body = JSON.stringify({
    projectID: projectId,
  })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('There was an error!', error)
  }
}

export default BuilderAuthenticationButton
