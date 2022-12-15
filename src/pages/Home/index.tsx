import coverImg from '../../assets/Cover.png'
import logoImg from '../../assets/Logo.png'
import { FaGithub, FaFileContract, FaArrowUp } from 'react-icons/fa'
import { BsPeople } from 'react-icons/bs'
import { Body, Container, Footer, Header, ImgBackground, Logo } from './styles'
import { useEffect, useState } from 'react'
import { Post } from '../Post'

interface UserProps {
  followers: number
  avatar_url: string
  bio: string
  name: string
}

export function Home() {
  const [user, setUser] = useState<UserProps>([])

  useEffect(() => {
    fetch('https://api.github.com/users/SWEThiago')
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [])

  return (
    <>
      <header>
        <ImgBackground src={coverImg} alt="" />
        <Logo src={logoImg} alt="" />
      </header>

      <Container>
        <img src={user.avatar_url} alt="" />
        <Body>
          <Header>
            <h1>Thiago Gonçalves</h1>

            <h2>
              <a href="https://github.com/SWEThiago">
                github <FaArrowUp />
              </a>
            </h2>
          </Header>

          <p>{user.bio}</p>

          <Footer>
            <div>
              <FaGithub color="3A536B" />
              <a href="https://github.com/SWEThiago">{user.name}</a>
            </div>

            <div>
              <FaFileContract color="3A536B" />
              <a href="https://app.rocketseat.com.br/me/thiago-goncalves-06431">
                Profile Rocketseat
              </a>
            </div>

            <div>
              <BsPeople color="3A536B" />
              <span>{user.followers} seguidores</span>
            </div>
          </Footer>
        </Body>
      </Container>

      <Post />
    </>
  )
}
