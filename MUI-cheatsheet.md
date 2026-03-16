## Шпаргалка по MUI для React

Практический гайд по самым часто используемым компонентам MUI: **когда применять, где и как**. Примеры — на функциональных компонентах с `sx`.

---

## 1. Базовый кирпич: `Box`

- **Когда использовать**
  - Как «див на стероидах» — любой контейнер/обёртка.
  - Для быстрых отступов, флексов, фона, теней и т.п.
- **Где**
  - Layout, карточки, секции страницы, обёртки вокруг контента.

```tsx
import { Box } from '@mui/material';

function Example() {
  return (
    <Box
      sx={{
        p: 2, // padding
        m: 2, // margin
        display: 'flex',
        gap: 2,
        bgcolor: 'background.paper',
        borderRadius: 2,
      }}
    >
      Контент
    </Box>
  );
}
```

**Запомнить:** если сомневаешься, что брать для контейнера — почти всегда `Box`.

---

## 2. Вертикальные/горизонтальные стеки: `Stack`

- **Когда использовать**
  - Нужен столбец или строка элементов с **равными отступами** между ними.
  - Формы, списки кнопок, карточки в колонку/ряд.
- **Где**
  - Внутри форм, в модалках, в карточках, в layout.

```tsx
import { Stack, Button } from '@mui/material';

function ButtonsRow() {
  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <Button variant="contained">Сохранить</Button>
      <Button variant="outlined">Отмена</Button>
    </Stack>
  );
}
```

**Запомнить:** `Stack` = flex-контейнер с уже настроенными отступами между детьми.

---

## 3. Сетка: `Grid`

- **Когда использовать**
  - Нужна **адаптивная сетка**: карточки, блоки, колонки.
- **Где**
  - Галереи, списки карточек, layout из колонок (например, контент + сайдбар).

```tsx
import { Grid, Paper } from '@mui/material';

function CardsGrid() {
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
      >
        <Paper sx={{ p: 2 }}>Карточка 1</Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
      >
        <Paper sx={{ p: 2 }}>Карточка 2</Paper>
      </Grid>
    </Grid>
  );
}
```

- **Ключевые пропсы**
  - У контейнера: `container`, `spacing`.
  - У элемента: `item`, `xs / sm / md / lg / xl` — ширина колонки в 12‑колоночной сетке.

---

## 4. Текст: `Typography`

- **Когда использовать**
  - Любой текст, где важны размеры, семантика и единый стиль.
- **Где**
  - Заголовки, параграфы, подписи к элементам.

```tsx
import { Typography } from '@mui/material';

function TextExample() {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
      >
        Заголовок страницы
      </Typography>
      <Typography variant="body1">Обычный текст абзаца. Управляешь только `variant`, остальное делает тема.</Typography>
    </>
  );
}
```

- Полезные пропсы: `variant`, `gutterBottom`, `align`, `color`, `component`.

---

## 5. Кнопки: `Button`, `IconButton`

- **Когда использовать**
  - `Button` — обычное действие (submit, переход, сохранение).
  - `IconButton` — иконка‑действие (удалить, открыть меню, назад и т.д.).
- **Где**
  - В формах, тулбарах, карточках, диалогах.

```tsx
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Buttons() {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
      >
        Основное действие
      </Button>

      <Button
        variant="outlined"
        color="secondary"
      >
        Вторичное
      </Button>

      <IconButton color="error">
        <DeleteIcon />
      </IconButton>
    </>
  );
}
```

- Основные `variant`: `text`, `outlined`, `contained`.

---

## 6. AppBar / Toolbar / навигация

- **Когда использовать**
  - Верхняя панель, навбар, шапка приложения.
- **Где**
  - Главный layout приложения.

```tsx
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Логотип
        </Typography>

        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
```

**Запомнить:** `AppBar` + `Toolbar` — стандартная шапка. Для навигации внутри — `Box` с `display="flex"` или `Stack`.

---

## 7. Карточки: `Card`

- **Когда использовать**
  - Для блоков контента: проект, статья, товар, профиль.
- **Где**
  - Ленты, каталоги, списки проектов.

```tsx
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h6">Название проекта</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Краткое описание проекта.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
  );
}
```

- Важные части: `Card`, `CardContent`, `CardActions`, при необходимости `CardMedia`.

---

## 8. Поля ввода: `TextField` и друзья

- **Когда использовать**
  - Любые формы: логин, поиск, контактная форма.
- **Где**
  - Внутри форм, фильтров, модалок.

```tsx
import { TextField, Stack, Button } from '@mui/material';

function ContactForm() {
  return (
    <Stack
      spacing={2}
      component="form"
    >
      <TextField
        label="Имя"
        fullWidth
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
      />
      <TextField
        label="Сообщение"
        multiline
        rows={4}
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
      >
        Отправить
      </Button>
    </Stack>
  );
}
```

- Частые пропсы: `label`, `type`, `fullWidth`, `multiline`, `rows`, `error`, `helperText`, `size`.

Для чекбоксов/радио/селектов: связка `FormControl` + `FormLabel` + `FormGroup` / `RadioGroup` / `Select`.

---

## 9. Диалоговые окна: `Dialog`

- **Когда использовать**
  - Подтверждения, формы, детальная информация, которая открывается по клику.
- **Где**
  - Удалить что‑то, редактировать, показать подробности.

```tsx
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

function ConfirmDelete() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        color="error"
        onClick={() => setOpen(true)}
      >
        Удалить
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Удалить элемент?</DialogTitle>
        <DialogContent>
          <Typography>Это действие нельзя будет отменить.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Отмена</Button>
          <Button
            color="error"
            variant="contained"
          >
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
```

---

## 10. Уведомления: `Snackbar` + `Alert`

- **Когда использовать**
  - Показать краткое сообщение: успех, ошибка, предупреждение.

```tsx
import { useState } from 'react';
import { Snackbar, Alert, Button } from '@mui/material';

function Notifications() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Показать уведомление</Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          onClose={() => setOpen(false)}
          sx={{ width: '100%' }}
        >
          Успешно сохранено!
        </Alert>
      </Snackbar>
    </>
  );
}
```

---

## 11. `Container` и базовый layout страницы

- **Когда использовать**
  - Чтобы центрировать контент и ограничить максимальную ширину.
- **Где**
  - Корневой layout, основная область страницы.

```tsx
import { Container, Box } from '@mui/material';

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>{children}</Box>
    </Container>
  );
}
```

---

## 12. Общие советы по применению

- **Box / Stack / Grid**
  - `Box` — общий контейнер.
  - `Stack` — когда просто нужно разложить элементы в строчку/колонку с равным `gap`.
  - `Grid` — когда нужна адаптивная сетка, особенно карточки.

- **Typography**
  - Не придумывай размеры руками, сначала используй `variant` (`h1–h6`, `body1`, `body2`, `subtitle1` и т.д.).

- **sx вместо кастомного CSS**
  - В MUI принято стилизовать через `sx` — это даёт доступ к теме (`bgcolor: 'primary.main'`, `p: 2`, `mt: 3` и т.д.).

- **Тема**
  - Для консистентного вида лучше один раз настроить тему (цвета, шрифты) и дальше использовать `color`, `variant`, `bgcolor` из неё, а не жёсткие hex‑коды.

---

## 13. Кастомные цвета, шрифты и тёмная тема

### 13.1. Базовая настройка темы

Обычно в корне приложения (например, `main.tsx` / `main.tsx`) настраивают тему так:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import App from './App';

const theme = createTheme({
  palette: {
    mode: 'light', // или 'dark'
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

- **`ThemeProvider`** — пробрасывает тему вниз по дереву.
- **`CssBaseline`** — сбрасывает базовые стили браузера, делает вид более аккуратным.

---

### 13.2. Свои цвета (palette)

В `palette` настраиваются основные цветовые слоты: `primary`, `secondary`, `error`, `warning`, `info`, `success`, а также фоны и текст.

```tsx
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
});
```

- Потом в компонентах ты просто пишешь:
  - `color="primary"` у `Button` / `Alert` / `IconButton`.
  - `bgcolor="primary.main"` или `bgcolor="background.paper"` в `sx`.

**Добавление своих цветовых слотов**

Можно добавить, например, `custom` и использовать его через `theme.palette.custom`. Для этого лучше расширить типы (TS), но на практике, если не заморачиваться, можно использовать просто строковые цвета в `sx`.

---

### 13.3. Свой шрифт (typography)

1. Подключаешь шрифт (через `index.css`, `<link>` в `index.html` или локальные файлы).
2. Указываешь его в `typography`:

```tsx
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    body1: {
      fontSize: 16,
    },
  },
});
```

- После этого все `Typography` и большинство компонентов будут использовать новый шрифт.
- Конкретный стиль можно переопределить в `sx`, но **лучше менять в теме**, чтобы везде было одинаково.

---

### 13.4. Тёмная тема (dark mode)

Всё завязано на поле `palette.mode`:

```tsx
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});
```

- MUI сам подберёт контрастные цвета текста, и большинство компонентов автоматически станут тёмными.
- `CssBaseline` тоже подстроит фон под тёмный.

**Переключение светлая/тёмная тема на лету**

Обычно делают кастомный хук или контекст:

```tsx
import { useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

function Root() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#1976d2',
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* тут можно передать setMode дальше, например, в Header с переключателем */}
    </ThemeProvider>
  );
}
```

В хедере можно добавить `Switch` или `IconButton` (солнышко/луна), которое вызывает `setMode(prev => (prev === 'light' ? 'dark' : 'light'))`.

---

### 13.5. Как это использовать в `sx`

- Цвет из темы: `bgcolor: 'primary.main'`, `color: 'text.secondary'`.
- Отступы: `p: 2`, `mt: 3` — это кратные базовому шагу темы (`8px` по умолчанию).
- Можно получать тему в `sx` как функцию:

```tsx
<Box
  sx={(theme) => ({
    bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'grey.100',
    p: 2,
  })}
>
  Контент
</Box>
```
