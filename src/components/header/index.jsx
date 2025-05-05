import "./style.scss";
import tela_show_logo_horz from "../../assets/logos/tela_show_logo_horz.png";
import blue_telephone_icon from "../../assets/icons/blue_telephone_icon.svg";

export function Header(props) {

  const {OpenMobileMenu} = props;

  return (
    <header className="Header">
      <img className="Header__logo" alt="logo tela show rede de proteção" src={tela_show_logo_horz}/>
      <nav className="Header__nav">
        <ul>
          <li>Início</li>
          <li>Serviços</li>
          <li>Locais de Atuação</li>
          <li>Solicitar Orçamento</li>
        </ul>
      </nav>

      <div className="Header__contact">
        <img src={blue_telephone_icon} alt="ícone de telefone azul" className="Header__contact_img" />
        <div className="Header__contact_texts">
          <p className="Header__contact_texts_description">Entre em contato:</p>
          <p className="Header__contact_texts_phone">(21)97211-1011</p>
        </div>
      </div>

      <button className="Header__openMobileMenu">
        <img src="" alt="abrir menu" onClick={OpenMobileMenu}/>
      </button>
    </header>
  );
}