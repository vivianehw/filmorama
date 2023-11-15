/* eslint-disable import/no-anonymous-default-export */
import palette from "./palette";

export default {
  logo: {
    color: palette.text.primary,
    fontFamily: "Karmatic Arcade",
    fontSize: "120px",
  },
  logoYear: {
    color: palette.text.red,
    fontFamily: "cursive",
    fontWeight: "bold",
    fontSize: "150px",
    marginTop: -130,
  },
  h1: {
    color: palette.text.primary,
    fontFamily: "Pixelated Times New Roman",
    fontSize: "120px",
  },
  h2: {
    color: palette.text.primary,
    fontFamily: "Pixelated Times New Roman",
    fontSize: "100px",
  },
  h3: {
    color: palette.text.primary,
    fontFamily: "Pixelated Times New Roman",
    fontSize: "80px",
  },
  h4: {
    color: palette.text.primary,
    fontFamily: "Pixelated Times New Roman",
    fontSize: "60px",
    margin: 0,
    lineHeight: "0.7",
  },
  h5: {
    color: palette.text.primary,
    fontFamily: "Pixelated Times New Roman",
    fontSize: "50px",
    margin: 0,
    marginBottom: 15,
    lineHeight: "0.8",
  },
  h6: {
    color: palette.text.primary,
    fontFamily: "Pixelated Times New Roman",
    fontSize: "40px",
    margin: 0,
  },
  p: {
    fontFamily: "Pixelated Times New Roman",
    fontSize: "45px",
    lineHeight: "normal",
  },
  // a: {
  //     color: palette.text.link,
  //     fontFamily: 'Pixelated Times New Roman',
  //     fontSize: '32px',
  //     textDecoration: 'underline',
  //     textDecorationThickness: '1px',
  // }
  button: {
    color: palette.text.primary,
    fontFamily: "Arial",
    fontSize: "20px",
    fontWeight: "bold",
    textDecorationThickness: "1px",
  },
  a: {
    color: palette.text.link,
    fontFamily: "Times New Roman",
    fontSize: "20px",
    cursor: "pointer",
    textDecoration: "underline",
    textDecorationThickness: "1px",
  },
};
