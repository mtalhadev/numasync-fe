import { RadioGroup, Radio } from '@nextui-org/react';
import { FC } from 'react';
import { CustomRadioGroupProps } from 'src/types/radioGroupTypes';
import Text from '../Text';

const CustomRadioGroup: FC<CustomRadioGroupProps> = ({ options, selected, setSelected }) => {
  return (
    <RadioGroup color="primary" value={selected} onValueChange={setSelected}>
      {options.map((item) => (
        <Radio
          key={item.value}
          value={item.value}
          description={
            <Text containerTag="p" className="text-xs text-default-400">
              {item.description}
            </Text>
          }
        >
          <Text containerTag="p" className="text-sm text-foreground">
            {item.title}
          </Text>
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
