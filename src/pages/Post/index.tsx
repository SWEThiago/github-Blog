import { Header, SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useCallback, useEffect, useState } from 'react'
import { apiPost } from '../../lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'

interface PostProps {
  id: number
  comments: number
  title: string
  login: string
  created_at: string
  body: string
  url: string
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Post() {
  const [post, setPosts] = useState<PostProps[]>([])
  console.log(post)

  useEffect(() => {
    fetch(
      'https://api.github.com/search/issues?q=%20repo:SWEThiago/github-Blog',
    )
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await apiPost.get('Posts', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setPosts(response.data)
  }, [])

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await fetchPosts(data.query)
  }

  return (
    <>
      <Header>
        <span>Publicações</span>
        <span>
          <p>6 publicações</p>
        </span>
      </Header>

      <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchFormContainer>
    </>
  )
}
