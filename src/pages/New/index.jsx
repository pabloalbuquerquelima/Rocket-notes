import { Container, Form } from "./styles";
import { Header } from '../../componentes/Header/index.jsx';
import { Input } from "../../componentes/Input";
import { Textarea } from "../../componentes/Textarea/index.jsx";
import { NoteItem } from "../../componentes/NoteItem/index.jsx";
import { Section } from '../../componentes/Section/index.jsx';
import { Button } from "../../componentes/Button";
import { Link } from "react-router-dom";

export function New(){
    return(
        <Container>
            <Header></Header>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to='/'>Voltar</Link>
                    </header>

                    <Input placeholder='Título' />

                    <Textarea placeholder='Escreva sua nota...'/>

                    <Section title='Links úteis'>
                        <NoteItem value='https://github.com/pabloalbuquerquelima'/>
                        <NoteItem value='' isnew placeholder='Novo Link'/>
                    </Section>
                    
                    <Section title='Marcadores'>
                        <div className="tags">
                        <NoteItem value='React'/>
                        <NoteItem value='' isnew placeholder='Nova tag'/>
                        </div>
                    </Section>

                    <Button title='Salvar'></Button>
                </Form>
            </main>
        </Container>
    )
}