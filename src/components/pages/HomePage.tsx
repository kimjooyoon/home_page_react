import BoxAtom from "../atoms/box/BoxAtom";
import TypographyAtom from "../atoms/typography/TypographyAtom";

const HomePage = () => {
  return (
    <BoxAtom>
      <TypographyAtom variant="h1" component="h1">
        Home Page
      </TypographyAtom>
    </BoxAtom>
  );
};

export default HomePage;
