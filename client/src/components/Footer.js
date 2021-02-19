import { Container, Grid, List, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

let footerStyles = {
  position: "relative",
  bottom: "0",
  width: "100%",
  height: "50px",
};

const Footer = () => {
  return (
    <div style={footerStyles}>
      <Segment inverted vertical>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <List horizontal inverted divided link size="small">
                  <List.Item>
                    <Link to="/">Home</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/tasks">Task</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/team">Team</Link>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <List inverted size="small">
                  <List.Description>
                    Copyright © 2019 CloudTaskr. ALl Rights Reserved.
                  </List.Description>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
