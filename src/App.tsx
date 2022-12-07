import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaut'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
      <Post />
    </ThemeProvider>
  )
}
