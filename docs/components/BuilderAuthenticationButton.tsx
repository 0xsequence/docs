import { useState, type ReactElement, useEffect } from 'react'
import { sequence } from '0xsequence'
import clsx from 'clsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './Dialog/Dialog'

const builderURL = import.meta.env.DEV
  ? 'http://localhost:8080/https://api.sequence.build' // Routing with a cors-anywhere proxy
  : 'https://api.sequence.build' // Production URL

function BuilderAuthenticationButton(): ReactElement {
  const [isConnected, setIsConnected] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [projects, setProjects] = useState<any[]>([])
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  const handleConnect = async () => {
    try {
      const connected = await connect('Sequence Docs', setProjects)
      if (connected) {
        const projectsResponse = await listProjects()
        setProjects(projectsResponse.projects)
        setIsConnected(true)
        setShowModal(true) // Open the dialog here
      }
    } catch (error) {
      console.error('Connection failed:', error)
    }
  }

  const handleConnected = async () => {
    try {
      const projectsResponse = await listProjects()
      setProjects(projectsResponse.projects)
      setShowModal(true) // Open the dialog here
    } catch (error) {
      console.error('Connection failed:', error)
    }
  }

  const handleProjectSelection = async (projectId: string) => {
    try {
      const projectAccessKey = await getDefaultAccessKey(projectId)
      localStorage.setItem('sequenceProjectAccessKey', projectAccessKey.accessKey.accessKey)
      localStorage.setItem('selectedProjectId', projectId)
      setSelectedProjectId(projectId)
      setShowModal(false)
      setIsConnected(true)
    } catch (error) {
      console.error('Error getting project access key:', error)
    }
  }

  // Load the selected project ID from localStorage on component mount
  useEffect(() => {
    const storedProjectId = localStorage.getItem('selectedProjectId')
    if (storedProjectId) {
      setSelectedProjectId(storedProjectId)
      setIsConnected(true)
    }
  }, [])

  return (
    <>
      <button
        className="hover-fade font-bold text-white max-w-max h-min text-center rounded-full bg-gradient-to-r from-[#4411E1] to-[#7537F9] px-[20px] py-[4px] text-[12px] top-auth-button_position"
        onClick={isConnected ? () => handleConnected() : handleConnect}
      >
        {isConnected && selectedProjectId ? `Project: ${selectedProjectId}` : 'Login'}
      </button>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[600px] bg-black text-white border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Select a Project</DialogTitle>
            <DialogDescription className="text-gray-400">
              Choose a project from the list below.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 h-fit shrink-0 rounded-xl dark:bg-white-10 bg-white overflow-hidden">
            <div className="flex flex-col gap-3 p-4 relative">
              <div
                className={clsx('absolute inset-0 opacity-20 z-0 pointer', {
                  'dark:bg-gradient-to-b from-[#000000] to-transparent': true,
                })}
              />
              {projects.map((project, index) => (
                <a
                  key={index}
                  onClick={() => handleProjectSelection(project.id)}
                  className="hover-fade p-4 rounded-md z-10 dark:bg-white-10 bg-black-7 cursor-pointer"
                >
                  <div className="flex gap-2">
                    <p className="flex items-start gap-2 text-xl leading-7 font-bold text-themed-primary">
                      {project.name}
                    </p>
                  </div>
                  <p className="text-themed-secondary text-sm font-medium">
                    Project ID: {project.id}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export const connect = async (appName: string, setProjects: (projects: any[]) => void) => {
  let isConnected = false
  // dev
  const projectAccessKey = 'AQAAAAAAABL7m8Y6sdKRhOU2etUqkwJ3uHE'
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
      wallet.disconnect()
      window.location.href = '/'
      throw new Error('No proof')
    }

    const userEmail = connectDetails.email || undefined

    const jwtToken = await authenticate(connectDetails.proof.proofString, userEmail)

    const projectsResponse = await listProjects()
    setProjects(projectsResponse.projects)

    isConnected = true
    return isConnected
  } catch (err) {
    console.error(err)
    return false
  }
}

export async function authenticate(proof: any, email: any) {
  const url = `${builderURL}/rpc/Builder/GetAuthToken`

  const headers = {
    'content-type': 'application/json',
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
    authorization: `BEARER ${token}`, // Use the token from local storage
    'content-type': 'application/json',
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
    authorization: `BEARER ${token}`, // Use the token from local storage
    'content-type': 'application/json',
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
