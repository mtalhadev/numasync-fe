import { ApexOptions } from 'apexcharts';
import { chartOptions } from './constants';
import { GRAPH_TYPE } from './enums';
import { useEffect } from 'react';
import {
  FieldValues,
  type SubmitHandler,
  type UseFormHandleSubmit,
} from 'react-hook-form';

export const hasMinLength = (password: string) => password.length >= 8;

export const hasSpecialCharacter = (password: string) =>
  /[!@#$%^&*(),.?":{}|<>]/.test(password);

export const hasNumericCharacter = (password: string) => /[0-9]/.test(password);

export const hasCapitalLetter = (password: string) => /[A-Z]/.test(password);

export const isValidPassword = (password: string) => {
  const minLength = hasMinLength(password);
  const specialCharacter = hasSpecialCharacter(password);
  const numericCharacter = hasNumericCharacter(password);
  const capitalLetter = hasCapitalLetter(password);
  return minLength && specialCharacter && numericCharacter && capitalLetter;
};

export const removeWhiteSpaces = (
  text: string,
  removeHyphensToo = false,
  joinWithHyphen = false
) =>
  removeHyphensToo
    ? text.split(' ').join('').split('-').join('')
    : text.split(' ').join(joinWithHyphen ? '-' : '');

export const removeHyphensAndMakeCamelCase = (text: string) =>
  text
    .split('-')
    .map((item: string) => `${item[0].toUpperCase()}${item.slice(1)}`)
    .join(' ');

export const getChartOptions = (type: GRAPH_TYPE): ApexOptions => {
  // TODO: Set this color dynamically from theme

  if (type === GRAPH_TYPE.INCREASING) {
    return { ...chartOptions, colors: ['#17B26A'] };
  }
  return { ...chartOptions, colors: ['#F04438'] };
};

export const sortArray = (
  array: { [key: string]: string }[],
  field: string,
  sortBy: 'asc' | 'desc',
  fieldType: 'text' | 'date'
) => {
  // Sorting using date
  if (fieldType === 'date') {
    return array.sort((a, b) => {
      if (sortBy === 'desc') {
        return new Date(b[field]) > new Date(a[field]) ? 1 : -1;
      }
      return new Date(b[field]) < new Date(a[field]) ? 1 : -1;
    });
  }

  // Sorting using normal text
  return array.sort((a, b) => {
    if (sortBy === 'desc') {
      return b[field] > a[field] ? 1 : -1;
    }
    return b[field] < a[field] ? 1 : -1;
  });
};

export function useEnterKeySubmit<TFormValues extends FieldValues>(
  handleSubmit: UseFormHandleSubmit<TFormValues>,
  onSubmit: SubmitHandler<TFormValues>
): void {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSubmit(onSubmit)();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleSubmit, onSubmit]);
}

export function generateUniqueId() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

  const randomPart = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');

  const uniqueId = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}${randomPart}`;
  return uniqueId;
}
