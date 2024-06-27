import './App.css'
import { Banner } from './components/Banner'
import imagePoster from "./assets/banner.jpg" 
import { User } from './components/User'
import { users } from './data/users'
import Profile from './components/Profile'

function App() {
  return (
    <div style={{display: 'flex', gap: '20px'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <Banner image={imagePoster} name='Poster Star Wars (1978)' description='Este incrível poster está disponível a pronta entrega, em papel especial para decoração de interiores, de alta qualidade, durabilidade e imagem nítida e vívida proporcionada pela produção de alto padrão. O envio é realizado de forma segura, em embalagem resistente e adequada, mantendo o produto intacto. Utilize da forma como desejar, podendo ser emoldurado ou simplesmente disposto, dando requinte à sua decoração.' />
        <Banner image='https://br.web.img3.acsta.net/pictures/bzp/01/29007.jpg' name='Poster Homem aranha' description='Este incrível poster está disponível a pronta entrega, em papel especial para decoração de interiores, de alta qualidade, durabilidade e imagem nítida e vívida proporcionada pela produção de alto padrão. O envio é realizado de forma segura, em embalagem resistente e adequada, mantendo o produto intacto. Utilize da forma como desejar, podendo ser emoldurado ou simplesmente disposto, dando requinte à sua decoração.' />
      </div>
      <div style={{display: 'flex', gap: '20px'}}>
        {users.map(user => (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <User userUrl={user.image} role={user.role} />
            <p>
              {user.username}  
              <span style={{ color: user.role == 'Admin' ? 'red' : 'blue' }}>
                {user.role ? ` [${user.role}]` : ' [User]'}
              </span>
            </p>
          </div>
      ))}
      </div>
      <div className="app">
      <Profile
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="John Doe"
        bio="Full-stack javascript"
        email="john.doe@email.com"
        phone="+5511987654321"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
    </div>
  )
}

export default App
