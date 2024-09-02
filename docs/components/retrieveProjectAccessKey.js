/**
 * Retrieves the Sequence project access key from local storage.
 * If not found, sets and returns a default access key.
 * @returns {string} The project access key.
 */
export function retrieveProjectAccessKey() {
  const defaultAccessKey = 'AQAAAAAAADVH8R2AGuQhwQ1y8NaEf1T7PJM'

  if (typeof window !== 'undefined' && window.localStorage) {
    let accessKey = localStorage.getItem('sequenceProjectAccessKey')
    console.log(accessKey)

    if (accessKey === null) {
      localStorage.setItem('sequenceProjectAccessKey', defaultAccessKey)
      accessKey = defaultAccessKey
    }
    console.log(accessKey)
    return accessKey
  }
  return defaultAccessKey
}
