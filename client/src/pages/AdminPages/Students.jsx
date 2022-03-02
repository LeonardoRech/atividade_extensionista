import Layout from './components/Layout'
import StudentsTemplate from './Template/StudentsTemplate'

export default function EletronicsPage(){

  return (
    <Layout title="Estudantes" subtitle='Gerenciamento de Estudantes'>
      <StudentsTemplate />
    </Layout>
  )
}