import { CustomCards } from '../components';
import { Container, Typography } from '@mui/material';
import { rowDirection, type ICard } from '../interfaces';

export function About() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary.main"
        sx={{ textAlign: 'center', my: 2 }}
      >
        A few words about me
      </Typography>
      {cardsContent.map((card, index) => (
        <CustomCards
          card={card}
          key={index}
        />
      ))}
    </Container>
  );
}

const cardsContent: ICard[] = [
  {
    title: 'Short biography',
    content:
      'I was born in Russia, in the city of Angarsk. I spent my whole childhood there. From the age of 9 I took up competitive swimming and guitar. I achieved solid results in both, but eventually left professional sports—though not music. In 2024 I finished high school with a gold medal and enrolled at Singidunum University to study Information Technologies. That was when I started my journey into programming and software development, guided by my elder brother, who taught me a great deal about web development. I am still exploring this world and have no intention of stopping learning and improving my skills.',
    rowDirection: rowDirection.ROW,
    image: '../../assets/photos/IMG_1819.JPG',
  },
  {
    title: 'My interests and hobbies',
    content:
      'I would say my biggest hobby and interest is music. I cannot recall a single day when I have not listened to any music. Of course, music is not the only thing in my life. I also enjoy everything related to studying and learning, as well as watching movies and reading books.',
    rowDirection: rowDirection.ROW_REVERSE,
    image: '../../assets/photos/hobbies.jpg',
  },
  {
    title: 'My favourite movies and books',
    content: 'Here are some of my favourite movies and books that I have watched and read.',
    rowDirection: rowDirection.ROW,
    image: '../../assets/photos/movie.jpg',
    stack: [
      'The Sixth Sense',
      'The Good, the Bad and the Ugly',
      'Casino Royale',
      'Notre Dame de Paris',
      'Three Comrades',
      'The Count of Monte Cristo',
    ],
  },
];
