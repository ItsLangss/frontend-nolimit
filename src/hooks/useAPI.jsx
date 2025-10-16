import { useState, useCallback } from 'react'

export default function useAPI() {
  const [ data, setData ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  const fetchWorldBank = useCallback(async ({ country = 'US', indicator = 'SP.POP.TOTL', start = 2012, end = 2016 } = {}) => {
    setLoading(true)
    setError(null)
    try {
      const url = `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?date=${start}:${end}&format=json`
      const res = await fetch(url)
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
      const json = await res.json()
      const records = Array.isArray(json) && Array.isArray(json[1]) ? json[1] : []

      const sorted = [ ...records ].sort((a, b) => Number(a.date) - Number(b.date))
      const normalized = sorted.map(r => ({ year: r.date, value: typeof r.value === 'number' ? r.value : 0 }))

      const payload = { raw: json, records: sorted, normalized }
      setData(payload)
      setLoading(false)
      return payload
    } catch (err) {
      setError(err)
      setLoading(false)
      throw err
    }
  }, [])

  return { data, loading, error, fetchWorldBank }
}
