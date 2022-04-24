import React, { useEffect } from 'react';

import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputPlus } from '../components/InputTasks/InputPlus';

import styles from './index.module.scss';

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  const onAdd = (title: string) => {
    if (title) {
      createTask(title);
    }
  };

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>ToDoApp</h1>
      <section className={styles.articleSection}>
        <InputPlus onAdd={onAdd} />
      </section>
      <section className={styles.articleSection}>
        {!tasks.length && (
          <p className={styles.articleText}>タスクが存在していません</p>
        )}
      </section>
    </article>
  );
};
