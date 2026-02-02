import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut tempore
      facilis odit, veniam commodi, quaerat ipsum inventore cupiditate sint
      quasi, fuga nobis corrupti. Sit exercitationem voluptatibus repellat modi
      culpa quam.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=KauanSato&show_icons=true&theme=dracula" />
      <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=KauanSato&layout=compact&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
