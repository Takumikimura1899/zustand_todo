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

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>ToDoApp</h1>
      <section className={styles.articleSection}>
        <InputPlus onAdd={createTask} />
      </section>
      <section className={styles.articleSection}></section>
    </article>
  );
};
