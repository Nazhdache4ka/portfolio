import { Card, CardContent, Typography, CardMedia, Box, Stack } from '@mui/material';
import type { ICard } from '../../interfaces';

interface ICustomCardsProps {
  card: ICard;
}

export function CustomCards({ card }: ICustomCardsProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: card.rowDirection,
          my: 1,
        }}
      >
        <CardMedia
          component="img"
          image={card.image}
          alt={card.title}
          sx={{ width: { xs: '100%', md: '35%' }, maxHeight: 280, objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6">{card.title}</Typography>
          <Typography variant="body1">{card.content}</Typography>
          {card.stack && (
            <Stack
              spacing={1}
              sx={{ mt: 2 }}
            >
              {card.stack.map((stack, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  color="text.secondary"
                  fontSize={12}
                >
                  • {stack}
                </Typography>
              ))}
            </Stack>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
