import styles from './styles.module.css';

interface GradientBackgroundProps {
  colors: string[];
}

export const GradientBackground = ({ colors }: GradientBackgroundProps) => {
  // Create CSS variables for the gradient colors
  const gradientStyle = {
    '--color-1': colors[0] || '#FFD700',
    '--color-2': colors[1] || '#FFA500',
  } as React.CSSProperties;

  return (
    <div className={styles.gradientContainer} style={gradientStyle}>
      <div className={styles.blob}></div>
      <div className={styles.blob}></div>
    </div>
  );
};

export default GradientBackground;
