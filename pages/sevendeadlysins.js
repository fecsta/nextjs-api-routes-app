import useSWR from 'swr'
import Personagem from '../components/Personagens'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function SevenDeadlySins() {
  const { data, error } = useSWR('/api/nanatsuPerson', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p, i) => (
        <Personagem key={i} personagem={p} />
      ))}
    </ul>
  )
}
