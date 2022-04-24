import React, { useCallback, useState } from 'react';
import { useToDoStore } from '../../../data/stores/useToDoStore';

import { BsPlus } from 'react-icons/bs';

import styles from './InputTask.module.scss';

interface InputTaskProps {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, value: string) => void;
  onRemoved: (id: string) => void;
}

export const InputTask: React.FC<InputTaskProps> = ({
  id,
  title,
  onDone,
  onEdited,
  onRemoved,
}) => {
  return <div className={styles.inputTask}>{title}</div>;
};
