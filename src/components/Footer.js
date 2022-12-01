const aliceGithub = 'https://github.com/siuusunn';
const tobyGithub = 'https://github.com/CodebyJet';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Created by:
          <br />
          Alice{' '}
          <a target="_blank" rel="noreferrer" href={aliceGithub}>
            @siuusunn
          </a>{' '}
          & Toby{' '}
          <a target="_blank" rel="noreferrer" href={tobyGithub}>
            @CodebyJet
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
