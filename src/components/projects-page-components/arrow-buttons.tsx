import { IconButton, type SxProps } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface IArrowButtonProps {
  onClick: () => void;
  color: 'primary' | 'secondary';
  sxProps?: SxProps;
}

export function ArrowButtonLeft({ onClick, color, sxProps }: IArrowButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      size="large"
      color={color}
      sx={sxProps}
    >
      <ChevronLeftIcon />
    </IconButton>
  );
}

export function ArrowButtonRight({ onClick, color, sxProps }: IArrowButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      size="large"
      color={color}
      sx={sxProps}
    >
      <ChevronRightIcon />
    </IconButton>
  );
}
