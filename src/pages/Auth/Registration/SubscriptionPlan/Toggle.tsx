import React from 'react';
import { LABELS } from 'src/data/labels';

interface IndexProps {
  selected: string;
  setSelected: (_value: string) => void;
}

const Index: React.FC<IndexProps> = ({ selected, setSelected }) => {
  return (
    <div className=" flex justify-center">
      <div className="mb-6 inline-flex overflow-hidden rounded-xl bg-background h-12 border border-primary p-1">
        <button
          type="button"
          onClick={() => setSelected('monthly')}
          className={`cursor-pointer px-3 py-2 h-10 text-center font-medium rounded-lg ${selected === 'monthly' ? 'bg-primary text-default-foreground' : 'text-primary'}`}
        >
          {LABELS.monthly}
        </button>
        <button
          type="button"
          onClick={() => setSelected('yearly')}
          className={`cursor-pointer px-3 py-2 h-10 text-center font-medium rounded-lg ${selected === 'yearly' ? 'bg-primary text-default-foreground' : ' text-primary'}`}
        >
          {LABELS.yearly}
        </button>
      </div>
    </div>
  );
};

export default Index;
