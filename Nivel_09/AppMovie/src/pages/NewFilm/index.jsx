import { Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";

import { Link } from "react-router-dom";

export function NewFilm() {

    return (
        <Container>
            <Header />
            
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título" />

                    <TextArea placeholder="Obsevações" />

                    <Section title="Links úteis">
                        <NoteItem  value="https//github.com/LuisLoschi"/>
                        <NoteItem  isnew placeholder="Novo link" />
                    </Section>


                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem  value="react"/>
                            <NoteItem  isnew placeholder="Nova tag" />
                        </div>
                    </Section>
                    
                    <Button title="Salvar" />
                </Form>
            </main>



        </Container>
    )
}