import React, { useCallback, useState } from 'react';
import { useToDoStore } from '../../../data/stores/useToDoStore';

import { BiEdit } from 'react-icons/bi';
import { BsFillTrashFill } from 'react-icons/bs';

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
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles.inputTask}>
      <label className={styles.inputTaskLabel} htmlFor=''>
        <input
          type='checkbox'
          checked={checked}
          className={styles.inputTaskCheckbox}
          onChange={(e) => {
            setChecked(e.target.checked);
            if (e.target.checked) {
              onDone(id);
            }
          }}
        />
        <h3 className={styles.inputTaskTitle}>{title}</h3>
      </label>

      <BiEdit
        aria-label='Remove'
        size={20}
        color='#3f72af'
        className={styles.inputTaskRemove}
        onClick={() => {}}
      />

      <BsFillTrashFill
        aria-label='Edit'
        size={20}
        color='#3f72af'
        className={styles.inputTaskEdit}
        onClick={() => {
          if (confirm('本当に削除しても良いですか？')) {
            onRemoved(id);
          }
        }}
      />
    </div>
  );
};
