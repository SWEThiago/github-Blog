import {
  Card,
  CardContainer,
  Description,
  Header,
  SearchFormContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useCallback, useEffect, useState } from 'react'
import { apiPost } from '../../lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import ReactMarkdown from 'react-markdown'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'
import { useParams } from 'react-router-dom'

interface PostProps {
  number: number
  comments: number
  title: string
  login: string
  created_at: string
  body: string
  url: string
  id: number
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Post() {
  const [post, setPosts] = useState<PostProps[]>([])
  console.log(post)

  useEffect(() => {
    fetch('https://api.github.com/repos/SWEThiago/github-Blog/issues')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])

  // const fetchPosts = useCallback(async (query?: string) => {
  //   const response = await apiPost.get('Posts', {
  //     params: {
  //       q: query,
  //     },
  //   })

  //   setPosts(response.data)
  // }, [])

  async function fetchPosts(query?: string) {
    const url = new URL(
      'https://api.github.com/search/issues?q=%20repo:SWEThiago/github-Blog/',
    )
    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setPosts(data)
  }

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await fetchPosts(data.query)
  }

  const { issueNumber } = useParams()

  return (
    <>
      <Header>
        <span>Publicações</span>
        <span>
          <p>{post.length} publicações</p>
        </span>
      </Header>

      <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchFormContainer>

      <CardContainer>
        {post.map((post) => {
          return (
            <a href="http://127.0.0.1:5173/issueNumber" key={post.id}>
              <Card>
                <div>
                  <h1>{post.title}</h1>
                  <span>
                    {formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </div>
                <Description>
                  <ReactMarkdown>{post.body}</ReactMarkdown>
                </Description>
              </Card>
            </a>
          )
        })}
      </CardContainer>
    </>
  )
}
