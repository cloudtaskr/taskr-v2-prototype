import { Container, Grid, List } from "semantic-ui-react";

let imgStyles = { borderRadius: "50%" };

const Team = () => {
  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <List horizontal size="small">
            <List.Item>
              <img
                src="./assests/avrahm.jpg"
                alt=""
                style={imgStyles}
                width="300"
              />
              <h3>Avrahm</h3>
              <p>CEO of SportsVybe and current Software Engineer</p>
            </List.Item>
            <List.Item>
              <img
                src="./assests/julian.jpg"
                alt=""
                style={imgStyles}
                width="300"
              />
              <h3>Julian</h3>
              <p>Former Apple Genius, current Software Engineer</p>
            </List.Item>
            <List.Item>
              <img
                src="./assests/juan.jpg"
                alt=""
                style={imgStyles}
                width="300"
              />
              <h3>Juan</h3>
              <p>Camper, hiker, cookie connoisseur.</p>
            </List.Item>
          </List>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Team;
