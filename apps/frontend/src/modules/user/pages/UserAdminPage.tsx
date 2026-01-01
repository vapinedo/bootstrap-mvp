import { useUser } from '@modules/user';
import { Card } from '@shared/components';

export const UserAdminPage = () => {
	const { getAllUsers } = useUser();
	const { data, isLoading, error } = getAllUsers();

	return (
		<Card>
			<h2>Lista de Usuarios</h2>
			{isLoading && <div>Cargando usuarios...</div>}
			{error && <div>Error: {String((error as Error)?.message || error)}</div>}
			<ul>
				{data?.map((user) => (
					<li key={user.id}>{user.username} - {user.email}</li>
				))}
			</ul>
		</Card>
	);
};
