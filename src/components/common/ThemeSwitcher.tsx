import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Next UI
import { Switch } from '@nextui-org/react';

// Icons
import { Moon, Sun1 } from 'iconsax-react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themeChangeHandler = (val: boolean) => {
    if (val) {
      setTheme('numa-light');
    } else {
      setTheme('numa-dark');
    }
  };

  return (
    <div>
      <Switch
        isSelected={theme === 'numa-light'}
        size="md"
        color="primary"
        startContent={<Sun1 size="16" variant="Bold" className="text-primary" />}
        endContent={<Moon size="16" className="text-primary" variant="Bold" />}
        onValueChange={themeChangeHandler}
      ></Switch>
    </div>
  );
};
