import { Card, CardContent, CardMedia, Box, Typography, Stack, type SxProps } from '@mui/material';
import type { ICard } from '../../interfaces';

interface CardCustomProps {
  card: ICard;
  cardStyles?: SxProps;
  cardContentStyles?: SxProps;
}

export function CardsCustom({ card, cardStyles, cardContentStyles }: CardCustomProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: card.rowDirection,
          my: 1,
          ...cardStyles,
        }}
      >
        {card.image && (
          <CardMedia
            component="img"
            image={card.image}
            alt={card.title}
            sx={{ width: { xs: '100%', md: '35%' }, maxHeight: 280, objectFit: 'cover' }}
          />
        )}
        {card.icon && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{card.icon}</Box>}
        <CardContent sx={{ flexGrow: 1, ...cardContentStyles }}>
          <Typography variant="h6">{card.title}</Typography>
          <Typography variant="body1">{card.content}</Typography>
          {card.stack && (
            <Stack
              spacing={1}
              sx={{ mt: 2 }}
            >
              {card.stack.map((stack) => (
                <Typography
                  key={stack}
                  variant="body2"
                  color="text.secondary"
                  fontSize={12}
                >
                  •{stack}
                </Typography>
              ))}
            </Stack>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
