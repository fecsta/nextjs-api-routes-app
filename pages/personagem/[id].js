import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Person() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/nanatsuPerson/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Pecado</th>
          <th>História</th>
          <th>Tesouro</th>
          <th>Gênero</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.Sin}</td>
          <td>{data.Historia}</td>
          <td>{data.Tesouro}</td>
          <td>{data.gender}</td>
        </tr>
      </tbody>
    </table>
  )
}
