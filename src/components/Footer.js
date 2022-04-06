import { FooterStyled } from './styles/Footer.styled';
import { ReactComponent as Music } from '../Svg/Music.svg';
import { ReactComponent as SkipBack } from '../Svg/SkipBack.svg';
import { ReactComponent as Skip } from '../Svg/Skip.svg';
import { ReactComponent as Play } from '../Svg/Play.svg';
import { ReactComponent as Player } from '../Svg/Player.svg';

export default function Footer() {
  return (
    <FooterStyled>
      <div className="music">
        <Music />
        <div className="playerfull">
          <SkipBack className="skipback" />
          <Skip className="skip" />
          <Play className="play" />
          <div className="player">
            <Player />
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}
