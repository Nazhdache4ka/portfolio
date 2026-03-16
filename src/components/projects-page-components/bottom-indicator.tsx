import { Box } from '@mui/material';
import type { IProject } from '../../interfaces';

interface IBottomIndicatorProps {
  project: IProject;
  innerIndex: number;
}

export function BottomIndicator({ project, innerIndex }: IBottomIndicatorProps) {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 4,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
        zIndex: 1,
      }}
    >
      {project.media.map((media, i) => (
        <Box
          key={media.url}
          sx={{
            width: innerIndex === i ? 24 : 8,
            height: 8,
            borderRadius: 1,
            bgcolor: innerIndex === i ? 'primary.main' : 'action.selected',
            transition: 'width 0.4s ease-in-out, background-color 0.4s ease-in-out',
          }}
        />
      ))}
    </Box>
  );
}
