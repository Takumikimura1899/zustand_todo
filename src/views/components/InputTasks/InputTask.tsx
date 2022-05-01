import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useToDoStore } from '../../../data/stores/useToDoStore';

import { BiEdit } from 'react-icons/bi';
import { BsFillTrashFill } from 'react-icons/bs';
import { HiOutlineSaveAs } from 'react-icons/hi';

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
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(title);
  const editTitleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditMode) {
      editTitleInputRef?.current?.focus();
    }
  }, [isEditMode]);

  return (
    <div className={styles.inputTask}>
      <label className={styles.inputTaskLabel} htmlFor=''>
        <input
          type='checkbox'
          disabled={isEditMode}
          checked={checked}
          className={styles.inputTaskCheckBox}
          onChange={(e) => {
            setChecked(e.target.checked);
            if (e.target.checked) {
              setTimeout(() => {
                onDone(id);
              }, 300);
            }
          }}
        />
        {isEditMode ? (
          <input
            type='text'
            value={value}
            ref={editTitleInputRef}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onEdited(id, value);
                setIsEditMode(false);
              }
            }}
            className={styles.inputTaskEditTitle}
          />
        ) : (
          <h3 className={styles.inputTaskTitle}>{title}</h3>
        )}
      </label>

      {isEditMode ? (
        <HiOutlineSaveAs
          aria-label='save'
          size={20}
          color='#3f72af'
          className={styles.inputTaskSave}
          onClick={() => {
            onEdited(id, value);
          }}
        />
      ) : (
        <BiEdit
          aria-label='Remove'
          size={20}
          color='#3f72af'
          className={styles.inputTaskEdit}
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        />
      )}

      <BsFillTrashFill
        aria-label='Remove'
        size={20}
        color='#3f72af'
        className={styles.inputTaskRemove}
        onClick={() => {
          if (confirm('本当に削除しても良いですか？')) {
            onRemoved(id);
          }
        }}
      />
    </div>
  );
};
