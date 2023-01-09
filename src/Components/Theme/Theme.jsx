import "./Theme.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../ThemeContext";

const Theme = () => {
  const { theme, setTheme, allThemes, setAllThemes } = useContext(ThemeContext);
  const themeName = useRef();
  const foreground = useRef();
  const background = useRef();

  const handleAddTheme = () => {
    const exist = Object.keys(allThemes).find(
      (th) => th === themeName.current.value
    );
    console.log(exist);
    if (exist) {
      alert("Theme already exist");
      return;
    } else {
      const newTheme = {
        name: themeName.current.value,
        foreground: foreground.current.value,
        background: background.current.value,
      };
      // update allThemes, add newTheme
      setAllThemes({ ...allThemes, [newTheme.name]: newTheme });
      // update theme
      setTheme(newTheme);
    }
  };
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>Manage Themes </h1>
          <span>
            Current theme: <strong>{theme.name}</strong>
          </span>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xl="3" className="p-2 border">
          {/* Create a new Select Element with Option (light/dark) onChange: need to switch between themes */}
          <Form.Label> Select Theme</Form.Label>
          <Form.Select
            value={theme.name}
            onChange={(e) => setTheme(allThemes[e.target.value])}
          >
            {Object.keys(allThemes).map((th, index) => {
              return (
                <option key={`theme_${index}`} value={allThemes[th].name}>
                  {allThemes[th].name}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col xl="9" className="p-2 border">
          {/* Create a Form, conteins the Follwoing:
                1- Theme name input : text
                2- foreground: color
                3- background: color
                4- Add Theme: input/button > onClick => update allThemes by add a new theme.
            */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Theme Name</Form.Label>
            <Form.Control
              ref={themeName}
              type="text"
              placeholder="Enter Theme Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Foreground</Form.Label>
            <Form.Control
              ref={foreground}
              type="color"
              placeholder="Foreground"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Background</Form.Label>
            <Form.Control
              ref={background}
              type="color"
              placeholder="Background"
            />
          </Form.Group>
          <Button
            onClick={handleAddTheme}
            type="submit"
            className="btn btn-primary"
          >
            Add Theme
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Theme;
