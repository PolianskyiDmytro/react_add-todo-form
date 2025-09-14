import { UserInfo } from '../UserInfo';
import { Todo } from '../../features/types';
import { User } from '../../features/types';

type Props = {
  todo: Todo;
  user?: User;
};

export const TodoInfo: React.FC<Props> = ({ todo, user }) => (
  <article
    data-id={todo.id}
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);
