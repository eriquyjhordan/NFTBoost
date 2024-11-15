import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import TitleSection from './title-section'

export default function Faq() {
  const questions = [
    {
      question: 'O que são NFTs',
      response: `Sunt cupidatat consectetur officia ex eu aliquip. Voluptate ad deserunt 
        laboris est aute. Do excepteur proident reprehenderit consequat pariatur 
        nisi est sit labore ex consectetur excepteur labore nisi cupidatat. 
        Reprehenderit eiusmod aliquip aliqua cupidatat ut aliquip dolor ex 
        consequat ipsum anim incididunt voluptate ut. Voluptate tempor qui nulla.`,
    },
    {
      question: 'Como funciona a compra de NFTs em seu site?',
      response: `Sunt cupidatat consectetur officia ex eu aliquip. Voluptate ad deserunt 
        laboris est aute. Do excepteur proident reprehenderit consequat pariatur 
        nisi est sit labore ex consectetur excepteur labore nisi cupidatat. 
        Reprehenderit eiusmod aliquip aliqua cupidatat ut aliquip dolor ex 
        consequat ipsum anim incididunt voluptate ut. Voluptate tempor qui nulla.`,
    },
    {
      question: 'Como posso vender meus próprios NFTs?',
      response: `Sunt cupidatat consectetur officia ex eu aliquip. Voluptate ad deserunt 
        laboris est aute. Do excepteur proident reprehenderit consequat pariatur 
        nisi est sit labore ex consectetur excepteur labore nisi cupidatat. 
        Reprehenderit eiusmod aliquip aliqua cupidatat ut aliquip dolor ex 
        consequat ipsum anim incididunt voluptate ut. Voluptate tempor qui nulla.`,
    },
    {
      question: 'Os NFTs são seguros e autênticos?',
      response: `Sunt cupidatat consectetur officia ex eu aliquip. Voluptate ad deserunt 
        laboris est aute. Do excepteur proident reprehenderit consequat pariatur 
        nisi est sit labore ex consectetur excepteur labore nisi cupidatat. 
        Reprehenderit eiusmod aliquip aliqua cupidatat ut aliquip dolor ex 
        consequat ipsum anim incididunt voluptate ut. Voluptate tempor qui nulla.`,
    },
    {
      question:
        'Quais são as taxas envolvidas na compra e venda de NFTs em seu site?',
      response: `Sunt cupidatat consectetur officia ex eu aliquip. Voluptate ad deserunt 
        laboris est aute. Do excepteur proident reprehenderit consequat pariatur 
        nisi est sit labore ex consectetur excepteur labore nisi cupidatat. 
        Reprehenderit eiusmod aliquip aliqua cupidatat ut aliquip dolor ex 
        consequat ipsum anim incididunt voluptate ut. Voluptate tempor qui nulla.`,
    },
  ]
  return (
    <section className="container mt-16 lg:mt-28">
      <TitleSection
        subTitle="Desvendando os Mistérios dos NFTs"
        title="Perguntas frequentes"
      />
      <Accordion type="single" collapsible className="w-full">
        {questions.map(({ question, response }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{response}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
