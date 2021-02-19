import { Container, Button, Image } from "semantic-ui-react";

const Home = () => {
  return (
    <Container>
      <div>
        <Image
          src="./assests/hero-img.svg"
          verticalAlign="middle"
          size="huge"
          floated="left"
        />
        <span>
          <h2>CloudTaskr</h2>
          <p>
            Reprogram your brain and automate the important rituals in your life
            so you have more time for what really matters.
          </p>
          <Button>Get Started</Button>
        </span>
      </div>
    </Container>
  );
};

export default Home;
