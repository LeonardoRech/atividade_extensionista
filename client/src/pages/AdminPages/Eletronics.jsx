import Layout from './components/Layout'
import EletronicTemplate from './Template/EletronicTemplate'

export default function EletronicsPage(){

  return (
    <Layout title="Eletrônicos" subtitle='Gerenciamento de Eletrônicos'>
      <EletronicTemplate />
    </Layout>
  )
}