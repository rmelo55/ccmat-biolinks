import Image from "next/image";
import "./page.css";
import LinkButton from "./components/LinkButton";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="main">

      <div className="logo">
        <Image src="/images/logo-cmat-perfil.png" 
        className="imageLogo"
        alt="Logo" 
        width={130} 
        height={130}
        style={{ 
          borderRadius: '70px',
          border: '2px solid rgba(0, 0, 0, 0.1)',
          padding: '2px'
         }}
        />
      </div>

      <div className="acronym">
        CCMAT
      </div>

      <div className="description">
        Coordenação do Curso de Matemática
      </div>

      <div className="button-container">
        <LinkButton 
          href="https://ufdpar.edu.br/preg/preg-1/cursos-de-graduacao-1/ciencias-exatas-e-da-natureza/matematica" 
          target="_blank">
          Página do Curso de Matemática
        </LinkButton>
        
        <LinkButton 
          href="mailto:ccmat@ufdpar.edu.br">
          Email da Coordenação <br />
          ccmat@ufdpar.edu.br
        </LinkButton>
      </div>
      
      <Footer />

    </main>
  );
}
