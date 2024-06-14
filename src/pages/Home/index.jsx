import { FiPlus } from 'react-icons/fi'
import { Input } from '../../componentes/Input/index.jsx'
import { Section } from '../../componentes/Section/index.jsx'
import { Note } from '../../componentes/Note/index.jsx' 
import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js'
import { ButtonText } from '../../componentes/ButtonText/index.jsx'
import { Header } from '../../componentes/Header/index.jsx'

export function Home() {
    return (
      <Container>
        <Brand>
          <h1>Rocketnotes</h1>
        </Brand>
  
        <Header />
  
        <Menu>
          <li><ButtonText title="Todos" $isactive /></li>
          <li><ButtonText title="React" /></li>
          <li><ButtonText title="Nodejs" /></li>
        </Menu>
  
        <Search>
          <Input placeholder="Pesquisar pelo título" />
        </Search>
  
        <Content>
          <Section title="Minhas notas">
            <Note data={{
              title: 'React',
              tags: [
                { id: '1', name: 'react' },
                { id: '2', name: 'rocketseat' }
              ]
            }}
            />
          </Section>
        </Content>
  
        <NewNote to='New'>
          <FiPlus />
          Criar nota
        </NewNote>
      </Container>
    )
  }