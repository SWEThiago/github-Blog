import { useEffect, useState } from 'react'
import coverImg from '../../../assets/Cover.png'
import logoImg from '../../../assets/Logo.png'
import {
  Body,
  Container,
  Footer,
  Header,
  ImgBackground,
  Logo,
  PostContainer,
} from './styles'
import { BsFillCalendar2EventFill } from 'react-icons/bs'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'
import { FaGithub, FaComment } from 'react-icons/fa'
import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import ReactMarkdown from 'react-markdown'

interface PostProps {
  user: any
  title: string
  id: number
  login: string
  created_at: string
  comments: number
  html_url: string
  body: string
}

export function SelectPost() {
  const [post, setPost] = useState<PostProps[]>([])

  useEffect(() => {
    fetch('https://api.github.com/repos/SWEThiago/github-Blog/issues')
      .then((response) => response.json())
      .then((data) => setPost(data))
  }, [])
  console.log(post)
  return (
    <>
      <header>
        <ImgBackground src={coverImg} alt="" />
        <Logo src={logoImg} alt="" />
      </header>

      {post.map((post) => {
        return (
          <Container key={post.id}>
            <Body>
              <Header>
                <div>
                  <span>
                    <div>
                      <CaretLeft weight="bold" size={14} />
                      <a href="/">VOLTAR</a>
                    </div>
                  </span>
                  <span>
                    <div>
                      <a href={post.html_url}> VER NO GITHUB</a>
                      <ArrowSquareOut weight="fill" size={14} />
                    </div>
                  </span>
                </div>

                <h1>{post.title}</h1>
              </Header>

              <Footer>
                <div>
                  <FaGithub color="3A536B" />
                  <a href={post.user.html_url}>{post.user.login}</a>
                </div>

                <div>
                  <BsFillCalendar2EventFill color="3A536B" />
                  <a href="#">
                    {formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </a>
                </div>

                <div>
                  <FaComment color="3A536B" />
                  <span>{post.comments} comentários</span>
                </div>
              </Footer>
            </Body>
          </Container>
        )
      })}

      {post.map((post) => {
        return (
          <PostContainer key={post.id}>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </PostContainer>
        )
      })}
    </>
  )
}
