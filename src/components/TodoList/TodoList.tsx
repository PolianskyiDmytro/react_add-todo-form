import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../features/types';
import { User } from '../../features/types';

type Props = {
  todos: Todo[];
  users: User[];
};

export const TodoList: React.FC<Props> = ({ todos, users }) => (
  <section className="TodoList">
    {todos.map(todo => {
      const user =
        users?.find(currUser => currUser.id === todo.userId) || undefined;

      return <TodoInfo key={todo.id} todo={todo} user={user} />;
    })}
  </section>
);
